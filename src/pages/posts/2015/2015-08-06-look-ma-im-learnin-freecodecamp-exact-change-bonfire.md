---
title: 'Look Ma I''m Learnin'': FreeCodeCamp Exact Change Bonfire'
path: "/blog/look-ma-im-learnin-freecodecamp-exact-change-bonfire"
date: '2015-08-06'
featured: "../../static/post-images/Exact-Change-Bonfire.png"
categories: ["Coding", "Showing my Work"]
tags: ["coding", "FreeCodeCamp", "functional programming", "JavaScript", "recursion"]
---

It's that time again: the time where I exalt in my ability to do something that, at the beginning of this year would have been all but impossible. It took two days (and a bit more than that previously) to solve, but I was able to use functional programming and recursion to solve my toughest FreeCodeCamp bonfire yet (until the next one) Exact Change.

## The Bonfire

The function of this bonfire was to:

> Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument. cid is a 2d array listing available currency. Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due. Otherwise, return change in coin and bills, sorted in highest to lowest order.
>
> -- FreeCodeCamp

## Sticking Points

### Thinking Clearly

The biggest sticking point overall was being able to think clearly about the actual problem. I've been trying to practice the 4Ps of Programming championed by Andrew Chalkley over at Treehouse: Prepare, Plan, Perform, and Perfect. It's a great way to tackle any project and it was really a big help here... when I got to the point where I could actually plan my approach. I originally gave up on this bonfire after several unsuccessful days, but coming back to it several weeks later and a few more Treehouse lessons down, I found that I was able to finally start talking about the issue in plain language. My planning looked like this:

```javascript
// find change owed

//if changeOwed > totalCash
//return the string "Insufficient Funds"

//else if changeOwed === totalCash
//return the string "Closed"

//Else return array of change denominations, starting from the highest possible denom to the lowest
//implies recursion?
```

I figured it was important to get in a win early on, so I started strong by programming this simple if/else if/else block:

```javascript
var changeOwed = cash"price;",
var totalCash = [];
  totalCash = totalCash.concat.apply(totalCash, cid); //projects and flattens cid array
  totalCash = totalCash.filter(function(cashItem){
    if (typeof cashItem === "number"){
      return cashItem;
    }
  }).reduce(function(prev, next){
    return prev + next;
  });
//if changeOwed > totalCash
    //return the string "Insufficient Funds"
   if (changeOwed > totalCash){
     change = "Insufficient Funds";
    } else if (changeOwed === totalCash){
      //else if changeOwed === totalCash
    //return the string "Closed"
      change = "Closed";
    } else {
      //Else return array of change denominations, starting from the highest possible denom to the lowest
      //implies recursion?

    }
  return change;
```

That took care of two important test cases but still left me unable to wrap my head around how to tackle the hard bit: pulling cash out of the drawer.

### Why oh Why did They Give me an Array?

The next sticking point was undoubtedly, wishing that the drawer had been an array of objects. Perhaps especially since the given functional programming practice deals largely with arrays of objects, it was hard to wrap my head around how to access what I needed in a 2d array. At first, I did try to map the arrays to objects, but I kept hitting a wall because: a. that wasn't actually helping me get any closer to understanding how to approach the problem and b. the final result still had to be a 2d array and I didn't buy that converting to and from an object would be good practice. So, back to the drawing board. How did actual cash registers work?

## A Functional Solution

I became convinced of the need for a function that could help me solve the issue. So I created one that housed a series of if/else statements that I could run the changeOwed through repeatedly (that is, a recursive solution):

```javascript
//To give change
    //compare the amount owed
    //subtract the largest amount possible from the largest denom possible
    //repeat until all change is given
  function cashReturn (cashToGive){
}
```

It wasn't until right before I went to bed after the first day of tackling the bonfire that I had the epiphany I needed. Previously, I had been trying to figure out some way to glean the information I needed from the difference between the cash in a particular drawer (say the hundreds drawer) and the total amount of change owed. But that was silly. What I really needed to be doing was subtracting multiples of the appropriate denomination. My pre-bed idea looked like this:

```javascript
var hundreds = 0;
if (cashToGive > 100 && cid[8][1] !== 0 {
   cashToGive -= 100;
   hundreds += 1;
   if (cid[8][1] > hundreds *100){
      cid[8][1] = hundreds *100;
   } else {
      return cid[8][1];
   }
  return cid[8];
}
```

That meant updated the cashToGive by subtracting the appropriate denomination every time; that would allow me to keep running through the function until I had paid the correct amount. My change would then report out how dollars by multiplying the number of hundreds I took out times a hundred.

## Close but No Cigar

I was close. Really close. But naturally, there were some kinks to work out. For one thing, my original thoughts don't account for the actual amount of money in the drawer. For example, if I owed $200 dollars but I only had $100 dollars in the hundreds drawer, my solution wouldn't deal with that.

