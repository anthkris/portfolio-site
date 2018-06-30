webpackJsonp([0xb03e23370b8f],{1238:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I’ve been in a terrible rush these past couple of weeks, splitting my time between more <a href="/blog/what-im-learning-from-my-open-source-contributing-experience/">Oppia projects</a>, some side work in instructional design, some algorithm practice, and my January entry to One Game a Month, Supply Run! As I mentioned at the end of season 2 of Dear ID, I wanted to get back on my game development learning track ASAP. I was able to complete another module, this one on creating an endless runner, and, as I try to do regularly, I decided it was a good time to take a break and make my own game, to put what I was learning into practice. This happened to coincide beautifully with the #100DaysOfCode challenge, which I have been enthusiastically following (<a href="https://github.com/anthkris/100-days-of-code/blob/master/log.md">you can check my log on Github</a>)! So it was a good time! I have several game projects in my great big board of ideas, and since I had just completed a module on creating an endless runner, that was the type of game I chose to make. You might have thought that creating a procedurally generated endless runner right after following a tutorial would have been easy work, but … you’d be wrong. Things started off well but I soon found some glaring problems with my code.</p>\n<h2>Problems and Solutions</h2>\n<h3>A Code Refactor</h3>\n<p>By far the biggest issue I encountered was the fact that my player would not stay still! The way the game worked originally was that the player was meant to stay in one spot and the rest of the world moved underneath her. But I kept finding that, no matter what, she was moving imperceptibly backwards and forwards over time. I searched and searched and searched and I couldn’t figure out the root cause. Finally, after waiting what was probably too long, I asked a question on the HTML5 GameDev forum and was able to get some help. Unfortunately, the help said that, basically, physics systems (the system in the game that mimics real world physics for running, jumping, bouncing, and things like that) aren’t precise, and that there was little I could do to help my player to stay in one spot. My options were to try and force it by continuously setting the player’s position, or to create a bunch of custom code that would change the physics. Well, I tried to set the player’s position, but it introduced another issue where the player would no longer run into the sides of the platforms. She fell straight through! I didn’t want that. I also tried creating some custom methods, but that seemed like a ton of work for no reason… I knew there was a third option, but I was dreading it… completely redo my game so that, instead of the world moving, the player moved. I think I succumbed to the sunken cost fallacy for a while there, but in the end, after attending this really amazing women coders meetup, I got confident (and desperate) enough to attempt it. And wouldn’t you know, the necessary changes weren’t nearly as extensive as I thought! It simply took commenting out a few lines of code. However, I did have a very sticky time figuring out how to let my platforms know when they should generate another one. For example, in the previous methodology, a new platform would generate every time the last tile of the old platform had left the edge of the world. For various reasons, including the fact that I was now following the player with the in-game camera, that wouldn’t work anymore. I was finally able to figure out that I could perform a similar check for then the last tile of the previous platform had left the camera view. Seems simple now, doesn’t it?</p>\n<h3>Setting the Difficulty</h3>\n<p>Probably the other big thing I had an issue with was trying to make my game speed up over time. My original inspiration was the Half Brick Monster Dash endless runner (though I also looked at other endless runners like <a href="http://adamatomic.com/canabalt/">Canabalt</a> and <a href="https://flixarcade.netflix.io/">Netflix’s Flixarcade entry</a>). I noticed that they ramped up their difficulty by making you go faster and faster as you ran farther. I wanted to have this feature, but again, search as I might, I couldn’t find another endless runner that used that as a form of difficulty. It took quite a few days of talking to myself to figure that one out. This was actually something that the new methodology made easier. My final solution had been to use a looping timer to increase the level speed every few seconds. This was a huge pain in the butt when all of the platforms and enemies and coins and hearts were moving. But after my refactor, I only had to update the player’s velocity, which made this go much more smoothly.</p>\n<h2>Using Github</h2>\n<p>I built this game (as I have my other Phaser games) using the Cloud9 IDE and pushing my code regularly to Github. I mention this because I think this is the first time I’ve used this workflow well(ish). When I was getting overwhelmed with the number of problems I was trying to fix and features I was trying to add, I started submitting issues to my Github repository and creating branches to fix and to add. This really did a lot in the way of helping me to focus on one problem at a time and get it fixed.</p>\n<figure>\n    \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 57.66698024459078%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAByUlEQVQoz22SQdKbMAyFc/9jdNMjdKbLLrvpuqsOAUIJNsZgG2MDr5Io/GmmntHYJNJnvSfftPVQxuN37+F8wJoiUpyRloicM1JKV/C31hpKKczzLGfnHJRWCMFLzs2ODhzajJgGDd0UGJ4VZjdiGCzmECg5CICLx9HCGCPnXvfYEpCXjRrZDuAwDIiUzImB9iVlCu4oC+iA0GXThHVdsW1UvK3ADtjY42v1GV/KT/ihvoHXre97KeICDj5777BR8b7vB+Av6H2te0YbSjS+gIndAbTWCqjrlEhZlgUxfvh3XOCvnRVx51znncfsFywhi2QBKqVxv98liqLA4/FAXddomuaCcEzToeKU/7ofdoUDOA0GVVUJpCxLCYZ2z6dM05iBzNcIkxUbWD53v76cz2+26ObpZu6GoSeYfWVY27ZQBP5Vd/j+s4Vxi3TBhe87A6VDN3kBnlKrqiY/O1jyil3J+4a4ZFhPk8/8yy6AE9Y9O3lSJ/jG3tR1Jf6dklluT0BHZ2r3bbb7NX1e5b0ij8MH8Jzka/CNniKQ7ETgRHL4XXKH67r90yHnZ/rvAuI/i03m6Xl6HpNMmN6nnzHR84hpvYpP6KuffwCo+J5vrVdpkAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="github issues" title="" src="/static/Screen-Shot-2017-01-31-at-12.01.14-AM-59edd004e6e8ecc315b120ed2d7b9086-1626e.png" srcset="/static/Screen-Shot-2017-01-31-at-12.01.14-AM-59edd004e6e8ecc315b120ed2d7b9086-076ec.png 203w,\n/static/Screen-Shot-2017-01-31-at-12.01.14-AM-59edd004e6e8ecc315b120ed2d7b9086-7ae34.png 405w,\n/static/Screen-Shot-2017-01-31-at-12.01.14-AM-59edd004e6e8ecc315b120ed2d7b9086-1626e.png 810w,\n/static/Screen-Shot-2017-01-31-at-12.01.14-AM-59edd004e6e8ecc315b120ed2d7b9086-9af38.png 1215w,\n/static/Screen-Shot-2017-01-31-at-12.01.14-AM-59edd004e6e8ecc315b120ed2d7b9086-03d88.png 1620w,\n/static/Screen-Shot-2017-01-31-at-12.01.14-AM-59edd004e6e8ecc315b120ed2d7b9086-49263.png 2126w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n    <figcaption>Using issues, branches, and pull requests helped me focus on fixing one problem at a time.</figcaption>\n</figure>\n<p>Using issues, branches, and pull requests helped me focus on fixing one problem at a time.[/image] I know Github may seem a bit technical for ID work, but I really do recommend it. I think it would be a great tool for IDs to use in their side projects. It’s wonderful for helping you to keep track of problems, features to add, and work you’ve done. They’ve even added a kanban board feature so you don’t have to also use other tools, like Trello (though I do still use Trello). Plus, it’s free!</p>\n<h2>Play the Game</h2>\n<p>There are still a few minor ticks with bits of the game, but overall, I was able to add all the features I wanted and fix all the major problems. I think it’s ready for playtesting! Check it out and let me know what you think! If you’ve got a suggestion, maybe submit an issue? <a href="https://github.com/anthkris/supply-run/issues">https://github.com/anthkris/supply-run/issues</a></p>\n<figure>\n  <a href="https://anthkris.itch.io/supply-run" target="blank">\n    \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 56.30126771066368%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC20lEQVQoz0WTy09UZxjG33OOo85I6KRwRqAwMhlHGUYZQBmH4WooMNphQM5cGIlyQO5loFzaxCIytkUQQlBr1KS12sRFu+miXXTVpIumiy6adNFN1/0/fv3oxHbxy/N+T573y5vvIt5tofaRxsk5ncB6Cb6N49RsCcFXDoL3SqkqCN4tDf+BA/8r4fyjUvx3XJTNCNX3DtHw7gnvrAsVizpS8b7GmU9U07JwWpll40L5igp8rGEuqPWw8j8VKmcFzy3BnFCqqMwIvtsqq7RyXqhZFdyWhnROVeO3jxK8fgRfVk2VNcltpQlM+gilqjlrmYTXTbxZJ+UhjVA2yIW1WmrXhLq8E293KYGcW9UakWEP8vqnDCv3e2gJn8AaqyNi+cl8Nsri0yXmPp9j4ekC8w/zrDxbZebxNHe/3mT5+RJjuzbTB3Hy2w2k82foaHfz4Hk38utfi3z38zg9PSXsv4xiLzcwstFEstDB0OYQybsJbu5lGd21SBUGGdzoJrUzzOoXH/LNb3n++Psjdl7EuBp/m4df9iJf/dDL1rNOOjtcFB6fY8w+xYvXUZ58f0tN+AFTBxN0r7WR20kRW4ySu9/O1fnTtGVMfvx9jF/+nOT2/nm6ulwsFwLIwKyL+piTtugxhmw3LReP0z8q9M43MbM/R+LOu9h7N1h6ssSammpi2yLcbNDUKExt+lnZ9RG+7KIhpDNol6hLmdaIjeuEW4WYrRHu0ImOCJEpIRQXwkmdrlkHjQM6dZePEM07aO43CFwQAn1Cq60yuROcixi03xTkiqWTmtTpv2LQmzBIXFOkDTIzBlZOpy99DOtlJTe+rSKePkpyRKNf5a7lDJKjBn0DKn/dRTzhYCCt3mFrlUHEFC5VCFFF5GSRlnLFoe/V1TE4udjs4tIp/b9sxFPk3543nuqT99pDNNY4OVumfoep/Y8KBz1K1cbBt4R6txTrQ8+UIp432aLWK/0HI719UCqsBbkAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Supply Run on Itch.io" title="" src="/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-1626e.png" srcset="/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-076ec.png 203w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-7ae34.png 405w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-1626e.png 810w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-9af38.png 1215w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-03d88.png 1620w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-ca085.png 2430w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-31540.png 2682w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n    <figcaption>Play the Game!</figcaption>\n  </a>\n</figure>',frontmatter:{date:"January 31, 2017",path:"/blog/supply-run-my-1gam-entry-for-january",title:"Supply Run: My #1GAM entry for January",tags:["endless runner","game development","phaser JS","procedural","programming"],categories:["Coding","GameDev"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC20lEQVQoz0WTy09UZxjG33OOo85I6KRwRqAwMhlHGUYZQBmH4WooMNphQM5cGIlyQO5loFzaxCIytkUQQlBr1KS12sRFu+miXXTVpIumiy6adNFN1/0/fv3oxHbxy/N+T573y5vvIt5tofaRxsk5ncB6Cb6N49RsCcFXDoL3SqkqCN4tDf+BA/8r4fyjUvx3XJTNCNX3DtHw7gnvrAsVizpS8b7GmU9U07JwWpll40L5igp8rGEuqPWw8j8VKmcFzy3BnFCqqMwIvtsqq7RyXqhZFdyWhnROVeO3jxK8fgRfVk2VNcltpQlM+gilqjlrmYTXTbxZJ+UhjVA2yIW1WmrXhLq8E293KYGcW9UakWEP8vqnDCv3e2gJn8AaqyNi+cl8Nsri0yXmPp9j4ekC8w/zrDxbZebxNHe/3mT5+RJjuzbTB3Hy2w2k82foaHfz4Hk38utfi3z38zg9PSXsv4xiLzcwstFEstDB0OYQybsJbu5lGd21SBUGGdzoJrUzzOoXH/LNb3n++Psjdl7EuBp/m4df9iJf/dDL1rNOOjtcFB6fY8w+xYvXUZ58f0tN+AFTBxN0r7WR20kRW4ySu9/O1fnTtGVMfvx9jF/+nOT2/nm6ulwsFwLIwKyL+piTtugxhmw3LReP0z8q9M43MbM/R+LOu9h7N1h6ssSammpi2yLcbNDUKExt+lnZ9RG+7KIhpDNol6hLmdaIjeuEW4WYrRHu0ImOCJEpIRQXwkmdrlkHjQM6dZePEM07aO43CFwQAn1Cq60yuROcixi03xTkiqWTmtTpv2LQmzBIXFOkDTIzBlZOpy99DOtlJTe+rSKePkpyRKNf5a7lDJKjBn0DKn/dRTzhYCCt3mFrlUHEFC5VCFFF5GSRlnLFoe/V1TE4udjs4tIp/b9sxFPk3543nuqT99pDNNY4OVumfoep/Y8KBz1K1cbBt4R6txTrQ8+UIp432aLWK/0HI719UCqsBbkAAAAASUVORK5CYII=",aspectRatio:1.776158940397351,src:"/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-81d39.png",srcSet:"/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-9a8d1.png 203w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-c53f9.png 405w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-81d39.png 810w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-e460a.png 1215w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-3ae57.png 1620w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-12a27.png 2430w,\n/static/Screen-Shot-2017-01-30-at-11.12.20-PM-1047ae8eecfb139131a1f45f17717a60-ce4be.png 2682w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-supply-run-my-1-gam-entry-for-january-9b80d0d5436c761b9e44.js.map