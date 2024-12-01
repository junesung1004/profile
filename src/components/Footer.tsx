import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const path = pathname.split("/").join("");
  console.log("path : ", path);

  const footerCss = path === "coverletter" ? "fixed bottom-0 w-full" : "w-full";

  return (
    <footer className={`${footerCss} flex flex-col justify-center items-center  h-32 bg-black text-white`}>
      <p>Copyright © 2024. All rights reserved.</p>
      <p className="hidden sm:block">Web Front-End Developer Portfolio by Junesung Park 💓</p>
      <p className="block sm:hidden">Web Front-End Developer Portfolio</p>
      <p className="block sm:hidden">by Junesung Park 💓</p>
    </footer>
  );
};

export default Footer;
