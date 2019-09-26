export const onMouseover = e => {
  console.log(e.currentTarget);
};

export const Button = () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', onMouseover);
  });
};

if (
  document.querySelectorAll('.button') !== null &&
  document.querySelectorAll('#storybook-preview-wrapper') == null
) {
  Button();
}
