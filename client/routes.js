BlazeLayout.setRoot('body');

FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("layoutDefault", {page: "pageHello"});
	}
});

FlowRouter.route('/aboutus', {
	action: function() {
		BlazeLayout.render("layoutDefault", {page: "pageAboutus"});
	}
});

FlowRouter.route('/chat', {
	action: function() {
		BlazeLayout.render("layoutDefault", {page: "pageChat"});
	},
	subscriptions: function() {
		this.register('messages',Meteor.subscribe('messages'));
	}
});