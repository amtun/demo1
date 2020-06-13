/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AdbIcon from '@material-ui/icons/Adb';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BuildIcon from '@material-ui/icons/Build';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url)
      ? " menu-item-active menu-item-open "
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Components */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Financial</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* Material-UI */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/google-material"
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <AccountBalanceWalletIcon/>
            </span>
            <span className="menu-text">Wallet</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Wallet</span>
                </span>
              </li>

              {/* Deposit */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/deposit-wallet"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink className="menu-link menu-toggle" to="/deposit-wallet">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Deposit</span>
                  <i className="menu-arrow" />
                </NavLink>

              </li>
              {/*end::2 Level*/}

              {/* Withdraw */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/withdraw-wallet"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink className="menu-link menu-toggle" to="/withdraw-wallet">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Withdraw</span>
                  <i className="menu-arrow" />
                </NavLink>

              </li>
              {/*end::2 Level*/}

              {/* Wallet */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/view-wallet"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink className="menu-link menu-toggle" to="/view-wallet">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Wallet</span>
                  <i className="menu-arrow" />
                </NavLink>

              </li>
              {/*end::2 Level*/}

              {/* Transfer */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/transfer-wallet"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink className="menu-link menu-toggle" to="/transfer-wallet">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Transfer</span>
                  <i className="menu-arrow" />
                </NavLink>

              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Expert Advisor */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/expert-advisor")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/expert-advisor">
            <span className="svg-icon menu-icon">
              <AdbIcon/>
            </span>
            <span className="menu-text">Expert Advisor</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Expert Advisor */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/network")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/network">
            <span className="svg-icon menu-icon">
              <NetworkWifiIcon/>
            </span>
            <span className="menu-text">Network</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Summary */}
{/*begin::1 Level*/}
<li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/google-material"
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <AccountBalanceWalletIcon/>
            </span>
            <span className="menu-text">Summary</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Summary</span>
                </span>
              </li>

              {/* Deposit */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/summary-transaction"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink className="menu-link menu-toggle" to="/summary-transaction">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Transaction</span>
                  <i className="menu-arrow" />
                </NavLink>

              </li>
              {/*end::2 Level*/}

              {/* Withdraw */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/summary-direct"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink className="menu-link menu-toggle" to="/summary-direct">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Direct</span>
                  <i className="menu-arrow" />
                </NavLink>

              </li>
              {/*end::2 Level*/}

              {/* Wallet */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/summary-binary"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink className="menu-link menu-toggle" to="/summary-binary">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Binary</span>
                  <i className="menu-arrow" />
                </NavLink>

              </li>
              {/*end::2 Level*/}

              {/* Transfer */}
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/summary-transfer"
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
              >
                <NavLink className="menu-link menu-toggle" to="/summary-transfer">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Transfer</span>
                  <i className="menu-arrow" />
                </NavLink>

              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Profile */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/profile")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/profile">
            <span className="svg-icon menu-icon">
              <AccountCircleIcon/>
            </span>
            <span className="menu-text">Profile</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Tools */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/my-page")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/my-page">
            <span className="svg-icon menu-icon">
              <BuildIcon/>
            </span>
            <span className="menu-text">Tools</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* News */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/my-page")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/my-page">
            <span className="svg-icon menu-icon">
              <AnnouncementIcon/>
            </span>
            <span className="menu-text">News</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Contact */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/my-page")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/my-page">
            <span className="svg-icon menu-icon">
              <ContactSupportIcon/>
            </span>
            <span className="menu-text">Contact</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Logout */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/my-page")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/my-page">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/AccountBalanceWallet.svg")} />
            </span>
            <span className="menu-text">Logout</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

      </ul>



      {/* end::Menu Nav */}
    </>
  );
}
