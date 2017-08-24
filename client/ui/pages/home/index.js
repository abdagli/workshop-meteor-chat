Template.pageHome.onRendered(function() {
	Materialize.updateTextFields();
});

Template.pageHome.events({
	'submit .formRoom': function(event) {
		event.preventDefault();

		const data = {
			name: event.target.roomName.value
		}

		Meteor.call('rooms.insert', data, function(err, res) {
			if(err) {
				Materialize.toast(err.message, 4000, 'red');
			} else {
				Materialize.toast('Odaniz eklendi', 4000, 'green');
				FlowRouter.go('/room/'+ res);
			}
		});
	}
});
