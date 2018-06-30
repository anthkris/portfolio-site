---
title: 'UXLX: I released an xAPI-enabled app on Android and iOS'
path: "/blog/uxlx-i-released-an-xapi-enabled-app-on-android-and-ios"
date: '2017-11-16'
featured: "../post-images/UXLX-App.png"
categories: ["Coding", "Showing my Work"]
tags: ["Android", "app development", "Ionic", "iOS", "LX", "UX", "UXLX", "web development", "xAPI"]
---

[Back in September](/blog/oy-im-building-an-app/), I talked about an xAPI-enabled app I was building around the intersection between UX (user experience) and LX (learning experience). Well. It's out... Right now. (!!!)

## Go Download the App

First things first. Help me out? I'd love to have more people download and test the app. You can download the app and learn more about it from here: [http://www.lxresearch.info/](http://www.lxresearch.info/) If you find any errors to tell me about or you want to help build and maintain the app, you can do that here: [https://github.com/UXLX/uxlx](https://github.com/UXLX/uxlx) My goal is to offer the anonymized data to future xAPI cohorts so I could use as many testers as possible. Oh, and if you're an LX designer/ID/eLearning Developer who also uses UX research in your work, I'd love to publish a lesson from you! Let me know if you're interested in helping out with lesson creation.

## Lessons Learned

All together, I'd estimate development time at about 1.5 to 2 months for the app. As I wrote in my previous post, I used the Ionic framework which allowed me to use TypeScript to actually build the app and then publish it for both iOS and Android devices. There were several parts of development that went supa-smooth (like butta). And then there were parts that kept me stuck for days. It's been a while (I always forget to keep a journal during the midst of development), but here are some of the general lessons learned while developing the app.

## The Easy Bits

Getting a web app up and running is ridiculously easy with Ionic. The docs are great and they even have an entire demo app for you to use. So all of my basic functionality (card-based design, tracking user progress through a lesson based on which card they were on, basic swiping forwards and backwards) was taken care of with a mixture of plugins and built-in functionality. As you may expect, the moment I decided to start tracking participation with xAPI, though, things started to get more hairy.

## The Difficult Bits

### Sign In

