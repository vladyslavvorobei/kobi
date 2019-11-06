import addDropListArrow from './lib/addDropListArrow';
import searchActivation from './lib/search';
import scrollHeader from './lib/scrollHeader';
import burgerMenu from './lib/burgerMenu';
import firstScreenButton from './lib/firstScreenButton';
import './lib/swiperSlider';

$(document).ready(
  addDropListArrow(),
  searchActivation(),
  scrollHeader(),
  burgerMenu(),
  firstScreenButton(),
);

$(document).scroll(scrollHeader);
