import { Col, Row } from "antd";

import { MdAttachMoney } from "react-icons/md";
import { FaHourglassHalf, FaLocationDot } from "react-icons/fa6";

import styles from "./JobDetail.module.css";

function JobDetail() {

  return (
    <div className={styles.viewDetailJob}>
      <div className={styles.detailWrapper}>
        <Row gutter={[24, 24]}>
          <Col span={16}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <div className={styles.generalInfo}>
                  <div className={styles.title}>
                    <h2>Data Scientist</h2>
                  </div>
                  <Row gutter={[12, 12]}>
                    <Col span={8}>
                      <div className={styles.item}>
                        <div className={styles.icon}><MdAttachMoney /></div>
                        <div className={styles.salary}>
                          <span className={styles.label}>Mức lương</span>
                          <span className={styles.value}>Thỏa thuận</span>
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className={styles.item}>
                        <div className={styles.icon}><FaLocationDot /></div>
                        <div className={styles.location}>
                          <span className={styles.label}>Địa điểm</span>
                          <span className={styles.value}>Hà Nội</span>
                        </div>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className={styles.item}>
                        <div className={styles.icon}><FaHourglassHalf /></div>
                        <div className={styles.experience}>
                          <span className={styles.label}>Kinh nghiệm</span>
                          <span className={styles.value}>2 năm</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col span={24}>
                <div className={styles.detailInfo}>Chi tiết tuyển dụng</div>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <div className={styles.companyInfo}>Thông tin công ty</div>
              </Col>
              <Col span={24}>
                <div className={styles.jobInfo}>Các thông tin khác liên quan đến vị trí tuyển dụng</div>
              </Col>
              <Col span={24}>
                <div className={styles.extraInfo}>Thông tin thêm</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default JobDetail;