import { ConfigProvider, Form, Select } from "antd";

import styles from "./Address.module.css";

function Address({ type="province", size="default", options=[], 
  message="", placeholder="", label="", suffixIcon, onSelect }) {
  

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            fontSizeLG: "14px",
            optionSelectedColor: "#00b14f",
            optionSelectedBg: "#00b14f0a",
            optionActiveBg: "#00b14f0a",
          }
        }
      }}
    >
      <Form.Item
        label={<span className={styles.lbSignUpFrm}>{label}</span>}
        name={type}
        rules={[
          {
            required: true,
            message: {message}
          }
        ]}
      >
        <Select 
          options={options} className={styles.select}
          disabled={options.length === 0}
          suffixIcon={<span className={styles.icon}>{suffixIcon}</span>}
          placeholder={placeholder}
          size={size}
          onSelect={onSelect}
        />
      </Form.Item>
    </ConfigProvider>
  );
}

export default Address;