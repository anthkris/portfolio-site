---
title: 'Diving Deep into Twine'
path: "/blog/diving-deep-into-twine"
date: '2019-02-19'
featured: "../featured/Diving-Deeper-with-Twine.png"
categories: ["GameDev", "Showing my Work"]
tags: ["game design", "gameful learning experiences", "Twine", "gameful design"]
---

It's a new year another new job challenge (!!!) and I've decided to be more intentional about a lot of things that I do. I began the new year by shedding a lot of commitments and going through a number of exercises to find more focus. Two of the major things that I've done are to start using the Bullet Journal method and, as a part of that, I've created my own game development curriculum. Since Twine was causing me the most anxiety, I decided to start there. My plan is to try and develop a small game prototype every week.

## Why Twine

Many of you will probably be familiar with Twine. I first heard about it way back in 2013 and released my first official game in 2015 here on the blog. Since then, it's been on my radar and I've introduced it to others, but I hadn't done a deep dive into its capabilities. And I noticed that every time I attempted to, I'd start procrastinating. I believe the cause of that anxiety was two-fold:

1. Though I've been clear for a while about the genres of games I want to concentrate on, I've been really struggling to think up projects that would be work-themed enough to include in my portfolio. After a lot of thinking and planning, I've decided to simply practice getting better at making games using a variety of tools and to make sure that I explore how the game I end up with might be useful in a work environment, even if the content and theme aren't.
2. Secondly, I think I've been putting off Twine because I've been thinking about it primarily from an interactive fiction standpoint and I've been concerned about my ability to write a full branching story. What helped me to overcome this hurdle was to concentrate more on prototyping the mechanics I wanted to explore and let the writing be in service of the gameplay. So, at least in my mind, it became less about writing a story and more about making a game.

## My Design and Process

