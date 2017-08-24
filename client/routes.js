BlazeLayout.setRoot('body');

FlowRouter.subscriptions = function() {
	this.register('rooms',Meteor.subscribe('rooms'));
};

FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("layoutChat", {page: "pageHome"});
	},
	subscriptions: function(params) {
		
	}
});

FlowRouter.route('/room/:roomId', {
	action: function() {
		BlazeLayout.render("layoutChat", {page: "pageRoom"});
	},
	subscriptions: function(params) {
		this.register('messagesByRoomId',Meteor.subscribe('messagesByRoomId', params.roomId));
	}
});