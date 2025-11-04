const countWords = (str) => {
    // console.log(str)
  if (typeof str !== 'string') {
    console.error('Input must be a string');
  }
  if (typeof str === 'string') {
    splitStr = str.split(',');

    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].trim();
    }
    console.log(splitStr)
    console.log(`Number of words is ${splitStr.length}`)
  }
  
}
countWords('gap, amazed, kiwi');
countWords(`hello!, don't, don't, can't, mother-in-law, state-of-the-art, "quoted", (parentheses), end.`);
countWords('the, be, to, of, and, a, in, that, have, I, it, for, not, on, with, he, as, you, do, at, this, but, his, by, from, they, we, say, her, she, or, an, will, my, one, all, would, there, their, what, so, up, out, if, about, who, get, which, go, me, when, make, can, like, time, no, just, him, know, take, people, into, year, your, good, some, could, them, see, other, than, then, now, look, only, come, its, over, think, also, back, after, use, two, how, our, work, first, well, way, even, new, want, because, any, these, give, day, most, us');
countWords('the, be, to, of, and, a, in, that, have, I, it, for, not, on, with, he, as, you, do, at, this, but, his, by, from, they, we, say, her, she');
countWords('apple, banana, orange, strawberry, grape, mango, pineapple, lemon, lime, cherry, peach, pear, melon, kiwi, blueberry, raspberry, blackberry, apricot, plum, coconut, avocado, tomato, potato, carrot, broccoli, spinach, lettuce, onion, garlic, pepper, mushroom, chicken, beef, pork, fish, shrimp, tofu, rice, pasta, bread, cheese, milk, butter, egg, sugar, salt, honey, pepper, cinnamon, vanilla, olive, oil, vinegar, sauce, soup, cake, cookie, pie, breakfast, lunch, dinner, snack, brunch, dessert, coffee, tea, water, juice, soda, wine, beer, cocktail, smoothie, programmer, developer, designer, manager, tester, devops, engineer, architect, product, project, sprint, backlog, ticket, bug, feature, deploy, build, test, release, commit, push, pull, merge, branch, master, main, staging, production, localhost, server, client, browser, node, npm, yarn, react, vue, angular, express, flask, django, python, javascript, typescript, java, kotlin, swift, go, rust, sql, nosql, mongodb, postgres, mysql, redis, docker, kubernetes, ci, cd, pipeline, lint, prettier, eslint, jest, mocha, chai, cucumber, selenium, playwright, puppeteer');