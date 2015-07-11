App.DataFieldsView = Ember.View.extend({
  didInsertElement: function(){
    var updatedList=[];
    var dataf = this.get('controller');
    //set to parentController model - parentController is DataResearch
    //and drill down to grab the dataFieldType properties
    var originalList= dataf.parentController.model;
    dataf.set('model',originalList);

  }
});