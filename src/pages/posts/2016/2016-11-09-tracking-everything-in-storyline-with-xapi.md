---
title: "Tracking Everything in Storyline with xAPI"
path: "/blog/tracking-everything-in-storyline-with-xapi"
date: '2016-11-09'
featured: "../featured/Tracking-Everything-in-Storyline.png"
categories: ["Coding", "Showing my Work"]
tags: ["Moodle", "Storyline", "tin can", "tracking", "xAPI"]
---

Special Wednesday post since yesterday was election day here in the U.S. and I figured everyone would be focused on that, instead of unimportant stuff like xAPI. As I've mentioned, I'm currently in the Torrance Learning xAPI Fall 2016 cohort. The cohort is wrapping up with the final party coming on December 9th. Since we're looking towards the end days, I figured it would be good to have some sort of project I could present. So I'm focusing my experimentation on trying to track every single interaction in a demo Storyline course. This course is fairly simple in terms of interaction; mostly embedded videos and links. This is fine with me; my mantra is start small. I spent a couple of hours last night working on this and extending my previous experiments.

## Extending the Tracking

I've launched this course about a bajillion times. But here are the statements from my latest successful experiment:

<img
  sizes="(max-width: 810px) 100vw, 810px"
  srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2016-11-07-at-10.57.40-PM.png 203w,
          http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2016-11-07-at-10.57.40-PM.png 405w,
          http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2016-11-07-at-10.57.40-PM.png 810w,
          http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2016-11-07-at-10.57.40-PM.png 1215w"
  src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2016-11-07-at-10.57.40-PM.png"
  alt="exemplar xAPI statements" />

One thing you might notice is that, on some of these statements, my name is in lowercase and in others, it's in uppercase. Storyline is already pulling my name from the currently logged-in Moodle user. So far, I've been gathering this information from the launch URL. I'm figuring that I need to figure out how to steal the current user from Storyline, instead of parsing it out myself. However, one subtle success is that I was able to extend my current code for tracking video to include Start, Paused, and Watched. I looked closely at the [current ADL video recipe](https://registry.tincanapi.com/#profile/19/recipes) (a recipe specifies which verbs to use in a certain context so that we all speak the same language around similar activities) and created separate functions to track those three states of watching a video. I'll be sure to update my Moodle/Storyline code snippets as I continue. Keep an eye on them here: [https://github.com/anthkris/xAPI-video](https://github.com/anthkris/xAPI-video) I need to add the complete state.

## DRYing it Up

One of the things that had been concerning me thus far was that I could see the need to repeat a lot of code in Storyline. Because Storyline only launches JavaScript when it's specifically called, I was having to repeat code for creating universal variables, like the variable that defined the link to the LRS, over and over again in each JavaScript execution trigger. But there's a principle in coding called "Don't Repeat Yourself" or DRY, so I definitely wanted to figure out a way to do that kind of stuff only once. There's a great tip on the Articulate community from [Steve Flowers on how to include JavaScript in your Storyline file without having to do post-publish surgery every time](https://community.articulate.com/discussions/articulate-storyline/external-javascript-source). I tried this and it does work (at least for the flash version). BUT the way Storyline loads the scripts means that essential stuff like the definition of the TinCan library or the LRS link could potentially occur after I needed it. This meant that my code wouldn't work. I'd just get a lot of errors. So the safest thing to do, I've found is to use Steve's hack to include the JavaScript, and then just copy and paste the links to the javascript files in both the story and story_html5 files. I also found it helpful to put these links in the head section of the file, instead of before the closing body tag (which is the typical best practice for including external script files). So the files look something like this:

### story.html

```html
<!DOCTYPE HTML>
<html style="height: 100%;" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
<!-- Created using Articulate Storyline 2.11"http://www.articulate.com -->",
<!-- version: 2.11.1609.3020 -->

<title>Tin_Can-xAPI</title>
<style>
body { margin: 0px; }
object {outline: none;}
</style>
<script>
[...]
</script>
<script src="story_content/WebObjects/6I9nQfcTnIr/tincan-min.js"></script>
<script src="story_content/WebObjects/6I9nQfcTnIr/lrs.js"></script>
<script src="https://www.youtube.com/iframe_api"></script>
<script SRC="story_content/user.js" TYPE="text/javascript"></script>
<script src="story_content/story.js" type="text/javascript"></script>
</head>
[...]
```

### story_html5.html

```html
<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <title>Tin_Can-xAPI</title>
 <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
 <meta name="viewport" id="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />
 <style>html,body{background:#FFFFFF;}</style>
 <link href="mobile/player.css" rel="stylesheet" type="text/css" />
 <!--[if lt IE 9]><script>location.href = location.href.replace("_html5", "_unsupported");</script><![endif]-->

 <!-- Created using Articulate Storyline 2.11"http://www.articulate.com -->",
 <!-- version: 2.11.1609.3020 -->
 <script src="story_content/WebObjects/6I9nQfcTnIr/tincan-min.js"></script>
 <script src="story_content/WebObjects/6I9nQfcTnIr/lrs.js"></script>
 <script src="https://www.youtube.com/iframe_api"></script>
</head>
[...]
```

I still get an error when I first load the file, but, otherwise, it works. Ideally, I'd like to make the code even less repetitive by separating out my youTube video functions, but I'm not sure it's going to work.

## What are you working on lately?

The other big thing my teammates have done is implement xAPI tracking using WordPress to track whether whether or not a user has made a post and those data points will feed in to a badging/achievement system using BadgeOS. I haven't had a chance to test that out, but it sounds interesting. It may be something that can be ported into other LMSs like Canvas or Moodle that campuses often use for online courses. What are you working on lately?
