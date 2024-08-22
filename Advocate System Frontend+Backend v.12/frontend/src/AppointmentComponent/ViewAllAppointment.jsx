import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const ViewAllAppointment = () => {
  const [allAppointments, setAllAppointments] = useState([]);

  useEffect(() => {
    const getAllAppointments = async () => {
      const allAppointments = await retrieveAllAppointments();
      if (allAppointments) {
        setAllAppointments(allAppointments);
      }
    };

    getAllAppointments();
  }, []);

  const retrieveAllAppointments = async () => {
    const response = await axios.get(
      "http://localhost:9090/api/appointment/all"
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center " style={{backgroundColor:"#3282b8"}}>
          <h2>All Appointments</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-striped table-hover text-color text-center">
              <thead className="table-bordered border-color custom-bg-text"  >
                <tr>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>User Name</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>User Contact</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Problem</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Advocate Name</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Solution</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Appointment Take Date</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Appointment Date</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Appointment Status</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Appointment Price</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {allAppointments.map((a) => {
                  return (
                    <tr>
                      <td>
                        <b>{a.userName}</b>
                      </td>

                      <td>
                        <b>{a.userContact}</b>
                      </td>
                      <td>
                        <b>{a.problem}</b>
                      </td>
                      <td>
                        <b>{a.advocateName}</b>
                      </td>
                      <td>
                        <b>{a.prescription}</b>
                      </td>
                      <td>
                        <b>{a.date}</b>
                      </td>
                      <td>
                        <b>{a.appointmentDate}</b>
                      </td>
                      <td>
                        <b>{a.status}</b>
                      </td>
                      <td>
                        <b>{a.price}</b>
                      </td>

                      <td>
                        {(() => {
                          if (a.status !== "Cancel") {
                            if (a.advocateId === 0) {
                              return (
                                <Link
                                  to={`/admin/appointment/${a.id}/assign`}
                                  className="nav-link active btn btn-sm"
                                  aria-current="page"
                                >
                                  <b className="btn btn-warning">Assign To Advocate</b>
                                </Link>
                              );
                            } else {
                              return <b>Assigned to Advocate</b>;
                            }
                          } else {
                            return <b>Cancelled</b>;
                          }
                        })()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllAppointment;
