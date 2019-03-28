---
title: 'The Tiny Deliberate Practice of the Quiz Game'
path: "/blog/tiny-deliberate-practice"
date: '2019-03-28'
featured: "../featured/Similirillion.png"
categories: ["GameDev", "Showing my Work"]
tags: ["game design", "gameful learning experiences", "ReactJS", "gameful design", "deliberate practice"]
---

Several weeks ago, one of the tiny projects I took on at work was creating a proof-of-concept game around business writing. Since that game contains work content, I decided to make a different version of it around the topic of similes versus metaphors. I call it Similirillion (try saying that one time fast).

## My Design and Process

For the original game, I was inspired by a couple of small gameful/quiz-zy experiences I had seen recently. One was a game called It's Centered That, which is a game that asks you to test your design eye by checking to see if a dot is centered in a group of one or more shapes. The other game, NAME, took a similar approach to ask you to test your design eye by seeing if you could tell which of two designs was the best, closer to best practices. 

Normally, I think, I'd ignore this type of game. I mean, they're cute and all, but I didn't see that they could do much for someone from a learning perspective. But after looking more closely at these two examples, I was suddenly struck by the fact that they offer players a chance at deliberate practice on a particular, small, tightly-bound design skill. They ask you to identify the "right" thing and offer immediate expert feedback. And that, of course, is exstremely useful in a learning context.

That made me wonder how I might apply the same idea to a non-visual concept. In the game I made for work, called Crisp(y) (why, yes, it does include bacon emoji 🥓🥓🥓) I took some sentences from my first attempt at writing a doc along with some of the editing feedback I'd received and presented players with a choice of whether or not the sentence was crispy (in our world, that means that it is written in the active voice, avoids generalizations and filler words, is succint and includes real data wherever possible) or soggy (the opposite of all of that). After the player makes their choice (based on some great feedback from my colleagues), I presented them with the correct answer as well as allowing them to see the sentence marked up with strikeouts, additions, and highlights so that they could view how the sentence might change for the better, or what made the sentence a good one in the first place. 

While this isn't a deep game experience, I think it would serve a really useful purpose. One of the things I still remember after reading Kathy Sierra's Badass is the idea that in deliberate practice the first level of getting a skill to automaticity is really about constant exposure to expertise. In her example of determining the sex of chicks, I don't need to teach a person all of the anatomy of a chicken before they can get good at this skill. It just takes deliberate practice with an expert providing immediate feedback. It struck me that the same principles could apply to good writing by our business standards. We didn't need to start with teaching people all the grammatical ins and outs. We could start with giving them exposure to identifying a "crisp" sentence versus one that was "soggy". I even considered that the game could have 3 levels:

* The first would consist of the game play I had prototyped, where the player simply identified a sentence as "crisp" or "soggy" and got feedback.
* The second would consist of asking the player to point out the bits of a sentence that made it crisp or soggy; so practicing more editing capabilities so that they could not only recognize poor writing but also give feedback as to why it was poor, with immediate feedback.
* The last would consist of asking players to rewrite a "soggy" sentence and then offer immediate feedback based on an expert's rewrite; practicing actually writing "crisp" sentences themselves.

The game hasn't reached that level yet, but I think it's a viable idea and I think it would be an engaging and effective way to teach the skills without a bunch of elearning content.

### Portfolio Game

So that's the whole story about the original attempt. I wanted to have something for my own portfolio use, so I decided to create Similirillion (a silly and possibly not altogether good play on Silmarillion, the book by JRR Tolkien). This game takes a very similar approach to level one of the Crisp(y) game by helping the player to get good at the small skill of identifying a simile vs a metaphor.

I built both games using ReactJS. Originally, I used it because my official work computer was having issues and I didn't want to install Storyline on the loaner laptop only to have to move all of the assets to the new computer a little later. I used React for Similirillion as well because I don't own the latest version of Storyline and because I liked the idea of being able to create a gameful experience from scratch using the React framework. It's a testament to how far I've come in being able to use React from a year ago.

Since I could lean on what I learned from the Crisp(y) game, development was pretty short, though I did add a few new tiny animations to this game to try and make the user experience a little better. One of the things I noticed about my friend [Mel Milloway's work](http://melslearninglab.com/) is that she does an amazing job of noticing the details of UX animation even in Storyline and it makes the things she makes even more magical. I tend not to focus on that, so I wanted to make the effort this go round.

## Lessons Learned

I really liked using React for this project, though it certainly could be done in a rapid elearning tool. The biggest issue for coding projects in this context is building for sustainability, so that, in the event that you win the lottery and run away, someone else can pick up your work. One workaround, I think, in this game is that the game "content" (the sentences, the correct answer, and the feedback) are all in the JSON format, like this:

``` javascript
const Sentences = [
  { 
    "sentence": "That guy is as nutty as a fruitcake.",
    "type": "simile",
    "feedback": "This sentence uses the word 'as'. That's how you know it's a simile."
  },
  { 
    "sentence": "They fought like cats and dogs.",
    "type": "simile",
    "feedback": "This sentence uses the word 'like'. That's how you know it's a simile."
  },
  ...
  ]
 ``` 

 So someone could add or remove content simply by adding in another object like the other ones. Given how much development most instructional designers do, I'm confident that most people in most teams could learn to do at least this much, which would remove a large part of the sustainability issue.

 I also worked hard to make Similirillion a responsive experience so that it can be played in a mobile view as well as a desktop view, which I didn't do with Crisp(y).

 ### Acknowlegements

 I found some really amazing animated emoji that I used, as well as a couple of React components that I didn't build from scratch so I'll list those here:

  * Animated emoji reactions: [Codepen](https://codepen.io/roberts_lando/pen/JrGQLa)
  * React Reveal: https://www.react-reveal.com/docs/
  * Confetti JS: https://github.com/Agezao/confetti-js

### Results

Check out the game for yourself!

<figure>
    <a href="https://similirillion-game.netlify.com" target="blank">
      <img
        sizes="(max-width: 810px) 100vw, 810px"
        srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1553735248/blog/Similirillion.png 203w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1553735248/blog/Similirillion.png 405w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1553735248/blog/Similirillion.png 810w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1553735248/blog/Similirillion.png 1215w"
        src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1553735248/blog/Similirillion.png"
        alt="game screenshot" />
      <figcaption>Try the Game!</figcaption>
    </a>
</figure>

## Instructional Design Implications

We just had an internal learning experience design conference at my job and one of the keynote speakers also expressed his dislike of gamification, which was super validating. One of the things I keep seeing which I don't quite understand is gamified experiences where quiz questions are interspersed with casual games, such as match 3 (think Bejeweled) type games. I don't like those and I think that my bias against them led me to discount these types of quiz-zy games as well. But I'm glad I took a second look. 

As I've been writing throughout this post, I think there's a lot of value in creating gameful experiences like this that allow the player to engage in deliberate practice of a tiny skill without all of the prework of reading a bunch of content about the topic first. To paraphrase a quote from one of our conference keynote speakers, if we give people "the game" first, and let them get deep into the context of using the tools and concepts, then they'll be ready for "the game manual" (that is, the job-aids, the textbooks, the written content, the vocabulary lists) later and they'll even find their own ways of sharing that in-depth content with each other.
