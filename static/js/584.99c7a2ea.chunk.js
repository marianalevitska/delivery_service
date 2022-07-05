"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[584],{3584:function(r,e,t){t.r(e),t.d(e,{default:function(){return F}});var n=t(6119),a=t(1413),s=t(5861),c=t(885),o=t(7757),i=t.n(o),u=t(2791),l=t(5048),d=t(5636),p={img_seller:"shopItem_img_seller__WVXvQ",seller_title:"shopItem_seller_title__T8oFC",active_seller:"shopItem_active_seller__V9Kek"},f=t(184),h=function(r){var e=r.name,t=r.avatar,n=r.id,a=(0,l.I0)(),s=(0,l.v9)((function(r){return r.shops.activeId}),l.wU),c=(0,u.useCallback)((function(r){a((0,d.HZ)(r))}),[a]);return(0,f.jsxs)("div",{className:function(r){return s===r?p.active_seller:p.shopItem}(n),onClick:function(){return c(n)},children:[(0,f.jsx)("img",{src:t,alt:"".concat(e," logo"),className:p.img_seller}),(0,f.jsx)("h3",{className:p.seller_title,children:e})]})},_=t(3760),v=t(4569),m=t.n(v)().create({baseURL:"https://62c004aad40d6ec55cc963d5.mockapi.io/api/v1/Shops"}),x=function(){var r=(0,s.Z)(i().mark((function r(){var e,t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.get("/");case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),j=function(){var r=(0,s.Z)(i().mark((function r(e){var t,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.get("/".concat(e));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),g="shopsList_shops__dv0Ta",Z="shopsList_title__WMTVt",y="shopsList_after_title__f3m6L",b=function(){var r=(0,u.useState)({shops:[],isLoading:!1,error:null}),e=(0,c.Z)(r,2),t=e[0],n=e[1];(0,u.useEffect)((function(){var r=function(){var r=(0,s.Z)(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n((function(r){return(0,a.Z)((0,a.Z)({},r),{},{isLoading:!0,error:null})})),r.next=3,x();case 3:e=r.sent;try{n((function(r){return(0,a.Z)((0,a.Z)({},r),{},{isLoading:!1,shops:e})}))}catch(d){n((function(e){return(0,a.Z)((0,a.Z)({},e),{},{error:d.message,isLoading:!1})}))}case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]);var o=t.shops,l=t.isLoading,d=t.error,p=o.map((function(r){return(0,f.jsx)(h,{id:r.id,avatar:r.avatar,name:r.name},r.id)}));return(0,f.jsxs)(f.Fragment,{children:[o.length>0&&(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)("h2",{className:Z,children:"Shops"}),(0,f.jsx)("h3",{className:y,children:"We wish you found what you've been looking for"}),p]}),l&&(0,f.jsx)(_.Z,{}),d&&(0,f.jsx)("div",{children:d})]})},w=t(907);var N=t(181);function k(r){return function(r){if(Array.isArray(r))return(0,w.Z)(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||(0,N.Z)(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C="productCard_productCard__1TFTR",L="productCard_product_img__E1MAy",I="productCard_under_product__W5QPx",S="productCard_product_title__fCVVZ",T="productCard_product_text__Sm+rY",W="productCard_product_price__S8UjI",A="productCard_orderBtn__lzOio",P=function(r){var e=r.url,t=r.text,n=r.name,a=r.price,s=(0,l.I0)(),c=a>0?a:Math.floor(271*Math.random()+30);return(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)("img",{src:e,alt:"Product ".concat(n),className:L}),(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)("h3",{className:S,children:n}),(0,f.jsx)("p",{className:T,children:t}),(0,f.jsx)("p",{className:W,children:c}),(0,f.jsx)("button",{type:"button",className:A,onClick:function(){return r={url:e,text:t,name:n,price:c},void s((0,d.yK)(r));var r},children:"Add to Cart"})]})]})};P.defaultProps={price:0};var V=P,E=t(7251),M="products_products_block__ypqrq",U=function(){var r=(0,l.v9)(E.a,l.wU),e=(0,u.useState)({products:[],isLoading:!1,error:null}),t=(0,c.Z)(e,2),n=t[0],o=t[1];(0,u.useEffect)((function(){var e=function(){var e=(0,s.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o((function(r){return(0,a.Z)((0,a.Z)({},r),{},{isLoading:!0,error:null})})),e.prev=1,e.next=4,j(r);case 4:t=e.sent,o((function(r){return(0,a.Z)((0,a.Z)({},r),{},{isLoading:!1,products:k(t.products)})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o((function(r){return(0,a.Z)((0,a.Z)({},r),{},{error:e.t0.message,isLoading:!1})}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();r&&e()}),[r]);var d=n.products,p=n.isLoading,h=n.error,v=d.map((function(r,e){return(0,f.jsx)(V,(0,a.Z)({},r),e)}));return(0,f.jsxs)("div",{className:M,children:[d.length>0&&v,!(d.length>0)&&!h&&"There is no products to order, yet",p&&(0,f.jsx)(_.Z,{}),h&&(0,f.jsxs)("div",{children:[" ","Something went wrong: ".concat(h)]})]})},q={},F=function(){return(0,f.jsxs)(n.Z,{children:[(0,f.jsx)("div",{className:q.shopsWrapper,children:(0,f.jsx)(b,{})}),(0,f.jsx)("div",{className:q.productsWrapper,children:(0,f.jsx)(U,{})})]})}},7251:function(r,e,t){t.d(e,{X:function(){return a},a:function(){return n}});var n=function(r){return r.shops.activeId},a=function(r){return r.shops.products}},6119:function(r,e,t){t.d(e,{Z:function(){return o}});var n="container_container__7D7mb",a="container_title__qyPiS",s=t(184);function c(r){var e=r.title,t=r.children;return(0,s.jsxs)("div",{className:n,children:[(0,s.jsx)("h2",{className:a,children:e}),t]})}c.defaultProps={title:""};var o=c}}]);
//# sourceMappingURL=584.99c7a2ea.chunk.js.map