---
title: About Me
---

<img src="/assets/img/thomas-junghans_web_sw.jpg" alt="Photo of me" class="lg:w-1/2 w-full" />

## Me In 10 Seconds

I'm South African with German roots and Swiss citizenship. <br />
I started out as a [web application](https://en.wikipedia.org/wiki/Web_application) developer in 2005, and today I lead a development team at a premier Swiss private bank, building trading platforms that empower Relationship Managers. <br />
I love spending time with my daughter, friends and family. I enjoy multi-day trekking tours in the mountains and (trail) running.

## More About Me

- [What I'm doing now](/now)
- [Core values](/core-values)
- [Favourite quotes](/favourite-quotes)
- [Reading](/reading)

## Posts

<ul>
{% for post in site.posts limit: 5 %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%-d. %B %Y" }}</small></li>
{% endfor %}
</ul>

[View all posts](/posts).

You can find some of my [thoughts on Medium](https://medium.com/@tangiblej) as well.

## Get In Touch

- [{{ site.data.site.email }}](mailto:{{ site.data.site.email }})
- [Github](https://github.com/tjunghans)
- [LinkedIn](https://www.linkedin.com/in/thomasjunghans/)
- [RSS Feed](/feed.xml)
