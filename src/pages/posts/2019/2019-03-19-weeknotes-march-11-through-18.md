---
title: 'Weeknotes: March 6th through the 18th'
path: "/blog/weeknotes-march-6-through-18"
date: '2019-03-19'
featured: "../featured/logoColor.png"
categories: ["Showing my Work", "Coding", "Design"]
tags: ["work projects", "resources", "portfolio work", "project"]
---

I was not able to continue with my Twine projects the last couple of weeks, but I haven't been idle. Over the past couple of weeks, I've created a number of projects for work.

## Amazon Ipsum

My first two projects revolved around creating a custom placeholder text generator filled with the peculiar language of Amazon.

In my first 90 days, I've encountered a bunch of really useful and interesting mental models, frameworks, and concepts in use at Amazon and I've even taken some of them and applied them to my other projects. For example, after learning more about how Amazon handles mistakes, I wrote a document for myself to describe how I felt the freelance experience had served me as well as things that I thought I didn't do well and specific suggestions on how I could do those things better. The act of writing it out, deliberately, was super helpful and a direct consequence of my introduction to Amazon's writing-focused culture.

However, as might be expected, there are a ton of acronyms, buzzwords, and other vocabulary unique to Amazon that it takes a while to get used to. So with tongue firmly in cheek, and wanting to scratch a development itch, I created a ReactJS application that generates placeholder text made up of Amazon-specific words. You know, a lot like [Cupcake Ipsum](https://www.cupcakeipsum.com/) or [Samuel L. Ipsum](https://slipsum.com/).

After that, I got it in my head it would be a great idea to also create a plugin for Adobe XD, a great tool for creating interactive prototypes. With an Amazon Ipsum plugin, it would be possible to generate placeholder text right inside of the application. So I watched about 5 minutes of a really good [Adobe XD tutorial](https://www.youtube.com/watch?v=hwxuJ1eqfxc), right up until the gent pointed us to [the docs](https://adobexdplatform.com/plugin-docs/tutorials/quick-start/); so I went off rails and took the next several hours looking at the docs and example plugins to figure out how to go about creating the functionality I wanted. One of the great things about creating plugins for XD is that it uses JavaScript, and can even use React, so I was able to reuse a lot of the same code that I had written previously, with some new functionality that would allow me to access UI elements in XD, such as changing out the content of a text box.

`youtube: hwxuJ1eqfxc`

After a minor issues, I needed to be able to package it for [distribution internally](https://adobexdplatform.com/plugin-docs/distribution/packaging.html). The docs make it seem simple, but the error messages aren't very helpful. I ended up installing the [Adobe XD Plugin Manager Command Line Tool](https://github.com/AdobeXD/xdpm) to get more information about what was going wrong. The validation command does a great job of letting you know what's wrong with the package. 

## Resource Wiki

Last Friday and this Monday, I switched gears a little bit and concentrated on creating an internal wiki resource targeted at other Amazon LXD newbies. When I arrived, one of my first questions was, 

<blockquote>
"Where are all the things?"
</blockquote>

I find that, when acclimating to a new positon, I want to know about what tools people use, how to access those tools, where they have repositories of reusable resources (such as image or sound or music libraries), and where the documentation from previous projects is. We definitely had some of that, but there wasn't a community-wide resource to help newbies get acclimated to the community. There were also lots of community spaces, such as an email list and an instant messaging space, but I found that people seemed to be asking a lot of similar questions about resources. That's something I really don't like to see. So I resolved to use this really cool internal tool to create an internal wiki site to help introduce other newbs in the learning space to the myriad resources around.

## What's Next?

This week we're having an internal conference which will probably tire me out. But I'm hoping to recreate the writing game I created for work, but with a different subject, again using React. After that, I might either continue with small Twine proofs-of-concept (I found a couple of really neat ideas), or move on to Phaser. At any rate, I'm going to keep things small and modular with a focus on trying new functionality and not full-fledge games.