import zRow from './components/Row.vue'
import zCol from './components/Col.vue'

import zActionsheet from './components/ActionSheet.vue'
import zAside from './components/Aside.vue'
import zBacktop from './components/BackTop.vue'
import zButton from './components/Button.vue'
import zCarrousel from './components/Carrousel.vue'
import zDimmer from './components/Dimmer.vue'
import zDropmenu from './components/Dropmenu.vue'
import zImageinput from './components/ImageInput.vue'
import zInputnumber from './components/InputNumber.vue'
import zModal from './components/Modal.vue'
import zNavbar from './components/Navbar.vue'
import zPagination from './components/Pagination.vue'
import zProgress from './components/Progress.vue'
import zSwitch from './components/Switch.vue'
import zTable from './components/Table.vue'

const install = (Vue) => {
  if (install.installed) return;

  Vue.component(zRow.name, zRow)
  Vue.component(zCol.name, zCol)

  Vue.component(zActionsheet.name, zActionsheet)
  Vue.component(zAside.name, zAside)
  Vue.component(zBacktop.name, zBacktop)
  Vue.component(zButton.name, zButton)
  Vue.component(zCarrousel.name, zCarrousel)
  Vue.component(zDimmer.name, zDimmer)
  Vue.component(zDropmenu.name, zDropmenu)
  Vue.component(zImageinput.name, zImageinput)
  Vue.component(zInputnumber.name, zInputnumber)
  Vue.component(zModal.name, zModal)
  Vue.component(zNavbar.name, zNavbar)
  Vue.component(zPagination.name, zPagination)
  Vue.component(zProgress.name, zProgress)
  Vue.component(zSwitch.name, zSwitch)
  Vue.component(zTable.name, zTable)
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,

  zCol,
  zRow,

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
  zSwitch,
  zTable
}
