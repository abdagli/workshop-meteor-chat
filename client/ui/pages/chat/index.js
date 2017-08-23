Template.pageChat.helpers({
	messages: function() {
		return Messages.find({}).fetch();
	}
});

Template.pageChat.onRendered(function() {
	Materialize.updateTextFields();
});

Template.pageChat.events({
	'submit .formMessage': function(event) {
		event.preventDefault();

		const data = {
			text: event.target.messageText.value
		}

		Meteor.call('messages.insert', data, function(err) {
			console.log(err);

			if(err) {
				Materialize.toast(err.message, 4000, 'red')
			} else {
				Materialize.toast('Mesajiniz eklendi', 4000, 'green');
			}
		});
	}
});