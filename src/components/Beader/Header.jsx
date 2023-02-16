import React from "react";
import { ReactComponent as SvgSearchIcon } from "../../imagefiles/icons/search.svg";
import { ReactComponent as SvgToggleIcon } from "../../imagefiles/icons/toggle.svg";
import { ReactComponent as SvgCartIcon } from "../../imagefiles/icons/cart.svg";
import { ReactComponent as SvgMoonIcon } from "../../imagefiles/icons/moon.svg";
import { ReactComponent as SvgSunIcon } from "../../imagefiles/icons/sun.svg";
import { ReactComponent as SvgLogoIcon } from "../../imagefiles/icons/logo.svg";

function Header() {
  return (
    <div>
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* <!-- navbar-toggle --> */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label for="navbar-toggle" className="burger-container">
            <SvgToggleIcon className="icon-toggle cursor-point" />
          </label>
          {/* 
        <!-- navbar-menu --> */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  男款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  女款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  客製商品
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">
              {/* <!-- search --> */}
              <li className="nav-item">
                <SvgSearchIcon className="nav-icon cursor-point" />
              </li>
              {/* <!-- cart --> */}
              <li className="nav-item">
                <SvgCartIcon className="nav-icon cursor-point" />
              </li>
              <li id="theme-toggle" className="nav-item">
                {/* <!-- moon --> */}
                <SvgMoonIcon className="nav-icon cursor-point" />
                {/* <!-- sun --> */}
                {/* <svg className="nav-icon cursor-point">
                  <SvgSunIcon />
                </svg> */}
              </li>
            </ul>
          </nav>
          {/* <!-- logo --> */}
          <a className="header-logo-container" href="#">
            <SvgLogoIcon />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
