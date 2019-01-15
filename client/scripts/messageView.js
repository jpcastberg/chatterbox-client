var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="roomname"><%= roomname %></div>
        <div class="username"><%= username %></div>
        <div class="message"><%- text %></div>
        <div class="createdAt"><%= createdAt %></div>
        <div class="updatedAt"><%= updatedAt %></div>
      </div>
    `)

};


