---
title: CircleCI - Data Driven
description: How do you become a cutting edge engineering team.
draft: true
---

### CircleCI - Data Driven

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