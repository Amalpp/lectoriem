import { Button} from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";

const EditProfile = () => {
  return (
    <div className="sectionHead">
        <Form
            className="form"
            style={{ color: "GrayText", width: "50vh", height: "300px" }}
          >
            <Form.Group>
              <Form.Label>Frist Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Middile Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Display name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button
              varient="primary"
              style={{
                color: "ButtonText",
                backgroundColor: "ButtonHighlight",
              }}
            >
              Edit Profile
            </Button>
          </Form>
    </div>
  
  );
};

export default EditProfile;
