import React, { useEffect, useState } from "react";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import axios from "axios";
import styles from "./ListJob.module.css";
import { useNavigate } from "react-router-dom";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const App = () => {
  const nav = useNavigate();
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [pageSize, setPageSize] = useState(3);

  const totalItems = 20;

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

  useEffect(() => {
    console.log(searchValue);
    setJobs((prevState) => {
      const filterJobs = prevState.filter((job) => {
        return {
          ...job,
          title: job.title
            .toLowerCase()
            .includes(searchValue.jobName.toLowerCase()),
          localtion:
            searchValue.location !== "all" &&
            job.locations
              .map((location) => location.province.toLowerCase())
              .includes(searchValue.location.toLowerCase()),
          categories:
            searchValue.category !== "all" &&
            job.categories
              .map((category) => category.category.toLowerCase())
              .includes(searchValue.category.toLowerCase()),
        };
      });
      return filterJobs;
    });
    console.log(jobs);
  }, [searchValue]);

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

      renderItem={(item) => {
        const company = item.company;
        return (
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
                src={company.logo}
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
              company={company.introduction}
            />
            {item.content}
            <p>Lương: {item.salary} </p>
            <p>Địa chỉ: {company.address}</p>
            Công ty: {company.name}
          </List.Item>
        );
      }}

    />
  );
};

export default App;
