new ValidatedMethod({
	name: 'messages.insert',
	validate: function(){},
	run: function(data) {
		Messages.insert({
			text: data.text
		});
	}
});