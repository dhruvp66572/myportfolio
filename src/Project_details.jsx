import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
        projectStatus} = finded;

    return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {projectName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={'../images/projects/'+projectImage} width={150} height={150} alt={projectName} />
            <p>{projectDescription}</p>
            <p>Project Link: <a href = {projectLink} target="_blank" rel="noreferrer">{projectLink}</a></p>
            <p>Frontend: {projectFrontend}</p>
            <p>Backend: {projectBackend}</p>
            <p>Database: {projectDatabase}</p>
            <p>Type: {projectType}</p>
            <p>Date: {projectDate}</p>
            <p>Status: {projectStatus}</p>
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Project_details;
