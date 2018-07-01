---
title: 'New Game Prototype: A Clicker Game'
path: "/blog/new-game-prototype-a-clicker-game"
date: '2017-07-27'
featured: "../featured/screencapture-preview-c9users-io-anthkris-maker-click-index-html.png"
categories: ["GameDev", "Showing my Work"]
tags: ["game design", "idle clicker", "PhaserJS"]
---

It's been far, far too long since I've been able to work on game development, but a while back, I continued in my journey in learning to make games by using Phaser JS to make an idle clicker game. Now at first, idle clickers may seem silly, and I'll admit, the first one I was introduced to, Clicker Heroes, didn't do much for me. But then I met the one that started it all, [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/), I was hooked. The design of the game is stupidly simple: You click the cookie and you get points(cookies). You can spend those points on in-game tech that help you generate more points without you doing anything. Over time, you can generate billions of these points without even checking up on the game (another feature is that these games tend to run without you, even when you've closed the game"but not in a sinister way). And yet, even without having to do anything, these games can be extremely engaging. One of the things I love about Cookie Clicker is the messages that appear as you progress. They are tongue-in-cheek, witty, and make for great reading as the game progresses. The achievements aspect of the game is also very nicely done. There are a little over 300 achievements to try and earn, which I think is also part of the appeal. There's a particular part of the MDA framework of thinking about game design that names one aesthetic (the A in MDA) as Submission. It's described this way:
> Games as past-time. This could sound weird, but is the need for disengage. We came home, after a hard day, and then we plug some RPG just to level up a little bit. We now how to do it, where to go to do it. There is no major mental effort there, we do it just for distracting ourselves for the hard day we had. That’s Submission.
>
> -- [Julián Rojas Millán](https://lakitusdevcartridge.wordpress.com/2012/12/06/why-do-we-play-aesthetics-of-play/)

I think that that's the core aesthetic of idle clicker games: a way to disengage, relax, focus on a tiny, checklist-like task.

## My Design

So, I decided to try my hand at yet another game using PhaserJS. I've been thinking of creating a game set in the ID space for some time now and this seemed like a great opportunity. So I set about designing a game where you run your own instructional design shop. You'll collect reputation points that you can spend on ID upgrades to make a name for yourself. Like Cookie Clicker, I've added in some messages that occur based on how many points you have and how much you've achieve in-game. Note that the game isn't finished, it's more of a prototype, but it was going the right way. The one thing I wanted to add as far as features was the ability for the game to continue, even when the window/tab is closed.

<figure>
    <a href="http://www.knanthony.com/showcase/clicker/index.html" target="blank">
      <img
        sizes="(max-width: 810px) 100vw, 810px"
        srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/screencapture-preview-c9users-io-anthkris-maker-click-index-html.png 203w,
                http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/screencapture-preview-c9users-io-anthkris-maker-click-index-html.png 405w,
                http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/screencapture-preview-c9users-io-anthkris-maker-click-index-html.png 810w,
                http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/screencapture-preview-c9users-io-anthkris-maker-click-index-html.png 1215w"
        src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/screencapture-preview-c9users-io-anthkris-maker-click-index-html.png"
        alt="game screenshot" />
      <figcaption>Try the Game!</figcaption>
    </a>
</figure>

## Instructional Design Implications

The submission aesthetic is probably not one that IDs think about when we think about designing game-based learning, but I think that it's actually a core part of the attractiveness of badging systems, levels, and points. None of those things are story-based; they fulfill a need to just level up or tick a box, more or less. I think that something like an idle clicker game, a long-term game that essentially never ends, with opportunities to level up, earn achievements, and the wit and humor to make it all interesting might actually be an interesting game design aesthetic to explore, if wrapped up with a larger story of development.
