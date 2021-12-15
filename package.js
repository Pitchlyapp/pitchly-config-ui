Package.describe({
  name: 'pitchly:pitchly-config-ui',
  version: '1.0.0',
  summary: 'Blaze configuration templates for Pitchly OAuth',
  documentation: 'README.md',
  git: 'https://github.com/Pitchlyapp/pitchly-config-ui'
});

Package.onUse(api => {
  api.use('ecmascript', 'client');
  api.use('templating@1.4.0', 'client');
  api.addFiles('pitchly_login_button.css', 'client');
  api.addFiles(
    ['pitchly_configure.html', 'pitchly_configure.js'],
    'client'
  );
});
