import React, { useState } from 'react';

const CVUpload = ({ onUploadSuccess }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const newCv = {
                id: Date.now(),
                name: selectedFile.name,
                url: URL.createObjectURL(selectedFile)
            };
            onUploadSuccess(newCv);
            setSelectedFile(null);
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
