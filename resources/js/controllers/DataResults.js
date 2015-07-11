App.DataResultsController = Ember.Controller.extend({
    startDay:'',
    startMonth:'',
    startDate:'',
    startYear:'',
    endDay:'',
    endMonth:'',
    endDate:'',
    endYear:'',
    startTime:'',
    endTime:'',
    showResults:'',
    jsonRequest: '',
    actions:{
        clearTable: function(){
            var table = $("#data-results-table").dataTable();
            table.fnDestroy();
            $("#data-results-table thead").html('');
            $("#data-results-table tbody").html('');
            console.debug('Cleared');
        },
        loadResultsIntoTable: function(){

            var jsonRequest = this.get('jsonRequest');
            var statsRequest = this.get('statsRequest');
            var stats;
            // console.debug(jsonRequest);
            Ember.$.getJSON(jsonRequest).then(function(data){

                var research_data = data._embedded.temporyResults;
                // console.log(research_data);
                for(key in valuesArr){
                    if(valuesArr[key]['filterType'] == "select"){
                        var filterData = valuesArr[key]['data'];
                        key = key.split("(")[0];
                        key = key.split("2")[0];
                        research_data = _.filter(research_data, function(data){

                            // console.log(data[key]);

                            return _.contains(filterData, data[key])
                        });
                        // console.log(research_data);
                    }
                    else if(valuesArr[key]['filterType'] == "upperlimit"){
                        var filterData = valuesArr[key]['data'];
                        research_data = _.filter(research_data, function(data){
                            return (data[key] <= filterData)
                        });
                    }
                    else if(valuesArr[key]['filterType'] == "lowerlimit"){
                        var filterData = valuesArr[key]['data'];
                        research_data = _.filter(research_data, function(data){
                            return (data[key] >= filterData)
                        });
                    }
                    else if(valuesArr[key]['filterType'] == "range"){
                        var filterData = valuesArr[key]['data'];
                        research_data = _.filter(research_data, function(data){
                            return (data[key] >= filterData[0] && data[key] <= filterData[1])
                        });
                    }
                    // console.debug('the key is: '+key);
                }

                // console.log(research_data);
                // console.log(val);
                var val = research_data[0]; //only need to use index 0 assuming there is data in research_data
                if (val){
                    Ember.$.getJSON(statsRequest).then(function(data){
                        stats= data.stats[0];
                        var camelStats = camelize(stats.name);
                    var theColumnHeaders = Object.keys(val);
                    var table_head ="";

                    //we are using theColumnHeaders.length-1 because we do not want the _link property at the end
                    for (var i=0; i < theColumnHeaders.length-1; i++){
                        // console.debug('theName for: '+i+ ' is ' +theColumnHeaders[i]);
                        console.log(camelStats);
                        if (camelStats === theColumnHeaders[i]){
                            table_head += '<th>'+theColumnHeaders[i]+'<div class="stats"> min: '+stats.min+'<br /> max: '+stats.max+'<br /> sum: '+stats.sum+'<br /> avg: '+stats.avg+'</div></th>';
                            console.log(table_head);
                        }
                        else{
                            table_head += '<th>'+theColumnHeaders[i]+'</th>';
                        }
                    }
                    var updated_table_head  = '<tr>'+table_head+'</tr>';
                    // console.debug('table_head is: '+table_head);

                    // console.debug(theColumnHeaders);

                    //this instantiates the dataTable object
                    var table = $("#data-results-table").dataTable();
                    table.fnDestroy();

                    var table_rows  = "";
                    var table_columns = "";



                        for (var i = 0; i < research_data.length; i++ ){
                            for(k=0; k < theColumnHeaders.length-1; k++){
                                    table_columns += '<td>'+research_data[i][theColumnHeaders[k]]+'</td>';
                            }

                            // console.debug('this is row #: '+i);
                            table_rows +='<tr>'+table_columns+'</tr>';
                            table_columns ='';
                            // console.debug(table_rows);
                        }

                        console.debug('TABLE ROWS CALLED AGAIN');
                        console.debug("tr"+table_rows);
                        // console.debug(table_rows);
                        $("#data-results-table thead").html(updated_table_head);
                        $("#data-results-table tbody").html(table_rows);


                        researchTable = $("#data-results-table").dataTable({
                            "pageLength": 5,
                            "order": [ 1, 'asc' ]
                            //"dom":'<"top"l>rt<"bottom"<"pull-left"i><"pull-right"p>><"clear">'
                        });
                    });
                }
                else{
                    $("#data-results-table_wrapper").hide();
                    $("#data-results-table").hide();
                }
            });
          }     
    }
});