import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { FiX } from "react-icons/fi";

const AssetReturnForm = ({ open, onClose }) => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    returnStatus: "",
    returnDate: today,
    returnCondition: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: Array.from(e.target.files),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggle();
  };

  const modalStyles = {
    form: {
      padding: "20px",
    },
    closeButton: {
      background: "none",
      border: "none",
      padding: "0",
      position: "absolute",
      right: "20px",
      top: "20px",
      cursor: "pointer",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "500",
      color: "#333",
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
      // borderRadius: "4px",
      // border: "1px solid #ced4da",
      // padding: "0.375rem 0.75rem",

      width: '100%',
      borderRadius: "4px",
      border: "1px solid #ced4da",
      padding: "0.375rem 0.75rem",
      backgroundColor: '#fff', // Add this
      color: '#333', // Add this
      resize: 'vertical',
    },

    textarea: {  // Add separate style for textarea
      width: '100%',
      borderRadius: "4px",
      border: "1px solid #ced4da",
      padding: "0.375rem 0.75rem",
      backgroundColor: '#fff',
      color: '#333',
      resize: 'vertical',
      minHeight: '100px',
    },

    buttonContainer: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    },
    button: {
      flex: 1,
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "500",
      transition: "background-color 0.3s ease",
    },
    fileInput: {
      display: "none",
    },
    fileLabel: {
      display: "inline-block",
      padding: "8px 16px",
      backgroundColor: "#f8f9fa",
      border: "1px solid #ced4da",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    modal: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "8px",
      maxWidth: "800px",
      width: "90%",
      maxHeight: "90vh",
      overflow: "auto",
      zIndex: 10000,
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 9999,
    },
  };

  if (!open) return null;

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={modalStyles.form}>
          <button
            onClick={onClose}
            style={modalStyles.closeButton}
            aria-label="Close"
          >
            <FiX size={24} />
          </button>

          <h5 style={modalStyles.title}>Asset Return Form</h5>
          <hr />

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label style={modalStyles.label}>
                    Return Status
                  </Label>
                  <Input
                    type="select"
                    name="returnStatus"
                    value={formData.returnStatus}
                    onChange={handleChange}
                    style={modalStyles.input}
                  >
                    <option value="">-----------</option>
                    <option value="healthy">Healthy</option>
                    <option value="majorDamaged">Major Damaged</option>
                    <option value="minorDamaged">Minor Damaged</option>
                    <option value="Needs Repair">Needs Repair</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label style={modalStyles.label}>
                    Return Date
                  </Label>
                  <Input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    style={modalStyles.input}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup className="mt-3">
              <Label style={modalStyles.label}>
                Return Condition
              </Label>
              <Input
        type="textarea"
        name="returnCondition"
        value={formData.returnCondition}
        onChange={handleChange}
        rows="4"
        style={modalStyles.textarea}  // Use the textarea-specific style
        placeholder="Enter return condition details..."
      />
            </FormGroup>

            <FormGroup className="mt-3">
              <Label style={modalStyles.label}>Return Condition Images</Label>
              <div>
                <input
                  type="file"
                  id="file-input"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  style={modalStyles.fileInput}
                />
                <label htmlFor="file-input" style={modalStyles.fileLabel}>
                  Choose Files
                  {formData.images.length > 0 &&
                    ` (${formData.images.length} selected)`}
                </label>
              </div>
            </FormGroup>

            <div style={modalStyles.buttonContainer}>
              <Button
                type="button"
                style={{
                  ...modalStyles.button,
                  backgroundColor: "#3498db",
                  color: "white",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2980b9")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#3498db")
                }
              >
                Add Report
              </Button>
              <Button
                type="button"
                style={{
                  ...modalStyles.button,
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#34495e")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2c3e50")
                }
              >
                Add Fine
              </Button>
              <Button
                type="submit"
                style={{
                  ...modalStyles.button,
                  backgroundColor: "#e74c3c",
                  color: "white",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#c0392b")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e74c3c")
                }
              >
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AssetReturnForm;
