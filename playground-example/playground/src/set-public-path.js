import { setPublicPath } from "systemjs-webpack-interop";
/* This dynamically sets the webpack public path so that code splits work properly. See related:
 * https://github.com/joeldenning/systemjs-webpack-interop#what-is-this
 * https://webpack.js.org/guides/public-path/#on-the-fly
 * https://single-spa.js.org/docs/faq/#code-splits
 */

setPublicPath("@sherlokk/to-do-app");
// http://single-spa-playground.org/playground/instant-test?name=@sherlokk/to-do-app&url=8500
