const mix = require('laravel-mix');



mix.js('resources/js/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css');

mix.styles([
   'resources/css/admin/bootstrap.min.css',
   'resources/css/admin/dashboard.css',
   'public/store/css/custom.css',
   'public/store/css/slick.css'
], 'public/css/admin.css');

mix.styles([
  'public/css/bootstrap.css',
  'public/css/theme.css',
  'public/css/skins/skin-default.css',
  'public/css/custom.css',
], 'public/css/all.css');

mix.scripts([
  'public/js/plugins/modernizr.js',
  'public/js/plugins/jquery.easing.js',
  'public/js/plugins/jquery-ui.min.js',
  'public/js/plugins/jquery.parallax.js',
  'public/js/plugins/isotope.pkgd.min.js',
  'public/js/plugins/jquery.magnific-popup.min.js',
  'public/js/plugins/sticky-sidebar.js',
],
  'public/js/plugins.js'
);

mix.js([
  'resources/js/checkout.js',
],
  'public/js/checkout.js'
);




mix.scripts([
  'public/store/js/bootstrap.min.js',
  'public/store/js/material.min.js',
  'public/store/js/jquery.validate.min.js',
  'public/store/js/material-dashboard-v=1.3.0.js',
  'public/store/js/jquery.bootstrap-wizard.js',
  'public/store/js/scripts.js',
],
  'public/js/dashboard.js'
);












   