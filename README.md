# one-month-in-coffee

This is my first attempt at creating a data visualization. I started this in February 2017 during a day-long data viz/D3 workshop.

We learned that data didn't have to come from government APIs. It could be some as simple as data from your bank ledger, or tracking the time of times you check your phone (for example). 

Originally: This was supposed to be visual representation of how often I bought coffee in 2017. I had hoped to animate the viz. Once I got the animations working, giving each weekday between 0.5-1.0 secs a day (52wks * 5weekdays = 260secs to animate the year?!) I realized that no one is going to watch a 4min data viz on the interwebz. So I pulled back the focus to just one month in 2017.

Skeleton is used for a quick grid system. jQuery is used because it is useful and practical, even though I had hoped to animate with vanillaJS. This viz was a lesson in using things that work. 

My goal, at least in January 2018, is to get a month of data animated. There's a lot of code that violates DRY, so the opportunities for refactoring are grand. There needs to be more loops. There's likely a way to trigger the animations based on if that day had one, two or three coffee purchases. 

Friendly feedback warmly welcomed. tinatrenkner at gmail dot com. 
