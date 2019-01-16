var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    MessagesView.$chats.on('click', '.username', function(event) {
      //debugger;
      Friends.toggleStatus($(this).text());
    });
    $('#refresh').on('click', function() {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });
  },

  renderMessages: function(room = 'ALL') {
    this.$chats.html('');
    for (var i = 0; i < Messages.data.length; i++) {
      if (Messages.data[i].roomname === room || room === 'ALL') {
        MessagesView.renderMessage(Messages.data[i]);
      }
    }
    if (this.$chats.children().length === 0) {
      this.$chats.text('This room is lonely! Add a new message to warm it up.');
    }
  },

  renderMessage: function(data) {
    if (this.validate(data)) {
      var $messageHTML = $(MessageView.render(data));
      if (Friends.data.includes(data.username)) {
        $messageHTML.addClass('friend');
      }
      $messageHTML.appendTo(this.$chats);
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