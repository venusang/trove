
App.HighchartPieComponent = Ember.Component.extend({
    tagName: 'div',
    classNames: ['chart'],

    dataChanged: function() {
        return this.rerender();
    }.observes('data'),

    renderChart: function() {
        console.log(this.get('data'));
        return this.$().highcharts({
            chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: this.get('data')
            }]
        });
    }.on('didInsertElement'),

    willDestroyElement: function() {
        this.$().highcharts().destroy();
    }
});

App.GoogleMapsComponent = Ember.Component.extend({
  insertMap: function() {
    var container = this.$(".map-canvas");

    var options = {
      center: new google.maps.LatLng(this.get("latitude"),
      this.get("longitude")),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    new google.maps.Map(container[0], options);
    this.set('map', new google.maps.Map(container[0], options));
    this.setMarkers();
  }.on('didInsertElement'),

  coordinatesChanged: function() {
    var map = this.get('map');

    if (map) map.setCenter(new google.maps.LatLng(this.get('latitude'), this.get('longitude')));
  }.observes('latitude', 'longitude'),

  setMarkers: function() {
    var map = this.get('map'),
        markers = this.get('markers');

    markers.forEach(function(marker){
      new google.maps.Marker({
        position: new google.maps.LatLng(marker.get('latitude'), marker.get('longitude')),
        map: map
      });
    }, this);
  }.observes('markers.@each.latitude', 'markers.@each.longitude')

});

App.HighchartDonutComponent = Ember.Component.extend({
    tagName: 'div',
    classNames:['chart'],

    dataChanged:function(){
      return this.rerender();
    }.observes('data'),

    renderChart: function() {
        console.log(this.get('data'));
        return this.$().highcharts({
            chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares',
            align: 'center',
            verticalAlign: 'middle',
            y: 0
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 270,
                center: ['50%', '50%'],
                showInLegend: true,
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                ['Chrome', 12.8],
                ['Safari',    8.5],
                ['Opera',     6.2],
                {
                    name: 'Others',
                    y: 0,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
        });
    }.on('didInsertElement'),


    willDestroyElement: function() {
        this.$().highcharts().destroy();
    }
});


App.HighchartBarComponent = Ember.Component.extend({
    tagName: 'div',
    classNames: ['chart'],

    dataChanged: function() {
        return this.rerender();
    }.observes('data'),

    renderChart: function() {
        console.log(this.get('data'));
        return this.$().highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: this.get('title')
            },
            subtitle: {
                text: null
            },
            xAxis: {
                categories: this.get('xAxisCategories'),
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
         
            series: [{
                data: this.get('data')
            }]
        });
    }.on('didInsertElement'),

    willDestroyElement: function() {
        this.$().highcharts().destroy();
    }
});

