App.DateTimeView = Ember.View.extend({
  classNames:['datetime-wrapper'],
  didInsertElement:function(){
    this.get('controller').loadDateTimePicker();
  }
});

