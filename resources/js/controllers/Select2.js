App.TestSelect2Controller = Ember.Controller.extend({
	
	actions:{
		onSelect: function(){
			console.debug('onSelect');
		},
		getClickedValue: function(){
			$('.data-fields-set-val').on('click',function(){
		    console.debug('data-fields clicked');
		  });
		}
	}
});