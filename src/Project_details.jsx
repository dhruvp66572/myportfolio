import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./project_details.css";
import { Tab } from "bootstrap";

function Project_details(props) {
  // alert(props.index)
  const finded = props.projectdata[props.index];

  const {
    pid,
    projectName,
    projectDescription,
    projectImage,
    projectLink,
    projectFrontend,
    projectBackend,
    projectDatabase,
    projectType,
    projectDate,
    projectStatus,
  } = finded;

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            {projectName}
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {/* <div class="card"> */}
            <div class="photo">
              <img src={projectImage} />
            </div>
            <div class="description">
              <h2>{projectName}</h2>
              <h4>{projectType}</h4>
              <p>{projectDescription}</p>
              <table>
                <tr>
                  <th><b>Front-End :</b></th>
                  <td>{projectFrontend}</td>
                </tr>
                <tr>
                  <td><b>Back-End :</b></td>
                  <td>{projectBackend}</td>
                </tr>
                <tr>
                  <td><b>Database :</b></td>
                  <td>{projectDatabase}</td>
                </tr>
                <tr>
                  <td><b>Date :</b></td>
                  <td>{projectDate}</td>
                </tr>
                <tr>
                  <td><b>Status :</b></td>
                  <td>{projectStatus}</td>
                </tr>
              </table>
              
              <a href={projectLink} target="_blank"><button className="btn btn-dark p-1" style={{float:"inline-end", width:"160px"}}>Go To Project</button></a>
            </div>
          </Modal.Body>
        
      </Modal>
    </>
  );
}

export default Project_details;
