// ==UserScript==
// @name         amazon improvements
// @namespace    http://nicer.info
// @version      0.2
// @description  support visited links for amazon
// @author       Vid
// @match        https://www.amazon.ca/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function(doc) {

  const style = document.createElement("style");
  style.setAttribute("media", "screen")
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  style.sheet.insertRule("a:visited { color: purple !important }", 0);
    // remove suggested "shoveled" in their gracious language
      setTimeout(() => {
          style.sheet.insertRule("#my-feature { display: none !important }", 1); // doesn't seem to work, so
          document.getElementById('rhf-shoveler').outerHTML = '';
        // it's added after the document settles
      }, 3000);
    // show visited by removing qid
  const anchors = document.getElementsByClassName('s-access-detail-page');
  for (var i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      if (anchor.href.includes('qid')) {
          anchor.href = anchor.href.replace(/qid=\d+/, 'qid=0');
      }
  }

})(document);
