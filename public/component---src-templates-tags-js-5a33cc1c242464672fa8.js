webpackJsonp([50739212244294],{185:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var u=a(2),r=l(u),d=a(3),n=l(d),f=a(6),s=l(f),i=function(e){var t=e.pathContext,a=e.data,l=t.tag,u=a.allMarkdownRemark,d=u.edges,n=u.totalCount,f=n+" post"+(1===n?"":"s")+' tagged with "'+l+'"';return r.default.createElement("div",null,r.default.createElement("h1",null,f),r.default.createElement("ul",null,d.map(function(e){var t=e.node,a=t.frontmatter,l=a.path,u=a.title;return r.default.createElement("li",{key:l},r.default.createElement(s.default,{to:l},u))})),r.default.createElement(s.default,{to:"/tags"},"All tags"))};i.propTypes={pathContext:n.default.shape({tag:n.default.string.isRequired}),data:n.default.shape({allMarkdownRemark:n.default.shape({totalCount:n.default.number.isRequired,edges:n.default.arrayOf(n.default.shape({node:n.default.shape({frontmatter:n.default.shape({path:n.default.string.isRequired,title:n.default.string.isRequired})})}).isRequired)})})},t.default=i;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tags-js-5a33cc1c242464672fa8.js.map