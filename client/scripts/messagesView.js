var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    MessagesView.$chats.on('click', '.username', function(event) {
      //debugger;
      Friends.toggleFriend($(this).text());
    });
  },

  renderMessages: function(room) {
    this.$chats.html('');
    for (var i = 0; i < Messages.data.length; i++) {
      MessagesView.renderMessage(Messages.data[i]);
    }
  },

  renderMessage: function(data) {
    if (this.validate(data)) {
      var $messageHTML = $(MessageView.render(data));
      $messageHTML.appendTo(this.$chats);
      RoomsView.renderRoom(data.roomname);
    }
  },
  
  validate: function(obj) {
    
    if (!obj.username || !obj.text) {
      return false;
    }
    if (!obj.createdAt) {
      obj.createdAt = 'Unknown';
    }
    if (!obj.roomname) {
      obj.roomname = 'Public';
    }
    if (!obj.updatedAt) {
      obj.updatedAt = 'Unknown';
    }
    return true;
  }
};

  // initialize: function() {
  //   this.$chats.html('');
  //   for (var i = 0; i < Messages.data.length; i++) {
  //     MessagesView.renderMessage(Messages.data[i]);
  //   }
  // },

  // renderMessage: function(data) {
  //   if (this.validate(data)) {
  //     var $messageHTML = $(MessageView.render(data));
  //     $messageHTML.appendTo(this.$chats);
  //     if (!Rooms.data.includes(data.roomname)) {
  //       Rooms.data.push(data.roomname);
  //       RoomsView.$select.append(`<option>${data.roomname}</option>`);
  //     }
  //   }
  // },