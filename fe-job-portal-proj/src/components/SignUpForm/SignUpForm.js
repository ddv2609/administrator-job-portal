import { Button, Checkbox, Form, Input } from "antd";
import { MdEmail } from "react-icons/md";
import { BsShieldFillCheck, BsShieldLockFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import styles from "./SignUpForm.module.css";
import { useState } from "react";

function SignUpForm({ children }) {

  // console.log(props.children);

  const [confirmPolicy, setConfirmPolicy] = useState(false);

  const validateRetypePassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (value) {
        if (getFieldValue('password') === value)
          return Promise.resolve();
        else
          return Promise.reject(new Error('Mật khẩu nhập lại không khớp với mật khẩu đã nhập'));
      }

      return Promise.resolve();
    }
  });

  const handleSubmitSignUpFrm = (values) => {
    console.log("Submit sign up form");
    console.log(values);
  };

  return (
    <div className={styles.signUp}>
      <Form
        layout="vertical"
        onFinish={handleSubmitSignUpFrm}
      >
        <Form.Item
          label={<span className={styles.lbSignUpFrm}>Họ và tên</span>}
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập họ tên của bạn',
            }
          ]}
        >
          <Input size="large" placeholder="Họ và tên" className={styles.field}
            addonBefore={<span className={styles.icon}><FaUser /></span>} />
        </Form.Item>

        <Form.Item
          label={<span className={styles.lbSignUpFrm}>Email</span>}
          name="email"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập địa chỉ email của bạn',
            },
            {
              type: 'email',
              message: 'Email bạn nhập không hợp lệ',
            }
          ]}
        >
          <Input size="large" placeholder="Email" className={styles.field}
            addonBefore={<span className={styles.icon}><MdEmail /></span>} />
        </Form.Item>

        <Form.Item
          label={<span className={styles.lbSignUpFrm}>Mật khẩu</span>}
          name="password"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu của bạn',
            },
            {
              min: 6,
              max: 25,
              message: 'Mật khẩu phải chứa từ 6 đến 25 ký tự',
            },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@$!%*?&].{6,25}$/,
              message: 'Mật khẩu phải bao gồm ít nhất 1 chữ hoa, chữ thường, ký tự số và ký tự đặc biệt'
            }
          ]}
        >
          <Input.Password size="large" placeholder="Mật khẩu ( từ 6 đến 25 ký tự )" className={styles.field}
            addonBefore={<span className={styles.icon}><BsShieldLockFill /></span>} />
        </Form.Item>

        <Form.Item
          label={<span className={styles.lbSignUpFrm}>Xác nhận mật khẩu</span>}
          name="confirm-password"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Vui lòng xác nhận lại mật khẩu của bạn',
            },
            validateRetypePassword,
          ]}
        >
          <Input.Password size="large" placeholder="Xác nhận mật khẩu" className={styles.field}
            addonBefore={<span className={styles.icon}><BsShieldFillCheck /></span>} />
        </Form.Item>

        {children}

        <div className={styles.confirmPolicy}>
          <Checkbox
            checked={confirmPolicy}
            onChange={() => {
              setConfirmPolicy(!confirmPolicy);
            }}
          >
            Tôi đã đọc và đồng ý với
            <a href="/terms-of-service"> Điều khoản dịch vụ</a> và
            <a href="/privacy-policy"> Chính sách bảo mật của PTIT</a>
          </Checkbox>
        </div>

        <Form.Item>
          <Button
            type="primary"
            block size="large"
            disabled={!confirmPolicy}
            htmlType="submit"
            className={styles.btnSignUp}
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignUpForm;