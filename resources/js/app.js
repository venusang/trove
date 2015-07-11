App = Ember.Application.create();

// CONTROLLERS
App.ApplicationController = Ember.Controller.extend({

  sunstoneUser: "TroveDemo",
  troveLogo: 'resources/images/troveLogo.png',
  isAuthenticated: true,
  init: function(){
  },
  actions: {
    logout: function(){
      this.set('isAuthenticated',false);
      this.transitionToRoute('login');
    }
  }
});


App.AboutController = Ember.Controller.extend({
  sunstoneUser: "TroveDemo",
});

App.LoginController = Ember.Controller.extend({
  needs: ['application'],
  init: function(){
    this.set('controllers.application.isAuthenticated',false);
  },
  isLoggedIn: Ember.computed.alias('controllers.application.isAuthenticated'),
  sunstoneUser: "TroveDemo",
  troveLogo: 'resources/img/troveLogo.png',
  actions: {
      loginSubmit: function(){
        this.set('controllers.application.isAuthenticated',true);
        this.transitionToRoute('dashboard');
      }
  }
});

App.LogoutController = Ember.Controller.extend({
  init: function(){
    this.set('controllers.application.isAuthenticated',false);
    this.transitionToRoute('login');
  }
});

App.DashboardController = Ember.Controller.extend({
  needs: ['application'],
  isLoggedIn: Ember.computed.alias('controllers.application.isAuthenticated')
});

App.FeedbackController = Ember.Controller.extend({
  init:function(){
  }
});


App.AddNewCommentController = Ember.Controller.extend({
  actions:{
    createFeedback: function(user) {
      var feed = this.store.createRecord('feedback', {
        userName: user.userName,
        email: user.email,
        type: user.type,
        createDate: user.createDate,
        subject: user.subject,
        description: user.description
      });

      var self = this;

      var onSuccess = function(feed){
        console.debug('your comment was successfully added');
        self.transitionToRoute('comment',feed.id);
      };

      var onFail = function(feed){
        console.debug('sorry your record was not added');
      }

      feed.save().then(onSuccess,onFail);

    }
  }
});


App.DataResearchRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('resources/Sample_JSON_final.txt');
  }
});
var researchTable; //datatable object




