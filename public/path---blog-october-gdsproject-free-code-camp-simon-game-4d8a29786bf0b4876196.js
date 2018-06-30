webpackJsonp([22654041966301],{1216:function(e,t){e.exports={data:{markdownRemark:{html:'<p>The Torrance Learning xAPI Cohort only has a few weeks left! I took a bit of an xAPI break this weekend, though, to finish up my next Free Code Camp project: a Simon game.</p>\n<h2>Back to Basics</h2>\n<p>I’m on track to finish the FCC front-end curriculum before the end of the year, which is awesome! Only two more projects to go! There was a lot of deadspace in between working on the Simon game, but, on the whole, this project went off pretty smoothly. I’d estimate about 4 days, total working time. As I look back on my coding journey so far, it’s been interesting to see that I’ve chosen to do the last two projects (both advanced on the FCC scale) in vanilla javascript. In the beginning, everything I did was in jQuery. But this year, as I continue my work on Oppia, I tried a project using AngularJS. Then, after spending some time using the PhaserJS framework, I’ve found myself approaching the challenges using plain, ole JS. jQuery is still awesome, obviously, but as I learn more, I think I’m finding that I don’t need to rely so heavily on a framework to get things done. My code is longer, certainly, but just as understandable, and less dependent on outside tools. It’s also a good step before somehow, sometime diving into EcmaScript and the new features in there. The other thing I’m really proud of this go round is once again, going back to basics and planning my work before coding. Here was my working plan: [pre]//Step 1: Simon’s turn”Choose a random 1st step from among the colors and record it //Step 2: Wait for player to repeat the moves //Step 3: If player repeats the moves properly, then start the pattern from the beginning and add one more move. If not, then play the last pattern from the beginning //Step 4: Repeat for 20 moves[/pre]“,</p>\n<h2>Still Sloppy?</h2>\n<p>That plan was really, really helpful when thinking about the functions I needed to create. However, one thing I think I may need to work on is actually crafting my functions. I’ve been reading a few articles about functional programming and realizing that I rely a lot on global variables and changing those variables throughout the program. It definitely works, but I take the point that all of these global variables being changed between functions could make it a bit hard to track down a problem in the future. I think it might be good practice to focus more on creating more self-contained functions with fewer or no side effects. That sounds hard… I definitely thought about it during this project, but opted for done rather than trying to refactor. Still, I think I’ll give it a try in the future and maybe even refactor this code for a more functional approach. Any other newbs out there feeling a little sloppy? What are you doing to create more self-contained functions?</p>\n<h2>Play the Game</h2>\n<p>Take a few minutes and try to beat Simone: <a href="http://codepen.io/anthkris/full/WGGAQz/">http://codepen.io/anthkris/full/WGGAQz/</a> Let me know what you think!</p>',frontmatter:{date:"November 01, 2016",path:"/blog/october-gdsproject-free-code-camp-simon-game",title:"October #GDSProject: Free Code Camp Simon Game",tags:["free code camp","game dev","JavaScript"],categories:["Coding","GameDev","Showing my Work"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACWElEQVQoz02SvU8TcRjHf4MDbiT8A24yacLCpBOLcTDG0TQEGwxKkabhpXAtPVpoi4YOjCTggokmJKUoAoa20BdeNIFoQkwIcfDtXhDBoOj28bk7Gp0uzfX53PdNmYUBrHwYqzyCVR3FWApgrWqYlVF5DnBajfJ7+xG/dtIcLHdirg5hVUYw831YhUHs9RRWKSZ3ndglHWUWB+Uwgl1OYFfiGMtdGPLHo60xPj3vYSpzh5R2m8cJH7vz9zmu6pjlUcxCGHstJjciZC0qwC4BC9Aqah5QXtii8MvSA76VNPbmI7T03UJNttJ8pYmsaqCvuYmtbA/HmymMfA0oTso6Xx2ggJVrWVTapWF5IdLFykk5TnuyFTXdRsPTAOFIF6X6RoqqnuTNFsyNuMTUL3eOM7lbi4j9sOtQOeosB+p8SfKwi718XhjgUvAGdRkfekbn3XqO3GSKmboLhBovs7MokZQiYluTDMdckLXS68K9DAVoO6VUEhwWguzORZmINbK3cI6XszrVygpTczOo/lku+kLs50Ic1IBVp5QhzFfBf6WYjnwHuDEm4d4TlUNMP7zOyRsFu+eJZTqoSxRQkTxtwQ5+SDGGWDSdHNfTrhBjUe6kbS/DQm02IxJugKNKlLe5Yca1Zj68UPjCV1Hts1zz+3mfDXG4mcRYOZtNtTabgNey6bYcPZtNwq3fyEtGr9PsL2g8y/iZ0H08Gb/Lx6yf7+5skl5MtdmIZXc28ltZtR1KKbYoNJa7pT2vpIPVMD+34vyRYZ9upyWnbkyn2er/O/RmYyx1u7P5C5abTwqCe/YqAAAAAElFTkSuQmCC",aspectRatio:2.1015490533562824,src:"/static/Screen-Shot-2016-10-30-at-12.40.22-PM-c831dc04f6b19d66f72ca46107cf76f7-81d39.png",srcSet:"/static/Screen-Shot-2016-10-30-at-12.40.22-PM-c831dc04f6b19d66f72ca46107cf76f7-9a8d1.png 203w,\n/static/Screen-Shot-2016-10-30-at-12.40.22-PM-c831dc04f6b19d66f72ca46107cf76f7-c53f9.png 405w,\n/static/Screen-Shot-2016-10-30-at-12.40.22-PM-c831dc04f6b19d66f72ca46107cf76f7-81d39.png 810w,\n/static/Screen-Shot-2016-10-30-at-12.40.22-PM-c831dc04f6b19d66f72ca46107cf76f7-e460a.png 1215w,\n/static/Screen-Shot-2016-10-30-at-12.40.22-PM-c831dc04f6b19d66f72ca46107cf76f7-3ae57.png 1620w,\n/static/Screen-Shot-2016-10-30-at-12.40.22-PM-c831dc04f6b19d66f72ca46107cf76f7-12a27.png 2430w,\n/static/Screen-Shot-2016-10-30-at-12.40.22-PM-c831dc04f6b19d66f72ca46107cf76f7-ebfd3.png 2442w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-october-gdsproject-free-code-camp-simon-game-4d8a29786bf0b4876196.js.map