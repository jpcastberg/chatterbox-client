var Friends = {
  data: [],
  toggleStatus: function(name) {
    if (name === App.username) {
      alert('You can\'t add yourself as a friend!');
    } else if (Friends.data.includes(name)) {
      Friends.data.splice(Friends.data.indexOf(name), 1);
    } else {
      Friends.data.push(name);
    }
    MessagesView.renderMessages($('#roomSelector option:selected').text());
  }

};