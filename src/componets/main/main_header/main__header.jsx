import { Link } from "react-router-dom";
import ReactImg from "../../../assets/react.svg";
import "./main__header.scss";
import MainHeaderLink from "./main__header_link/main__header_link";

function MainHeader() {
  return (
    <div className="main__header">
      <h1 className="main__header_title">Neon Style</h1>

      <nav className="main__header_nav">
        <MainHeaderLink text="Shop" />
        <MainHeaderLink text="Card" />
        <MainHeaderLink text="Seil" />
      </nav>

      <div className="main__header_profile">
        <img src={ReactImg} alt="" className="main__header_profile_img" />
        <p className="main__header_profile_user">Username</p>
      </div>
    </div>
  );
}

export default MainHeader;
