---
title: 'Free Code Camp: No Repeats Please'
path: "/blog/free-code-camp-no-repeats-please"
date: '2016-02-18'
featured: "../../../../public/images/post-images/No-Repeats-Please.png"
categories: ["Coding", "Showing my Work"]
tags: ["algorithms", "coding", "free code camp", "FreeCodeCamp", "permutation"]
---

I'm not gonna lie, I had a hell of a time with No Repeats Please and I'm not alone ([see the unfortunately closed github issue](https://github.com/FreeCodeCamp/freecodecamp/issues/1418)). This one isn't easy. It isn't intuitive. The math doesn't match up to my understanding of how to calculate permutations. However, it can be done. To everyone who hasn't started it yet, here's a few tips to get you on the right footing.

## Empty Your Mind

First and foremost, forget the link to the permutations article in the exercise. It will be of no help at all. I spend about 3 days trying to understand how "aab" was 2 and "aabb" was 8 using your normal permutations with no repeats functions. It doesn't work. It won't work. It can't work. I then thought I might be on the right path with this helpful post at [Math.stackexchange](http://math.stackexchange.com/questions/223229/what-is-the-number-of-rearrangements-of-the-string-aaabbbccc-that-do-not-contain/223278#223278). However, though I understood the example they showed, I still couldn't apply it to the numbers FCC was testing against. Consider: AAABBBCCC

$$
\dfrac{9!}{3!\times 3!\times 3!}-( \,3\times\dfrac{7!}{3!\times 3!}) \,+( \,3\times\dfrac{5!}{3!}) \,-3!= 1314
$$

So aabb should be:

$$
 \dfrac{4!}{2!\times 2!}-( \,2\times\dfrac{3!}{2!}) \,+( \,2\times2!) \,-2!= 2
$$

The permutations in which no letter is repeated consecutively being abab and baba. So just drop that. It won't do you any good.

## A New Tack

Instead, the route to take seems to be to generate ALL of the possible combinations and then filter out the ones that have repeating consecutive characters, as is suggested in this [Reddit post from a similarly frustrated camper](https://www.reddit.com/r/learnprogramming/comments/3b9l0q/free_code_camp_permutations_and_why_there_is/). To do this, most folks went to [Heap's algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm), which is an algorithm for generating all possible permutations of a number of objects. Note here that it isn't enough to simple calculate all of the possible permutations using a factorial function (believe me, I tried). You need to actually generate the permutations, so that you can compare the characters. The Wikipedia article uses Java-like psuedocode. You can see a couple of variations in Javascript in [this code review on Stack Exchange](http://codereview.stackexchange.com/questions/59615/recursive-function-that-generates-the-permutations-of-a-string).

## Next Steps

Once you've got an array holding all of the possible permutations of the input string, then the next step is to filter out the array elements that have repeated consecutive characters. To do this, test each element against a regex string. You can use the Array.filter method to perform this test and then save the resulting array to a variable. Here's how mine looked:

```javascript
//If there are repeated characters, strip out of the array
 var filtered = permutations.filter(function(string) {
 return !string.match(regex);
 });
```

Last but not least, return the length of the this new filtered array, to get your final answer. Easy, huh? NOT!!!! But I sincerely hope that this will save someone else a couple days of headaches.
