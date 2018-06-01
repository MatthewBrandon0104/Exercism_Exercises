var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
    if (who === undefined) {
        who = 'One for you, one for me.';
    } else { who = `One for ${who}, one for me.` }
  return who;
};

module.exports = TwoFer;
