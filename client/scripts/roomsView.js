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
    RoomsView.$button.on('click', RoomsView.renderRoom.bind(RoomsView));
  },
  
  renderRoom: function() {
    var roomText = RoomsView.$input.val().trim();
    if (roomText.length) {
      Rooms.data.push(roomText);
      RoomsView.$input.val('');
      $('#rooms select').append(`<option>${roomText}</option>`);
    }
  },

  render: _.template(`<div class="roomname"><%- roomname %></div>`)
  

};

// $('#select').append($('<option>', {value:1, text:'One'}));
// $('#select').append('<option value="1">One</option>');
// var option = new Option(text, value); $('#select').append($(option));