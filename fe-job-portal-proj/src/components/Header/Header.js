import React from "react";
import { Button, Layout } from "antd";
import styles from "./Header.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [hoverLogin, setHoverLogin] = useState(false);
  const [hoverRegister, setHoverRegister] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/employer/login");
  };
  const handleRegisterClick = () => {
    navigate("/employer/sign-up");
  };

  return (
    <div>
      <Layout>
        <div className={styles.headerEmployeer_index}>
          <div className={styles.headerEmployeer_logo}>
            <img src="/logo.png" alt="logo" />
            <h1>Job</h1>
          </div>
          <div className={styles.nav}>
            <ul className={styles.navLists}>
              <li className={styles.menu_dropdonw}>
                <a href="#job">Việc làm</a>
                <div className={styles.dropdonw_items_job}>
                  <ul style={{ textDecoration: "none", listStyleType: "none" }}>
                    <li>
                      <a href="#Tifmv= việc làm">
                        <span class="material-symbols-outlined">search</span>
                        Tìm việc làm
                      </a>
                    </li>
                    <li>
                      <a href="# Việc làm đã ứng tuyển">
                        <span class="material-symbols-outlined">work</span>
                        Việc làm đã ứng tuyển
                      </a>
                    </li>
                    <li>
                      <a href="# Việc làm đã lưu ">
                        <span class="material-symbols-outlined">favorite</span>
                        Việc làm đã lưu
                      </a>
                    </li>
                    <li>
                      <a href="# Việc làm phù hợp">
                        <span class="material-symbols-outlined">
                          domain_verification
                        </span>
                        Việc làm phù hợp
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.menu_dropdonw_filecv}>
                <a href="#resume">Hồ sơ và CV</a>
                <div className={styles.dropdown_items_filecv}>
                  <ul style={{ textDecoration: "none", listStyleType: "none" }}>
                    <li>
                      <a href="# quản lý cv">
                        <span class="material-symbols-outlined">
                          account_box
                        </span>
                        Quản lý CV
                      </a>
                    </li>
                    <li>
                      <a href="#taicvlen">
                        <span class="material-symbols-outlined">upload</span>
                        Tải CV lên
                      </a>
                    </li>
                    <li>
                      <a href="# quản lý cover letter">
                        <span class="material-symbols-outlined">
                          description
                        </span>
                        Quản lý Cover Letter
                      </a>
                    </li>
                    <li>
                      <a href="#d">
                        <span class="material-symbols-outlined">
                          account_box
                        </span>
                        Mẫu CV
                      </a>
                    </li>
                    <li>
                      <a href="#đ">
                        <span class="material-symbols-outlined">article</span>
                        Mẫu Cover Letter
                      </a>
                    </li>
                    <li>
                      <a href="#d">
                        <span class="material-symbols-outlined">
                          support_agent
                        </span>
                        Dịch vụ tư vấn CV
                      </a>
                    </li>
                    <li>
                      <a href="#s">
                        <span class="material-symbols-outlined">
                          person_book
                        </span>
                        TopCV profile
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.menu_dropdonw_company}>
                <a href="#company">Công ty</a>
                <div className={styles.dropdown_items_company}>
                  <ul style={{ textDecoration: "none", listStyleType: "none" }}>
                    <li>
                      <a href="#danh sách công ty">
                        <span class="material-symbols-outlined">business</span>
                        Danh sách công ty
                      </a>
                    </li>
                    <li>
                      <a href="#danh sách công ty">
                        <span class="material-symbols-outlined">
                          social_leaderboard
                        </span>
                        Top công ty
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className={styles.menu_dropdonw_hackjob}>
                <a href="#guide">Cẩm nang nghề nghiệp</a>
                <div className={styles.dropdonw_items_hackjob}>
                  <ul style={{ textDecoration: "none", listStyleType: "none" }}>
                    <li>
                      <a href="#danh sách công ty">
                        <span class="material-symbols-outlined">explore</span>
                        Định hướng nghề nghiệp
                      </a>
                    </li>
                    <li>
                      <a href="#danh sách công ty">
                        <span class="material-symbols-outlined">pageview</span>
                        Bí kíp tìm công việc
                      </a>
                    </li>
                    <li>
                      <a href="#danh sách công ty">
                        <span class="material-symbols-outlined">
                          rate_review
                        </span>
                        Chế độ lương thưởng
                      </a>
                    </li>
                    <li>
                      <a href="#danh sách công ty">
                        <span class="material-symbols-outlined">wysiwyg</span>
                        Kiến thức chuyên ngành
                      </a>
                    </li>
                    <li>
                      <a href="#danh sách công ty">
                        <span class="material-symbols-outlined">
                          trending_up
                        </span>
                        Thị trường và xu hướng nghề nghiệp
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.button_container}>
            <Button
              onClick={handleLoginClick}
              className={styles.button_login}
              style={{
                backgroundColor: hoverLogin ? "#0fc862" : "#00b14f",
                color: hoverLogin ? "white" : "white",
                border: hoverLogin ? "1px solid #0fc862" : "1px solid #00b14f",
              }}
              onMouseEnter={() => setHoverLogin(true)}
              onMouseLeave={() => setHoverLogin(false)}
            >
              Đăng nhập
            </Button>
            <Button
              onClick={handleRegisterClick}
              className={styles.button_register}
              style={{
                backgroundColor: hoverRegister ? "rgb(230, 228, 228)" : "white",
                border: hoverRegister
                  ? "1px solid #0fc862"
                  : "1px solid #00b14f",
                color: hoverRegister ? "#0fc862" : "#00b14f",
              }}
              onMouseEnter={() => setHoverRegister(true)}
              onMouseLeave={() => setHoverRegister(false)}
            >
              Đăng ký
            </Button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Header;
