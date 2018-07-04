---
title: 'Espiritus: A Teeny, Tiny Game made using Phaser JS'
path: "/blog/espiritus-a-teeny-tiny-game-made-using-phaser-js"
date: '2016-09-06'
featured: "../featured/Espiritus-post.png"
categories: ["GameDev", "Showing my Work"]
tags: ["game design", "game development", "phaser JS", "post-mortem", "sound design", "start small"]
---

Last month, in seeking to practice what I preach, I found a great horror-focused game jam from an indie game dev called The Meatly ([http://jams.gamejolt.io/meatlyjam](http://jams.gamejolt.io/meatlyjam/games)). Part of the jam rules were that you make all of the art yourself. Since I'm not at a place where I can do that easily, I couldn't actually submit to this jam (and I also took quite a bit longer than three days to refine everything) but I still got inspired to make a horror-type game, with no combat-mind you (that's another challenge I'm setting for myself in my game dev), and I finally finished it over the weekend. It's called Espiritus, and it's a game about you as a ghost seeking to return to life and being constantly pulled back towards death.

## Game Development

Using the game jam and this amazing game from another indie game dev called McFunkyPants, who incidentally, is also one of my inspirations with his OneGameAMonth site and practice (Greeble: http://mcfunkypants.com/LD22/) as inspiration , I focused on building a tiny horror game, with no combat, no baddies. Just you trying to escape. I also hit upon the idea/mechanic of the player being constantly pulled backwards, towards the void and towards danger, pretty early. Here's my Trello card for the game:

<figure>
    <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2016-09-05-at-5.49.58-PM.png 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2016-09-05-at-5.49.58-PM.png 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2016-09-05-at-5.49.58-PM.png 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2016-09-05-at-5.49.58-PM.png 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2016-09-05-at-5.49.58-PM.png"
    alt="Trello Board card"/>
</figure>

For assets, I turned to several free sites I know, including:

*   FreeSound
*   Incompetech (best CC music ever!)
*   And OpenGameArt.org

I've been learning to use Phaser JS for the past couple of months and, [while previously, I was completely overwhelmed with the framework](/blog/playing-games/), I've found that my skills are lightyears improved from what they were, so most of the development process was relatively easy. The other thing that I'm glad I was able to do is employ a cloud IDE. One of the things I've found as a hindrance in my coding practice previously, was that all of my code and files are on my personal computer and, at work, of course, I don't have access to that computer. So I had to wait until I got home to do anything. This means that I've been able to spend some lunches reading several good books (which is totally worth it), but there are also times when my mind is consumed by a particular project and that's what I want to focus on.

So I re-experimented with Cloud 9 and Code Anywhere (so far, I'm liking Cloud 9 better) and now I'm able to code and test these sorts of projects from any computer, which majorly cool. The thing that got me stuck for a while though, was that, for some reason I can't quite remember, I got it in my head that I needed to use the p2 physics system, but since I haven't learned anything about that, I was having trouble trying to implement the appropriate function to allow the player to die, when you touched a dangerous tile like a spike or water. After a while, I realized that I could actually accomplish everything I needed using the much more familiar arcade physics system, so I refactored everything for that and moved forward. The next major challenge was trying to implement and handle dialog boxes. Phaser doesn't have anything built in for this, but after a bit of searching, I figured out how to do it. Then, in testing, I noticed that dialog boxes would overlap if I collected items in quick succession, so I had to find some game inspiration to fix that. I solved it by moving the notification-type dialog boxes over to the side and making them much smaller. [You can see all of my code on Github](https://github.com/anthkris/espiritus-game). I used this game as a part of my daily coding practice, so I've put in a fair number of commits (though I still didn't quite make daily).

## Refinements

Just last week, there was an L&D Twitter chat on the importance of sound design. [As I've written before](/blog/augustseptember-gds-challenge-mell-hammer-detective-agency/), that tends to be something that I ignore, and I almost shipped this game without it, but in thinking about what makes a well-rounded game, and that Twitter chat, I decided to spend the extra time adding some appropriate sound effects to the game. And I'm really glad I did. Sound can really play a huge different in evoking a certain feel in a game. It is, perhaps, especially important in horror. I love this, because it forced me to be more thoughtful in my design and to practice these little refinements in interactive design that are so easy to forget or cut.

## Play the Game

As I said, I've been looking to practice my beloved mantra (from Justin Jackson) to "Start small, start now." So this is a small game. One level. But it's done! And I made it! I'd love to get some feedback. Let me know what you think.

<figure>
  <a href="https://anthkris.itch.io/espiritus" target="blank">
    <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2016-09-05-at-6.12.06-PM.png 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2016-09-05-at-6.12.06-PM.png 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2016-09-05-at-6.12.06-PM.png 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2016-09-05-at-6.12.06-PM.png 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2016-09-05-at-6.12.06-PM.png"
    alt="game screenshot"/>

  </a>
  <figcaption>Play Espiritus</figcaption>
</figure>
