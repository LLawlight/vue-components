import zAside from './Aside.vue'
import zButton from './Button.vue'
import zDropmenu from './Dropmenu.vue'
import zImageinput from './ImageInput.vue'
import zInputnumber from './InputNumber.vue'
import zModal from './Modal.vue'
import zNavbar from './Navbar.vue'
import zPagination from './Pagination.vue'
import zProgress from './Progress.vue'
import zSwitch from './Switch.vue'
import zTable from './Table.vue'

const install = (Vue) => {
  Vue.component(Alert.name, zAlert)
  Vue.component(Button.name, zButton)
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

const ZVueComponents = {
  install,

  zAside,
  zButton,
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
