import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ViewAllAdvocate = () => {
  const [allAdvocate, setAllAdvocate] = useState([]);

  useEffect(() => {
    const getAllAdvocate = async () => {
      const allAdvocate = await retrieveAllAdvocate();
      if (allAdvocate) {
        setAllAdvocate(allAdvocate);
      }
    };

    getAllAdvocate();
  }, []);

  const retrieveAllAdvocate = async () => {
    const response = await axios.get("http://localhost:9090/api/advocate/all");
    console.log(response.data);
    return response.data;
  };

  const deleteAdvocate = (AdvocateId) => {
    fetch("http://localhost:9090/api/user/delete/id?userId=" + AdvocateId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((res) => {
        alert(res.responseMessage);
      });
    });

    window.location.reload(true);
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
          <h2>All Advocates</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-striped table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Advocate</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>First Name</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Last Name</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Email Id</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Specialist</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Experience</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Age</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Phone No</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Address</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {allAdvocate.map((Advocate) => {
                  return (
                    <tr>
                      <td>
                        <img
                          
                          src={
                            "http://localhost:9090/api/advocate/" + Advocate.doctorImage
                          }
                          class="img-fluid"
                          alt="product_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{Advocate.firstName}</b>
                      </td>

                      <td>
                        <b>{Advocate.lastName}</b>
                      </td>
                      <td>
                        <b>{Advocate.emailId}</b>
                      </td>
                      <td>
                        <b>{Advocate.specialist}</b>
                      </td>
                      <td>
                        <b>{Advocate.experience}</b>
                      </td>
                      <td>
                        <b>{Advocate.age}</b>
                      </td>
                      <td>
                        <b>{Advocate.contact}</b>
                      </td>

                      <td>
                        <b>
                          {Advocate.street +
                            " " +
                            Advocate.city +
                            " " +
                            Advocate.pincode}
                        </b>
                      </td>
                      <td>
                        <button
                          className="btn bg-danger text-white custom-bg-text btn-sm"
                          onClick={() => deleteAdvocate(Advocate.id)}
                        >
                          Delete
                        </button>
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

export default ViewAllAdvocate;
