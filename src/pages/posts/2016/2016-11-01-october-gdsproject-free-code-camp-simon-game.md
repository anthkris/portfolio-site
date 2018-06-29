---
title: 'October #GDSProject: Free Code Camp Simon Game'
path: "/blog/october-gdsproject-free-code-camp-simon-game"
date: '2016-11-01'
featured: "../../static/post-images/Screen-Shot-2016-10-30-at-12.40.22-PM.png"
categories: ["Coding", "GameDev", "Showing my Work"]
tags: ["free code camp", "game dev", "JavaScript"]
---

The Torrance Learning xAPI Cohort only has a few weeks left! I took a bit of an xAPI break this weekend, though, to finish up my next Free Code Camp project: a Simon game.

## Back to Basics

I'm on track to finish the FCC front-end curriculum before the end of the year, which is awesome! Only two more projects to go! There was a lot of deadspace in between working on the Simon game, but, on the whole, this project went off pretty smoothly. I'd estimate about 4 days, total working time. As I look back on my coding journey so far, it's been interesting to see that I've chosen to do the last two projects (both advanced on the FCC scale) in vanilla javascript. In the beginning, everything I did was in jQuery. But this year, as I continue my work on Oppia, I tried a project using AngularJS. Then, after spending some time using the PhaserJS framework, I've found myself approaching the challenges using plain, ole JS. jQuery is still awesome, obviously, but as I learn more, I think I'm finding that I don't need to rely so heavily on a framework to get things done. My code is longer, certainly, but just as understandable, and less dependent on outside tools. It's also a good step before somehow, sometime diving into EcmaScript and the new features in there. The other thing I'm really proud of this go round is once again, going back to basics and planning my work before coding. Here was my working plan: [pre]//Step 1: Simon's turn"Choose a random 1st step from among the colors and record it //Step 2: Wait for player to repeat the moves //Step 3: If player repeats the moves properly, then start the pattern from the beginning and add one more move. If not, then play the last pattern from the beginning //Step 4: Repeat for 20 moves[/pre]",

## Still Sloppy?

That plan was really, really helpful when thinking about the functions I needed to create. However, one thing I think I may need to work on is actually crafting my functions. I've been reading a few articles about functional programming and realizing that I rely a lot on global variables and changing those variables throughout the program. It definitely works, but I take the point that all of these global variables being changed between functions could make it a bit hard to track down a problem in the future. I think it might be good practice to focus more on creating more self-contained functions with fewer or no side effects. That sounds hard... I definitely thought about it during this project, but opted for done rather than trying to refactor. Still, I think I'll give it a try in the future and maybe even refactor this code for a more functional approach. Any other newbs out there feeling a little sloppy? What are you doing to create more self-contained functions?

## Play the Game

Take a few minutes and try to beat Simone: [http://codepen.io/anthkris/full/WGGAQz/](http://codepen.io/anthkris/full/WGGAQz/) Let me know what you think!
