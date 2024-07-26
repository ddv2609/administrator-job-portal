import React from 'react';
import styles from './Job.module.css';
import { useNavigate } from 'react-router-dom';

const Job = () => {


  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/employer/companyjob-detail');
  };
  const jobListings = [
    {
      company: 'CÔNG TY TNHH TMDV ADFLY VIỆT NAM',
      title: 'Trưởng Nhóm Kinh Doanh Dịch Vụ',
      location: 'Hà Nội',
      daysLeft: 23,
      updated: '6 giờ trước',
      salary: '15 - 40 triệu',
      number: '45/100',
    },
    {
      company: 'CÔNG TY TNHH TMDV ADFLY VIỆT NAM',
      title: 'Trưởng Nhóm Kinh Doanh (Tiếng Trung, Ca Hành Chính, Thu Nhập 30 Triệu ++)',
      location: 'Hồ Chí Minh',
      daysLeft: 29,
      updated: '20 phút trước',
      salary: '20 - 40 triệu',
      number: '45/100',
    },
    {
      company: 'CÔNG TY TNHH TMDV ADFLY VIỆT NAM',
      title: 'Trưởng Nhóm Kinh Doanh Xuất Nhập Khẩu/Sales Leader Logistics',
      location: 'Hà Nội',
      daysLeft: 9,
      updated: '1 tuần trước',
      salary: 'Thỏa thuận',
      number: '45/100',
    },
  ];

  return (
    <div className={styles.jobListings}>
      <h1>Danh Sách Công Việc</h1>
      {jobListings.map((job, index) => (
        <div key={index} className={styles.jobCard}>
          <div className={styles.jobCompanyLogo}>
            <img src="/logo512.png" alt={`${job.company} logo`} />
          </div>
          <div className={styles.jobInfo}>
            <div className={styles.jobHeader}>
              <h2 className={styles.jobTitle}>{job.title}</h2>
              <p className={styles.jobSalary}>{job.salary}</p>
            </div>
            <div>
            <p className={styles.jobCompany}>{job.company}</p>
            </div>
            <div className={styles.jobDetails}>
              <p className={styles.jobLocation}>{job.location}</p>
              <p className={styles.jobDaysLeft}>Còn {job.daysLeft} ngày để ứng tuyển</p>
              <p className={styles.jobUpdated}>Cập nhật {job.updated}</p>
            </div>
            <div>
              <p className={styles.jobNumber}>Số người đã ứng tuyển: {job.number}</p>
            </div>
            <button className={styles.applyButton} onClick={handleBackClick}>Xem Chi Tiết</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job;
