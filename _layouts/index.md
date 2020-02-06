<h2>{{ page.collection }}</h2>
<ul>
{% for item in site[page.collection] %}
  <li>
    <a href="{{ item.url }}">{{ item.title }}</a>
  </li>
{% endfor %}
</ul>
