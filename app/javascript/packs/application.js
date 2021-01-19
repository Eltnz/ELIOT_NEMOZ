require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import {scroll} from "../plugins/scroll";

document.addEventListener('turbolinks:load', () => {
  scroll();
});
