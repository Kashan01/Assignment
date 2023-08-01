const sum = function (arr) {
  let total = 0;
  arr.forEach((elem) => {
    total += elem;
  });
  return total;
};

module.exports = { sum };
