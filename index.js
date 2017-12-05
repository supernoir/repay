exports.checkForTypeNumber = value => {};

exports.getRatesLeft = (rate, paid, total) => {
  let remainingSum = total - paid;
  let remainingRates = remainingSum / rate;
  return remainingRates;
};

exports.repay = value => {
  switch (typeof value) {
    case 'object':
      throw Error('Wrong Type: Object');
    case 'string':
      throw Error('Wrong Type: String');
    case 'number':
      return value;
    default:
      return;
  }
};
