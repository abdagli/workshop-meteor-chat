Messages = new Mongo.Collection("messages");

MessagesSchema = new SimpleSchema({
	text: {
		type: String
	}
});

Messages.attachSchema(MessagesSchema);