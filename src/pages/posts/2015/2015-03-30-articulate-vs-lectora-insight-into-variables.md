---
title: 'Articulate vs. Lectora: Insight into Variables'
path: "/blog/articulate-vs-lectora-insight-into-variables"
date: '2015-03-30'
featured: "../featured/Articulate-v.-Lectora-Variables.png"
categories: ["AWSM Prompts", "Coding","Design", "Showing my Work", "Tips"]
tags: ["coding", "Lectora 12", "Storyline", "variables"]
---

As I announced [a bit ago](/blog/awsm-prompt-2-in-progress/ "AWSM Prompt 2: In Progress"), I'm hard at work on my entry for the March AWSM Prompt using Articulate Storyline 2\. I'm having to simplify just a bit but I'm hopeful that I can have a final version out by the beginning of April. Last night, I was working on a particularly variable-heavy section of the project. Now, I use Lectora 12 during the day (in my cover as a mild-mannered instructional designer) and I couldn't help but notice some striking differences between the way these two programs handle variables.

## The Task

The task I wanted to complete was to track whether several build options had been pressed, so as to use their presence (or absence) in feedback later. In this activity, the user will be tasked with building a fitness tracker that meets the needs of the target audience and can choose to include things like sleep tracking, tracking non-running workouts, prompting to get up, prompting when you receive a call or text, etc.

## The Lectora Way

Being the budding coder that I am (and using Lectora several hours a day) I have to say that Lectora's way of handling variables makes more sense to my brain. In a Lectora title, any variable that you create can become an array, which is a variable that can hold several different values. So, for example, if I create the variable FavoriteColor in Lectora, I can store several different values into it: green, purple, red, indigo, chartreuse. This is pretty powerful stuff. It means that I can be fairly efficient in my coding because I can always search this variable for a particular item in the array to cause a change elsewhere.

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Lectora-Variables.png 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Lectora-Variables.png 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Lectora-Variables.png 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Lectora-Variables.png 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Lectora-Variables.png"
    alt="Variables in Lectora"/>
  <figcaption>Add to variable in Lectora allows for an array</figcaption>
</figure>

The other thing Lectora allows me to do is to easily create an if/else statement. So I can create a situation where, if FavoriteColor is indigo, then go to page "Indigo." Easy peasy (to me at least).

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/Lectora-if-else.png 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/Lectora-if-else.png 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Lectora-if-else.png 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/Lectora-if-else.png 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/Lectora-if-else.png"
    alt="If/Else statement in Lectora"/>
  <figcaption>If/Else statement</figcaption>
</figure>

## The Articulate Way

This was my mode of thinking as I sat down to complete the task on the design page. However, I soon found that my thinking wouldn't fly because Articulate doesn't allow for arrays or if/else (though it allows for if statements, called conditions). Instead, if I wanted to track something like favorite color, I would need to create several different variables: Indigo, Red, Green, Purple and then set them to a value (I used true/false). Then I could check whether this individual value was true or false to cause something else to happen. Not a project killer, of course, but much less efficient than an array and I had to consider the situation for several minutes before hitting on this solution. As a coder, this way of doing things isn't intuitive anymore.

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/ArticulateVariables.png 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/ArticulateVariables.png 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/ArticulateVariables.png 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/ArticulateVariables.png 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/ArticulateVariables.png"
    alt="Variables in Articulate" />
  <figcaption>Variables in Articulate: Text</figcaption>
</figure>

<figure>
  <img
    sizes="(max-width: 810px) 100vw, 810px"
    srcset="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_203/v1530396697/blog/ArticulateVariables2.png 203w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_405/v1530396697/blog/ArticulateVariables2.png 405w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/ArticulateVariables2.png 810w,
            https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_1215/v1530396697/blog/ArticulateVariables2.png 1215w"
    src="https://res.cloudinary.com/dhdaswa6t/image/upload/f_auto,q_60,w_810/v1530396697/blog/ArticulateVariables2.png"
    alt="Variables in Articulate" />
  <figcaption>Variables in Articulate: True/False</figcaption>
</figure>

## Did I miss something?

Did I miss something? Does Articulate allow for arrays and if/else? Also, does anyone else regularly switch between programs and have to reframe their thinking as a result? Let me know in the comments.

### Play the Demo

[Play the demo](/showcase/Fitopoly/story.html "Fit.o.poly Game") and let me know what you think!
