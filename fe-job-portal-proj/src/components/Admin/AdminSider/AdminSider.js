import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import styles from "./AdminSider.module.css";
import { useNavigate } from "react-router-dom";

function AdminSider({ items = [], collapsed = false }) {
  const nav = useNavigate();

  const handleSelectItems = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    localStorage.setItem('selected-key', selectedKeys);
    nav(item.props.nav);
  }

  return (
    <div className={styles.adminSider}>
      <Sider trigger={null} collapsible collapsed={collapsed}
        theme="light"
        style={{
          height: '100%',
        }}
      // onClick={() => setCollapsed(false)}
      >
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <img className={styles.image} src="/logo.png" alt="PTIT Job Portal Logo"/>
            {
              collapsed ? <></> : <h1 className={styles.heading}>PTIT JOB</h1>
            }
          </div>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={
            localStorage.getItem('selected-key') 
              ? [localStorage.getItem('selected-key').toString()] : ['1']
          }
          items={items}
          onSelect={handleSelectItems}
        />
      </Sider>
    </div>
  );
}

export default AdminSider;