---
title: What Is Continuous Integration?
description: Continuous Integration and the thanksgiving food list.
draft: true
---

##### What's your favorite thanksgiving food?

Mine, *personally*, is sweet potatoe casserole. Maybe it's a southern thing, but those warm, sweet, fluffy potatoes blanketed under marshmallows make my tastebuds come alive. I'd go so far to argue that a Thanksgiving feast isn't complete without this sweet and savory dish.  

My friendsgiving, (friends only - no family drama) was the other night. As we were planning, we began to mitigate who was bringing what. Of course, I volunteered to bring a sweet potatoe casserole and green beans!

Before we keep going I should quell your anxiety. Yes, you clicked the right blog post. Yes, I will tie this back to continuous integration. No, I will *not* be sharing my secret ingredient for the best sweet potatoe casserole. 

Back to friendsgiving planning. 

For context, there was a group chat with a few people but outside of that text we could invite friends and delegate what they should bring. 

In the group chat this was the working list: 


### 📝
> Jamie: pies
>
> Lisa: turkey
>
> The Smiths: ham, rolls
>
> Beks: sweet potatoes, green beans
>
> Lyn: mac'n'cheese, mashed potatoes



Outside of this group text I invited two seperate friends. I sent the above list to both people and kindly asked they contribute and bring something. I awaited their responses. 

Daniel responded first and said he'd bring a salad. Although I wanted to push back and ask who the hell eats healthy soggy greens on Thanksgiving, I didn't, and instead added him to the working list. 

Updated list:


### 📝
> **Daniel: salad**
>
> Jamie: pies
>
> Lisa: turkey
>
> The Smiths: ham, rolls
>
> Beks: sweet potatoes, green beans
>
> Lyn: mac'n'cheese, mashed potatoes



Now remember, I asked two seperate friends if they would bring something. Daniel responded first, but quickly after we'd updated the list Natalie responded and said she'd bring, "a salad!". *(I'm learning a lot about my friends* 🤦🏼‍♀️*)*

Natalie doesn't know Daniel has already volunteered to bring soggy greens. She is looking at the outdated list. Of course I sent her the updated list and ask if she'll bring something else. Thankfully she volunteers cranberry sauce and another desert.

I have to again update the _main_ working list.

Updated list:


### 📝
> **Natalie: cranberry sauce and desert**
>
> Daniel: salad
>
> Jamie: pie
>
> Lisa: turkey
>
> The Smiths: ham
>
> Beks: sweet potatoes, green beans
>
> Lyn: mac'n'cheese, mashed potatoes



Hopefully you feel the annoyance and hassle the above entailed. This manual process of updating a main list and attempting to inform everyone of what is changing is cumbersome. Thankfully with this scenario the worst thing that could happen is there were two salads no one ate. But if you translate this over to something like... software, then we have some problems. 

In software development we have a large code base that's constantly changing. You can have 2 developers or 200 developers making changes to code locally and then trying to add their changes into the repository. In order to prevent copious amounts of bugs and breaks a system has to be implemented to manage this ever changing code - continuous integration.

Continuous integration is the communication of changes against a working main base of code. 

This is the practice of having seperate working branches for each developer and then merging those branches into the default branch. The implementation of test suites to check to see if things have broken or if conflicts have been created prior to being merged are embed in this practice. 

How do you apply this concept to your setup? There are many tools these days you can use to have visibility into your main code base and the changes that are breaking your application. [CircleCI](https://circleci.com/) allows you to quickly see from your VCS what tests have failed so your team isn't merging broken code.

If you're not using a tool to implement continuous integration into your software development lifecycle, I urge you to do so. Just as no one wants to be at a meal with multiple salads, no one wants to constantly be rolling back their product due to broken code. 

Hopefully this blog post gave you deeper insight into *why* continuous integration exists and got you thinking of your own developer tools. And if this post didn't do either maybe, just maybe, it made ya hungry! 🦃 