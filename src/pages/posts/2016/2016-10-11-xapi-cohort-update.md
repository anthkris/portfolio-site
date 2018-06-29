---
title: '#xAPI Cohort Update'
path: "/blog/xapi-cohort-update"
date: '2016-10-11'
featured: "../../static/post-images/xAPI-cohort.png"
categories: ["Coding", "Showing my Work"]
tags: ["Amazon Web Services", "AWS", "installation", "learning locker", "xAPI"]
---

As I mentioned on the first episode of [Season 2 of Dear Instructional Designer](/blog/dear-id-interview-with-craig-wiggins/), I enrolled in the Torrance Learning xAPI Cohort (unfortunately, this is a super busy month and I've been shirking my duty in the Designers for Learning MOOC). I was really, really excited about the cohort, coming off the heels of the Curatr MOOC, because one of the things that I think has been consistently lacking with all of this xAPI talk has been the **how**. How do I **do xAPI**? I think that's a huge gap, preventing the experimenters in our community from being able to figure stuff out and share the results. But all is not rainbows. The Torrance Learning team has valiantly tried to give us everything we need to form working teams to actually _do_ stuff, but after a flurry of activity (I emailed and emailed and set up a Slack channel and everything) members of my team were dropping out like flies and other teams disappeared completely. So my team merged with another team, which also has members dropping out left and right, but at least they had a plan and some active members. Anywhoodle, after this very bumpy start, I now have a small team of people who are interested in making things happen. Our team is meant to focus on microlearning and we've decided to focus on the how of generating xAPI statements from Storyline primarily. Jim Harris (you've probably seen him on Twitter) has set up a Moodle installation for us and we'll be experimenting in there. However, my current organization is more interested in tracking actions that happen outside of an LMS, so I spent last weekend doing some preliminary tests on using the YouTube API and Limelight API (Limelight is the video platform my organization uses) to generate statements based on a user playing and pausing the video. They worked (!!!!) and I'll be sharing that out on Github as a part of the cohort project and as I work out some kinks. But more to the purpose for this post, this weekend, I spent time on another one of the important things that stopped me from experimenting with xAPI in the past: not having access to an LRS. It took the better part of a day but I finally figured out how to install Learning Locker (an open source LRS) on Amazon Web Services. There are some great resources I came across to help me in my quest, but they're all a little out of date, so I thought I'd share how to do this as of October 2016.

## Watch the Video

`youtube: 51Dci7B49xA`

### Resources:

Here are several of the resources I used to finally get it done.

*   Learning Locker Docs: [http://docs.learninglocker.net/installation/](http://docs.learninglocker.net/installation/)
*   JPablo 128: [http://www.jpablo128.com/how-to-install-learning-locker/](http://www.jpablo128.com/how-to-install-learning-locker/)
*   Learning Locker Issue concerning artisan migrate: [https://github.com/LearningLocker/learninglocker/issues/796](https://github.com/LearningLocker/learninglocker/issues/796)
*   MongoDB Docs on Installing on Ubuntu: [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
*   Stack Overflow on installing Curl: [http://stackoverflow.com/questions/19335305/composer-install-error-requires-ext-curl-when-its-actualy-enabled](http://stackoverflow.com/questions/19335305/composer-install-error-requires-ext-curl-when-its-actualy-enabled)
