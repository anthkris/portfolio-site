---
title: 'Tetris JS: My first JavaScript Side Project'
path: "/blog/tetris-js-my-first-javascript-side-project"
date: '2015-06-29'
featured: "../post-images/Tetris-JS.png"
categories: ["Coding", "Weekend Project"]
tags: ["coding", "game design", "JavaScript", "Jquery", "tetris"]
---

This weekend, I took some time to work through a really [well-built tutorial on remaking tetris using JavaScript and jQuery by Chikei Chan](https://chikeichan.wordpress.com/tag/tetris-js/). [Check out the demo!](http://knanthony.com/showcase/TetrisJS/old/index.html) At first, I was concerned that it would just be me copying out the code he wrote, but he very cleverly set some challenges for the reader to do on their own. I was also able to make some slight modifications using things I learned elsewhere.

## What I Learned

### Begin by Planning Out what You want to Do

One of the really useful techniques I learned in a Treehouse course was the practice of beginning a project with comments that plan out what you want to do before you start programming. The tutorial for this project did a wonderful job of reinforcing this and I think there's great carryover to elearning development, as well. So, for example, instead of diving right into code, we started off with some high-level concepts:

```javascript
//Build a grid
//Create tetronimos
//Allow for manipulation
```

From there, you can begin to build the functionality that meets those concepts. That's something that I want to continue to practice doing, especially in my programs.

### Build Small Pieces and Test

Another of the things I've been trying to remind myself to do is to build a project in bits and test, instead of trying to build it all out at once and test it after. This is another concept that has really great carryover to elearning. This is pretty doable in Storyline and Lectora. It can be a hassle in Storyline if trying to test out JavaScript functionality. Still, it's a really important concept to practice because it prevents building a large project and then trying to figure out what's causing the bugs. Again, this project really reinforced that by breaking the development up into relevant pieces.

### Think of Efficiency Last

So, one of the things that doesn't carry over so well into elearning is the concept of refactoring your code after you review it. The refactoring process encourages you to look over what you've written, look for repeated code and, either abstract it into a reusable function or try and make it more efficient. It's important that this comes after building and testing small pieces so that you don't get caught up in trying to make things efficient to the detriment of actually getting things done, especially as a new developer who probably doesn't know all the tips and tricks of the trade yet. That's been really freeing for me, to realize that I should first try and complete a challenge using what I know before going back and seeing if I can make it better. However, when developing an elearning project, you have to think about being efficient pretty early on.

## Challenges to Complete

So I've built the bones. Over the next week or two, I'd like to try several things:

*   Create different colors for each tetronimo
*   Create a Game Over state that allows you to restart the game once the dead blocks reach the top
*   Update the CSS to make the game more attractive, add an intro page with instructions
*   Speed up the drop over time
