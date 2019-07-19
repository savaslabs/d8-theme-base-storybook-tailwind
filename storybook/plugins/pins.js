module.exports = ({ pins, variants = [] }) => {
  return ({ e, addUtilities }) => {
    const utilities = Object.keys(pins).map(key => {
      return {
        [`.${e(`pin-${key}`)}`]: pins[key],
      };
    });

    addUtilities(utilities, variants);
  };
};
