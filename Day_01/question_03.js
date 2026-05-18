function sendMessages(messages) {
  let delay = 1000;

  return function () {
    for (let word of messages) {
      setTimeout(function () {
        console.log(word);
      }, delay);

      delay += 1000;
    }

  };
}

const temp = sendMessages(["Hi", "Welcome", "Start learning"]);
temp();
