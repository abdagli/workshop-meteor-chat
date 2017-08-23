Template.pageHello.helpers({
	sayHello: function(name) {
		return 'Merhaba '+ name;
	}
});

Template.pageHello.events({
	'click .blabla': function(event) {
		console.log('MERHABALAR');
	}
});

Template.pageHello.onCreated(function() {

});

Template.pageHello.onRendered(function() {

});