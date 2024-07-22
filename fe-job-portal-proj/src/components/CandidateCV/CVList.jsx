import React from 'react';

const CVList = ({ cvs, onDelete }) => {
    return (
        <div>
            <h2>Your Uploaded CVs</h2>
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
        </div>
    );
};

export default CVList;
