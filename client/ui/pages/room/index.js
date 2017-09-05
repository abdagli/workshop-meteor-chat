Template.pageRoom.helpers({
	messages: function() {
		return Messages.find({}).fetch();
	}
});

Template.pageRoom.onRendered(function() {
	Materialize.updateTextFields();
});

Template.pageRoom.events({
	'submit .formMessage': function(event, instance) {
		event.preventDefault();

		const roomId = FlowRouter.getParam("roomId");
		const data = {
			text: event.target.messageText.value,
			roomId: roomId
		}

		Meteor.call('messages.insert', data, function(err) {
			if(err) {
				Materialize.toast(err.message, 4000, 'red')
			} else {
				Materialize.toast('Mesajiniz eklendi', 4000, 'green');
				instance.find('#messageText').value = '';
			}
		});
	}
});
