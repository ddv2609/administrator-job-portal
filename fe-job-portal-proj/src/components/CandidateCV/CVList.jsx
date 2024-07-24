import { Empty } from 'antd';
import React from 'react';

const CVList = ({ cvs, onDelete }) => {
    return (
        <div>
            <h2>CV đã tải lên</h2>
            {cvs.length === 0 ? (
                <div style={{textAlign: 'center'}}>
                    <Empty />
                    <p>Bạn chưa tải lên CV nào.</p>
                </div>
            ) : (
                <ul>
                    {cvs.map(cv => (
                        <li key={cv.id}>
                            <a href={cv.url} target="_blank" rel="noopener noreferrer">
                                {cv.name}
                            </a>
                            <button onClick={() => onDelete(cv.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CVList;

