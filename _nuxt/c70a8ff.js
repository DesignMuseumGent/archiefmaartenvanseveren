(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{308:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("dc9f144c",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";r(308)},317:function(t,e,r){var o=r(58)(!1);o.push([t.i,'.ancestors-list li{margin-bottom:0}.ancestors-list{list-style:none;padding:0}.desc{color:#999;font-size:.9rem;vertical-align:top}.level-1{margin-left:1rem}.level-2{margin-left:2rem}.level-3{margin-left:3rem}.level-4{margin-left:4rem}.level-5{margin-left:5rem}.level-6,.level-7{margin-left:6rem}.here:before{content:"☉ ";color:red}table{vertical-align:top;border-spacing:0}td ul{margin:0}.record-navigation{border-bottom:1px solid #cbcbcb;margin:-1.2rem -1.2rem 2rem;background-color:#fff;padding:1rem}.record-navigation p{margin:0}.record-navigation .next,.record-navigation .prev{padding:.5rem}@media only screen and (min-width:1024px){.record-navigation .next{text-align:right}}.title{text-decoration:underline;font-weight:700}.horizontal-scroll{display:flex;overflow-x:auto;padding-bottom:2rem}.horizontal-scroll-item{min-width:300px;padding-right:1rem;border-right:1px solid #ccc;margin-right:1rem}',""]),t.exports=o},335:function(t,e,r){"use strict";r.r(e);var o=r(5),n=(r(39),{head:function(){return{title:this.record.title,meta:[{hid:"description",name:"description",content:"Home page description"}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,l,d,v,_,m,h,f,C,x,$;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(element,t){if(element.id==t)return element;if(null!=element.children){var i,e=null;for(i=0;null==e&&i<element.children.length;i++)e=c(element.children[i],t);return e}return null},r=t.$content,o=t.params,n=t.error,l="",e.next=5,r("schema").fetch().catch((function(t){n({statusCode:404,message:"Page not found"})}));case 5:return d=e.sent,e.next=8,r("order").fetch().catch((function(t){n({statusCode:404,message:"Page not found"})}));case 8:return v=e.sent,_=v.items.indexOf(o.record),m=v.items[_>0?_-1:v.items.length-1],h=v.items[_<v.items.length-1?_+1:0],f=c(d,m),C=c(d,h),l=c(d,o.record),x=l.children,$=l.level,l=l.detail,e.abrupt("return",{children:x,record:l,previous:f,next:C,level:$});case 19:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=[];for(var e in this.record.reproductions)t.push({type:"image",url:this.record.reproductions[e].url});t.length>0&&OpenSeadragon({id:"openseadragon",tileSources:t,prefixUrl:"/img/",sequenceMode:!0,sequenceControlAnchor:2,navigationControlAnchor:4,showHomeControl:!1})}}),c=(r(316),r(32)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.record?r("div",[r("div",{staticClass:"record-navigation"},[r("div",{staticClass:"grid"},[r("div",{staticClass:"grid-col prev"},[r("p",{staticStyle:{position:"relative"}},[t._v("\n          ← "+t._s(t.$t("record.previous"))),r("br"),t._v(" "),r("span",{staticClass:"title"},[t._v(t._s(t.previous.detail.title))]),t._v(" "),r("NuxtLink",{staticClass:"ghost",attrs:{to:t.previous.id}})],1)]),t._v(" "),r("div",{staticClass:"grid-col next"},[r("p",{staticStyle:{position:"relative"}},[t._v("\n          "+t._s(t.$t("record.next"))+"→"),r("br"),t._v(" "),r("span",{staticClass:"title"},[t._v(t._s(t.next.detail.title))]),t._v(" "),r("NuxtLink",{staticClass:"ghost",attrs:{to:t.next.id}})],1)])])]),t._v(" "),r("div",{staticClass:"grid"},[r("div",{staticClass:"grid-col"},[r("h1",{staticClass:"page-title"},[t._v(t._s(t.record.title)+" "),r("span",[t._v(t._s(t.record.temporalCoverage))])])]),t._v(" "),r("div",{staticClass:"grid-col"},[t.record.reproductions.length>0?r("p",{staticClass:"muted",staticStyle:{"text-align":"right"}},[t._v(t._s(t.record.reproductions.length)+" "+t._s(t.$t("record.digitized"))+" "),1==t.record.reproductions.length?r("span",[t._v(t._s(t.$t("record.image")))]):r("span",[t._v(t._s(t.$t("record.images")))])]):t._e()])]),t._v(" "),this.record.reproductions.length>0?r("div",{staticStyle:{width:"100%",height:"40vh"},attrs:{id:"openseadragon"}}):t._e(),t._v(" "),r("div",{staticClass:"grid"},[r("div",{staticClass:"grid-col"},[r("p",{staticClass:"module-title"},[t._v(t._s(t.$t("record.more")))]),t._v(" "),r("table",[r("tbody",[r("tr",[r("td",{staticClass:"desc"},[t._v(t._s(t.$t("record.materialExtent")))]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.record.materialExtent)}})]),t._v(" "),r("tr",[r("td",{staticClass:"desc"},[t._v(t._s(t.$t("record.scopeAndContent")))]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.record.scopeAndContent)}})]),t._v(" "),r("tr",[r("td",{staticClass:"desc"},[t._v(t._s(t.$t("record.temporalCoverage")))]),t._v(" "),r("td",[t._v(t._s(t.record.temporalCoverage))])]),t._v(" "),r("tr",[r("td",{staticClass:"desc"},[t._v(t._s(t.$t("record.genre")))]),t._v(" "),r("td",[t._v(t._s(t.record.genre))])]),t._v(" "),r("tr",[r("td",{staticClass:"desc"},[t._v(t._s(t.$t("record.numbers")))]),t._v(" "),r("td",[r("ul",t._l(t.record.alternativeNumbers,(function(e){return r("li",[t._v("\n              "+t._s(e.type)+" "),r("code",[t._v(t._s(e.number))])])})),0)])])])])]),t._v(" "),t.record.itemLocation||t.record.relatedObjects.length>0?r("div",{staticClass:"grid-col"},[r("p",{staticClass:"module-title"},[t._v(t._s(t.$t("record.location")))]),t._v(" "),t.record.itemLocation?r("div",["De Zwarte Doos"==t.record.itemLocation.location?r("p",[t._v("\n          "+t._s(t.$t("record.locatedIn"))+" "),r("strong",[t._v(t._s(t.$t("record.dzd")))]),t._v("."),r("br"),t._v(" "),"Niet ter inzage."!==t.record.conditionsOfAccess?r("span",[t._v(" "+t._s(t.$t("record.depotnumbers"))+"\n          "),r("code",{domProps:{innerHTML:t._s(t.record.itemLocation.notes)}})]):r("span",[t._v(t._s(t.$t("record.notAccessable")))]),r("br"),t._v(" "),r("NuxtLink",{attrs:{to:"/dezwartedoos"}},[t._v(t._s(t.$t("record.moreInfo")))])],1):t._e()]):t._e(),t._v(" "),t.record.relatedObjects.length>0?r("div",[r("p",[t._v(t._s(t.$t("record.isPartOf"))+" "),r("strong",[t._v(t._s(t.$t("record.dmg")))]),t._v(" "+t._s(t.$t("record.objectNumbers"))+"\n          "),t._l(t.record.relatedObjects,(function(e){return r("code",[t._v("\n            "+t._s(e.reference)+"\n          ")])}))],2),t._v(" "),r("NuxtLink",{attrs:{to:"/designmuseumgent"}},[t._v(t._s(t.$t("record.moreInfo")))])],1):t._e()]):r("div",{staticClass:"grid-col"},[r("p",{staticClass:"module-title"},[t._v(t._s(t.$t("record.content")))]),t._v("\n      "+t._s(t.$t("record.existsOf"))+"\n      "),r("ul",t._l(t.children,(function(e){return r("li",[r("NuxtLink",{attrs:{to:e.id}},[t._v(t._s(e.detail.title))])],1)})),0)]),t._v(" "),t.level>=1?r("div",{staticClass:"grid-col"},[r("p",{staticClass:"module-title"},[t._v(t._s(t.$t("record.structure")))]),t._v(" "),r("ul",{staticClass:"ancestors-list"},[t._l(t.record.ancestors,(function(e,o){return r("li",{class:"level-"+o},[r("NuxtLink",{attrs:{to:"/"+e.id}},[t._v(t._s(e.title)+" ")])],1)})),t._v(" "),r("li",{staticClass:"here",class:"level-"+t.record.ancestors.length},[t._v(t._s(t.record.title)),r("br"),r("span",{staticClass:"muted"},[t._v(t._s(t.$t("record.here")))])])],2),t._v(" "),r("p",[r("NuxtLink",{staticClass:"btn btn-primary",attrs:{to:"/archiefschema"}},[t._v(t._s(t.$t("record.fullScheme")))])],1)]):t._e()]),t._v(" "),t.record.relatedArchiveItems.length>0?r("div",{staticClass:"related-items"},[r("p",{staticClass:"module-title"},[t._v("Gerelateerde items")]),t._v(" "),r("div",{staticClass:"horizontal-scroll"},t._l(t.record.relatedArchiveItems,(function(e){return r("div",{staticClass:"horizontal-scroll-item"},[r("NuxtLink",{attrs:{to:"/"+e.identifier}},[t._v(t._s(e.title))])],1)})),0)]):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);