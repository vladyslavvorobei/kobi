function tabs() {
  const $tabsCaption = $('.card-product__caption');
  const $tabsCaptionChild = $('.card-product__caption li');
  const $addCaptionClass = 'card-product__caption--active';
  const $tabsParent = $('.card-product__tabs');
  const $tabsContent = $('.card-product__content');
  const $addContentClass = 'card-product__content--active';

  $tabsCaptionChild.eq(0).addClass($addCaptionClass);
  $tabsContent.eq(0).addClass($addContentClass);

  function addTabs() {
    $(this)
      .addClass($addCaptionClass).siblings().removeClass($addCaptionClass)
      .closest($tabsParent).find($tabsContent).removeClass($addContentClass).eq($(this).index()).addClass($addContentClass);
  }


  $tabsCaption.on('click', 'li:not(.card-product__caption--active)', addTabs);
}

module.exports = tabs;
