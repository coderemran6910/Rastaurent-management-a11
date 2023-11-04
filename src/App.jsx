import Footer from "./components/Footer"
import MainLayout from "./layout components/mainLayout"
import {Outlet} from "react-router-dom"


function App() {

  return (
    <>
      <MainLayout>
        <Outlet></Outlet>
        <Footer></Footer>
      </MainLayout>
    </>
  )
}

export default App
