var apiurl = "https://54.227.253.223:8443/sunstoneApi/results"
var testingurl ="resources/results-testing.txt";
//http://stackoverflow.com/questions/15608431/ajax-promise-without-ember-data
$.ajax({
   type: "POST",
   url: testingurl+"?startdate=" + StartDateTimeEpoch + "&enddate=" + EndDateTimeEpoch,
   success: function(){
     console.debug('success');
     console.debug('this is where you update the data being used to display in the DataTable');
     console.debug(this);
     var datar = this.get('controllers.data-results');
     console.debug(datar);
   },
   error: function(xhr, error){
     console.debug(xhr);
     console.debug(error);
   }
 });