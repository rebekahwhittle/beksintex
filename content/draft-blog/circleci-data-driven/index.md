---
title: CircleCI - Data Driven
description: How do you become a cutting edge engineering team.
draft: true
---



It's 2021 and we're still in the middle of a global pandemic. I don't know why everyone just assumed Covid would get up and leave once the clock hit midnight on December 31st but it definitley didn't. 

If 2020 has taught us _anything_ it's that being prepared is so so very important. But, how do you prepare for something you've never experienced? How do you control variables you don't know exist? These are the questions that we face as humans but we also face as engineers. 

During these times of uncertainty we found that developers and teams "looked to automation to create stability in systems they can control". This is a quote from CircleCI's state of DevOps report. 

In the midst of holiday haze you might've missed it so let me recap some important findings. 

The report found that there were four key metrics that high-performing teams measured.

**Throughput** 

You probably think this is how many green builds you get but it's not. It's how many worfklows you run daily. So, you can think of it as "how many workflow units are we putting through each day," or not - up to you. But, this is metric that assess your team's productivity and movement. 

Now if your team is committing tiny little changes simply to have a high throughput metric then you're doing it wrong. However, if your team is making sizeable commits daily and pushing your application build process forward then this metric comes in handy. 

I'd recommend setting a weekly throughput goal so you can measure your teams productivity and accuratlye asses as it quickens or slows. 

**Meantime to recovery**

On the rare, like super rare, occasion that my joke doesn't land I have to quickly come up with a new joke that will land to smooth over the awkwardness of the moment. So, my 'meantime to recovery' from a bad joke to a good joke is about about 4.23s. In relation to developers, meantime to recovery is measuring the average time of a failed job to a successful job. 

Now, you _want_ some failing jobs as it'll point you to the vulnerabilities in your application and lead you to those fixes. How quickly you iterate is what we're capturing.

Keeping an eye on this metric will keep your team moving quickly but also healthily as you progress with assurity.

**Success rate**

I think we can all guess what this means. The percentage of green builds is most important on your default branch. This is the branch your customers will see once deployed. 

My "cool-new-feature" branch can have a lot of red failing builds as I'm testing and iterating on a new feature. A high percentage of failures on your main branch might be the red flag you need to re-asses your test coverage. 

CircleCI users see a higher success rate percentage than the average devops engineer. You can see how we compare here, [State of DevOps Report]().

**Duration** 

Pretty straightforward again. How _long_ are your workflows taking? Time is so vital to the software development lifecycle. Developers need to stay focused and in flow. Making the test suites fast and keeping the developer feedback loop short will make your team more productive and your customers happy.

This metric doesn't rely on a green build or a red build. Simply put, you just need to know what you don't yet know. Did my E2E test fail? Did ____ pass? 

Most teams know this metric but get stuck attempting to make it faster. CircleCI has a lot of built-in features and resources that can do this easily, like larger resource classes. 



Data is cool but sometimes we don't know which data we need. Hopefully these metrics give you some direction as your team sets new goals for 2021. 
If you're curious about why CircleCI users have higher metric scores in the above, reach out to us, we'd love to share our secrets! 



#### Lead with the data

> **In times of uncertainty, developers looked to automation to create stability in systems they can control.**
>
> **Namely, we suggest that leaders focus on building resilient teams and preventing individual burnout.**



need both teams & people _processes_ that can **scale**

key element are _exhaustive test coverage_ - you need high confidence _in_ your test coverage

passing test don't just mean no bugs - they _could_ mean an absence of test _coverage_ 

##### What does a high-performing team look like?

* throughput: average number of workflows you run a day
  * workflow run are indiciating how many units are moving through app development pipeline
  * commit size is important - too large means hard to fix, too small means not meaningful deploys
  * setting baseline metrics assists in forcasting productiving 
    * we're not tracking deploy rate - we're tracking pipeline coverage 
* meantime to recovery: average time of failed job to making it a succesful job
  * metric gives visiblity into _test coverage_ of your application
    * alievates fear of inserting buggy code 
* success rate: the percentage of green builds or passing builds
  * tracking success rate on main branches not topic branches 
    * failures on topic branches is valuable & expected
    * failures on main branches points to stability issues 
* duration:  how long your workflow takes
  * how quickly are your developers getting a signal of pass / fail? 
  * can't fix what you don't know so gotta make it quick 
  * rich information with quick duration = best developer feedback loop
    * testing is _vital here_ but lets' think outside of ✅ or ❌
      * build passed - experiment succeeded 
      * build failed - experiment failed
      * erros - experiment failed to conclude 



throughput goal: **0.7 times a day**

meantime to recovery goal: **1hr**

success rate goal: **90%** 

duration goal: **5 - 10mins**



##### How do you build resilient teams?

Too small of a team decreases the pace of innovation. Steady momentum and forward focus are important to keeping teams progressing. 

Your team will be able to balance 3 priorities: 

1. Creating user-centric features - bettering your customer's expereince 
2. Technical ivestments - managing technical debt keeps your team afloat
3. Room for escalations & defects - systems break preventing users to achieve their goals



##### CircleCI features for high-performing teams

throughput - VCS integration, Re-Run in UI, On commit trigger, Orbs

meantime to recovery - SSHing, Re-Running a Workflow, Artifacts  

success rate - Insights Dashboard & Insights API 

duration - Test Splitting, Caching, Resource Class Sizes

*Premium Support packages lead to high-performing teams.*


