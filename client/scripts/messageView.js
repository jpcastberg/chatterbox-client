var MessageView = {

  render: _.template(`
      <!--
      <div id="<%= objectId %>" class="chat">
        <div class="roomname"><%= roomname %></div>
        <div class="username"><%= username %></div>
        <div class="message"><%- text %></div>
        <div class="createdAt"><%= createdAt %></div>
        <div class="updatedAt"><%= updatedAt %></div>
      </div>
      -->
    `)

};

/*

createdAt:
"2019-01-15T00:08:52.885Z"

objectId:
"X4L8K19k5K"

roomname:
"MessagesFromTheTM"

text:
"How is the sprint going triple-aces?"

updatedAt:
"2019-01-15T00:08:52.885Z"

username:
"Nick"

*/