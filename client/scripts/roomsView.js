var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $input: $('#rooms input'),

  initialize: function() {
    // for (var i = 0; i < Rooms.data.length; i++) {
    //   RoomsView.$select.children().each(function(element) {
    //     if (!Rooms.data.includes($(element).text())) {
    //       Rooms.data.push($(element).text());
    //       //RoomsView.$select.append(`<option>${Rooms.data[i]}</option>`);
    //     }
    //   });
    // }
    RoomsView.$button.on('click', function () {
      var text = RoomsView.$input.val();
      RoomsView.$input.val('');
      RoomsView.renderRoom(text);
    });
    
    RoomsView.$select.on('change', function() {
      if ($('#roomSelector option:selected').text() === 'Add New Room') {
        var newRoom = prompt('Please enter a name for your room.');
        if (newRoom) {
          alert('Room created! Entering Your new room now...');
          RoomsView.renderRoom(newRoom);
          $('#roomSelector').val(newRoom);
          App.startSpinner();
          App.fetch(App.stopSpinner);
        } else {
          $('#roomSelector').val('ALL');
          App.startSpinner();
          App.fetch(App.stopSpinner);
        }
      } else {
        MessagesView.renderMessages($('#roomSelector option:selected').text());
      }
    });
  },
  
  renderRoom: function(text) {
    //debugger;
    if (!text) {
      return;
    }
    text = text.trim();
    if (text.length && !Rooms.data.includes(text)) {
      Rooms.data.push(text);
      RoomsView.$select.append(`<option>${text}</option>`);
    }
  },
  
  add: function () {
    for (var i = 0; i < Messages.data.length; i++) {
      RoomsView.renderRoom(Messages.data[i].roomname);
    }
  },
  
  

  render: _.template(`<div class="roomname"><%- roomname %></div>`)
  

};

// $('#select').append($('<option>', {value:1, text:'One'}));
// $('#select').append('<option value="1">One</option>');
// var option = new Option(text, value); $('#select').append($(option));