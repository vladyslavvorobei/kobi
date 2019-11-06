function addDropListArrow() {
  const $innerTitle = $('.nav__list-title--inner');
  const addTitleClass = 'nav__list-title--drop-list';
  const $innerParent = $('.nav__list-item--inner');
  const $dropList = $('.nav__list--last');
  const finded = $innerTitle.closest($innerParent).find($dropList);

  finded.closest($innerParent).find($innerTitle).addClass(addTitleClass);

}

module.exports = addDropListArrow;
