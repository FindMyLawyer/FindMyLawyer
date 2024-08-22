import Carousel from "./Carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import HomePgContent from "./HomePgContent";
import AdvocateCard from "../UserComponent/AdvocateCard";

const HomePage = () => {
  const [allAdvocate, setAllAdvocate] = useState([]);

  const retrieveAllAdvocate = async () => {
    const response = await axios.get("http://localhost:9090/api/advocate/all");
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllAdvocate = async () => {
      const allAdvocate = await retrieveAllAdvocate();
      if (allAdvocate) {
        setAllAdvocate(allAdvocate);
      }
    };

    getAllAdvocate();
  }, []);

  return (
    <div className="container-fluid mb-2">
      {/* <Carousel /> */}
      <HomePgContent />
      <hr />
      <h2 className="text-center">Our Best Lawyers:</h2>
      <div className="mt-2 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-5 g-3">
              {allAdvocate.map((advocate) => {
                return <AdvocateCard item={advocate} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <hr />
    
      <div class="elfsight-app-b69206b5-2a27-4924-a7d3-abfbde739986" data-elfsight-app-lazy></div>
      <Footer />
    </div>
  );
};

export default HomePage;
