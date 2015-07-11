App.DataSettingsView = Ember.View.extend({
  classNames: ['data-settings-wrapper'],
  didInsertElement: function(){
      $('.data-settings-list').select2();
    }
});
