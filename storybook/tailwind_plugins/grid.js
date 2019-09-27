module.exports = ({ grids, gaps, variants = ['responsive'] }) => {
  return ({ e, addUtilities }) => {
    const utilities = [
      { '.grid': { display: 'grid' } },
      grids.map(columns => ({
        [`.grid-columns-${columns}`]: {
          gridTemplateColumns: '1fr '.repeat(columns),
        },
      })),
      grids.map(rows => ({
        [`.grid-rows-${rows}`]: {
          gridTemplateRows: '1fr '.repeat(rows),
        },
      })),
      Object.entries(gaps).map(value => ({
        [`.${e(`grid-gap-${value[0]}`)}`]: { gridGap: value[1] },
        [`.${e(`grid-row-gap-${value[0]}`)}`]: { gridRowGap: value[1] },
        [`.${e(`grid-column-gap-${value[0]}`)}`]: { gridColumnGap: value[1] },
      })),
    ];
    addUtilities(utilities, variants);
  };
};
