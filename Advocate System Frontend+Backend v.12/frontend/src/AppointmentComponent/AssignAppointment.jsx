import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AssignAppointment = () => {
  let navigate = useNavigate();

  const { appointmentId } = useParams();
  console.log("FETCHED APPOINTMENT ID : " + appointmentId);

  const [AdvocateId, setAdvocateId] = useState("");

  const [appointment, setAppointment] = useState("");

  const [allAdvocate, setAllAdvocate] = useState([]);

  const retrieveAppointment = async () => {
    const response = await axios.get(
      "http://localhost:9090/api/appointment/id?appointmentId=" + appointmentId
    );
    return response.data;
  };

  useEffect(() => {
    const getAllAdvocate = async () => {
      const allAdvocate = await retrieveAllAdvocate();
      if (allAdvocate) {
        setAllAdvocate(allAdvocate);
      }
    };

    const getAppointment = async () => {
      const patientAppointment = await retrieveAppointment();
      if (patientAppointment) {
        setAppointment(patientAppointment);
      }
    };

    getAllAdvocate();
    getAppointment();
  }, []);

  const retrieveAllAdvocate = async () => {
    const response = await axios.get("http://localhost:9090/api/advocate/all");
    console.log(response.data);
    return response.data;
  };

  const saveAppointment = () => {
    const formData = new FormData();
    formData.append("appointmentId", appointmentId);
    formData.append("advocateId", AdvocateId);

    axios
      .post(
        "http://localhost:9090/api/appointment/admin/assign/advocate",
        formData
      )
      .then((result) => {
        result.json().then((res) => {
          console.log(res);

          console.log(res.responseMessage);

          alert("Users Appointment Assigned to advocate");

          navigate("/admin/appointments/all");
        });
      });
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header  custom-bg-text text-center" style={{backgroundColor:"#3282b8"}}>
            <h5 className="card-title">Assign Advocate to Appointment</h5>
          </div>
          <div className="card-body text-color">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <b>User Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={appointment.userName}
                  readOnly
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  <b>Problem Description</b>
                </label>
                <textarea
                  className="form-control"
                  id="problem"
                  name="problem"
                  rows="3"
                  value={appointment.problem}
                  readOnly
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Appointment Date</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={appointment.appointmentDate}
                  readOnly
                  disabled
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Advocate</b>
                </label>
                <select
                  name="coachId"
                  onChange={(e) => {
                    setAdvocateId(e.target.value);
                  }}
                  className="form-control"
                >
                  <option value="">Select Advocate</option>

                  {allAdvocate.map((Advocate) => {
                    return (
                      <option value={Advocate.id}>
                        {" "}
                        {Advocate.firstName + " " + Advocate.lastName}{" "}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-success"
                onClick={saveAppointment}
              >
                Assign Advocate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignAppointment;
