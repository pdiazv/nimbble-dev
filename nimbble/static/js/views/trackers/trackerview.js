define([
  'jquery',
  'handlebars',
  'backbone',
  'text!/static/frontend/fe_tracker.html'
], function($, Handlebars, Backbone, trackerTemplate){
    var TrackerView = Backbone.View.extend({

        tagName: 'li',
        template: Handlebars.compile(trackerTemplate),
        events: {
            'click .js-deactivate': 'deactivateTracker',
        },

        deactivateTracker: function(e){
            alert('deactivate me');
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

    });

    return TrackerView;
});
