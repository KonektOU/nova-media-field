let mix = require('laravel-mix');

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .js('resources/js/url-field.js', 'js')
  .js('resources/js/toolbar.js', 'js')
  .vue()
  .sass('resources/sass/field.scss', 'css');
