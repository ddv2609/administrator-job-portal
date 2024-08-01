import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Avatar, Button, Dropdown, Space } from "antd";

import { AiOutlineLogout, AiOutlineMail, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { PiBellRingingBold } from "react-icons/pi";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";

import { logout } from "../../../actions";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header({ collapsed, setCollapsed, admin }) {
    const [fullScreen, setFullScreen] = useState(false);
    const nav = useNavigate();
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      axios.get("http://localhost:8000/auth/logout", {
        withCredentials: true,
      })
        .then(_ => {
          dispatch(logout());
          nav("/login");
        })
    }

    const handleAccount = () => {

          nav("/employer/employer-profile");
    }
  
    const handleFullScreen = () => {
      if (fullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      } else {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
      }
    }
  
    useEffect(() => {
      document.onfullscreenchange = () => {
        if (document.fullscreenElement)
          setFullScreen(true);
        else
          setFullScreen(false);
      }
  
      return document.removeEventListener("fullscreenchange", document);
    }, []);
  
    const itemsMenu = [
      {
        key: '1',
        label: 'Jobs',
        nav: '/employer/companyjob',
      },
      {
        key: '2',
        label: 'Company Profile',
        nav: '/employer/company-profile',
      },
      {
        key: '3',
        label: 'Post',
        nav: '/employer/companyjob-post',
      },
      {
        key: '4',
        label: 'Chat',
        nav: '/employer/chat',
      },
    ];
  
    return (
      <div className={styles.header}>
        <Button type="text"
          icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
          onClick={() => setCollapsed(!collapsed)}
          className={styles.btnCollapsed}
        />
  
        <div className={styles.navMenu}>
          {itemsMenu.map(item => (
            <Button
              key={item.key}
              onClick={() => nav(item.nav)}
              className={styles.navButton}
            >
              {item.label}
            </Button>
          ))}
        </div>
  
        <div className={styles.actions}>
          <span className={styles.fullScreen}
            onClick={handleFullScreen}
          >{fullScreen ? <BiExitFullscreen /> : <BiFullscreen />}</span>
          <span className={styles.notifications}><PiBellRingingBold /></span>
          <Dropdown
            menu={{
              items: [
                {
                  label: <Space align="center" className={styles.actionItem}>
                    <span className={styles.actionIcon}><AiOutlineUser /></span> <span>Account</span>
                  </Space>, key: "1",
                  onClick: handleAccount
                },
                {
                  label: <Space align="center" className={styles.actionItem}>
                    <span className={styles.actionIcon}><AiOutlineMail /></span> <span>Inbox</span>
                  </Space>, key: "2"
                },
                {
                  label: <Space align="center" className={styles.actionItem}>
                    <span className={styles.actionIcon}><AiOutlineSetting /></span> <span>Setting</span>
                  </Space>, key: "3"
                },
                {
                  key: "4",
                  label: <Space align="center" className={styles.actionItem}>
                    <span className={styles.actionIcon}><AiOutlineLogout /></span> <span>Logout</span>
                  </Space>,
                  onClick: handleLogout
                },
              ],
            }}
            trigger={['click']}
          >
            <button className={styles.adminAction}>
              <span className={styles.adminName}>{admin.fullName}</span>
              <Avatar
                src={admin.avatar}
                icon={admin.avatar ? null : <AiOutlineUser />}
              />
            </button>
          </Dropdown>
        </div>
      </div>
    );
  }
  
  export default Header;