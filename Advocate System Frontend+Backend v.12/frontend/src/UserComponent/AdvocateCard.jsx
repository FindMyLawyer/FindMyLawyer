import { Link } from "react-router-dom";

const AdvocateCard = (Advocate) => {
  return (
    <div className="col">
      <div className="card border-color rounded-card card-hover product-card custom-bg h-100">
        <img
          src={"http://localhost:9090/api/advocate/" + Advocate.item.doctorImage}
          className="card-img-top rounded mx-auto d-block m-2"
          alt="img"
          style={{
            maxHeight: "270px",
            maxWidth: "100%",
            width: "auto",
          }}
        />

        <div className="card-body text-color">
          <h5 className="card-title">
            <div>
              <b>{Advocate.item.firstName + " " + Advocate.item.lastName}</b>
            </div>
          </h5>

          <p className="">
            <b>
              <i>Specialist :</i> {Advocate.item.specialist}
            </b>
          </p>

          <p className="">
            <b>
              <i>Experience :</i> {Advocate.item.experience}
            </b>
          </p>

          <p className="">
            <b>
              <i>Age :</i> {Advocate.item.age}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvocateCard;
