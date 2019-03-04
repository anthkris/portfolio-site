---
title: 'LX Research'
path: "/blog/lx-research"
date: '2019-03-05'
featured: "../featured/LX-Research.png"
categories: ["Showing my Work", "Coding", "Design"]
tags: ["research", "learning experience research", "portfolio work", "project"]
---

This week was a bit rough in terms of having development time, and I expect next week to be worse, so I'm pivoting a bit by picking through my Great Big Trello Board of ideas. This week, I spent about 12 or so development hours standing up an idea I've had on the board for a while: a website that lists learning experience research.

## Inspiration

My initial inspiration was the wonderful website at [usefulscience.org](http://www.usefulscience.org/). I'd listed the project as "Create a site that lists out research about certain education topics." It came to mind again after talking with my co-worker about how she looks up research and whitepapers when she's looking for research-backed models. And yet again, after seeing [Mike Taylor's Twitter](https://twitter.com/tmiket) post about 2018 research. So, I figured that this was a good week to do something quicker and that this was the very project to take on.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">A Look Back At The Best Learning Science &amp; Instructional Design from <a href="https://twitter.com/simplilearn?ref_src=twsrc%5Etfw">@simplilearn</a> <a href="https://twitter.com/ulrichboser?ref_src=twsrc%5Etfw">@ulrichboser</a> <a href="https://twitter.com/JaneBozarth?ref_src=twsrc%5Etfw">@JaneBozarth</a> <a href="https://twitter.com/MirjamN?ref_src=twsrc%5Etfw">@MirjamN</a> <a href="https://twitter.com/P_A_Kirschner?ref_src=twsrc%5Etfw">@P_A_Kirschner</a> <a href="https://twitter.com/farnamstreet?ref_src=twsrc%5Etfw">@farnamstreet</a> <a href="https://twitter.com/adamboxer1?ref_src=twsrc%5Etfw">@adamboxer1</a> <a href="https://twitter.com/IssyNancarrow?ref_src=twsrc%5Etfw">@issynancarrow</a> <a href="https://twitter.com/Nature_NPJ?ref_src=twsrc%5Etfw">@Nature_NPJ</a> <a href="https://twitter.com/gerdriessen?ref_src=twsrc%5Etfw">@gerdriessen</a> <a href="https://twitter.com/WillWorkLearn?ref_src=twsrc%5Etfw">@willworklearn</a> <a href="https://twitter.com/greg_ashman?ref_src=twsrc%5Etfw">@greg_ashman</a> <a href="https://twitter.com/pattishank?ref_src=twsrc%5Etfw">@PattiShank</a> <a href="https://twitter.com/stellacollins?ref_src=twsrc%5Etfw">@StellaCollins</a><a href="https://t.co/hnkjLf3uef">https://t.co/hnkjLf3uef</a> <a href="https://t.co/tHmYsyPJ2X">pic.twitter.com/tHmYsyPJ2X</a></p>&mdash; Mike Taylor (@tmiket) <a href="https://twitter.com/tmiket/status/1100941913778212864?ref_src=twsrc%5Etfw">February 28, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


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

<figure>
    <a href="https://lx-research.netlify.com/" target="blank">
      <img
        sizes="(max-width: 810px) 100vw, 810px"
        srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1551665421/blog/LXResearchBig.png 203w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1551665421/blog/LXResearchBig.png 405w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1551665421/blog/LXResearchBig.png 810w,
                https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1551665421/blog/LXResearchBig.png 1215w"
        src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1551665421/blog/LXResearchBig.png"
        alt="game shape screenshot" />
      <figcaption>Check out the site</figcaption>
    </a>
</figure>

## Further Development

As an MVP, I've decided not to add pagination, search, or separate pages with comments quite yet. I want to keep it simple, for now. I can see search as being a really good and useful feature for the future and I intend to test it out by trying to re-add it to this website.

I need to update the footer to put some more information about the site as well as add a way for people to suggest new research.

I also really like the fact that youc an star certain posts as useful on the Useful Science website. I'm not sure how I would do that without any kind of website backend or database, but I'll keep it in my back pocket as an idea for later.

Be sure to let me know what you think in the comments!