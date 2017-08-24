new ValidatedMethod({
	name: 'messages.insert',
	validate: function(){},
	run: function(data) {
		Messages.insert({
			text: data.text,
			roomId: data.roomId
		});
	}
});

new ValidatedMethod({
	name: 'rooms.insert',
	validate: function(){},
	run: function(data) {
		const roomId = Rooms.insert({
			name: data.name
		});

		return roomId;
	}
});