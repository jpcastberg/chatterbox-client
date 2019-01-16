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

  render: _.template(`<div class="roomname"><%- roomname %></div>`)
  

};

// $('#select').append($('<option>', {value:1, text:'One'}));
// $('#select').append('<option value="1">One</option>');
// var option = new Option(text, value); $('#select').append($(option));