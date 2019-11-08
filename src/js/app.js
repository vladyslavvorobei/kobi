import addDropListArrow from './lib/addDropListArrow';
import searchActivation from './lib/search';
import scrollHeader from './lib/scrollHeader';
import burgerMenu from './lib/burgerMenu';
import firstScreenButton from './lib/firstScreenButton';
import addSliders  from './lib/swiperSlider';
import tabs  from './lib/tabs';

import "../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min"

$(document).ready(
  addDropListArrow(),
  searchActivation(),
  scrollHeader(),
  burgerMenu(),
  firstScreenButton(),
  addSliders(),
  tabs(),
);

$(document).scroll(scrollHeader);

