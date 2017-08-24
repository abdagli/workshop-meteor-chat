Messages = new Mongo.Collection("messages");

MessagesSchema = new SimpleSchema({
	text: {
		type: String
	},

	roomId: {
		type: SimpleSchema.RegEx.Id
	}
});

Messages.attachSchema(MessagesSchema);