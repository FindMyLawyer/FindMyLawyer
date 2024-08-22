import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TreatAppointment = () => {
  
  let navigate = useNavigate();

  const {appointmentId} = useParams();

  const [appointment, setAppointment] = useState("");

  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const [prescription, setPrescription] = useState("");
  
  const retrieveAppointment = async () => {
    const response = await axios.get("http://localhost:9090/api/appointment/id?appointmentId="+appointmentId);
    return response.data;
  };

  useEffect(() => {

    const getAppointment = async () => {
      const userAppointment = await retrieveAppointment();
      if (userAppointment) {
        setAppointment(userAppointment);
      }
    };

    getAppointment();
  }, []);

  const saveAppointment = () => {
    const formData = new FormData();
    formData.append("appointmentId", appointmentId);
    formData.append("price", price);
    formData.append("prescription", prescription);
    formData.append("status", status);

    axios
      .post("http://localhost:9090/api/appointment/advocate/update", formData)
      .then((result) => {
        result.json().then((res) => {
          console.log(res);
  
          console.log(res.responseMessage);
  
          alert("User Appointment Status updated Successfully");
          
          navigate("/home");
                
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
            <h5 className="card-title">Update Appointment</h5>
          </div>
          <div className="card-body ">
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
                <label htmlFor="prescription" className="form-label">
                  <b>Solution</b>
                </label>
                <textarea
                  className="form-control"
                  id="prescription"
                  name="prescription"
                  rows="3"
                  onChange={(e) => {
                    setPrescription(e.target.value);
                  }}
                  value={prescription}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  <b>Consaltation fees</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Appointment Status</b>
                </label>
              <select
                  name="status"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  className="form-control"
                >
                  <option value="">Select Appointment Status</option>
                  <option value="Problem Solve">Problem Solve</option>
                  <option value="Cancel">Cancel</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-success"
                onClick={saveAppointment}
              >
                Update Appointment Status
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatAppointment;
