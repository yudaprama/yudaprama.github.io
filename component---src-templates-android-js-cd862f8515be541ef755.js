(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return i});var l=t(0),n=t.n(l),r=t(160);a.default=function(e){var a,t=e.data,l=t.android,i=t.technicalHighlight;return a=i?i.highlights:["Monetization using admob","Monetization using In App Purchase","Google search","Offline browsing","Organize browsing bookmark","Organize search result","Offline reading","Organize reading bookmark","4 themes for reading: light, night, sepia, grey","Change font","Change text size","Open in-app browser to see full web page","In-App Support"],n.a.createElement(r.a,{highlights:a,description:l.description,icon:l.icon,screenShotUrls:l.screenshots,title:l.title,androidUrl:l.url})};var i="3754905218"},150:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var l=t(0),n=t.n(l),r=t(4),i=t.n(r),s=t(33),c=t.n(s);t.d(a,"a",function(){return c.a});t(151);var m=n.a.createContext({}),o=function(e){return n.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,a,t){var l;e.exports=(l=t(153))&&l.default||l},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Jasa Pembuatan Aplikasi Mobile Android iOS"}}}}},153:function(e,a,t){"use strict";t.r(a);t(34);var l=t(0),n=t.n(l),r=t(4),i=t.n(r),s=t(55),c=t(2),m=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?n.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=m},154:function(e,a,t){"use strict";var l=t(155),n=t(0),r=t.n(n),i=t(4),s=t.n(i),c=t(157),m=t.n(c);function o(e){var a=e.description,t=e.lang,n=e.meta,i=e.keywords,s=e.title,c=l.data.site,o=a||c.siteMetadata.description,d=i||c.siteMetadata.keywords;return r.a.createElement(m.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(n)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=o},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jasa Pembuatan Aplikasi Mobile Android iOS",description:"Jasa Aplikasi Mobile Yang Murah dan Cepat, Berkualitas Tinggi, Berpengalaman",author:"yuda prama",keywords:["Jasa pembuatan aplikasi Android","Jasa pembuatan aplikasi iOS","jasa pembuatan aplikasi mobile","mobile app developer indonesia","Android app developer","iOS app developer","Mobile app designer","Jakarta","Indonesia"]}}}}},156:function(e,a,t){"use strict";var l=t(152),n=t(0),r=t.n(n),i=t(4),s=t.n(i),c=t(150),m=t(7),o=t.n(m),d=function(e){function a(){for(var a,t=arguments.length,l=new Array(t),n=0;n<t;n++)l[n]=arguments[n];return(a=e.call.apply(e,[this].concat(l))||this).state={showMenu:!1},a}return o()(a,e),a.prototype.render=function(){var e=this;return r.a.createElement("header",{className:"header-area "+(this.props.headerWhite?"header-white":"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("nav",{className:"main-nav"},r.a.createElement(c.a,{to:"/",className:"logo"},r.a.createElement("img",{src:"/images/orange-logo-white.svg",className:"light-logo",alt:"Gaus"}),r.a.createElement("img",{src:"/images/orange-logo-dark.svg",className:"dark-logo",alt:"Gaus"})),r.a.createElement("ul",{className:"nav",style:this.state.showMenu?{display:"block"}:null},r.a.createElement("li",null,r.a.createElement(c.a,{to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works"},"SEMUA PORTOFOLIO")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){e.setState({showMenu:!e.state.showMenu}),window.scrollTo(0,document.body.scrollHeight)},className:"btn-nav-line"},"HUBUNGI KAMI"))),r.a.createElement("a",{onClick:function(){return e.setState({showMenu:!e.state.showMenu})},className:"menu-trigger"},r.a.createElement("span",null,"Menu")))))))},a}(n.Component);d.propTypes={siteTitle:s.a.string,headerWhite:s.a.bool},d.defaultProps={siteTitle:"",headerWhite:!1};var u=d,g=function(e){var a=e.children,t=e.headerWhite;return r.a.createElement(c.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{headerWhite:t,siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",null,a),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 col-md-12 col-sm-12"},r.a.createElement("img",{src:"../images/orange-logo-white.svg",className:"logo",alt:""}),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,"Kami membantu klien mengembangkan bisnis yang ramping dan gesit dengan mengurangi ",r.a.createElement("b",null,"biaya")," dan ",r.a.createElement("b",null,"waktu")," development sehingga bisa ",r.a.createElement("b",null,"secepatnya release ke pasar dengan biaya yang murah")))),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-6"},r.a.createElement("h5",null,"Helpful Links"),r.a.createElement("ul",{className:"footer-nav"},r.a.createElement("li",null,r.a.createElement(c.a,{to:"/"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Home"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Portofolio"))))),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-6"},r.a.createElement("h5",null,"Latest Apps"),r.a.createElement("ul",{className:"footer-nav"},r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yudaprama-cryptoexplorer"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Crypto Watcher"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yudapramadjunaedi-authorized"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"authORIzed"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yuda-movie"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Movie DB"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yudapramadjunaedi-inventory"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"SIM"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yudapramadjunaedi-course"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Kursus"))))),r.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12"},r.a.createElement("h5",null,"Hubungi Kami"),r.a.createElement("div",{className:"address"},r.a.createElement("p",null,"Jl Tebet Timur Dalam Raya No 26, Tebet, Jakarta"),r.a.createElement("p",null,"WhatsApp: ",r.a.createElement("a",{href:"https://wa.me/6282123603968?text=Saya ingin bertanya perihal jasa aplikasi"},"082123603968"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("p",{className:"copyright"},"© "+(new Date).getFullYear()+" Gaus. All Rights Reserved."))))))},data:l})};g.propTypes={children:s.a.node.isRequired,headerWhite:s.a.bool},g.defaultProps={headerWhite:!1};a.a=g},158:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(4),i=t.n(r),s=t(150),c=function(e){var a=e.appTitle;return n.a.createElement("div",{className:"cover","data-image":"assets/images/photos/parallax.jpg"},n.a.createElement("div",{className:"page-top"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("h1",null,a)),n.a.createElement("div",{className:"col-lg-12 text-center"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",null,n.a.createElement(s.a,{to:"/"},"Home")),"Semua Portofolio"===a?null:n.a.createElement("li",null,n.a.createElement(s.a,{to:"/works"},"Semua Portofolio")),n.a.createElement("li",{className:"active"},a)))))))};c.propTypes={appTitle:i.a.string},a.a=c},159:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){return n.a.createElement("ul",{className:"stars"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star active"})),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star active"})),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star active"})),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star active"})),n.a.createElement("li",null,n.a.createElement("i",{className:"fa fa-star"})),n.a.createElement("li",null,"("+(Math.floor(91*Math.random())+10)+")"))}},160:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(4),i=t.n(r),s=t(156),c=t(154),m=t(158),o=t(159),d=function(e){var a=e.title,t=e.icon,l=e.description,r=e.androidUrl,i=e.iosUrl,o=e.screenShotUrls,d=e.highlights;return n.a.createElement(s.a,{headerWhite:!0},n.a.createElement(c.a,{title:a}),n.a.createElement("section",{className:"page"},n.a.createElement(m.a,{appTitle:a}),n.a.createElement("div",{className:"page-bottom pbottom-70"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"app-single"},n.a.createElement(u,{title:a,icon:t,androidUrl:r,iosUrl:i}),n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"content"},n.a.createElement("h5",{className:"title"},"Deskripsi"),n.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:l}}))),n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"content"},n.a.createElement("h5",{className:"title"},"Screenshots"),n.a.createElement("div",{className:"row gallery"},o.map(function(e,t){return n.a.createElement("div",{key:t,className:"col-lg-3 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("a",{className:"gallery-item",href:e,title:a},n.a.createElement("img",{src:e,className:"img-fluid",alt:""})))})))),n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"content"},n.a.createElement("h5",{className:"title"},"Technical Highlight"),n.a.createElement("div",{className:"text"},n.a.createElement("div",{className:"version"},n.a.createElement("ul",null,d.map(function(e,a){return n.a.createElement("li",{key:a},e)})))))))))))))},u=function(e){var a=e.title,t=e.icon,l=e.androidUrl,r=e.iosUrl;return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-1 col-md-2 col-sm-12"},n.a.createElement("div",{className:"icon"},n.a.createElement("img",{style:{borderRadius:"20%",width:46,height:46},src:t,className:"img-fluid",alt:""}))),n.a.createElement("div",{className:"col-lg-5 col-md-4 col-sm-12"},n.a.createElement("div",{className:"title"},n.a.createElement("h2",null,a),n.a.createElement(o.a,null))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"download-buttons"},n.a.createElement("a",{target:"_blank",href:r},n.a.createElement("img",{src:"/images/download-apple-store.svg",alt:""})),n.a.createElement("a",{target:"_blank",href:l},n.a.createElement("img",{src:"/images/download-google-play.svg",alt:""}))))))};d.propTypes={title:i.a.string.isRequired,icon:i.a.string.isRequired,description:i.a.string.isRequired,androidUrl:i.a.string,iosUrl:i.a.string,screenShotUrls:i.a.array.isRequired,highlights:i.a.array.isRequired},a.a=d}}]);
//# sourceMappingURL=component---src-templates-android-js-cd862f8515be541ef755.js.map