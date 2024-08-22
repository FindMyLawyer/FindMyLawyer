import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ViewAllUser = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    const getAllUser = async () => {
      const allUser = await retrieveAllUser();
      if (allUser) {
        setAllUser(allUser);
      }
    };

    getAllUser();
  }, []);

  const retrieveAllUser = async () => {
    const response = await axios.get("http://localhost:9090/api/clint/all");
    console.log(response.data);
    return response.data;
  };

  const deleteUser = (userId) => {
    fetch("http://localhost:9090/api/user/delete/id?userId=" + userId, {
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
          <h2>All Users</h2>
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
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>First Name</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Last Name</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Email Id</th>
                  <th scope="col"style={{backgroundColor:" #85c0e9"}}>Age</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Gender</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Blood Group</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Phone No</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Address</th>
                  <th scope="col" style={{backgroundColor:" #85c0e9"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {allUser.map((user) => {
                  return (
                    <tr>
                      <td>
                        <b>{user.firstName}</b>
                      </td>

                      <td>
                        <b>{user.lastName}</b>
                      </td>
                      <td>
                        <b>{user.emailId}</b>
                      </td>
                      <td>
                        <b>{user.age}</b>
                      </td>
                      <td>
                        <b>{user.sex}</b>
                      </td>
                      <td>
                        <b>{user.bloodGroup}</b>
                      </td>
                      <td>
                        <b>{user.contact}</b>
                      </td>

                      <td>
                        <b>
                          {user.street +
                            " " +
                            user.city +
                            " " +
                            user.pincode}
                        </b>
                      </td>
                      <td>
                        <button
                          className="btn bg-danger text-white custom-bg-text btn-sm"
                          onClick={() => deleteUser(user.id)}
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

export default ViewAllUser;
