var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $input: $('#rooms input'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.addRoom.bind(RoomsView));
  },
  
  addRoom: function() {
    var roomText = this.$input.val();
    Rooms.data.push(roomText);
    this.$input.val('');
    $('#rooms select').append(`<option>${roomText}</option>`);
  },

  render: function() {
  }

};

// $('#select').append($('<option>', {value:1, text:'One'}));
// $('#select').append('<option value="1">One</option>');
// var option = new Option(text, value); $('#select').append($(option));