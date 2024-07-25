import React from "react";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: "https://ant.design",
  title: `Tuyển dụng vị trí ReactJS `,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  company: "Công ty HTT ABBAMK",
  content:
    "We supply a series of design principles,  product prototypes beautifully and efficiently.",
  Wage: "10.000.000 - 20.000.000",
  address: "Hà Nội",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const App = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
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
            style={{ marginLeft: "200px" }}
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Logo_PTIT_University.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          company={item.company}
        />
        {item.content}
        <p>Lương:{item.Wage} </p>
        <p>Địa chỉ:{item.address}</p>
        company:{item.company}
      </List.Item>
    )}
  />
);

export default App;
