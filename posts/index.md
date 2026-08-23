---
title: All Posts
description: "All posts by Thomas Junghans."
---

<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%-d. %B %Y" }}</small></li>
{% endfor %}
</ul>
