import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  // load banner as fragment
  const bannerMeta = getMetadata('eds-banner');
  // console.log("a"+bannerMeta);
  const bannerPath = bannerMeta ? new URL(bannerMeta, window.location).pathname : '/eds-banner';
  // console.log("b"+bannerPath);
  const fragment = await loadFragment(bannerPath);
  // console.log("c"+fragment)

  // decorate banner DOM
  block.textContent = '';
  const banner = document.createElement('div');
  while (fragment.firstElementChild) banner.append(fragment.firstElementChild);
  // console.log("d"+banner)
  block.append(banner);
}
