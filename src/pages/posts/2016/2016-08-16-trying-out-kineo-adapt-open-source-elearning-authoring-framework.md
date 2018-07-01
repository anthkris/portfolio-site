---
title: 'Trying out Adapt: Open Source Elearning Authoring Framework'
path: "/blog/trying-out-kineo-adapt-open-source-elearning-authoring-framework"
date: '2016-08-16'
featured: "../featured/Trying-out-Adapt.png"
categories: ["elearning", "Showing my Work"]
tags: ["Adapt", "course build", "course design", "open source", "responsive"]
---

Lesson 1: This will not be development as usual. As I've mentioned a couple of times on the [DearID show](http://dearinstructionaldesigner.com) that I've been wanting to get my hands on Adapt, the elearning authoring framework. As you may have seen, I got to working with it and, just recently, I finished my first experiment.

## The Adapt Experience

### Installation

The absolute first thing to note for anyone who's interested is that this thing is an absolute beastie to install. It's not like installing a neatly packaged program like you might be used to. We're talking command line/terminal commands. They have pretty good instructions on their github wiki but you are still highly likely to run into issues. If you're willing to work through that phase, maybe you're already comfortable with the command line, you can get it done. For others, I know the forum and Gitter communities help quite a lot of people with issues like this. I chose to power through solo, so it took a little doing but I finally got it installed. Adapt offers an authoring tool version, which is suitable for most people. It includes a graphical interface so you can use menus, drag and drop, etc. to build your courses. They also offer a framework version, which allows developers to look at the code (a mix of JSON, handlebars files (a templating engine), and LESS files (a "type" of CSS that allows variables and other cool stuff). I started out intending to use the authoring tool, but discovered that, for now, you have to develop course themes using the framework. I liked it so much that I just stuck with it. (I should mention that Learning Pool is awesomely leading the way in trying to bring Adapt to everyone and are [testing out providing a hosted version of the Adapt Authoring tool](http://www.adaptbuilder.io/)).

## The Adapt Metaphor

