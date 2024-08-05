import React, { useEffect, useState } from "react";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import axios from "axios";
import styles from "./ListJob.module.css";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const App = () => {
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [pageSize, setPageSize] = useState(3);
  const totalItems = 20;

  const [company, setCompany] = useState({
    name: "",
    address: "",
  });

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/company/info/",
          { withCredentials: true }
        );
        const companyData = response.data.info.company;
        setCompany({
          name: companyData.name,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompanyData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/job/suggestion?page=${page}&size=${pageSize}`,
          { withCredentials: true }
        );
        const data = await res.data;
        console.log(data);
        setJobs(data.jobs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page, pageSize]);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        current: page, // Trang hiện tại
        pageSize: pageSize, // Kích thước trang
        total: totalItems, // Tổng số mục
        onChange: (page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        },
      }}
      dataSource={jobs}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              style={{ cursor: "pointer" }}
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
          ]}
          extra={
            <img
              width={240}
              height={150}
              style={{ marginLeft: "500px", position: "absolute" }}
              alt="logo"
              src={item.company.logo}
            />
          }
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
            }
            title={
              <a className={styles.title_job} href={item.href}>
                {item.title}
              </a>
            }
            company={item["Name Company"]}
          />
          {item.content}
          <p>Lương: {item.salary} </p>
          <p>Địa chỉ: {item["Company Address"]}</p>
          Công ty: {company.name}
        </List.Item>
      )}
    />
  );
};

export default App;
