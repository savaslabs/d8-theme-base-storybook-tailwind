const bemExtension = (baseClass, modifiers, blockname, extra) => {
  let classes = [];

  if (modifiers && !Array.isArray(modifiers)) {
    modifiers = [modifiers];
  }

  if (extra && !Array.isArray(extra)) {
    extra = [extra];
  }

  // If using a blockname to override default class.
  if (blockname) {
    // Set blockname class.
    classes = [...classes, `${blockname}__${baseClass}`];
    // Set blockname--modifier classes for each modifier.
    if (modifiers && modifiers.length > 0) {
      for (let i = 0; i < modifiers.length; i += 1) {
        const modifier = modifiers[i];
        if (modifier !== '') {
          classes = [...classes, `${blockname}__${baseClass}--${modifier}`];
        }
      }
    }
    // If not overriding base class.
  } else {
    // Set base class.
    classes = [...classes, baseClass];
    // Set base--modifier class for each modifier.
    if (modifiers && modifiers.length > 0) {
      for (let i = 0; i < modifiers.length; i += 1) {
        const modifier = modifiers[i];
        if (modifier !== '') {
          classes = [...classes, `${baseClass}--${modifier}`];
        }
      }
    }
  }

  // If extra non-BEM classes are added.
  if (extra && extra.length > 0) {
    for (let i = 0; i < extra.length; i += 1) {
      const extraClass = extra[i];
      if (extraClass !== '') {
        classes = [...classes, extraClass];
      }
    }
  }

  return `class="${classes.join(' ')}"`;
};

export default bemExtension;
