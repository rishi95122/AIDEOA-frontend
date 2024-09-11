import { Route, Routes } from "react-router-dom";

import Event from "./components/Eventpage/EventPage";
import ContactUs from "./components/Contactus/ContactUs";
import Home from "./components/Homepage/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JoinMembership from "./components/JoinMembershipHomepage/JoinMembership";
import DonationComponent from "./components/Donation/DonationComponent";
import MutualTransferPage from "./components/MutualTransferPage/MutualTransferPage";
import About from "./components/About_us/Contactus.jsx";
import Education from "./components/Education_cell/EducationCell.jsx";
import ApplyIdCard from "./components/ApplyIdcard/ApplyIdCard.jsx";
import Landingpage from "./components/Landingpage/Landingpage.jsx";
import Dashboard from "./components/Admin_panel/Dashboard.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import Onlinetest from "./components/Onlinetest/Onlinetest";
import StudentCorner from "./components/studentcorner/StudentCorner";
import Employeecorner from "./components/Employeecorner/Employeecorner";
import NotFound from "./components/notfound/Notfound";

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="membership" element={<JoinMembership />} />
          <Route path="donation" element={<DonationComponent />} />
          <Route path="mutualtransfer" element={<MutualTransferPage />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="idcard" element={<ApplyIdCard />} />
          <Route path="home" element={<Landingpage />} />
          <Route path="onlinetest" element={<Onlinetest />} />
          <Route path="studentcorner" element={<StudentCorner />} />
          <Route path="employeecorner" element={<Employeecorner />} />
          <Route path="educationpage" element={<Onlinetest />} />
        </Route>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollToTop>
  );
}
