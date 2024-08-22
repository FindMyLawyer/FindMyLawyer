import React from 'react';


const AboutUs = () => {
  return (
    <div className="ms-5 me-5 mr-5 mt-3">
      <div className="container">
        <h1>About Us</h1>
        <p>
          The Advocate/Lawyer Management System is a comprehensive platform
          designed to streamline the management of legal professionals and
          their services. It allows clients to book appointments, receive
          legal advice, and access a directory of experienced advocates and
          lawyers. The system also offers features for managing case files,
          scheduling, and client interactions, ensuring efficient and organized
          legal practice management.
        </p>
      </div>

      {/* Footer Component */}
      <div className="row mt-5">
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0" style={styles.column}>
          <h5 style={styles.header}>About Us</h5>
          <ul style={styles.list}>
            <li style={styles.listItem}>
             
            </li>
            <li style={styles.listItem}>
              <a href="#!" style={styles.link}>Partners</a>
            </li>
            <li style={styles.listItem}>
              <a href="#!" style={styles.link}>Global Network</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-6 mb-4 mb-md-0" style={styles.column}>
          <h5 style={styles.header}>Contact Us</h5>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="https://www.linkedin.com/feed/" style={styles.link}>
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="https://www.facebook.com/" style={styles.link}>
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="https://www.instagram.com/" style={styles.link}>
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li style={styles.listItem}>
              <a href="https://github.com/FindMyLawyer/FindMyLawyer" style={styles.link}>
                <i className="fab fa-github"></i> Github
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-6 mb-4 mb-md-0" style={styles.column}>
          <h5 style={styles.header}>Careers</h5>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="#!" style={styles.link}>Trainee</a>
            </li>
            <li style={styles.listItem}>
              <a href="#!" style={styles.link}>Internship</a>
            </li>
            <li style={styles.listItem}>
              <a href="#!" style={styles.link}>Bootcamps</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-6 mb-4 mb-md-0" style={styles.column}>
          <h5 style={styles.header}>Links</h5>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="https://wa.link/dwtiaz" style={styles.link}>
                <i className="fab fa-whatsapp"></i> Whatsapp
              </a>
            </li>
            <li style={styles.listItem}>
              <p style={styles.phone}>+91-9309954780</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  column: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
  },
  header: {
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    marginBottom: '0',
  },
  listItem: {
    marginBottom: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    display: 'block',
    transition: 'color 0.3s ease',
  },
  phone: {
    marginBottom: '0',
    fontWeight: 'bold',
    color: '#333',
  },
};

// Add hover effect using CSS-in-JS
const hoverEffect = `
  .list-item a:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

// Inject hover effect into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = hoverEffect;
document.head.appendChild(styleSheet);

export default AboutUs;
