// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

// /**
//  * loads and decorates the footer
//  * @param {Element} block The footer block element
//  */
// export default async function decorate(block) {
//   // load footer as fragment
//   const footerMeta = getMetadata('eds-banner');
//   console.log("a"+footerMeta);
//   const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/eds-banner';
//   console.log("b"+footerPath);
//   const fragment = await loadFragment(footerPath);
//   console.log("c"+fragment)

//   // decorate footer DOM
//   block.textContent = '';
//   const footer = document.createElement('div');
//   while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
//   console.log("d"+footer)
//   block.append(footer);
// }
