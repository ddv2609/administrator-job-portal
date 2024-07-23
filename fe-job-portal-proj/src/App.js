import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CandidateSignUp from "./pages/CandidateSignUp/CandidateSignUp";
import EmployerSignUp from "./pages/EmployerSignUp/EmployerSignUp";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./components/Admin/Dashboard/DashBoard";
import Candidates from "./components/Admin/Candidates/Candidates";
import Employers from "./components/Admin/Employers/Employers";
import Admins from "./components/Admin/Admins/Admins";
import Companies from "./components/Admin/Companies/Companies";
import PostedJob from "./components/Admin/PostedJob/PostedJob";
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
        </Routes>
      </ConfigProvider>
    </div>
  );
}

export default App;
