(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['links'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <div class = 'grocery-item'>\r\n    <p>\r\n      "
    + alias2(alias1((depth0 != null ? depth0.shortUrl : depth0), depth0))
    + "\r\n      <span class='bait'> "
    + alias2(alias1((depth0 != null ? depth0.hits : depth0), depth0))
    + " </span>\r\n    </p>\r\n  </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.top_5 : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();