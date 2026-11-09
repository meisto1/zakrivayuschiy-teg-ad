// The official AD tests use Page.$x, which was removed in Puppeteer 22.
// Restore the same XPath lookup through the supported selector API.
const { Page } = require(require.resolve('puppeteer', {
  paths: ['/project/node_modules/lib-verstka-tests'],
}));

if (typeof Page.prototype.$x !== 'function') {
  Page.prototype.$x = function (expression) {
    return this.$$('xpath/' + expression);
  };
}
