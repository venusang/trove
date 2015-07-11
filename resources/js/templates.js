Ember.TEMPLATES["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <div class=\"col-md-12\"><div class=\"col-md-4\">Version ");
  stack1 = helpers._triageMustache.call(depth0, "version", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (<i>");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</i>)</div><div class=\"col-md-4 col-md-offset-4 text-right\">");
  stack1 = helpers._triageMustache.call(depth0, "releaseDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div>\n      </div>\n      <div class=\"panel-body\">\n        <table class=\"table\">\n          <td><div class=\"label label-danger\">");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></td>\n          <td>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n          <td>");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        </table>\n      </div>\n    </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"aboutWrapper\">\n  <div class=\"col-md-10 col-md-offset-1\">\n    ");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["addNewComment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <div class=\"col-md-6\">Add New Comment</div>\n  </div>\n  <div class=\"panel-body\">\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['user-form'] || (depth0 && depth0['user-form']),options={hash:{
    'submit': ("createFeedback"),
    'submitTitle': ("Create Feedback"),
    'cancel': ("cancel")
  },hashTypes:{'submit': "STRING",'submitTitle': "STRING",'cancel': "STRING"},hashContexts:{'submit': depth0,'submitTitle': depth0,'cancel': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-form", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["budget"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <div class=\"col-md-8\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        <div class=\"text-right col-md-2 col-md-offset-2\"><strong>Score: ");
  stack1 = helpers._triageMustache.call(depth0, "score", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong></div>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"col-md-4\">\n        <ul class=\"list-unstyled\">\n          <li><div class=\"radio\">\n                <input type=\"radio\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("radiovalue1")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" value=\"option1\" name=\"radioInline\">\n                <label ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'for': ("radiovalue1")
  },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "radiolabel1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n            </div>\n          </li>\n          <li><div class=\"radio\">\n                <input type=\"radio\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("radiovalue2")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" value=\"option1\" name=\"radioInline\">\n                <label ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'for': ("radiovalue2")
  },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "radiolabel2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n            </div>\n          </li>\n          <li><div class=\"radio\">\n                <input type=\"radio\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'id': ("radiovalue3")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(" value=\"option1\" name=\"radioInline\">\n                <label ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'for': ("radiovalue3")
  },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "radiolabel3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n            </div>\n          </li>\n        </ul>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <div class=\"col-sm-4\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("inputvalue1"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</div>\n          </div>\n          <div class=\"form-group\">\n           <label class=\"control-label col-sm-1\">=</label><div class=\"col-sm-11\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("inputvalue2"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</div>\n           </div>\n          </div>\n          <div class=\"text-right\">\n            <button class=\"btn btn-primary\" type=\"submit\">edit formula...</button>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("description"),
    'rows': (10),
    'cols': (50),
    'class': ("form-control")
  },hashTypes:{'value': "ID",'rows': "INTEGER",'cols': "INTEGER",'class': "STRING"},hashContexts:{'value': depth0,'rows': depth0,'cols': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("</div>\n      </div>\n    </div>\n  </div>\n   ");
  return buffer;
  }

  data.buffer.push("<div id=\"budgetBenefitWrapper\">\n  <div class=\"col-md-10 col-md-offset-1\">\n    ");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["charting"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers['google-maps'] || (depth0 && depth0['google-maps']),options={hash:{
    'latitude': ("selectedLocation.latitude"),
    'longitude': ("selectedLocation.longitude"),
    'markers': ("markers")
  },hashTypes:{'latitude': "ID",'longitude': "ID",'markers': "ID"},hashContexts:{'latitude': depth0,'longitude': depth0,'markers': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "google-maps", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-md-12\">\n  <h2>Dynamic Charting and Reporting</h2>\n</div>\n<div class=\"col-md-12 text-center\">\n    ");
  stack1 = helpers['if'].call(depth0, "selectedLocation", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("locations"),
    'value': ("selectedLocation"),
    'optionLabelPath': ("content.name")
  },hashTypes:{'content': "ID",'value': "ID",'optionLabelPath': "STRING"},hashContexts:{'content': depth0,'value': depth0,'optionLabelPath': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<div class=\"col-md-4\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['highchart-bar'] || (depth0 && depth0['highchart-bar']),options={hash:{
    'data': ("barChartData.data"),
    'title': ("barChartData.title"),
    'xAxisCategories': ("barChartData.xAxisCategories")
  },hashTypes:{'data': "ID",'title': "ID",'xAxisCategories': "ID"},hashContexts:{'data': depth0,'title': depth0,'xAxisCategories': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "highchart-bar", options))));
  data.buffer.push("\n</div>\n<div class=\"col-md-4\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['highchart-donut'] || (depth0 && depth0['highchart-donut']),options={hash:{
    'data': ("pieData")
  },hashTypes:{'data': "ID"},hashContexts:{'data': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "highchart-donut", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <div class=\"col-md-6\">Comment ID:  ");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n  </div>\n  <div class=\"panel-body\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['edit-comment'] || (depth0 && depth0['edit-comment']),options={hash:{
    'submit': ("submit"),
    'cancel': ("cancel"),
    'delete': ("delete"),
    'theid': ("id"),
    'userName': ("userName"),
    'email': ("email"),
    'type': ("type"),
    'createDate': ("createDate"),
    'subject': ("subject"),
    'description': ("description")
  },hashTypes:{'submit': "STRING",'cancel': "STRING",'delete': "STRING",'theid': "ID",'userName': "ID",'email': "ID",'type': "ID",'createDate': "ID",'subject': "ID",'description': "ID"},hashContexts:{'submit': depth0,'cancel': depth0,'delete': depth0,'theid': depth0,'userName': depth0,'email': depth0,'type': depth0,'createDate': depth0,'subject': depth0,'description': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "edit-comment", options))));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["dashboard"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		<h3><i class=\"fa fa-money fa-2x\"></i><br />Budget &amp;<br />Benefit");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n		  <h3><i class=\"fa fa-bar-chart fa-2x\"></i><br />Charting &amp;<br /> Reporting</h3>\n		");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n		  <h3><i class=\"fa fa-bullseye fa-2x\"></i><br />Charting &amp;<br /> Data Research</h3>\n		");
  }

  data.buffer.push("<div class=\"row\">\n	<div class=\"col-md-10 col-md-offset-1\">\n	  <h2>Application Dashboard</h2>\n	  <div class=\"row\">\n	<div class=\"col-xs-6 col-md-3\">\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("thumbnail text-center")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "budget", options) : helperMissing.call(depth0, "link-to", "budget", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n	</div>\n	<div class=\"col-xs-6 col-md-3\">\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("thumbnail text-center")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "charting", options) : helperMissing.call(depth0, "link-to", "charting", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n\n	<div class=\"col-xs-6 col-md-3\">\n		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("thumbnail text-center")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "data-research", options) : helperMissing.call(depth0, "link-to", "data-research", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n\n	</div>\n	</div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["data-fields"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n           <label>");
  stack1 = helpers._triageMustache.call(depth0, "m.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n            <div class=\"dropdown\">\n                <input ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "inputSelect", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"form-control dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\" placeholder=\"Select an attribute(s)\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("id")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                <span class=\"glyphicon glyphicon-search form-control-feedback\" aria-hidden=\"true\"></span>\n\n                <ul class=\"dropdown-menu\" role=\"menu\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'aria-labelledby': ("id")
  },hashTypes:{'aria-labelledby': "STRING"},hashContexts:{'aria-labelledby': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    ");
  stack1 = helpers.each.call(depth0, "df", "in", "m.dataSetAttributes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </ul>\n            </div>\n		");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "onSelect", "m.id", "df.id", "df", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0],types:["STRING","ID","ID","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "df.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n                    ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"panel panel-default\">\n\n<div class=\"panel-heading\"><h4>Data Fields</h4></div>\n	<div class=\"panel-body\">\n		");
  stack1 = helpers.each.call(depth0, "m", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</div>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["data-research"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"data-research-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n\n      <div class=\"col-md-3\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "data-fields", options) : helperMissing.call(depth0, "render", "data-fields", options))));
  data.buffer.push("\n      </div><!-- col-md-3 -->\n\n      <div class=\"col-md-9\">\n        <form role=\"form\" id=\"FilterForm\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "data-settings", options) : helperMissing.call(depth0, "render", "data-settings", options))));
  data.buffer.push("\n        \n        <!--h3>Refine your Results:</h3-->\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n             <!-- render 'date-time' -->\n          </div><!--col-md-5 -->\n        </div><!-- row -->\n       \n\n        <div class=\"row\">\n          <!-- render 'recur-pattern' -->\n          <!-- render 'grouped-by' -->\n        </div><!-- row -->\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" class=\"btn btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "validator", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">submit</button>\n          </div>\n        </div><!-- row -->\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "data-results", options) : helperMissing.call(depth0, "render", "data-results", options))));
  data.buffer.push("\n        </form>\n      </div><!--col-md-9 -->\n\n\n\n\n    </div><!-- col-md-10 -->\n  </div><!-- row -->\n</div><!-- data-research-wrapper -->\n");
  return buffer;
  
});
Ember.TEMPLATES["data-results-modules"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"col-sm-6 col-md-4\">\n  <div class=\"thumbnail text-center\">\n    <img src=\"http://fpoimg.com/300x195\">\n  </div>\n</div>\n\n<div class=\"col-sm-6 col-md-4\">\n  <div class=\"thumbnail text-center\">\n    <img src=\"http://fpoimg.com/300x195\">\n  </div>\n</div>\n\n<div class=\"col-sm-6 col-md-4\">\n  <div class=\"thumbnail text-center\">\n    <img src=\"http://fpoimg.com/300x195\">\n  </div>\n</div>");
  
});
Ember.TEMPLATES["data-results"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"row\">\n    <hr />\n       <h3>Results</h3>\n       <div class=\"alert alert-info\">\n            <strong>Showing results for <span class=\"dates\">");
  stack1 = helpers._triageMustache.call(depth0, "startMonth", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "startDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "startYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "startDay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(") to ");
  stack1 = helpers._triageMustache.call(depth0, "endMonth", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "endDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "endYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "endDay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</span>.  Between <span class=\"times\">");
  stack1 = helpers._triageMustache.call(depth0, "startTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> to <span class=\"times\">");
  stack1 = helpers._triageMustache.call(depth0, "endTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>.</strong>\n       </div>\n    <div class=\"row\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "data-results-modules", options) : helperMissing.call(depth0, "render", "data-results-modules", options))));
  data.buffer.push(" \n    </div>\n    </div>\n    <div class=\"row\">\n        <table id=\"data-results-table\" class=\"table table-striped table-bordered dataTable table-hover\">\n        <thead>\n            <tr>\n                <th>accountTariff</th>\n                <th>accountZipcode</th>\n                <th>accountEventsMeterId</th>\n                <th>accountEventsExecutedBy</th>\n                <th>accountHouseNumber</th>\n                <th>accountEventsType</th>\n            </tr>\n        </thead>\n    </table>\n    </div><!-- row -->\n\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"row\">\n        <hr />\n            <div class=\"alert alert-info fade in\" role=\"alert\">\n                In order to view your results, you must choose data both data field attribute(s) and a date and time range.\n            </div>  \n        </div>\n");
  }

  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "showResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["data-settings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n\n");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"data-settings\">\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("model.ontologyRef")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <div class=\"dropdown\">\n    <span>");
  stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['info-popover'] || (depth0 && depth0['info-popover']),options={hash:{
    'name': ("model.name")
  },hashTypes:{'name': "ID"},hashContexts:{'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "info-popover", options))));
  data.buffer.push("</span>\n    <a class=\"btn btn-default dropdown-toggle\" id=\"dropdownMenu\" data-toggle=\"dropdown\" aria-expanded=\"true\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showSettings", "model.id", "model.dataFieldId", "model.name", "model.values", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0,depth0,depth0],types:["STRING","ID","ID","ID","ID"],data:data})));
  data.buffer.push(">\n      <i class=\"fa fa-cog\"></i>\n    </a>\n    <a class=\"btn btn-default remove-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", "model.id", "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data})));
  data.buffer.push(">\n      <i class=\"fa fa-times-circle-o\"></i>\n    </a>\n\n      <div class=\"dropdown-menu data-settings-menu dropdown-toggle dropdown-menu-right panel panel-default\" role=\"menu\" aria-labelledby=\"dropdownMenu\" toggle=\"dropdown\">\n        <form class=\"form-horizontal\">\n              <div class=\"panel-heading\">\n                  <div class=\"pull-left\">\n                      <span class=\"filter-label\">Filter(s)</span>\n                  </div>\n                  <div class=\"pull-right\">\n                      <button type=\"button\" class=\"btn btn-default pull-right add-new-filter\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'add-subfilter': ("model.dataFieldId")
  },hashTypes:{'add-subfilter': "STRING"},hashContexts:{'add-subfilter': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><span class=\"glyphicon glyphicon-plus\"></span>add new filter</button>\n                  </div>\n              </div>\n              <div class=\"panel-body\">\n                  <div class=\"pull-left\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'list-container': ("model.dataFieldId")
  },hashTypes:{'list-container': "STRING"},hashContexts:{'list-container': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    <div class=\"list-container\">\n                        <div class=\"list-group\">\n                            ");
  stack1 = helpers.each.call(depth0, "subFilter", "in", "model.subFilter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-7 pull-right filter-wrapper\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'list-container': ("model.dataFieldId")
  },hashTypes:{'list-container': "STRING"},hashContexts:{'list-container': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                      ");
  stack1 = helpers.each.call(depth0, "subFilter", "in", "model.subFilter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  </div><!-- filter-wrapper -->\n              </div><!-- panel-body -->\n        </form>\n\n        <div class=\"filter-message\" style=\"display: none;\">\n            <div class=\"alert alert-danger\"><p>All filters have been removed.</p></div><p>To add filters, click the \"add new filter\" button above.</p>\n        </div>\n\n      </div><!-- dropdown-menu -->\n    </div><!-- dropdown -->\n  </div>\n</div><!-- data-settings-->\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                <a href=\"javascript:void(0)\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'list-subfilter': ("subFilter.id")
  },hashTypes:{'list-subfilter': "STRING"},hashContexts:{'list-subfilter': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"list-group-item filter-list filter-list-item\"><span class=\"filter-label\">");
  stack1 = helpers._triageMustache.call(depth0, "subFilter.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                                    <span class=\"pull-right\"><i class=\"fa fa-angle-right \"></i>\n                                 </span>\n                                </a>\n                            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n                          <div class=\"sub-filters hide\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("subFilter.id")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                              <div class=\"sub-filter-name-remove\">\n                                  <div class=\"pull-left sub-filter-name\">\n                                      <b>");
  stack1 = helpers._triageMustache.call(depth0, "subFilter.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b>\n                                  </div>\n                                  <div class=\"pull-right\">\n                                      <button type=\"button\" class=\"btn btn-sm btn-danger remove-subfilter\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'remove-subfilter': ("subFilter.id")
  },hashTypes:{'remove-subfilter': "STRING"},hashContexts:{'remove-subfilter': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><span class=\"glyphicon glyphicon-trash\"></span></button>\n                                  </div>\n\n                              </div>\n\n              ");
  stack1 = (helper = helpers.ifDataTypeAnalyticWithParams || (depth0 && depth0.ifDataTypeAnalyticWithParams),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "ifDataTypeAnalyticWithParams", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n              ");
  stack1 = (helper = helpers.ifDataTypeNumeric || (depth0 && depth0.ifDataTypeNumeric),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.program(27, program27, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.type", options) : helperMissing.call(depth0, "ifDataTypeNumeric", "model.type", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                              ");
  stack1 = (helper = helpers.ifDataTypeAnalyticParamsEmpty || (depth0 && depth0.ifDataTypeAnalyticParamsEmpty),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.analyticalParams", options) : helperMissing.call(depth0, "ifDataTypeAnalyticParamsEmpty", "model.analyticalParams", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n              ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("\n\n                              ");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                  ");
  stack1 = helpers.each.call(depth0, "param", "in", "model.analyticalParams", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                              ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                      ");
  stack1 = (helper = helpers.ifDataTypeDate || (depth0 && depth0.ifDataTypeDate),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "param.type", options) : helperMissing.call(depth0, "ifDataTypeDate", "param.type", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                      ");
  stack1 = (helper = helpers.ifDataTypeTimeStamp || (depth0 && depth0.ifDataTypeTimeStamp),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "param.type", options) : helperMissing.call(depth0, "ifDataTypeTimeStamp", "param.type", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                      </div><!-- sub-filters -->\n                                  ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                          <div class=\"\">\n                                              <label ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'for': ("model.id")
  },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Date:</label>\n                                              <input required type=\"text\" class=\"form-control datepicker from-input\"  identifier=\"min\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-date': ("subFilter.id")
  },hashTypes:{'data-date': "STRING"},hashContexts:{'data-date': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\n                                          </div>\n                                      ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                          <div class=\"\">\n                                              <label ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'for': ("model.id")
  },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Hour:</label>\n                                              <input required type=\"text\" class=\"form-control hourpicker to-input\"  identifier=\"max\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'data-hour': ("subFilter.id")
  },hashTypes:{'data-hour': "STRING"},hashContexts:{'data-hour': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                                          </div>\n                                      ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                          <div class=\"choice-select\">\n                              <select required ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'choice-select': ("subFilter.id")
  },hashTypes:{'choice-select': "STRING"},hashContexts:{'choice-select': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"form-control\">\n                                  ");
  stack1 = helpers.each.call(depth0, "value", "in", "choice", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                              </select>\n                          </div>\n\n                          <div id=\"input_option\">\n                              <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'input-option': ("subFilter.id")
  },hashTypes:{'input-option': "STRING"},hashContexts:{'input-option': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" id=\"input_option_value_only row\">\n                                  value:<br>\n                                  <div class=\"col-sm-12 select-row\">\n                                      <select required class=\"data-settings-list col-md-12\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("model.id")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("model.name")
  },hashTypes:{'name': "STRING"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'select-value': ("subFilter.id")
  },hashTypes:{'select-value': "STRING"},hashContexts:{'select-value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" multiple=\"multiple\">\n                                          ");
  stack1 = helpers.each.call(depth0, "value", "in", "model.values", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                      </select>\n                                      ");
  stack1 = (helper = helpers.ifDataTypeEnum || (depth0 && depth0.ifDataTypeEnum),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.type", options) : helperMissing.call(depth0, "ifDataTypeEnum", "model.type", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                  </div>\n                              </div>\n\n                              <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'min-max': ("subFilter.id")
  },hashTypes:{'min-max': "STRING"},hashContexts:{'min-max': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"hide\">\n                                  min: <br>\n                                  <select required class=\"data-settings-list col-md-12  full-width\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'min': ("subFilter.id")
  },hashTypes:{'min': "STRING"},hashContexts:{'min': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("model.name")
  },hashTypes:{'name': "STRING"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" multiple=\"multiple\">\n                                      ");
  stack1 = helpers.each.call(depth0, "value", "in", "model.values", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                  </select>\n                                  <br>\n                                  max: <br>\n                                  <select required class=\"data-settings-list col-md-12  full-width\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'max': ("subFilter.id")
  },hashTypes:{'max': "STRING"},hashContexts:{'max': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("model.name")
  },hashTypes:{'name': "STRING"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" multiple=\"multiple\">\n                                      ");
  stack1 = helpers.each.call(depth0, "value", "in", "model.values", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                  </select>\n                              </div>\n                          </div>\n                      </div><!-- sub-filters -->\n\n              ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                      <option value=\"");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\">");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\n                                  ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                              <option value=\"");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\">");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\n                                          ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                                          <div class=\"col-sm-12 select-row\">\n\n                                              <button type=\"button\" class=\"btn btn-info select-all pull-right\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'bt': ("subFilter.id")
  },hashTypes:{'bt': "STRING"},hashContexts:{'bt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Select All</button>\n\n                                          </div>\n                                      ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                          <option value=\"");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\">");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\n                                      ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                          <div class=\"form-group\">\n                              <div class=\"col-sm-7\">\n                                  <label class=\"radio-inline\"><input class=\"radio-inline\" type=\"radio\" value=\"equal\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("subFilter.id")
  },hashTypes:{'name': "STRING"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />equal</label>\n                              </div>\n                              <div class=\"col-sm-4\">\n                                  <label class=\"radio-inline\"><input class=\"radio-inline\" type=\"radio\" value=\"similar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("subFilter.id")
  },hashTypes:{'name': "STRING"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />similar</label>\n                              </div>\n                          </div>\n\n                          ");
  stack1 = (helper = helpers.ifDataTypeDate || (depth0 && depth0.ifDataTypeDate),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.type", options) : helperMissing.call(depth0, "ifDataTypeDate", "model.type", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                      </div><!-- sub-filters -->\n\n\n              ");
  return buffer;
  }
function program28(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n                                  <div class=\"choice-select\">\n                                      <select required ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'choice-select': ("subFilter.id")
  },hashTypes:{'choice-select': "STRING"},hashContexts:{'choice-select': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"form-control\">\n                                          ");
  stack1 = helpers.each.call(depth0, "value", "in", "choice", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                      </select>\n                                  </div>\n\n                                  <div id=\"input_option\">\n                                      <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'input-option': ("subFilter.id")
  },hashTypes:{'input-option': "STRING"},hashContexts:{'input-option': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" id=\"input_option_value_only row\">\n                                          Date:<br>\n                                          <div class=\"col-sm-12 select-row\">\n                                              <input required type=\"text\" class=\"form-control datepicker\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'select-value': ("subFilter.id")
  },hashTypes:{'select-value': "STRING"},hashContexts:{'select-value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("model.name")
  },hashTypes:{'name': "STRING"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                                          </div>\n                                      </div>\n\n                                      <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'min-max': ("subFilter.id")
  },hashTypes:{'min-max': "STRING"},hashContexts:{'min-max': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"hide\">\n                                          Start Date: <br>\n                                          <input required type=\"text\" class=\"form-control datepicker\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'min': ("subFilter.id")
  },hashTypes:{'min': "STRING"},hashContexts:{'min': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("model.name")
  },hashTypes:{'name': "STRING"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n\n                                          <br>\n                                          End Date: <br>\n                                          <input required type=\"text\" class=\"form-control datepicker\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'max': ("subFilter.id")
  },hashTypes:{'max': "STRING"},hashContexts:{'max': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("model.name")
  },hashTypes:{'name': "STRING"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                                      </div>\n                                  </div>\n\n                          ");
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n                              ");
  stack1 = (helper = helpers.ifDataTypeEnum || (depth0 && depth0.ifDataTypeEnum),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.program(33, program33, data),fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.type", options) : helperMissing.call(depth0, "ifDataTypeEnum", "model.type", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n                              <select required class=\"data-settings-list col-md-12\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("model.id")
  },hashTypes:{'id': "STRING"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'name': ("model.name")
  },hashTypes:{'name': "STRING"},hashContexts:{'name': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'select-value': ("subFilter.id")
  },hashTypes:{'select-value': "STRING"},hashContexts:{'select-value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" multiple=\"multiple\">\n                                  ");
  stack1 = helpers.each.call(depth0, "value", "in", "model.values", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                              </select>\n                              ");
  stack1 = (helper = helpers.ifDataTypeEnum || (depth0 && depth0.ifDataTypeEnum),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(35, program35, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.type", options) : helperMissing.call(depth0, "ifDataTypeEnum", "model.type", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                          ");
  return buffer;
  }
function program31(depth0,data) {
  
  
  data.buffer.push("\n                                  Enter or select value(s):\n                              ");
  }

function program33(depth0,data) {
  
  
  data.buffer.push("\n                                  Enter value(s):\n                              ");
  }

function program35(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n\n                                  <div class=\"col-sm-12 select-row\">\n                                      <button type=\"button\" class=\"btn btn-info select-all pull-right\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'bt': ("subFilter.id")
  },hashTypes:{'bt': "STRING"},hashContexts:{'bt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Select All</button>\n                                  </div>\n                              ");
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <hr>\n    <div class=\"alert alert-info fade in\" role=\"alert\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n        To add a graph, click the add graph button. Then select the corresponding filters for each field displayed.\n    </div>\n    <div class=\"add-graph-btn-container\">\n        <button type=\"button\" class=\"btn btn-default add-new-graph\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addGraph", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ><span class=\"glyphicon glyphicon-plus\"></span>add graph</button>\n    </div>\n\n");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n            <div class=\"pandel-body\">\n                <div class=\"graph-panel\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4 col-md-offset-1\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "graph.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n                        <div class=\"col-md-3 col-md-offset-4\">\n                            <a class=\"btn btn-default remove-btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeGraph", "graph.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n                                <i class=\"fa fa-times-circle-o\"></i>\n                            </a>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-10 col-md-offset-1\">\n                            <b>x-axis</b><br/>\n                            <select ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'x-axis': ("graph.id")
  },hashTypes:{'x-axis': "STRING"},hashContexts:{'x-axis': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"form-control\">\n\n                                <option value=\"\" selected >select x-axis</option>\n                                ");
  stack1 = helpers.each.call(depth0, "data", "in", "graphData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(40, program40, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-10 col-md-offset-1\">\n                            <b>y-axis</b><br/>\n                            <select ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'y-axis': ("graph.id")
  },hashTypes:{'y-axis': "STRING"},hashContexts:{'y-axis': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"form-control\">\n\n\n                                <option value=\"\" selected>select y-axis</option>\n                                <option value=\"sum\">sum</option>\n                                <option value=\"count\">count</option>\n                                <option value=\"average\">average</option>\n\n\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-10 col-md-offset-1\">\n                            <b>g-group</b><br/>\n                            <select required class=\"g-group\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'g-group': ("graph.id")
  },hashTypes:{'g-group': "STRING"},hashContexts:{'g-group': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" multiple=\"multiple\">\n                                ");
  stack1 = helpers.each.call(depth0, "data", "in", "graphData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(42, program42, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </select>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n\n");
  return buffer;
  }
function program40(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    <option ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("data.id")
  },hashTypes:{'value': "STRING"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >");
  stack1 = helpers._triageMustache.call(depth0, "data.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\n                                ");
  return buffer;
  }

function program42(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    <option ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("data.id")
  },hashTypes:{'value': "STRING"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "data.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\n                                ");
  return buffer;
  }

  data.buffer.push("<h3>Data Field Attribute(s):</h3>\n");
  stack1 = helpers['if'].call(depth0, "models", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <div class=\"alert alert-info fade in\" id=\"filters-alert\" role=\"alert\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n    <!--strong>Step 1:</strong-->Select your Data Field attribute(s)\n  </div>\n\n");
  stack1 = helpers.each.call(depth0, "model", "in", "models", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "addGraphBtn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"row\">\n");
  stack1 = helpers.each.call(depth0, "graph", "in", "graphs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n\n\n\n");
  return buffer;
  
});
Ember.TEMPLATES["date-time"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("\n<div class=\"alert alert-info fade in\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n  <strong>Step 2:</strong>  Select your Date &amp; Time Range\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Date &amp; Time Range</div>\n  <div class=\"panel-body\">\n      <div class=\"form-inline col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"startDate\">Start Date:</label><br>\n          <input readonly type=\"text\" class=\"form-control\" id=\"startDate\" placeholder=\"start date\" data-error=\"please select a valid start date\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"endDate\">End Date:</label><br>\n          <input readonly required type=\"text\" class=\"form-control\" id=\"endDate\" placeholder=\"end date\" data-error=\"please select a valid end date\">\n        </div>\n      </div>\n      <div class=\"form-inline col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"startTime\">Start Time:</label><br>\n          <input readonly type=\"text\" class=\"form-control\" id=\"startTime\" placeholder=\"start time\" data-error=\"please select a start time\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"endTime\">End Time:</label><br>\n          <input readonly type=\"text\" class=\"form-control\" id=\"endTime\" placeholder=\"end time\" data-error=\"please select an end time\" required>\n        </div>\n        <input type=\"hidden\" id=\"endTimeStartValue\" value=\"23:00\">\n      </div>\n  </div><!-- panel-body -->\n  </div><!--panel -->\n</div><!-- col-md-12-->\n</div>\n\n\n");
  
});
Ember.TEMPLATES["feedback"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-plus\"></i> New Comment");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment", "", options) : helperMissing.call(depth0, "link-to", "comment", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              \n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <label>");
  stack1 = helpers._triageMustache.call(depth0, "userName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n                    <div class=\"description\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 text-right\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "createDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <i class=\"fa fa-chevron-right\"></i>\n\n                  </div>\n                </div>\n              ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n  <div class=\"col-md-10 col-md-offset-1\"><h2>Feedback </h2></div>\n  <div class=\"col-md-4 col-md-offset-1\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <div class=\"col-md-6\">Displaying Comments</div>\n          <div class=\"col-md-6 text-right\">\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "addNewComment", options) : helperMissing.call(depth0, "link-to", "addNewComment", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"text-center\">\n            <ul class=\"pagination\">\n              <li class=\"disabled\"><a href=\"#\"><span aria-hidden=\"true\">«</span><span class=\"sr-only\">Previous</span></a></li>\n              <li class=\"active\"><a href=\"#\">1 <span class=\"sr-only\">(current)</span></a></li>\n              <li><a href=\"#\">2</a></li>\n              <li><a href=\"#\">3</a></li>\n              <li><a href=\"#\">4</a></li>\n              <li><a href=\"#\">5</a></li>\n              <li><a href=\"#\"><span aria-hidden=\"true\">»</span><span class=\"sr-only\">Next</span></a></li>\n           </ul>\n         </div>\n          <ul class=\"list-group\">\n            ");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </ul>\n        </div>\n    </div>\n  </div><!-- //col-md-4 col-md-offset-2 -->\n\n  <div class=\"col-md-4\">");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n \n  </div><!-- //col-md-4 -->\n\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["grouped-by"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("  <div class=\"col-md-12\" id=\"groupedby\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">Grouped By</div>\n      <div class=\"panel-body\">\n        <h5>Drag Groupings Here</h5>\n    </div>\n</div><!-- col-md-4 -->    ");
  
});
Ember.TEMPLATES["json-testing"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("                        \n      ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}
  if (helper = helpers['ember-accordion-header']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['ember-accordion-header']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['ember-accordion-header']) { stack1 = blockHelperMissing.call(depth0, 'ember-accordion-header', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data}
  if (helper = helpers['ember-accordion-body']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['ember-accordion-body']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['ember-accordion-body']) { stack1 = blockHelperMissing.call(depth0, 'ember-accordion-body', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("        \n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "head", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <!-- each object passed in listOfAccordionPaneObjects=model can be accessed here -->\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "body", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <!-- each object passed in listOfAccordionPaneObjects=model can be accessed here -->\n      ");
  return buffer;
  }

  data.buffer.push("<style>\n\n.ember-accordion-header {\n  background-color: #999;\n  color: #ffffff;\n  padding: 10px;\n  margin: 0;\n  line-height: 14px;\n  -webkit-border-top-left-radius: 5px;\n  -webkit-border-top-right-radius: 5px;\n  -moz-border-radius-topleft: 5px;\n  -moz-border-radius-topright: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  cursor: pointer;\n  text-decoration: none;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n}\n\n.ember-accordion-container {\n  height: 100%;\n  width: 100%;\n}\n\n.ember-accordion-pane {\n  padding: 2px;\n}\n\n.emberaccordionheaderselected {\n  background-color: #bbb;\n  color: #333;\n  font-weight: bold;\n}\n\n.ember-accordion-header:hover {\n  text-decoration: underline !important;\n}\n\n.emberaccordionheaderselected:hover {\n  text-decoration: underline !important;\n}\n\n.ember-accordion-pane-content {\n  padding: 5px;\n  overflow-y: auto;\n  border-left: 1px solid #bbb;\n  border-right: 1px solid #bbb;\n  border-bottom: 1px solid #bbb;\n  -webkit-border-bottom-left-radius: 5px;\n  -webkit-border-bottom-right-radius: 5px;\n  -moz-border-radius-bottomleft: 5px;\n  -moz-border-radius-bottomright: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.emberdisabledpane {\n  opacity: .2;\n}\n</style>\n\n");
  stack1 = (helper = helpers['ember-accordion'] || (depth0 && depth0['ember-accordion']),options={hash:{
    'listOfAccordionPaneObjects': ("model")
  },hashTypes:{'listOfAccordionPaneObjects': "ID"},hashContexts:{'listOfAccordionPaneObjects': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-accordion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n\n\n\n\n\n\n\n    \n");
  return buffer;
  
});
Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-12\">\n  <div class=\"login\">\n    <div class=\"text-center\">\n      <img class=\"logo img-responsive\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("troveLogo"),
    'alt': ("imageTitle")
  },hashTypes:{'src': "STRING",'alt': "STRING"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    </div>\n      <form class=\"form-horizontal login-form\" role=\"form\">\n          <div class=\"form-group\">\n                <span>\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("username"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                  <i class=\"fa fa-user login-icon\"></i>\n                </span>\n                <span>\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("password"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'placeholder': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                  <i class=\"fa fa-lock login-icon\"></i>\n                </span>\n\n                <div class=\"checkbox\">\n                  <label>\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    Remember Me\n                  </label>\n                </div>\n\n\n                <div class=\"text-right\">\n                  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loginSubmit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">submit</button>\n                </div>\n          </div>\n      </form>\n  </div>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["logout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<script type=\"text/x-handlebars\" id=\"logout\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      logged out\n    </div>\n  </div>\n</script>  ");
  
});
Ember.TEMPLATES["nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("troveLogo"),
    'alt': ("imageTitle")
  },hashTypes:{'src': "STRING",'alt': "STRING"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-home\"></i>");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Feedback");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("About");
  }

  data.buffer.push("<nav class=\"navbar navbar-default\" role=\"navigation\">\n<div class=\"container-fluid\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#main-nav\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "dashboard", options) : helperMissing.call(depth0, "link-to", "dashboard", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div class=\"collapse navbar-collapse\" id=\"main-nav\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "dashboard", options) : helperMissing.call(depth0, "link-to", "dashboard", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "feedback", options) : helperMissing.call(depth0, "link-to", "feedback", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "sunstoneUser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </ul>\n  </div><!-- /.navbar-collapse -->\n</div><!-- /.container-fluid -->\n</nav>\n");
  return buffer;
  
});
Ember.TEMPLATES["recur-pattern"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"col-md-6\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Recurrence Pattern</div>\n    <div class=\"panel-body\">\n      <ul class=\"list-inline\">\n        <li>\n          <div class=\"radio\">\n              <input type=\"radio\" id=\"inlineRadio1\" value=\"option1\" name=\"radioInline\">\n              <label for=\"inlineRadio1\"> None </label>\n          </div>\n        </li>\n        <li>\n          <div class=\"radio\">\n              <input type=\"radio\" id=\"inlineRadio2\" value=\"option1\" name=\"radioInline\">\n              <label for=\"inlineRadio2\"> Daily </label>\n          </div>\n        <li>\n          <div class=\"radio\">\n              <input type=\"radio\" id=\"inlineRadio3\" value=\"option1\" name=\"radioInline\">\n              <label for=\"inlineRadio3\"> Weekly </label>\n          </div>\n        </li>\n        <li>\n          <div class=\"radio\">\n              <input type=\"radio\" id=\"inlineRadio4\" value=\"option1\" name=\"radioInline\">\n              <label for=\"inlineRadio4\"> Monthly </label>\n          </div>\n\n        <li>\n          <div class=\"radio\">\n              <input type=\"radio\" id=\"inlineRadio5\" value=\"option1\" name=\"radioInline\">\n              <label for=\"inlineRadio5\"> Yearly </label>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div><!-- col-md-3 -->");
  
});
Ember.TEMPLATES["showResults"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"row\">\n       <h3>Results</h3>\n       <div class=\"alert alert-info\">\n            <strong>Showing results for <span class=\"dates\">");
  stack1 = helpers._triageMustache.call(depth0, "startMonth", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "startDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "startYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "startDay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(") to ");
  stack1 = helpers._triageMustache.call(depth0, "endMonth", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "endDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", ");
  stack1 = helpers._triageMustache.call(depth0, "endYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "endDay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</span>.  Between <span class=\"times\">");
  stack1 = helpers._triageMustache.call(depth0, "startTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span> to <span class=\"times\">");
  stack1 = helpers._triageMustache.call(depth0, "endTime", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>.</strong>\n       </div>\n    <div class=\"row\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "data-results-modules", options) : helperMissing.call(depth0, "render", "data-results-modules", options))));
  data.buffer.push(" \n    </div>\n    </div>\n    <div class=\"row\">\n        <table id=\"data-results-table\" class=\"table table-striped table-bordered dataTable table-hover\">\n        <thead>\n            <tr>\n                <th>accountTariff</th>\n                <th>accountZipcode</th>\n                <th>accountEventsMeterId</th>\n                <th>accountEventsExecutedBy</th>\n                <th>accountHouseNumber</th>\n                <th>accountEventsType</th>\n            </tr>\n        </thead>\n        <tbody>\n        ");
  stack1 = helpers.each.call(depth0, "result", "in", "results", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n    </table>\n    </div><!-- row -->\n\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <tr>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "result.accountId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "result.rateClass", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "result.hourly", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "result.daily", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "result.personIncome", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "result.sqFootage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            </tr>\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("Nice try sucker    \n");
  }

  stack1 = helpers['if'].call(depth0, "showResults", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
Ember.TEMPLATES["components/data-input"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\">");
  stack1 = helpers._triageMustache.call(depth0, "field", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"dropdown\">\n  <input class=\"form-control dropdown-toggle\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"true\" placeholder=\"Select an attribute(s)\">\n  <span class=\"glyphicon glyphicon-search form-control-feedback\" aria-hidden=\"true\"></span>\n  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n    ");
  stack1 = helpers.each.call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>\n");
  return buffer;
  
});
Ember.TEMPLATES["components/datetimepicker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row\">\n  <div class=\"col-md-12\">\n  <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Date &amp; Time Range</div>\n  <div class=\"panel-body\">\n      <div class=\"form-inline col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"startDate\">Start Date:</label><br>\n          <input type=\"text\" class=\"form-control\" id=\"startDate\" placeholder=\"start date\" data-error=\"please select a valid start date\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"endDate\">End Date:</label><br>\n          <input required type=\"text\" class=\"form-control\" id=\"endDate\" placeholder=\"end date\" data-error=\"please select a valid end date\">\n        </div>\n      </div>\n      <div class=\"form-inline col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"startTime\">Start Time:</label><br>\n          <input type=\"text\" class=\"form-control\" id=\"startTime\" placeholder=\"start time\" data-error=\"please select a start time\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"endTime\">End Time:</label><br>\n          <input type=\"text\" class=\"form-control\" id=\"endTime\" placeholder=\"end time\" data-error=\"please select an end time\" required>\n        </div>\n        <input type=\"hidden\" id=\"endTimeStartValue\" value=\"23:00\">\n      </div>\n  </div><!-- panel-body -->\n  </div><!--panel -->\n</div><!-- col-md-12-->\n</div>");
  
});
Ember.TEMPLATES["components/edit-comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<form id=\"edit-comment-form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{
    'on': ("cancel")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "testing", {hash:{
    'on': ("delete")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  <div class=\"col-md-6\">\n  <label>Display Name</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("user name"),
    'value': ("userName")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class=\"col-md-6\">\n    <label>Email</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'class': ("form-control"),
    'placeholder': ("enter your email address"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n\n  <div class=\"col-md-6\">\n    <label>Feedback Type</label><br />\n    <select class=\"form-control\" id=\"feedbackType\">\n      <option value=\"bug\">Bug</option>\n      <option value=\"comment\">Comment</option>\n    </select>\n  </div>\n  <div class=\"col-md-6\">\n    <label>Original Feedback Date</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("date"),
    'disabled': ("disabled"),
    'class': ("form-control"),
    'value': ("createDate")
  },hashTypes:{'type': "STRING",'disabled': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'disabled': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class=\"col-md-12\">\n    <label>Subject</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("Text input"),
    'value': ("subject")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <label>Description</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'class': ("form-control"),
    'rows': ("3"),
    'value': ("description")
  },hashTypes:{'class': "STRING",'rows': "STRING",'value': "ID"},hashContexts:{'class': depth0,'rows': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    \n  </div>\n  <div class=\"col-md-12 text-right\">\n      <br />\n      <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-trash\"></i><br />delete</button>\n      <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-undo\"></i><br />undo</button>\n      <button class=\"btn btn-info\" type=\"submit\"><i class=\"fa fa-check\"></i><br />update</button>\n  </div>\n</form>");
  return buffer;
  
});
Ember.TEMPLATES["components/google-maps"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"map-canvas\"></div>");
  
});
Ember.TEMPLATES["components/info-popover"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<a tab-index=\"0\" class=\"btn btn-default info-popover\" role=\"button\" data-toggle=\"popover\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("name")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" data-content=\"Attribute definition will go here.\">\n	<i class=\"fa fa-info-circle\"></i>\n</a>\n\n\n");
  return buffer;
  
});
Ember.TEMPLATES["components/test-select2"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n		<option ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "onSelect", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "df.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\n	");
  return buffer;
  }

  data.buffer.push("<label>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n<select class=\"data-fields col-md-12 col-sm-10\" multiple=\"multiple\">\n	");
  stack1 = helpers.each.call(depth0, "df", "in", "dataFields", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</select>");
  return buffer;
  
});
Ember.TEMPLATES["components/user-form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<p>\n  <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <div class=\"col-md-6\">\n      <label>Display Name</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("form-control"),
    'value': ("userName")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n      <div class=\"col-md-6\">\n        <label>Email</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'class': ("form-control"),
    'placeholder': ("enter your email address"),
    'value': ("email")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n\n      <div class=\"col-md-6\">\n        <label>Feedback Type</label><br />\n\n        <select class=\"form-control\" id=\"feedbackType\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "feedbackType", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          <option value=\"bug\">Bug</option>\n          <option value=\"comment\">Comment</option>\n        </select>\n\n\n      </div>\n      <div class=\"col-md-6\">\n        <label>Original Feedback Date</label>\n        <input type=\"date\" id=\"theDate\" class=\"form-control\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n      </div>\n      <div class=\"col-md-12\">\n        <label>Subject</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("form-control"),
    'placeholder': ("Text input"),
    'value': ("subject")
  },hashTypes:{'type': "STRING",'class': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <label>Description</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'class': ("form-control"),
    'rows': ("3"),
    'value': ("description")
  },hashTypes:{'class': "STRING",'rows': "STRING",'value': "ID"},hashContexts:{'class': depth0,'rows': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n        \n      </div>\n      \n    </div>\n\n    <div class=\"col-md-12 text-right\">\n    <br />\n      <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n      <button type=\"submit\" class=\"btn btn-primary\">submit feedback</button>\n    </div>\n    \n  </form>\n</p>");
  return buffer;
  
});