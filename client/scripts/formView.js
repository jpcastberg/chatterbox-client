var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('#username').text('Username: ' + App.username);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var newMessage = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#roomSelector option:selected').text()
    };
    $('#message').val('');
    Parse.create(newMessage, function() {
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

//$( "#myselect option:selected" ).text()