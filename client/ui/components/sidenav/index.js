Template.componentSidenav.helpers({
	rooms: function() {
		return Rooms.find().fetch();
	}
});