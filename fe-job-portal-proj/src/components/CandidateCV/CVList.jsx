import { Button, Empty, message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CVList = () => {
    const [cvs, setCvs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCVs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/candidate/resumes', 
                    { withCredentials: true }
                );
                setCvs(response.data.resumes);
            } catch (error) {
                console.error('Error fetching CVs:', error);
                message.error('Có lỗi xảy ra khi tải danh sách CV');
            } finally {
                setLoading(false);
            }
        };

        fetchCVs();
    }, []);

    const handleDelete = async (cvId) => {
        try {
            await axios.delete(`http://localhost:8000/api/candidate/resume/${cvId}`,
                { withCredentials: true }
            );
            setCvs(cvs.filter(cv => cv._id !== cvId));
            message.success('CV đã được xóa thành công');
        } catch (error) {
            console.error('Error deleting CV:', error);
            message.error('Có lỗi xảy ra khi xóa CV');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>CV đã tải lên</h2>
            {cvs.length === 0 ? (
                <div style={{ textAlign: 'center' }}>
                    <Empty />
                    <p>Bạn chưa tải lên CV nào.</p>
                </div>
            ) : (
                <ul>
                    {cvs.map(cv => (
                        <li key={cv._id} style={{ marginBottom: 10 }}>
                            <a href={cv.resume} target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>
                                {cv.name}
                            </a>
                            <Button
                                type="link"
                                href={cv.resume}
                                download
                                style={{ marginRight: 10 }}
                            >
                                Tải xuống
                            </Button>
                            <Button
                                type="danger"
                                onClick={() => handleDelete(cv._id)}
                            >
                                Xóa
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CVList;
