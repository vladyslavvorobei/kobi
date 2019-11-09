

function addModal() {
  $('.modal').popup({
    transition: 'all 0.3s',
    outline: true,
    focusdelay: 400,
    vertical: 'top'
  });
  console.log('modal-ready')
}

module.exports = addModal;
