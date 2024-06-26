import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignUp from "./components/auth/SignUp";
import Signin from "./components/auth/Signin";
import StudentPage from "./components/studentdasboard/StudentPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import InstructorPage from "./components/instructordasboard/InstructorPage";
import Home from "./components/home/Home";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import MyProfile from "./components/instructordasboard/MyProfile";
import ManageCourses from "./components/instructordasboard/ManageCourses";
import AddCourse from "./components/instructordasboard/AddCourse";
import StudentProfile from "./components/studentdasboard/StudentProfile";
import Courses from "./components/studentdasboard/Courses";
import CourseDetails from "./components/studentdasboard/CourseDetails";
import Favorites from "./components/studentdasboard/Favorites";
import NotFound from "./components/NotFound";
import StudentSettings from "./components/studentdasboard/StudentSettings";
import InstructorSettings from "./components/instructordasboard/InstructorSettings";

function App() {
  return (
    <>
      <Router>
        <div>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<Signin />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/instructor/*" element={<InstructorPage />}>
                <Route path="profile" element={<MyProfile />} />
                <Route path="manage-courses" element={<ManageCourses />} />
                <Route path="add-course" element={<AddCourse />} />
                <Route path="settings" element={<InstructorSettings />} />
              </Route>
              <Route path="/student/*" element={<StudentPage />}>
                <Route path="profile" element={<StudentProfile />} />
                <Route path="courses" element={<Courses />} />
                <Route path="course/:id" element={<CourseDetails />} />
                <Route path="favourites" element={<Favorites />} />
                <Route path="settings" element={<StudentSettings />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
