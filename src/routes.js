// import Hello from './components/Hello'

// import installMd from 'src/docs/Install.md'
// import gridMd from 'src/docs/Grid.md'

// import actionsheetMd from 'src/docs/ActionSheet.md'
// import asideMd from 'src/docs/Aside.md'
// import backtopMd from 'src/docs/BackTop.md'
// import buttonMd from 'src/docs/Button.md'
// import carrouselMd from 'src/docs/Carrousel.md'
// import checkboxMd from 'src/docs/Checkbox.md'
// import dimmerMd from 'src/docs/Dimmer.md'
// import dropmenuMd from 'src/docs/Dropmenu.md'
// import imageinputMd from 'src/docs/ImageInput.md'
// import inputnumberMd from 'src/docs/InputNumber.md'
// import modalMd from 'src/docs/Modal.md'
// import navbarMd from 'src/docs/Navbar.md'
// import paginationMd from 'src/docs/Pagination.md'
// import progressMd from 'src/docs/Progress.md'
// import radioMd from 'src/docs/Radio.md'
// import switchMd from 'src/docs/Switch.md'
// import tableMd from 'src/docs/Table.md'

const Hello = resolve => require(['./components/Hello.vue'], resolve)

const installMd = resolve => require(['src/docs/Install.md'], resolve)
const gridMd = resolve => require(['src/docs/Grid.md'], resolve)

const actionsheetMd = resolve => require(['src/docs/ActionSheet.md'], resolve)
const asideMd = resolve => require(['src/docs/Aside.md'], resolve)
const backtopMd = resolve => require(['src/docs/BackTop.md'], resolve)
const buttonMd = resolve => require(['src/docs/Button.md'], resolve)
const carrouselMd = resolve => require(['src/docs/Carrousel.md'], resolve)
const checkboxMd = resolve => require(['src/docs/Checkbox.md'], resolve)
const dimmerMd = resolve => require(['src/docs/Dimmer.md'], resolve)
const dropmenuMd = resolve => require(['src/docs/Dropmenu.md'], resolve)
const imageinputMd = resolve => require(['src/docs/ImageInput.md'], resolve)
const inputnumberMd = resolve => require(['src/docs/InputNumber.md'], resolve)
const modalMd = resolve => require(['src/docs/Modal.md'], resolve)
const navbarMd = resolve => require(['src/docs/Navbar.md'], resolve)
const paginationMd = resolve => require(['src/docs/Pagination.md'], resolve)
const progressMd = resolve => require(['src/docs/Progress.md'], resolve)
const radioMd = resolve => require(['src/docs/Radio.md'], resolve)
const switchMd = resolve => require(['src/docs/Switch.md'], resolve)
const tableMd = resolve => require(['src/docs/Table.md'], resolve)

const routes = [
  { path: '/', component: Hello},

  { path: '/install', component: installMd},
  { path: '/grid', component: gridMd},

  { path: '/actionsheet', component: actionsheetMd},
  { path: '/aside', component: asideMd},
  { path: '/backtop', component: backtopMd},
  { path: '/button', component: buttonMd},
  { path: '/carrousel', component: carrouselMd},
  { path: '/checkbox', component: checkboxMd},
  { path: '/dimmer', component: dimmerMd},
  { path: '/dropmenu', component: dropmenuMd},
  { path: '/imageinput', component: imageinputMd},
  { path: '/inputnumber', component: inputnumberMd},
  { path: '/modal', component: modalMd},
  { path: '/navbar', component: navbarMd},
  { path: '/pagination', component: paginationMd},
  { path: '/progress', component: progressMd},
  { path: '/radio', component: radioMd},
  { path: '/switch', component: switchMd},
  { path: '/table', component: tableMd}
]

export default routes
