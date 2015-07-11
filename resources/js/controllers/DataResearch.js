
App.DataResearchController = Ember.Controller.extend({

	dateTimeSet:'',
	dataFieldsSelected:'',
    needs: ['data-settings','data-fields','data-results','date-time'],
    results: [],
    actions:{
		validator: function(){
            // console.log("function calledwith filters");
//            console.log("filter array: "+filtersArr);
			this.get('controllers.date-time').send('grabDateTime');
//
			var dateTimeSet = this.get('dateTimeSet');
			var dataFieldsSelected = this.get('dataFieldsSelected');
//
//
			this.get('controllers.data-settings').send('sendFilters');


//          *** Validation code starts here ***
//			var validationErrors = "";
//			if(_.isEmpty(valuesArr)){
//				validationErrors += "- Select your Data Field attribute(s)<br/>";
//			}else {
//				for (key in valuesArr) {
//					if (_.isEmpty(valuesArr[key]['data'])){
//						temp = key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
//							return str.toUpperCase();
//						});
//						validationErrors += "- Data Field: " + temp + " is empty <br/> ";
//
//					} else if(_.isNaN(valuesArr[key]['data'][0]) || _.isNaN(valuesArr[key]['data'][1])) {
//						temp = key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
//							return str.toUpperCase();
//						});
//						validationErrors += "- Data Field: " + temp + " is empty <br/> ";
//					}
//				}
//			}
//			//Disable time and date validation for demo
//			// if(!dateTimeSet || $("#startTime").val() == "" || $("#endTime").val() == ""){
//			// 	validationErrors += (validationErrors == "") ? "- Select your Date & Time Range" : "- Select your Date & Time Range<br/> ";
//			// }
//
//			if(validationErrors != ""){
//				$("#validation-info div").html(validationErrors);
//				$("#submit-info").hide();
//				$("#validation-info").removeClass("out");
//				$("#validation-info").addClass("in");
//				$("#validation-info").show();
//                if (filtersArr.length>0) {
//                    this.get('controllers.data-results').send('clearTable');
//                }
//                else{
//                    $("#data-results-table_wrapper").hide();
//                }
//			} else {
//				this.set('controllers.data-results.showResults','true');
//				this.get('controllers.data-results').send('loadResultsIntoTable');
//				// $("#submit-info").show();
//				$("#validation-info").hide();
//			}
//            *** validation code ends here ***

                if (filtersArr.length>0) {
                    this.set('controllers.data-results.showResults','true');
                    this.get('controllers.data-results').send('loadResultsIntoTable');
                    $("#data-results-table_wrapper").show();
                    $("#data-results-table").show();
                }
                else{
                    $("#data-results-table_wrapper").hide();
                }
			
		}
    }
});