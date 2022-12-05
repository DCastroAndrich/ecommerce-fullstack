import Logo from "../components/Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="flex bg-black text-white">
      <div className="flex flex-1 flex-col p-5 ">
        <Logo />
        <p className="my-5 w-3/4 text-justify">
          est nostrud nostrud est Lorem labore veniam irure in laborum ad dolore
          eiusmod non magna nostrud sunt sunt qui irure cupidatat veniam Lorem
          est cupidatat
        </p>
        <div className="flex text-white ">
          <div className="mx-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-red-600">
            <InstagramIcon fontSize="medium" />
          </div>
          <div className="mx-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-blue-600">
            <FacebookIcon fontSize="medium" />
          </div>
          <div className="mx-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-black">
            <GitHubIcon fontSize="medium" />
          </div>
          <div className="mx-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-blue-400">
            <TwitterIcon fontSize="medium" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-5">
        <h3 className="mb-3 text-2xl font-medium">Useful links</h3>
        <ul className="flex flex-wrap">
          <li className="mb-2 w-1/2">Home</li>
          <li className="mb-2 w-1/2">Cart</li>
          <li className="mb-2 w-1/2">Man Shoes</li>
          <li className="mb-2 w-1/2">Woman Shoes</li>
          <li className="mb-2 w-1/2">My Account</li>
          <li className="mb-2 w-1/2">Order Tracking</li>
          <li className="mb-2 w-1/2">Wishlist</li>
          <li className="mb-2 w-1/2">Terms </li>
        </ul>
      </div>

      <div className="flex-1 p-5">
        <h3 className="mb-3 text-2xl font-medium">Contact</h3>
        <div className="mb-2 mr-2">
          <MapIcon /> 31 e/ 694 y 695, Ignacio
          Correa - La Plata - 1909
        </div>
        <div className="mb-2 mr-2">
          <PhoneIcon /> +549 221 234 5678
        </div>
        <div className="mb-2 mr-2">
          <EmailIcon /> info@invictus.dev
        </div>
      </div>
    </div>
  );
};

export default Footer;
