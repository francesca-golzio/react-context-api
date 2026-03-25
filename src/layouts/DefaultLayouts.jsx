import { Outlet } from "react-router-dom"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

function DefaultLayouts() {


  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  )
}

export default DefaultLayouts
