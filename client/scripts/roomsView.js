var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $input: $('#rooms input'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.addRoom.bind(RoomsView));
  },
  
  addRoom: function() {
    Rooms.data.push(this.$input.val());
    this.$input.val('');
  },

  render: function() {
  }

};
