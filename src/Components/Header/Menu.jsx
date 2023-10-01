import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="flex gap-5 text-lg">
        <li>
          <NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/donations'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink to='/statistics'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } >
            Statistics
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Menu;
