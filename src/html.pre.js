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
 * @param payload.resource The content resource
 */
function pre(payload) {
  payload.resource.time = `${new Date()}`;
  payload.resource.subHeadline = getSubheadline(payload.resource)
  payload.resource.image = getMainImage(payload.resource)
}

function getMainImage(resource) {
  headlineFound = false;
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
