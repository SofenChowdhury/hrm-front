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

const CreateLeaveAllocation = ({ isOpen, toggle }) => {
    const today = new Date().toISOString().split("T")[0];
    const [formData, setFormData] = useState({
      employee: "Adam Luis",
      leaveType: "",
      requestdays:"",
      attachment: "",
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
      fileInput: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
      },
      chooseFileBtn: {
        padding: "6px 12px",
        backgroundColor: "#fff",
        border: "1px solid #ced4da",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "0.9rem",
      },
      textarea: {
        minHeight: "100px",
        resize: "vertical",
      },
    };
  
    return (
      <Modal isOpen={isOpen} toggle={toggle} size="lg">
        <ModalBody style={styles.modalContent}>
          <Container fluid>
            <div style={styles.header}>
              <h5 style={styles.title}>Create Leave Allocation Request</h5>
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
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Employee
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="select"
                      name="employee"
                      onChange={handleChange}
                      value={formData.employee}
                      style={styles.input}
                      >
                      <option>Adam Luis</option>
                      </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Leave Type
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="select"
                      name="leaveType"
                      value={formData.leaveType}
                      onChange={handleChange}
                      style={styles.input}
                    >
                      <option value="">Select Leave Type</option>
                      <option value="Maternity Leave">Maternity Leave</option>
                      <option value="Sick Leave">Sick Leave</option>
                      <option value="Casual Leave">Casual Leave</option>
                      <option value="Compensatory Leave Type">Compensatory Leave Type</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Requested Days
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="number"
                      name="requestdays"
                      onChange={handleChange}
                      value={formData.requestdays}
                      style={styles.input}
                      placeholder="Requested days"
                      >
                      </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Description
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="textarea"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      style={{ ...styles.input, ...styles.textarea }}
                      placeholder="Description"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>Attachment</Label>
                    <div style={styles.fileInput}>
                      <Input
                        type="file"
                        name="attachment"
                        id="attachment"
                        onChange={handleChange}
                        hidden
                      />
                      <Label htmlFor="attachment" style={styles.chooseFileBtn}>
                        Choose File
                      </Label>
                      <span>No file chosen</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
  
              
  
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="submit"
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
  )
}

export default CreateLeaveAllocation