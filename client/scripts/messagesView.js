var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.$chats.html('');
    for (var i = 0; i < Messages.data.length; i++) {
      if (this.validate(Messages.data[i])){
        var $messageHTML = $(MessageView.render(Messages.data[i]));
        $messageHTML.appendTo(this.$chats);        
      }
    }
  },

  render: function() {
    
  },
  
  validate: function(obj) {
    
    if (!obj.objectId || !obj.username || !obj.text) {
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
/*

createdAt:
"2019-01-15T00:08:52.885Z"

objectId:
"X4L8K19k5K"

roomname:
"MessagesFromTheTM"

text:
"How is the sprint going triple-aces?"

updatedAt:
"2019-01-15T00:08:52.885Z"

username:
"Nick"

*/