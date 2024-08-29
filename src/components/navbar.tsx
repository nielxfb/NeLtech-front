import { Link } from "react-router-dom";
import DynamicLayout from "../layouts/dynamic-layout";
import StyledLink from "./styled-link";

function Navbar() {
  return (
    <DynamicLayout>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-center text-blue-700">NeLtech</Link>
        <div className="flex items-center justify-around px-4 py-6 w-1/2">
          <StyledLink to="/" text="Home" />
          <StyledLink to="/products" text="Products" />
          <StyledLink to="/about-us" text="About Us" />
        </div>
      </div>
    </DynamicLayout>
  );
}

export default Navbar;
