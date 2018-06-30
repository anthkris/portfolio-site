webpackJsonp([40439291955670],{1096:function(a,e){a.exports={data:{markdownRemark:{html:'<p>As I announced <a href="/blog/awsm-prompt-2-in-progress/" title="AWSM Prompt 2: In Progress">a bit ago</a>, I’m hard at work on my entry for the March AWSM Prompt using Articulate Storyline 2. I’m having to simplify just a bit but I’m hopeful that I can have a final version out by the beginning of April. Last night, I was working on a particularly variable-heavy section of the project. Now, I use Lectora 12 during the day (in my cover as a mild-mannered instructional designer) and I couldn’t help but notice some striking differences between the way these two programs handle variables.</p>\n<h2>The Task</h2>\n<p>The task I wanted to complete was to track whether several build options had been pressed, so as to use their presence (or absence) in feedback later. In this activity, the user will be tasked with building a fitness tracker that meets the needs of the target audience and can choose to include things like sleep tracking, tracking non-running workouts, prompting to get up, prompting when you receive a call or text, etc.</p>\n<h2>The Lectora Way</h2>\n<p>Being the budding coder that I am (and using Lectora several hours a day) I have to say that Lectora’s way of handling variables makes more sense to my brain. In a Lectora title, any variable that you create can become an array, which is a variable that can hold several different values. So, for example, if I create the variable FavoriteColor in Lectora, I can store several different values into it: green, purple, red, indigo, chartreuse. This is pretty powerful stuff. It means that I can be fairly efficient in my coding because I can always search this variable for a particular item in the array to cause a change elsewhere.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 34.42460317460318%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABqElEQVQoz32RW0sbQRSA9+/2tYnZkGpqY2oXUWhpKwi5rGICPvgghGgLBcXSpwpNSiqxyW5qzG4uu5u9JbEa/TpJW6EvPfDxnRnmnMPMSI/Se2T2j9jc2WNVecX66y1eZnZY38yysrbBRm6XF4UD3pQOeLuvspBaJZ5WeLyUYmE5jbz8nMjSs/ne2paK9N1w6Vs2fuAyZUK/2xF5wGRsY/cu8LwhpnZM2D2FoMb1dIjjO4zEeW10x2DKPyEFvs/Adhg4LpY75Mo0uewYXBoGDb3Fj3aL+vkxlnHG2KvTMdr0LAvLtukPZzUe4WiEH4bCY6TPXyvUmxqG2aPT7dE2+6KZyHsWpx8/sb2doXF+wsCo0W1XKRR2yeZyZLNZ1Hx+7ryqkvljqdbS+dY0uepfY9i3uN4Nvn9LGN5RKpVZXHyCpmti+gTXDVAUhUgkQjweR47JyLJMLBZ7sOQN72m2XMrVn3y4QFxdPJUvCKB8eEjq6QpnJ19oNhtUKxWKxSK6rqNp2gN/1zNLjnNDKIpnBP69+ITfBCEcvXtPIpEgmUzOiUaj84b/i1+zI9ls99kUxgAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Variables in Lectory" title="" src="/static/Lectora-Variables-60d81316aece4f1ffb3c0e310d097fcd-1626e.png" srcset="/static/Lectora-Variables-60d81316aece4f1ffb3c0e310d097fcd-076ec.png 203w,\n/static/Lectora-Variables-60d81316aece4f1ffb3c0e310d097fcd-7ae34.png 405w,\n/static/Lectora-Variables-60d81316aece4f1ffb3c0e310d097fcd-1626e.png 810w,\n/static/Lectora-Variables-60d81316aece4f1ffb3c0e310d097fcd-a585d.png 1008w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n  <figcaption>Add to variable in Lectora allows for an&#xA0;array</figcaption>\n</figure>\n<p>The other thing Lectora allows me to do is to easily create an if/else statement. So I can create a situation where, if FavoriteColor is indigo, then go to page “Indigo.” Easy peasy (to me at least).</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 765px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 53.59477124183007%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABqUlEQVQoz4WQ3UvbUBjGz38oMhmTwdbBlImFdUI/bCd0LQpC3bDorRdNNGna3ux6YK+HSBEk2cVE26RJer6SnKTVmNid2g2GSv1xeOE97/O85+GAxaXkxs5+8ut+5kD6LOxtSduLq8mFd8lXH1LziZUXieWFxPLL9ytzrxPzb5fefEyvbX7bqB7IP06+//wNjMszC1O9r6u/VIiR6zLkQB1qFHftXsemdEBQ1+jZCLoBszC86HWJg09MqlkIWObFaHjDXI9g7Pt+dBsNhy5G5w7p61fno+DaZz4aQM/14iimlOp6PwzYKQy77BYYFrQRuuJ3tuUFAQuGxHXMAYaUWjwJJYZpGpYZXI/41GEeIsTGiLmEa0H7uC2KYl2pS7I8OUe8SoJYazQbEkeWFUURBEGuTwRcyVvxUDw8kmq1GlCUxqdUqlAorP9HLpfLpNPZzF8m7T3ZbHZap4Bms8nV5XL5yz+KxWKlUqlWq7vPAXg8vrhUKhXv4eZ8Pt/pdMIw9DzPnwlotVqPzZqmjcfjOI7HMwH8U3jsB2ZVVfksiqK7mTwde2p+9uU/ixTqtr9CXzUAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="If/Else statement in Lectory" title="" src="/static/Lectora-if-else-284cf2ac714a29f0a9aded7638306354-39ccb.png" srcset="/static/Lectora-if-else-284cf2ac714a29f0a9aded7638306354-79692.png 203w,\n/static/Lectora-if-else-284cf2ac714a29f0a9aded7638306354-2854e.png 405w,\n/static/Lectora-if-else-284cf2ac714a29f0a9aded7638306354-39ccb.png 765w" sizes="(max-width: 765px) 100vw, 765px">\n    </span>\n  </span>\n  \n  <figcaption>If/Else statement</figcaption>\n</figure>\n<h2>The Articulate Way</h2>\n<p>This was my mode of thinking as I sat down to complete the task on the design page. However, I soon found that my thinking wouldn’t fly because Articulate doesn’t allow for arrays or if/else (though it allows for if statements, called conditions). Instead, if I wanted to track something like favorite color, I would need to create several different variables: Indigo, Red, Green, Purple and then set them to a value (I used true/false). Then I could check whether this individual value was true or false to cause something else to happen. Not a project killer, of course, but much less efficient than an array and I had to consider the situation for several minutes before hitting on this solution. As a coder, this way of doing things isn’t intuitive anymore.</p>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 45.18950437317784%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABwklEQVQoz2VSCXLaQBDU6/OJ5BOxgymMI4ywsEGxxSFscCgLzCULCUnovtyZXQihKlvVNdLsTG9v7wi33QEqzS6qLYXjir7VsY7pwsBktsZkvsb4GM8x1leoyY+HXknhUez0IfRGY1xcN1Ft3OFKvEPlRsJ8uYEfhHD3PoIw4vDPwHO035CJrCGj1myjdnuA8DLVIf/qQ+k/o9MboaNqWBpbWI6HnbdHEMUI4wRxmiFOMh4jihHlxLZyJLzHNeE7CRMcz4frB6emJD00JVkOjxRu7R3lUpRliaIoOFJel0KU/xEyXNQlCFEcn66VU3GWF8eYU2MKl6mkPZb/exAjS5L/CS/JLiEmQuZXSFfLiQTI8VkWYGuqv2OxNvgBTOH5YrXiycMjIVcYhlzJZ57BcCN8kSy0tDl6Aw3vyzUp9JBlKdjB3xQLN88fGGoj2I6L5sMjqvQQzL+69HDwcEKP0lWHUAcjtJ80fK09QX15w5s+w85xsPd9Tuq4Hi6HJu5faZxef8O0bNRbHe5b5WcLPwgVmhJh+WHTvG2gL1aYEUxjg5CpJq+YDUEY88iAIkGZp9zPiP6NrY2NacEgrAyTJsPFHwsmjTTlbMLkAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Variables in Articulate" title="" src="/static/ArticulateVariables-7ecffd3ac402fb3a50a79cc1bff76179-1626e.png" srcset="/static/ArticulateVariables-7ecffd3ac402fb3a50a79cc1bff76179-076ec.png 203w,\n/static/ArticulateVariables-7ecffd3ac402fb3a50a79cc1bff76179-7ae34.png 405w,\n/static/ArticulateVariables-7ecffd3ac402fb3a50a79cc1bff76179-1626e.png 810w,\n/static/ArticulateVariables-7ecffd3ac402fb3a50a79cc1bff76179-b5dd3.png 1029w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n  <figcaption>Variables in Articulate: Text</figcaption>\n</figure>\n<figure>\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 810px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 45.57823129251701%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABzElEQVQoz21SiW7aQBD1x/crKvUjmgQSwmlzBJxAwMEJbhBnDOawMeBzDbzOLiRVq1p6mtnxzpu3TyMV1Q5uSg2kFVWA58+9AfpTC73RDMZ4do6X3Ljkb0MTd+UncT8lq7gu1ZGvtyF1dANXWRm3xQrShQpSOQUTc46952O728MPQnh+8F8Uq4/UV0VGrp1RqkHq9UeoNTU8aW941F6htnWYixXWmy2c7Q57nwiDCGHMEEZMxCCK4YcRChfCO/mBCB/w816G5JIKd+eJJo/UfDbwyBWubAcRnQ/HI5LDQSCmf3EcfxFmLoRXWQVSQCR734fjbsXz4oSaCCxJRBMf6AWBqEWMaoSI6nzIv4TXOU4YhghIfshV0HQgwenII/A+GGM6s4QqrhA44fNLaGChqv5NKBSSOsYYTgnD3A3wTV5B6Y7R7rxg8jGDSz4yRhbQ4O/qGvf6AlpXh71xIdebuC3VBFlWqZ89NPoDNFoaWpqOavMFPzItsTaD4QiOs8GOe0x2bAip7hKNdwvGrz6Waxu5ckOoSuUruMmXkSa10sfCpj2bYzg1MZyYWFoWPFqZiIz/syKhAJIIBxYJH7nf1srGfLkWcWbRZjgufgOKbIzkO0NXgAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Variables in Articulate" title="" src="/static/ArticulateVariables2-be1a363268a6b8176799589cb2aa4eb6-1626e.png" srcset="/static/ArticulateVariables2-be1a363268a6b8176799589cb2aa4eb6-076ec.png 203w,\n/static/ArticulateVariables2-be1a363268a6b8176799589cb2aa4eb6-7ae34.png 405w,\n/static/ArticulateVariables2-be1a363268a6b8176799589cb2aa4eb6-1626e.png 810w,\n/static/ArticulateVariables2-be1a363268a6b8176799589cb2aa4eb6-b5dd3.png 1029w" sizes="(max-width: 810px) 100vw, 810px">\n    </span>\n  </span>\n  \n  <figcaption>Variables in Articulate: True/False</figcaption>\n</figure>\n<h2>Did I miss something?</h2>\n<p>Did I miss something? Does Articulate allow for arrays and if/else? Also, does anyone else regularly switch between programs and have to reframe their thinking as a result? Let me know in the comments.</p>\n<h3>Play the Demo</h3>\n<p><a href="http://knanthony.com/showcase/Fitopoly/story.html" title="Fit.o.poly Game">Play the demo</a> and let me know what you think!</p>',frontmatter:{date:"March 30, 2015",path:"/blog/articulate-vs-lectora-insight-into-variables",title:"Articulate vs. Lectora: Insight into Variables",tags:["coding","Lectora 12","Storyline","variables"],categories:["AWSM Prompts","Coding","Design","Showing my Work","Tips"],featured:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC1ElEQVQozyWSSUyTURCAm3jwJAc1ClgBoQi2pVQptH9bSpe/laULm+CGB2MIKiISA1XjEjdcQqxGBUHEJSTGJXFDQVEjGhFBYmI8adRoyuIWiokePx96eMnkvcw3M98bRdy8aFxumaqN6wkGtxLcXk/1pg0cbGzk3PnznG5u4ey5DupqaigvCrBmeRkeh42i4kLqtwVZVbGaHNmDzZ2LyS6jsOfrcBoTcSzV4CmRkP2Z2Lxaeh93MxL+xujIOB8+fCYcHmdExD++R+h5cBe310jpyly8JQ4CZTK+Urc4AugrtREotuIrsyEZNajiZ+MqyODA0R1c7Gyj42ILHZfO0NJ+guOnjtB24SQNu6txeJeQJ/LySix4/Ea06gVoNPEoCstlAuUuila40S2Kw2jQieoSPQ/vMDkZITzyhf4X/bx5+4bR8TATkZ9cvdGJyaXGLqDZ+VqyZT0mgx5V0pypDh14S+0UrXQh51kwmw0CaKb90imGXvfTP9jHvftdYswuHj/qZWh4gOb2ELIoOpXnLjQKXVlYJQNmpxqFXwD9y1zCg4t8nwtd2kKSE2Nobg3R/eg2129epqv7FjfuXKWtrZX7vd0cCu1EktUElrtFjowxS0+CcjZWR/oUUICEC7fPREmxD4s5g5lR0+i5d1d8wASDL4cZGnzFy4Fh+p4+Z2IiwpVrneilROxOCbPJSFJCDCkqJTpNMgqn8JBTkPbPhcW6mDRxmbJwPrVbqgiFmti3dxdHj+1nX+NuGoINNB07TG1dJcmqWDS6OCRrOqmqeOLnzcKQmSLWxqvHXpCOwy/E5mhZEBeNMjaKoVcDRCK/effuI+NjP3j//hNjo1/5NfmHJ896WWJJEE1oyA840GvVKGNmiDhHAAv+A+0CaLEuIil2JnNnTadqQwWHm/awfU/tvzVZW7mOuvoaqjdvolK8OfMysHhSkbJ1aFKTUEbPINebzV/iAbzkK0NvNQAAAABJRU5ErkJggg==",aspectRatio:2,src:"/static/Articulate-v.-Lectora-Variables-8f28c633368dea80b5e2ab283adb2051-81d39.png",srcSet:"/static/Articulate-v.-Lectora-Variables-8f28c633368dea80b5e2ab283adb2051-9a8d1.png 203w,\n/static/Articulate-v.-Lectora-Variables-8f28c633368dea80b5e2ab283adb2051-c53f9.png 405w,\n/static/Articulate-v.-Lectora-Variables-8f28c633368dea80b5e2ab283adb2051-81d39.png 810w,\n/static/Articulate-v.-Lectora-Variables-8f28c633368dea80b5e2ab283adb2051-fda19.png 1024w",sizes:"(max-width: 810px) 100vw, 810px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-articulate-vs-lectora-insight-into-variables-39dc5c82a9da90e66f5a.js.map