import { useState, useId } from "react";
import { ModalHeader, SignUpModal } from "./signModal";
import { Form } from "react-bootstrap";
import StyledButton from "../Button";
import useStorage from "../../hooks/useStorage";
function SignUp({ show, handleClose, score }) {
  const formId = useId();
  const [person, setPerson] = useState({});
  const [data, setData] = useStorage("data", []);
  const formHandler = (e) => {
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, "0");
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const year = now.getFullYear();
    const hours = `${now.getHours()}`.padStart(2, "0");
    const minutes = `${now.getMinutes()}`.padStart(2, "0");
    const saveDate = `${day}-${month}-${year} ${hours}-${minutes}`;
    e.preventDefault();
    const newPerson = { ...person, score, saveDate };
    setData(data ? [...data, newPerson] : [newPerson]);
    console.log(newPerson);
    handleClose();
  };
  return (
    <>
      <SignUpModal fullscreen="md-down" show={show} onHide={handleClose}>
        <ModalHeader closeButton closeLabel="Cancel">
          Sign Up
        </ModalHeader>

        <Form id={formId} onSubmit={(e) => formHandler(e)}>
          <SignUpModal.Body>
            <Form.Group className="mb-3" controlid={`first-name-${formId}`}>
              <Form.Label>
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                onChange={(e) =>
                  setPerson({ ...person, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId={`last-name-${formId}`}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                onChange={(e) =>
                  setPerson({ ...person, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId={`email-${formId}`}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) =>
                  setPerson({ ...person, [e.target.name]: e.target.value })
                }
                required
              />
            </Form.Group>
          </SignUpModal.Body>
          <SignUpModal.Footer>
            <StyledButton type="submit">Save</StyledButton>
          </SignUpModal.Footer>
        </Form>
      </SignUpModal>
    </>
  );
}

export default SignUp;
