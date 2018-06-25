---
title: "On Being an \"Un-Opinionated\" Developer"
path: "/blog/on-being-an-un-opinionated-developer"
date: '2017-09-26'
featured: "../../../../public/images/post-images/logoColor.png"
categories: ["Design", "elearning"]
tags: ["authoring tools", "development", "elearning", "tool choice", "toolkit"]
---

I was on [TLDC Chat](https://tldc.us/2017/09/07/knanthony/) (a great community, if you're looking for someplace to get involved with some L&D folks!) a little earlier this month and one of the things that we discussed briefly was an idea that's been running in my head for a bit: being an un-opinionated learning experience developer. I wanted to delve into that a bit more here. In software development, an opinionated framework is one that guides you into one particular way of doing things and trying to diverge from that path will make your life very difficult. Now, being opinionated isn't really a bad thing(as [the responses to this question on Stack Overflow point out very well](https://stackoverflow.com/questions/802050/what-is-opinionated-software)). For example, an opinionated framework can be very helpful because it makes the decision-making process easier and encourages consistency and the use of best practices. As a learning experience designer/developer, [**you should be asking questions and offering opinions**](https://teamgaslight.com/blog/how-to-be-opinionated-without-turning-into-the-office-a-star-star-hole) about what you think the best course of action is for a particular learning product with a particular audience and constraints. Still, in one sense of "opinionated", if you're always used to doing things one way or using one tool, then you can become dogmatic about the right way or the best way (or the best tool) and that can be a stumbling block, perhaps especially for a newbie like myself. When I think about being opinionated as an LX developer, I'm thinking particularly about tying yourself to one particular tool, whether consciously or unconsciously. So many of us have the one tool that we know from work or that we started with and we've invested lots of time in learning its ins and outs. While it's awesome to have in-depth knowledge of one thing, I think we can all agree that, no matter what it is, it's going to have limitations. From the beginning of my journey, I've seen a lot of value in having many different tool choices and I've been very, very conscious of not wanting to pigeonhole myself. It's one of the reasons I wanted to learn JavaScript: to go beyond what my authoring tool would allow me to do natively. As I've continued to grow and experiment, I've come across a variety of tools that allow me, not necessarily to replace a purpose-built elearning authoring tool, but to augment it in a variety of ways. For example, as I've said before, I find it hard to suggest to anyone that they should make any kind of reasonably complex game inside of an elearning tool; I'd always recommend [using a game development tool instead](http://www.knanthony.com/blog/dearid-game-makers/). I've also found increasingly in my work as an independent LX Designer/Developer that having a bunch of tools that I know and can wield allows me to continually say **"Yes, and..."** to clients. In one recent client request, we wanted to build an interactive experience that would promote an "Aha!" moment for participants around the diversity of their classroom. The requirements of that particular experience were:

*   generate any number of beads (which represented different diversity factors, such as race) to separate into groups (meaning a person could potentially create an infinite number of beads; undoable in an authoring tool without scripting),
*   drag and drop items into groups on the screen (easy in an authoring tool), and
*   take a picture of their resulting, sorted groups (undoable in an authoring tool without scripting; possibly undoable at all, without using the HTML5 Canvas)

Now, of course, I could have made part of this in an authoring tool, then told the client the limitations and found some workaround. But because I have other tools in my toolkit, I didn't have to say **"No, but..."**; I could, instead say, **"Yes, and..."** As it happens, I prototyped this solution in about 4 to 6 hours using Phaser JS. After, reviewing it with the SME, we decided to pivot to having participants enter in data to create a dynamic chart of their classroom data across three different diversity markers and I was able to develop that in another 4 to 6 hours using Chart JS.
> For me, knowing JavaScript, knowing about several free and open source tools, and knowing about several different game makers, allows me to say "Yes we can do that, and here's what that means, and here's the time it will take."

I guess what I'm trying to say is something that I've been trying to say for a while now: have your elearning authoring tool and other tools, too. Having in-depth experience with a particular authoring tool is valuable, without a doubt, full stop. AND having knowledge about how to use a host of other tools, including a programming language like JavaScript can be incredibly useful in helping us to do the one thing that's really a part of our job description: Helping to Solve Problems.