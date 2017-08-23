Meteor.publish('messages', function() {
	try {
		return Messages.find({});
	} catch(err) {
		return this.ready();
	}
});