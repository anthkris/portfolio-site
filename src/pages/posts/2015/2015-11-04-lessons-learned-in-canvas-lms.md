---
title: "Lessons Learned in Canvas LMS"
path: "/blog/lessons-learned-in-canvas-lms"
date: '2015-11-04'
featured: "../featured//LEssons-LEarned-in.png"
categories: ["Coding", "Showing my Work"]
tags: ["Canvas LMS", "html", "Instructure", "LMS"]
---

I'm new to using Canvas LMS, a rising star among learning management systems, especially in higher education. I'm way more used to Moodle which, in a lot of ways is much more open and easier to tweak (and break). In preparation for some work on an upcoming project, I've been playing around in a sandbox course and I've discovered a few interesting things.

## Canvas Includes

From what I can tell, Canvas seems to have been built by integrating the open source Bootstrap framework. What I wish I knew (before I tried to include a bunch of stuff for 3 or 4 hours) is that, because of this, Canvas seems to have included jQuery (an easy-to-use JavaScript library) as a part of their environment. That's really great news because it means that I don't have to include jQuery as a part of my ONE javascript upload available. So content enhancements like this accordion are built in to Canvas.

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2015-11-03-at-3.44.32-PM.png 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2015-11-03-at-3.44.32-PM.png 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2015-11-03-at-3.44.32-PM.png 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2015-11-03-at-3.44.32-PM.png 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2015-11-03-at-3.44.32-PM.png"
    alt="Canvas accordion component" />
</figure>

From this code in the text editor:

```html
<div class="enhanceable_content accordion">
<h3><a href="#">Section 1</a></h3>
<div>
<p>Section 1 Content</p>
</div>
<h3><a href="#">Section 2</a></h3>
<div>
<p>Section 2 Content</p>
</div>
<h3><a href="#">Section 3</a></h3>
<div>
<p>Section 3 Content</p>
<ul>
<li>List item one</li>
<li>List item two</li>
<li>List item three</li>
</ul>
</div>
</div>
```

You can find more Canvas code snippets in this handy doc someone made: [Canvas HTML Code](https://docs.google.com/document/d/1sd62Kt7eIK0At3O9V5GtaYiPr3WFtHs2AksUse1dDvE/pub) It also means that I can access jQuery functions in order to implement other cool interactions ([like the Owl jQuery Carousel](http://owlgraphic.com/owlcarousel/index.html)).

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2015-11-03-at-3.37.49-PM.png 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2015-11-03-at-3.37.49-PM.png 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2015-11-03-at-3.37.49-PM.png 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2015-11-03-at-3.37.49-PM.png 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2015-11-03-at-3.37.49-PM.png"
    alt="Canvas accessible carousel component" />
</figure>

In this case, I used my JavaScript and CSS uploads to get the necessary functionality.

## Canvas Excludes

Among the other things that I'm not so keen on about Canvas (like having to include one JavaScript and one CSS file for an _entire_ sub-account) is that they only support certain HTML tags. [highlight highlight_type="bold"]You read that right, HTML tags.[/highlight] Now, I'm not a fan of stripping out the script tag, but I get that it can be a major security issue so many systems do exactly that. But when I was trying to implement a CSS-only image carousel, I discovered (thanks to the forums) that Canvas only supports an extraordinarily limited number of HTML tags. [You can view the list in their PDF](https://s3.amazonaws.com/tr-learncanvas/docs/Canvas_HTML_Whitelist.pdf). Many CSS-only sliders rely on the use of the label tag to map the images to the navigation. But because it wasn't whitelisted, I had to go with a (likely less accessible) jQuery plugin.

## Take Aways

I love that jQuery is included. That takes a huge load off. However, only being able to upload one JavaScript file and one CSS file for all the courses in a particular section (sub-account) instead of per-course will be a hassle. While having only one file for each can have performance improvements, it may be worth thinking about minifying both files before actually pushing the course out into the world. I'm sure they'll each be incredibly massive. I'll also have to be very careful about possibly overriding Canvas's own styles (which happened twice) and I'll be limited as to what I can actually do in Canvas since only a few tags are supported. All-in-all, I'd say the experience for a power-user (if I can call myself that--an inquisitive and boundary-pushing user, at any rate) in Canvas is pretty lacking, but I don't suppose that's who they're targeting. Anyone else have any cool examples of things that you can embed in Canvas? With all the iFraming of a lot of content, has accessibility been an issue?
