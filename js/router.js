App.Router.map(function() {
    this.resource('any', { path: '/' });
});

App.AnyRoute = Ember.Route.extend({
    model: function() {
	return this.store.find('item');
    }
});

