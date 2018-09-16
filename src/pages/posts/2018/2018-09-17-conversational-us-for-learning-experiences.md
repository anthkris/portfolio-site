---
title: 'Conversational UIs for Learning Experiences'
path: "/blog/conversational-uis"
date: '2018-09-17'
featured: "../featured/ChatbotLX.png"
categories: ["Design", "Coding", "Showing my Work", "Weekend Project"]
tags: ["coding", "React", "react js", "chatbot", "conversational ui", "xAPI cohort", "xAPI"]
---

In this post, I'll dig in to my experiences rapidly prototyping a conversational interface both using Typeform's not-yet-released Conversations tool along with Zapier, and using a React project to create really neat chatbots.


## Getting the Chatbot Bug

I am currently on the hunt for my next position (hint, hint) and, as I often recommend to other ID newbs, for the past several days, I've been really examining a job advert to think about the problems this particular client is trying to solve. One of the big ones that stood out was the description of a need to develop a platform for people to find trainings and resources all across the organization. When I considered this challenge, I was reminded of a testing opportunity I signed up for to test Typeform's (the folks who make a really awesome online form tool - <a href="https://www.typeform.com/" target="_blank">https://www.typeform.com/</a>) not-yet-released Conversations tool. It seemed like this challenge was a good opportunity for a chatbot to step in and direct a user to resources in a friendly UI. I'm also currently enrolled in the Fall 2018 xAPI Cohort, which happens to have a bounty (think of it as an extra thumbs up) for xAPI-enabled chatbots as the team considered that there isn't currently enough experimentation in that area. And so, the idea for quickly prototyping how a chatbot might be able to help solve this problem was born.

## Chatbots and Conversational UI as a Solution

I've had this idea in my mind for a while but didn't have the skils previously to make it. My idea (and others have surely also discussed this) is that, in the case where you want people to be able to look up different resouces based on their own interests to create their own learning paths, one possible solution is to provide guidance using chatbot. 

Why not just give them a search platform? You totally could, actually; there's nothing wrong with that. In fact, that could be another part of the same solution. What I like about the conversational interface though is that it's engaging. You know it's a bot, but the experience **feels** like asking and answering questions from a human-like guide to get something that is personalized to you and your interests as opposed to something that anyone who had the right query terms. It **feels** like a conversation. And when we're talking about experiences, the way something makes you feel is not to be discounted. 

## TypeForm Conversations

Let's get this out the way 😉. Test the Typeform prototype here: <a href="http://bit.ly/2Qwes2e" target="_blank">http://bit.ly/2Qwes2e</a>

I started with Typeform because I wanted to test the tool and provide feedback and I figured it would be the quickest way to prototype. As the tool is in an beta form, there are still quite a few features missing, the most important of which is logic jumps which would have allowed me to create a deeper and more satisfying experience. The team seemed to have custom-created their own conversation and a really excellent example is available on their general hiring page (scroll down a bit, you can't miss it): <a href="https://www.typeform.com/careers/jobs/1299390/" target="_blank">https://www.typeform.com/careers/jobs/1299390/</a> (So much better than mine! 👈🏽)

Still I started with what I had to create a really, super simplified and slightly ugly prototype for leading people to accessibility resources based on their choices (or choice, as the case may be, since I couldn't have any logic jumps). The thing that's really awesome about a tool like Typeform is that it makes creating these chatbot-type experiences really easy and accessible to people without coding skills. All you have to do is to use their intuitive form creation tool (the normal typeforms) and then paste the link into the Conversations tool. Conversations essentially skins your form into something that resembles a chat platform or texting. It's on the form creator, of course, to write in a way that is conversational and inviting. With Typeform you can allow users to:

- Make choice with buttons (essentially multiple choice questions)
- Type in text responses
- Type in validated responses such as numbers or emails
- Use previous responses (like the name the user typed in) in subsequent responses (e.g. greeting the user by their name)

With all of these options (plus some good conversational copywriting) you have (almost) everything you need without having to break a sweat... yet.

### Stuff that's currently Missing

Besides the logic jumps (which I really missed not having) the other thing that I found is that, right now, if you type out a long response, then the chat bubbles stand a good chance of getting all bunched up and unreadable. One the one hand, this is almost a feature as it encouraged me to go back and tighten up my writing a bit. On the other hand, in the case where I would want to share a bunch of potential links (it might actually be a good idea for this to be a special block or component type in Conversations so that they look special and don't take up space in a normal chat bubble) or if I'm just rattling on for a bit, I've got a UI that becomes unusable. Now that might be mostly a function of the fact that the Conversations tool is in beta right now and isn't complete. But I think that, if there is to be some kind of consequence for longer bubbles, then some kind of hard cutoff when you want to build a Conversation (e.g. You can only include X number of characters), or at the very least a nudge (e.g. "Hey, this is going on a bit long and will be condensed in the Conversation. Consider shortening it or splitting it up.") would be super helpful.

The other issue I had is that I am using a free Typeform account which only allows you to use a certain number of blocks. In my opinion, that means, to make anything useful with the Conversations tool, you'd have to have a Typeform subscription. I totally get the business sense behind that, but it be a barrier for some folks (such as freelancers or individual contributors).

## xAPI How?

The other thing that might be crossing your mind at this point is, "Okay, I can build a Typeform and turn it into a Conversation. Cool? How do I get xAPI data out of that?" Welp, for that, you would have to use a "middleman" tool to turn the responses that you receive from a form into data structured for xAPI. For this, I turned to Zapier.

Zapier is a tool for connecting apps together and automating workflows. For example you might create a zap (an automated connection) that collects every Tweet you send into a Google spreadsheet (no, I don't know why you would do that. It's just an example. Sheesh.) In this case, I used Zapier to collect the responses from the Typeform, transform them into data structured the xAPI way and then send that data into the LRS.

### A Short Note about Collecting Data

One of the interesting things I found when I reviewed Typeform's general hiring conversation (yup, I applied there!) is that they don't ask for your email until near the very end. I don't think it struck me at the time but after trying to create my own, that design choice stood out. Instead of asking for the email up front (which can make people a bit leery because they haven't interacted with your bot long enough to see the value in giving their email or trust you with it), they let you make it through the entire conversation, ask your questions, answer questions, make choices and gain trust before they ask for that crucial detail. In this case, that works super well because the form is sent off all at once at the end. Because it's sent off all at once, if I had ended the conversation early by just closing the window, then I would not have been able to collect the data. It would be as if the interaction had never happened. And that's something to take into consideration. Is it important to see what users are doing, even if they don't reach the end? In that case, it may be more important to send off statements as soons as possible after they happen. To do that, you have to ask for the email (or other identifier) up front. 

### Sending xAPI Data

Back to the main thread... To send xAPI data from Typeform, I needed to use Zapier to transform it. I did that by creating a zap that would take in a Typeform submission and run some JavaScript code.

One of the challenging things about using Zapier and their code action is that you can't import third-party libraries. I usually use Rustici's TinCanJS library to make sending xAPI statements much easier for myself and having to do without it made me realize how much stuff the library sets up for you. However, once you figure out all of the metadata-type stuff (headers) that a properly formed xAPI statement requires, then setting it up was pretty easy. I had one roadblock that had me banging my head against the wall for several hours (I stayed up waaaaaaay too late several nights in a row 😳, but, hey, I love a problem). 

The error that I kept receiving was that Zapier requires you to return (or output) and object or an array of objects (a particular structure for the data). While that may seem like a straightforward error, debugging is nearly impossible in the tool and I didn't understand why it wasn't getting what it needed. I gave myself permission to ask for help in the xAPI Cohort and got an answer pretty quick which confirmed what I had been able to bruteforce figure out. I want to share my Zapier code, in case it helps someone else (see the Github Gist: <a href="https://gist.github.com/anthkris/aba948535e894e8440a196e97569c5e5" target="_blank">https://gist.github.com/anthkris/aba948535e894e8440a196e97569c5e5</a>):

```javascript
var output = [];

// Make a POST request to your LRS
const doFetch = (answer) => {
  // You may need to add on a '/statements' to the end of your endpoint URL
  fetch("YOUR_ENDPOINT", {
      method: "POST",
      headers: { // ALL of these headers are necessary
        "X-Experience-API-Version": "1.0.3",
        "Content-Type": "application/json",
       "Authorization": "Basic YOUR_BASIC_AUTH"
      },
      body: JSON.stringify(answer)
   }).then(function(response) {
      return response.json();
   }).then((json) => {
    console.log(json);
      output = json || [];
      // Make sure that you return an object to prevent error hell
      callback(null, {output: output});
  }).catch(callback);
};

// Function to help structure xAPI statements
const createStatement = (question) => {
    var assessment = {
      "actor": {
        "objectType": "Agent",
        "name": question.name,
        "mbox": question.email
      },
      "verb": {
        "id": "http://adlnet.gov/expapi/verbs/answered",
        "display": {"en-US": "answered"}
      },
      "object": {
        "id": "https://www.knanthony.com/typeformchat/questions/question-" + question.questionNum,
        "definition": {
          "description": { "en-US": question.question },
          "type": "http://activitystrea.ms/schema/1.0/question",
          "name": { "en-US": "Question " + question.questionNum }
        }
      },
      "result": {
        "completion": true,
        "success": true,
        "response": question.response
      }
    };
  doFetch(assessment);
  }

// This is the way I sent my statements
// It could, perhaps be done better?
var num = 1;
var email = "mailto:" + inputData.emailQuestion;
var name = inputData.nameQuestion;
createStatement({name: name, email: email, question: "What are you trying to get better at?", response: inputData.developQuestion, questionNum: num});
num++;
createStatement({name: name, email: email, question: "What kinds of questions do you have about accessible design?", response: inputData.goDeeperQuestion, questionNum: num});
num++;
createStatement({name: name, email: email, question: "Since you want to get better at accessible design, where do you think you'd like to start?", response: inputData.whereToStartQuestion, questionNum: num});
num++;
createStatement({name: name, email: email, question: "Now that you have a starting point, what's your plan? What will you do this week to make your products more accessible?", response: inputData.actionPlanQuestion, questionNum: num});
```

## Why Track It?

So the Typeform experiment works pretty well, and I can send xAPI statements. The reason why I think making it xAPI-enabled mattered in the first place is so that, as a learning experience designer, I can look at what topics people are interested in, where their frustrations or questions lie, and begin to update the bot to provide conversation paths that meet those needs.

## A Second Experiment

I wanted to go a little deeper and be able to make something that was a better, more satisfying conversation. I'm currently diving deep into React JS (a popular development framework for creating user interfaces) and I found a really cool React project that takes most of the work out of creating a chatbot: <a href="https://lucasbassetti.com.br/react-simple-chatbot/" target="_blank">https://lucasbassetti.com.br/react-simple-chatbot/</a>

What I love about this project is that it provides a lot of those features I wanted from Typeform (logic jumps, especially) without my having to create something from scratch but it's also extensible, allowing me to create my own components to weave in to the chat structure. That means that a lot of the upfront work is off my plate and I can concentrate on building the conversation. 

Here's the demo:
<iframe width="560" height="315" src="https://www.youtube.com/embed/jE46IAkWH8I?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Ch-ch-ch-changes

Having seen the Typeform UI, I've already made a few changes to my personal copy of the project, the biggest one being that, instead of the conversation bubbles starting from the top of the screen as the do by default from the project, I made them start from the bottom of the screen, nearer to the place where you would type in your answers. This simple UI change results, I think, in a big UX improvement. My concern was that it might be easy for a user to overlook the fact that they had an input form near the bottom of the interface if their attention was drawn to the top of it from the beginning. By starting from the bottom, it helps the user to see this form right away, which is especially important since the first two questions require them to type their name and email.

### xAPI-enabling

Right now, the prototype is still very basic, but I'm hoping to get it into a more polished form to present alongside the ID simulator game by the end of the xAPI Cohort. One of the big things that I'll need to figure out is how to integrate what I need to send xAPI statements. My thoughts about collecting data above also apply. I'll need to think about whether I should(or can easily) send each statement right after the user performs the action or if I should wait until the end and the consequences of that.

## That's All For Now

I'd be interested to hear your thoughts about chatbots as one solution in the LX toolbelt as well as what makes a good conversational interface. Let me know in the comments!

