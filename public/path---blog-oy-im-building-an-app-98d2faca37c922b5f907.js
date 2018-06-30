webpackJsonp([43648790207141],{478:function(e,t){e.exports={data:{markdownRemark:{html:'<p>With the xAPI Cohort going on now (it’s not too late to join up) and me being swamped in work, I thought I might as well take a side project that I’ve been working on for the past couple of weeks and have it send xAPI statements… so I’m building my first app!</p>\n<p><div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.49999999999999%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube.com/embed/N39ZQC5WlFk?rel=0" class="embedVideoIframe" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n      <style>\n        .embedVideoIframe {\n          border: 0\n        }\n      </style>\n          </div>\n          </div></p>\n<h2>Context</h2>\n<p>So this app came out an idea I had originally Ellen Hayes, an ID I interviewed on the <a href="https://dearinstructionaldesigner.simplecast.fm/episodes/be5256ab/episode-42-online-course-for-a-student-maker-space-with-ellen-hayes">Dear Instructional Designer</a> show. As you all know, I’ve been interested in how I and we can facilitate a more hands-on learning, practice, and development experience for ID newbies. I’ve written about using <a href="/blog/civic-learning-an-idea-generated-from-torrance-learnings-download-un-conference/">open source and civic tech projects</a> as a way to gain elearning design and development experience. And I’ve <a href="https://kristinanthony.withcoach.com/go-design-something-building-your-job-winning-portfolio">developed a whole course</a> (soon to be released for free) that includes various methods for finding good portfolio projects. But I’ve also been interested in the aspect of building community and mentorship that can happen when IDs work together on a project. So Ellen and I hatched a plan to create a tiny web thing and we wanted it to be at the intersection of our interests, UX and web development.</p>\n<h3>Then…</h3>\n<p>I went on my first vacation in about 3 years and decided to go totally dark. Then I came back, caught up on client work, and tried to get back into it, but Ellen was busy. So that was definitely a lesson learned, if you’re trying to build a product collaboratively: Make it even tinier! Like, weekend project tiny! But I didn’t want the project to die. Later, on the Instructional Design subreddit, there was a poster who was asking about the best way to sell their own courses and someone else suggested making an app and selling it for $0.99. And, of course, the natural next question from the OP was,</p>\n<blockquote>\n<p>How do you do that?</p>\n</blockquote>\n<p>And I thought, “Yeah, how do you do that?” So, during Hurricane Harvey, when I thought the power might go out (we were very fortunate, no damage at all; but both Houston and Florida residents could use your help!) I decided to just start!</p>\n<h2>Building the Project</h2>\n<p>I did a little looking up of a couple of frameworks I had previously heard about that would allow me to create mobile apps using the programming language I know (namely, Javascript). I decided to use <a href="http://ionicframework.com/">Ionic 3</a>. Content-wise, I took from the outline that Ellen Hayes and I had made as well as some of the resources she had gathered. Design-wise, I was inspired by card-based microlearning apps like <a href="https://itunes.apple.com/us/app/google-primer-learn-marketing-fast/id918628107?mt=8">Google’s Primer</a> and <a href="https://itunes.apple.com/us/app/startup-patterns-bite-sized-startup-lessons/id1142253405?mt=8">Startup Patterns.</a> I knew I wanted a user to be able to choose from a series of lessons and then swipe through cards to go through the lesson. A card might contain text, a video, or a question. I also wanted a person to be able to see their progress inside of a lesson, as well as from the home page, and be able to get back to where they were easily. As I kept building, I tried to keep things small, but also made sure to add features that I felt would help the experience be better.</p>\n<figure>\n    \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 133.33333333333331%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAekmQzXIg8GmgYL/AP/EABkQAQEAAwEAAAAAAAAAAAAAAAEAAhAREv/aAAgBAQABBQIPOPZ4yy3bJnTv/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFxAAAwEAAAAAAAAAAAAAAAAAAQIwUf/aAAgBAQAGPwILlP/EABkQAQADAQEAAAAAAAAAAAAAAAEAEBEhMf/aAAgBAQABPyETPBkQQJrOzf6xdm0a/9oADAMBAAIAAwAAABB4JvL/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEQMSFRYZHB8f/aAAgBAQABPxB1WmXrRUN35ZUm0Kn3JsfWICo33iq4hjfMNT//2Q==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="app sketches" title="" src="/static/app_sketch-ba1a74f418af610e278c76cd3a76a0b3-aabb5.jpg" srcset="/static/app_sketch-ba1a74f418af610e278c76cd3a76a0b3-2320f.jpg 203w,\n/static/app_sketch-ba1a74f418af610e278c76cd3a76a0b3-427c1.jpg 405w,\n/static/app_sketch-ba1a74f418af610e278c76cd3a76a0b3-aabb5.jpg 810w,\n/static/app_sketch-ba1a74f418af610e278c76cd3a76a0b3-f0fe6.jpg 1215w,\n/static/app_sketch-ba1a74f418af610e278c76cd3a76a0b3-c6859.jpg 1620w,\n/static/app_sketch-ba1a74f418af610e278c76cd3a76a0b3-648e9.jpg 2430w,\n/static/app_sketch-ba1a74f418af610e278c76cd3a76a0b3-025cb.jpg 3024w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n    <figcaption>My initial sketches</figcaption>\n</figure>\n<p>Getting the app started was actually really easy! Ionic has great documentation and even an <a href="https://github.com/ionic-team/ionic-conference-app">entire demo conference app</a>. But my first hurdle came when trying to replicate the tinder-like card animations. I found two separate plugins that would allow me to implement this, but I couldn’t figure out how to allow a person to go back a card through a swipe event. I tried really hard, but eventually, I decided that this UI wasn’t essential to the app and decided to pivot in favor of moving on instead of getting stuck. Ionic has a ton of great built-in components, and I restyled their slides to fit the bill. After that, development was once again, relatively easy, until I decided that I wanted to try and send xAPI statements from the app, which meant that I now needed users to log in. Instead of allowing people to create their own username and password, I’ve decided to use social login, so that people can log in to the app using Google and Twitter. That took me several hours to get working. Finally, I’m at the point where I’m trying to embed the appropriate code to send statement! After most of the weekend spent trying to get the YouTube Iframe API to work in the app and access the calls I wanted, I’m ready to start the part I’m not confident on: making well-formed xAPI statements! Here’s what I plan to track:</p>\n<ul>\n<li>Initial log in</li>\n<li>Start Lesson or Continue Lesson</li>\n<li>Lesson progress</li>\n<li>Question answered and answer chosen</li>\n<li>Lesson completed (should only trigger once)</li>\n<li><span class="s1">Video watched, completed, etc. (<a href="https://registry.tincanapi.com/#profile/19/recipes">https://registry.tincanapi.com/#profile/19/recipes</a>)</span></li>\n<li>Link clicked</li>\n</ul>\n<p>As others have said, the hard part with xAPI isn’t the sending of statements, it’s really the planning out of the data and I’m still really new to the spec and trying to make sure that I’m doing things right (which is where having a community in the cohort helps!). Last cohort meeting, Sean Putnam also offered up one great way to look at thinking about your data plan, tracking participation vs tracking performance. For this app, definitely participation-based metrics are what I’m after!</p>\n<figure>\n    \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 730px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 102.73972602739725%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAAC4klEQVQ4y41U2XLTQBDU/38EPPAH8MAbRRUvoaCIkxhfknWvVocv+cAJFDTda8uYlAl5aM/I0s709MyOdzfy0bsb4OrzNa5p49wiTA2irHge8j9+EGfwcluirGtMwwjD0Qi2rLBYtVi2xOo/4Dez+cLZVbvGYrmCN+PPbX+Am9s+msUC9WyO2WL5LMx5duIHSLMcDc8pibfd7/Hi5Su8ef0Wu/29+6hDd+ipoO16g4wBy6rC/cMDvKqZod1sYesGMV+ESYo0N6cDzYlN6yA5OijZar0mw4zsVgz4HZ6hZkVhkcQRamZZzOcObbvCmtoI8mdNg4Zai4mtahQ811A/6TadhojiBLtve3gRGfVGAd5/GeJLkGOQNeinNfpJRRzsHfFpFONqEOF2EiFOU4QMIDItGdqyRMVkrmRT1hhHGT72J7jxE/SIzvYmsfNvgvRk/YQjRRKG0yEpNtutKzlOEqw3GwasGhhjEIZTlNaiZDbB0re2cP/Zojg80xa0CtRpmFOuiMFyvmsolZfZyjVhzPaPJ76zk2AKn7roYzGRzYvy9FyygRovNUnBdG6z3Tk4hhJ0xD/jNHPlJLTyD4EKZEYw7lm+CMgX0+1u51jvOXI/f/w6lsyXErk70B1y4CglhPwky1wCJRNLVzYvgx8EHOwZbFuwZJaiD4bjiYPPcgNeQ1mVp9I0q+fQ2MhqbDSHhklyVvAhfQcvNdYF+DocYTAcU7/QsRXiJDvKIJs7OVIuAwU01F4s3U3Jc87jkiWDy4Fjk7GcrhEKrvLEzjgN7akZkkJBzq+nng+aFqhYNreNupy7gMI0ig83YNVexPndli+2ORMpqYK7gMqs9aWSwmPAJdfRvxbD+fI4rLr1KdmRoXGz5B/LPnQ4d8I/ZvT4+XGyI0PjtAuOLEVdpYjpU+vrfMV1cE1RJ0ccGbHUkCuQUB9H4/zApX35d0AyNO4+pm5wFVyNUdnytaZ08NImvxT0N4CtFLIAFJt4AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Trello board card" title="" src="/static/Screen-Shot-2017-09-11-at-6.31.04-PM-76d6421e0312552d3e5be6eed15d77e8-366d0.png" srcset="/static/Screen-Shot-2017-09-11-at-6.31.04-PM-76d6421e0312552d3e5be6eed15d77e8-bf4d2.png 203w,\n/static/Screen-Shot-2017-09-11-at-6.31.04-PM-76d6421e0312552d3e5be6eed15d77e8-68154.png 405w,\n/static/Screen-Shot-2017-09-11-at-6.31.04-PM-76d6421e0312552d3e5be6eed15d77e8-366d0.png 730w" sizes="(max-width: 730px) 100vw, 730px">\n    </span>\n  </span>\n  \n    <figcaption>My expanding trello card for initial development</figcaption>\n</figure>\n<h3>Got Any Suggestions?</h3>\n<p>I’m hoping to release the app by the end of the month (definitely by the end of the cohort). Almost all the code is on Github here: <a href="https://github.com/UXLX/uxlx">https://github.com/UXLX/uxlx</a>. (I haven’t shared any of the assets (they’re copyrighted) and I’ve also not shared my LRS set up as it contains the credentials). Also, if you want to checkout an alpha version of the app, and give me feedback, you can do so like this: You can view the app in its current form by downloading this app: <a href="https://view.ionic.io/">https://view.ionic.io/</a> And searching for this: <strong>d3310808</strong> Ionic View is currently only available for iOS, though they do have a legacy version for Android (not sure how it works). Note that the app is a bit wiggly and can be turned landscape in this testing environment. Those things won’t be true when the app is in production. Would love to get any feedback on how to make it better from an ID perspective!</p>',frontmatter:{date:"September 12, 2017",path:"/blog/oy-im-building-an-app",title:"Oy! I'm building an App!",tags:["app development","Ionic","xAPI"],categories:["Design"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB/klEQVQoz4WSy2sTURTGM81zklZNtUmT+GjrP9KVqxZTmypqBRFx4cbqouCiMYW2i7Zguyg+0J2Civ9NELIJeU0m0yHmOZNMyOPz3HvNKKJ44WPmXu798Z3vHMfMhRn8S7OhMGSfjJV4HFVrgGqjCdM0YRgG0uk0stksut0u2rQ3DBOdTgcOWvifLs5dxfbLE6QOjpE6PEbyQGhr/8j+Z3q+d8juT0BIPHa5PJAk58+9OD9zPoz9V++RqVTwrVhC5VRHWdOhnv5SQVHxaHOL3ZfgnHBRaX64CRYMTuPc2SA8bi9kOcCBU9MhvPv0FW3TgF6tot1qcdVrNdRIJp2z9Sy1J0qOhGdx+8YK7t1cw93EKh4/uI9b8etYXVoSQHL49uMXNOo15HI5qKrKpZTLKBQK0DQNlmVhI7k7LtmBaDiCh+t3kFhexrXFRayvJRDwT9olv/7wGabRRj6fR7FY5MAyARVF4cDhcPg7UMJkYAoLc/O4cukyYtEYYpEoz3Ps8A0BNcowk8lwIAOXSiUu1u16o4GnomSJN8FPbjweH1yUndcrc/koVxtIJfdpRAzKjq3RaGSLLebwSXJHAIX+NjKS3RSWYY8efqesBoMBB4xBzWYTVq8nSnaTI9Zd/v1DzLGT3AdDUQ5sjYao0BD3+30u5o4BdV3nA7/xYhc/AItg1IxFHxQHAAAAAElFTkSuQmCC",aspectRatio:2,src:"/static/Im-building-an-app-66ba4d2e8dd0ebedd5910464af653d36-81d39.png",srcSet:"/static/Im-building-an-app-66ba4d2e8dd0ebedd5910464af653d36-9a8d1.png 203w,\n/static/Im-building-an-app-66ba4d2e8dd0ebedd5910464af653d36-c53f9.png 405w,\n/static/Im-building-an-app-66ba4d2e8dd0ebedd5910464af653d36-81d39.png 810w,\n/static/Im-building-an-app-66ba4d2e8dd0ebedd5910464af653d36-fda19.png 1024w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-oy-im-building-an-app-98d2faca37c922b5f907.js.map