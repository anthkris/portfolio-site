webpackJsonp([0x62bf474cb4a8],{1086:function(e,t){e.exports={data:{markdownRemark:{html:'<p>This one was an ordeal! But only because I’m super new at JavaScript and JQuery.  Read on. This weekend, I spent some time (a lot of time) developing my entry for <a href="https://community.articulate.com/articles/medical-training-templates" title="Elearning Heroes Challenge: Medical Template Challenge">Elearning Heroes Challenge #69: Medical Template Challenge</a>. As I continue to challenge myself to always have a project, and to develop fuller portfolio pieces, I’ve been pressed for time but I really wanted to do this challenge because I think that David has an excellent point in that one’s portfolio should include targeted demos to appeal to potential customers. This was a really good one.</p>\n<p>Time in development: <strong>About 6 hours</strong></p>\n<p>Time searching for a way to autoscroll the page: <strong>About 7 hours</strong>.</p>\n<p>More on that below.</p>\n<h2>Inspiration</h2>\n<p>In retrospect, what I developed isn’t quite as medical as it could be… There aren’t any direct images of organs, etc. [that’s a potential update for me] but I was thinking about sports-related training and client-facing training when I stumbled on the <a href="http://www.cdc.gov/concussion/HeadsUp/youth.html" title="CDC Heads Up Youth Sports Concussion">CDC Head’s Up series</a>. I was intrigued particularly by the coach training and used that as the basis for my demo. The CDC training already has a really awesome graphic design. They also make good use of video to show some coaches in action doing the right thing and expressing the appropriate concern for young players that experience bumps and jolts to the head.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 60.648918469217975%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAA7DAAAOwwHHb6hkAAADR0lEQVQoz02Qf1DTdRjHv+w7VtkYP+wf668uS/7x7Mh/OrWCiF/yY51W58mFVqQdVlgi2cQAlV9jJEyBQwM7ImAxROaW0mmYdzaPG2PTEWNjA7KA8vjHk5hErz6u4vrcve+e53m/n+d5fx7pQKGakuKHqSl7jIbatTTXx2Jqf4Ser9RYu6MZ7I3je3MMg32x2PpisIj4Yv9qvumI4fRJDR2tcXS1xdLeEo3py9VIx0tk6o5HUas/SK2hiXrDNlqb1tDa/BR9pmexnd+IrTeBC+YNdHeso6t9HZ1n12I0PEnV0XjOdT3OgCWOvq819JuikWrKJdpaMrFcuMq9e4vMzc3h8/mYnJwkEAwS/B/Gx7yMeTx4vV7GvWPcsF/nvHkT1nMaus+q6e3UILWdVNPcmMsp4/M4hoxMTc2wvPwn/73l5eWV+O6v08z7R1fyQOA21p4ErlslLO0Sti4JaVfRZhxOO0v3Z5md8eP3T7C4+Ad/PegI3cV1y4N+/0EsRUUM1Olwu2wsLd4PD5wQ2sMNu9hfn8K+qmT2lG9BUmv12EfG+P23efHNn4XITygU+sfCUohBaz+lusO8lpiIsboQw4ljjDpvhenghI/n9ragePUMUdsbicqpQyrLTqC+VMeJhgbM5h7h0M/CwkLY4fzsFMcOFfB2/l52v5PPW+++xxHh1P3jtfDAB7cu3vcm+TtSKcjLpjAvHSk+o4QdujO4blwjGAjgGx9fudEv01N8a7UycOkiP1wd5Mrly4w4HczfuRPmZ25Ps2FnGVJqJQ9l1yAnFiNJ2i9I+tSEy+nEdfMn7HY7Q0NDDDsc4rYuHCM3GXZ7cLpHBTy4R724BIZFfum7KzzzhhiYUkHktibkrdVIkdoGVNubePT1RjQ5VcStTyZ6fSqr4pNQJR4gMq2cyJQjKDMqUOUYWJXXwRN7Onk6V8+aLB3KzGrkLEN4mJxRhSSnlCFrjURoTxGRaUBKLiUivVLEtSiyPkexVY8irQKFqMnpFUJbj1IsUSUVo0oTva98Jr76CXLSIeSXdUiKjbuRk0vEphqUYosyoxJlarloOopSCOTN7yNv+RB5UwFyQq7ATlH7APnFj5Ff+EhwhYL7V/NSEX8DfaF5HB+sS7EAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="CDC Heads Up interactive" title="" src="/static/CDCHeadsUp-7358c9ad7397253f6ac2453663556a3e-1626e.png" srcset="/static/CDCHeadsUp-7358c9ad7397253f6ac2453663556a3e-076ec.png 203w,\n/static/CDCHeadsUp-7358c9ad7397253f6ac2453663556a3e-7ae34.png 405w,\n/static/CDCHeadsUp-7358c9ad7397253f6ac2453663556a3e-1626e.png 810w,\n/static/CDCHeadsUp-7358c9ad7397253f6ac2453663556a3e-79409.png 1202w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n  <figcaption>CDC Heads Up: Concussion in Youth Sports</figcaption>\n</figure>\n<p>But I thought, this could stand to be a little more interactive. Articulate Supastar Linda Lorenzetti had already demoed a great short comic-book style entry inspired by a Cathy Moore article. The demo reminded my of the <a href="http://brokencoworker.com/" title="Broken Co-Worker">Broken Co-Worker course</a> (I’m sure you’ve seen that stellar piece before) and I decided to blend all of these together into my demo.</p>\n<h2>Development</h2>\n<p>Prototyping went fairly quickly. I had a specific idea and I prototyped on paper before beginning. Probably the most difficult bit was finding the images. I wanted some specific poses to build the drama and I wanted to use free resources. But that proved impossible. So, I settled and went to Shutterstock. From there I cobbled together a few different images.</p>\n<figure>\n  <img src="../post-images/IMG_0379.jpg" alt="Paper prototype" />\n  <figcaption>My paper prototype. It\'s so ugly.</figcaption>\n</figure>\n<p>I love the comic-book theme. There’s something so familiar and nostalgic about it. Furthermore, the frame layout is great for creating suspense and drama. So, once I got the images, I used an Ozono Studio Cartoonize photoshop action that I downloaded for free from Creative Market (now $4) to stylize them.</p>\n<h2>JavaScript</h2>\n<p>I’m already fairly savvy in HTML and CSS but one of my daily goals this year is to really delve into JavaScript and front-end development. So, I’m still learning. At that’s why this bit was so difficult. But perseverance paid off! My task for myself was to emulate the way Broken Co-Worker used the buttons on the panels to autoscroll down the page. I agree with that development team’s reasoning that, in this case of an interactive comic book (as opposed to say, reading manga or comics online), it was better to have the page scroll and not have to make the user scroll down with the mouse. I examined their interaction closely and found that they had integrated a <a href="https://github.com/flesler/jquery.scrollTo" title="ScrollTo at GitHub">JQuery plugin from Ariel Flesler called ScrollTo</a>. As with all other scripts, these can be linked to in the head section of your story file. I copied the Broken Co-worker method of renaming the ScrollTo file to scroll.js. I also hosted jQuery myself. However, probably the best thing to do for both of these is to put in the CDN link so that the scripts remail up-to-date. If you’re a n00b like me, note that the order is important. Jquery must come first. Then, the ScrollTo script. These links, along with the JavaScript files have to be pasted into the publish folder after every publish.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 707px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 37.90664780763791%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABYklEQVQoz42RS67UMBBFszBGrIIZa2DEAIl9IMFW2MGbPj4N/Zqmm3R+ncR2nJ9Th3LyfsywdFR23dJVVTk5pY5fx5Lf55q86MjLnqL0XJsZ48BY2eJ/kmRVT3oxnNOWrPBq7LnkvYqBxsy0atiaCPdxo7GoLpuu9weSa6uCJl0P3fCEHzee3oKf2IjaIPRR9+CekfzcazIL+PwT9vICm77EnF9h9u/o0reE8gdj4WhTHelOO985rZm4XiHLhBCE5yc5HmE8lVTfP1PsPlB8/Uh2+57y22vawxvC/pZ615J/EfIbR3Fjye9mDgc4nwSRaBgjK4nVuYP3TB30Ov6guxrsFid943vVJoYmMPwxDKll7BacfoD3m9nDWQ2bGpa17UWZ7wmPyL8TxV40t6z1sbt4lUUe6xKvHyLq2lWTol02ot2pagyii4p5l2ted+ZtT1VV1HW9YsuZrtQ/qIRp3Az/AlAIZaNXRuP1AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Scripts in Storyline" title="" src="/static/StoryfilewithScrollTo-b6fde40f0385559d98f86cf3ea674167-7c392.png" srcset="/static/StoryfilewithScrollTo-b6fde40f0385559d98f86cf3ea674167-cf0aa.png 203w,\n/static/StoryfilewithScrollTo-b6fde40f0385559d98f86cf3ea674167-131c4.png 405w,\n/static/StoryfilewithScrollTo-b6fde40f0385559d98f86cf3ea674167-7c392.png 707w" sizes="(max-width: 707px) 100vw, 707px">\n    </span>\n  </span>\n  \n  <figcaption>Adding scripts in story.html</figcaption>\n</figure>\n<p>Pre-publishing, I had the buttons that went down or to the next page execute some jQuery from ScrollTo so that they moved the browser window.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 49.46070878274268%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACi0lEQVQozy2Sy08TURTG+x/pP+CCuJKVkcQtG0wAIyZGCSAkxsgKjODGEF4RETCAvCktj7b0CdJCIfIGwcpr2tKZdtqZaaf8vBlYnHz33nPud8733Wtz+NaYcYeY9awIXMURWGY54sUTieCL7uMUOOKeYmLJc1ezYuHUUoDgxg5n8RQXSQVJVjlLyNiC4U3sSz4cHj/z3nWGpz7RN/aU1s5qPva30+wf4VHDPaobX9A7NMyib5U5t59ZcScQjiKnM8QTSTJqFlUzsAUE4eyS3yqa924wONnChx/36RhooK2+kuaORjrrnxCofc630TEWfL9EbeCOcJOUkiaevCar58mbxdsJbwkDgnCNwfF+2rrfYnfO8a6ikve1b2htaKCjro6B0QlBKCb0BEXeTWgljHQtW5J1I4+Rz2MLRbawu/w4BKErFOZL51devXxNTU0NFVVVPC4r40FJCQ9LS+no6RM1EdE8iNPlw+2P8tkv0eI5p9kt0Cth862uMznvYXrBKzqH6On7TlNTI+Xl5TyrqGBkeJjuri7a29oY+jnJrCvA9KKXcYeL9Z0jZL1IMlsgrha4SgsPt49ihH/vs7ktYueA49MYyWSSWOwfp39jaMKbnKaL0PgTO2dr95Dtg2Oi2wdcxRMUdI2ioQEmFIXknG4I/QZGwaRgmpYPKSVjnd2Ywmgth65l0XUdU+SLxaKFcGN5Z9+6ZGrzisVDBd+Jik1SclymxB9KZTmJpzm+kjmRFFy7Ej2hM7qC5/SGzjlJ5JA105KXUPMo+g1re6fMRGM491LY9zM4D9LYZFUjIWc4k665EB9TSqWtfSyusH8h30WKhJIlndVQ1LsQ64R4YS0n1KgKppETqg3+A7u6o4V39PgDAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Execute action" title="" src="/static/StorylineExecuteAction-83865b58ca4bd30c035669c3fa5b6553-1626e.png" srcset="/static/StorylineExecuteAction-83865b58ca4bd30c035669c3fa5b6553-076ec.png 203w,\n/static/StorylineExecuteAction-83865b58ca4bd30c035669c3fa5b6553-7ae34.png 405w,\n/static/StorylineExecuteAction-83865b58ca4bd30c035669c3fa5b6553-1626e.png 810w,\n/static/StorylineExecuteAction-83865b58ca4bd30c035669c3fa5b6553-9af38.png 1215w,\n/static/StorylineExecuteAction-83865b58ca4bd30c035669c3fa5b6553-a48d3.png 1298w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n  <figcaption>Execute Javascript trigger on button</figcaption>\n</figure>\n<p>The code has three parts:</p>\n<ul>\n<li><code>top:\'150px\'</code> tells the browser how far to go down. Calculate from the height of the first panel (or a little less, which is what I did).</li>\n<li><code>left:\'0px\'</code> tells the browser how far left to go. I didn’t use this because I didn’t need the window to go sideways.</li>\n<li><code>500</code> is the speed at which the animation will happen.</li>\n</ul>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 65.01726121979287%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACDUlEQVQ4y5WTa2/TMBSG828R4jP8AP4AEv8BviAGg/FhMKZOYtByaUtb1k1Ju6IV6CUXO4ntJE76cuy0E6uKBJYe2SeX1+ccv3bmUYIgycFFBSaKNTlYqhBLTc81liHDbBkgilPwVFpYImy8jfPq+D0aHz+gNWii+bWLVq+HZu8MrW8uGu02TrufsVj68P0QYcSICGEYIUkFtC5RrDFrISSc43ddPH3zEC+O7uHw9Bn2j/Zw8PYQJ94Md18+wP3HtxDxAGaUpSZKS1VV2B5CCDi9cw8BizFfMPBEQsicUERGJVPZlElRaOwaq9XqmmvBoTumdGln2lFlmS1lU05Vragcbd9vC2xEdgrmeW4FpcosZl2WlZ1Ndn8K/i3LG4KbYQTiJK1FqU+aUHlhs/xnwcGFh/7QRWdwjla7T/bw6zJJjD4nKNP/EeyfuxhPrjB0R7jwLsF4XPe0yDFaCjQ8BpkVO3u481A+dQcIggBBGCJNUwgi4hxaJXjSmeP23iUiMvquDE1Y0sFVa9GUDtMZfZ+Cxwmq0hxAYbMz1FYxXjNxYX8y3ttQWh/e3CAjlzi6NHYpkJLnUvKeUDUyy23MyJtSSmsppZRFEjrPMA0FHnUCnE1DuK4HPwjhcLqTjO7g5MccV7MlfvmRZbaefy7qdnBqA2NkfsYR0awSju7Ex53nExx8GWP/9Qld3xF+A/Lb4NWhLxPUAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="jQuery in Storyline" title="" src="/static/StorylineFunction-c2b532d85ae35361bc7721a4378dc0e6-1626e.png" srcset="/static/StorylineFunction-c2b532d85ae35361bc7721a4378dc0e6-076ec.png 203w,\n/static/StorylineFunction-c2b532d85ae35361bc7721a4378dc0e6-7ae34.png 405w,\n/static/StorylineFunction-c2b532d85ae35361bc7721a4378dc0e6-1626e.png 810w,\n/static/StorylineFunction-c2b532d85ae35361bc7721a4378dc0e6-9439a.png 869w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n  <figcaption>The jQuery code</figcaption>\n</figure>\n<h2>Demo</h2>\n<p>And that’s it. Check the demo below!</p>\n<figure>\n  <a href="http://www.knanthony.com/showcase/Concussion/story.html" target="blank">\n    \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 775px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 41.03225806451613%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACUElEQVQozx3O7S8UAACA8Vv/Rr7cZmt9izaL4g7VbkLNZpKMvEUWJ4k0wjqy7Ny17nTkLSTjjntxuRfOnTvnzoXkbWZDxRlqfelD68OTev6AZz/B+o4H/dwjbMvPMQRUWP3jGF1DGN1DjE6bGZ5yM7e1zfTXY7oCDhpHZSj0tbwal/FQXkGZrAbv0iJN6pccHR8jmN800Nguwm4qIrDRzuJaAO/CDAvrXmb8ThxzHn78/M7U4S/ynQbiVBHkdV4iXyXmTEoo529dweZ1I8lIZvfbFwSru3oaGqOpzQ1n2JpMt/821eobpBZHkaUQk9KQhlzfhWl5ieZPW+SN5HCvK4bMujgiYkNJL7yJfcZJcnoie8G9E+HKAG3vw2jtjUZpu4DamcT9qovIChKR5ISSUn+dyopsZCPdKD5vk9dXSpkmAUlJJFU5l3mtrmbMYefqNTHBgyACb0BL54iYfk8CGlc8MlMMJXUSLG+qaWkpJqsmndn+KhRmDWV6JWnyeCq1CUgzRTSXJzPZ+gDjYD9xSbHs758IvfM6lH1ilHoJLR/i0VjSsLrG0Y3p2Dk4RFpUQFN2FJPl+UifVSB6LKK1XsRKSAib54T8EZ7GExlO0d1UDo4OEbh9gxQ3nyWxNIxceRjvbIWY7RbGfRtM2e1kCIWkCE7hVrbhmXExZjPis00wO6ojaDDxe9bHnLaTtx0K/iVYWfPQoS3hxYAUec8T9JY2enpV2JzTfDyR9j6tQJlxB3N7N/M2K5MOAxMOCw6rgbWxUYJDg+yuruLx+f8P/wKTc7npKgxiBwAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Final storyline" title="" src="/static/Sports-Concussions-ae91d2dfaf2ca572e33c5ad13484ebbf-4c5e3.png" srcset="/static/Sports-Concussions-ae91d2dfaf2ca572e33c5ad13484ebbf-9d950.png 203w,\n/static/Sports-Concussions-ae91d2dfaf2ca572e33c5ad13484ebbf-fceae.png 405w,\n/static/Sports-Concussions-ae91d2dfaf2ca572e33c5ad13484ebbf-4c5e3.png 775w" sizes="(max-width: 775px) 100vw, 775px">\n    </span>\n  </span>\n  \n  </a>\n  <figcaption>Click to view the Demo</figcaption>\n</figure>',frontmatter:{date:"February 09, 2015",path:"/blog/a-medical-demo-and-a-bit-of-coding-too",title:"A Medical Demo and a bit of Coding, too!",tags:["articulate","Broken Coworker","coding","comics","JavaScript","Jquery","Storyline"],categories:["Coding","Elearning Heroes Challenge","Showing my Work"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACsklEQVQozx2QSU+TYRRGv39h4sLExIHSeaR0AL5agVKkpYPSVlpmW2rL0EqLldICSoUqikHEKSI4JGqiiUvjxnFh4v8wMW5c6Or42tVzFzfnPvdIhw4f5chxFQq1EbXBit7ixNDS1kiltgWNoZUmtRnZ3cWrF085mxhFobFgtskYW9vRme2o9RaOK3UcPtKE9B/WpDKIJTMakx2tydGA6MTs7QvilLvxnurHHwjj9/twdXobx8y2Dix2VyP1FjsqnZljzRokhdqAxdZO9GyC05FBTseGiE2kCfT5mMtkKJcr1K/V8Xh60IgmRmub2JexOlwCKNPidDegOrMNldaEpDVZ6XB7GsCx1Hlq1SW+XSzyTO6goFRSsdu5GYng7GgjXyzgcPfg7OzB6uqmyxemy+un1xek23sK+YQbydXlxeML0ReK4QlG8bi93HC0UW5u5pJCQclooj6UYHUux4NLJWYGB5kOBUj6/MSFhoHBhFDiIyB0hMMhpP5whMR4ikyuSHa+TG5yij1/Pyui2ZqAltRqtpPn+FpZ5PvIMA/F609abbx1OMm5u+mPjxEUDKNOh1GrRYrEhxkWwKl8gfmFCqnsNNPRKIsaDatKFXWTkdfBAL/v7vBza4tn8SFutrsoCMjEWFJoytB58iSyLHPwwAGk8JkIqfNZCqUFVusbFBeXiAVDPA8Fue9ysSw83hZuXg4M8GPnDp9nZ9nv7aU4Mk4yX2QmV2BCQMeTafQ6PVJaNCovrXB9c4t7j/bZebhLLJ6gtlFnef0qq+trlGtrTObz/Pr7h9fv3jOam2N+sUq5usJC9TLT4rtkOsuZgShSdmaWlSs1Nre2ebC7x8s3b7m1fZepySSVUpH1K8vsP94jk0rx5eMHPnz8xMbmbW7ducc1UaJ6ucaFYolUOsPQyCj/AP2+pSI1V4V6AAAAAElFTkSuQmCC",aspectRatio:2,src:"/static/Medical-Template-Challenge-21956f58abc364dedbf1083ec77b366e-81d39.png",srcSet:"/static/Medical-Template-Challenge-21956f58abc364dedbf1083ec77b366e-9a8d1.png 203w,\n/static/Medical-Template-Challenge-21956f58abc364dedbf1083ec77b366e-c53f9.png 405w,\n/static/Medical-Template-Challenge-21956f58abc364dedbf1083ec77b366e-81d39.png 810w,\n/static/Medical-Template-Challenge-21956f58abc364dedbf1083ec77b366e-fda19.png 1024w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-a-medical-demo-and-a-bit-of-coding-too-59a57f1dc36ef6bf20b0.js.map