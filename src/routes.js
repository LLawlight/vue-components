import Hello from './components/Hello'

import installMd from 'src/docs/Install.md'
import gridMd from 'src/docs/Grid.md'

import asideMd from 'src/docs/Aside.md'
import backtopMd from 'src/docs/BackTop.md'
import buttonMd from 'src/docs/Button.md'
import carrouselMd from 'src/docs/Carrousel.md'
import dropmenuMd from 'src/docs/Dropmenu.md'
import imageinputMd from 'src/docs/ImageInput.md'
import inputnumberMd from 'src/docs/InputNumber.md'
import modalMd from 'src/docs/Modal.md'
import navbarMd from 'src/docs/Navbar.md'
import paginationMd from 'src/docs/Pagination.md'
import progressMd from 'src/docs/Progress.md'
import switchMd from 'src/docs/Switch.md'
import tableMd from 'src/docs/Table.md'

const routes = [
  { path: '/', component: Hello},

  { path: '/install', component: installMd},
  { path: '/grid', component: gridMd},

  { path: '/aside', component: asideMd},
  { path: '/backtop', component: backtopMd},
  { path: '/button', component: buttonMd},
  { path: '/carrousel', component: carrouselMd},
  { path: '/dropmenu', component: dropmenuMd},
  { path: '/imageinput', component: imageinputMd},
  { path: '/inputnumber', component: inputnumberMd},
  { path: '/modal', component: modalMd},
  { path: '/navbar', component: navbarMd},
  { path: '/pagination', component: paginationMd},
  { path: '/progress', component: progressMd},
  { path: '/switch', component: switchMd},
  { path: '/table', component: tableMd}
]

export default routes
