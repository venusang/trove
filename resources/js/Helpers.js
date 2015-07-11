Handlebars.registerHelper("ifDataTypeValuesPresent", function(property, fn)
{
    console.debug("checking if values exist");
    var context = (fn.contexts && fn.contexts[0]) || this;

    var func = function(result)
    {
        if (result !== undefined && result.length > 0)
        {
            console.debug("ifDataTypeValuesPresents called");
            console.log(result.length);
            return result;
        }

        //return result != undefined && result != null;
    };

    return Ember.Handlebars.bind.call(context, property, fn, true, func, func);
});

Handlebars.registerHelper("ifDataTypeEnum", function(property, fn)
{

console.debug("checking enum");
    var context = (fn.contexts && fn.contexts[0]) || this;

    var func = function(result)
    {
        if (result == "ENUM")
        {
            console.debug("ifDataTypeEnum called");
            return result;
        }

        //return result != undefined && result != null;
    };

    return Ember.Handlebars.bind.call(context, property, fn, true, func, func);
});

Handlebars.registerHelper("ifDataTypeDate", function(property, fn)
{

    var context = (fn.contexts && fn.contexts[0]) || this;

    var func = function(result)
    {
        if (result == "DATE")
        {
            console.debug("ifDataTypeDate called");

            return result;
        }

        //return result != undefined && result != null;
    };

    return Ember.Handlebars.bind.call(context, property, fn, true, func, func);
});

Handlebars.registerHelper("ifDataTypeTimeStamp", function(property, fn)
{

    var context = (fn.contexts && fn.contexts[0]) || this;

    var func = function(result)
    {
        if (result == "TIMESTAMP")
        {
            console.debug("ifDataTypeTimeStamp called");

            return result;
        }

        //return result != undefined && result != null;
    };

    return Ember.Handlebars.bind.call(context, property, fn, true, func, func);
});

Handlebars.registerHelper("ifDataTypeNumeric", function(property, fn)
{

    var context = (fn.contexts && fn.contexts[0]) || this;

    var func = function(result)
    {
        if (result == "INTEGER" || result == "DOUBLE" || result == "FLOAT"|| result == "LONG")
        {
            console.debug("ifDataTypeNumeric called");

            return result;
        }

        //return result != undefined && result != null;
    };

    return Ember.Handlebars.bind.call(context, property, fn, true, func, func);
});


Handlebars.registerHelper("ifDataTypeDouble", function(property, fn)
{
    var context = (fn.contexts && fn.contexts[0]) || this;

    var func = function(result)
    {
        if (result !== "String")
        {
            console.debug("ifDataTypeDouble called");
            return result;
        }

        //return result != undefined && result != null;
    };

    return Ember.Handlebars.bind.call(context, property, fn, true, func, func);
});

Handlebars.registerHelper("ifDataTypeAnalyticWithParams", function(property, fn)
{
    var context = (fn.contexts && fn.contexts[0]) || this;


    var func = function(model)
    {
        console.debug(model);
        // if ontology ref is analytic and analytical params are not empty
        if (model && model.ontologyRef == "Analytic" && (model.analyticalParams !== undefined && model.analyticalParams.length > 0))
        {
            console.debug("ifDataTypeAnalyticWithParams called");
            return model;
        }

        //return result != undefined && result != null;
    };

    return Ember.Handlebars.bind.call(context, property, fn, true, func, func);
});


Handlebars.registerHelper("ifDataTypeAnalytic", function(property, fn)
{
    var context = (fn.contexts && fn.contexts[0]) || this;


    var func = function(result)
    {
        console.debug(result);
        if (result == "Analytic")
        {
            console.debug("ifDataTypeAnalytic called");
            return result;
        }

        //return result != undefined && result != null;
    };

    return Ember.Handlebars.bind.call(context, property, fn, true, func, func);
});

Handlebars.registerHelper("ifDataTypeAnalyticParamsEmpty", function(property, fn)
{
    var context = (fn.contexts && fn.contexts[0]) || this;


    var func = function(result)
    {
        console.debug(result);
        if (result === undefined || result.length == 0)
        {
            console.debug("ifDataTypeAnalyticParamsEmpty called and returned result");
            return result;
        }

    };

    return Ember.Handlebars.bind.call(context, property, fn, true, func, func);
});

