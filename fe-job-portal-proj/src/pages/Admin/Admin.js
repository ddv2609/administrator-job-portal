import { Button, Layout } from "antd";
import { useState } from "react";
import { FaChartBar, FaUserShield, FaUserTie } from "react-icons/fa";
import { HiBuildingOffice2, HiUserGroup } from "react-icons/hi2";

import { FaCheckToSlot } from "react-icons/fa6";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { RiUserSearchFill } from "react-icons/ri";
import AdminSider from "../../components/Admin/AdminSider/AdminSider";

import styles from "./Admin.module.css";
import { Outlet } from "react-router-dom";

function Admin() {
  const [collapsed, setCollapsed] = useState(false);

  const itemsMenu = [
    {
      key: '1',
      icon: <FaChartBar />,
      label: 'Dashboard',
      nav: '/admin/dashboard',
    },
    {
      key: '2',
      icon: <HiUserGroup />,
      label: 'List of members',
      children: [
        {
          key: '2.1',
          icon: <FaUserTie />,
          label: 'Candidates',
          nav: '/admin/management/candidates',
        },
        {
          key: '2.2',
          icon: <RiUserSearchFill />,
          label: 'Employers',
          nav: '/admin/management/employers',
        },
        {
          key: '2.3',
          icon: <FaUserShield />,
          label: 'Admins',
          nav: '/admin/management/admins',
        }
      ]
    },
    {
      key: '3',
      icon: <HiBuildingOffice2 />,
      label: 'List of companies',
      nav: '/admin/management/companies',
    },
    {
      key: '4',
      icon: <FaCheckToSlot />,
      label: 'List of posted jobs',
      nav: '/admin/management/posted-job',
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
            <Button type="text"
              icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '18px',
                height: '100%',
                padding: "0 24px"
              }}
            />
          </Header>
          <Content
            style={{
              margin: "12px 8px 8px",
              padding: "16px",
              background: "#FFF",
              borderRadius: "8px",
              height: '75vh',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
            }}
          >
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 500,
              background: "#FFF",
            }}
          >
            © 2024. All Rights Reserved. PTIT Job Portal.
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Admin;