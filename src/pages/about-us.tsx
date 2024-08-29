import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    document.title = "NeLtech - About Us";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 bg-[url('./23-2.png')] bg-cover bg-center"></div>
  );
}

export default AboutUs;
