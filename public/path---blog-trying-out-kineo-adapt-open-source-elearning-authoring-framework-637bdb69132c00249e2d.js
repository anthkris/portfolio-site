webpackJsonp([0x8268da303267],{1260:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Lesson 1: This will not be development as usual. As I’ve mentioned a couple of times on the <a href="http://dearinstructionaldesigner.com">DearID show</a> that I’ve been wanting to get my hands on Adapt, the elearning authoring framework. As you may have seen, I got to working with it and, just recently, I finished my first experiment.</p>\n<h2>The Adapt Experience</h2>\n<h3>Installation</h3>\n<p>The absolute first thing to note for anyone who’s interested is that this thing is an absolute beastie to install. It’s not like installing a neatly packaged program like you might be used to. We’re talking command line/terminal commands. They have pretty good instructions on their github wiki but you are still highly likely to run into issues. If you’re willing to work through that phase, maybe you’re already comfortable with the command line, you can get it done. For others, I know the forum and Gitter communities help quite a lot of people with issues like this. I chose to power through solo, so it took a little doing but I finally got it installed. Adapt offers an authoring tool version, which is suitable for most people. It includes a graphical interface so you can use menus, drag and drop, etc. to build your courses. They also offer a framework version, which allows developers to look at the code (a mix of JSON, handlebars files (a templating engine), and LESS files (a “type” of CSS that allows variables and other cool stuff). I started out intending to use the authoring tool, but discovered that, for now, you have to develop course themes using the framework. I liked it so much that I just stuck with it. (I should mention that Learning Pool is awesomely leading the way in trying to bring Adapt to everyone and are <a href="http://www.adaptbuilder.io/">testing out providing a hosted version of the Adapt Authoring tool</a>).</p>\n<h2>The Adapt Metaphor</h2>\n<p>Once you get the thing installed (or <a href="https://www.adaptlearning.org/index.php/adapt-showcase/">simply have a look at their demo course page</a>), you’ll see that the second huge thing to note about Adapt is that it uses a completely different metaphor than the standard authoring tools. While Storyline, Lectora, and (I think) Captivate are built around a PowerPoint/Slide metaphor, where you put content on a slide and users switch between one slide and another, Adapt allows itself to look like what it is: a web page. It allows for deep scrolling, one page courses (which is what I went with) and because it embraces the fact that it’s a web page, it is fully responsive right out of the box. Adapt also concentrates on accessibility most, if not all of the out-of-the-box components are accessible to WCAG AA level. Building in the authoring tool is more akin to working in WordPress or Drupal than it is to Storyline or Captivate. It’s like building a website using a CMS. And like building a website, you can definitely get more done if you know CSS (more important, in this case, I think) and JavaScript (less important). Adapt has lots of built in interactions that you can use but styling (using CSS and/or building a custom theme) is likely to be majorly desirable.</p>\n<h2>The Framework</h2>\n<p>Again, Adapt is built more along the lines of a webpage. They explain their framework as the A-B-Cs:</p>\n<ul>\n<li>Pages: Pages are how the main learning content is presented (similar to a page on the web), and can contain a number of sub-elements, making them perfect to present a single topic in an e-learning course.</li>\n<li>Articles: Articles are the next step down, and are used to present compound pieces of information within the page. Like pages, articles can be formed of many sub-elements. Articles can also be used to split up a page for presentation purposes.</li>\n<li>Blocks: Blocks have replaced the traditional screens/slides found in most e-learning publishing software, and present small chunks of related content using components.</li>\n<li>Components: Components are the main interactions in Adapt, and present simple ideas. Components can be used in a block full-width, or combined with another component for more variety. To summarise: Pages contain Articles contain Blocks contain Components.</li>\n</ul>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 300px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 175.33333333333334%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAjABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgEE/9oADAMBAAIQAxAAAAHROeG5LFCUhd3YZFyV2wQvQzf/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADERIh/9oACAEBAAEFAu7IXaG61YV95hGRs6IyaIbGEVzjnSUXeBBUhn//xAAZEQEBAQADAAAAAAAAAAAAAAABABECEzH/2gAIAQMBAT8B7GFyULj5YWX/xAAZEQACAwEAAAAAAAAAAAAAAAAAARAREiH/2gAIAQIBAT8Byho6MuP/xAAjEAABAgQGAwAAAAAAAAAAAAAAESEBEDGBAgMzQZGhEjJh/9oACAEBAAY/AtdPniNnJY1FsVge2GVeh2tJFKjm/JvyPDs//8QAIBAAAwABBAIDAAAAAAAAAAAAAAERITFRcYEQYUGR8P/aAAgBAQABPyFubccDBDh+wcRL7yWqfp+JYlU+BnbHaUKTR2mgk70MYlcDdYjKtcCTT5bj9nMgx9j/2gAMAwEAAgADAAAAEGcgwYQ//8QAGhEBAQEBAAMAAAAAAAAAAAAAAQARUZGh8P/aAAgBAwEBPxBFTfvM4K21u+piUnlA5f/EABkRAAMBAQEAAAAAAAAAAAAAAAABETEhUf/aAAgBAgEBPxDAQmJNIa6V6Vn/xAAjEAEBAAEDAgcBAAAAAAAAAAABEQAhMVFB0WFxgaGxwfDx/9oACAEBAAE/EEhWqJIrC5GU1417uQJUsB6bZWN10dd3wy4O+df5nSj27d3H6CKkmovBlSgWVH6xAhwiiPkxE8rDV1cDcjUJcPJWi4ZgFaHP55+PdwVRWV72f//Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Adapt framework" title="" src="/static/adapt-a-b-c-6f041c0cf89a76d91f486eefc0df92fb-49faa.jpg" srcset="/static/adapt-a-b-c-6f041c0cf89a76d91f486eefc0df92fb-17022.jpg 203w,\n/static/adapt-a-b-c-6f041c0cf89a76d91f486eefc0df92fb-49faa.jpg 300w" sizes="(max-width: 300px) 100vw, 300px">\n    </span>\n  </span>\n  \n  <figcaption>The ABCs framework</figcaption>\n</figure>\n<p>It’s important to get comfy with this, because each of these components in the hierarchy has to be in place, even if they’re empty. For example, you can’t just stick a component on a page. You have to have an article and block in place first. And that can take some getting used to. Adapt also runs off of plugins. So if you need more functionality, you will need to (and on the more positive side, you are able to) create a plugin for it.</p>\n<h2>Plugins</h2>\n<p>For example, I wanted to emulate a really cool feature I saw in a SpongeUK course. So I created a small game in the Phaser JS framework. Then I had to figure out how to embed it in my course. SpongeUK created a custom plugin that displayed their game in a modal, but they hadn’t released it, so I needed to build something on my own. I decided that I really wanted people to be able to play the game within the normal flow of the course, instead of having to open a modal. Adapt has a bundled responsive iframe plugin, so I tried that first. It worked well enough, except for two things:</p>\n<ul>\n<li>Firstly, the game loaded before you could see it. Since my game has music in it, that meant you were hearing the game way before you got to that component.</li>\n<li>Secondly, once you did get to the game component, you could skip it. There was no way for me to tell Adapt to stop people from continuing the course until after the game was complete.</li>\n</ul>\n<p>So I got to work. I fixed the first problem on my own by using JavaScript to only set the iframe source once the user had reached the component. The second problem was trickier so I reached out to the people on the Gitter community and Oliver Foster suggested that I tap into the postMessage API to send a message from my game to my course. It took a bit of doing, but I was able to accomplish this. I then used the message to trigger the completion status of the block. The great thing about open source (and one of the reasons I’m so into it!) is that, once you make something that solves a problem, you can offer it back to the community. So I spent several hours on a Saturday figuring out how to turn my modified version of the Responsive Iframe plugin into something specifically for games. And it’s <a href="https://www.adaptlearning.org/index.php/plugin-browser/">out now in the Adapt plugin registry</a> and could use some testers! You can check it out by searching for “iframe.” Things to note are that I don’t think that the plugin is accessible; I’m not sure that the game is accessible either. I’ve overcome several issues on iOS though there are still a few quirks. And the game (and course) design is probably a bit wordy for small phone screens (my fault).</p>\n<h2>First Impressions</h2>\n<p>Overall, I really enjoyed my experience developing in Adapt! The installation is a huge hurdle, so it’s amazing that Learning Pool is tackling that and I think that it will be a huge boon to other folks adopting the tool. I liked that I could customize everything using the framework. And I love that the code produced is well organized, responsive, easy to understand, and is really HTML. All of those things are huge pros, as is the attention paid to accessibility. Furthermore, Adapt’s modular ethos says, if you want to be able to do something and you can’t do it with out-of-the-box functionality, build it! I can really get behind that. I think that Adapt can be really useful for bite-sized and long-form courses. The web-page pattern and authoring tool will be a learning curve for folks who’ve only developed with the main authoring tools. Interactivity along the lines of games is possible but has to be added in using other tools, which might be an issue for some folks. In other words, it may not be for everybody or for every course. But I think it has a lot of potential in a world where the online learning many folks are experiencing looks more like Udacity or Udemy or Teachable, rather than slide-based courses in an LMS.</p>\n<h2>Resources</h2>\n<p>I’d be remiss without citing my sources for content (I know nothing about bikes), so here they are in case you want to build your own demo course:</p>\n<h3>Bike Fit</h3>\n<ul>\n<li>REI: <a href="https://www.rei.com/learn/expert-advice/bike-fit.html">https://www.rei.com/learn/expert-advice/bike-fit.html</a></li>\n<li>Bicycling.com: <a href="http://www.bicycling.com/maintenance/bike-fit/bike-fit-set-your-saddle-height">http://www.bicycling.com/maintenance/bike-fit/bike-fit-set-your-saddle-height</a></li>\n<li>Cyclying Weekly: <a href="http://www.cyclingweekly.co.uk/videos/bike-fit-and-maintenance/saddle-height-why-you-need-to-get-it-right">http://www.cyclingweekly.co.uk/videos/bike-fit-and-maintenance/saddle-height-why-you-need-to-get-it-right</a></li>\n</ul>\n<h3>Choosing the Right Bike</h3>\n<ul>\n<li>REI: <a href="https://www.rei.com/learn/expert-advice/bicycle.html">https://www.rei.com/learn/expert-advice/bicycle.html</a></li>\n<li>Century Cycles: <a href="http://centurycycles.com/buyers-guides/bicycle-types-how-to-pick-the-best-bike-for-you-pg9.htm">http://centurycycles.com/buyers-guides/bicycle-types-how-to-pick-the-best-bike-for-you-pg9.htm</a></li>\n</ul>\n<h3>Custom Bike Building</h3>\n<ul>\n<li>Ellsworth: <a href="http://www.ellsworthbikes.com/tech/">http://www.ellsworthbikes.com/tech/</a></li>\n<li>Daltex: <a href="http://www.daltex.bike/">http://www.daltex.bike/</a></li>\n</ul>\n<h2>Wanna Try It Out?</h2>\n<p>I created an onboarding-inspired, bite-sized course for an imaginary hipster, bespoke bicycle company. Check it out and let me know what you think!</p>\n<figure>\n  <a href="http://knanthony.com/showcase/candvbikes" target="blank">\n    \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 50.208623087621696%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB+UlEQVQoz22Rv2tTURTHb5OmahFRKcVFwaKCOKgEKkVHBR1sUUEcHPwXBFdXNzcXnVpJapPGRtrmpSGxTWOTJnlJbRObvBc1CgVBoWht7fr1e897D2Jx+HDu+fU9596r7K0/8Gjtwf61gy/buzA2fmD+2ybav3fduh0Xp876uY0Gsb5vQgUiS+jEP7EEn4vn99Dui+Zp8wjQ744WECDdkstjP3Pq1TsMJqtQ+iCM59AfL+FKpoZL6TWxZ40qgqlVDNGXmnBOhPpGDRweTaInVpQ+RWEVWsT5hElBOl06wIZDsWWcSVRwarYiYgOzzvk0YyemTeYLUNFl3EmVcDeZR1ekIH1+3kAPu2hUHEHlCh6koBY4OWPi+HRZRPTWffEijr0p4cgUN3o5jxtTWdyf0dekKPt8siEFE3sE9aTeyQIOTDqTnadwnkOgH3wRQ/DRE1x4/AwDoQxv5wkuIji3AuXr+ARJsMAr8neghx6N5PBgIoWrT8cw9Pw17sUX0B/lIH6MFhxMveeGvPs/hP5DR643vOBuzTcfz4qQCtMfy+KcwQ2H01XcTFeEEZ6HMw4jmRWxt9/ypxNlXE6auEX/utQ7Pd5Zx6/NlfGw2ICy2x/RbLcE63MLteYHrDbrWKOtW+tCcb0Gs1FHy621iO6zvT4d/2SjvfEVfwF7xSWp9w3DuwAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="screenshot of the course" title="" src="/static/Screen-Shot-2016-08-08-at-10.21.49-PM-d84bb28421b92b8cd28a96f1c8eec5de-1626e.png" srcset="/static/Screen-Shot-2016-08-08-at-10.21.49-PM-d84bb28421b92b8cd28a96f1c8eec5de-076ec.png 203w,\n/static/Screen-Shot-2016-08-08-at-10.21.49-PM-d84bb28421b92b8cd28a96f1c8eec5de-7ae34.png 405w,\n/static/Screen-Shot-2016-08-08-at-10.21.49-PM-d84bb28421b92b8cd28a96f1c8eec5de-1626e.png 810w,\n/static/Screen-Shot-2016-08-08-at-10.21.49-PM-d84bb28421b92b8cd28a96f1c8eec5de-9af38.png 1215w,\n/static/Screen-Shot-2016-08-08-at-10.21.49-PM-d84bb28421b92b8cd28a96f1c8eec5de-03d88.png 1620w,\n/static/Screen-Shot-2016-08-08-at-10.21.49-PM-d84bb28421b92b8cd28a96f1c8eec5de-ca085.png 2430w,\n/static/Screen-Shot-2016-08-08-at-10.21.49-PM-d84bb28421b92b8cd28a96f1c8eec5de-cfddc.png 2876w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n  </a>\n  <figcaption>Check out the course!</figcaption>\n</figure>',frontmatter:{date:"August 16, 2016",path:"/blog/trying-out-kineo-adapt-open-source-elearning-authoring-framework",title:"Trying out Adapt: Open Source Elearning Authoring Framework",tags:["Adapt","course build","course design","open source","responsive"],categories:["elearning","Showing my Work"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACJElEQVQoz2WSy2sTURTGpzapYlFo0bbaIlm46CsqtW4EXbQIPooYbYtYVNSVC124EAoiiOhCRFuoFoqgbTLpNKkmLUmNiclMJhNS7fTloyhV/5TveO48atTFN+femTu/+33nXkma1Kk6YlDVVIG8SoHEXArnySPGXN25I4h5raLBK+cgyXnUTebEOzhrIVUqOvXkv9BN8wedK3yly6VvdHX+O90w1/+GOj9tVnT4kotoexbEkSfPUT9rYud0UcDtNR4GHst9ol6G9RlrdDi9TPVvStQ+Z1KF664M6OHa8nYZ3ZF3uBCOoZnHNVHjD9DLUbuyq3SFXZ3UPm/El8phbmQ3WkjF7aWfMNZ/wRfR+J0uNre/icdZdneJo/azQxFXyM8OpZDmuoQDRmWE44UKFEh9RHZlDbUc16v808OO1KKlg6kl6mTtmflAdRy7LK4NjZZox9A4Gu8+RMfgI5wKXIcvmIEkNnGBm3hxW2KB2pMLdIhhojbF56mRtXEojsMtrzI4/nIGzaPT8N8fhf/eCA4MDqF1LI4aOWtDBfBoZoW63q/Sfo7ZyvDdsRL52OX2aNGCWf3hpvdMJHBtVsfFO09x4tYDtIwo6H/8AgOvVQTiKqrFVRI92sWABpZ7qqJWlEd1Gt49lcb5RBEDw+M4MzyBvWMxnJaT6MuY6GXgtjADLZuyZuv/i1wOpSpZxb7gHBrEyUbYvWLQ1rCKTnbeFEpbm/4GNDj4JSrDkV0AAAAASUVORK5CYII=",aspectRatio:2,src:"/static/Trying-out-Adapt-88011b9c430c75e3ce9c5ba9107ff766-81d39.png",srcSet:"/static/Trying-out-Adapt-88011b9c430c75e3ce9c5ba9107ff766-9a8d1.png 203w,\n/static/Trying-out-Adapt-88011b9c430c75e3ce9c5ba9107ff766-c53f9.png 405w,\n/static/Trying-out-Adapt-88011b9c430c75e3ce9c5ba9107ff766-81d39.png 810w,\n/static/Trying-out-Adapt-88011b9c430c75e3ce9c5ba9107ff766-fda19.png 1024w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-trying-out-kineo-adapt-open-source-elearning-authoring-framework-637bdb69132c00249e2d.js.map