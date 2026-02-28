/* -----------------------------------------------------------------------------
CSS imports & Polyfill
----------------------------------------------------------------------------- */
import '../css/main.css';
import '../css/ghost.css';
import '../css/theme.css';

import 'vite/modulepreload-polyfill'

/* -----------------------------------------------------------------------------
Alpine Js
----------------------------------------------------------------------------- */
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

/* -----------------------------------------------------------------------------
Ghost
----------------------------------------------------------------------------- */
import { getPosts } from './ghost';
window.getPosts = getPosts

/* -----------------------------------------------------------------------------
Theme functions
----------------------------------------------------------------------------- */
import { 
  copyURL,
  getScrollPercent
} from './utils';

window.copyURL = copyURL
window.getScrollPercent = getScrollPercent

/* -----------------------------------------------------------------------------
Dropdown
----------------------------------------------------------------------------- */
import { 
  initDropdown, 
  toggleDropdown, 
  closeDropdowns 
} from './dropdown';
window.initDropdown = initDropdown
window.toggleDropdown = toggleDropdown
window.closeDropdowns = closeDropdowns

/* -----------------------------------------------------------------------------
Reframe
----------------------------------------------------------------------------- */
import reframe from './reframe';
window.Reframe = reframe
const embedSources = [
  '.ghost-content iframe[src*="youtube.com"]',
  '.ghost-content iframe[src*="youtube-nocookie.com"]',
  '.ghost-content iframe[src*="player.vimeo.com"]',
  '.ghost-content iframe[src*="kickstarter.com"][src*="video.html"]',
  '.ghost-content object',
  '.ghost-content embed',
];
Reframe(document.querySelectorAll(embedSources.join(',')));

/* -----------------------------------------------------------------------------
Zoom
----------------------------------------------------------------------------- */
import { imageZoom } from './zoom';
const imageSources = [
  '.ghost-content .kg-image-card img',
  '.ghost-content .kg-gallery-card img',
] 
if (THEME_CONFIG.ENABLE_IMAGE_ZOOM) {
  const zoomImages = document.querySelectorAll(imageSources.join(','));
  zoomImages.forEach(image => {
    image.setAttribute('data-action', 'zoom');
  });
  imageZoom().init({ 
    selector: imageSources.join(','), 
    offset: 0 
  });
}