Once you get the thing installed (or [simply have a look at their demo course page](https://www.adaptlearning.org/index.php/adapt-showcase/)), you'll see that the second huge thing to note about Adapt is that it uses a completely different metaphor than the standard authoring tools. While Storyline, Lectora, and (I think) Captivate are built around a PowerPoint/Slide metaphor, where you put content on a slide and users switch between one slide and another, Adapt allows itself to look like what it is: a web page. It allows for deep scrolling, one page courses (which is what I went with) and because it embraces the fact that it's a web page, it is fully responsive right out of the box. Adapt also concentrates on accessibility most, if not all of the out-of-the-box components are accessible to WCAG AA level. Building in the authoring tool is more akin to working in WordPress or Drupal than it is to Storyline or Captivate. It's like building a website using a CMS. And like building a website, you can definitely get more done if you know CSS (more important, in this case, I think) and JavaScript (less important). Adapt has lots of built in interactions that you can use but styling (using CSS and/or building a custom theme) is likely to be majorly desirable.

## The Framework

Again, Adapt is built more along the lines of a webpage. They explain their framework as the A-B-Cs:

*   Pages: Pages are how the main learning content is presented (similar to a page on the web), and can contain a number of sub-elements, making them perfect to present a single topic in an e-learning course.
*   Articles: Articles are the next step down, and are used to present compound pieces of information within the page. Like pages, articles can be formed of many sub-elements. Articles can also be used to split up a page for presentation purposes.
*   Blocks: Blocks have replaced the traditional screens/slides found in most e-learning publishing software, and present small chunks of related content using components.
*   Components: Components are the main interactions in Adapt, and present simple ideas. Components can be used in a block full-width, or combined with another component for more variety. To summarise: Pages contain Articles contain Blocks contain Components.

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/adapt-a-b-c.jpg 203w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/adapt-a-b-c.jpg 405w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/adapt-a-b-c.jpg 810w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/adapt-a-b-c.jpg 1215w"
    src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/adapt-a-b-c.jpg"
    alt="Adapt framework"/>
  <figcaption>The ABCs framework</figcaption>
</figure>

It's important to get comfy with this, because each of these components in the hierarchy has to be in place, even if they're empty. For example, you can't just stick a component on a page. You have to have an article and block in place first. And that can take some getting used to. Adapt also runs off of plugins. So if you need more functionality, you will need to (and on the more positive side, you are able to) create a plugin for it.

## Plugins

For example, I wanted to emulate a really cool feature I saw in a SpongeUK course. So I created a small game in the Phaser JS framework. Then I had to figure out how to embed it in my course. SpongeUK created a custom plugin that displayed their game in a modal, but they hadn't released it, so I needed to build something on my own. I decided that I really wanted people to be able to play the game within the normal flow of the course, instead of having to open a modal. Adapt has a bundled responsive iframe plugin, so I tried that first. It worked well enough, except for two things:

*   Firstly, the game loaded before you could see it. Since my game has music in it, that meant you were hearing the game way before you got to that component.
*   Secondly, once you did get to the game component, you could skip it. There was no way for me to tell Adapt to stop people from continuing the course until after the game was complete.

So I got to work. I fixed the first problem on my own by using JavaScript to only set the iframe source once the user had reached the component. The second problem was trickier so I reached out to the people on the Gitter community and Oliver Foster suggested that I tap into the postMessage API to send a message from my game to my course. It took a bit of doing, but I was able to accomplish this. I then used the message to trigger the completion status of the block. The great thing about open source (and one of the reasons I'm so into it!) is that, once you make something that solves a problem, you can offer it back to the community. So I spent several hours on a Saturday figuring out how to turn my modified version of the Responsive Iframe plugin into something specifically for games. And it's [out now in the Adapt plugin registry](https://www.adaptlearning.org/index.php/plugin-browser/) and could use some testers! You can check it out by searching for "iframe." Things to note are that I don't think that the plugin is accessible; I'm not sure that the game is accessible either. I've overcome several issues on iOS though there are still a few quirks. And the game (and course) design is probably a bit wordy for small phone screens (my fault).

## First Impressions

Overall, I really enjoyed my experience developing in Adapt! The installation is a huge hurdle, so it's amazing that Learning Pool is tackling that and I think that it will be a huge boon to other folks adopting the tool. I liked that I could customize everything using the framework. And I love that the code produced is well organized, responsive, easy to understand, and is really HTML. All of those things are huge pros, as is the attention paid to accessibility. Furthermore, Adapt's modular ethos says, if you want to be able to do something and you can't do it with out-of-the-box functionality, build it! I can really get behind that. I think that Adapt can be really useful for bite-sized and long-form courses. The web-page pattern and authoring tool will be a learning curve for folks who've only developed with the main authoring tools. Interactivity along the lines of games is possible but has to be added in using other tools, which might be an issue for some folks. In other words, it may not be for everybody or for every course. But I think it has a lot of potential in a world where the online learning many folks are experiencing looks more like Udacity or Udemy or Teachable, rather than slide-based courses in an LMS.

## Resources

I'd be remiss without citing my sources for content (I know nothing about bikes), so here they are in case you want to build your own demo course:

### Bike Fit

*   REI: [https://www.rei.com/learn/expert-advice/bike-fit.html](https://www.rei.com/learn/expert-advice/bike-fit.html)
*   Bicycling.com: [http://www.bicycling.com/maintenance/bike-fit/bike-fit-set-your-saddle-height](http://www.bicycling.com/maintenance/bike-fit/bike-fit-set-your-saddle-height)
*   Cyclying Weekly: [http://www.cyclingweekly.co.uk/videos/bike-fit-and-maintenance/saddle-height-why-you-need-to-get-it-right](http://www.cyclingweekly.co.uk/videos/bike-fit-and-maintenance/saddle-height-why-you-need-to-get-it-right)

### Choosing the Right Bike

*   REI: [https://www.rei.com/learn/expert-advice/bicycle.html](https://www.rei.com/learn/expert-advice/bicycle.html)
*   Century Cycles: [http://centurycycles.com/buyers-guides/bicycle-types-how-to-pick-the-best-bike-for-you-pg9.htm](http://centurycycles.com/buyers-guides/bicycle-types-how-to-pick-the-best-bike-for-you-pg9.htm)

### Custom Bike Building

*   Ellsworth: [http://www.ellsworthbikes.com/tech/](http://www.ellsworthbikes.com/tech/)
*   Daltex: [http://www.daltex.bike/](http://www.daltex.bike/)

## Wanna Try It Out?

I created an onboarding-inspired, bite-sized course for an imaginary hipster, bespoke bicycle company. Check it out and let me know what you think!

<figure>
  <a href="http://knanthony.com/showcase/candvbikes" target="blank">
    <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2016-08-08-at-10.21.49-PM.png 203w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2016-08-08-at-10.21.49-PM.png 405w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2016-08-08-at-10.21.49-PM.png 810w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2016-08-08-at-10.21.49-PM.png 1215w"
    src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2016-08-08-at-10.21.49-PM.png"
    alt="course home page" />
  </a>
  <figcaption>Check out the course!</figcaption>
</figure>
