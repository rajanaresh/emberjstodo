App.AnyController = Ember.ArrayController.extend({
    actions: {
	createItem: function() {
	    var title = this.get('newTitle');
	    if (!title.trim()) { return; }

	    var item = this.store.createRecord('item', {
		title: title,
		isCompeleted: false
	    });

	    this.set('newTitle', '');

	    item.save();
	}
    },

    remaining: function() {
	return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function() {
	var remaining = this.get('remaining');
	return remaining === 1 ? 'item' : 'items';
    }.property('remaining')
});



