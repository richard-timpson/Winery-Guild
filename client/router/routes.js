import wineryListView from '../components/WineryListView/wineryListComp.js'
// import upgradeView from '../components/UpgradeView/upgradeComp.js'
// import unclaimedWineryView from '../components/UnclaimedWineryView/unclaimedWineryComp.js'
import claimView from '../components/ClaimView/claimComp.js'
import claimedWineryView from '../components/ClaimedWineryView/claimedWineryComp.js'
import wineryNavigation from '../components//NavigationComponent/navigationComp.js'
import footerComponent from '../components/FooterComponent/footerComp.js'
import adminView from '../components/AdminView/adminComp.js'
const routes = [
  {
    path:'/wineries',
    component: wineryListView,
    name:'all'
  },
  {
    path: '/wineries/:state/',
    component: wineryListView,
    props: true,
    name: 'state',
  },
  {
    path: '/wineries/:state/:county',
    component: wineryListView,
    props: true,
    name: 'county'
  },
  {
    path: '/wineries/:state/:county/:city',
    component: wineryListView,
    props: true,
    name: 'city'
  },

  {
    path: '/claim',
    component: claimView
  },
  {
      path: '/winery/:state/:county/:_id',
      component: claimedWineryView,
      props: true,
      name: 'winery'
  },
  {
    path:'/',
    redirect: '/wineries'

  },
  {
    path:'/admin',
    component: adminView
  }
]

export default routes
