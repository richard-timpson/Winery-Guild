import wineryListView from '../components/WineryListView/wineryListComp.js'
// import upgradeView from '../components/UpgradeView/upgradeComp.js'
// import unclaimedWineryView from '../components/UnclaimedWineryView/unclaimedWineryComp.js'
import claimView from '../components/ClaimView/claimComp.js'
import claimedWineryView from '../components/ClaimedWineryView/claimedWineryComp.js'
import wineryNavigation from '../components//NavigationComponent/navigationComp.js'
import footerComponent from '../components/FooterComponent/footerComp.js'

const routes = [
  {
    path: '/wineries',
    component: wineryListView
  },
  // {
  //   path: '/upgrade',
  //   component: upgradeView,
  //   // props: {
  //   //   default: true,
  //   //   expenses: []
  //   // }
  // },
  {
    path: '/claim',
    component: claimView
  },
  {
      path: '/winery',
      component: claimedWineryView
  },
  {
    path:'/',
    component:wineryListView
  }
]

export default routes
