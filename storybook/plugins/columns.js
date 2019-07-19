module.exports = ({ columns, variants = [] }) => {
  return ({ e, addUtilities }) => {
    const utilities = columns.map(value => {
      return {
        [`.${e(`columns-${value}`)}`]: {
          columns: `${value}`,
        },
      };
    });

    addUtilities(utilities, variants);
  };
};
