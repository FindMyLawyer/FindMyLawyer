import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(admin);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    window.location.reload(true);
    navigate("/home");
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/user/User/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">View User</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="user/advocate/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">View Advocate</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="admin/appointments/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Check All Appointments</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/Advocate/register"
          className="nav-link active"
          aria-current="page"
        >
          <b className="">Register Advocate</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="btn btn-danger">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
