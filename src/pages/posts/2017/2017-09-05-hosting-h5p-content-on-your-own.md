---
title: "Hosting H5P Content On Your Own"
path: "/blog/hosting-h5p-content-on-your-own"
date: '2017-09-05'
featured: "../featured/Hosting-H5P-Content.png"
categories: ["Design", "elearning", "Showing my Work"]
tags: ["h5p", "hosting", "interactive video", "standalone"]
---

I've talked some about [H5P, a robust free and open-source toolset for creating various kinds of elearning interactives](https://h5p.org/). I'm using it a ton currently in client projects, particularly for interactive video. But as you might know from your own experience, sustainability is super important. How might your clients edit this thing once you move on? How can they have control over it? In this post, I'll talk about how you can host H5P content yourself.

## Context

To begin, let's set the context. H5P allows you to create a large (and growing) variety of interactive content that stands alone; that is, you don't need to have an authoring tool that puts everything together. These are interactives that you can use modularly throughout your course. The products created with their toolset **aren't published to SCORM.** Many(perhaps most) do report out xAPI statements, if you hook them up to your LRS; but be sure to check each particular content type to be sure. As an LX Designer, one of the most interesting things you can create using H5P are interactive videos. Take a gander at this quick example:

<iframe src="https://h5p.org/h5p/embed/617" width="800" height="514" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

I'm working with clients using Canvas LMS and, as yet H5P doesn't have any kind of plugin for Canvas (though I believe it's on the way!). So I'm having to create content using H5P.org. If you're an independent LXD or just someone who wants to use H5P and isn't using a platform that has a plugin currently, this is the route you'll have to travel, too. H5P.org will host these for free forever (note that you're videos need to be hosted on some other platform, such as Vimeo or YouTube), which is great! But, there are some caveats:

*   If you want to hook this up to your LRS to get xAPI statements ([info about xAPI coverage for this content type is here](https://h5p.org/node/617/xapi-coverage)), or
*   If you want to be able to make sure that this content is private and can't be seen by others, or
*   If you just want to have more control over how the content looks and functions (you'll need someone familiar with CSS and JavaScript)

Then, you'll want to host these things on your own (or your client's) servers.

## The How

The H5P Standalone project comes to the rescue! This project ([which you can download on Github](https://github.com/tunapanda/h5p-standalone)) provides the structure you need to serve these up. **Note: This project is a little dated at this point (the last commit was 8 months ago at the time of this post) and I'm not sure how well it's being maintained, but right now, it works pretty well.**

### Steps

After downloading the project from Github, you'll want to unzip the .h5p files that you download from H5P.org into the workspace folder. H5P files are really just archive files. You can change the file extension (the .h5p part) to .zip and then extract the contents. I made sure to change the folder names to something simpler (remember, no spaces!). Then, inside of the demo folder, go to **index.html** and you need to change the url in the **h5pContent** property to point it to the correct folder inside of the **workspace** folder.

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/EditH5PStandaloneIndex.png 203w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/EditH5PStandaloneIndex.png 405w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/EditH5PStandaloneIndex.png 810w,
            http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/EditH5PStandaloneIndex.png 1215w"
    src="http://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/EditH5PStandaloneIndex.png"
    alt="Workspace folder location" />
</figure>

If you've got more interactives, like I do, you can actually duplicate index.html, rename it, and point to another file in that workspace folder. That way, when you upload it to your server, you can point to different pages to get different content. Then, of course, you can use an iframe to embed this content anywhere you like! Take a look at the video below for a walkthrough of this process.

`youtube: GvQIljCP-m4`
