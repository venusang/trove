App.DataResearchView = Ember.View.extend({
    didInsertElement:function(){
	    $('#FilterForm').validator({
	      disable: true
	    });
    }
});
