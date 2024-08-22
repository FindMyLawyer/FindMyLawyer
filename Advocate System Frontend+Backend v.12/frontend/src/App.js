import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./page/AboutUs";
// import ContactUs from "./page/ContactUs";
import Header from "./NavbarComponent/Header";
import HomePage from "./page/HomePage";
import UserRegister from "./UserComponent/UserRegister";
import UserLoginForm from "./UserComponent/UserLoginForm";
import AddAppointment from "./AppointmentComponent/AddAppointment";
import ViewMyAppointment from "./AppointmentComponent/ViewMyAppointment";
import ViewAllAppointment from "./AppointmentComponent/ViewAllAppointment";
import AssignAppointment from "./AppointmentComponent/AssignAppointment";
import TreatAppointment from "./AppointmentComponent/TreatAppointment";
import ViewAdvocateAppointment from "./AppointmentComponent/ViewAdvocateAppointment";
import AdvocateRegister from "./UserComponent/AdvocateRegister";
import ViewAllUser from "./UserComponent/ViewAllUser";
import ViewAllAdvocate from "./UserComponent/ViewAllAdvocate";
import ChatBot from "./page/ChatBot";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />       
        <Route path="about" element={<AboutUs />} />
        <Route path="user/Advocate/register" element={<AdvocateRegister />} />
        <Route path="user/User/register" element={<UserRegister />} />
        <Route path="user/admin/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/appointment/take" element={<AddAppointment />} />
        <Route path="/user/appointment/chatbot" element={<ChatBot />} />
        <Route path="/user/appointments/" element={<ViewMyAppointment />} />
        <Route path="/user/advocate/all" element={<ViewAllAdvocate />} />
        <Route path="/user/User/all" element={<ViewAllUser />} />     
        <Route
          path="/advocate/appointment/all"
          element={<ViewAdvocateAppointment />}
        />
        <Route
          path="/admin/appointments/all"
          element={<ViewAllAppointment />}
        />
        <Route
          path="/admin/appointment/:appointmentId/assign"
          element={<AssignAppointment />}
        />
        <Route
          path="/advocate/appointment/:appointmentId/update"
          element={<TreatAppointment />}
        />
      </Routes>
    </div>
  );
}

export default App;
