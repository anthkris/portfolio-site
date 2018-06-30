webpackJsonp([4833204075006],{1201:function(a,e){a.exports={data:{markdownRemark:{html:'<p>I’m new to using Canvas LMS, a rising star among learning management systems, especially in higher education. I’m way more used to Moodle which, in a lot of ways is much more open and easier to tweak (and break). In preparation for some work on an upcoming project, I’ve been playing around in a sandbox course and I’ve discovered a few interesting things.</p>\n<h2>Canvas Includes</h2>\n<p>From what I can tell, Canvas seems to have been built by integrating the open source Bootstrap framework. What I wish I knew (before I tried to include a bunch of stuff for 3 or 4 hours) is that, because of this, Canvas seems to have included jQuery (an easy-to-use JavaScript library) as a part of their environment. That’s really great news because it means that I don’t have to include jQuery as a part of my ONE javascript upload available. So content enhancements like this accordion are built in to Canvas.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 41.38248847926267%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABAElEQVQoz6XP307CMBQG8D33TFAvvFecb6DvgMQNeAHjnTcmKksKy9hY/2xlbfGzx02QxBux6S/faU9zkgZWS2hewMgSrq5gFVljIwoAFn9dwe1jgYskw2C8RHi/wEkvHDEMHnKcJYW3OnAaH+a5F45z3D1VCEbPJaLpO25mc1xP96JZiuHkDZfxK4ZJl9819akX+byiM72bzBG/SARoa/AsRV0soNcZ1Ir5mqEpl2j8nfC9lueAUcCGe6Kvf2QrO/Rl67YwPbv96Diy3ae/83vH/ZKE3gZKKTDGUFUVpJQQQhyFc46mabqBaZruBh6Lhn4NtNZCaw1jDKj+D+ccPgEOM1L2LJ3W1wAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Canvas accordion component" title="" src="/static/Screen-Shot-2015-11-03-at-3.44.32-PM-22de9bac73e5aa638a3539a5f2ebc18d-1626e.png" srcset="/static/Screen-Shot-2015-11-03-at-3.44.32-PM-22de9bac73e5aa638a3539a5f2ebc18d-076ec.png 203w,\n/static/Screen-Shot-2015-11-03-at-3.44.32-PM-22de9bac73e5aa638a3539a5f2ebc18d-7ae34.png 405w,\n/static/Screen-Shot-2015-11-03-at-3.44.32-PM-22de9bac73e5aa638a3539a5f2ebc18d-1626e.png 810w,\n/static/Screen-Shot-2015-11-03-at-3.44.32-PM-22de9bac73e5aa638a3539a5f2ebc18d-904df.png 1085w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n</figure>\n<p>From this code in the text editor:</p>\n<pre><code class="language-html">&#x3C;div class="enhanceable_content accordion">\n&#x3C;h3>&#x3C;a href="#">Section 1&#x3C;/a>&#x3C;/h3>\n&#x3C;div>\n&#x3C;p>Section 1 Content&#x3C;/p>\n&#x3C;/div>\n&#x3C;h3>&#x3C;a href="#">Section 2&#x3C;/a>&#x3C;/h3>\n&#x3C;div>\n&#x3C;p>Section 2 Content&#x3C;/p>\n&#x3C;/div>\n&#x3C;h3>&#x3C;a href="#">Section 3&#x3C;/a>&#x3C;/h3>\n&#x3C;div>\n&#x3C;p>Section 3 Content&#x3C;/p>\n&#x3C;ul>\n&#x3C;li>List item one&#x3C;/li>\n&#x3C;li>List item two&#x3C;/li>\n&#x3C;li>List item three&#x3C;/li>\n&#x3C;/ul>\n&#x3C;/div>\n&#x3C;/div>\n</code></pre>\n<p>You can find more Canvas code snippets in this handy doc someone made: <a href="https://docs.google.com/document/d/1sd62Kt7eIK0At3O9V5GtaYiPr3WFtHs2AksUse1dDvE/pub">Canvas HTML Code</a> It also means that I can access jQuery functions in order to implement other cool interactions (<a href="http://owlgraphic.com/owlcarousel/index.html">like the Owl jQuery Carousel</a>).</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 49.67562557924004%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABuklEQVQoz5WS30taYRjHvY2NaG0X0k1dFAQzZzE2hvOYO4aWGq4p7kxbP6GwQWu1dipyjGYjqCBWXnTR9WD/U/NGN8TO1kVH9KifOoWh4hp74OF5eXmez/N94GtQFIVsNoteM5kMuVyO/41yuXz9NmiaRj6fp1gsoqo5dhJ7fIivIcdjLHxaYvNoi4+HGyzFl4ntx5C3Zd59WeTt5wXWLnqU3yc1UEP9plezU9wX+njkeorZJRAKSkyHRzB7H+MYFbH4HmJ299EzZMH12k3qV+pytlQqXQF1SIWuFTVml99gCzjwTQZ4KUX4Kj1jV44wtjHB+KZEdCtCVA4jjQ8gTftI/0zXAqvlFgoFVrfXmY+/Z35lhdBzkbDnCRNRP3OLLwhGPAgOOzarFZOph87ObpLJ5N+BusKjb9+Zmgkj9tswWR5g6b1Is4mOji6MxnZa7rRxu9lI0627tN5r4/j4R2NgBZpIHDA8PEgwEMLr8+N2e/F4/IjOIWz2AayCiGB30u9w4hr0kkrdcLJe9bPr7aDbKp3WB8v/tk2jz/pQVZUz9aymp3JVtZiGCutTD+X0D1nl5NKrjfqqGed6Y4hxZiuFagAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Canvas accessible carousel component" title="" src="/static/Screen-Shot-2015-11-03-at-3.37.49-PM-80cfcc2741dd002c18b70d4ac1f2f0ae-1626e.png" srcset="/static/Screen-Shot-2015-11-03-at-3.37.49-PM-80cfcc2741dd002c18b70d4ac1f2f0ae-076ec.png 203w,\n/static/Screen-Shot-2015-11-03-at-3.37.49-PM-80cfcc2741dd002c18b70d4ac1f2f0ae-7ae34.png 405w,\n/static/Screen-Shot-2015-11-03-at-3.37.49-PM-80cfcc2741dd002c18b70d4ac1f2f0ae-1626e.png 810w,\n/static/Screen-Shot-2015-11-03-at-3.37.49-PM-80cfcc2741dd002c18b70d4ac1f2f0ae-744a7.png 1079w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n</figure>\n<p>In this case, I used my JavaScript and CSS uploads to get the necessary functionality.</p>\n<h2>Canvas Excludes</h2>\n<p>Among the other things that I’m not so keen on about Canvas (like having to include one JavaScript and one CSS file for an <em>entire</em> sub-account) is that they only support certain HTML tags. [highlight highlight_type=“bold”]You read that right, HTML tags.[/highlight] Now, I’m not a fan of stripping out the script tag, but I get that it can be a major security issue so many systems do exactly that. But when I was trying to implement a CSS-only image carousel, I discovered (thanks to the forums) that Canvas only supports an extraordinarily limited number of HTML tags. <a href="https://s3.amazonaws.com/tr-learncanvas/docs/Canvas_HTML_Whitelist.pdf">You can view the list in their PDF</a>. Many CSS-only sliders rely on the use of the label tag to map the images to the navigation. But because it wasn’t whitelisted, I had to go with a (likely less accessible) jQuery plugin.</p>\n<h2>Take Aways</h2>\n<p>I love that jQuery is included. That takes a huge load off. However, only being able to upload one JavaScript file and one CSS file for all the courses in a particular section (sub-account) instead of per-course will be a hassle. While having only one file for each can have performance improvements, it may be worth thinking about minifying both files before actually pushing the course out into the world. I’m sure they’ll each be incredibly massive. I’ll also have to be very careful about possibly overriding Canvas’s own styles (which happened twice) and I’ll be limited as to what I can actually do in Canvas since only a few tags are supported. All-in-all, I’d say the experience for a power-user (if I can call myself that–an inquisitive and boundary-pushing user, at any rate) in Canvas is pretty lacking, but I don’t suppose that’s who they’re targeting. Anyone else have any cool examples of things that you can embed in Canvas? With all the iFraming of a lot of content, has accessibility been an issue?</p>',frontmatter:{date:"November 04, 2015",path:"/blog/lessons-learned-in-canvas-lms",title:"Lessons Learned in Canvas LMS",tags:["Canvas LMS","html","Instructure","LMS"],categories:["Coding","Showing my Work"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACqElEQVQoz2WRyU8TYRiHJ9zoPtB2ppu4D6BC0hIBBdqICi1IgXbsQDvFCkqhalwiIkbjEvdoTCR6MC4R16AcXBI1BA8mLhcT/VM8eH38wMSLX/JL3uRLnjzv75Us3i1YlRg2bysONYrT345NrkOSpP9SVlb2b26JdpHqNdCTPWjL17K1vZOhkSKSRWnHqgqIEsWutOL0xbB7m/AqClp1NcFgCEXMwWAQt9uNpmmoqo+2zW00R8LszGQZ3r2HVHcXuxeB1kBCGG75C1w0DHVgrQij+nwkEgkmJiYolUoUi0VGhkfI5XL4fAFGCgafP71l5uEMk5NTnD57gWs3ppHKPVFhuBWrfxv2YHxpZacnsrSW3eEgnU6TTCbp7evDGBhAluWlv/cf3rP4fv/+xcvZe7x6/YYfP78Lw6o0Fn8nFm8Mh+hRVltENglYFQ6LC2d5OSFVwe/24HFWoK2pRVutie5SLMzP83jmIbemr3Pz9h3OXrqG5FiWxCI3YnFtxF4RoVIR63rXUrNqHa0bG+mJx0W6MI0M+8f3UiwdJL49gWqXCcgKddW1HDpyjOcv5pidm0OyCTNbZQNyxSp8npAAraEpHCEeT5CIdxNraxddJsnmTEoH9jE6Pk59TR2K1UXA5SbW0sLUqXN8+faVR0+fIbkqNbxuH8vUACsCK2kIN6HraYyMTrJPpz9lkBnIk945yJ7RUXGcvURqqlGtDrRQFWZuiItXzjN54iR3Z54gRcINbFgfIVzfKGCbaIt2YAyajI6NkTPz9KcH0Y28yC4GzV0MFQqE19fjtzlZt3wlU8ePcv9UE1fPT/Ju4SNSNNZB1khh5vN0dPbQtSNNf7/OocP7GSuNowszfaCAnjGX4NmsSTY/THNDM709OoW8zpW8xIPL3Zy5dJ0/ludrhEJvd7MAAAAASUVORK5CYII=",aspectRatio:2,src:"/static/LEssons-LEarned-in-8d5319bc6231611ce72acf9186077428-81d39.png",srcSet:"/static/LEssons-LEarned-in-8d5319bc6231611ce72acf9186077428-9a8d1.png 203w,\n/static/LEssons-LEarned-in-8d5319bc6231611ce72acf9186077428-c53f9.png 405w,\n/static/LEssons-LEarned-in-8d5319bc6231611ce72acf9186077428-81d39.png 810w,\n/static/LEssons-LEarned-in-8d5319bc6231611ce72acf9186077428-fda19.png 1024w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-lessons-learned-in-canvas-lms-840d1a9f2fa28eb86268.js.map