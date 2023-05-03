import {NavLink} from 'react-router-dom'


const Header = () => {

    const navDataHandler = (navData)=>{
       return navData.isActive? 'active' : ''
    };

  return (
    <div className="bg-white border-b-1 border-yellow-500 shadow-2xl sticky z-10">
      <header  className="flex justify-between items-center px-3 py-4 mx-auto max-w-6xl">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            className="h-5 cursor-pointer"
            alt="logo"
          />
        </div>
        <div>
        <ul className="flex space-x-10">
          <li><NavLink className={navDataHandler} to={'/'}> Home </NavLink></li>
          <li><NavLink className={navDataHandler} to={'/offers'}> Offers </NavLink></li>
          <li><NavLink className={navDataHandler} to={'/sign-in'}> Sign in </NavLink></li>
        </ul>
      </div>
      </header>
      
    </div>
  );
};

export default Header;
