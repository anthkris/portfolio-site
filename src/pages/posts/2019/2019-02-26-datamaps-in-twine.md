---
title: 'Twine DataMaps'
path: "/blog/twine-data-maps"
date: '2019-02-26'
featured: "../featured/Datamaps-in-Twine.png"
categories: ["GameDev", "Showing my Work"]
tags: ["game design", "gameful learning experiences", "Twine", "gameful design"]
---

This week, I attempted to scale back my game design ambitions and I, partly, succeeded. After looking a some videos that described the datamap data type in Twine, I wanted to practice with it. I was inspired by Anna Anthropy's Town game, a starter game she made to demonstrate Twine, which is now down, but [I wrote a post on it a while back](/blog/unconventional-using-google-forms-for-text-based-branching).

## My Design and Process

This week, I wanted to focus on more of a puzzle mechanic, where the bulk of the gameplay is making sure that you have the pieces you need to move forward. As I said, I was inspired by Town, which was itself inspired by ZZT. I wanted to make a game where you would need to pick up certain items in order to unlock the next step.

### Process
Like last time, I only gave myself a week. I tried to spent each day making sure that I was filling out the game passages in terms of beginning, middle, and end. I really concentrated on using the power of datamaps and reusable passages. 

Datamaps are basically objects in common programming parlance. You can use them in Twine to store a lot of variables about a single item all in once place, which is super useful in keeping everything about an item together and keeping your Twine code tidy. You access those internal variables by writing something like:

```
$badge's description
```

The other thing that datamaps enable is reusable passages. So instead of creating separate passages whenever you examine an item and pick it up, you can create one passage that will show when the player examines the item and one that shows when the player picks it up. The code inside of these passages will then show the text from the current datamap, as long as they have similarly named internal variables. So for example, my game has a `$badge` datamap, which holds all of the information about the photobadge that you will receive, and an `$employeeManual` datamap, which holds all of the information about the employee manual you can pick up. I also created a variable called `$selectedItem.` When the player chooses to examine, the badge, then we change `$selectedItem` to `$badge` and we can use the same passage to show `$slectedItem's description` no matter what `$selectedItem` is. The reason why this matters is that it allows you to keep your Twine game tidier since you don't have to make new passages that basically do the same thing, over and over.

<figure>
    <img
      sizes="(max-width: 810px) 100vw, 810px"
      srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1551146814/blog/Datamaps.png 203w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1551146814/blog/Datamaps.png 405w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1551146814/blog/Datamaps.png 810w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1551146814/blog/Datamaps.png 1215w"
      src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1551146814/blog/Datamaps.png"
      alt="Datamaps in Twine" />
    <figcaption>Datamaps</figcaption>
  </figure>


### Lessons Learned

It looks like I still need to scope even smaller in my next game. Even though this game is only a few passages, the complexity in the logic, plus some long days at work made it difficult to finish. I thought about trying to rush it through, but I think I've learned what I wanted to from it. Datamaps are an excellent data type to implement for any kind of game where people will be picking up and using various items, and they're fairly simple to implement, too. However, the logic inside of passages can get very complicated, very quickly.

I also think, in trying to make an engaging game, I got caught up in adding more functionality and more passages than maybe I should have. This wasn't a great one-week endeavor; two weeks, or maybe even a month would have been a more appropriate time. I think, that this is another great lesson for me in getting scope right. 


### Results

As I said, I didn't get a chance to finish the game inside of a week. You can play up until the middle with the photobadge guy. However, I think this was an improvement on the last prototype and I learned more about Twine.

<figure>
    <img
      sizes="(max-width: 810px) 100vw, 810px"
      srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1551147924/blog/GladToHaveYouWithUs.png 203w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1551147924/blog/GladToHaveYouWithUs.png 405w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1551147924/blog/GladToHaveYouWithUs.png 810w,
              https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1551147924/blog/GladToHaveYouWithUs.png 1215w"
      src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1551147924/blog/GladToHaveYouWithUs.png"
      alt="Player Variables in Twine" />
    <figcaption>The name of the game is from this great onboarding scene from A Star is Born (1954)</figcaption>
  </figure>

My writing took a very pop-culture turn right from the beginning, combining the famous words of Zelda with a lot of writing inspired by the Hitchhiker's Guide to the Galaxy. The game is set in a huge company in which you, the player, are experiencing a particularly daunting onboarding experience. In the beginning, you can choose to download an employee manual. If you do, you can consult it throughout the game to get information about your current situation. I tried to use it to add a bit of tongue-in-cheek humor about company onboarding. 

<figure>
    <a href="https://s3.amazonaws.com/showcase.knanthony.com/gamedev/twine/GTHYWU/Glad_to_have_you_with_us.html" target="blank">
      <img
        sizes="(max-width: 810px) 100vw, 810px"
        srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1551146748/blog/Story_Size.png 203w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1551146748/blog/Story_Size.png 405w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1551146748/blog/Story_Size.png 810w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1551146748/blog/Story_Size.png 1215w"
        src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1551146748/blog/Story_Size.png"
        alt="game shape screenshot" />
      <figcaption>Try the Game!</figcaption>
    </a>
</figure>

## Instructional Design Implications

There's a number of game types where it would be useful to allow people to examine, pickup, and use items. Though this particular game is poking fun at onboarding, I could see this as really being useful for some kind of pre-onboarding experience where people get to try out onboarding to a company, perhaps meet some people who actually work for the company, through the game. And of course, puzzle games can be useful in other work themes, as well, for example, an investigation into some kind of work-related problem.

One of the things that I'm finding is that one is able to prototype logic pretty thoroughly in Twine, such that I could, and I may, take a prototype from here and move it into a prototype with a different, more graphical game engine. So, I would think that, even for something like VR where the tools aren't currently democratized to the point that anyone can pick it up and create a deep game (e.g. it involves skills like 3D modeling, coding, and a whole lot more) and instructional designer could model a lot of the logic of such a game using Twine and it would be actually useful to another developer, which is pretty darn neat.
