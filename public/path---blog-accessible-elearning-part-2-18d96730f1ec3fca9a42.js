webpackJsonp([0xb2eea56408f8],{1089:function(e,t){e.exports={data:{markdownRemark:{html:'<p>In my previous post on accessibility, <a href="/blog/accessible-elearning-lessons-learned-part-1/" title="Accessible eLearning: Lessons Learned Part 1">I shared some lessons I learned about implementing accessible designs</a>. In this post, I wanted to take that sharing a step further and offer you some tools and resources that you can use in your own work. I’ll separate them into lists and try to offer a bit of insight into each.</p>\n<h2>Some Basic Tests</h2>\n<p>Before you ever install anything, there are several basic things you can do to test for accessibility in your online course:</p>\n<ul>\n<li>Tabbing through your content to make sure that the tab order makes sense</li>\n<li>Making sure that you’ve tagged headings appropriately and in the right order (for example, that h2s appear on the page only if there’s an h1 first-this can be an issue in Wordpress themes)</li>\n<li>Making sure that you provide alternate text for images (and tables, where possible), or, for more complex images, graphs, or infographics, provide descriptions</li>\n<li>Making sure that you provide transcripts for audio content and captions for video/audio content.</li>\n</ul>\n<h2>Free Tools</h2>\n<h3>WebAIM Color Contrast Checker</h3>\n<p><strong>URL:</strong> <a href="http://webaim.org/resources/contrastchecker/">http://webaim.org/resources/contrastchecker/</a></p>\n<p><strong>About:</strong> Color contrast is a particularly important issue for color blind folks but is also a general usability concern. Users should be able to easily distinguish between foreground and background, or from different items in a group. (Add parking sign pic) WebAIM’s color contrast checker allows you to paste in your color codes to see whether the combination meets accessibility standards.</p>\n<p><strong>Pro Tip:</strong> Consider creating style guides with fonts, colors, and other stylistic considerations early before diving into development. This will let you check color contrast and legibility before you go too far.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 579px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 81.17443868739205%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5ElEQVQ4y51U2XLjIBDM//9YXHnIbo7K2uvyxvKlA4EQINCFegfsZL3xQ8qmqjXooOmeGXEHGuPoI7w/xc/7KcZhGOM8PJ+mKSyJ8WN+Pu7CpRI1kiRFmjLwUmK/zbDbFUjWGUomsUky7HcMf1YHCKH/I/y6QSQU0oHxBpVskJcGpWjQWAfOOaSURFrSXKAoClKsL1SdK42EWlsi01CqARcKsm5Q1wpt2xLBSJYHsjzC2h6PjxRdDxfQBgxfFBJ5WFjXElopGKPRNIYs7mkDhb7v0XUdxY7edZjNRuTMgJGL4IRX9tKy1hpVVUETmdYmEmd5GsmCun/oQwlxyDWREgr6jsjPrUdC61y0GBQpIheUu3Afqn6OYzdMn13xgfMCRUJnLakzUakSVSyEdS1uGZGwTbYwTy9ofi3gFkvYt3loTvi2g++uQySsKX88L8DYASu2xET5ooTF6CmP1+DYh4Ijz3Jq5h2eNi8olaTKjmi7/jbLjbOQ1iArDHaHHuvE4v1dg5XmVL0rCMO3Q8lh578plxvY5Qq9ruGnEZMP8FchKlT0S5WvbxDbBPv1At64Y0Go0iO11DU4Hg7UJqySSFmK5+IZ1p+6H9NtOTweABkWc4b7B477mcbPH/QL2u7iZPkOfwG2+94bcXhX0AAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="WebAIM color contrast checker UI" title="" src="/static/colorcontrast-checker-139da2ae5f6e65e93ae21a7578c8a694-2905a.png" srcset="/static/colorcontrast-checker-139da2ae5f6e65e93ae21a7578c8a694-0de4a.png 203w,\n/static/colorcontrast-checker-139da2ae5f6e65e93ae21a7578c8a694-410a6.png 405w,\n/static/colorcontrast-checker-139da2ae5f6e65e93ae21a7578c8a694-2905a.png 579w" sizes="(max-width: 579px) 100vw, 579px">\n    </span>\n  </span>\n  \n</figure>\n<h3>WebAIM WAVE Toolbar</h3>\n<p><strong>URL:</strong> <a href="https://wave.webaim.org/toolbar/">https://wave.webaim.org/toolbar/</a></p>\n<p><strong>About:</strong> The WAVE toolbar is a browser add on that helps to identify accessibility issues in your content and can even generate a report. It has nice, clear identifiers and good feedback. There may still be a few bugs but overall a great tool.</p>\n<p><strong>Note:</strong> With rapid elearning tools, we are, in many ways, bound to the limitations of our tools, so you may not be able to squash every accessibility problem identified with your output. That said, you should still try really hard.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 43.279172821270315%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACd0lEQVQoz02RWUiUYRiFf9EWu4hEXFooKgKjqAsNWuiiiJKyIiompRRJE61kxBYKtU2FJAmJComworAwyaIiIqUysGx+Z8aZJp3CbEynGWeff5Yc7elzueji8H688D2c9xyp/WM7fT8sOB3D/PD4kd0KepeHbpcXo9uL3qOg9YWFQuiUEeRhDx0WG3JwDNk/MiGNMoomMEqXN4Q0MGzFFxiBkELlUJhZ+hDLjAGWGIMsFXOx1k1yl4dk2U2ixsVcjZOkN2ZmdNiZ1uliuuwjtn2Q2W19RBv+IPmFm8CfiAAGuTAYJloAE7uDzDFFmP/+J+klZeSVnqL4+FEKigopO3uGvYVqdhQUoy5Ro8rN5djBA2w8V4PUC5LtVx8unxPCCpeEwxjdJDBOABe+7Wdt7R3W333BpoYWNt17zob6JlJuPWPRzWZWXrvP0isNrLnRyLyWz0jGCNLPgQ/YXQYYC3Nx3OEUMN4QIvYbLOgZoaJ3mAqzkyrjAJd7rGJaqDBYKDcNUS3em3V2JBPib0BkaBtCCYmTI5PAGG2ABAFL0CtsffAadeMrqm7f48jDJ6Tq3GzQ2knVWEnR2Fgu21khZrLGgaQLIumFbG4H/kBg8uQp4JzeUbZdb6Imu4qrhTdRbc+irjYblfYTUcJ1tFlk9WUMSRsWEFFEd5iocZjIX7L+tvLb4Z1wWDkolqa/rHvUyqW8aupKm6k78Zg81UlycjI4dSaf1fVPWdjwkpmt460KYJeCJP+nto5O3snd4Pdy3hYhqe07uaK5zH2ZZGcdJv9QEVn7c9iZvoXyw3s4XaRi964MVqWliULukNAPiV99xPf4iTMH+QexrhLUEyWf6AAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="WebAIM WAVE UI" title="" src="/static/WAVEToolbar-0f7e1b818a6f06fa9f0bac76729346b8-1626e.png" srcset="/static/WAVEToolbar-0f7e1b818a6f06fa9f0bac76729346b8-076ec.png 203w,\n/static/WAVEToolbar-0f7e1b818a6f06fa9f0bac76729346b8-7ae34.png 405w,\n/static/WAVEToolbar-0f7e1b818a6f06fa9f0bac76729346b8-1626e.png 810w,\n/static/WAVEToolbar-0f7e1b818a6f06fa9f0bac76729346b8-9af38.png 1215w,\n/static/WAVEToolbar-0f7e1b818a6f06fa9f0bac76729346b8-00b12.png 1354w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n</figure>\n<h3>The Readability Test Tool</h3>\n<p><strong>URL:</strong> <a href="http://read-able.com/">http://read-able.com/</a></p>\n<p><strong>About:</strong> One population that isn’t always considered are people with cognitive disabilities. Making sure that your content is mentally accessible (understandable) is another important accessibility must that also greatly increases usability for all members of your audience.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 602px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 124.25249169435216%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAAAsSAAALEgHS3X78AAADtUlEQVQ4y41V23LaWBD036YqH7HPqdS+5j82W5UHP6xhbYiJAYNAXCSQQIIAQuiCEHeh3pkjJIOdTfmUB0kH1Kdnumd8g/MKwxD7/V7EZrNBFEXZ83a7FbHb7UTw3nq9zu7jOM7ihj94VSpl5HM5SFIDt7e3uL+/R/4uh9zdHfL5PP7N5dGUWygWC/j+WEJblvH4vYhKtZZyugbkFR2POJ1OIg6Hg2B5PO/xM7PyXBeO44iM+Mrh+z48z0sAE2S8a8WnODvwV5EBnk4RxiMTw8EA/b6GwUCHOTJgGEMMKXRdF/V6z7o5Jw/LsmGaBkYEPKd7a0IxtTGf2ZiMLAT+GmGwo9his95hEyax2+zfAsbxCQvXxHK5RBAssV5t4Vkr+IsQK29L1xU824Mzc+BaS7HvzgNYYxe+sxLpcr2zlI/RGlXtTxiU5mAwhKZpMIgtR6+vUMoW+tpKhGFM6LmHyXSKYLUUgrgkFJPJAA9RiEL7DwLToKp9qL0+dE2nF7mmKtptneInxZgO45pq4uDJZAqXVF4sFtcqH6MNpOEXTKemEGL80xTCGEYiDAOMxwZ9PyZmE6rzCAM6jAGDIBBgfD0DxuKPWGNuA74HOpGVf6eVLrrkwocxMXAonSmxmZF95piSumzm1y+9PP8aPAP0PAe2PYO9sKguc7q3saH+Tbolyl5KDcz70ZG/22N38MS+sE16ak/rQW61SRAFzZaMuiRBqtVQLpehkbHTtaCDfKoZ+3Wgm2gpj/i7+JF8PH8F2O9Ro1fQaEgoPT2hSveqqpAopujbNBPuZ1aWm0DXDMjdAr4WPmI2s64BZbmJUqlEQM8E3hcs9vtDluYpStJeh2uhasJwjJZaw18PH94C9lQVT5Rek4C73S6ZWBNmTZmJ2tF9wN209In5iN5pQO18QrX5lSw1uwYck7dazSYURUGr1cKPpx+QGnWqqSp8lzLlccYlME2TUtbQUb7hn/LnC4bn4eA4LizanFFLeZ6f9ScDpH16GYnadEjMnbbJLJXZhvuRrTK3yDauJ0D+z8inK9fHryd2sjkYDqF0VUj1OqXagMOtw1OcgNMBystzHcws60Wsi+H6AkgfLEKn3RV26XTaWJA10kILE2cqh5TJ4s1h2cROc+eR1WiQKKSwVKujRvaR6Z8ST5X0N3ua2lOqsUu2+Q3Ds21IzYeHAqUrie6oVipokurFYpEmTMr0SIPDzmbfbxmyNcrlKrGS8fxcFcAKebNN7ZjWk38brgIaVatMnNeA/wF6mGhQWB6hqQAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Readability Test UI" title="" src="/static/ReadbilityTestTool-aadb058359250e762d50ad7d320298b6-26dce.png" srcset="/static/ReadbilityTestTool-aadb058359250e762d50ad7d320298b6-707a2.png 203w,\n/static/ReadbilityTestTool-aadb058359250e762d50ad7d320298b6-6bab0.png 405w,\n/static/ReadbilityTestTool-aadb058359250e762d50ad7d320298b6-26dce.png 602w" sizes="(max-width: 602px) 100vw, 602px">\n    </span>\n  </span>\n  \n</figure>\n<h3>FireEyes Firefox extension</h3>\n<p><strong>URL:</strong> <a href="http://www.deque.com/products/fireeyes/">http://www.deque.com/products/fireeyes/</a></p>\n<p><strong>About:</strong> The FireEyes extension works with the Firebug developer extension in Firefox (whew! that’s a lot of fire!) and is yet another tool you can use to spot accessibility issues and create a report. It’s available for free but requires a signup.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 700px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 47.42857142857142%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHTa1iAD//EABoQAAICAwAAAAAAAAAAAAAAAAIDAAEQIjH/2gAIAQEAAQUCYwhLaVzP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgEFAAAAAAAAAAAAAAAAAAEDICEiMqH/2gAIAQEABj8CxjbNuF6P/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARECExcf/aAAgBAQABPyFQaHpBcUUtb5HuGf/aAAwDAQACAAMAAAAQAM//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMXFBgaH/2gAIAQEAAT8QFc0RyuVBBQNFiMfYEBpy4X6mzhDxwm0//9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Fireeyes UI" title="" src="/static/Fireeyes-12eb7e5a2c45dee173174be70c48dca3-3ac5d.jpg" srcset="/static/Fireeyes-12eb7e5a2c45dee173174be70c48dca3-dbd99.jpg 203w,\n/static/Fireeyes-12eb7e5a2c45dee173174be70c48dca3-c30da.jpg 405w,\n/static/Fireeyes-12eb7e5a2c45dee173174be70c48dca3-3ac5d.jpg 700w" sizes="(max-width: 700px) 100vw, 700px">\n    </span>\n  </span>\n  \n</figure>\n<h3>NVDA Screen Reader</h3>\n<p><strong>URL:</strong> <a href="http://www.paciellogroup.com/blog/2008/01/nvda-a-free-and-open-source-screen-reader-for-windows/">http://www.paciellogroup.com/blog/2008/01/nvda-a-free-and-open-source-screen-reader-for-windows/</a></p>\n<p><strong>About:</strong> JAWS Reader may be industry standard, but it’s also an expensive specialized program. If your team is on a tight budget, you might try testing your content using NVDA, a free and open-source screen reader.</p>\n<p><div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.49999999999999%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube.com/embed/qOQ7zELFmLE?rel=0" class="embedVideoIframe" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n      <style>\n        .embedVideoIframe {\n          border: 0\n        }\n      </style>\n          </div>\n          </div></p>\n<h3>Amara.org</h3>\n<p><strong>URL:</strong> <a href="http://amara.org/en/">http://amara.org/en/</a></p>\n<p><strong>About:</strong> I’ve been using Amara.org for a while now. It’s my go-to online program for easily creating captions and exporting them to various web formats. Yes, Camtasia allows you to create captions but they are only usable if you host the video yourself with the Camtasia player. If you want to go with YouTube or Vimeo, for instance, you will want to use a web-standard for captioning like WebVTT. Amara has a pretty easy process. Even if you have scripts, like I often do, it’s simply a matter of pasting in your script in small chunks and then syncing it up with the video.</p>\n<p><div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.49999999999999%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube.com/embed/aQ-xe-GSjdA?rel=0" class="embedVideoIframe" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n      <style>\n        .embedVideoIframe {\n          border: 0\n        }\n      </style>\n          </div>\n          </div></p>\n<h2>Checklists</h2>\n<h4>WebAIM 508 Checklist</h4>\n<p><strong>URL:</strong> <a href="http://webaim.org/standards/508/checklist">http://webaim.org/standards/508/checklist</a></p>\n<p><strong>About:</strong> WCAG 2.0 and Section 508 are big, complex documents and for most of us are TL;DR (too long; didn’t read). So WebAIM created a handy checklist to put the “what’s in it for you” front and center.</p>\n<h3>WCAG Checklist</h3>\n<p><strong>URL:</strong> <a href="http://webaim.org/standards/wcag/checklist">http://webaim.org/standards/wcag/checklist</a></p>\n<p><strong>About:</strong> Similarly, WebAIM has also created a pared down WCAG 2.0 checklist to help you to easily check for things that you can do to make your content more accessible.</p>\n<h2>Accessibility in Elearning Tools</h2>\n<h3>Articulate Storyline Accessibility Features</h3>\n<p><strong>URL:</strong> <a href="https://www.articulate.com/products/storyline-section-508.php">https://www.articulate.com/products/storyline-section-508.php</a></p>\n<p><strong>About:</strong> Information on accessibility features in Articulate Storyline</p>\n<h3>Building Accessible Courses in Lectora</h3>\n<p><strong>URL:</strong> <a href="http://lectora.com/blog/thursdays-trending-e-learning-topic-accessibility/">http://lectora.com/blog/thursdays-trending-e-learning-topic-accessibility/</a></p>\n<p><strong>About:</strong> A curation post from the Lectora team with links to different articles they’ve created on making accessible courses in Lectora.</p>\n<h3>Adobe Captivate Accessibility Features</h3>\n<p><strong>URL:</strong> <a href="http://www.adobe.com/accessibility/products/captivate.html">http://www.adobe.com/accessibility/products/captivate.html</a></p>\n<p><strong>About:</strong> This page specifies Captivate 7, but hopefully it’s still useful information for Captivate users.</p>\n<h2>Inspiration</h2>\n<h3>Accessibility Wins</h3>\n<p><strong>URL:</strong> <a href="http://a11ywins.tumblr.com/">http://a11ywins.tumblr.com/</a></p>\n<p><strong>About:</strong> Accessibility Wins is a recent find of mine. It’s a Tumblr dedicated to cataloging accessible design “in the wild” (implemented in live web pages). Best of all, the curators also provide commentary on the specific accessibility win on the page, what they love and what could be improved. It’s a great source of inspiration whenever it seems like designing accessible content might prevent a certain design concept.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 780px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 101.15384615384615%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADnElEQVQ4y32U+U8bVxDH/bdGkSq1aqX80lZqkaLkl1ahTapAmovGhSa0JQFzNKEGB7A5fRUb25grGONr1+vdtb02+Fh/+tawLYfb0Y7mvXnzvvud2Z1xIKTT6dA5t6ZpYou1t6XZbF46uxpjW4e9Mc8dc2430zNvmZ19x5LXSzDgZ2ZmhlA4jGd+jqWlJbxeHx6PB9fkJEat1hvQdmQyGXZ2dkkkEvh8PiKRCH7/RncdjW5199vJJKFQiLiIsZhfA+yVomm2mZtzMzHhIizYTYyPMzU9w6RrgnT6mP+657hYA7uGtrbb7a7W6jUq1SrNVouW0K7fPFOzY16qo+PqG3qJ2WzRPG3A/4T9k/JFdLVhIDdLyK0KWvsErVVH4gSFU6RODcmsUWhVyTY0FBGbNTSWs0lOWo1/GdqAptnh6KRAqn5EplkmaaSJlQ/wJhbYTEU5yH9gN79LvqGydSrhlffxFg/4I7OFflrrBWhyXFfYqxVYL+6xIoVZLyeYWPiZ9dh7ErlN/jpcZqe0xYp2iLuUIqKnSFbTlE/r1wE7gqErMY8ns8KGnmBNjbIcnMK9H8CXj+I59jOUDDKdWmUjHWBl00ugFGftKED1KsPOebWfrI4yEB4lsjlLaPhblvo+Yuqne7gP1nm5OUm/38uA/w2Tvhe8f9qHb3UM59pr1KrWA1A8wyEXdzwPWfytn7cjd3g1/4hnK06eh6f4fm2a+6EZBiMj3I+O8Cz5hgcLg9wc+5qsJp2VTfxCjotd8lQwvDH6OXdXnzCYHGMw9isjcSe/z37Dy8UhxmJOHsd+4Tv/EANbr/hy4Qc+Gb9NTrcBO5cB+/98zBfOW/RN3+Xe4gOR4gu8wVtshz4lEvyMWPgGztCPPFx7zqPIMB+7bnPz9Vdk9asMz2sYySQJpsIkMlG8+37CUpJ4cZuQkiOgSMTlONFCkl1lT6x3WP4QxHsQwOj1lZvNBmVVp1Y20IU1ylUMvSJ8ZXRFpaJqVHVDnFfRSjoVcWbFnlTrtFvt64Bt0aOyoiAXZWRZolgqUVSKlEoKirBF4ZOLErlcDkkS58UiBalAVfT4xVngsPBs0Eq9QTab7V7q2nyBjKyQzkkcZvKomt4FMAyjq9baUnsUXOsUWbxVluUuoy7LoiJYyIKpilLS0DQNXdcF8JmtVCpi8phXGZ4BtsSgzAlW+Xwe2UpJABcKBfKCrZWeJNKz1NrnRIyVhaWqqnbngA36N37KvGwADazrAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="accessibility wins website" title="" src="/static/accessibility-wins-297e8541da4029c504b6a3412ca8d4e9-a0323.png" srcset="/static/accessibility-wins-297e8541da4029c504b6a3412ca8d4e9-d6dd1.png 203w,\n/static/accessibility-wins-297e8541da4029c504b6a3412ca8d4e9-8ab29.png 405w,\n/static/accessibility-wins-297e8541da4029c504b6a3412ca8d4e9-a0323.png 780w" sizes="(max-width: 780px) 100vw, 780px">\n    </span>\n  </span>\n  \n</figure>\n<h2>I’m No Expert</h2>\n<p>Obviously, I’m not an expert and I’m still learning myself, which is why I wanted to share these tools with you. Given the audience for the content in my organization, we usually have to balance our attention to accessibility with development time and creating interactive crime scenes, for example. So it can be a struggle. Are there any tools or tests that you use? Any specific issues you’ve found implementing accessibility in your authoring tool? Let me know in the comments.</p>',frontmatter:{date:"April 27, 2015",path:"/blog/accessible-elearning-part-2",title:"Accessible eLearning: Part 2",tags:["508 compliance","accessibility","programs","resources","Section 508","tools"],categories:["Design","elearning"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC1klEQVQozx2S609TBwDFr8kSZ8AuiopEnEYBrbU8LNyipYW1lNvHLembljZiA4UiXWorGw/RiPMBTpBqKiCEWecrYxta91BiRIJbsrF92df9MT9v/PD7cpJzkpNzhJbYRTyZCfxfT+EfmcE3NEPw4izR0SmkrgwaU5D91Xa2Fh9ii1CCIOxEd+AwssHCtjI9xTvUiqZl3z4DJbuOI2w7EqS8eQCtb4y6zss0xG7QPrpA9JtFguOLxG4/IZP/HbXRqxg/UVBRtr2ckdExuq7P4hu8QkVjgkqNl1rRjLBT7KXKNYwpfhPH+ZwSkqc/VyCzWODcwku67yyTWnqJlJhiR6kN0Rqkub2L+HiW9N08gZFb2INJbC0uahssSmC5HkdggMcrb5iZf0ruux/JPVjm1bs/WV17z9v3m6z98TcvVv/l6c//sPnf/zxcLpC9O8/G+gYumwurUl82GHBbTAgHD9aSSg2z8tMK83P3uX9vlkcPlvh1ZZnXz3/gr/VVNtd/Y3K6wNzSLzzJP2M6+z0ba68pPMuT7g7TE/IRdcv47FYEjdZIKBynry9NJNLN+cwQY8OjTF67Ti47Q276JgtzCzQ7rpJMX2No8AL1TT1c/fYOkyNJvopHSYR9hF1O3FIbQtFnGsSmALI/ieRO4I1k8HWmCJ/JEB+4QG//INHYEKeTWW5N3ODK2CW+7E/xcHaC8XO9JCNeYl6ZTlnCb2tF2Fp0jANVbdSd7GBvhURplZOjYhC9OcJJSxiDOYjB4MAh+0knerCb7VhNVuxftGEQWz5yovoU1eoT1KlrlBcIZXxadBzVLpHiUiOq/VZ2VzqpqO+gsiHAYZ0btU5GrbVwtFaiRpSpEx3U622YjBJmYyumRiNijQ7dMS2CSlVByZ4aPj/UiEbbgk5so8nkxNraTofHz+mOELGAh7OdXgaUeomQmz6FMx4nUZdEyG7Bo6wrm07RqtfxAcPloBcW16BIAAAAAElFTkSuQmCC",aspectRatio:2,src:"/static/Accessible-elearning-P2-8b32c45bf17751a2d9396813c7805faa-81d39.png",srcSet:"/static/Accessible-elearning-P2-8b32c45bf17751a2d9396813c7805faa-9a8d1.png 203w,\n/static/Accessible-elearning-P2-8b32c45bf17751a2d9396813c7805faa-c53f9.png 405w,\n/static/Accessible-elearning-P2-8b32c45bf17751a2d9396813c7805faa-81d39.png 810w,\n/static/Accessible-elearning-P2-8b32c45bf17751a2d9396813c7805faa-fda19.png 1024w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-accessible-elearning-part-2-18d96730f1ec3fca9a42.js.map