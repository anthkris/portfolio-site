---
title: 'Lessons Learned in Canvas LMS: Part the Second'
path: "/blog/lessons-learned-in-canvas-lms-part-the-second"
date: '2015-12-03'
featured: "../../../../public/images/post-images/Lessons-Second.png"
categories: ["Coding", "Showing my Work"]
tags: ["canvas", "JavaScript", "LMS"]
---

So, during the great blogging drought of winter 2015 (hah!) I've been fighting a fight to the death with Canvas LMS to get some JavaScript to run. Why? The impetus for the battle was two-fold: firstly, my team has been working with a third-party organization to migrate several courses from Moodle into Canvas. And with that, we wanted to try and save several of the design niceties that had been implemented in Moodle. For example, the original courses made liberal use of the Moodle book format, which is basically just an accordion. They also used image carousels. ([I talked about both of those in the previous post](http://www.knanthony.com/blog/lessons-learned-in-canvas-lms/).) So I've been working hard to make that a reality in their new home.

## Knowledge Update

In the previous post, I mentioned that Canvas came bundled with jQuery. I've since learned that it is an old version of jQuery (1.7.2) and also loads jQuery UI 1.8\.  So while I still have access to a lot of things, it's definitely not optimal to be working with such old version. So the accordion is a part of the jQuery UI. This is actually a great thing, because that means that the accordion is accessible. However, with all that code and dependencies loading, it's nearly impossible to actually control what's happening.

## Accordion Issue

So if you had a chance to implement the accordion in Canvas the way I suggested last time (the way it's been demonstrated in other courses), you have noticed a particularly annoying little quirk: every panel is as tall as the tallest panel. Meaning lots of unwanted whitespace. That's easily fixed, but only if you call the accordion with the appropriate options.

## Carousel Issue

We also wanted to implement an image carousel. Initially, I wanted to implement a solution that was CSS only. Unfortunately, Canvas strips out most HTML tags. So, JavaScript/jQuery was the next viable option. I was able to find an accessible carousel. The nice thing about it is that, a user can create the structure inside of the Canvas RCE.

## The BIG Problem

So, after finding these great solutions, I was over the moon EXCEPT, after wrapping my code in every type of load function I could find, the JavaScript was firing intermittently in Google Chrome. Naturally, I also tried jQuery's $(document).load but, though that fired consistently, it wasn't appropriate for the functions, which seem to require that all of the page content be loaded first (more on that later). I fought the good fight. I kept at it and kept at it. But I didn't understand the why. I kept asking myself what on earth would stop window load from firing? I'd already implemented a function to check for load conflicts. What was the problem? Well, today, after all my struggling, [I finally found an answer on Stack Overflow](http://stackoverflow.com/questions/3520780/when-is-window-onload-fired): one thing that could stop my script from loading properly was if it had been dynamically generated into the document. So I set out to discover how exactly Canvas was inserting the JavaScript I uploaded to the sub-account.

### Inserting JavaScript

Now when you have full control of a web page, you can insert your javascript in a script tag, either in the head of the document or just before the closing body tag (which is now considered best practice). But in Canvas, as in most such environments, I didn't have control. I had to upload my JavaScript someplace else and rely on the environment's machinations to make sure that it made it in. When I looked at the source of the page, I was surprised to find that Canvas was creating a script tags dynamically.

```javascript
CDATA[ require(['jquery'], function () { ["SRCHTML","SRCHTML"].forEach(function (src) { var s = document.createElement('script'); s.src = src; document.body.appendChild(s); }); });
```

TL;DR: The way Canvas was inserting my script meant that sometimes the page considered itself fully loaded, even when it it hadn't executed my code.

### Solutions!!!

I finally knew the why but that didn't bring me any closer to fixing it. But I couldn't let it go. I figured _someone_ else had to be having this problem. So I made one final push and found a thread on the Canvas forum. Wonderful user Kenneth Larsen wrote an amazing script (find it here: [https://community.canvaslms.com/thread/7128](https://community.canvaslms.com/thread/7128)) that checks up to 100 times whether or not the content has loaded, based on the type of page you're on and then runs your script, when it can. This was exactly what I needed (and may be what you need, too so check out the thread). Apologies for the GIF quality, but you get the idea. Everything is running smoothly! I was even able to implement an accordion within an accordion.

<figure>
  <img src="../../../../public/images/post-images/AccordionGIF.gif" alt="Accordion functionality" />
</figure>

## Next Steps

I'm incredibly excited that the code is now working and I can be confident that I can continue to stretch Canvas beyond its native capabilities. However, my next quest is to try and figure out why waiting until the document object model (DOM) loaded, that is, until the structure of the web page was complete wasn't good enough. In testing my code outside of the Canvas environment, it's worked fine and considering the code itself, there shouldn't be any reason that I need to wait until images and such have been downloaded. So I want to know why Canvas is requiring the entire web page and all contents be loaded for this code. We'll see what I can come up with!
