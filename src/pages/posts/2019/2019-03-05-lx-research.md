---
title: 'LX Research'
path: "/blog/lx-research"
date: '2019-03-05'
featured: "../featured/Datamaps-in-Twine.png"
categories: ["Showing my Work", "Coding", "Design"]
tags: ["research", "learning experience research", "portfolio work", "project"]
---

This week was a bit rough in terms of having development time, and I expect next week to be worse, so I'm pivoting a bit by picking through my Great Big Trello Board of ideas. This week, I spent about 12 or so development hours standing up an idea I've had on the board for a while: a website that lists learning experience research.

## Inspiration

My initial inspiration was the wonderful website at [usefulscience.org](http://www.usefulscience.org/). I'd listed the project as "Create a site that lists out research about certain education topics." It came to mind again after talking with my co-worker about how she looks up research and whitepapers when she's looking for research-backed models. And yet again, after seeing Mike T's Twitter post about 2018 research. So, I figured that this was a good week to do something quicker and that this was the very project to take on.

## Design and Development

Since this would basically be a blog (regular posts of research), I decided to use Gatsby JS. It also started me down the path of migrating this blog from v1 of Gatsby to v2, which I set as one of my goals for myself within the next 4 months. So I thought that starting from scratch with the basic Gatsby starter in v2 would be a good place to begin. 

The most basic starter is just a list of posts, all text. Since that aligns well with the design of the Useful Science website, it was a perfect starting point. From there, I concentrated on trying to figure out a useful set of categories for an eclectic set of research topics. After a few revisions, I've ended up on these:

- Practice
- Instructional Strategy (and models)
- Performance Support
- Memory (retention)
- Cognition
- Assessment
- Learning Environment
- Media
- Higher Ed
- Corporate
- K-12
- Technology
- Analytics

From there I wanted to color code the tags. After realizing that I wanted to have a tag filter menu and have the tags show up under each post, I created a utility component that lists my categories and chooses the appropriate color. 

## Further Development

As an MVP, I've decided not to add pagination, search, or separate pages with comments quite yet. I want to keep it simple, for now. I can see search as being a really good and useful feature for the future and I intend to test it out by trying to re-add it to this website.

I need to update the footer to put some more information about the site as well as add a way for people to suggest new research.

I also really like the fact that youc an star certain posts as useful on the Useful Science website. I'm not sure how I would do that without any kind of website backend or database, but I'll keep it in my back pocket as an idea for later.