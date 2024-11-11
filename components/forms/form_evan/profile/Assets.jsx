import React, { useState } from "react";
import { Container, Table, Button } from "reactstrap";
import AssetsRequest from "../modalForms_evan/Assets/AssetsRequest";
import AssetsInformation from "../modalForms_evan/Assets/AssetsInformation";

const Assets = () => {
  const [modalType, setModalType] = useState(null);
  // const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(null);

  const toggleModal = (type = null) => {
    setModalType(type);
  };
  const assetsData = [
    {
      id: 1,
      name: "BMW",
      initials: "BM",
      status: "In use",
      assignedDate: "May. 24, 2024",
      trackingId: "CRT0004",
      batchNo: "CRB001",
      category: "Car",
      assignedBy: "Adam Luis",
      description: "None",
    },
    {
      id: 2,
      name: "Tesla",
      initials: "TS",
      status: "Available",
      assignedDate: "Jun. 10, 2024",
      trackingId: "CRT0005",
      batchNo: "CRB002",
      category: "Electric Car",
      assignedBy: "Elon Musk",
      description: "Electric vehicle",
    },
  ];

  const handleRowClick = (index) => {
    setSelectedAssetIndex(index);
    setModalType("information");
  };

  const handleNavigateAsset = (direction) => {
    if (direction === "previous" && selectedAssetIndex > 0) {
      setSelectedAssetIndex(selectedAssetIndex - 1);
    } else if (
      direction === "next" &&
      selectedAssetIndex < assetsData.length - 1
    ) {
      setSelectedAssetIndex(selectedAssetIndex + 1);
    }
  };

  return (
    <Container fluid className="p-4">
      <div className="d-flex justify-content-end mb-3">
        <Button
          color="danger"
          className="px-4"
          style={{ backgroundColor: "#DC3545" }}
          onClick={() => toggleModal("AssetsRequest")}
        >
          <span className="me-2">+</span>
          Create
        </Button>
      </div>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Status</th>
            <th>Assigned Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assetsData.map((asset, index) => (
            <tr
              key={asset.id}
              onClick={() => handleRowClick(index)}
              style={{ cursor: "pointer" }}
            >
              <td>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "#4CAF50",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      marginRight: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {asset.initials}
                  </div>
                  {asset.name}
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#FFA500",
                      marginRight: "8px",
                    }}
                  />
                  {asset.status}
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#4CAF50",
                      marginRight: "8px",
                    }}
                  />
                  {asset.assignedDate}
                </div>
              </td>
              <td>
                <Button
                  color="danger"
                  style={{
                    backgroundColor: "#DC3545",
                    border: "none",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle return request
                  }}
                >
                  ↵ Return Request
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {modalType === "AssetsRequest" && (
        <AssetsRequest
          isOpen={modalType === "AssetsRequest"}
          toggle={() => toggleModal(null)}
        />
      )}

      {modalType === "information" && selectedAssetIndex !== null && (
        <AssetsInformation
          open={true}
          onClose={() => toggleModal(null)}
          assetData={assetsData[selectedAssetIndex]}
          currentIndex={selectedAssetIndex}
          onNavigate={handleNavigateAsset}
          hasPrevious={selectedAssetIndex > 0}
          hasNext={selectedAssetIndex < assetsData.length - 1}
        />
      )}
    </Container>
  );
};

export default Assets;
