$(function(){
  $('[data-action="widget-special-toggler"]').click(function (e) {
    const key = 'widget-special-enable';
    e.stopPropagation();
    e.preventDefault();
    if ($.cookie(key) === 'Y') {
      $.cookie(key, 'N', {expires: 365, path: '/'});
    } else {
      $.cookie(key, 'Y', {expires: 365, path: '/'});
    }
    location.reload();
  })
});
