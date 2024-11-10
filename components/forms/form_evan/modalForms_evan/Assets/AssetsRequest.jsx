import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { FiX } from "react-icons/fi";


const AssetsRequest = ({ isOpen, toggle }) => {
  const [formData, setFormData] = useState({
    requestingUser: "Adam Luis",
    assetsCategory: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggle();
  };

  const styles = {
    modalContent: {
      padding: "20px",
    },
    header: {
      position: "relative",
      marginBottom: "20px",
    },
    closeButton: {
      position: "absolute",
      right: "0",
      top: "0",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "500",
      color: "#333",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      fontWeight: "500",
      fontSize: "0.9rem",
      marginBottom: "8px",
      display: "block",
    },
    required: {
      color: "#dc3545",
      marginLeft: "4px",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      fontSize: "0.9rem",
    },
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalBody style={styles.modalContent}>
        <Container fluid>
          <div style={styles.header}>
            <h5 style={styles.title}>Asset Request</h5>
            <button
              onClick={toggle}
              style={styles.closeButton}
              aria-label="Close"
            >
              <FiX size={24} />
            </button>
          </div>
          <hr />

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12}>
                <FormGroup style={styles.formGroup}>
                  <Label style={styles.label}>
                    Requesting user
                    {/* <span style={styles.required}>*</span> */}
                  </Label>
                  <Input
                    type="select"
                    name="requestingUser"
                    value={formData.requestingUser}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option>Adam Luis</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col xs={12}>
                <FormGroup style={styles.formGroup}>
                  <Label style={styles.label}>
                    Assets category
                    {/* <span style={styles.required}>*</span> */}
                  </Label>
                  <Input
                    type="select"
                    name="assetsCategory"
                    value={formData.assetsCategory}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="">----Choose Asset Category----</option>
                    <option value="laptop">Laptops</option>
                    <option value="phone">Phones</option>
                    <option value="bag">Bags</option>
                  </Input>
                </FormGroup>
              </Col>


              <Col xs={12}>
                <FormGroup style={styles.formGroup}>
                  <Label style={styles.label}>
                    Description
                    {/* <span style={styles.required}>*</span> */}
                  </Label>
                  <Input
                    type="textarea"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    style={styles.input}
                  >
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                style={{
                  backgroundColor: "#e54f37",
                  border: "#e54f37",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontWeight: "400",
                  marginTop: "20px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#c44232")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e54f37")
                }
              >
                Save
              </Button>
            </div>
          </Form>
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default AssetsRequest