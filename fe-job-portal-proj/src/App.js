import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import CandidateLogin from "./pages/CandidateLogin/CandidateLogin";
import EmployerLogin from "./pages/EmployerLogin/EmployerLogin";
import CandidateSignUp from "./pages/CandidateSignUp/CandidateSignUp";
import EmployerSignUp from "./pages/EmployerSignUp/EmployerSignUp";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./components/Admin/Dashboard/DashBoard";
import Candidates from "./components/Admin/Candidates/Candidates";
import Employers from "./components/Admin/Employers/Employers";
import Admins from "./components/Admin/Admins/Admins";
import Companies from "./components/Admin/Companies/Companies";
import PostedJob from "./components/Admin/PostedJob/PostedJob";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidate/login" element={<CandidateLogin />} />
        <Route path="/candidate/sign-up" element={<CandidateSignUp />} />
        <Route path="/employer/login" element={<EmployerLogin />} />
        <Route path="/employer/sign-up" element={<EmployerSignUp />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="admin/" element={<Admin />}>
          <Route path="dashboard" index element={<Dashboard />}/>
          <Route path="management/candidates" element={<Candidates />}/>
          <Route path="management/employers" element={<Employers />}/>
          <Route path="management/admins" element={<Admins />}/>
          <Route path="management/companies" element={<Companies />}/>
          <Route path="management/posted-job" element={<PostedJob />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
