var models = [];
var filtersArr = [];
var selectValues={};


var valuesArr = {};
function camelize(str) {
    return str.replace('-',"").replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}


App.DataSettingsController = Ember.Controller.extend({
    model:[],
    graphs : [],   // array to hold graph objects. Show in view with each
    graphData : [],
    graphIndex : 0,   //keeps the count of graphs added(even if removed). Used in naming graph e.g. 'graph 1'
    addGraphBtn : false,  // condition to show the "add graph" button
    choice: ["greater than", "less than", "between","greater than or equal to", "less than or equal to", "equal to" ],
    needs: ['data-fields','data-research','data-results'],

    showTheLastSubFilter: function(filtersArr, id, name, dataFieldId){
        // console.log("showTheLastSubFilter called");
        for(var i=0; i< filtersArr.length; i++) {     //to show the last subfilter each time.
            if(filtersArr[i].dataFieldId == dataFieldId) {
                $(".sub-filters").addClass("hide");
                var subfilterArrLength = filtersArr[i].subFilter.length;
                if (subfilterArrLength > 0){
                    $("#"+filtersArr[i].subFilter[subfilterArrLength-1].id ).removeClass("hide");
//                    $("[subfilter-select="+"'"+ id +"'"+"]").val(filtersArr[i].subFilter[subfilterArrLength-1].id);
                    $("[list-subfilter="+"'"+ filtersArr[i].subFilter[subfilterArrLength-1].id +"'"+"]").trigger( "click" ); //click the last filter on the listso it gets selected
                }
            }
        }

    },
    addDateTimePicker: function (){
        $(".datepicker").datetimepicker({
            format: 'Y/m/d',
            timepicker: false
        });

        $(".hourpicker").datetimepicker({
            format: 'H:i',
            datepicker: false
        });
    },
    bindRemoveSubFilter: function (filtersArr, id){
        // console.log(filtersArr.length);

        for(var i=0; i< filtersArr.length; i++) {
                // console.log("remove filter called");
                var fArray = filtersArr[i];
            // console.log(fArray);
                filtersArr[i].subFilter.forEach(function(sFilter, index){
                    $("[subfilter-select="+"'"+ id +"'"+"]").off();
                    $("[subfilter-select="+"'"+ id +"'"+"]" ).change(function() {
                        $(".sub-filters").addClass("hide");
                        $("#"+$(this).val()).removeClass("hide");

                    });
                    $("[remove-subfilter="+"'"+ sFilter.id +"'"+"]").off();
                    $("[remove-subfilter="+"'"+ sFilter.id +"'"+"]").click(function() {
                        console.log("remove filter found");
                        console.log(filtersArr[i]);
                        console.log(fArray);
                        fArray.subFilter.removeObject(sFilter);



                        $(".sub-filters").addClass("hide");
                        var subfilterArrLength = fArray.subFilter.length;
                        console.log(subfilterArrLength);
                        if (subfilterArrLength > 0){
                            console.log(fArray);
                            console.log("called called");
                            console.log(fArray.subFilter[subfilterArrLength-1].id );
                            $("#"+fArray.subFilter[subfilterArrLength-1].id ).removeClass("hide");
                            $("[subfilter-select="+"'"+ id +"'"+"]").val(fArray.subFilter[subfilterArrLength-1].id);

                        }

                });
            });
        }

    },
    actions: {
      choiceSelect: function(){
          // alert("hello");
          // console.log("hello");
      },
      addGraph: function(){
          if(this.graphs.length == 0){      // if empty we are sure there will be no conflict, so start with 1 again
              graphIndex = 0;
          }
          if(this.graphs.length <= 2){
              graphIndex++;  //1 onwards
              var graph ={
                  name: "graph"+(graphIndex),
                  id: graphIndex,
                  x_axis: "",               //to store x-axis value
                  g_group: []               //to store group values
              }
              this.graphs.pushObject(graph);

              Ember.run.later((function() {  //need to wait till data is populated in template
                  $('[x-axis=' + graph.id + '] option[value=""]').attr("selected", true);   //when graph is added the default value should be selected. Needed because dynamically added options override the default selected option
                  $('[x-axis=' + graph.id + ']').change(function(){
                      graph.x_axis=$(this).val();           //whene changed update x_axis node
                  });
                  $('[g-group=' + graph.id + ']').change(function(){
                      graph.g_group=$(this).val();
                  });
              }), 10);

          }
          if(this.graphs.length > 2){
              $(".add-new-graph").attr("disabled","disabled");  //disable button if size limit reached
          }

          Ember.run.later((function() {
              $('.g-group').select2({
                  width: '100%'
              });
          }), 10);
      },
      removeGraph: function(id){        //remove the graph whose close clicked
          var controller = this;
          this.graphs.forEach(function(graph){
                if(graph.id == id){
                    controller.graphs.removeObject(graph);
                    $(".add-new-graph").removeAttr('disabled');
                }
            })
      },


      showSettings: function(id, dataFieldId, name, values){

        var ctrl = this;
        selectValues["'"+name+"'"]=values;
        //load select2
        $('.data-settings-list').select2({
            tags: true,
            width: '100%'
        });



          ctrl.get("addDateTimePicker").call(ctrl); // bind date time and time pickers
          ctrl.get("showTheLastSubFilter").call(ctrl, filtersArr, id, name, dataFieldId); //when the data field is opened again the last element will be selected

          $("[add-subfilter="+"'"+ dataFieldId +"'"+"]").off();  // unbind this button before binding again
          $("[add-subfilter="+"'"+ dataFieldId +"'"+"]").click(function(){ //bind add-subfilter button
              for(var i=0; i< filtersArr.length; i++) {
                  // console.log(dataFieldId);
                  if(filtersArr[i].dataFieldId == dataFieldId){  // if this data field
                      console.log(filtersArr[i].parentID);
                    $('.filter-message').hide();
                      $("[list-container="+"'"+ dataFieldId +"'"+"]").show(); //show the container in which list of filters are shown
                      filtersArr[i].subFilterIndex++; //record of subFilter array last reached index. Used in naming
                      var subFilterCount = filtersArr[i].subFilterIndex;
                      var subFilter = {
                          name: "Filter "+(subFilterCount),
                          id: "Filter_"+id+dataFieldId+(subFilterCount)
                      }
                      filtersArr[i].subFilter.pushObject(subFilter);  //add subfilter in the subFilter array


                      Ember.run.later((function() {  //needs to be delayed to bind
                         $(".sub-filters").addClass("hide");
                         $("#"+subFilter.id).removeClass("hide");
                          ctrl.get("addDateTimePicker").call(ctrl); // need to bind again
                          $('.data-settings-list').select2({   // need to bind again
                              tags: true,
                              width: '100%'
                          });

                          // bind select all
                          var $field = $('[select-value='+"'"+ subFilter.id+"'"+']');
                          $("[bt="+"'"+ subFilter.id +"'"+"]").click(function(){
                              $field.val(selectValues["'"+name+"'"]).trigger("change");
                          });



                          $("[list-subfilter="+"'"+ subFilter.id +"'"+"]" ).click(function() {  //on select
                              $(".sub-filters").addClass("hide");   //hide all other filters
                              $("#"+subFilter.id).removeClass("hide"); //show the selected one(this filter)
                              $(".filter-list").addClass("filter-list-item");
                              $(".filter-list").removeClass("active");
                              $("[list-subfilter="+"'"+ subFilter.id +"'"+"]").removeClass("filter-list-item");
                              $("[list-subfilter="+"'"+ subFilter.id +"'"+"]").addClass("active");
                              $(".remove-subfilter-btn").addClass("hide");
                              $("[list-subfilter-remove="+"'"+ subFilter.id +"'"+"]").removeClass("hide");

                          });


                          $("[list-subfilter="+"'"+ subFilter.id +"'"+"]").trigger( "click" );

                          // bind choice-select(drop down) and show hide accordingly
                          $("[choice-select="+"'"+ subFilter.id +"'"+"]").off();
                          $("[choice-select="+"'"+ subFilter.id +"'"+"]" ).change(function() {
                              if ($(this).val() == "between"){
                                  $("[input-option="+"'"+ subFilter.id +"'"+"]" ).addClass("hide");
                                  $("[min-max="+"'"+ subFilter.id +"'"+"]").removeClass("hide");
                              }
                              else{
                                  $("[min-max="+"'"+ subFilter.id +"'"+"]").addClass("hide");
                                  $("[input-option="+"'"+ subFilter.id +"'"+"]" ).removeClass("hide");

                              }
                          });

                          //bind remove-subfilter button
                          $("[remove-subfilter="+"'"+ subFilter.id +"'"+"], [list-subfilter-remove="+"'"+ subFilter.id +"'"+"]").off();
                          $("[remove-subfilter="+"'"+ subFilter.id +"'"+"], [list-subfilter-remove="+"'"+ subFilter.id +"'"+"]" ).click(function() {
                              // console.log("remove button called");
                              filtersArr[i].subFilter.forEach(function(sFilter, index){
                                 if(sFilter.name == subFilter.name){                 //if current made subFilter is this one
                                     filtersArr[i].subFilter.removeObject(sFilter);  //remove from array

                                     $(".sub-filters").addClass("hide");            //hide all other filters
                                     var subfilterArrLength = filtersArr[i].subFilter.length;
                                     if (subfilterArrLength > 0){
                                         $("#"+filtersArr[i].subFilter[subfilterArrLength-1].id ).removeClass("hide");  //remove hide from the last filter(select dropdown)
//                                         $("[subfilter-select="+"'"+ id +"'"+"]").val(filtersArr[i].subFilter[subfilterArrLength-1].id);    //select the last filter

                                         Ember.run.later((function() {
                                             $("[list-subfilter="+"'"+ filtersArr[i].subFilter[subfilterArrLength-1].id +"'"+"]").trigger( "click" ); //click the last filter on the list to select it
                                             // console.log("here");
                                         }), 10);
                                     }
                                     else{
                                         $("[list-container="+"'"+ dataFieldId +"'"+"]").hide(); //if no filters, hide the container
                                         $('.filter-message').show();
                                     }

                                 }
                              });
                          });



                      }), 10);

//                      $("[subfilter-select="+"'"+ id +"'"+"]").off();
//                      $("[subfilter-select="+"'"+ id +"'"+"]" ).change(function() {  //on select
//                          $(".sub-filters").addClass("hide");   //hide all other filters
//                          $("#"+$(this).val()).removeClass("hide"); //show the selected one(this filter)
//
//                      });

                      break;
                  };

              }

          });

          // if data settings is opened for the first time, populate the first filter
          Ember.run.later((function() {
              for(var i=0; i< filtersArr.length; i++) {
                  if (filtersArr[i].dataFieldId == dataFieldId && filtersArr[i].subFilterIndex == 0){
                      $( "[add-subfilter="+"'"+ dataFieldId +"'"+"]" ).trigger( "click" ); // call the click function defined above
                  }

              }
          }), 20);



          var $field = $('[name='+"'"+ name+"'"+']');
          $("[bt="+"'"+ name +"'"+"]").click(function(){
              var id = $(this).attr('bt');
              $field.val(selectValues["'"+id+"'"]).trigger("change");
          });
      //Prevent dropdown menu from closing when user clicks on content inside
      $('.dropdown-menu.data-settings-menu').on('click', function(event){
          event.stopPropagation();
        });
      },
      close: function(id, name){
        valuesArr={};
        var removedFilter;
        for(var i=0; i< filtersArr.length; i++) {
          // console.debug(filtersArr[i].id);
          if (filtersArr[i].id == id) {
              removedFilter = filtersArr[i];
              filtersArr.splice(i , 1);
              break;
          }
        }

        //remove subFilters from each element of filtersArray
        for(var i=0; i< filtersArr.length; i++) {
             console.log("subFilters cleared");
             filtersArr[i].subFilter.clear();
             filtersArr[i].subFilterIndex = 0;
        }


     
        for(var i=0; i < this.target.model.length; i++){
          if(this.target.model[i].id == removedFilter.parentID){
              if (removedFilter.ontologyRef != "Analytic" || (removedFilter.ontologyRef == "Analytic" && removedFilter.analyticalParams.length <= 0)){ //check the datafields that can be selected more than once. Same check in Datafields controller
                  this.target.model[i].dataSetAttributes.addObject(removedFilter)
              }
          }
        }


        //**************************** graphs code ****************************************

         this.set('addGraphBtn', false);  //start by setting it false
         for(i=0; i<filtersArr.length;i++){
             if(filtersArr[i].type == "ENUM" || filtersArr[i].ontologyRef == "Analytic"){  //if the case the addGraphBtn is true
                 this.set('addGraphBtn', true);

                 break;
             }
         }
          if(this.get('addGraphBtn') == false){     //if no graphs the empty the graphs array
              this.set('graphs', []);
          }

          if(this.graphs.length < 2){               //remove disable if if limit not reached
              $(".add-new-graph").removeAttr('disabled');
          }

          // update the graphData
          var graphDataArr = [];
          var graphDataIds = [];
          filtersArr.forEach(function(filter){
              if(filter.type == "ENUM" || filter.ontologyRef == "Analytic"){
                  graphDataArr.push(filter);
                  graphDataIds.push(filter.id.toString());          //store filter ids to compare
              }
          });
          this.set('graphData', graphDataArr);


          var gr = this.graphs;
          Ember.run.later((function() {
              gr.forEach(function(graph) {          //for each graph element
                  if(graphDataIds.indexOf(graph.x_axis)== -1){          //if x-axis empty
                      $('[x-axis=' + graph.id + '] option[value=""]').attr("selected", true);
                      graph.x_axis = "";
                  }
                  else{
                      $('[x-axis=' + graph.id + ']').val(graph.x_axis);
                  }

                  if(graph.g_group.length > 0){
                      // remove those values from g-group that are not in graphDataIds. Store in temporary array
                      var temp_g_group = [];
                      graph.g_group.forEach(function(g_group){
                         if (graphDataIds.indexOf(g_group) > -1){
                             temp_g_group.push(g_group);
                         }
                      });
                      graph.g_group = temp_g_group;     //update g_group
//                      $('[g-group=' + graph.id + ']').select2("val", temp_g_group);         //update the select2 value
                      $('[g-group=' + graph.id + ']').val(temp_g_group).trigger("change");

                  }
              });

          }), 10);

       //**************************** graphs code ****************************************


        var filters_array = filtersArr.map(function(data) { return Ember.Object.create(data); });
        //remove filters
        var targetDataType = removedFilter.dataType;
        var elem = $("#data-results-table thead tr th");
        var colIndex;
        var index = elem.filter(
            function(index){
                var labelText = $(this).text();
                //console.log(labelText);
                var result = $.trim(labelText.toLowerCase()) == $.trim(name.toLowerCase());
                if (result)
                    colIndex = index;
                return result;
            }).index();
        //console.log(colIndex)


        if(targetDataType == "String"){ 
          // console.debug('string');
          if(researchTable){
              researchTable.fnFilter('',colIndex);
          }
        }
        else{
            $('.from-input[column_name="'+name+'"]').val('');
            $('.to-input[column_name="'+name+'"]').val('');
            if(researchTable){
              researchTable.fnDraw();
            }
        }
        //end of remove filters


        this.set('models', filters_array);

        // console.debug('filters_array length is: '+filters_array.length);
        if (filters_array.length<=0){
            $("#filters-alert").show();
        }
        if(filters_array.length > 0){
          // console.debug('filters_array.length is: '+filters_array);
          this.set('controllers.data-research.dataFieldsSelected','true');
        } else {
          this.set('controllers.data-research.dataFieldsSelected','');
          // console.debug('there are no data field attributes selected');
        }

      },
      sendFilters: function(){
        // console.debug('sendFilters');
          valuesArr = {};

          //push all the graphs and the values in their fields into this array and show
          var graph_json = [];
          this.graphs.forEach(function(graph){
              var g_group_obj_array = [];
              var g_group_array = $('[g-group='+"'"+ graph.id+"'"+']').val();
              var x_axis_obj_array = $('[x-axis='+"'"+ graph.id+"'"+']').val();

              if (x_axis_obj_array){
                  x_axis_obj_array = [{"dataField": $('[x-axis='+"'"+ graph.id+"'"+']').val()}];
              }
              else{
                  x_axis_obj_array = [];
              }
              if (g_group_array){
                  g_group_array.forEach(function(value){
                      g_group_obj_array.push({"dataField": value});
                  });
              }

              var obj = {
                  "graphid": graph.id,
                  "x-axis": x_axis_obj_array,
                  "y-axis": $('[y-axis='+"'"+ graph.id+"'"+']').val(),
                  "g-group": g_group_obj_array
              }
              graph_json.push(obj);

          });
          console.log('************** graph_json ******************');
          console.log(graph_json);




          //create a JSON request for DataFields
          var filters_json = {
              "dataFields": []
          };
          filtersArr.forEach(function(filter){
              var dataField= {                                              //initialize datafield
                  "id": filter.id,
                  "ontologyRef": filter.ontologyRef,
                  "type": filter.type,
                  "filters": []
              }
              filter.subFilter.forEach(function(subFilter){                 //put each subFilter in filters array of dataField after processing
                  var choice = $('[choice-select='+"'"+ subFilter.id+"'"+']').val();
                  var predicate;
                  var value = [];
                  var max;
                  var min;
                  var date;
                  var time;
                  var subFilterObj = {};

                  if(choice !== undefined){
                      predicate = choice;
                      if(choice == "between"){                              //if between we need min and max
                          min = $('[min='+"'"+ subFilter.id+"'"+']').val();
                          max = $('[max='+"'"+ subFilter.id+"'"+']').val();
                          if(filter.type == "DATE"){                        //if format is date we need UTC format
                              min = min.split("/");
                              min = Date.UTC(min[0], min[1], min[2]);
                              max = max.split("/");
                              max = Date.UTC(max[0], max[1], max[2]);
                          }
                          value = value.concat(min);                        //merge min max in to one array of values
                          value = value.concat(max);
                      }
                      else{
                          value = $('[select-value='+"'"+ subFilter.id+"'"+']').val();
                          if(filter.type == "DATE"){
                              value = value.split("/");
                              value = Date.UTC(value[0], value[1], value[2]);
                          }
                      }
                  }
                  else{
                      predicate = $('[name='+"'"+ subFilter.id+"'"+']:checked').val(); //predicate is either similar or equal
                      value = $('[select-value='+"'"+ subFilter.id+"'"+']').val();
                  }

                  if(filter.ontologyRef == "Analytic" && filter.analyticalParams.length > 0 ){
                      date = $('[data-date='+"'"+ subFilter.id+"'"+']').val();
                      date = date.split("/");
                      date = Date.UTC(date[0], date[1], date[2]);
                      dataField.filters.push({"predicate": "date", "values": [date]});
                      time = $('[data-hour='+"'"+ subFilter.id+"'"+']').val();
                      dataField.filters.push({"predicate": "timestamp", "values": [time]});
//                      subFilterObj.date = date;                                        // inserts into JSON if date and time present
//                      subFilterObj.time = time;

                  }
                  subFilterObj.predicate = predicate;
                  subFilterObj.values = value;

                  dataField.filters.push(subFilterObj);
              });
              filters_json.dataFields.push(dataField);
          });
          
          console.log('************** filters_json ******************');
          console.log(filters_json);
          
          //this function executes only when an attribute(s) is selected
          filtersArr.forEach(function(filter){
//             if (filter.type == "STRING"){
//              console.debug('filter type is String');

//                 var choice = $("#choice_select").val();
//                 console.log(choice);
              var key = camelize(filter.name);
              valuesArr[key] = {};
              valuesArr[key]['filterType'] = "select";


//              var value = $('[select-value='+"'"+ filter.subFilter[0].id+"'"+']').val();
//              valuesArr[key]['data']= value;
              var subFiltersConcatinatedArr = [];
              filter.subFilter.forEach(function(subFilter){
                 var value = $('[select-value='+"'"+ subFilter.id+"'"+']').val();
                  subFiltersConcatinatedArr = subFiltersConcatinatedArr.concat(value);

              })
              valuesArr[key]['data'] = subFiltersConcatinatedArr;
//                 var value = $("select[name='"+filter.name+"'][id='"+filter.id+"']").val();
//                 console.debug('string value is: '+value);


                 // if (value !== null && value !== undefined){

                 // }

//                 code for min max filters
//                 var max = $("select[max='"+filter.id+"']").val();
//                 var min = $("select[min='"+filter.id+"']").val();
//
//                 var key = camelize(filter.name);
//                 valuesArr[key] = {};
//                 if (max != "" && max !== undefined && min != "" && min !== undefined ){
//                     console.debug(max);
//                     console.debug(min);
//                     valuesArr[key]['filterType'] = "range";
//                     valuesArr[key]['data'] = [min, max];
//                 }
//                 else if (max != "" && max !== undefined && (min == "" || min == undefined)) {
//                     console.debug(max);
//                     valuesArr[key]['filterType'] = "upperlimit";
//                     valuesArr[key]['data'] = max;
//                 }
//
//                 else if (min != "" && min !== undefined && (max == "" || max == undefined)) {
//                     console.debug(min);
//                     valuesArr[key]['filterType'] = "lowerlimit";
//                     valuesArr[key]['data'] = min;
//                 }
//                 else{
//                     console.debug(value);
//                     valuesArr[key]['filterType'] = "select";
//                     valuesArr[key]['data'] = value;
//                 }
//                 code for min max filters end

                  // *** commented  ***
//                     var key = camelize(filter.name);
//                     valuesArr[key] = {};
//                     valuesArr[key]['filterType'] = "select";
//                     valuesArr[key]['data'] = value;
              // *** commented  ***
                 
//             }
//             else{
//                 var orignalMin = parseFloat($("input[name='"+filter.name+"'][id='"+filter.id+"'][identifier=min]").data('min'));
//                 var orignalMax = parseFloat($("input[name='"+filter.name+"'][id='"+filter.id+"'][identifier=max]").data('max'));
//                 var value=[];
//                 var min = $("input[name='"+filter.name+"'][id='"+filter.id+"'][identifier=min]").val();
//                 if (min === undefined || min==="" || parseFloat(min) < orignalMin || parseFloat(min) > orignalMax){
//                      min = orignalMin;
//                 }
//                 var max = $("input[name='"+filter.name+"'][id='"+filter.id+"'][identifier=max]").val();
//                 if (max === undefined || max==="" || parseFloat(max) > orignalMax || parseFloat(max) < orignalMin){
//                      max = orignalMax;
//                 }
//
//                 value = [parseFloat(min), parseFloat(max)];
//                 console.debug('range value is: '+value);
//
//
//                 if (value !== null && value !== undefined){
//                     var key = camelize(filter.name);
//                     valuesArr[key] = {};
//                     valuesArr[key]['filterType'] = "range";
//                     valuesArr[key]['data'] = value;
//                 }
//             }
              
          });
          // console.debug('valuesArr');
          // console.log(valuesArr);
          // var val = valuesArr; //only need to use index 0 assuming there is data in research_data
          // var theColumnHeaders = Object.keys(val); 
          // // console.debug(theColumnHeaders);

          // *** commented  ***
          this.set('controllers.data-research.dataFieldsSelected','true');
          this.set('controllers.data-results.jsonRequest','resources/results-testing.txt');
          this.set('controllers.data-results.statsRequest','resources/Sample_JSON_stats.txt');
          // *** commented  ***

      //this is where the code located in ajaxcall.js was
      } 
    }
});
