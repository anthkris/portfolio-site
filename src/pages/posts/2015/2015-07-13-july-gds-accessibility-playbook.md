---
title: 'July GDS Challenge: Accessibility Playbook'
path: "/blog/july-gds-accessibility-playbook"
date: '2015-07-13'
featured: "../featured/Accessibility-Playbook.png"
categories: ["Coding", "GDS Challenge", "Showing my Work"]
tags: ["accessibility", "JavaScript", "Jquery", "progressive enhancement"]
---

This week, I worked to ship an as yet imperfect version of my July GDS Challenge, an accessibility playbook for elearning. When I began this project, I was considering creating another course video on creating a proper skipnav link. I may still do that but, as I grow in my javascript learning, I find myself wanting to create more side projects at the intersection of elearning and programming. I though this was a great opportunity for that. So I pivoted and, with inspiration from the [U.S. Digital Services Playbook](https://playbook.cio.gov/#introduction), I decided to take a stab at creating a responsive one-page site from scratch.

## Content

I settled on an accessibility playbook, based on the lessons I've learned so far, [part 1 here](/blog/accessible-elearning-lessons-learned-part-1/) and [part 2 here](/blog/accessible-elearning-part-2/). I thought that it would be a great project to serve as inspiration for something that I might present at an organization. I also thought it would be a great opportunity to invite the elearning community to contribute and provide new "plays" so as to share knowledge about really implementing accessible/universal design in what we do. On that note, please be sure to [submit any issues (things that don't work, new plays, etc.) to the github repo](https://github.com/anthkris/Accessible-Playbook). I'd love to have this become a multiple contributor project.

## Prototyping

I began by creating a mockup in Photoshop. As I've written before, I'm finding quite a lot of carryover in design methodologies between web development and elearning development. This was no exception. I love to look at [One Page Love](https://onepagelove.com/) for design inspiration and I loved the simplicity of this [portfolio site of Diogo Akio](http://diogoakio.com.br/index.html). So I decided to emulate that, while still making the site a one-pager.

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Accessibility-Playbook-Desktop.png 203w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Accessibility-Playbook-Desktop.png 405w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Accessibility-Playbook-Desktop.png 810w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Accessibility-Playbook-Desktop.png 1215w"
    src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Accessibility-Playbook-Desktop.png"
    alt="accessibility playbook" />
  <figcaption>Initial Prototype</figcaption>
</figure>

## Programming

I began with a HTML5 responsive boilerplate from Initializr. After getting rid of the initial styles, I began to put my prototype into play. I tried to use two important concepts that I mention in the playbook: progressive enhancement and accessibility first. So I built the site using CSS and HTML first and added a bit of jQuery to smooth the scroll transitions and handle the change the background images on hover. I was torn between multi-page and a one-page design at first. But I decided to go ahead with a single page design. I also wanted to implement a bit of interest with some non-rectangular background shapes. I used a [tutorial from codrops](http://tympanus.net/codrops/2011/12/21/slopy-elements-with-css3/) with mixed success. It works pretty well.

## Current Issues

I tested in on my iPad and iPhone and, on the whole, it works fine. Two issues I've identified are that one of the unicode characters I'm using as bullet points isn't working (which reminded me of this [super interesting article on why icon fonts aren't good for accessibility](http://alistapart.com/blog/post/on-our-radar-four-and-a-horse-stars)) and some of the kerning and spacing needs some adjustment. I hope to get those taken care of this week.

## Take a Look

I also took the opportunity to work more with Github for this project and created a new repo. Check it out: [http://anthkris.github.io/Accessible-Playbook/](http://anthkris.github.io/Accessible-Playbook/)

<figure>
  <a href="http://anthkris.github.io/Accessible-Playbook/" target="blank">
    <img
      sizes="(max-width: 810px) 100vw, 810px"
      srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/accessiblity-playbooksite.png 203w,
              http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/accessiblity-playbooksite.png 405w,
              http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/accessiblity-playbooksite.png 810w,
              http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/accessiblity-playbooksite.png 1215w"
      src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/accessiblity-playbooksite.png"
      alt="elearning accessibility playbook" />
  </a>
  <figcaption>View the Site on Github</figcaption>
</figure>
