var Friends = {
  data: [],
  toggleFriend: function(name) {
    if (Friends.data.includes(name)) {
      Friends.data.splice(Friends.data.indexOf(name), 1);
    } else {
      Friends.data.push(name);
    }
    console.log(Friends.data);
  }

};