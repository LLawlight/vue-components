import zAside from './Aside.vue'
import zBacktop from './BackTop.vue'
import zButton from './Button.vue'
import zCarrousel from './Carrousel.vue'
import zDropmenu from './Dropmenu.vue'
import zImageinput from './ImageInput.vue'
import zInputnumber from './InputNumber.vue'
import zModal from './Modal.vue'
import zNavbar from './Navbar.vue'
import zPagination from './Pagination.vue'
import zProgress from './Progress.vue'
import zSwitch from './Switch.vue'
import zTable from './Table.vue'

const zyx = (Vue) => {
  Vue.component(zAside.name, zAside)
  Vue.component(zBacktop.name, zBacktop)
  Vue.component(zButton.name, zButton)
  Vue.component(zCarrousel.name, zCarrousel)
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
  zyx(window.Vue);
};

const ZVueComponents = {
  zyx,

  zAside,
  zBacktop,
  zButton,
  zCarrousel,
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

module.exports = ZVueComponents
