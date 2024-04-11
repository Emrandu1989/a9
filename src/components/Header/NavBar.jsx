import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const NavBar = () => {
      const {user, logOut} = useContext(AuthContext);
    const links = <>
             <li> <NavLink className={'hover:text-orange-500'} to='/'>Home</NavLink> </li>
             <li> <NavLink className={'hover:text-orange-500'} to='/about'>About</NavLink> </li>
             <li> <NavLink className={'hover:text-orange-500'} to='/properties'>Properties</NavLink> </li>
             <li> <NavLink className={'hover:text-orange-500'} to='/blog'>Blog</NavLink> </li> 
             
    </>

    const handleLogOut = () =>{
           logOut()
           .then(result=>{
           
           })
           .catch(error=>{
            console.log(error)
           })
    }
    return (
        <>
            <div className="navbar bg-[#f7f7f7]">
  <div className="navbar-start mx-auto">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {links}
       
      </ul>
    </div>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
           {links}

    </ul>
  </div>
  </div>
 
  <a className="btn btn-ghost text-xl">Regal Residences</a>
  <div className="navbar-end">
  <div className="avatar">

    
    {
      user &&    <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img title={user.displayName} src={user.photoURL} />
    </div>
    }

</div>
     <div className="ml-5">
     {
        user ? <button onClick={handleLogOut}>LogOut</button> :    <Link to='/login' className="btn">Login</Link>
     }
     </div>
  </div>
</div>
        </>
    );
};

export default NavBar;