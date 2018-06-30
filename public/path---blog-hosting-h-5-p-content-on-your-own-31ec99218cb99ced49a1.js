webpackJsonp([23506593818894],{1178:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I’ve talked some about <a href="https://h5p.org/">H5P, a robust free and open-source toolset for creating various kinds of elearning interactives</a>. I’m using it a ton currently in client projects, particularly for interactive video. But as you might know from your own experience, sustainability is super important. How might your clients edit this thing once you move on? How can they have control over it? In this post, I’ll talk about how you can host H5P content yourself.</p>\n<h2>Context</h2>\n<p>To begin, let’s set the context. H5P allows you to create a large (and growing) variety of interactive content that stands alone; that is, you don’t need to have an authoring tool that puts everything together. These are interactives that you can use modularly throughout your course. The products created with their toolset <strong>aren’t published to SCORM.</strong> Many(perhaps most) do report out xAPI statements, if you hook them up to your LRS; but be sure to check each particular content type to be sure. As an LX Designer, one of the most interesting things you can create using H5P are interactive videos. Take a gander at this quick example:</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 64.25%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://h5p.org/h5p/embed/617" frameborder="0" allowfullscreen="allowfullscreen" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>I’m working with clients using Canvas LMS and, as yet H5P doesn’t have any kind of plugin for Canvas (though I believe it’s on the way!). So I’m having to create content using H5P.org. If you’re an independent LXD or just someone who wants to use H5P and isn’t using a platform that has a plugin currently, this is the route you’ll have to travel, too. H5P.org will host these for free forever (note that you’re videos need to be hosted on some other platform, such as Vimeo or YouTube), which is great! But, there are some caveats:</p>\n<ul>\n<li>If you want to hook this up to your LRS to get xAPI statements (<a href="https://h5p.org/node/617/xapi-coverage">info about xAPI coverage for this content type is here</a>), or</li>\n<li>If you want to be able to make sure that this content is private and can’t be seen by others, or</li>\n<li>If you just want to have more control over how the content looks and functions (you’ll need someone familiar with CSS and JavaScript)</li>\n</ul>\n<p>Then, you’ll want to host these things on your own (or your client’s) servers.</p>\n<h2>The How</h2>\n<p>The H5P Standalone project comes to the rescue! This project (<a href="https://github.com/tunapanda/h5p-standalone">which you can download on Github</a>) provides the structure you need to serve these up. <strong>Note: This project is a little dated at this point (the last commit was 8 months ago at the time of this post) and I’m not sure how well it’s being maintained, but right now, it works pretty well.</strong></p>\n<h3>Steps</h3>\n<p>After downloading the project from Github, you’ll want to unzip the .h5p files that you download from H5P.org into the workspace folder. H5P files are really just archive files. You can change the file extension (the .h5p part) to .zip and then extract the contents. I made sure to change the folder names to something simpler (remember, no spaces!). Then, inside of the demo folder, go to <strong>index.html</strong> and you need to change the url in the <strong>h5pContent</strong> property to point it to the correct folder inside of the <strong>workspace</strong> folder.</p>\n<figure>\n  <img src="../post-images/EditH5PStandaloneIndex.jpg" alt="Workspace folder location" />\n</figure>\n<p>If you’ve got more interactives, like I do, you can actually duplicate index.html, rename it, and point to another file in that workspace folder. That way, when you upload it to your server, you can point to different pages to get different content. Then, of course, you can use an iframe to embed this content anywhere you like! Take a look at the video below for a walkthrough of this process.</p>\n<p><div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.49999999999999%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube.com/embed/GvQIljCP-m4?rel=0" class="embedVideoIframe" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n      <style>\n        .embedVideoIframe {\n          border: 0\n        }\n      </style>\n          </div>\n          </div></p>',frontmatter:{date:"September 05, 2017",path:"/blog/hosting-h5p-content-on-your-own",title:"Hosting H5P Content On Your Own",tags:["h5p","hosting","interactive video","standalone"],categories:["Design","elearning","Showing my Work"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACx0lEQVQoz1WS+UvTYRzH9w/0ewXRAVFaZB7l8K61aa59N3d8l5t5zmlueayya112UculUVL+0EkDLVh5oBFSWR5klpUVmCRkpRXaYUki9Orxp+iBF28+8OENz/O8FFHJFlaq0ghbayBcbSJSzDOsVFtI0pmo9Tu4dNbFhapiWut9DPR38nXsI/caqzl3zEngfDkt9fsI1m4heLkKxfJEHXmevdy8006iPoNIUR6dbCZCZWSd1sAlfyHN1yporTvF8OBTBl93821smP6eBs4dziZQ46Hxiofb10+yu/QACqVKT9/BHfxsvkFvcQ4dDitdznQ6izJ5VJLDkNfJ+ImdfNhTwEhFMR8FE0c8+LMkYiIXsGbVQgzqFUhaNXmr1SgSVBKfKg/wp6cDOu/yp60Jeh5CQwAa65huusFUS5Dp7namHrTxKxjgd75EXsgcNrud7N7mZuHcWcybN5fNy1aLQo2RwfICPvsP8sFfwXjlfkarDvF+j4t32x2MnPAy4tvHePVhfpw5ylefl0m3jFetJDM7ncLcDKLDlxAaFkK5ZEaRlCrTY0+lTRvDY1MSAzYNbRtiuZ+WRJdlHe2GBO5Kcby1axjL3cBoro4Jl8xxk4bYhGhx7RDWxEWwaP5s7LJJFK638NphpC9Lxxe3lQFHGr2ZOp5nS4wWySL1dNi0vC8086skne9iZ8pt4agukbiEcOKjlqKMCmXJ4vnEx0ShiEsx05W/kVeuDJ4V2ekX+ULw3LWJly47Q2U2hkrtvCnL4ZlD5kmWnjdOGV++C594niNlRvG7NupvNXC1rg7FjIdKoYlSY/pHsolVajMqoc3JMj01u+yUlnjRWz1IcglG21YycrcRuFxD8OJxLtae4svkNDNHEakRzmks/zEjdrjImBQjnoKNFG6SSNakEC/Ej12rF2lEr9OSY1WRblBhlY0c81VSXX2avzNL4c97cOhqAAAAAElFTkSuQmCC",aspectRatio:2,src:"/static/Hosting-H5P-Content-c08174451ae3e1eadbf88239d9bdf5a0-81d39.png",srcSet:"/static/Hosting-H5P-Content-c08174451ae3e1eadbf88239d9bdf5a0-9a8d1.png 203w,\n/static/Hosting-H5P-Content-c08174451ae3e1eadbf88239d9bdf5a0-c53f9.png 405w,\n/static/Hosting-H5P-Content-c08174451ae3e1eadbf88239d9bdf5a0-81d39.png 810w,\n/static/Hosting-H5P-Content-c08174451ae3e1eadbf88239d9bdf5a0-fda19.png 1024w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-hosting-h-5-p-content-on-your-own-31ec99218cb99ced49a1.js.map