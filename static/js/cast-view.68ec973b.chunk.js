"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[81],{191:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var a=e(439),r=e(791),i=e(689),c=e(861),o=e(687),p=e.n(o);function s(){return(s=(0,c.Z)(p().mark((function n(t){var e,a,r,i;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"6a2a388e1c2ace081292a5fe16cb0ea9",e="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),a="?api_key=".concat("6a2a388e1c2ace081292a5fe16cb0ea9","&language=en-US"),n.next=5,fetch("".concat(e).concat(a));case 5:return r=n.sent,n.next=8,r.json();case 8:return i=n.sent,n.abrupt("return",i);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var u,d,h,m,f,l=function(n){return s.apply(this,arguments)},x=e(7),g=e.n(x),v=e.p+"static/media/actor.015401e8db7d127faefa.png",w=e(70),Z=e(168),b=e(686),j=e(624),k=b.Z.ul(u||(u=(0,Z.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n"]))),y=b.Z.li(d||(d=(0,Z.Z)(["\n  @media (max-width: 767px) {\n    margin-bottom: 50px;\n  }\n\n  @media (min-width: 768px) {\n    width: calc((100% - 10px * 8) / 4);\n    margin: 10px;\n  }\n"]))),_=b.Z.div(h||(h=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  height: 375px;\n  margin-bottom: 15px;\n"]))),C=b.Z.img(m||(m=(0,Z.Z)(["\n  width: 250px;\n"]))),N=b.Z.p(f||(f=(0,Z.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ",";\n"])),j.NN),O=e(184);function S(n){var t=n.actors;return(0,O.jsx)(w.Z,{isPadding:!0,children:(0,O.jsx)(k,{children:t.map((function(n){var t=n.id,e=n.name,a=n.photo;return(0,O.jsxs)(y,{children:[(0,O.jsx)(_,{children:(0,O.jsx)(C,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):v,alt:e})}),(0,O.jsx)(N,{children:e})]},t)}))})})}S.prototype={actors:g().arrayOf(g().shape({id:g().number,name:g().string,photo:g().string})).isRequired};var U=S;var q=function(){var n=(0,i.UO)().movieId,t=(0,r.useState)(null),e=(0,a.Z)(t,2),c=e[0],o=e[1];return(0,r.useEffect)((function(){l(n).then((function(n){var t=n.cast,e=[];t.map((function(n){var t={id:n.id,name:n.name,photo:n.profile_path};return e.push(t)})),o(e)}))}),[n]),c&&(0,O.jsx)(U,{actors:c})}}}]);
//# sourceMappingURL=cast-view.68ec973b.chunk.js.map