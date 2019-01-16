var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var newMessage = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#roomSelector option:selected').text()
    };
    Parse.create(newMessage);
    $('#message').val('');
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

//$( "#myselect option:selected" ).text()