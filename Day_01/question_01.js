function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },

    decrement: function () {
      count--;
    },

    getValue: function () {
      console.log(count);
    },
  };
}

const counter = createCounter();

counter.increment();

counter.increment();

counter.increment();

counter.decrement();

counter.getValue();
