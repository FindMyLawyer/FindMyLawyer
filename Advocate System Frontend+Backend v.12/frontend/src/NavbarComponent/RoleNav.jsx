import AdminHeader from "./AdminHeader";
import NormalHeader from "./NormalHeader";
import AdvocateHeader from "./AdvocateHeader";
import UserHeader from "./UserHeader";

const RoleNav = () => {
  const advocate = JSON.parse(sessionStorage.getItem("active-advocate"));
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
   const user = JSON.parse(sessionStorage.getItem("active-user"));


  if (user != null) {
    return <UserHeader />;
  } else if (admin != null) {
    return <AdminHeader />;
  } else if (advocate != null) {
    return <AdvocateHeader />;
  }
   else {
    return <NormalHeader />;
  }
};

export default RoleNav;
