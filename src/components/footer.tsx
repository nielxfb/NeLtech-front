import DynamicLayout from "../layouts/dynamic-layout";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import IconRedirect from "./icon-redirect";

function Footer() {
  return (
    <DynamicLayout>
      <div className="flex justify-between items-center py-8">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-2xl font-bold text-center text-blue-700">
            NeLtech
          </h1>
          <p className="text-sm font-semibold text-center text-slate-600">
            A perfect IT solution
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-2xl font-bold text-center text-blue-700">
            Quick Links
          </h1>
          <a
            className="text-sm font-semibold text-center text-slate-600"
            href="/"
          >
            Home
          </a>
          <a
            className="text-sm font-semibold text-center text-slate-600"
            href="/products"
          >
            Products
          </a>
          <a
            className="text-sm font-semibold text-center text-slate-600"
            href="/about-us"
          >
            About Us
          </a>
        </div>
        <div className="flex flex-col justify-center items-end gap-2">
          <h1 className="text-2xl font-bold text-center text-blue-700">
            Social Media
          </h1>
          <div className="flex items-center justify-center gap-2 text-3xl text-slate-700">
            <IconRedirect url="https://www.instagram.com/nielxfb" icon={<FaInstagram />} />
            <IconRedirect url="https://github.com/nielxfb" icon={<FaGithubSquare />} />
            <IconRedirect url="https://open.spotify.com/user/31qobdyvmuct5pave4hv6q5vt7ca?si=961e3649b3474548" icon={<FaSpotify />} />
          </div>
        </div>
      </div>
    </DynamicLayout>
  );
}

export default Footer;
