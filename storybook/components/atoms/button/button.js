/*
  Example JavaScript for Storybook/Drupal projects.
*/

export const onMouseover = e => {
  console.log(e.currentTarget);
};

export const Button = () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', onMouseover);
  });
};

/*
  Only call if item is on the page.
  Do not call if Storybook wrapper is present.
  Function will be called separately in SB story.
*/

if (
  document.querySelectorAll('.button') !== null &&
  document.querySelectorAll('#storybook-preview-wrapper') == null
) {
  Button();
}
