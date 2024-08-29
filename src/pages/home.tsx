import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BackgroundImg = styled.div`
  background-image: url("./home-background.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30vh;
  color: white;
`;

function Home() {
  useEffect(() => {
    document.title = "NeLtech - Home";
  }, []);

  return (
    <BackgroundImg>
      <h1 className="text-[100px] font-bold text-center text-[#ffffffea]">
        Welcome to NeLtech
      </h1>
      <Link
        to="/products"
        className="bg-blue-900 py-3 px-8 rounded-md text-2xl shadow text-center font-semibold"
      >
        Shop Now
      </Link>
    </BackgroundImg>
  );
}

export default Home;
