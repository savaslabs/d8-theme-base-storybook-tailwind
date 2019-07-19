module.exports = ({ ratios, variants = [] }) => {
  return ({ e, addUtilities }) => {
    const utilities = Object.keys(ratios).map(key => {
      return {
        [`.${e(`aspect-ratio-${key}`)}`]: {
          height: 0,
          paddingBottom: ratios[key],
        },
      };
    });

    addUtilities(utilities, variants);
  };
};
