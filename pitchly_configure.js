Template.configureLoginServiceDialogForPitchly.helpers({
  siteUrl: () => Meteor.absoluteUrl(),
});

Template.configureLoginServiceDialogForPitchly.fields = () => [
  {property: 'clientId', label: 'App ID'},
  {property: 'secret', label: 'App Secret'}
];
