function firstScreenButton() {
  const $button = $('.first-screen__nav-btn');
  const $buttonNewClass = 'first-screen__nav-btn--active';
  const $nav = $('.first-screen__nav');
  const $navNewClass = 'first-screen__nav--active';

  function addClass() {
    $nav.toggleClass($navNewClass);
    $button.toggleClass($buttonNewClass);
  }


  $button.click(addClass)
  console.log('firstScreenButton - ready')
}

module.exports = firstScreenButton;
