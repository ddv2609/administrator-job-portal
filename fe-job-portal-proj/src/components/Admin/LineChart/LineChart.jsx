import { Line } from "react-chartjs-2";

import styles from "./LineChart.module.css";

function LineChart({ chartData }) {
  
  return (
    <div className={styles.lineChart}>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Thống kê số lượng ứng viên mới theo tháng"
            },
            legend: {
              display: "top"
            },
          }
        }}
      />
    </div>
  );
}

export default LineChart;