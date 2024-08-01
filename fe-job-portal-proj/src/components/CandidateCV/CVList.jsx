import { Button, Empty } from 'antd';
import React from 'react';

const CVList = ({ cvs, onDelete }) => {
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
                        <li key={cv.id} style={{ marginBottom: 10 }}>
                            <a href={cv.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>
                                {cv.name}
                            </a>
                            <Button 
                                type="link" 
                                href={cv.url} 
                                download 
                                style={{ marginRight: 10 }}
                            >
                                Tải xuống
                            </Button>
                            <Button 
                                type="danger" 
                                onClick={() => onDelete(cv.id)}
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
