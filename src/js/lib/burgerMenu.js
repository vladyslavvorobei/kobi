function burgerMenu() {
  const $burgerBtn = $('.header__burger-btn');
  const $burgerBtnAddClass = 'header__burger-btn--active';
  const $burgerHeader = $('.header');
  const $addBurgerHeaderClass = 'header--active';
  const $burgerNavWrapper = $('.header__mobile-nav');
  const $addBurgerNavClass = 'header__mobile-nav--active';
  const $burgerLinks = $('.nav a');

  function addBurgerClass(e) {
    e.preventDefault();
    $burgerBtn.toggleClass($burgerBtnAddClass);
    $burgerNavWrapper.toggleClass($addBurgerNavClass);
    $burgerHeader.toggleClass($addBurgerHeaderClass);
  }

  function closeBurger() {
    $burgerBtn.removeClass($burgerBtnAddClass);
    $burgerNavWrapper.removeClass($addBurgerNavClass);
    $burgerHeader.removeClass($addBurgerHeaderClass);
  }

  $(window).resize(function () {
    if (window.innerWidth > 1199) {
      closeBurger();
    }
  });

  $burgerBtn.click(addBurgerClass);
  $burgerLinks.click(closeBurger);

  $(document).mouseup(function(e) {
    if (!$burgerHeader.is(e.target) && $burgerHeader.has(e.target).length === 0) {
      closeBurger();
    }
  });

}

module.exports = burgerMenu;
