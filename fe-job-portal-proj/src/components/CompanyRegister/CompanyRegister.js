import { Form, Input } from "antd";
import styles from "./CompanyRegister.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";

function CompanyRegister() {

  return (
    <>
      <Form.Item
        label={<span className={styles.lbSignUpFrm}>Số điện thoại cá nhân</span>}
        name="telephone"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập số điện thoại của bạn',
          },
          {
            pattern: /^\d{7,15}$/,
            message: 'Số điện thoại không hợp lệ'
          }
        ]}
      >
        <Input size="large" placeholder="Số điện thoại cá nhân" className={styles.field}
          addonBefore={<span className={styles.icon}><BsFillTelephoneFill /></span>} />
      </Form.Item>
    </>
  );
}

export default CompanyRegister;