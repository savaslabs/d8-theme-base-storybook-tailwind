module.exports = ({ transitions, variants = [] }) => {
  return ({ e, addUtilities }) => {
    const utilities = Object.keys(transitions).map(key => {
      let className = `transition-${key}`;

      if (key === 'default') {
        className = 'transition';
      }

      return {
        [`.${e(className)}`]: {
          transition: transitions[key],
        },
      };
    });

    addUtilities(utilities, variants);
  };
};
