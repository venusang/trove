App.InfoPopoverComponent = Ember.Component.extend({
  tagName: 'span',
  classNames: ['attribute-info'],
  didInsertElement: function(){
      $('.info-popover').popover({
        container: 'body'
      });

      $('[data-toggle="popover"]').popover();

      $('body').on('click', function (e) {
          $('[data-toggle="popover"]').each(function () {
              //the 'is' for buttons that trigger popups
              //the 'has' for icons within a button that triggers a popup
              if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                  $(this).popover('hide');
              }
          });
      });


  },
  actions:{
    info: function(){
      console.debug('info info popover component');
    }
  }
});

