import { Button, Upload } from 'antd';
import { useState } from 'react';

import axios from "axios";

import { UploadOutlined } from '@ant-design/icons';

function Home() {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    },
  ]);

  const handleUploadResumes = async (file) => {
    await axios.post("http://localhost:8000/api/candidate/resumes", {
      file,
    }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }).then(res => {
      console.log(res.data.resume);
      setFileList([...fileList, {
        uid: Date.now(),
        name: res.data.resume.name,
        status: 'done',
        url: res.data.resume.resume,
      }])
    })
  }

  return (
    <>
      <Upload
        customRequest={({ file, onSuccess, onError }) => {
          handleUploadResumes(file)
            .then(onSuccess)
            .catch(onError)
        }}
        fileList={fileList}
        accept='application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf'
        multiple
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </>
  );
}

export default Home;