I started the Twine phase of my self-planned curriculum last week. After re-reading several posts from the amazing Emily Short, [[especially the one in which she describes ideas for interactive fiction| https://emshort.blog/2008/03/06/ideas-for-interactive-fiction/]], I settled on making a game where the main mechanic was Conversation. As the player, you would need to converse, flatter, and otherwise dazzle the NPCs (non-playable characters) in the game with your words.

### Process
I decided to only give myself a week, following the milestones of a writing post that mapped out writing a short story in a week. My focus right now is quantity because I believe that this will give me more experience which each tools I explore, so that I can go faster in the future, and I also believe that the more I make and release, the better I'll get at making engaging games.

Lacking an idea, I also took inspiration from another blog post and the Writer Emergency card deck which suggested taking a well-known story and rewriting it. In the blog post, you are randomly assigned a number and set to a Wikipedia page that lists out each Grimm's Fairy Tale. The number you get matches the number of one of the stories and that's what you try to re-tell.

I got the [[The Ditmarsch Tale of Wonders|https://ebooks.adelaide.edu.au/g/grimm/g86h/chapter160.html]] which isn't really well-known. It's a silly, nonsensical tale that ends with advising the reader/listener to "Open the windows that the lies may fly out." I decided to make a game where the player would need to use a conversation mechanic to convince a group of nobles at a summer evening fete that they were the entirely fictional, noble Ditmarsch from the land of Wonder and become the greatest liar in history. I've named it Le Shyster.

### Lessons Learned
After allowing myself to focus on the mechanic and not the writing, I actually found the beginnings of development went really smoothly. And Twine, as you may have experienced, is a very easy tool to get started with. I defined the conversation mechanic based on Emily Short's description:
 > The player primarily converses with one or more other characters, relying principally on ASK, TELL, ANSWER, TALK TO, or other verbs about conversation, or by picking conversation choices from a menu.

Things got a bit more difficult, though, as I began to really explore implementation. My initial plan was to keep it simple by tracking:
* how outlandish your tale is,
* your charisma, and
* your speechcraft.

<figure>
    <img
      sizes="(max-width: 810px) 100vw, 810px"
      srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1550368046/blog/PlayerVariables.png 203w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1550368046/blog/PlayerVariables.png 405w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1550368046/blog/PlayerVariables.png 810w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1550368046/blog/PlayerVariables.png 1215w"
      src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1550368046/blog/PlayerVariables.png"
      alt="Player Variables in Twine" />
    <figcaption>Final Player Variables</figcaption>
  </figure>

But things quickly got more complex as I started to think about how the player's actions should manipulate those variables. I found myself thinking about, for example, how I could add in an element of randomness in the Flatter conversation option, so that sometimes, the player might try to flatter the NPC and miss the mark and they start to dislike them.

<figure>
    <img
      sizes="(max-width: 810px) 100vw, 810px"
      srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1550368046/blog/FlatteryRandom.png 203w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1550368046/blog/FlatteryRandom.png 405w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1550368046/blog/FlatteryRandom.png 810w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1550368046/blog/FlatteryRandom.png 1215w"
      src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1550368046/blog/FlatteryRandom.png"
      alt="game development screenshot" />
    <figcaption>Randomness in the Flatter conversation option</figcaption>
  </figure>

Even relatively simpler actions, such as ensuring that the NPC only started to believe the player's outlandish tales in the Tell a Tale conversation option required me to consider what variables should influence what outcomes and by how much.

<figure>
    <img
      sizes="(max-width: 810px) 100vw, 810px"
      srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1550368046/blog/CalculateFunction.png 203w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1550368046/blog/CalculateFunction.png 405w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1550368046/blog/CalculateFunction.png 810w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1550368046/blog/CalculateFunction.png 1215w"
      src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1550368046/blog/CalculateFunction.png"
      alt="game development screenshot" />
    <figcaption>Calculate "function" to set initial NPC variables</figcaption>
  </figure>

So the big lesson there is to greatly simplify my next game prototype (I ended up cutting it down from 10 NPCs, to 8, then to 5 and finally to 3 in order to meet my deadline). I also think I need to find some kind of planning tool to help me fully consider variables and influence. Doing that on the fly led to lack of clarity.

The other thing that was top-of-mind as I developed these relationships between variables was how to keep the player informed of how and why their actions resulted in a specific change (or not) so that they weren't playing against a black box, which could be frustrating. I don't think that I was completely successful in my implementation, but it was helpful to have the thought come up as I developed.

The exercise of making Le Shyster also revealed how much I didn't know about the power of Twine macros. There's still a lot more for me to learn so that I can move faster in development. I ended up looking up a lot of things and was pleasantly surprised at being able to do everything that I imagined using built-in Twine code.

### Results

This is not a good game. I'll say that right off the bat. It's not even really a complete game. There's a lot of logic issues. It is however a really useful prototype. I was able to dive much deeper into Twine than I ever had before. I explored the power of macros in the Harlowe story format. Without JavaScript, I was able to track a variety of variables and to create what amounted to functions that manipulated those variables (mostly how much the NPCs like and believe you). It was a real eye opener into how powerful Twine is on its own.

<figure>
    <a href="https://s3.amazonaws.com/showcase.knanthony.com/gamedev/twine/Le_Shyster/Le_Shyster.html" target="blank">
      <img
        sizes="(max-width: 810px) 100vw, 810px"
        srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1550368046/blog/StoryShape.png 203w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1550368046/blog/StoryShape.png 405w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1550368046/blog/StoryShape.png 810w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1550368046/blog/StoryShape.png 1215w"
        src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1550368046/blog/StoryShape.png"
        alt="game shape screenshot" />
      <figcaption>Try the Game!</figcaption>
    </a>
</figure>

## Instructional Design Implications

I think I just scratched the surface of the conversation mechanic. We've probably all seen those simulations of the BranchTrack style conversation where you choose from a list of options and you get to see the NPCs reaction change, based on what you say. The type of game I've explored certainly leads to being able to produce that kind of simulation.

I also see it possibly opening up more complexity. My team at work, for example, concentrates on leadership capabilities and there's a tool that helps people to explore their work style as compared to the work styles of people within the company, on average, and the work styles of people in other cultures, on average. It would be interesting to start with a score or set of scores from that tool and build a complex simulation that has an NPC react to the player based on their work style and their cultural/emotional intelligence as well as an element of chance in the kind of personality the NPC has. In the game, for example, I had one character be suspicious, one be jovial, and one be very measured. And that impacted how easily you were able to convince them to like or believe you. There was also an option to do your homework on the guests, either by researching them or by spending time as a servant in their households. That impacted whether or not you got extra data on each NPC's personality and weaknesses so that you could exploit that knowledge. It may not be necessary to go to that level of depth for every conversation sim, but it can certainly add a level of desireable difficulty and engagement.
