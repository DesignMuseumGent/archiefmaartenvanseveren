(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,5],{295:function(e,t,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("71253400",content,!0,{sourceMap:!1})},296:function(e,t,n){e.exports=function(){function e(t,n,r){function o(i,l){if(!n[i]){if(!t[i]){if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};t[i][0].call(p.exports,(function(e){return o(t[i][1][e]||e)}),p,p.exports,e,t,n,r)}return n[i].exports}for(var u=!1,i=0;i<r.length;i++)o(r[i]);return o}return e}()({1:[function(e,t,n){var r,o;r=e("mergesort"),o=e("find-insert-index"),t.exports=function(){"use strict";var e;function t(e){return function(){return e}}function n(e){e=e||{},this.config=e,this.config.childrenPropertyName=e.childrenPropertyName||"children",this.config.modelComparatorFn=e.modelComparatorFn}function l(e,t){return t.parent=e,e.children.push(t),t}function c(e,t){this.config=e,this.model=t,this.children=[]}function d(e){return"function"==typeof e.config.modelComparatorFn}function h(e,t,n){var r;if(!(t instanceof c))throw new TypeError("Child must be of type Node.");if(t.parent=e,e.model[e.config.childrenPropertyName]instanceof Array||(e.model[e.config.childrenPropertyName]=[]),d(e))r=o(e.config.modelComparatorFn,e.model[e.config.childrenPropertyName],t.model),e.model[e.config.childrenPropertyName].splice(r,0,t.model),e.children.splice(r,0,t);else if(void 0===n)e.model[e.config.childrenPropertyName].push(t.model),e.children.push(t);else{if(n<0||n>e.children.length)throw new Error("Invalid index.");e.model[e.config.childrenPropertyName].splice(n,0,t.model),e.children.splice(n,0,t)}return t}function f(){var t={};if(1===arguments.length?"function"==typeof arguments[0]?t.fn=arguments[0]:t.options=arguments[0]:2===arguments.length?"function"==typeof arguments[0]?(t.fn=arguments[0],t.ctx=arguments[1]):(t.options=arguments[0],t.fn=arguments[1]):(t.options=arguments[0],t.fn=arguments[1],t.ctx=arguments[2]),t.options=t.options||{},t.options.strategy||(t.options.strategy="pre"),!e[t.options.strategy])throw new Error("Unknown tree walk strategy. Valid strategies are 'pre' [default], 'post' and 'breadth'.");return t}return e={},n.prototype.parse=function(e){var i,t,n;if(!(e instanceof Object))throw new TypeError("Model must be of type object.");if(n=new c(this.config,e),e[this.config.childrenPropertyName]instanceof Array)for(this.config.modelComparatorFn&&(e[this.config.childrenPropertyName]=r(this.config.modelComparatorFn,e[this.config.childrenPropertyName])),i=0,t=e[this.config.childrenPropertyName].length;i<t;i++)l(n,this.parse(e[this.config.childrenPropertyName][i]));return n},c.prototype.isRoot=function(){return void 0===this.parent},c.prototype.hasChildren=function(){return this.children.length>0},c.prototype.addChild=function(e){return h(this,e)},c.prototype.addChildAtIndex=function(e,t){if(d(this))throw new Error("Cannot add child at index when using a comparator function.");return h(this,e,t)},c.prototype.setIndex=function(e){if(d(this))throw new Error("Cannot set node index when using a comparator function.");if(this.isRoot()){if(0===e)return this;throw new Error("Invalid index.")}if(e<0||e>=this.parent.children.length)throw new Error("Invalid index.");var t=this.parent.children.indexOf(this);return this.parent.children.splice(e,0,this.parent.children.splice(t,1)[0]),this.parent.model[this.parent.config.childrenPropertyName].splice(e,0,this.parent.model[this.parent.config.childrenPropertyName].splice(t,1)[0]),this},c.prototype.getPath=function(){var path=[];return function e(t){path.unshift(t),t.isRoot()||e(t.parent)}(this),path},c.prototype.getIndex=function(){return this.isRoot()?0:this.parent.children.indexOf(this)},c.prototype.walk=function(){var t;t=f.apply(this,arguments),e[t.options.strategy].call(this,t.fn,t.ctx)},e.pre=function e(t,n){var i,r,o;for(o=t.call(n,this),i=0,r=this.children.length;i<r;i++){if(!1===o)return!1;o=e.call(this.children[i],t,n)}return o},e.post=function e(t,n){var i,r;for(i=0,r=this.children.length;i<r;i++)if(!1===e.call(this.children[i],t,n))return!1;return t.call(n,this)},e.breadth=function(e,t){var n=[this];!function r(){var i,o,l;if(0!==n.length){for(i=0,o=(l=n.shift()).children.length;i<o;i++)n.push(l.children[i]);!1!==e.call(t,l)&&r()}}()},c.prototype.all=function(){var n,r=[];return(n=f.apply(this,arguments)).fn=n.fn||t(!0),e[n.options.strategy].call(this,(function(e){n.fn.call(n.ctx,e)&&r.push(e)}),n.ctx),r},c.prototype.first=function(){var n,r;return(n=f.apply(this,arguments)).fn=n.fn||t(!0),e[n.options.strategy].call(this,(function(e){if(n.fn.call(n.ctx,e))return r=e,!1}),n.ctx),r},c.prototype.drop=function(){var e;return this.isRoot()||(e=this.parent.children.indexOf(this),this.parent.children.splice(e,1),this.parent.model[this.config.childrenPropertyName].splice(e,1),this.parent=void 0,delete this.parent),this},n}()},{"find-insert-index":2,mergesort:3}],2:[function(e,t,n){t.exports=function(){"use strict";function e(e,t,n){var i,r;for(i=0,r=t.length;i<r&&!(e(t[i],n)>0);i++);return i}return e}()},{}],3:[function(e,t,n){t.exports=function(){"use strict";function e(n,r){var o,l,c=r.length;return c>=2?(o=r.slice(0,c/2),l=r.slice(c/2,c),t(n,e(n,o),e(n,l))):r.slice()}function t(e,t,n){for(var r=[],o=t.length,l=n.length;o>0&&l>0;)e(t[0],n[0])<=0?(r.push(t.shift()),o--):(r.push(n.shift()),l--);return o>0?r.push.apply(r,t):r.push.apply(r,n),r}return e}()},{}]},{},[1])(1)},297:function(e,t,n){"use strict";n.r(t);n(21),n(150),n(296);var r={name:"node",props:{node:Object,search:!1},computed:{hasOnlyLeafChilds:function(){if(this.node.children.length>1){var e=!0;for(var t in this.node.children)if(0==this.node.children[t].model.isLeaf){e=!1;break}return e}return!1},level:function(){return this.node.model.level+1}},methods:{toggleChildren:function(e){this.showChildren=!this.showChildren}},data:function(){return{showChildren:!(this.node.model&&this.node.model.level>=2&&!0!==this.search)}}},o=(n(298),n(32)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return!e.node.model||!0===e.node.model.found&&!1===e.node.model.found?e._e():n("li",{class:{"has-only-leaf-childs":e.hasOnlyLeafChilds,hidden:0==e.node.model.found}},[n("p",{class:"h"+e.level},[n("NuxtLink",{attrs:{to:"/"+e.node.model.id}},[e._v(e._s(e.node.model.detail.title))]),e._v(" "),e.node.model.detail.relatedObjects.length?n("span",{staticClass:"object-count"},[e._v(e._s(e.node.model.detail.relatedObjects.length))]):e._e(),e._v(" "),e.node.model.detail.reproductions.length?n("span",{staticClass:"image-count"},[e._v(e._s(e.node.model.detail.reproductions.length))]):e._e(),e._v(" "),e.node.children&&e.node.children.length?n("a",{staticClass:"toggle",on:{click:e.toggleChildren}},[e.showChildren?n("span",[e._v(e._s(e.$t("hide")))]):n("span",[e._v(e._s(e.$t("show")))])]):e._e()],1),e._v(" "),e.node.children&&e.node.children.length&&e.showChildren?n("div",[n("ul",e._l(e.node.children,(function(t){return n("node",{key:e.node.id,attrs:{node:t,search:e.search}})})),1)]):e._e()])}),[],!1,null,null,null);t.default=component.exports},298:function(e,t,n){"use strict";n(295)},299:function(e,t,n){var r=n(58)(!1);r.push([e.i,'.hidden{display:none!important}.has-only-leaf-childs li{display:inline-block}.tree-list ul .has-only-leaf-childs ul{padding-bottom:1rem}.has-only-leaf-childs ul li p:after{content:" • ";margin:0 1rem;color:#777}.has-only-leaf-childs ul li:last-child p:after{content:""}.toggle{color:#777;font-size:.8rem;border:1px solid #ccc;text-transform:uppercase;padding:0 .25rem;cursor:pointer;border-radius:3px;font-weight:400;margin-top:-1px}.toggle:hover{background-color:#fff}.image-count,.object-count{background-color:#777;border-radius:3px;padding:0 .25rem;margin-left:.5rem;font-size:.8rem;color:#fff}.object-count{background-color:#000}.object-count:before{background-image:url(/img/dmg.svg)}.image-count:before,.object-count:before{content:" ";display:inline-block;background-size:contain;background-repeat:no-repeat;background-position:50%;height:.6rem;width:.75rem}.image-count:before{background-image:url(/img/image.svg)}',""]),e.exports=r},300:function(e,t,n){"use strict";n.r(t);var r=n(297),o={props:{treeData:Object,search:!1},components:{NodeTree:r.default}},l=n(32),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree"},[n("ul",{staticClass:"tree-list"},[n("node-tree",{attrs:{node:e.treeData,search:e.search}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NodeTree:n(297).default})},305:function(e,t,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("30c39f0c",content,!0,{sourceMap:!1})},310:function(e,t,n){"use strict";n(305)},311:function(e,t,n){var r=n(58)(!1);r.push([e.i,".tree-list{margin:0;padding:0}.tree-list li{margin:0;list-style:none}.tree-list ul{margin:0;border-left:1px solid #ccc;display:block;overflow:hidden;padding:.5rem 0 0 1rem}.tree-list ul li{padding:0;list-style:none;clear:both}",""]),e.exports=r},331:function(e,t,n){"use strict";n.r(t);n(36),n(26),n(40),n(14),n(52),n(35),n(53);var r=n(19),o=n(5),l=(n(39),n(300)),c=n(296),d=n.n(c);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$treeModel,n=e.$content,t.next=3,n("schema").fetch();case 3:return r=t.sent,t.abrupt("return",{schema:r});case 5:case"end":return t.stop()}}),t)})))()},components:{Tree:l.default},data:function(){return{tree:{}}},mounted:function(){var e=(new d.a).parse(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.schema));this.tree=e}},m=f,y=(n(310),n(32)),component=Object(y.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"page-title"},[e._v(e._s(e.$t("schema.title")))]),e._v(" "),n("p",{staticClass:"lead"},[e._v(e._s(e.$t("schema.lead")))]),e._v(" "),n("p",[e._v(e._s(e.$t("schema.text")))]),e._v(" "),n("tree",{attrs:{"tree-data":e.tree,search:!1}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Tree:n(300).default})}}]);