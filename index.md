---
title: About Me
---

<img src="/assets/img/thomas-junghans_web_sw.jpg" alt="Photo of me" class="lg:w-1/2 w-full" />

## Me In 10 Seconds

I'm South African with German roots and Swiss citizenship. <br />
I have been working as a [web application](https://en.wikipedia.org/wiki/Web_application) developer since 2005. <br />
I love spending time with my daughter, friends and family. I enjoy multi-day trekking tours in the mountains and (trail) running.

## What Am I Doing Now?

See [my "now" page](/now).

## Core Values

See [my "core values" page](/core-values).

## Favourite Quotes

See [my "favourite quotes" page](/favourite-quotes).

## Reading

See [my "Reading" page](/reading).

## Posts

<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%-d. %B %Y" }}</small></li>
{% endfor %}
</ul>

You can find some of my [thoughts on Medium](https://medium.com/@tangiblej) as well.

## Get In Touch

- [{{ site.data.site.email }}](mailto:{{ site.data.site.email }})
- [Github](https://github.com/tjunghans)
- [LinkedIn](https://www.linkedin.com/in/thomasjunghans/)
- [RSS Feed](/feed.xml)
