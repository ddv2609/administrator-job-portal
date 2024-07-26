import { Layout, Spin } from "antd";
import { useEffect, useState } from "react";
import { FaChartBar, FaUserShield, FaUserTie } from "react-icons/fa";
import { HiBuildingOffice2, HiUserGroup } from "react-icons/hi2";
import { LoadingOutlined } from '@ant-design/icons';

import { FaCheckToSlot } from "react-icons/fa6";
import { Content, Header } from "antd/es/layout/layout";

import { RiUserSearchFill } from "react-icons/ri";
import AdminSider from "../../components/Admin/AdminSider/AdminSider";
import HeaderAdmin from "../../components/Admin/HeaderAdmin/HeaderAdmin";

import { setAdminInfo } from "../../actions";

import axios from "axios";

import styles from "./Employer.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Employer() {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const admin = useSelector(state => state.memberReducer);
  const dispatch = useDispatch();

  const nav = useNavigate();

  const itemsMenu = [
    {
      key: '1',
      icon: <FaChartBar />,
      label: 'Jobs',
      nav: '/employer/companyjob',
    },
    {
      key: '2',
      icon: <HiUserGroup />,
      label: 'Company Profile',
          nav: '/employer/company-profile',
    },
    {
      key: '3',
      icon: <HiBuildingOffice2 />,
      label: 'Post',
      nav: '/employer/companyjob-post',
    },
    {
      key: '4',
      icon: <FaCheckToSlot />,
      label: 'Chat',
      nav: '/employer/chat',
    },
  ];
  return (
    <div className={styles.adminPage}>
        <Layout>
        <AdminSider items={itemsMenu} collapsed={collapsed} />
        <Layout
          style={{
            maxHeight: '100vh',
          }}
        >
          <Header
            style={{
              padding: 0,
              backgroundColor: "#FFF",
            }}
          >
            <HeaderAdmin
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              admin={admin}
            />
          </Header>
          <Content
            style={{
              // margin: "12px 8px 8px",
              padding: "16px",
              borderRadius: "8px",
              height: '100vh',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
            }}
          >
            <Outlet context={{ data }} />
          </Content>
          {/* <Footer
            style={{
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 500,
              background: "#FFF",
            }}
          >
            © 2024. All Rights Reserved. PTIT Job Portal.
          </Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}

export default Employer;