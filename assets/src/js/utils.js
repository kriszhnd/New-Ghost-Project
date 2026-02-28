/* -----------------------------------------------------------------------------
* copyURL
----------------------------------------------------------------------------- */
export function copyURL(src, str) {
  navigator.clipboard.writeText(str);
  src.querySelector('span').innerHTML = src.getAttribute('data-success')
  src.classList.add('text-success', '!border-success')

  src.onmouseleave = function() { 
    setTimeout(function(){
      src.querySelector('span').innerHTML = src.getAttribute('data-label')
      src.classList.remove('text-success', '!border-success')
    }, 1000); 
  }
}

/* -----------------------------------------------------------------------------
* getScrollPercent
----------------------------------------------------------------------------- */
export function getScrollPercent() {
  const h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
  return Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}