import React, { useState } from 'react';
import styles from './Job-Edit.module.css';
import { useNavigate } from 'react-router-dom';

function JobEdit() {
  const navigate = useNavigate();

  // State for form fields
  const [title, setTitle] = useState('Nhân Viên Kinh Doanh (Hà Đông) - Thu Nhập Lên Đến 25 Triệu');
  const [salaryType, setSalaryType] = useState('range'); // 'range' or 'option'
  const [minSalary, setMinSalary] = useState('8');
  const [maxSalary, setMaxSalary] = useState('25');
  const [salaryOption, setSalaryOption] = useState('');
  const [location, setLocation] = useState('Hà Nội');
  const [experience, setExperience] = useState('Không yêu cầu kinh nghiệm');
  const [deadline, setDeadline] = useState('2024-08-11');
  const [jobDescription, setJobDescription] = useState(`Tìm kiếm khách hàng, tư vấn các sản phẩm của công ty tới khách hàng. Báo giá, đàm phán, ký kết và triển khai hợp đồng. Chăm sóc các khách hàng, đối tác đã và đang sử dụng sản phẩm của công ty. Thực hiện các công việc khác theo yêu cầu của cấp trên/người quản lý trực tiếp trên cơ sở phù hợp với công việc chung của công ty.`);
  const [requirements, setRequirements] = useState(`Tốt nghiệp cao đẳng trở lên Có kỹ năng giao tiếp, nhanh nhẹn, trung thực, có tinh thần trách nhiệm cao, kỷ luật tốt. Sử dụng thành thạo máy vi tính, word, excel, Power Point,...`);
  const [benefits, setBenefits] = useState(`Mức lương: lương cứng từ 5-8 triệu + phụ cấp + % doanh số + thưởng. Thử việc 2 tháng hưởng 85% lương + % doanh số (nếu có).`);
  const [workLocation, setWorkLocation] = useState(`Hồ Chí Minh: 113 Kinh Dương Vương, Phường 12, Quận 6, Quận 6`);
  const [workTime, setWorkTime] = useState(`Thứ 2 - Thứ 7 (từ 08:30 đến 17:30)`);
  const [applicationMethod, setApplicationMethod] = useState(`Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây.`);
  const [level, setLevel] = useState('Nhân viên');
  const [numberOfVacancies, setNumberOfVacancies] = useState('5');
  const [employmentType, setEmploymentType] = useState('Toàn thời gian');
  const [gender, setGender] = useState('Không yêu cầu');

  const handleSave = () => {
    // Handle save logic
    // For example, sending the data to the server
    navigate('/job-detail');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Tiêu đề công việc</label>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Mức lương</label>
        <div>
          <input
            type="radio"
            id="range"
            name="salaryType"
            value="range"
            checked={salaryType === 'range'}
            onChange={(e) => setSalaryType(e.target.value)}
          />
          <label htmlFor="range">Nhập từ ... đến ...</label>
          <input
            className={styles.input}
            type="number"
            placeholder="Từ"
            value={minSalary}
            onChange={(e) => setMinSalary(e.target.value)}
            disabled={salaryType === 'option'}
          />
          <input
            className={styles.input}
            type="number"
            placeholder="Đến"
            value={maxSalary}
            onChange={(e) => setMaxSalary(e.target.value)}
            disabled={salaryType === 'option'}
          />
        </div>
        <div>
          <input
            type="radio"
            id="option"
            name="salaryType"
            value="option"
            checked={salaryType === 'option'}
            onChange={(e) => setSalaryType(e.target.value)}
          />
          <label htmlFor="option">Chọn mức lương</label>
          <select
            className={styles.input}
            value={salaryOption}
            onChange={(e) => setSalaryOption(e.target.value)}
            disabled={salaryType === 'range'}
          >
            <option value="">Chọn mức lương</option>
            <option value="Dưới 10 triệu">Dưới 10 triệu</option>
            <option value="10-15 triệu">10-15 triệu</option>
            <option value="15-20 triệu">15-20 triệu</option>
            <option value="20-25 triệu">20-25 triệu</option>
            <option value="25-30 triệu">25-30 triệu</option>
            <option value="30-50 triệu">30-50 triệu</option>
            <option value="Trên 50 triệu">Trên 50 triệu</option>
            <option value="Thỏa thuận">Thỏa thuận</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Địa điểm</label>
        <input
          className={styles.input}
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Kinh nghiệm</label>
        <select
          className={styles.input}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
          <option value="Dưới 1 năm">Dưới 1 năm</option>
          <option value="1 năm">1 năm</option>
          <option value="2 năm">2 năm</option>
          <option value="3 năm">3 năm</option>
          <option value="4 năm">4 năm</option>
          <option value="5 năm">5 năm</option>
          <option value="Trên 5 năm">Trên 5 năm</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Hạn nộp hồ sơ</label>
        <input
          className={styles.input}
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Mô tả công việc</label>
        <textarea
          className={styles.textarea}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Yêu cầu ứng viên</label>
        <textarea
          className={styles.textarea}
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Quyền lợi</label>
        <textarea
          className={styles.textarea}
          value={benefits}
          onChange={(e) => setBenefits(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Địa điểm làm việc</label>
        <textarea
          className={styles.textarea}
          value={workLocation}
          onChange={(e) => setWorkLocation(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Thời gian làm việc</label>
        <textarea
          className={styles.textarea}
          value={workTime}
          onChange={(e) => setWorkTime(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Cách thức ứng tuyển</label>
        <textarea
          className={styles.textarea}
          value={applicationMethod}
          onChange={(e) => setApplicationMethod(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Cấp bậc</label>
        <select
          className={styles.input}
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="Thực tập sinh">Thực tập sinh</option>
          <option value="Giám đốc">Giám đốc</option>
          <option value="Phó giám đốc">Phó giám đốc</option>
          <option value="Trưởng chi nhánh">Trưởng chi nhánh</option>
          <option value="Quản lí / Giám sát">Quản lí / Giám sát</option>
          <option value="Trưởng / Phó phòng">Trưởng / Phó phòng</option>
          <option value="Trưởng nhóm">Trưởng nhóm</option>
          <option value="Nhân viên">Nhân viên</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Số lượng tuyển</label>
        <input
          className={styles.input}
          type="number"
          value={numberOfVacancies}
          onChange={(e) => setNumberOfVacancies(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Hình thức làm việc</label>
        <select
          className={styles.input}
          value={employmentType}
          onChange={(e) => setEmploymentType(e.target.value)}
        >
          <option value="Toàn thời gian">Toàn thời gian</option>
          <option value="Bán thời gian">Bán thời gian</option>
          <option value="Thực tập">Thực tập</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Giới tính</label>
        <select
          className={styles.input}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Chọn giới tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Không yêu cầu">Không yêu cầu</option>
        </select>
      </div>

      <div className={styles.formActions}>
        <button className={styles.saveButton} onClick={handleSave}>Lưu</button>
        <button className={styles.cancelButton} onClick={() => navigate('/employer/companyjob')}>Hủy</button>
      </div>
    </div>
  );
}

export default JobEdit;
