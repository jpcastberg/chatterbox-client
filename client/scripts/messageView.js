var MessageView = {

  render: _.template(`
      <div class="chat">
        <a class="username"><%- username %></a>
        <div class="message"><%- text %></div>
        <div class="roomname">Posted to: <%- roomname %></div>
      </div>
    `)

};


