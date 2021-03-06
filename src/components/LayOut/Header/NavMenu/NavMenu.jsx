import { NavLink } from 'react-router-dom';

import s from './style.module.css';

function NavMenu() {
  const getActiveLink = ({ isActive }) =>
    isActive ? s.linkActive + ' ' + s.link : s.link;
  return (
    <div className={s.navMenue}>
      <NavLink className={getActiveLink} to="/">
        Home
      </NavLink>

      <NavLink className={getActiveLink} to="/shop">
        Shops
      </NavLink>

      <NavLink className={getActiveLink} to="/cart">
        Cart
      </NavLink>
    </div>
  );
}

export default NavMenu;
