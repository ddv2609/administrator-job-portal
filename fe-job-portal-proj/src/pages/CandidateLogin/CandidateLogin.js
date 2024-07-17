import clsx from "clsx";

import { Col, Divider, Row } from "antd";

import LoginForm from "../../components/Login/LoginForm/LoginForm";
import styles from "./CandidateLogin.module.css";
import OAuthLogin from "../../components/Login/OAuthLogin/OAuthLogin";
import { useNavigate } from "react-router-dom";

function CandidateLogin() {
  const nav = useNavigate();

  return (
    <>
      <div className={styles.loginSection}>
        <Row>
          <Col lg={15}>
            <div className={styles.loginForm}>
              <div className={styles.mainForm}>
                <div className={styles.header}>
                  <h2 className={styles.title}>Chào mừng bạn đã quay trở lại</h2>
                  <div className={styles.desc}>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</div>
                </div>

                <LoginForm />

                <Divider className={styles.useOthers}>Hoặc đăng nhập bằng</Divider>

                <OAuthLogin thirdParties={["google", "facebook", "linkedin"]} />

                <div className={styles.register}>
                  <span>Bạn chưa có tài khoản? </span>
                  <span
                    className={styles.signUpNow}
                    onClick={() => nav("/candidate/sign-up")}
                  >Đăng ký ngay</span>
                </div>
              </div>

              <div className={styles.authCopyRight}>
                © 2024. All Rights Reserved. PTIT Job Portal.
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className={clsx([styles.formRegisterCompany, styles.bgLeft])}>

            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CandidateLogin;