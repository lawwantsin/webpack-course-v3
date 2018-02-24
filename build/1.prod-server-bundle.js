exports.ids = [1];
exports.modules = {

/***/ "./data recursive ^\\.\\/.*\\.md$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./link/bio.md": "./data/link/bio.md",
	"./link/post.md": "./data/link/post.md",
	"./link/post2.md": "./data/link/post2.md",
	"./zelda/bio.md": "./data/zelda/bio.md",
	"./zelda/post.md": "./data/zelda/post.md",
	"./zelda/post2.md": "./data/zelda/post2.md"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./data recursive ^\\.\\/.*\\.md$";

/***/ }),

/***/ "./data/link/bio.md":
/***/ (function(module, exports) {

module.exports = {"title":"About Link","author":"Link","__content":"<h1 id=\"long-ago-in-the-kingdom-of-hyrule\">Long Ago in the Kingdom of Hyrule</h1>\n<p>Our Hero wakes up. He is alone. He must find his sword.</p>\n"}

/***/ }),

/***/ "./data/link/post.md":
/***/ (function(module, exports) {

module.exports = {"title":"Day One: An Adventure Begins!","author":"Link","posterImage":"http://laws-articles.s3.amazonaws.com/link-article-cover.jpg","__content":"<p><img src=\"http://laws-articles.s3.amazonaws.com/article-link-1.jpg\" alt=\"\"></p>\n<p>Good morning. I&#39;m off on an adventure to rescue the Princess. I&#39;ll bring my sword because, it&#39;s dangerous to go into caves alone, and my sword counts as people.</p>\n<p>Someone gave me this map. I should keep it on me, like in the upper right-hand corner. Hyrule looks gigantic. I bet they&#39;ll have me mowing lawns for a while.</p>\n<p><img src=\"http://laws-articles.s3.amazonaws.com/article-link-2.jpg\" alt=\"\"></p>\n"}

/***/ }),

/***/ "./data/link/post2.md":
/***/ (function(module, exports) {

module.exports = {"title":"There's Rupees in them thar lawns","author":"Link","posterImage":"http://laws-articles.s3.amazonaws.com/link-article-cover-2.jpg","__content":"<p><img src=\"http://laws-articles.s3.amazonaws.com/article-link-3.jpg\" alt=\"\"></p>\n<p>I knew my sword was good for something. Why not earn a little extra money while on my very time sensitive adventure. No real rush tho. I hope Zelda has a few good books she can read.</p>\n<p>Who knew these things swords could be so heavy? I bet I could take on Ganon already, I&#39;m just sharpening it on this grass and Octoroks. I got em all running scared.</p>\n<p><img src=\"http://laws-articles.s3.amazonaws.com/article-link-4.jpg\" alt=\"\"></p>\n"}

/***/ }),

/***/ "./data/zelda/bio.md":
/***/ (function(module, exports) {

module.exports = {"title":"About Zelda","author":"Zelda","__content":"<h1 id=\"how-did-you-get-past-the-guards-\">How did you get past the guards?</h1>\n<p>Zelda wakes in a dark dungeon. Link has found her.</p>\n"}

/***/ }),

/***/ "./data/zelda/post.md":
/***/ (function(module, exports) {

module.exports = {"title":"Ganon is the Worst Host","author":"Zelda","posterImage":"http://laws-articles.s3.amazonaws.com/triforce-article-cover.jpg","__content":"<p><img src=\"http://laws-articles.s3.amazonaws.com/article-zelda-1.jpg\" alt=\"\"></p>\n<p>It sucks in here. I&#39;m trapped in Ganon&#39;s stinky old prison. The tri-force is just out of range. I can&#39;t feel it from here. I&#39;ll need to devise an escape plan. Something ingeniously magical.</p>\n<p>I&#39;m sure I&#39;ll think of something clever, but until then, I&#39;m going to think of my true love... Hyrule. I do hope she&#39;s doing okay out there. That someone brave is keeping her grass cut.</p>\n<p><img src=\"http://laws-articles.s3.amazonaws.com/article-zelda-2.jpg\" alt=\"\"></p>\n"}

/***/ }),

/***/ "./data/zelda/post2.md":
/***/ (function(module, exports) {

module.exports = {"title":"This lock is making me angry","author":"Zelda","posterImage":"http://laws-articles.s3.amazonaws.com/zelda-article-cover-2.jpg","__content":"<p><img src=\"http://laws-articles.s3.amazonaws.com/article-zelda-3.jpg\" alt=\"\"></p>\n<p>Okay this is getting to be a bore. This lock is watching me. I&#39;m sure of it. Perhaps Link will find me, perhaps not, but if I can just turn these hand cuffs into a sword, with my magic, I can make enough noise to get the guards to open the lock for me.</p>\n<p>Ah ha! I&#39;ve done it. Magic&#39;s working again. Tri-force must be near. Okay, now to make all the noise in the world. These guards have no idea what kind of Princess they&#39;re dealing with.</p>\n<p><img src=\"http://laws-articles.s3.amazonaws.com/article-zelda-4.jpg\" alt=\"\"></p>\n"}

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"minimize\":true}!./src/css/Article.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".Article{margin:100px auto}.Article .billboard{position:fixed;height:500px;width:100%;top:0;z-index:0;background-color:#111;border-bottom:4px solid #fff;background-size:cover;background-position:50%}.Article h1{box-sizing:border-box;position:relative;z-index:2;color:#fff;font-weight:100;font-size:4em;width:820px;padding-left:400px;padding-right:40px;text-align:right;margin:0 auto -13px;text-shadow:0 0 20px #000}", ""]);

// exports


/***/ }),

/***/ "./src/components/Article.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./src/css/Article.css");

var _NotFound = __webpack_require__("./src/components/NotFound.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  try {
    var MarkdownData = __webpack_require__("./data recursive ^\\.\\/.*\\.md$")("./" + props.site + "/" + props.params.slug + ".md");
    var billboardStyle = {
      backgroundImage: "url(" + MarkdownData.posterImage + ")"
    };
    return _react2.default.createElement(
      "div",
      { className: "Article" },
      _react2.default.createElement("div", { className: "billboard", style: billboardStyle }),
      _react2.default.createElement(
        "h1",
        null,
        MarkdownData.title
      ),
      _react2.default.createElement("div", {
        className: "content",
        dangerouslySetInnerHTML: { __html: MarkdownData.__content }
      })
    );
  } catch (error) {
    return _react2.default.createElement(_NotFound2.default, null);
  }
};

/***/ }),

/***/ "./src/css/Article.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"minimize\":true}!./src/css/Article.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-2!./Article.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-2!./Article.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

};;