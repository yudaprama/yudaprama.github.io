(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(156),i=t(154);a.default=function(){return l.a.createElement(r.a,null,l.a.createElement(i.a,{title:"404: Not found"}),l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},150:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),l=t.n(n),r=t(4),i=t.n(r),s=t(33),c=t.n(s);t.d(a,"a",function(){return c.a});t(151);var o=l.a.createContext({}),m=function(e){return l.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,a,t){var n;e.exports=(n=t(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Jasa Pembuatan Aplikasi Mobile Android iOS"}}}}},153:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),i=t.n(r),s=t(55),c=t(2),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},154:function(e,a,t){"use strict";var n=t(155),l=t(0),r=t.n(l),i=t(4),s=t.n(i),c=t(157),o=t.n(c);function m(e){var a=e.description,t=e.lang,l=e.meta,i=e.keywords,s=e.title,c=n.data.site,m=a||c.siteMetadata.description,u=i||c.siteMetadata.keywords;return r.a.createElement(o.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(l)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Jasa Pembuatan Aplikasi Mobile Android iOS",description:"Jasa Aplikasi Mobile Yang Murah dan Cepat, Berkualitas Tinggi, Berpengalaman",author:"yuda prama",keywords:["Jasa pembuatan aplikasi Android","Jasa pembuatan aplikasi iOS","jasa pembuatan aplikasi mobile","mobile app developer indonesia","Android app developer","iOS app developer","Mobile app designer","Jakarta","Indonesia"]}}}}},156:function(e,a,t){"use strict";var n=t(152),l=t(0),r=t.n(l),i=t(4),s=t.n(i),c=t(150),o=t(7),m=t.n(o),u=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={showMenu:!1},a}return m()(a,e),a.prototype.render=function(){var e=this;return r.a.createElement("header",{className:"header-area "+(this.props.headerWhite?"header-white":"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("nav",{className:"main-nav"},r.a.createElement(c.a,{to:"/",className:"logo"},r.a.createElement("img",{src:"/images/orange-logo-white.svg",className:"light-logo",alt:"Gaus"}),r.a.createElement("img",{src:"/images/orange-logo-dark.svg",className:"dark-logo",alt:"Gaus"})),r.a.createElement("ul",{className:"nav",style:this.state.showMenu?{display:"block"}:null},r.a.createElement("li",null,r.a.createElement(c.a,{to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works"},"SEMUA PORTOFOLIO")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){e.setState({showMenu:!e.state.showMenu}),window.scrollTo(0,document.body.scrollHeight)},className:"btn-nav-line"},"HUBUNGI KAMI"))),r.a.createElement("a",{onClick:function(){return e.setState({showMenu:!e.state.showMenu})},className:"menu-trigger"},r.a.createElement("span",null,"Menu")))))))},a}(l.Component);u.propTypes={siteTitle:s.a.string,headerWhite:s.a.bool},u.defaultProps={siteTitle:"",headerWhite:!1};var d=u,p=function(e){var a=e.children,t=e.headerWhite;return r.a.createElement(c.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{headerWhite:t,siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",null,a),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 col-md-12 col-sm-12"},r.a.createElement("img",{src:"../images/orange-logo-white.svg",className:"logo",alt:""}),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,"Kami membantu klien mengembangkan bisnis yang ramping dan gesit dengan mengurangi ",r.a.createElement("b",null,"biaya")," dan ",r.a.createElement("b",null,"waktu")," development sehingga bisa ",r.a.createElement("b",null,"secepatnya release ke pasar dengan biaya yang murah")))),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-6"},r.a.createElement("h5",null,"Helpful Links"),r.a.createElement("ul",{className:"footer-nav"},r.a.createElement("li",null,r.a.createElement(c.a,{to:"/"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Home"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Portofolio"))))),r.a.createElement("div",{className:"col-lg-2 col-md-4 col-sm-6 col-6"},r.a.createElement("h5",null,"Latest Apps"),r.a.createElement("ul",{className:"footer-nav"},r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yudaprama-cryptoexplorer"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Crypto Watcher"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yudapramadjunaedi-authorized"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"authORIzed"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yuda-movie"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Movie DB"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yudapramadjunaedi-inventory"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"SIM"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/works/com-yudapramadjunaedi-course"},r.a.createElement("i",{className:"fa fa-angle-right"}),r.a.createElement("span",null,"Kursus"))))),r.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-12"},r.a.createElement("h5",null,"Hubungi Kami"),r.a.createElement("div",{className:"address"},r.a.createElement("p",null,"Jl Tebet Timur Dalam Raya No 26, Tebet, Jakarta"),r.a.createElement("p",null,"WhatsApp: ",r.a.createElement("a",{href:"https://wa.me/6282123603968?text=Saya ingin bertanya perihal jasa aplikasi"},"082123603968"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("p",{className:"copyright"},"© "+(new Date).getFullYear()+" Gaus. All Rights Reserved."))))))},data:n})};p.propTypes={children:s.a.node.isRequired,headerWhite:s.a.bool},p.defaultProps={headerWhite:!1};a.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-d4369d12c1bbd30ffb90.js.map