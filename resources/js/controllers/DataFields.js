App.DataFieldsController = Ember.Controller.extend({
    model: [],
    classNames: ["data-fields-wrapper"],
    needs: ["data-settings"],
    actions:{
      inputSelect:function(){
      },
      onSelect: function(fieldParentID, fieldID, modelOriginal){
        console.debug('onSelect DataFields');
        $("#filters-alert").hide();
        var theModel = this.get('model');
        for(var i=0; i < this.target.model.length; i++){
           var obj = this.target.model[i].dataSetAttributes.contains(model);
        }

        var model = jQuery.extend({}, modelOriginal); //need to copy the object as for some more than instance can exist in filtersArr
        // console.debug(model);
        // console.debug(model.ontologyRef);
        // console.debug(model.type);
        model.parentID = fieldParentID;
        model.fromVal = "";
        model.toVal = "";
        model.subFilter = Em.A([

        ]);
        model.subFilterIndex = 0;
        var d = new Date();
        var n = d.getTime();
        model.dataFieldId = n; //unique
        filtersArr.push(model);

          for(var i=0; i< filtersArr.length; i++) {
              // console.log("subFilters cleared");
              filtersArr[i].subFilter.clear();
              filtersArr[i].subFilterIndex = 0;
          }
        if (model.ontologyRef != "Analytic" || (model.ontologyRef == "Analytic" && model.analyticalParams.length <= 0)){
            // console.log("here");
            for(var i=0; i < this.target.model.length; i++){
                this.target.model[i].dataSetAttributes.removeObject(modelOriginal);
            }
        }

        var dataS = this.get('controllers.data-settings');

        var graphDataArr = []
        filtersArr.forEach(function(filter){
            if(filter.type == "ENUM" || filter.ontologyRef == "Analytic"){
                console.log(filter.id);
                graphDataArr.push(filter);
            }
        });
        dataS.set('graphData', graphDataArr);

        var filters_array = filtersArr.map(function(data) { return Ember.Object.create(data); });
        dataS.set('models', filters_array);



        var graphs = dataS.get('graphs');
        Ember.run.later((function() {
            graphs.forEach(function(graph) {
                if(graph.x_axis != ""){      //populate the stored value in x-axis if not empty
                    $('[x-axis=' + graph.id + ']').val(graph.x_axis);
                }
                else{                       //select the default option "select x-axis"
                    $('[x-axis=' + graph.id + '] option[value=""]').attr("selected", true);
                    graph.x_axis = "";
                }
//                $('[g-group=' + graph.id + ']').select2("val", graph.g_group);          //populate the stored value
                $('[g-group=' + graph.id + ']').val(graph.g_group).trigger("change");
            });

        }), 10);

        if(graphs.length < 2 && (model.type == "ENUM" || model.ontologyRef == "Analytic")){   //enable the button and remove disabled attribute
           dataS.set('addGraphBtn', true);
           $(".add-new-graph").removeAttr('disabled');
        }

      }
    }
            
});
