import clsx from "clsx";

import { Col, Row } from "antd";

import LoginForm from "../../components/Login/LoginForm/LoginForm";
import styles from "./AdminLogin.module.css";

function AdminLogin() {

  return (
    <>
      <div className={styles.loginSection}>
        <Row>
          <Col md={24} lg={15}>
            <div className={styles.loginForm}>
              <div className={styles.mainForm}>
                <div className={styles.header}>
                  <h2 className={styles.title}>Chào mừng bạn đã quay trở lại</h2>
                  <div className={styles.desc}>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</div>
                </div>

                <LoginForm />

              </div>

              <div className={styles.authCopyRight}>
                © 2024. All Rights Reserved. PTIT Job Portal.
              </div>
            </div>
          </Col>
          <Col md={24} lg={9}>
            <div className={clsx([styles.formRegisterCompany, styles.bgLeft])}>

            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AdminLogin;