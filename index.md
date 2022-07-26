---
title: About Me
---

{% include header.html %}

## Me In 10 Seconds

I have been working as a web application developer since 2005.

My technical focus includes Typescript, JavaScript, HTML, CSS, NodeJs and React.

I have lived and learned in three different countries.

I ran my first marathon in 2020 and summited my first 4000m peak in 2022.

## What Am I Doing Now?

I am part of the team that creates cutting edge trading tools for the leading
Swiss private bank,
<a href="https://www.juliusbaer.com">Julius Bär</a> in the beautiful city of
<a href="https://www.zuerich.com/en">Zurich</a>.

<h2><a href="/core-values">Core Values</a></h2>

## Get In Touch

<ul>
  <li>
    <a href="mailto:{{ site.data.site.email }}">{{ site.data.site.email }}</a>
  </li>
  <li><a href="https://twitter.com/tangiblej">Twitter</a></li>
  <li><a href="https://github.com/tjunghans">Github</a></li>
  <li>
    <a href="https://www.linkedin.com/in/thomasjunghans/">LinkedIn</a>
  </li>
</ul>

## Posts
<ul>
  {% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
