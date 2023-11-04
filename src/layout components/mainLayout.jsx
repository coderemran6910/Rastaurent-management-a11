import {NavLink} from "react-router-dom"
const MainLayout = ({children}) => {

    const menu = <>
    <NavLink className="btn btn-ghost  " to={'/'}> Home </NavLink>
    <NavLink className="btn btn-ghost  " to={'/allfoods'}> All Foods </NavLink>
    <NavLink className="btn btn-ghost  " to={'/blog'}> Blog </NavLink>
    <NavLink className="btn btn-ghost  " to={'/login'}> Login </NavLink>
</>


    return (
        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="w-full max-w-7xl mx-auto">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 

      {/* Logo */}
      <div className="flex-1 px-2 mx-2 text-3xl font-extrabold "> <span className="bg-[#39DB4A] text-white p-2 rounded-xl text-2xl">Emran's</span> Food </div>


      <div className="flex-none hidden lg:block">
        <div className="menu menu-horizontal">
          {menu}
        </div>


      </div>
      </div>
    </div>
    {/* Page content here */}
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <div className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
     {menu}
    </div>
  </div>
</div>
    );
};

export default MainLayout;