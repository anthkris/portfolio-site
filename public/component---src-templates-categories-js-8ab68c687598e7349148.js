webpackJsonp([26379419371658],{184:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(2),u=l(r),d=a(3),n=l(d),f=a(6),o=l(f),i=function(e){var t=e.pathContext,a=e.data,l=t.category,r=a.allMarkdownRemark,d=r.edges,n=r.totalCount,f=n+" post"+(1===n?"":"s")+' categorized with "'+l+'"';return u.default.createElement("div",null,u.default.createElement("h1",null,f),u.default.createElement("ul",null,d.map(function(e){var t=e.node,a=t.frontmatter,l=a.path,r=a.title;return u.default.createElement("li",{key:l},u.default.createElement(o.default,{to:l},r))})),u.default.createElement(o.default,{to:"/categories"},"All categories"))};i.propTypes={pathContext:n.default.shape({category:n.default.string.isRequired}),data:n.default.shape({allMarkdownRemark:n.default.shape({totalCount:n.default.number.isRequired,edges:n.default.arrayOf(n.default.shape({node:n.default.shape({frontmatter:n.default.shape({path:n.default.string.isRequired,title:n.default.string.isRequired})})}).isRequired)})})},t.default=i;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-categories-js-8ab68c687598e7349148.js.map