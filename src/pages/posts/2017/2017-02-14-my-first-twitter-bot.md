---
title: "My first Twitter Bot"
path: "/blog/my-first-twitter-bot"
date: '2017-02-14'
featured: "../featured/Twitter-Bot-Shipping.png"
categories: ["Coding", "Design"]
tags: ["coding", "JavaScript", "node js", "project ideas", "twitter bot"]
---

At the end of January, my fresh new copy of the Free Code Camp newsletter showed up in my inbox, with an invitation I couldn't refuse: Create your own Twitter bot in 30 minutes.

## Spoiler Alert: It took a little Longer than 30 Minutes

But it wasn't to bad. I'd estimate about 4 hours, all told. I've had bot making on the Great Big Board of Project Ideas since around September or so last year when I went to a meetup hosted at an organization that made Slack bots. Some folks like the idea of bots as ways to automate tasks and save time. I was initially intrigued by bots from [a post where a woman created a bot to help people have a conversation with "her" (that is, her bot) about her job skills](http://lifehacker.com/how-i-turned-my-resume-into-a-chat-bot-1775565350). Essentially, an interactive resume (Still thinking about this as a future project, as well). More recently, I've also started to think about text-focused interfaces (based on a think piece I read about how the future of our web use would be chat; [this isn't the exact piece I read but it's similar in focus](https://www.wired.com/2015/06/future-ui-design-old-school-text-messages/)) and how it might be cool to have a job aid for certain situations where people could just text a system and get an answer to a question (more discussion on this Dear ID episode). So, I had a lot of reasons for wanting to dig in to creating my first bot. But, I had no idea where to start. That's where this [FCC Medium post came in](https://medium.freecodecamp.com/easily-set-up-your-own-twitter-bot-4aeed5e61f7f#.u0lqfbsz2). Here was a golden opportunity (during my #100DaysofCode challenge, too!) to try it out with something simple. But what to chat about? As with many things, I find it easier to try and make things that are LX Design focused.

So, after waffling for a bit, and asking Reddit, I settled on a bot that would retweet and favorite tweets about serious games (this part was part of the original code for the tutorial) and would reply to @mentions with a random LX Design project idea. The tutorial itself is pretty simple. But my first test came with trying to find a way to answer mentions with a project idea. I searched and searched and came upon two possible solutions. Both of them essentially involved creating a new function that would check for a mention of the bot's Twitter username ([here's the solution I ended up using](http://stackoverflow.com/questions/33077381/im-trying-to-reply-to-a-tweet-using-twit-on-node-js)). But, I had to slow down a bit to really read the code from the tutorial and understand a bit more about how it worked. Essentially, using the Twitter API, I check for Tweets that mention the bot's user handle. If the tweet has the handle, then the method constructs a reply tweet with the other user's user handle, and a random tweet in an array I built. Simple right? It really was, but I'll admit I struggled a bit with the execution and I'm glad I was able to get some help through that Stack Overflow question. The other bit problem was that, after deploying to Heroku, per the tutorial, the bot kept crashing! The tutorial mentions this possibility, but I couldn't figure out how to make the suggested fix work. After much gnashing of teeth and Google-fu, I figured out that I should change the Procfile to have this line:

```javascript
heroku ps:scale worker=1 web=0
```

And then, and this was key, I should change my free dynos to use the Heroku and the Worker dynos. Don't know what I'm talking about? That's okay, neither do I! At this point, I just know it works.

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2017-02-08-at-1.41.13-PM.png 203w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2017-02-08-at-1.41.13-PM.png 405w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2017-02-08-at-1.41.13-PM.png 810w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2017-02-08-at-1.41.13-PM.png 1215w"
    src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2017-02-08-at-1.41.13-PM.png"
    alt="Twitter bot screenshot" />
</figure>

## It's a Little Raw

One of the things I noticed is that the #seriousgame hashtag is sometimes co-opted for non-gaming contexts. I'm not exactly sure what the fix is here, as the serious game retweets the bot has done so far don't seem to have many words in common other than that. The other thing I'd like to do to smooth it out is only have the bot respond with project ideas, when tweeted something like "What should I make?" or "Send me a project." Right now, it'll tweet out a random idea at anyone, even when it's just a random @ mention, which is a little awkward. I'm a little wary of only looking for certain phrases, though... What do you think? I'd love to know in the comments.

## Try it Out!

If you want a random LX Design portfolio project idea, be sure to tweet @GoLXDesign ! Let me know how it goes! Find the bot here: [https://twitter.com/GoLXDesign](https://twitter.com/GoLXDesign)