### A String where Your Number Should Be

Strings also became an issue early on. I updated my original changeOwed and totalCash to cut off at 2 decimal places using the toFixed method, to avoid the problem with absurd amounts of decimal places. However, I didn't know that toFixed returned a string. That became an issue with one of the test cases where, even though there was enough cash in the drawer (totalCash) the program was returning "Insufficient Funds" because, based on unicode values, the totalCash string was less than the changeOwed string. I fixed it by using parseFloat:

```javascript
// find change owed
  var changeOwed = cash"price;",
  changeOwed = parseFloat(changeOwed.toFixed(2)); //rounds to two decimal places
  // find total cash in drawer
  var totalCash = [];
  totalCash = totalCash.concat.apply(totalCash, cid); //projects and flattens cid array
  totalCash = totalCash.filter(function(cashItem){
    if (typeof cashItem === "number"){
      return cashItem;
    }
  }).reduce(function(prev, next){
    return prev + next;
  });
  totalCash = parseFloat(totalCash.toFixed(2));//rounds to two decimal places
```

Similarly, I experienced an issue where reporting out pennies weren't working because of the decimal places that were turning up every time I subtracted from cashToGive, so I fixed that, as well:

```javascript
function cashReturn (cashToGive){
     cashToGive = parseFloat(cashToGive.toFixed(2)); //Fixes decimal issue with pennies
```

### Push It

After implementing recursion properly, the biggest issue then became that my solution was only reporting out the last drawer, not pushing all of the necessary drawers. So for instance, if I owed $96.74, my function was only returning [['PENNIES', 0.04]]. Why? Well, originally, I ended my main if/else if/ else statement by pushing the results of my function into the change array. The problem with that was, that even though the function was going through the motions properly, it was only returning the very last action. After much trial and error, I refactored my solution so as to simply call the cashReturn function and handled all the pushing to the change array in the cashReturn function:

```javascript
//if changeOwed > totalCash
    //return the string "Insufficient Funds"
   if (changeOwed > totalCash){
     change = "Insufficient Funds";
    } else if (changeOwed === totalCash){
      //else if changeOwed === totalCash
    //return the string "Closed"
      change = "Closed";
    } else {
      //Else return array of change denominations, starting from the highest possible denom to the lowest
      //implies recursion?
      change = [];
      cashReturn(changeOwed);
    }
```

But that STILL didn't work. Why? Well, the issue there was that, originally, there was nothing in the function telling it to push out the results of a particular drawer, before moving on the next. In other words, the function might determine that I needed to take 15 dollars out of the fives drawer before moving on to the ones drawer but it never pushed the results of the fives drawer. So I fixed that by refactoring the if/else statements in each drawer block:

```javascript
if (cid[8][1] !== 0 && cashToGive >= 100){
        cashToGive -= 100;
        hundreds += 1;
        cid[8][1] = hundreds * 100;
        if (cashToGive !== 0 && cashToGive < 100 ){
          change.push(cid[8]);
          return cashReturn(cashToGive);
        } else {
          return cashReturn(cashToGive);
        }
```

As you can see, if cashToGive is not equal to 0 and it drops below the particular denomination, then I push the results of the drawer and keep running it through the cashReturn funtion. Otherwise, I just run it through the return function again.

### More Money Than It's Worth

Last but not least, I had to tackle the issue of not knowing how much was in the original drawer. As I said earlier, I need to be able to stop taking twenties out of the twenties drawer, for example, once I'd used them all. To tackle that, I made a whole new series of variables to hold the original contents of each drawer (not sure if that was the best way) and then compared those contents to what I wanted to take out, like this:

```javascript
var originalHundreds = cid[8][1],
      originalTwenties = cid[7][1],
      originalTens = cid[6][1],
      originalFives = cid[5][1],
      originalOnes = cid[4][1],
      originalQuarters = cid[3][1],
      originalDimes = cid[2][1],
      originalNickels = cid[1][1],
      originalPennies = cid[0][1];

      function cashReturn (cashToGive){
        [...]
          else if (cid[7][1] !== 0 && cashToGive >= 20 && twenties * 20 < originalTwenties){
          cashToGive -= 20;
          twenties += 1;
          cid[7][1] = twenties * 20;
          if (cashToGive !== 0 && cashToGive < 20 || twenties * 20 === originalTwenties){
            change.push(cid[7]);
            return cashReturn(cashToGive);
          } else {
            return cashReturn(cashToGive);
          }
      }
  [...]
```

## Phew!

It took two days of work (probably 8 to 10 hours) but I'm really proud of myself for trying to solve this functionally. Some of the other solutions I saw simply got through the test cases. I tried (tried!) to think about other situations to make a better solution. You can find my final solution here: [http://www.freecodecamp.com/anthkris ](http://www.freecodecamp.com/anthkris)

Feedback welcome!
