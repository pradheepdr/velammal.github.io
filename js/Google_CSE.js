/* 
    Theme Name: Velammal Institute of Technology(Velammal ITech).
	Website Url: http://www.velammalitech.edu.in/
	Description: iTech India Pvt Ltd Website Design - December 2012.
	Version: 1.0
	Author: MuthamilSelvan S (MSM38), iTech India Pvt Ltd.
	Author URL: http://www.iTech-India.com/
	*/

//Script for styles of Google Custom Search Engine Box
                   
(function() {
var f = document.getElementById('cse-search-box');
if (!f) {
f = document.getElementById('searchbox_demo');
}
if (f && f['q']) {
var q = f['q'];
var n = navigator;
var l = location;
var su = function () {
var u = document.createElement('input');
var v = document.location.toString();
var existingSiteurl = /(?:[?&]siteurl=)([^&#]*)/.exec(v);
if (existingSiteurl) {
v = decodeURI(existingSiteurl[1]);
}
var delimIndex = v.indexOf('://');
if (delimIndex >= 0) {
v = v.substring(delimIndex + '://'.length, v.length);
}
u.name = 'siteurl';
u.value = v;
u.type = 'hidden';
f.appendChild(u);
};
if (n.appName == 'Microsoft Internet Explorer') {
var s = f.parentNode.childNodes;
for (var i = 0; i < s.length; i++) {
        if (s[i].nodeName == 'SCRIPT' &&
            s[i].attributes['src'] &&
            s[i].attributes['src'].nodeValue == unescape('index.html\x2F\x2Fwww.google.com\x2Fcse\x2Fbrand?form=cse-search-box\x26lang=en')) {
          su();
          break;
        }
      }
    } else {
      su();
    }

    
    if (n.platform == 'Win32') {
      q.style.cssText = 'border: 0px solid #7a7a7a; padding: 2px; width:150px; color:#fff;  -moz-border-radius: 2px; -webkit-border-radius: 2px; border-radius: 2px;';
    }

    
    if (window.history.navigationMode) {
      window.history.navigationMode = 'compatible';
    }

    var b = function() {
      if (q.value == '') {
        q.style.background = 'url(images/googlecse-bg.gif) center no-repeat'; 
      }
    };

    var f = function() {
      q.style.background = '#414141';
    };

    q.onfocus = f;
    q.onblur = b;

    
    if (!/[&?]q=[^&]/.test(l.search)) {
      b();
    }
  }
})();
