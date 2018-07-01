---
title: 'Hack ID: Resources for Instructional Designers'
path: "/blog/hack-id-resources-for-instructional-designers"
date: '2017-01-03'
featured: "../featured/Introducing-Hack-ID.png"
categories: ["Coding", "Design", "elearning", "Inspiration", "Showing my Work"]
tags: ["education", "hack id", "instructional design learning", "open source", "portfolio work", "project"]
---

[Last Dear ID episode, I listed out my 2016 projects](/blog/dearid-season-2-wrap-up/). Then, in a flurry of season-end inspiration, I fired off two more. The (final?) revamp of GoDesignSomething.co [I talked about last post](/blog/go-design-something-the-final-incarnation/). This post, I'm talking about my first project release of 2017: Hack ID. Some time ago, on the instructional design sub-reddit, I mused with my fellow redditors on what a free (or paid), online, self-paced instructional design education might look like. I've been enamored with the idea of a Free Code Camp for IDs; someplace where other ID newbies like me, who just fell into instructional design and can't ever seem to get to a conference or community event can come together to learn and practice. But, while I still love that idea, I've realize that that's not something I can do alone... So, I started thinking about what I could do, in a small way. I remembered this really amazing website, [DevFreeBooks](https://devfreebooks.github.io/), that curated free coding ebooks, and thought, "Why can't I do that, but for ID's?" And so I did!

## Planning the Site

Overall, I spent probably 4 solid days getting the site to its current state. Before I got started building, I thought long and hard about how the site should be organized. For a while, I was torn between two different ways of viewing. One would let a user come to the site and see every single resource listed. But, of course, this could get overwhelming, so I also wanted to have categories of some kind that could help you filter down to what you wanted to concentrate on. But I also thought that a person might just want to see the categories first and dive in to the resources in each, to get to their desired resource. In the end, I decided to offer both: the default view shows all resources, and a View by Category link in the navigation allows you to switch to the category view.

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2017-01-03-at-10.49.52-AM.png 203w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2017-01-03-at-10.49.52-AM.png 405w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2017-01-03-at-10.49.52-AM.png 810w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2017-01-03-at-10.49.52-AM.png 1215w"
    src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2017-01-03-at-10.49.52-AM.png"
    alt="hack id screenshot" />
  <figcaption>All resource view</figcaption>
</figure>

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Screen-Shot-2017-01-03-at-10.50.05-AM.png 203w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Screen-Shot-2017-01-03-at-10.50.05-AM.png 405w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2017-01-03-at-10.50.05-AM.png 810w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Screen-Shot-2017-01-03-at-10.50.05-AM.png 1215w"
    src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Screen-Shot-2017-01-03-at-10.50.05-AM.png"
    alt="hack id screenshot" />
  <figcaption>Category view/figcaption>
</figure>

I also spent quite some time tracking down resources. Initially, I was thinking about ebooks only, like DevFreeBooks. But then I thought, there are other free resources that are really helpful, like email courses, online courses, podcasts, and even just web pages. So I expanded my dive into my resource collections to include all of these different kinds of learning items. There were, of course a ton of other small things that I could have added, but I didn't want to get into adding a bunch of individual videos (unless they were especially helpful"there's one video on the site right now). I wanted to keep it to resources that were organized in a way that would facilitate learning.",

## Building the Site

After collecting and categorizing resources, I probably spent 4 solid days at eight hours each creating the site. The vast majority of the work was creating resource posts and resource images, but I also spent a good amount of time figuring out and implementing site design, thinking about small features that I should add to improve usability, testing and fixing little bugs, and navigating my way around a new technology (I used Jekyll Boostrap to build this site"see more about that under the Site Code Section).",

## Making it Open Source

I already knew I wanted to host the site using Github pages, because they're free (and that's why I used Jekyll). But then it hit me that I also wanted to play around with my ID open source project idea by making the site an open source project that other IDs could contribute to. My good friend Rachel Barnum suggested that one site enhancement could be to create curated learning guides from the resources (an amazing idea!) and I thought that would be a great beginner project for another ID newbie looking to get their feet wet. If you're at all interested in contributing to the project, there are [several different opportunities listed on the repository wiki.](https://github.com/hackid/hackid.github.io/wiki) Don't worry, you don't have to know how to code!

## Site Code (If You're Interested)

I mentioned that I used Jekyll to build Hack ID. So what's that about? In looking at DevFreeBooks, I noticed that they used a static site generator. And wouldn't you know it, in another amazing strike of serendipity, learning more about static site generators has been on my to-learn list for quite some time! For those of you who don't know, static site generators build websites by arranging content from flat files using templates or layouts to serve up the final website to visitors ([see David Walsh's blog for a much better explanation](https://davidwalsh.name/introduction-static-site-generators)). The advantages of using this kind of tool are site security, since there is no database, site speed (since it isn't bloated with other files like a typical CMS [think WordPress] site), version control for content (which allows you to roll back a post or page to a previous version, because all of your file content is made using Markdown), and more. I initially got interested in the technology from the aspect of creating something that was less bloated and less hassle than a WordPress site. But like so many other things, it got pushed to the wayside. Hack ID gave me the perfect opportunity to finally try it out. And... I'm in love!

So far, I've really, really loved the experience of building a site using Jekyll (the static site generator I chose, since it's built into Github pages). I fell in love with using templates when I encountered Handlebars in my Adapt project. Templates and layouts allow you to define certain features just once and then reuse them across pages. I also loved the Liquid templating language that Jekyll employs. It's so cool to be able to define a block of code that repeats in easy, human-readable language, right in the HTML! I even built a business website for a client using Jekyll. Then I realized that the web host couldn't install the necessary technologies for me to use it! Bummer right? WRONG! Because Jekyll generates plain HTML, I simply took those files and put them on the site. That just blew my mind! That wouldn't have been the case if I had built a site in Drupal, for example, and then realized that the host could only install WordPress (okay so that's not likely to happen, but still). Seriously, if you're code-inclined and you haven't tried out static site generators, give them a go! One drawback of no database, though, means there's nothing to query, so there is no search feature on the site. That made planning out the categories even more essential! (I have found a workaround that I may implement in the future.)

## Seriously, Contribute!

I'd love to have some other IDs contribute to the site. If you're at all interested (even a teeny, tiny bit), be sure to check out the website at [hackid.github.io/](https://hackid.github.io/) and check out the [GitHub wiki](https://github.com/hackid/hackid.github.io/wiki) to learn more about how you can help the project grow and get better.
