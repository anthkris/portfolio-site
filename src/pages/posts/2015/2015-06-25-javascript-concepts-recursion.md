---
title: 'JavaScript Concepts: Recursion'
path: "/blog/javascript-concepts-recursion"
date: '2015-06-25'
featured: "../../static/post-images/JavaScript-Concepts.png"
categories: ["Coding", "Showing my Work"]
tags: ["code", "FreeCodeCamp", "JavaScript", "recursion", "showing my work"]
---

It's my hope that by rambling on about JavaScript here in the blog while I do my best to learn it, eventually, some of it will stick. So I've taken a quick break from FreeCodeCamp because I was concerned that I was moving a bit too quickly and not understanding key concepts. So I'm continuing to work through Treehouse, started some Udemy courses I purchased a while ago, and am working through Eloquent JavaScript, which is really kicking my butt. One of the things that I'm trying to wrap my head around is the concept of recursion. Recursion occurs when a function that calls itself.

## When to Use Recursion

From what I understand, recursion is useful when an elegant solution to a complex problem is needed and when that problem involves a pattern. One example of a good use of recursion is finding the factorial of a given number. I took the opportunity to redo my FreeCodeCamp solution (which, by the looks of it, I took from code I found on the interwebs) in a recursive fashion. Astonishingly, it only took a couple of minutes. Look ma, I'm learnin'!

### Original Solution

```javascript
function factorialize(num) {
  var tmp = num;
  while(num-->2){
    tmp *= num;

  }
  return tmp;
}

factorialize(5);
```

### Recursive Solution

```javascript
function factorialize(num) {
 //recursive version
 if (num === 1){
 return num;
 } else {
 return num *= factorialize(num-1);
 }
}

factorialize(5);
```

Another use of recursion is to going through levels of nesting in an object or array. However, I still sometimes struggle with when to use recursion, especially when faced with a code challenge that specifically asks for a recursive solution. My mind automatically seeks out an iterative solution (probably because that's what I have he most practice with) so shifting my thinking can be hard.

## When Not to Use Recursion

After reading a few articles, I stumbled upon a really helpful Medium post that [talks about the practical uses of recursion](https://medium.com/@dis_is_patrick/practical-uses-for-recursive-javascript-b8f142552f8b). It was really good to reflect that there's nothing wrong with using an iterative solution and as I understand it, iteration is, normally, faster though recursion can be more human readable. Still, I have to keep plugging away on recursion until I get best at distinguishing when it's best to use.
