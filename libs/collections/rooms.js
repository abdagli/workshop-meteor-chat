Rooms = new Mongo.Collection("rooms");

RoomsSchema = new SimpleSchema({
	name: {
		type: String
	}
});

Rooms.attachSchema(RoomsSchema);