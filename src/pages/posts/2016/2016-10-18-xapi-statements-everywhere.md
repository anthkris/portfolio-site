---
title: '#xAPI Statements Everywhere!'
path: "/blog/xapi-statements-everywhere"
date: '2016-10-18'
featured: "../featured/xapi-statemtnes.png"
categories: ["Coding", "elearning", "Showing my Work"]
tags: ["iframe", "JavaScript", "Moodle", "Tin Can JS", "xAPI", "YouTube"]
---

This weekend, I spent my time trying to solve a few more problems in generating xAPI statements. There were a couple of things that I wanted to be able to accomplish:

*   Generate statements from a YouTube video in a Moodle page
*   Generate statements from a YouTube video in Storyline 2 in Moodle

It took quite a while to actually get these things working, but I got it done! I'm working on trying to articulate the code in my Github repository, but until then, I figured I'd talk a bit about it here. As I mentioned last post, the current Torrence Learning xAPI Learning Cohort has been a great impetus for actually experimenting with xAPI. I've been focusing on video since that's something that my workplace is interested in. There were a couple of roadblocks this go round, because I was working in Moodle. In particular, trying to get the statements from an embedded YouTube video in a Storyline file launched from the xAPI launch plugin in Moodle was rather difficult and required a bit of work. The first thing I did was take a tip from the Storyline forums and embedded TinCanJS into Storyline by making a blank index.html page and embedding it alongside TinCanJS into Storyline as a web object. This meant that I didn't have to continue to perform post-production surgery on the files to get this essential file into the mix.

After that, I had to do use JavaScript to dynamically add an id attribute to the iframe (the embedded YouTube video) and update the video URL to enable the YouTube Iframe API (this caused me much headache! Don't forget it). The bulk of the code is the same as it was for the normal, uninteresting web page. BUT I had major problems getting it to actually work. Countless log statements later, I figured out that there were various statements from my other code that were causing the code to stop working but that didn't throw any errors unfortunately. There is, however, a bit of code meant to actually create a script tag that links to the YouTube Iframe API, but that doesn't seem to be working. So I actually did have to edit the story and story_html5 html files to add this link. However, one of the major important points was to get the currently logged in user. I haven't done this quite yet for the video I have in a Moodle page, though I know that I can use the Moodle PHP to give my code the $USER variable that gives you access to the various information about the user, but because the Storyline course was being launched with this plugin, I didn't have access to the Moodle user information. I kept hacking at it and finally figured out that the plugin adds the pertinent information as parameters in the launch page URL.

So, I had it! But how could I get it? Well.... I had to grab the page URL, use a function to grab the parameters from the URL, decode the URI so that the @ symbol, for example, looked like the @ symbol, turn all that into a JSON object, and then, THEN I could grab the information I wanted. So, there's quite a bit of code I'm launching in a single slide. This code, I think, will need to be repeated each slide that has a video you want to track. When trying to just put it in one area, I found that it didn't fire as it needed to.

So, there's quite a bit of work to be done, but you can do it!!! Keep an eye on the Github Repo to get the code: [https://github.com/anthkris/xAPI-video](https://github.com/anthkris/xAPI-video) [Edit: I actually spent some time commenting and committing the code I have so far, so take a look at github for the code and some more information!] Let me know if you have any improvements!
