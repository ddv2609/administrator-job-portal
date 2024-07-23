import { Col, Row, Tabs } from "antd";
import { FaUserTie } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { RiUserSearchFill } from "react-icons/ri";
import { useState } from "react";
import { ArcElement, CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PieController, PointElement, Title, Tooltip } from "chart.js";

import PieChart from "../PieChart/PieChart";
import StatisticCard from "../StatisticCard/StatisticCard";
import styles from "./DashBoard.module.css";
import LineChart from "../LineChart/LineChart";

Chart.register(ArcElement, PieController);
Chart.register(CategoryScale, LinearScale, PointElement, LineController, LineElement);
Chart.register(Legend, Title, Tooltip);

function Dashboard() {
  const [chartDataPie] = useState({
    labels: ["Ứng viên", "Nhà tuyển dụng", "Công việc"],
    datasets: [
      {
        label: "Số lượng",
        data: [609, 156, 223],
        backgroundColor: ["#00b14f", "#ff9800", "#20bbc9"]
      }
    ]
  });

  const [chartDataLine] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Số lượng ứng viên",
        data: [409, 256, 523, 145, 89, 301, 221, 567, 432, 152, 236, 436],
        borderColor: "#00b14f",
      }
    ]
  });

  return (
    <div className={styles.adminDashboard}>
      <Row>
        <Col span={12}>
          <Row justify="start" align="middle" gutter={[24, 24]}>
            <Col>
              <StatisticCard
                title="Ứng viên mới"
                icon={<FaUserTie />}
                amount={609}
                percent={5.56}
              />
            </Col>

            <Col>
              <StatisticCard
                title="Nhà tuyển dụng mới"
                icon={<RiUserSearchFill />}
                amount={156}
                percent={5.32}
                state="down"
                role="employer"
              />
            </Col>

            <Col>
              <StatisticCard
                title="Công việc được đăng"
                icon={<FaCheckToSlot />}
                amount={223}
                percent={10.02}
                state="down"
                role="postedJob"
              />
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <PieChart chartData={chartDataPie} />
        </Col>
      </Row>

      <div className={styles.lineChartStatistic}>
        <h3 className={styles.heading}>Thống kê theo tháng</h3>
        <Tabs
          defaultActiveKey="1"
          items={[[FaUserTie, "Ứng viên"],
          [RiUserSearchFill, "Nhà tuyển dụng"],
          [FaCheckToSlot, "Công việc được đăng"]].map((info, index) => {
            const Icon = info[0];
            return {
              key: index + 1,
              label: info[1],
              children: <LineChart chartData={chartDataLine} />,
              icon: <Icon />
            };
          })}
        />
      </div>
    </div>
  );
}

export default Dashboard;