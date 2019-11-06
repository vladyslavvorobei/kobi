function searchActivation() {
  const $search = $('.search');
  const $searchInput = $('.search__input');
  const $searchClass = 'search--active';

  function addClass() {
    if($search.hasClass($searchClass) === false) {
      $search.addClass($searchClass);
    } else if ($searchInput.val().trim().length) {
      $search.removeClass($searchClass);
    }
  }
  function removeClass() {
    if ($search.hasClass($searchClass) === true) {
      $search.removeClass($searchClass);
    }
  }



  $(document).mouseup(function(e) {
    if (!$search.is(e.target) && $search.has(e.target).length === 0) {
      removeClass();
    }
  });

  $search.click(addClass);

}

module.exports = searchActivation;
