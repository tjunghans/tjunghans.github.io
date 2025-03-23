---
title: About Me
---

<img src="/assets/img/thomas-junghans_web_sw.jpg" alt="Photo of me" class="lg:w-1/2 w-full" />

## Me In 10 Seconds
<p>
  I'm South African with German roots and Swiss citizenship. <br /> I have been working as a
  {% include link.html href="https://en.wikipedia.org/wiki/Web_application" text="web application" %}
  developer since 2005.<br /> I love spending time with my daughter, friends and family. I enjoy multi day
  trekking tours in the mountains and (trail) running.
</p>

## What Am I Doing Now?
<p>See {% include link.html text="my \"now\" page" href="/now" %}.</p>

## Core Values
<p>See {% include link.html text="my \"core values\" page" href="/core-values" %}.</p>

## Favourite Quotes
<p>See {% include link.html text="my \"favourite quotes\" page" href="/favourite-quotes" %}.</p>

## Posts
<ul class="px-4 mb-2">
  {% for post in site.posts %}
  <li class="list-disc">
    <a class="underline text-primary" href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>

<p>You can find some of {% include link.html href="https://medium.com/@tangiblej" text="my
  thoughts on Medium." %} as well.</p>

## Get In Touch
<ul class="px-4">
  <li class="list-disc">
    {% include link.html href="mailto:thomas.junghans@gmail.com" text=site.data.site.email %}
  </li>
  <li class="list-disc">{% include link.html href="https://github.com/tjunghans" text="Github" %}</li>
  <li class="list-disc">
    {% include link.html href="https://www.linkedin.com/in/thomasjunghans/" text="LinkedIn" %}
  </li>
</ul>