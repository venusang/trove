//COMPONENTS
App.EditCommentComponent = Ember.Component.extend({
  actions: {
    submit: function() {
        this.sendAction('submit', {
          id: this.get('theid'),
          userName: this.get('userName'),
          email: this.get('email'),
          // type: commentType,
          createDate: this.get('createDate'),
          subject: this.get('subject'),
          description: this.get('description')
        });
    },
    cancel: function() {
      this.sendAction('cancel',{
        id: this.get('theid'),
        userName: this.get('userName'),
        email: this.get('email'),
        // type: commentType,
        createDate: this.get('createDate'),
        subject: this.get('subject'),
        description: this.get('description')
      });
    },
    delete: function(){
      this.sendAction('delete',{
        id: this.get('theid'),
        userName: this.get('userName'),
        email: this.get('email'),
        // type: commentType,
        createDate: this.get('createDate'),
        subject: this.get('subject'),
        description: this.get('description')
      });
    }
  }
});



App.UserFormComponent = Ember.Component.extend({
  actions: {
    setDate: function(){
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;

      var today = year + "-" + month + "-" + day;
      $('#theDate').val(today);
    },
    feedbackType: function(){
      $('#feedbackType').change(function(){
        console.debug($(this).val());
      });
    },
    inputChange:function(){
      $('input[type="text"]').change(function(){
          if($(this).val != ''){
             $('input[type="submit"]').removeAttr('disabled');
          }
       });
    },
    submit: function() {
      commentType = $('#feedbackType').val();
      if(this.get('userName') && this.get('description')){
          this.sendAction('submit', {
          userName: this.get('userName'),
          email: this.get('email'),
          type: commentType,
          createDate: this.get('createDate'),
          subject: this.get('subject'),
          description: this.get('description')
        });
      } else {
        console.debug('line 331 fill out the form');
      }
    }
    
    
  }
});


App.DataInputComponent = Ember.Component.extend({
  actions:{
    click: function(){
      console.debug('clicked');
    }
  }
});


App.TestSelect2Component = Ember.Component.extend({
  didInsertElement: function(){
      $('.select2-test').select2({
          placeholder: "Select a(n) attribute(s)"
      });

    }
});
