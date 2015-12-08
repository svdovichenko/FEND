## Part 1: Optimize PageSpeed Insights score for index.html
### Solution
1. The roboto font has been removed to optimise prefomance <link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
2. CSS have been added inline.
3. async have been added to <script src="http://www.google-analytics.com/analytics.js"></script>
4. Minified index.html and perfmatters.js
5. Compressed images.


##Part 2: Optimize Frames per Second in pizza.html
##Solution
1. Decreased the number of generated pizzas to 35 to improve perfomance. 
2. Assign pizzasDiv to variable and moving it  outside the loop.
3. If we output to console:  console.log("new width: " + newwidth); in a loop we will find that the size of pizzaContainer is same. So we can declare variables outside of the loop.
4. Added will-change: transform on .mover class. To create own layers for objects.  
