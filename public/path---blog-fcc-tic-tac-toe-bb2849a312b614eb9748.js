webpackJsonp([41115418284481],{1166:function(e,a){e.exports={data:{markdownRemark:{html:'<p>So, I had the opportunity to attend a Girl Develop It workshop on NodeJS and, when sharing my coding journey so far, I talked about my Free Code Camp experience and, afterwards, I looked at my FCC profile and realized that I only had 4 projects left in the Front End Development certificate! What have I been doing with my life? Well, anyway, I’ve decided that I’d like to finish this up before the end of the year. And in the service of my current game development focus, I decided to take on the two most advanced projects first, both games. And my latest completion was the tic-tac-toe.</p>\n<h2>Starting Game Development</h2>\n<p>Though this is a simple game, I’m proud of it because I went all vanilla JavaScript for this project. No jQuery, no other frameworks. So besides a concern that some bits of my code aren’t exactly DRY (don’t repeat yourself), the code is otherwise probably a little more verbose than normal. I actually took an idea from my last Phaser game, <a href="/blog/paleo-another-tiny-game-using-phaserjs/">Paleo</a>, and hit on the idea of using a grid to keep track of whether or not a cell had actually been filled.</p>\n<pre><code class="language-javascript">//Create grid of 9 squares\nvar grid = [\n {x1:0, y1:0, x2:98, y2:98, filled:false, value: 0},\n {x1:102, y1:0, x2:198, y2:98, filled:false, value: 0},\n {x1:202, y1:0, x2:300, y2:98, filled:false, value: 0},\n {x1:0, y1:102, x2:98, y2:198, filled:false, value: 0},\n {x1:102, y1:102, x2:198, y2:198, filled:false, value: 0},\n {x1:202, y1:102, x2:300, y2:198, filled:false, value: 0},\n {x1:0, y1:202, x2:98, y2:300, filled:false, value: 0},\n {x1:102, y1:202, x2:198, y2:300, filled:false, value: 0},\n {x1:202, y1:202, x2:300, y2:300, filled:false, value: 0}\n];\n</code></pre>\n<p>And I used a the canvas element to draw the grid. From there, there I iterated on a series of functions to perform all of the various tasks.</p>\n<h2>Problems</h2>\n<p>The computer’s AI was probably my biggest issue. You think you know tic tac toe, right? But in trying to program the computer’s response to player moves, I had to do more than just have the computer fill in a random cell (which, by the way, was my first iteration). I needed the computer to respond intelligently, and never lose. So I ended up looking up tic tac toe strategy to think more strategically about how to make the appropriate moves. I started with a search and came up with this great Quora answer: <a href="https://www.quora.com/Is-there-a-way-to-never-lose-at-Tic-Tac-Toe">https://www.quora.com/Is-there-a-way-to-never-lose-at-Tic-Tac-Toe</a> That post helped a ton in helping me to flesh out my initial tries. But things, weren’t quite right. The computer would still lose occasionally, making a stupid move. So I kept searching for advice and hit upon this <a href="http://everything2.com/title/Tic-Tac-Toe">everything2 post from m_turner</a> (5 post down) that does an amazing job of visualizing strategy. And that helped a ton! I highly recommend reading it if you’re stuck for ideas on how to make a smart computer player. Creating an end game, terminal state was probably my second biggest problem. The aforementioned everything2 post helped with this as well, by assigning values to each cell, based on whose play it was, I could calculate when there were 3 in a row in any direction as well as who won.</p>\n<pre><code class="language-javascript">//Check for win/lose conditions\nfunction checkBoard() {\n getScores();\n if(row1Val === 3 ||\n row2Val === 3 ||\n row3Val === 3 ||\n col1Val === 3 ||\n col2Val === 3 ||\n col3Val === 3 ||\n diagonalRtLVal === 3 ||\n diagonalLtRVal === 3) {\n   score = 3;\n   endGame(score);\n   return true;\n } else if (row1Val === -3 ||\n row2Val === -3 ||\n row3Val === -3 ||\n col1Val === -3 ||\n col2Val === -3 ||\n col3Val === -3 ||\n diagonalRtLVal === -3 ||\n diagonalLtRVal === -3) {\n   //lose\n   score = -3;\n   endGame(score);\n   return true;\n } else {\n   //draw\n   var draw = grid.every(function(cell){\n   return cell.filled === true;\n   });\n   if (draw){\n     score = 0;\n     endGame(score);\n     return true;\n   }\n }\n}\n</code></pre>\n<h2>Polish</h2>\n<p>I wanted to keep things simple, but in addition to needing to execute a few more user stories, I also hit upon some example tic-tac-toe games from the Odin Project and decided to polish the game up a bit. To that end, I added:</p>\n<ul>\n<li>A begin game modal to choose X or O</li>\n<li>An indicator of whose turn it is</li>\n<li>A delay on the computer’s turn so it doesn’t move instantly</li>\n<li>An indicator of how many games the player and computer have won</li>\n<li>A end game modal that shows win, lose, or draw</li>\n</ul>\n<h2>Play the Game!</h2>\n<p>Test out the game and let me know if you find any bugs!</p>\n<figure>\n  <a href="http://codepen.io/anthkris/details/mAAVjq" target="blank">\n    \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 47.56944444444444%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA70lEQVQoz62SQcuCQBCG/ffeUsR1XTUVxH/SoUOnCIKoPr6LJdopLCPhbXfD2MwkqMPDMPPuDO8Mq7mui3cwxmBZFnRdh2ma8DwPQ+8FmmhS6Q4khGA0MmTs07toQw+EI8brge/z3L3nAwaeHFJKEUUR8jxHWZYoikKy+fvHar3Blse2Vh4OyLIMSZLAcZxnh+rAOI5R1zWapuFccTpfMJnvMFvmmC72OFYXWRd6VVVI0/T9wHblMAyl0zYyz4cfjPm6gcwjRVf7Xm7YisKpCiE2TMOAbdsvutr3uGHfV+lCab/20bf5Fk0c9VeIM9wAoRtB1qhd8CAAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="game screenshot" title="" src="/static/Screen-Shot-2016-09-27-at-10.43.01-PM-ded57a3274bb93177a8f9a00bc096f3e-1626e.png" srcset="/static/Screen-Shot-2016-09-27-at-10.43.01-PM-ded57a3274bb93177a8f9a00bc096f3e-076ec.png 203w,\n/static/Screen-Shot-2016-09-27-at-10.43.01-PM-ded57a3274bb93177a8f9a00bc096f3e-7ae34.png 405w,\n/static/Screen-Shot-2016-09-27-at-10.43.01-PM-ded57a3274bb93177a8f9a00bc096f3e-1626e.png 810w,\n/static/Screen-Shot-2016-09-27-at-10.43.01-PM-ded57a3274bb93177a8f9a00bc096f3e-9af38.png 1215w,\n/static/Screen-Shot-2016-09-27-at-10.43.01-PM-ded57a3274bb93177a8f9a00bc096f3e-03d88.png 1620w,\n/static/Screen-Shot-2016-09-27-at-10.43.01-PM-ded57a3274bb93177a8f9a00bc096f3e-ca085.png 2430w,\n/static/Screen-Shot-2016-09-27-at-10.43.01-PM-ded57a3274bb93177a8f9a00bc096f3e-348c4.png 2880w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n    <figcaption>Play Tic Tac Toe</figcaption>\n  </a>\n</figure>',frontmatter:{date:"October 04, 2016",path:"/blog/fcc-tic-tac-toe",title:"FCC Tic-Tac-Toe",tags:["game development","JavaScript","tic tac toe"],categories:["Coding","GameDev"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3ElEQVQoz1WSzW7aUBSEeZ1mh6CIGON/bBNCEiJl1TUbQALCiufg6RpVVZtCSgs2/iGAMcn0nAsFshidAXQ/5ty5mSSJkaaRUJIEmHsTeN4LVisf6TYCsMJ0+gODwQCtVgvtdluI/X91Oh00m02MRiNkdruYDvHBWGjuPRPgO5Ktf/h+g/H4K1RVQTabhSRJKJVKkGX5KP58cfFJ/NEBGGO3CymhR0kX5APyvvAMnEye4DgOLi8lKIoqpKoqyuxpapqGXC6Hfv/xBNxsPITRb8TxlEABrf1Ma/+l3xJK+ISqa8OtqLAtDRWTIGoZV44OQ1dIBJcKeOz3T0BOt1iMsQgmCMMX+P4vLJd/DitzQhs1V8P9TYWmAVUpo0pA9l8eqjCUIiU8A/J6DIooJc+AwKv17Ai07QrdlSQS3detI+y2ZoqEhc/5j8D1Zi7SMXBLhcxmP/H6elqZgcViETIVUHN1XFd1NOqmgHMxXFiv1zsvJcB6PRcQnnx/W9H0KaEsl2EYhiiEi9A0Xcg0TeTz+XPg/tm8v0eiHIayf3sLjy1bliWKuK3TXVZNXF9ZqNf2urtxUCjk0e12kUlTBsV0eD+BpRB7fkp74Dc0GncCyuXY9ke5rktPScFwOMQ/UQA8B0XfTOYAAAAASUVORK5CYII=",aspectRatio:2,src:"/static/tic-tac-toe-71fdfdb3eb86a7820d98d380d8112340-81d39.png",srcSet:"/static/tic-tac-toe-71fdfdb3eb86a7820d98d380d8112340-9a8d1.png 203w,\n/static/tic-tac-toe-71fdfdb3eb86a7820d98d380d8112340-c53f9.png 405w,\n/static/tic-tac-toe-71fdfdb3eb86a7820d98d380d8112340-81d39.png 810w,\n/static/tic-tac-toe-71fdfdb3eb86a7820d98d380d8112340-fda19.png 1024w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-fcc-tic-tac-toe-bb2849a312b614eb9748.js.map