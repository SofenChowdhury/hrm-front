import React, { useState } from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";
import { FiX } from "react-icons/fi";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateWorkType from "./UpdateWorkType";

const WorkTypeDetails = ({
  isOpen,
  toggle,
  data,
  onNavigate,
  hasPrevious,
  hasNext,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (!data) return null;

  const styles = {
    dialog: {
      "& .MuiDialog-paper": {
        margin: "20px",
        borderRadius: "8px",
        maxWidth: "450px",
        width: "100%",
        position: "relative",
        overflow: "visible",
      },
    },
    content: {
      padding: "20px 24px",
      position: "relative",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      marginBottom: "24px",
    },
    avatar: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#4CAF50",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "20px",
      marginRight: "16px",
    },
    employeeInfo: {
      flex: 1,
    },
    employeeName: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#333",
    },
    department: {
      fontSize: "14px",
      color: "#666",
    },
    detailsSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "24px",
      marginBottom: "16px",
    },
    detailItem: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    label: {
      color: "#666",
      fontSize: "14px",
      fontWeight: "bold",
    },
    value: {
      fontSize: "15px",
      fontWeight: "500",
      color: "#333",
    },
    actionButton: {
      width: "100%",
      marginTop: "24px",
      backgroundColor: "#e74c3c",
      color: "white",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#c0392b",
      },
    },
    closeButton: {
      background: "none",
      border: "none",
      padding: "0",
      position: "absolute",
      right: "16px",
      top: "16px",
      cursor: "pointer",
      zIndex: 1,
    },
    navigationButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 1000,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#f5f5f5",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      },
    },
    prevButton: {
      left: -50,
    },
    nextButton: {
      right: -50,
    },
    buttonGroup: {
      display: "flex",
      gap: "16px",
    },
    iconButton: {
      flex: "1",
      height: "40px",
      borderRadius: "4px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "20px",
    },
    editButton: {
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
    },
    deleteButton: {
      backgroundColor: "#e74c3c",
      border: "none",
      color: "#fff",
    },
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={toggle} sx={styles.dialog}>
        <button onClick={toggle} style={styles.closeButton} aria-label="Close">
          <FiX size={20} />
        </button>
        {hasPrevious && (
          <button
            style={{ ...styles.navigationButton, ...styles.prevButton }}
            onClick={() => onNavigate("previous")}
            aria-label="Previous"
          >
            <ChevronLeftIcon sx={{ fontSize: 20 }} />
          </button>
        )}

        {hasNext && (
          <button
            style={{ ...styles.navigationButton, ...styles.nextButton }}
            onClick={() => onNavigate("next")}
            aria-label="Next"
          >
            <ChevronRightIcon sx={{ fontSize: 20 }} />
          </button>
        )}

        <DialogContent sx={styles.content}>
          <Typography sx={styles.title}>Work Type Details</Typography>

          <Box sx={styles.header}>
            <div style={styles.avatar}>
              {data?.employee?.name?.substring(0, 2)?.toUpperCase()}
            </div>
            <div style={styles.employeeInfo}>
              <Typography style={styles.employeeName}>
                {data?.employee?.name}
              </Typography>
              <Typography style={styles.department}>S/W Dept / None</Typography>
            </div>
          </Box>

          <Box sx={styles.detailsSection}>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Employee</Typography>
              <Typography sx={styles.value}>
                {`${data.employee.name} ${data.employee.code}`}
              </Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Requested Shift</Typography>
              <Typography sx={styles.value}>{data.requestedShift}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Previous Shift</Typography>
              <Typography sx={styles.value}>{data.previousShift}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Requested Date</Typography>
              <Typography sx={styles.value}>{data.requestedDate}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Requested Till</Typography>
              <Typography sx={styles.value}>{data.requestedTill}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Status</Typography>
              <Typography sx={styles.value}>{data.status}</Typography>
            </Box>
            <Box sx={styles.detailItem} style={{ gridColumn: "1 / span 2" }}>
              <Typography sx={styles.label}>Description</Typography>
              <Typography sx={styles.value}>{data.description}</Typography>
            </Box>
          </Box>

          <div style={styles.buttonGroup}>
            <button
              style={{ ...styles.iconButton, ...styles.editButton }}
              onClick={handleEditClick}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#2980b9")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#3498db")
              }
            >
              <EditIcon />
            </button>
            <button
              style={{ ...styles.iconButton, ...styles.deleteButton }}
              onClick={() => console.log("Delete clicked")}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#c0392b")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#e74c3c")
              }
            >
              <DeleteIcon />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {isEditModalOpen && (
        <UpdateWorkType
          isOpen={isEditModalOpen}
          toggle={handleCloseEditModal}
          data={data}
        />
      )}
    </>
  );
};

export default WorkTypeDetails;
