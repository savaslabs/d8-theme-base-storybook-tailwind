module.exports = ({ orders, variants = [] }) => {
  return ({ e, addUtilities }) => {
    const utilities = orders.map(value => {
      return {
        [`.${e(`order-${value}`)}`]: {
          order: `${value}`,
        },
      };
    });

    addUtilities(utilities, variants);
  };
};
