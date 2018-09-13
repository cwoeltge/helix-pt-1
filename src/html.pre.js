/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * The 'pre' function that is executed before the HTML is rendered
 * @param payload The current payload of processing pipeline
 * @param payload.content The content resource
 */
function pre(payload) {
  payload.content.time = `${new Date()}`;
  payload.content.subHeadline = getSubheadline(payload.content)
  payload.content.image = getMainImage(payload.content)
  splitMain(payload.content)
  splitSections(payload.content)
}

function splitSections(resource) {
  sectionCounter = 0
  resource.sections = []
  resource.images = []

  resource.sections[sectionCounter] = { elements: [], images: []};

  resource.children.forEach(function (child) {
    if(isHeadline(child)) {
      if(resource.sections[sectionCounter].headline !== undefined) {
        sectionCounter++;
        resource.sections[sectionCounter] = { elements: [], images: []};
      }
      resource.sections[sectionCounter].headline = child;
    } else {
      if (isImage(child)) {
        resource.sections[sectionCounter].images.push(child);
        resource.images.push(child);
      }
      resource.sections[sectionCounter].elements.push(child);
    }
  });
  resource.header = resource.sections[0]
}

// that certainly needs work. should work with mdast instead
function isHeadline(child) {
  return child.startsWith('<h1') || child.startsWith('<h2') 
}

// that certainly needs work. should work with mdast instead
function isImage(child) {
  return (child.indexOf('<img ') > -1)
}

function splitMain(resource) {
  resource.header = []
  resource.main = []
  resource.children.some(function (child) {
    if (resource.header.length<4) {
      resource.header.push(child)    
    } else {
      resource.main.push(child)
    }
  });
}

function getMainImage(resource) {
  returnValue = "";
  resource.mdast.children.some(function (child) {
    if (child.type == 'paragraph' && child.children[0].type == 'image') {
      returnValue = child.children[0]
      return true
    }
  });
  return returnValue;
}

function getSubheadline(resource) {
  headlineFound = false;
  returnValue = "";
  resource.mdast.children.some(function (child) {
    if (headlineFound && child.type == 'paragraph') {
      returnValue = child.children[0].value
      return true
    }

    if (child.type == 'heading' && child.depth == 1) {
      headlineFound = true;
    }
  });
  return returnValue;}

module.exports.pre = pre;
