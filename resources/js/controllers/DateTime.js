
App.DateTimeController = Ember.Controller.extend({
  needs:['data-results','data-research'],
  loadDateTimePicker: function(){
    //switched to http://xdsoft.net/jqplugins/datetimepicker/
    $("#startDate").datetimepicker({
        format: 'Y/m/d',
        // mask: true,
        timepicker: false,
        onShow:function( ct ){
         this.setOptions({
          maxDate:$('#endDate').val()?$('#endDate').val():false
         });
        }
    });

    $("#endDate").datetimepicker({
        format: 'Y/m/d',
        // mask: true,
        timepicker: false,
        onShow:function( ct ){
         this.setOptions({
          minDate:$('#startDate').val()?$('#startDate').val():false
         });
        }
    });

    $("#startTime").datetimepicker({
        format: 'H:i',
        datepicker: false,
        onShow:function( ct ){
         this.setOptions({
            maxTime:$('#endTimeStartValue').val()?$('#endTimeStartValue').val():false
         });
        }
    });

    $("#endTime").datetimepicker({
        format: 'H:i',
        datepicker: false,
        onShow:function( ct ){
         this.setOptions({
            minTime:$('#startTime').val()?$('#startTime').val():false
           });
         },
         onChangeDateTime: function(){
         var newStartValue = $('#endTime').val();
         // console.debug('newStartValue '+newStartValue);
          $('#endTimeStartValue').val(newStartValue);
        }
    });    

  },
  actions:{
      grabDateTime: function(){

        /**

        // console.debug('grabDateTime');
        //set the days
        var day = [];
        day[0] = "Sunday";
        day[1] = "Monday";
        day[2] = "Tuesday";
        day[3] = "Wednesday";
        day[4] = "Thursday";
        day[5] = "Friday";
        day[6] = "Saturday";


        //set the months
        var month = [];
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";


        var startDate = $("#startDate").val();
        var endDate = $("#endDate").val();

        var startTime = $("#startTime").val();
        var endTime = $("#endTime").val();


        // console.debug(startDate);
        // console.debug(endDate);
        // console.debug(startTime);
        // console.debug(endTime);

        var startDayObject = new Date(startDate);
        var endDayObject = new Date(endDate);
        

        //startTime
        var H = +startTime.substr(0, 2);
        var h = (H % 12) || 12;
        var ampm = H < 12 ? "AM" : "PM";
        startTime = h + startTime.substr(2, 3) + ampm;
        this.set('controllers.data-results.startTime',startTime);
        
        //endTime
        var H = +endTime.substr(0, 2);
        var h = (H % 12) || 12;
        var ampm = H < 12 ? "AM" : "PM";
        endTime = h + endTime.substr(2, 3) + ampm;
        this.set('controllers.data-results.endTime',endTime);

        //startDay
        var startDayIndex = startDayObject.getDay();
        startDay = day[startDayIndex];
        // console.debug('startDay :'+startDay);

        this.set('controllers.data-results.startDay',startDay);

        //startMonth
        var startMonthIndex = startDayObject.getMonth();
        startMonth = month[startMonthIndex];
        // console.debug('startMonth :'+startMonth);

        this.set('controllers.data-results.startMonth',startMonth);

        //startDate
        var startDate = startDayObject.getDate();
        // console.debug('startDate :'+startDate);

        this.set('controllers.data-results.startDate',startDate);

        //startYear
        var startYear = startDayObject.getFullYear();
        // console.debug('startYear :'+startYear);

        this.set('controllers.data-results.startYear',startYear);

        
        //endDay
        var endDayIndex = endDayObject.getDay();
        endDay = day[endDayIndex];
        // console.debug('endDay :'+endDay);

        this.set('controllers.data-results.endDay',endDay);


        //endMonth
        var endMonthIndex = endDayObject.getMonth();
        endMonth = month[endMonthIndex];
        // console.debug('endMonth :'+endMonth);

        this.set('controllers.data-results.endMonth',endMonth);

        //endDate
        var endDate = endDayObject.getDate();
        // console.debug('endDate :'+endDate);

        this.set('controllers.data-results.endDate',endDate);

        //endYear
        var endYear = endDayObject.getFullYear();
        // console.debug('endYear :'+endYear);

        this.set('controllers.data-results.endYear',endYear);

        if(startDate && endDate && startTime && endTime){
            this.set('controllers.data-research.dateTimeSet','true');
        } else {
            // console.debug('choose your dates and times');
        }
        **/
      }
   }
});


