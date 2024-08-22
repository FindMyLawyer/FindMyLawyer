import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddAppointment = () => {
  const user = JSON.parse(sessionStorage.getItem("active-user"));

  const [appointment, setAppointment] = useState({
    userId: "",
    problem: "",
    appointmentDate: "",
  });

  appointment.userId = user.id;

  const handleUserInput = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const saveAppointment = (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    if (appointment.appointmentDate < currentDate) {
      toast.error("Please select a future date for the appointment.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    fetch("http://localhost:9090/api/appointment/client/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    }).then((result) => {
      toast.success("Appointment Added Successfully!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      result
        .json()
        .then((res) => {
          console.log("response", res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-center custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header " style={{ backgroundColor: "#3282b8", color: "#fff" }}>
            <h5 className="card-title">Take Appointment</h5>
          </div>
          <div className="card-body">
            <form onSubmit={saveAppointment}>
              <div className="mb-3 text-color">
                <label htmlFor="title" className="form-label">
                  <b>Problem:</b>
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="problem"
                  name="problem"
                  onChange={handleUserInput}
                  value={appointment.problem}
                  placeholder="mention your problems here..."
                />
              </div>
              <div className="mb-3 text-color">
                <label htmlFor="appointmentDate" className="form-label">
                  <b>Appointment Date:</b>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="appointmentDate"
                  name="appointmentDate"
                  onChange={handleUserInput}
                  value={appointment.appointmentDate}
                />
              </div>

              <input
                type="submit"
                className="btn btn-success"
                value="Take Appointment"
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
