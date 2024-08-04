import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';

const CVUpload = ({ onUploadSuccess }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await axios.post('http://localhost:8000/api/candidate/resumes/', 
                    formData,
                    { withCredentials: true },
                    );

                onUploadSuccess(response.data.resume);
                setSelectedFile(null);
                message.success('Tải CV lên thành công');
            } catch (error) {
                console.error('Error uploading CV:', error);
                message.error('Có lỗi xảy ra khi tải CV lên');
            }
        }
    };

    return (
        <>
            <div>
                <h2>Tải CV lên</h2>
            </div>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload} disabled={!selectedFile}>
                    Upload CV
                </button>
            </div>
        </>
    );
};

export default CVUpload;
