//http://emberjs.jsbin.com/ivOyiZa/22/edit?html,css,js,output

// http://emberjs.com/guides/components/wrapping-content-in-a-component/ 
// http://stackoverflow.com/questions/20981068/ember-component-block-form-more-than-one-outlet-yield

            
App.JsonTestingRoute = Ember.Route.extend({
  model: function() {
    return [
      { head: "foo head", body: "foo body " },
      { head: "bar head", body: "bar body " },
      { head: "ya head", body: "yo body " }
    ];
  }
});

App.EmberAccordionComponent = Ember.Component.extend({
  openedItemView: null,
  // each accordion header/body item, will have a instance of that view.
  // so we can isolate the expanded state for each accordion header/body
  emberAccordionItemView: Ember.View.extend({    
    expanded: false,
    autoClose: function() {
      if(this.get('parentView.openedItemView') !== this) {
        this.set('expanded', false);   
      }
    }.observes('parentView.openedItemView')
  }),
  _yield: function(context, options) {
    var get = Ember.get, 
    view = options.data.view,
    parentView = this._parentView,
    template = get(this, 'template');
 
    console.debug(options);

    if (template) {
      Ember.assert("A Component must have a parent view in order to yield.", parentView);      
      view.appendChild(Ember.View, {
        isVirtual: true,
        tagName: '',
        _contextView: parentView,
        template: template,
        context: get(view, 'context'), // the default is get(parentView, 'context'),
        controller: get(view, 'controller'), // the default is get(parentView, 'context'),
        templateData: { keywords: parentView.cloneKeywords() }
      });
    }
  }
});

App.EmberAccordionHeaderComponent = Ember.Component.extend({  
  classNames: ['ember-accordion-header'],  
  click: function() {
    this.set('parentView.parentView.openedItemView', this.get('parentView'));
    
    // here we toggle the emberAccordionItemView.expanded property
    this.toggleProperty('parentView.expanded');  
  }
});