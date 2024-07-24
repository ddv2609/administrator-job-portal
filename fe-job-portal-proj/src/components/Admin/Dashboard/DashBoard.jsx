import { Col, message, Row, Tabs } from "antd";
import { FaUserTie } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { RiUserSearchFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import {
  ArcElement, CategoryScale, Chart, Legend,
  LinearScale, LineController, LineElement, PieController, PointElement, Title, Tooltip
} from "chart.js";

import axios from "axios";

import PieChart from "../PieChart/PieChart";
import StatisticCard from "../StatisticCard/StatisticCard";
import styles from "./DashBoard.module.css";
import LineChart from "../LineChart/LineChart";
import { useNavigate, useOutletContext } from "react-router-dom";

Chart.register(ArcElement, PieController);
Chart.register(CategoryScale, LinearScale, PointElement, LineController, LineElement);
Chart.register(Legend, Title, Tooltip);

function Dashboard() {
<<<<<<< HEAD
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
=======
  const { data } = useOutletContext();
  const nav = useNavigate();

  const [datas, setDatas] = useState([
    {
      label: "Số lượng công việc",
      data: [409, 256, 523, 145, 89, 301, 221, 567, 432, 152, 236, 436],
    }
  ]);

  const [labels, setLabels] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8000/api/admin/statistic/candidate", {
        withCredentials: true,
      }),
      axios.get("http://localhost:8000/api/admin/statistic/employer", {
        withCredentials: true,
      }),
    ])
      .then(([candidates, employers]) => {
        setDatas([{
          label: "Số lượng ứng viên",
          data: candidates.data.statistic
        }, {
          label: "Số lượng nhà tuyển dụng",
          data: employers.data.statistic
        }, ...datas]);

        setLabels(candidates.data.labels);
      })
      .catch(err => {
        console.error(err);

        const code = err.response.status;
        if (400 <= code && code < 500)
          nav("/login");
        else
          messageApi.error(err.response.data.toString());
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
>>>>>>> b5b089ee4a77bd3506a2e681ab0e108846d6bcd7

  return (
    <div className={styles.adminDashboard}>
      {contextHolder}
      <Row>
        <Col span={12}>
          <Row justify="start" align="middle" gutter={[24, 24]}>
            <Col>
              <StatisticCard
                title="Ứng viên mới"
                icon={<FaUserTie />}
                amount={data.candidates.currAmount}
                percent={
                  data.candidates.lastAmount === data.candidates.currAmount ? 0
                    : data.candidates.lastAmount !== 0
                      ? (data.candidates.currAmount !== 0
                        ? ((data.candidates.currAmount - data.candidates.lastAmount) / (data.candidates.currAmount + data.candidates.lastAmount)).toFixed(2) : 0) : 100
                }
                state={data.candidates.currAmount >= data.candidates.lastAmount ? "up" : "down"}
              />
            </Col>

            <Col>
              <StatisticCard
                title="Nhà tuyển dụng mới"
                icon={<RiUserSearchFill />}
                amount={data.employers.currAmount}
                percent={
                  data.employers.lastAmount === data.employers.currAmount ? 0
                    : data.employers.lastAmount !== 0
                      ? (data.employers.currAmount !== 0
                        ? ((data.employers.currAmount - data.employers.lastAmount) / (data.employers.currAmount + data.employers.lastAmount)).toFixed(2) : 0) : 100
                }
                state={data.employers.currAmount >= data.employers.lastAmount ? "up" : "down"}
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
          <PieChart chartData={{
            labels: ["Ứng viên", "Nhà tuyển dụng", "Công việc"],
            datasets: [{
              label: "Số lượng",
              data: [data.candidates.currAmount, data.employers.currAmount, 223],
              backgroundColor: ["#00b14f", "#ff9800", "#20bbc9"],
            }]
          }} />
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