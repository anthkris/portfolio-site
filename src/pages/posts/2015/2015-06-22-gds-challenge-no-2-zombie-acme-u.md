---
title: 'GDS Challenge No. 2: Zombie Acme U'
path: "/blog/gds-challenge-no-2-zombie-acme-u"
date: '2015-06-22'
featured: "../featured/gds-Challenge-No.-2zombie-acme-u.png"
categories: ["elearning", "GDS Challenge", "Showing my Work"]
tags: ["construct 2", "elearning", "game design", "game-based learning", "serious game"]
---

Phew. This was one of the toughest projects I've worked on in a while, mostly due to trying to learn enough about Construct 2 to make something passable. It's nowhere near as polished as I'd like but I already knew that the challenges involved in this one would likely mean creating a proof-of-concept more than a finished module.

## How it Went Down

[Like I mentioned in a previous post](/blog/playing-games/), I didn't start off thinking about zombies. But after running into a really thought provoking-post on combining Construct 2, an HTML5 game authoring tool, and Articulate Storyline, I thought that now would be as good a time as any to actually use one of the several game authoring tools I downloaded. After testing several, I went with Construct 2 because of the breadth of available tutorials and the bonus of being able to install it on a portable drive.

### The Plan

I drew major inspiration from the Zombie college course created by the very talented folks at BioNetworks Learning Solutions ([see the GDS Challenge Post](http://godesignsomething.co/gds-challenge-no-2-college-lab-safety/)) and mapped out a really small prototype that would go from Storyline, into the game and back out again.

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,a_-90,w_203/v1530396697/blog/IMG_0402.jpg 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,a_-90,w_405/v1530396697/blog/IMG_0402.jpg 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,a_-90,w_810/v1530396697/blog/IMG_0402.jpg 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,a_-90,w_1215/v1530396697/blog/IMG_0402.jpg 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,a_-90,w_810/v1530396697/blog/IMG_0402.jpg"
    alt="game prototype" />
  <figcaption>My simple prototype</figcaption>
</figure>

Initially, I did have some larger plans but as time wore on and the difficulty of the game development piece fully revealed itself, I decided to scale back to this simple plan and create a basic piece that could open up conversations and inspiration at a time when I'm more proficient.

### The (Surprisingly Hard) Work

Over the past 3 weeks, I would estimate I spent about 20 hours on this project, significantly more than most. While the Storyline slides were really easy, Construct 2 can be very difficult. I spent hours trying to figure out how to make the bridge between Storyline and the game (it turned out I had a capitalization error. Doh!) and then several more hours trying to figure out how to make my zombies turn back and forth independently. True story! Still, I got a very basic health bar working on my own. I was extremely proud of that accomplishment. It's going to take some time to really get comfortable with Construct 2 as a tool. Still, I love that it opens up the possibility of making my own games and I hope to experiment more with it in the coming months. I think I'll try making a few more platformers.

### The Game

The game itself is a very simple platformer that asks you to avoid the zombies in order to enter the lab. The zombies are created using their own basic form of AI but, in the current version, they're basically unaware of the player's presence and just walk back and forth in their respective places. Note: When you get to the game, you'll need to click on screen to refocus on the iframe. Otherwise, you won't be able to move. Now, I chose not to include any instructions in the game, which I noticed seemed to be pretty standard practice in other game demos I've played online (as opposed to on mobile). If you get confused, use your arrow keys: up, right, and left.

### Better Game Design

As I mentioned in that other post, a better game design would have been to integrate the lab lessons into the game to where you somehow have to use your knowledge of PPE, say, to achieve an in-game goal. I want to acknowledge that. But, given my month time frame, this was the best I could do.

## Future Expansions?

Ideally, as I get better at Construct 2 and JavaScript Programming, I'd like to make several updates. First, I'd like to create more game levels. I actually started on a level 2 but couldn't get it working so I abandoned it for the sake of time. It would definitely be cool to go in and out of Storyline and the game and weave them together in a better narrative. Secondly, as a part of that narrative, I'd like to be able to create more Storyline challenges that affect the in-game environment and vice-versa. Currently, I only use a simple button to change a Storyline variable that, in turn, jumps to the next slide. I'd like to do more sophisticate communications of points or weapons that affect each other, allowing different people to experience different narratives, based on their actions and responses. Thirdly, as a simple UX upgrade, I'd like to create some way that you didn't have to manually refocus on the iframe when the game slide appears. It would definitely be better for users to be able to just start the game.

## The Product

That's it for my post-development review. Here's the shipped example, if you want to take a look.

<figure>
  <a href="http://www.knanthony.com/showcase/AcmeU/story.html" target="blank">
    <img
      sizes="(max-width: 810px) 100vw, 810px"
      srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/SaveOurSchool.png 203w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/SaveOurSchool.png 405w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/SaveOurSchool.png 810w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/SaveOurSchool.png 1215w"
      src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/SaveOurSchool.png"
      alt="game final version" />
  </a>
  <figcaption>Click the image to play</figcaption>
</figure>
