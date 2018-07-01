---
title: 'May GDS Challege: Call Center Training for Travelly'
path: "/blog/may-gds-challenge"
date: '2015-05-25'
featured: "../featured/Travelly-Shipped.png"
categories: ["Design", "elearning", "GDS Challenge"]
tags: ["call center", "training"]
---

So after struggling with it all month, I finally shipped my Travelly course. It isn't perfect but I'm pretty happy with it. Now that it's shipped, let's get down to specifics.

## Context

[As you saw in a previous post](/blog/back-to-the-storyboard-throwing-it-all-out/), I completely revamped my entire challenge look. At first, I was going for something more underground-centric, but it didn't seem to fit. So I decided to start afresh. I drew a lot of inspiration from AirBNB's site and visuals. Context-wise, I wanted to ground the training firmly in  a sort of site back end, where a customer service agent might be able to look up rooms and research London. Design-wise, I went with something pretty clean and, at first, I only used couple of handwriting fonts. But after looking at it for a few days, I decided to add in a third font to make it more legible.

## Challenge, Activity, and Feedback

Here I drew a ton of inspiration from the Allen Interactions Expedia demo. I went with three short challenges.

### Challenge 1

The first one asks agents to really listen to the guest and help her to get the right room, use the right transportation, and identify two sightseeing and one shopping opportunity. They agent gets feedback after every activity to ask them to do a better job listening or  to reinforce their decisions.

### Challenge 2

The second challenge differs a bit from the Allen Interactions model. I asked myself, what's the biggest issue I have when I'm thinking about travelling to a new place? I'm brand new to a place and I may have a list of attractions I want to see, but the thing is, I have no idea of the proximity of anything to anything else, so I'm always wondering what exactly I'll be next to or where's the best place to book a stay. So this challenge asks agents to take in some vague hints from a customer about things he wants  to see and to recommend the best place to stay. In the case of a client course, I would likely want to punch this up a bit with several more opportunities. The other interesting thing about this that it also asks agents to remember the descriptions of the attractions they went over earlier. However, again, I thought to myself, while it would be good to be familiar with important London attractions, there probably isn't any really reason to memorize them. So I took the opportunity to to practice my coding and I created a Google map using their JavaScript API. I created map pins using icons from the Noun Project. In this way, I could have an interactive map that would allow participants to poke around and see more information about the surroundings of each flat I created.

### Challenge 3

The last challenge tries to put it all together, asking agents to get the right room and offer the right suggestions, but this time, with feedback withheld. In order to update the Allen Interactions model, I gave feedback in the form of Peeps (my non-copyrighted version of Tweets).

## The Demo

So, after a month's work of development, here's my entry into the first GDS Challenge. Enjoy!

<figure>
  <a href="http://knanthony.com/showcase/travelly/story.html" target="blank">
    <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/travellyscreenshot21.png 203w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/travellyscreenshot21.png 405w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/travellyscreenshot21.png 810w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/travellyscreenshot21.png 1215w"
    src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/travellyscreenshot21.png"
    alt="Travelly learning game" />
  </a>
  <figcaption>Click on the image to view the demo</figcaption>
</figure>
