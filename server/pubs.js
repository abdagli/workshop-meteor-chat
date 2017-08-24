Meteor.publish('messagesByRoomId', function(roomId) {
	try {
		return Messages.find({
			roomId: roomId
		});
	} catch(err) {
		return this.ready();
	}
});

Meteor.publish('rooms', function() {
	try {
		return Rooms.find({});
	} catch(err) {
		return this.ready();
	}
});