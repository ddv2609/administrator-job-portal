import React, { useState } from 'react';
import CVList from '../../components/CandidateCV/CVList';
import CVUpload from '../../components/CandidateCV/CVUpload';

const CVManagementPage = () => {
    const [cvs, setCvs] = useState([]);

    const handleUploadSuccess = (newCv) => {
        setCvs(prevCvs => [...prevCvs, newCv]);
    };

    const handleDelete = (cvId) => {
        setCvs(prevCvs => prevCvs.filter(cv => cv.id !== cvId));
    };

    return (
        <div>
            <h1>CV Management</h1>
            <CVUpload onUploadSuccess={handleUploadSuccess} />
            <CVList cvs={cvs} onDelete={handleDelete} />
        </div>
    );
};

export default CVManagementPage;
