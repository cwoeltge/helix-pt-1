// create parallax effect in hero area

export function parallaxHero() {
  const heroHl = document.getElementById('heroHl');
  const heroImg =  document.getElementById('heroImg');
  const heroHeight = heroImg.offsetHeight;
  const screenTopMax = 150;
  
  window.addEventListener( 'scroll', function() {
    // make sure it won't translate further than the hero area
    var top;
    if (window.scrollY < screenTopMax) {
      top = window.scrollY;
    } else {
      top = screenTopMax;
    }
  
    var scrolled = (top / heroHeight) + 1,
    heroHlWidth = heroHl.offsetWidth,
    transformValue = 'scale('+ scrolled +')',
    translateValue = 'translate3d(' + -heroHlWidth/2 + 'px, '+ top + 'px, 0px)';

    heroImg.style.WebkitTransform = transformValue;
    heroImg.style.MozTransform = transformValue;
    heroImg.style.OTransform = transformValue;
    heroImg.style.transform = transformValue; 
    
    heroHl.style.transform = translateValue;

  }, false);
}
