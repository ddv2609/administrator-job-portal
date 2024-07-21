import React from "react";
import Header from "../../components/Header/Header";
import styles from "./EmployeerIndex.module.css";
import { Input } from "antd";
function EmployeerIndex(props) {
  return (
    <div>
      <Header />
      <div className={styles.pages_job_search}>
        <div className={styles.section_header}>
          <div className={styles.content}>
            <h1>Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc</h1>
            <p>
              Tiếp cận <span class={styles.highlight}>40,000+</span> tin tuyển
              dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt
              Nam
            </p>

            <div className={styles.search_job}>
              <Input></Input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeerIndex;
