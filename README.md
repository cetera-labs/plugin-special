# plugin-special
## Usage
```
<body>
<!-- place after open body tag -->
{% widget 'Special.Panel' with {} %}
<!-- some html code -->
```

## Widget params
### For subdomain use
Config subdomain special.site.name
```
{% widget 'Special.Panel' with { url_normal: "site.name", css: "path_to_additional_css"} %}
```
### For cookie mode instead additional subdomain
Additional domain is not required; 
```
<body>
<!-- Button, link or another html tag with data attribute for activation required -->
<a data-action="widget-special-toggler" class="some_class">Enable special version</a>
{% widget 'Special.Panel' with { cookie_mode: true, css: "path_to_additional_css"} %}
```