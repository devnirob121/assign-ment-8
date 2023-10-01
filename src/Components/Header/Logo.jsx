import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="logo w-60 h-12 ">
        <Link to="/">
          <img className="w-full h-full object-contain" src="https://i.ibb.co/4fNVjMj/Logo.png" alt="logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
