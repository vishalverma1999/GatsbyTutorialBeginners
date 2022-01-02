---
title: The Dojo Coffee House
stack: HTML & CSS
slug: the-dojo-coffee-house
date: 2021-01-01T00:00:00+00:00
---

Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.

### Lorem ninja ipsum dolor

Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.

<!--
md = markdown

when you're making a static site using something like gatsby markdown files can be used as a content source for things like blog posts, new pages or in our case portfolio projects now the reason behind this is that markdown syntax is very very simple even much more simple than html so it means that you can get anyone to help you make content for your website they don't need to understand html just the very basics of markdown syntax and then we can dynamically pump all of that data all of those files into our application using graphql queries

so markdown syntax allows us to format text, like double asterisks to  bold the text, single asterix-italic, headings using hash if you want to explore that you can read this guide - https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#hiding-content-with-comments


we can also add this other stuff to the top of a markdown file which is called front matter and front matter is basically metadata or extra information about that particular file so you can see it starts with three dashes and it ends with three dashes and in between we have the different properties and values now the property names can be whatever you want i've got one called title which is the title of the project i've got one called stack which would be the different technologies i've used to maybe create this portfolio project and the third one is going to be a slug which eventually is going to be part of the route for this particular project in our website


 we need to use what's known as a transformer plugin in gatsby. Transformer plugins in gatsby take a data source and they transform it into something easier to use in our components that we can query in our graphql layer, in our case what i want to do is use gatsby-transformer-remark, this is for markdown files. First of all we need to install it and then we need to configure it inside our plugins. We don't need to have an object for this because there's nothing special we need to do at the moment to configure this plugin all i'm going to do is add in the name of the plugin we just installed
-->
