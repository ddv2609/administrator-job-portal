import { Route, Routes } from "react-router-dom";

import Admins from "./components/Admin/Admins/Admins";
import Candidates from "./components/Admin/Candidates/Candidates";
import Companies from "./components/Admin/Companies/Companies";
import Dashboard from "./components/Admin/Dashboard/DashBoard";
import Employers from "./components/Admin/Employers/Employers";
import CandidateProfile from "./pages/CandidateProfile/CandidateProfile";
import PostedJob from "./components/Admin/PostedJob/PostedJob";
import Admin from "./pages/Admin/Admin";
import CandidateSignUp from "./pages/CandidateSignUp/CandidateSignUp";
import CVManagementPage from './pages/CVManagement/CVManagementPage';
import EmployerSignUp from "./pages/EmployerSignUp/EmployerSignUp";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import EmployeerIndex from "./pages/EmployerIndex/EmployeerIndex";

import { ConfigProvider } from "antd";
import { themes } from "./helper";

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={themes}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employer/index" element={<EmployeerIndex />} />
          <Route path="/candidate/sign-up" element={<CandidateSignUp />} />
          <Route path="/candidate/candidate-profile" element={<CandidateProfile />} />
          <Route path="/employer/sign-up" element={<EmployerSignUp />} />
          <Route path="admin/" element={<Admin />}>
            <Route path="dashboard" index element={<Dashboard />} />
            <Route path="management/candidates" element={<Candidates />} />
            <Route path="management/employers" element={<Employers />} />
            <Route path="management/admins" element={<Admins />} />
            <Route path="management/companies" element={<Companies />} />
            <Route path="management/posted-job" element={<PostedJob />} />
          </Route>
          <Route path="/verify/:status" element={<VerifyEmail />} />
          <Route path="/cv-management" element={<CVManagementPage />} />
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
