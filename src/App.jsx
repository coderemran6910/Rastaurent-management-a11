import Footer from "./components/Footer"
import MainLayout from "./layout components/mainLayout"
import {Outlet} from "react-router-dom"

import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {

  return (
    <>
    <MessengerCustomerChat
    pageId="107100258277950"
    appId="209877768834462"
  />


      <MainLayout>
        <Outlet></Outlet>
        <Footer></Footer>
      </MainLayout>
    </>
  )
}

export default App
