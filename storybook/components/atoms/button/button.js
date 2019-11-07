// /*
//   Example JavaScript for Storybook/Drupal projects.
// */

// Create your Class function.
export class ButtonScript {
  // The btn is passed by Drupal in below code.
  // It's passed by Storybook withn the useEffect block.
  constructor(btn) {
    Object.defineProperty(this, 'button', { value: btn || null });
    this.bindEvents();
  }

  bindEvents() {
    this.button.addEventListener('mouseover', this.onClick);
  }

  onClick() {
    console.log(this);
  }
}

export default ButtonScript;

// Wrap Drupal specific code in a try/catch.
try {
  // Basically, if Storybook, throw an error and stop executing code.
  if (!Drupal.behaviors) {
    throw new Error("You're not in Drupal");
  }
  // Wrap in Drupal behaviors.
  // eslint-disable-next-line
  (({ behaviors }, { theme_name }) => {
    behaviors.button = {
      attach(context) {
        context.querySelectorAll('.button').forEach(button => {
          // eslint-disable-next-line
          new ButtonScript(button);
        });
      },
    };
  })(Drupal, drupalSettings);
} catch (err) {
  // Catch the error we threw above.
  if (err.message === "You're not in Drupal") {
    console.log('Drupal specific code ignored in Storybook.');
  }
}
