import { Col, Row, Tabs } from "antd";
import { FaUserTie } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { RiUserSearchFill } from "react-icons/ri";
import { useState } from "react";
import { ArcElement, Chart, Legend, PieController, Title, Tooltip } from "chart.js";

import PieChart from "../PieChart/PieChart";
import StatisticCard from "../StatisticCard/StatisticCard";
import styles from "./DashBoard.module.css";

Chart.register(ArcElement, PieController, Legend, Title, Tooltip);

function Dashboard() {
  const [chartData, setChartData] = useState({
    labels: ["Ứng viên", "Nhà tuyển dụng", "Công việc"],
    datasets: [
      {
        label: "Số lượng",
        data: [609, 156, 223],
        backgroundColor: ["#00b14f", "#ff9800", "#20bbc9"]
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
          <PieChart chartData={chartData} />
        </Col>
      </Row>

      <div className={styles.lineChartStatistic}>
        <Tabs 
          defaultActiveKey="1"
          items={[[FaUserTie, "Ứng viên"], 
            [RiUserSearchFill, "Nhà tuyển dụng"], 
            [FaCheckToSlot, "Công việc được đăng"]].map((info, index) => {
              const Icon = info[0];
              return {
                key: index + 1,
                label: info[1],
                children: "Tab " + (index + 1),
                icon: <Icon />
              };
            })}
        />
      </div>
    </div>
  );
}

export default Dashboard;