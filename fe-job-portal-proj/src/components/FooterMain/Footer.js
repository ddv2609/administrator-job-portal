import React from "react";
import styles from "../FooterMain/Footer.module.css";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className={styles.footer_content}>
      <div className={styles.footer_section_about}>
        <div style={{ display: "flex" }}>
          <img
            style={{
              width: "80px",
              height: "80px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Logo_PTIT_University.png"
            alt=""
          />
          <h1
            style={{
              paddingTop: "20px",
              paddingLeft: "10px",
              color: "brown",
            }}
          >
            Job
          </h1>
        </div>
        <p
          style={{
            fontWeight: "500",
          }}
        >
          Tiếp lợi thế - Nối thành công
        </p>
        <div className={styles.certificates}>
          <img
            src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/footer/google_for_startup.png"
            alt="Google for Startups"
          />
          <img
            style={{
              width: "40px",
              height: "40px",
            }}
            src="https://images.dmca.com/Badges/DMCA_badge_grn_60w.png?ID=8be40718-7da1-4b43-875a-3efb819100c9"
            alt="DMCA"
          />
          <img
            style={{ width: "80px", height: "40px" }}
            src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/footer/bct.jpg"
            alt="Đã đăng ký"
          />
        </div>
        <div className={styles.contract} style={{ marginTop: "10px" }}>
          <span style={{ display: "flex", fontWeight: "bold" }}>Liên hệ:</span>
          <span
            style={{ display: "flex", marginTop: "10px", color: "#4d5965" }}
          >
            Hotline:{" "}
            <p style={{ color: "#212f3f", fontWeight: "500" }}>
              {" "}
              (024) 6680 5588 (Giờ hành chính){" "}
            </p>
          </span>
          <span style={{ display: "flex", color: "#4d5965" }}>
            Email:{" "}
            <p style={{ color: "#212f3f", fontWeight: "500" }}>
              {" "}
              hotro@Ptitjob.vn{" "}
            </p>{" "}
          </span>
        </div>
        <div className="download-app" style={{ marginTop: "20px" }}>
          <img
            style={{ marginRight: "10px" }}
            src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/download/app_store.png"
            alt="App Store"
          />
          <img
            src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/download/chplay.png"
            alt="Google Play"
          />
        </div>
      </div>
      <div className={styles.footer_section_links}>
        <h3>Về TopCV</h3>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link>Giới thiệu</Link>
          </li>
          <li>
            <Link>Góc báo chí</Link>
          </li>
          <li>
            <Link>Tuyển dụng</Link>
          </li>
          <li>
            <Link>Liên hệ</Link>
          </li>
          <li>
            <Link>Hỏi đáp</Link>
          </li>
          <li>
            <Link>Chính sách bảo mật</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer_section_links}>
        <h3>Hồ sơ và CV</h3>
        <ul>
          <li>
            <Link>Quản lý CV của bạn</Link>
          </li>
          <li>
            <Link>TopCV Profile</Link>
          </li>
          <li>
            <Link>Hướng dẫn viết CV</Link>
          </li>
          <li>
            <Link>Thư viện CV theo ngành nghề</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer_section_links}>
        <h3>Xây dựng sự nghiệp</h3>
        <ul>
          <li>
            <Link>Việc làm tốt nhất</Link>
          </li>
          <li>
            <Link>Việc làm lương cao</Link>
          </li>
          <li>
            <Link>Việc làm quản lý</Link>
          </li>
          <li>
            <Link>Việc làm IT</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footer_section_social}></div>
    </div>
  );
}

export default Footer;
