---
title: "Oy! I'm building an App!"
path: "/blog/oy-im-building-an-app"
date: '2017-09-12'
featured: "../featured/Im-building-an-app.png"
categories: ["Design"]
tags: ["app development", "Ionic", "xAPI"]
---

With the xAPI Cohort going on now (it's not too late to join up) and me being swamped in work, I thought I might as well take a side project that I've been working on for the past couple of weeks and have it send xAPI statements... so I'm building my first app!

`youtube: N39ZQC5WlFk`

## Context

So this app came out an idea I had originally Ellen Hayes, an ID I interviewed on the [Dear Instructional Designer](https://dearinstructionaldesigner.simplecast.fm/episodes/be5256ab/episode-42-online-course-for-a-student-maker-space-with-ellen-hayes) show. As you all know, I've been interested in how I and we can facilitate a more hands-on learning, practice, and development experience for ID newbies. I've written about using [open source and civic tech projects](/blog/civic-learning-an-idea-generated-from-torrance-learnings-download-un-conference/) as a way to gain elearning design and development experience. And I've [developed a whole course](https://kristinanthony.withcoach.com/go-design-something-building-your-job-winning-portfolio) (soon to be released for free) that includes various methods for finding good portfolio projects. But I've also been interested in the aspect of building community and mentorship that can happen when IDs work together on a project. So Ellen and I hatched a plan to create a tiny web thing and we wanted it to be at the intersection of our interests, UX and web development.

### Then...

I went on my first vacation in about 3 years and decided to go totally dark. Then I came back, caught up on client work, and tried to get back into it, but Ellen was busy. So that was definitely a lesson learned, if you're trying to build a product collaboratively: Make it even tinier! Like, weekend project tiny! But I didn't want the project to die. Later, on the Instructional Design subreddit, there was a poster who was asking about the best way to sell their own courses and someone else suggested making an app and selling it for $0.99\. And, of course, the natural next question from the OP was,

> How do you do that?

And I thought, "Yeah, how do you do that?" So, during Hurricane Harvey, when I thought the power might go out (we were very fortunate, no damage at all; but both Houston and Florida residents could use your help!) I decided to just start!

## Building the Project

I did a little looking up of a couple of frameworks I had previously heard about that would allow me to create mobile apps using the programming language I know (namely, Javascript). I decided to use [Ionic 3](http://ionicframework.com/). Content-wise, I took from the outline that Ellen Hayes and I had made as well as some of the resources she had gathered. Design-wise, I was inspired by card-based microlearning apps like [Google's Primer](https://itunes.apple.com/us/app/google-primer-learn-marketing-fast/id918628107?mt=8) and [Startup Patterns.](https://itunes.apple.com/us/app/startup-patterns-bite-sized-startup-lessons/id1142253405?mt=8) I knew I wanted a user to be able to choose from a series of lessons and then swipe through cards to go through the lesson. A card might contain text, a video, or a question. I also wanted a person to be able to see their progress inside of a lesson, as well as from the home page, and be able to get back to where they were easily. As I kept building, I tried to keep things small, but also made sure to add features that I felt would help the experience be better.
<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/app_sketch.jpg 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/app_sketch.jpg 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/app_sketch.jpg 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/app_sketch.jpg 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/app_sketch.jpg"
    alt="app sketches" />
  <figcaption>My initial sketches</figcaption>
</figure>

Getting the app started was actually really easy! Ionic has great documentation and even an [entire demo conference app](https://github.com/ionic-team/ionic-conference-app). But my first hurdle came when trying to replicate the tinder-like card animations. I found two separate plugins that would allow me to implement this, but I couldn't figure out how to allow a person to go back a card through a swipe event. I tried really hard, but eventually, I decided that this UI wasn't essential to the app and decided to pivot in favor of moving on instead of getting stuck. Ionic has a ton of great built-in components, and I restyled their slides to fit the bill. After that, development was once again, relatively easy, until I decided that I wanted to try and send xAPI statements from the app, which meant that I now needed users to log in. Instead of allowing people to create their own username and password, I've decided to use social login, so that people can log in to the app using Google and Twitter. That took me several hours to get working. Finally, I'm at the point where I'm trying to embed the appropriate code to send statement! After most of the weekend spent trying to get the YouTube Iframe API to work in the app and access the calls I wanted, I'm ready to start the part I'm not confident on: making well-formed xAPI statements! Here's what I plan to track:

*   Initial log in
*   Start Lesson or Continue Lesson
*   Lesson progress
*   Question answered and answer chosen
*   Lesson completed (should only trigger once)
*   <span class="s1">Video watched, completed, etc. ([https://registry.tincanapi.com/#profile/19/recipes](https://registry.tincanapi.com/#profile/19/recipes))</span>
*   Link clicked

As others have said, the hard part with xAPI isn't the sending of statements, it's really the planning out of the data and I'm still really new to the spec and trying to make sure that I'm doing things right (which is where having a community in the cohort helps!). Last cohort meeting, Sean Putnam also offered up one great way to look at thinking about your data plan, tracking participation vs tracking performance. For this app, definitely participation-based metrics are what I'm after!

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2017-09-11-at-6.31.04-PM.png 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2017-09-11-at-6.31.04-PM.png 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2017-09-11-at-6.31.04-PM.png 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2017-09-11-at-6.31.04-PM.png 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2017-09-11-at-6.31.04-PM.png"
    alt="Trello board card" />
  <figcaption>My expanding trello card for initial development</figcaption>
</figure>

### Got Any Suggestions?

I'm hoping to release the app by the end of the month (definitely by the end of the cohort). Almost all the code is on Github here: [https://github.com/UXLX/uxlx](https://github.com/UXLX/uxlx). (I haven't shared any of the assets (they're copyrighted) and I've also not shared my LRS set up as it contains the credentials). Also, if you want to checkout an alpha version of the app, and give me feedback, you can do so like this: You can view the app in its current form by downloading this app: [https://view.ionic.io/](https://view.ionic.io/) And searching for this: **d3310808** Ionic View is currently only available for iOS, though they do have a legacy version for Android (not sure how it works). Note that the app is a bit wiggly and can be turned landscape in this testing environment. Those things won't be true when the app is in production. Would love to get any feedback on how to make it better from an ID perspective!