//REVISIT:  Should probably place this document.ready call in a view but it's not working

$(document).ready(function(){
//    $(window).load(function () {
//        setTimeout(function(){
//            $("[name='field-select']").select2();
//        }, 100);
//    });
    //sq footage filter
//    $.fn.dataTable.ext.search.push(
//        function( settings, data, dataIndex ) {
//            var min = parseInt( $('.from-input[column_name="Sq Footage"]').val(), 10 );
//            var max = parseInt( $('.to-input[column_name="Sq Footage"]').val(), 10 );
//            var sqFootage = parseFloat( data[5] ) || 0; // use data for the age column
//
//            if ( ( isNaN( min ) && isNaN( max ) ) ||
//                ( isNaN( min ) && sqFootage <= max ) ||
//                ( min <= sqFootage   && isNaN( max ) ) ||
//                ( min <= sqFootage   && sqFootage <= max ) )
//            {
//                return true;
//            }
//            return false;
//        }
//    );
//    //Daily filter
//    $.fn.dataTable.ext.search.push(
//        function( settings, data, dataIndex ) {
//            var min = parseInt( $('.from-input[column_name="Daily"]').val(), 10 );
//            var max = parseInt( $('.to-input[column_name="Daily"]').val(), 10 );
//            var daily = parseFloat( data[3] ) || 0; // use data for the age column
//
//            if ( ( isNaN( min ) && isNaN( max ) ) ||
//                ( isNaN( min ) && daily <= max ) ||
//                ( min <= daily   && isNaN( max ) ) ||
//                ( min <= daily   && daily <= max ) )
//            {
//                return true;
//            }
//            return false;
//        }
//    );
//
//
//    //hourly filter
//    $.fn.dataTable.ext.search.push(
//        function( settings, data, dataIndex ) {
//            var min = parseInt( $('.from-input[column_name="Hourly"]').val(), 10 );
//            var max = parseInt( $('.to-input[column_name="Hourly"]').val(), 10 );
//            var hourly = parseFloat( data[2] ) || 0; // use data for the age column
//
//            if ( ( isNaN( min ) && isNaN( max ) ) ||
//                ( isNaN( min ) && hourly <= max ) ||
//                ( min <= hourly   && isNaN( max ) ) ||
//                ( min <= hourly   && hourly <= max ) )
//            {
//                return true;
//            }
//            return false;
//        }
//    );
//
//    //person income filter
//    $.fn.dataTable.ext.search.push(
//        function( settings, data, dataIndex ) {
//            var min = parseInt( $('.from-input[column_name="Person Income"]').val(), 10 );
//            var max = parseInt( $('.to-input[column_name="Person Income"]').val(), 10 );
//            var personIncome = parseFloat( data[4] ) || 0; // use data for the age column
//
//            if ( ( isNaN( min ) && isNaN( max ) ) ||
//                ( isNaN( min ) && personIncome <= max ) ||
//                ( min <= personIncome   && isNaN( max ) ) ||
//                ( min <= personIncome   && personIncome <= max ) )
//            {
//                return true;
//            }
//            return false;
//        }
//    );
//
//    //peak load filter
//    $.fn.dataTable.ext.search.push(
//        function( settings, data, dataIndex ) {
//            var min = parseInt( $('.from-input[column_name="Peak Load"]').val(), 10 );
//            var max = parseInt( $('.to-input[column_name="Peak Load"]').val(), 10 );
//            var peakLoad = parseFloat( data[6] ) || 0; // use data for the age column
//
//            if ( ( isNaN( min ) && isNaN( max ) ) ||
//                ( isNaN( min ) && peakLoad <= max ) ||
//                ( min <= peakLoad   && isNaN( max ) ) ||
//                ( min <= peakLoad   && peakLoad <= max ) )
//            {
//                return true;
//            }
//            return false;
//        }
//    );

});