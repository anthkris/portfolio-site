---
title: 'Practicing a Storytelling/Scenario Formula'
path: "/blog/practicing-storytelling"
date: '2020-01-30'
featured: "../featured/First-Impressions-IF.png"
categories: ["GameDev", "Showing my Work", "Writing"]
tags: ["game design", "gameful learning experiences", "Twine", "gameful design", "deliberate practice"]
---

For the past couple of years, I've been wanting to work on my game development skills. Specifically, I've been thinking that I should work on the writing skills involved in game development. While there will always be people who are better than me and faster than me at the tools of game dev, I think that writing interesting, meaningful stories and scenarios is a skill that will always be useful in both instructional design and game development. But I've been really experiencing a block and I've been procrastinating. I believe that my problem was partly that I was having trouble figuring out how to create gameful experiences that would align with my day job and would be useful portfolio pieces. But the other part, the bigger part was just that I've just been really, really scared of writing.

I tried introspection to uncover the root cause of that fear, but I'm still not entirely sure. Was I afraid of failing? (probably) Was I afraid of succeeding? (not sure.) At any rate, I recently broke through that block and created a super tiny interactive story about finding one's way to an emergency meeting on the first day of the job!

## Breaking the Block

I happened upon Anna Sabramowicz's regularly scheduled [elearning secrets webinar](https://www.elearningsecrets.com/) on the Instructional Design subreddit. While I think the webinar was a little verbose (I definitely skipped some parts of the recording, especially at the beginning) I really responded to the storytelling formula she presented. Basically, she outlined the importance of starting with character identification, ending with the player/protagonist getting their end desire, and using the scenarios as points of conflict that stand in between them and their desire and represent the steps on their journey. What I liked most was that it gave me a clear structure to use for crafting a story and trying it out. I'd definitely recommend signing up for an upcoming session, if you haven't already attended one.

## Writing and Development
Writing the story actually came pretty easily. Based on what Sabramowicz presented, I started by setting up the character in a way that (hopefully) the player can identify with. For me, that meant not only an "estabilishing shot" with helping the player understand that it was their first day of work, but also presenting some choices on how they were dressed, their end desire (why is this job important), and even a little more about their feelings on that first day (how were they feeling about their family). That was a really motivational start. After that, it was a relatively simple thing to keep writing a little bit every day over the course of a week.

I also decided to use Twine for this and moving forward. One of the other things that can be a blocker when trying to develop games is trying to decide on what framework/engine to use. I recently finished reading Chris DeLeon's scrappy audiobook, Self-Command and I've been trying out his technique of writing down that thing you don't want to do, setting a time limit and starting on it immediately after you finish writing it down. That helped, not only with keeping up my writing habit, but also for just making a decision on using Twine (as opposed to learning Unity right now), in the spirit that doing something is always better than doing nothing.

I've written about the ease of Twine previously, as well as how you can insert JavaScript to track choices using xAPI as well as for added functionality. In this case, the only major stumbling block was figuring out JavaScript functionality to simulate time passing and then getting that time to show in the UI. But that's something that many others have wanted to accomplish and a quick look through Twine's forums showed me a script to use.


## An Extra Piece of Framing
I'm a part of a learning experience design group at work and we recently had a session about storytelling in instructional design. The presenter brought up a really good point that made me think back to the elearning secrets webinar: scenarios are not stories. I found that that resonated with this formula and it made me remember that I should think about crafting an entire story and use the scenarios as the moments of conflict. Don't start with a scenario, start with a story. That is a great extra piece of framing for me.

He also talked about the importance of knowing your audience for storytelling. Whereas story is effective for helping to frame the importance of a behavior and helping people to understand it, some audiences would much rather have a quick, refrencable job-aid rather than go through a story and scenarios. It's worth looking at whether or not or how we should cater to both.

### Acknowlegements

I really love [The Uber Game](https://ig.ft.com/uber-game/) so that was my main source of inspiration for the UI game.

### Results

The experience isn't perfect, but I'm really quite happy with it. Check it out and let me know what you think!

<figure>
    <a href="https://s3.amazonaws.com/gamedev.knanthony.com/first-impressions/FirstImpressions.html" target="blank">
      <img
        sizes="(max-width: 810px) 100vw, 810px"
        srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1580265946/blog/First_impressions_game.png 203w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1580265946/blog/First_impressions_game.png 405w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1580265946/blog/First_impressions_game.png 810w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1580265946/blog/First_impressions_game.png 1215w"
        src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1580265946/blog/First_impressions_game.png"
        alt="game screenshot" />
      <figcaption>Try the Interactive Fiction!</figcaption>
    </a>
</figure>

## Going Forward

One of the things I planned to do was to give the game some polish by integrating illustrations and sound effects. But by the time I got around to it, I was having some difficulty getting myself to finish this part. So I thought that I'd better just wrap it up and move on to the next one. That said, I think it might be a good idea to design with the graphics and SFX in mind from the beginning, especially since I'm not creating them myself. I found it difficult to think about what images I should show of each passage. On the other hand, when I look at some of my favorite interactive fiction, it might be better for me to concentrate on the writing bit. Adding xAPI statements would also be an extra task, but if I'm not actually going to use the data, it doesn't seem worthwhile. I might consider it whenever I move on to larger, more in-depth projects.

Another thing that I'll say at this point is that it feels more appropriate to call this interactive fiction rather than a game. I'm not entirely sure why that is, but somehow game doesn't seem to fit. It's one of the reasons I think I like saying "gameful experiences." There's something about this that is definitely interactive but doesn't quite seem to meet the game criteria. It may just be an internal thing.

I plan to continue writing more stories throughout the year. Hopefully they will get bigger and more complex. And perhaps, by the end of the year, I'll have something closer to the scale of a [Choice Of Games game](https://www.choiceofgames.com/)! (that's my goal, anyway)
