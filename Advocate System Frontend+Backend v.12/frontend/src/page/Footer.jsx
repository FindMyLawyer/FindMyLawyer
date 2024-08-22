import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  const style = {
    transition: 'transform 0.3s ease',
    backgroundColor: 'rgb(242, 245, 250)', // Set the background color here
    borderRadius: '8px',          // Optional styling
    textAlign: 'center',          // Optional styling

  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.2)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start black">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row">
                <div  style={style}
                   onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   className="text-center">
                  <h5 className="text-uppercase text-color center">
                   Advocate/Lawyer Management System
                  </h5>

                  <p>
                  The Advocate/Lawyer Management System is a comprehensive platform designed to streamline the management of legal professionals and their services. It allows clients to book appointments, receive legal advice, and access a directory of experienced advocates and lawyers. The system also offers features for managing case files, scheduling, and client interactions, ensuring efficient and organized legal practice management..
                  </p>
                </div>
                <Container id="home" className="text-center mt-5">

        <h1>Connect with us on social media</h1>
        
        
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button variant="primary" href="https://www.linkedin.com/" target="_blank" className="m-2">
              <FaLinkedin /> LinkedIn
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="primary" href="https://www.facebook.com/" target="_blank" className="m-2">
              <FaFacebook /> Facebook
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="primary" href="https://www.instagram.com/" target="_blank" className="m-2">
              <FaInstagram /> Instagram
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="primary" href="https://wa.me/" target="_blank" className="m-2">
              <FaWhatsapp /> WhatsApp
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="dark" href="https://www.github.com/" target="_blank" className="m-2">
              <FaGithub /> GitHub
            </Button>
          </Col>
        </Row>
      </Container>

                
              </div>
            </section>
         
            <hr className="mb-4" />

            <section className="container " style={{ backgroundColor: "#132238",height:"70px" }}>
              <p className="d-flex pt-3 justify-content-center align-items-center text-emphasis">
                <span className="me-3 " style={{color:"#fff"}}>Register as a User</span>
                <Link to="/user/patient/register" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-rounded text-emphasis "
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>
          </div>

          <div className="text-center">
            © 2024 Copyright: Designed and Developed by &nbsp;
            IET Cdac Pune Group 3
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
