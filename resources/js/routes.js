
// ROUTE MAPPINGS
App.Router.map(function() {
  this.resource('login');
  this.resource('logout');
  this.resource('dashboard');
  this.resource('about');
  this.resource('feedback',function(){
    this.resource('comment', {path: ':comment_id'});
    this.resource('addNewComment');
  });
  this.resource('budget');
  this.resource('charting');
  this.resource('data-research');
});



App.IndexRoute = Ember.Route.extend({
  init:function(){
    console.debug('IndexRoute');
  }
});

App.DashboardRoute = Ember.Route.extend({

});


App.LoginRoute = Ember.Route.extend({
  
});

App.LogoutRoute = Ember.Route.extend({
  
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('about');
  }
});


App.FeedbackRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('feedback');
  }
});


App.BudgetRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('budget');
  }
});

App.ChartingRoute = Ember.Route.extend({
  model: function() {
  return {
    locations: [
      Ember.Object.create({ name: 'Prague', latitude: 50.08804, longitude: 14.42076 }),
      Ember.Object.create({ name: 'New York', latitude: 40.71427 , longitude: -74.00597 }),
      Ember.Object.create({ name: 'Sydney', latitude: -33.86785, longitude: 151.20732 }),
    ],
    markers: [
      // Prague
      Ember.Object.create({ latitude: 50.08703, longitude: 14.42024 }),
      Ember.Object.create({ latitude: 50.08609, longitude: 14.42091 }),

      Ember.Object.create({ latitude: 40.71356, longitude: -74.00632 }), // New York
      Ember.Object.create({ latitude: -33.86781, longitude: 151.20754 }) // Sydney
    ],
    barChartData:{
      title: 'Net Dollars By Warehouse Region',
      data:[973, 400, 200, 123 ],
      xAxisCategories: ['West','2','East','MWest']
    },
    pieData: [
        ['Firefox',   45.0],
        ['IE',       26.8],
        {
            name: 'Chrome',
            y: 12.8,
            sliced: true,
            selected: true
        },
        ['Safari',    8.5],
        ['Opera',     6.2],
        ['Others',   0.7]
    ]
  };
  }
});


App.CommentRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('feedback',params.comment_id);
  },
  actions:{
    submit: function(model){
      this.get('store').find('feedback', model.id).then(function(rec){
        rec.save();
      })
      console.debug('record updated');
      
    },
    cancel:function(model){
      if(model){
        this.get('store').find('feedback', model.id).then(function(rec){
          rec.rollback();
        });
      } else {
        console.debug('insert transition to code here')
      }
    },
    delete:function(model){
     this.get('store').find('feedback', model.id).then(function(rec){
        rec.destroyRecord();
      }).then(function(){
          console.debug('insert redirect here');
      });
    }
  } 
});

App.AddNewCommentRoute = Ember.Route.extend({
});