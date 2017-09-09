import zRow from './components/Row.vue'
import zCol from './components/Col.vue'

import zActionsheet from './components/ActionSheet.vue'
import zAside from './components/Aside.vue'
import zBacktop from './components/BackTop.vue'
import zButton from './components/Button.vue'
import zCarrousel from './components/Carrousel.vue'
// import zCheckbox from './components/Checkbox.vue'
import zDimmer from './components/Dimmer.vue'
import zDropmenu from './components/Dropmenu.vue'
import zImageinput from './components/ImageInput.vue'
import zInputnumber from './components/InputNumber.vue'
import zModal from './components/Modal.vue'
import zNavbar from './components/Navbar.vue'
import zPagination from './components/Pagination.vue'
import zProgress from './components/Progress.vue'
import zRadio from './components/Radio.vue'
import zSwitch from './components/Switch.vue'
import zTable from './components/Table.vue'

const components = [
  zRow,
  zCol,
  zActionsheet,
  zAside,
  zBacktop,
  zButton,
  zCarrousel,
  zDimmer,
  zDropmenu,
  zImageinput,
  zInputnumber,
  zModal,
  zNavbar,
  zPagination,
  zProgress,
  zRadio,
  zSwitch,
  zTable
];

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '1.1.18',
  install,
  zRow,
  zCol,
  zActionsheet,
  zAside,
  zBacktop,
  zButton,
  zCarrousel,
  zDimmer,
  zDropmenu,
  zImageinput,
  zInputnumber,
  zModal,
  zNavbar,
  zPagination,
  zProgress,
  zRadio,
  zSwitch,
  zTable
};