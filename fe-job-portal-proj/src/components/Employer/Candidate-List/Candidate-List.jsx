import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Candidate-List.module.css';

const candidates = [
  { id: 1, name: 'Nguyen Van A', date: '2024-07-20', phone: '0123456789', email: 'a@example.com', cv: '/path/to/cv1.pdf', photo: '/path/to/photo1.jpg' },
  { id: 2, name: 'Tran Thi B', date: '2024-07-21', phone: '0123456788', email: 'b@example.com', cv: '/path/to/cv2.pdf', photo: '/path/to/photo2.jpg' },
  { id: 3, name: 'Le Van C', date: '2024-07-22', phone: '0123456787', email: 'c@example.com', cv: '/path/to/cv3.pdf', photo: '/path/to/photo3.jpg' },
  // Add more candidates as needed
];

function CandidateList() {
  const navigate = useNavigate();

  const handleViewDetails = (candidate) => {
    navigate('/employer/candidate-profile', { state: { candidate } });
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate('/employer/companyjob-detail')}>← Quay lại</button>
      <h2>Danh sách ứng viên</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Tên ứng viên</th>
            <th>Ngày ứng tuyển</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={candidate.id}>
              <td>{index + 1}</td>
              <td>{candidate.name}</td>
              <td>{candidate.date}</td>
              <td>
                <button
                  className={styles.button}
                  onClick={() => handleViewDetails(candidate)}
                >
                  Xem thông tin ứng viên
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateList;
