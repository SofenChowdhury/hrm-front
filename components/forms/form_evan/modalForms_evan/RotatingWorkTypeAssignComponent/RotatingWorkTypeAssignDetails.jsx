import React, { useState } from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";
import { FiX } from "react-icons/fi";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IoArchive } from "react-icons/io5";
import UpdateRotatingWorkType from "./UpdateRotatingWorkType";
import WarningComponent from "../Warning Component/WarningComponent";

const RotatingWorkTypeAssignDetails = ({
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
      gap: "5px",
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
      "&:hover": {
        backgroundColor: "#2980b9",
      },
    },
    archiveButton: {
      backgroundColor: "#262020",
      border: "none",
      color: "#fff",
    },

    deleteButton: {
      backgroundColor: "#e74c3c",
      border: "none",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#c0392b",
      },
    },
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  // Delete clcik
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setIsWarningOpen(true);
  };

  const handleCloseWarning = () => {
    setIsWarningOpen(false);
  };

  const handleConfirmDelete = () => {
    console.log("Deleted item with ID:", deleteId);
    setIsWarningOpen(false);
  };

  // Archive clcik
  const [isWarningOpened, setIsWarningOpened] = useState(false);
  const [archiveId, setarchiveId] = useState(null);

  const handleArchiveClick = (id) => {
    setarchiveId(id);
    setIsWarningOpened(true);
  };

  const handleArchiveCloseWarning = () => {
    setIsWarningOpened(false);
  };

  const handleArchiveConfirm = () => {
    console.log("Archive item with ID:", archiveId);
    setIsWarningOpened(false);
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
          <Typography sx={styles.title}>
            Rotating Work Type Details
          </Typography>

          <Box sx={styles.detailsSection}>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Employee</Typography>
              <Typography sx={styles.value}>
                {`${data.employee.name} ${data.employee.code}`}
              </Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Ttile</Typography>
              <Typography sx={styles.value}>{data.title}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Based on</Typography>
              <Typography sx={styles.value}>{data.basedOn}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Rotate</Typography>
              <Typography sx={styles.value}>{data.rotate}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Start Date</Typography>
              <Typography sx={styles.value}>{data.startDate}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Current Shift</Typography>
              <Typography sx={styles.value}>{data.currentWorkType}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Next Switch</Typography>
              <Typography sx={styles.value}>{data.nextSwitch}</Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Next Shift</Typography>
              <Typography sx={styles.value}>{data.nextWorkType}</Typography>
            </Box>

            {/* <Box sx={styles.detailItem} style={{ gridColumn: "1 / span 2" }}>
                <Typography sx={styles.label}>Description</Typography>
                <Typography sx={styles.value}>{data.description}</Typography>
              </Box> */}
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
              style={{ ...styles.iconButton, ...styles.archiveButton }}
              onClick={handleArchiveClick}
              // onClick={() => handleArchiveClick(item.id)}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#302e2e")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#262020")
              }
            >
              <IoArchive />
            </button>
            <button
              style={{ ...styles.iconButton, ...styles.deleteButton }}
              onClick={handleDeleteClick}
              // onClick={() => handleDeleteClick(item.id)}
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
        <UpdateRotatingWorkType
          isOpen={isEditModalOpen}
          toggle={handleCloseEditModal}
          data={data}
        />
      )}

      {/* For remove */}
      <WarningComponent
        open={isWarningOpen}
        onClose={handleCloseWarning}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to remove this Work type?"
        confirmText="Confirm"
        cancelText="Cancel"
      />

      {/* For archive */}
      <WarningComponent
        open={isWarningOpened}
        onClose={handleArchiveCloseWarning}
        onConfirm={handleArchiveConfirm}
        message="Are you sure you want to archive this Work type?"
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </>
  )
}

export default RotatingWorkTypeAssignDetails