xAPI requires you to think and design a bit differently. Instead of just being able to present my content, I had to think about things like how I would know who the user was. That meant I had to implement sign-in functionality. Ionic is built for making apps, and so there are plugins and various articles to help walk you through various methods of having users log in. I could have opted to ask people to create an account, but don't you just hate that? Plus I didn't want to be dealing with the security issues that creating an account would present. So social login (using existing social accounts like Google or Twitter or Facebook) seemed like a no-brainer. And again, this is such a common thing to do that I was able to find various articles to help me implement it. In general, the plan is to use Firebase along with Ionic social login plugins (Don't worry, I'll have plenty of links below). But even with all of this help, signing in still doesn't seem to be working AOK on all devices. The problem seems to lie in the fact that iOS and Android seem to require different web client ids (and I'm not even sure about that). After testing and testing and testing some more, it still seems to be a bit of crapshoot on whether or not you can log in with both Google and Twitter on iOS and Android. Troubleshooting sign in issues is difficult and I'm still not very confident that this part works properly, which is the main reason I've been hesitating about announcing the release of the app. So, social login has been, by far, the biggest show stopper in my app development journey. Keep that in mind if you give it a go (or discover something that I'm doing wrong!). P.S. Anyone who can help me test, particularly on Android would be greatly appreciated!

### Web Apps vs Actual Devices

Ionic helps you to develop apps that can be used on the web as well as on devices. The simplest form of testing out your app is to test in in the browser. However, one thing I found out about this work is that, once you think you're done testing... you should probably test some more. One of my biggest frustrations (particularly with the sign in problem above) was that after testing on the web, things didn't necessarily work the way you might want on devices. And then when I changed something to work on mobile devices, it didn't work on the web anymore. So that was really, really problematic. It's also kind of a bummer that you need to install and learn to work with two separate platforms. To test iOS devices, you'll need to use xCode and if you're testing for Android (at least on a Mac), you'll want to use Android Studio. As you can imagine, working on a Mac, using xCode felt way easier.

### Submitting to the App Store

Submitting to the Android app store is a piece of cake. You have to pay a fee to be in their developer program, but it's easy peasy to actually get your app up. Submitting to the Apple app store is a horse of a different color. As you may know, Apple app store employs reviewers so every time that you submit a new app or an update to your app, it will be reviewed before it's published. That process is what keeps the app store "cleaner" with less junk (though some junk still gets in, I suppose) but it also means that the process is longer and more tedious.

## Getting xAPI to Work

Getting xAPI to work inside of Ionic was a lot like getting it to work inside of other web things. First, I had to include the Tin Can JS library. With Ionic, I was able to do that by installing a node package (See here: [https://www.npmjs.com/search?q=tin%20can&page=1&ranking=optimal](https://www.npmjs.com/search?q=tin%20can&page=1&ranking=optimal)). Then, I had to create files that would help me to send xAPI statements based on what was happening in the app. In my case, I created two files: one to help me track what was happening with video and audio, and the other to help me track what was happening with the basic cards and links. One of the surprisingly difficult things was trying to get the statements from the embedded YouTube videos. YouTube has an API that allows you to know when certain things happen to the player, such as playing and pausing. I had to come up with my own way to figure out when a user had scrubbed forward and backward. But the main issue at the beginning was that, if I had multiple videos in a lesson, the xAPI statements weren't being generated. What I eventually discovered is that, if you are using multiple YouTube videos, you need to give each of them a unique player ID. That's the only way that the YouTube API knows to create and launch a new player for each of them. I haven't tested it yet, but I think this may be the fix that I was looking for [when I was trying to track everything inside of Storyline, last xAPI cohort](/blog/tracking-everything-in-storyline-with-xapi/).

### What Does the App Track?

Sean Putnam did a really great presentation for this current cohort and one of the things he said that stuck with me is that you can think about the data you want to track in terms of participation data and performance data. In the case of the app, I don't really know if the content as a resource is helping your performance, but I can track participation. From a UX perspective, what people do inside of the app is useful for a number of things, such as iterating on what the app does well, or as a starting point for more causal research. Here's what I'm currently tracking:

*   Initial log in
*   Start Lesson or Continue Lesson
*   Viewing slides inside of a lesson
*   Question answered and answer chosen
*   Lesson completed
*   Video/Audio watched, completed, etc. ([https://registry.tincanapi.com/#profile/19/recipes](https://registry.tincanapi.com/#profile/19/recipes))
*   Link clicked

## All the Help

Okay, real talk: I didn't do this alone. Being the newbie that I am, I used many, many, many, many resources to get the current version up and running. Here's every single resource I used. Take, read, do so in remembrance of me.

### Getting Social Login to Work

* Method works on device but not on web: [https://devdactic.com/google-sign-in-ionic-firebase/](https://devdactic.com/google-sign-in-ionic-firebase/)
* Deep link doesn’t matter: [https://javebratt.com/ionic-social-login-firebase/](https://javebratt.com/ionic-social-login-firebase/)
* Add Twitter login (don’t use fabric app; just grab key): [https://ionicthemes.com/tutorials/about/ionic2-twitter-login](https://ionicthemes.com/tutorials/about/ionic2-twitter-login)
*   [https://ionicthemes.com/tutorials/about/ionic2-app-with-socialsharing-and-deeplinking](https://ionicthemes.com/tutorials/about/ionic2-app-with-socialsharing-and-deeplinking)
*   Includes a template to get started: [http://blog.ionic.io/ionic-firebase-facebook-login/](http://blog.ionic.io/ionic-firebase-facebook-login/)
*   A bit more information on installing angular fire 2: [https://javebratt.com/angularfire2-authentication-ionic/](https://javebratt.com/angularfire2-authentication-ionic/)

### Error Help

*   Workaround for error "can’t find plugman": [https://github.com/meteor/meteor/issues/9040](https://github.com/meteor/meteor/issues/9040)
*   [https://stackoverflow.com/questions/30172654/cordova-content-security-policy](https://stackoverflow.com/questions/30172654/cordova-content-security-policy)


### YouTube API


*   Part of the solution for implementing youtube API inside of Ionic: [https://piratesofjs.wordpress.com/2017/02/13/ionic-2-app-tutorial-a-simple-youtube-player/](https://piratesofjs.wordpress.com/2017/02/13/ionic-2-app-tutorial-a-simple-youtube-player/)
*   Combine with information from here: [https://developers.google.com/youtube/iframe_api_reference#Examples](https://developers.google.com/youtube/iframe_api_reference#Examples)
*   Using YouTube API with multiple videos: [https://stackoverflow.com/questions/23873147/youtube-iframe-api-to-show-multiple-videos](https://stackoverflow.com/questions/23873147/youtube-iframe-api-to-show-multiple-videos) (Takeaway: div id that holds the iframe needs to be unique; would solve storyline problem, too)

*   Listening for scrubbing/seeking: [https://stackoverflow.com/questions/29293877/how-to-listen-to-seek-event-in-youtube-embed-api](https://stackoverflow.com/questions/29293877/how-to-listen-to-seek-event-in-youtube-embed-api)


### General Ionic Help


*   How to use TinCan JS inside of Ionic: [https://ionicframework.com/docs/developer-resources/third-party-libs/](https://ionicframework.com/docs/developer-resources/third-party-libs/)
*   Passing parameters between pages: [http://www.gajotres.net/ionic-2-sharing-data-between-pagescomponents/](http://www.gajotres.net/ionic-2-sharing-data-between-pagescomponents/)
*   To inject a service in a service, both must be listed as providers in app.module.ts: [https://forum.ionicframework.com/t/hello-im-struggling-with-injecting-a-service-into-a-service/51000](https://forum.ionicframework.com/t/hello-im-struggling-with-injecting-a-service-into-a-service/51000)


### Using HTML5 audio API


*   [https://github.com/devgeeks/ExampleHTML5AudioStreaming](https://github.com/devgeeks/ExampleHTML5AudioStreaming)
*   [https://www.sitepoint.com/essential-audio-and-video-events-for-html5/](https://www.sitepoint.com/essential-audio-and-video-events-for-html5/)


### Publishing in the App Stores


*   [https://clearbridgemobile.com/how-to-submit-an-app-to-the-app-store/](https://clearbridgemobile.com/how-to-submit-an-app-to-the-app-store/)
*   [https://selvakumar25.wordpress.com/2016/06/22/publishing-your-ionic-app-to-google-play-store/](https://selvakumar25.wordpress.com/2016/06/22/publishing-your-ionic-app-to-google-play-store/)
*   [http://ionicframework.com/docs/v1/guide/publishing.html](http://ionicframework.com/docs/v1/guide/publishing.html)
