import React, { useState } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, Tooltip, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { FiList, FiGrid, FiPlus } from 'react-icons/fi';
import { IoFilterSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from 'react-icons/bs';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Router from "next/router";


// Function to generate color based on initials
const getColorFromInitials = (initials) => {
  const colors = [
    '#FFA726', '#AB47BC', '#29B6F6', '#66BB6A', '#FF7043', '#EC407A', '#FFCA28', '#8D6E63', '#78909C'
  ];
  let charCodeSum = 0;
  for (let i = 0; i < initials.length; i++) {
    charCodeSum += initials.charCodeAt(i);
  }
  return colors[charCodeSum % colors.length];
};

const employeesData = [
  { initials: 'AR', name: 'Abigail Roberts', email: 'abigail.roberts@horilla.com', role: 'Sales Man - (Sales Dept)', status: 'Offline', id: '#PEP15' },
  { initials: 'AL', name: 'Adam Luis', email: 'adam.luis@horilla.com', role: 'None', status: 'Offline', id: '' },
  { initials: 'AM', name: 'Aiden Murphy', email: 'aiden.murphy@horilla.com', role: 'Financial Analyst - (Finance Dept)', status: 'Offline', id: '#PEP40' },

  { initials: 'LA', name: 'Luis Adam', email: 'adam.luis@horilla.com', role: 'None', status: 'Offline', id: '', color: 'lightyellow' },
  { initials: 'MA', name: 'Murphy Aiden', email: 'aiden.murphy@horilla.com', role: 'Financial Analyst - (Finance Dept)', status: 'Offline', id: '#PEP40', color: 'lightcoral' },
  { initials: 'RA', name: 'Roberts Abigail', email: 'abigail.roberts@horilla.com', role: 'Sales Man - (Sales Dept)', status: 'Offline', id: '#PEP15', color: 'orange' },

  { initials: 'MM', name: 'Md. Mahadi', email: 'md.mahadi@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '', color: 'lightyellow' },
  { initials: 'RC', name: 'Rabby Chowdhury', email: 'rabby.chowdhury@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '#PEP15', color: 'orange' },
  { initials: 'AE', name: 'Ariful Evan', email: 'md.arifulevan@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '#PEP40', color: 'lightcoral' },


{ initials: 'AR', name: 'Abigail Roberts', email: 'abigail.roberts@horilla.com', role: 'Sales Man - (Sales Dept)', status: 'Offline', id: '#PEP15' },
{ initials: 'AL', name: 'Adam Luis', email: 'adam.luis@horilla.com', role: 'None', status: 'Offline', id: '' },
{ initials: 'AM', name: 'Aiden Murphy', email: 'aiden.murphy@horilla.com', role: 'Financial Analyst - (Finance Dept)', status: 'Offline', id: '#PEP40' },

{ initials: 'LA', name: 'Luis Adam', email: 'adam.luis@horilla.com', role: 'None', status: 'Offline', id: '', color: 'lightyellow' },
{ initials: 'MA', name: 'Murphy Aiden', email: 'aiden.murphy@horilla.com', role: 'Financial Analyst - (Finance Dept)', status: 'Offline', id: '#PEP40', color: 'lightcoral' },
{ initials: 'RA', name: 'Roberts Abigail', email: 'abigail.roberts@horilla.com', role: 'Sales Man - (Sales Dept)', status: 'Offline', id: '#PEP15', color: 'orange' },

{ initials: 'MM', name: 'Md. Mahadi', email: 'md.mahadi@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '', color: 'lightyellow' },
{ initials: 'RC', name: 'Rabby Chowdhury', email: 'rabby.chowdhury@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '#PEP15', color: 'orange' },
{ initials: 'AE', name: 'Ariful Evan', email: 'md.arifulevan@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '#PEP40', color: 'lightcoral' },

];

const Employees = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 10;

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Calculate total pages and current employees
  const totalPages = Math.ceil(employeesData.length / employeesPerPage);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employeesData.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Tooltip
  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  // Dropdown
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // Pagination handler
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container fluid>
      <Row className="mb-3 align-items-center">
        <Col>
          <h3>Employees</h3>
        </Col>
        <Col md="10" className="d-flex align-items-center">
          <Input
            type="text"
            placeholder="Search"
            style={{
              marginRight: '10px',
              borderRadius: '8px',
              borderColor: '#ccc',
              padding: '5px 10px',
            }}
          />
          <Button outline color="secondary" style={{ marginRight: '5px', width: '80px' }}>
            <FiList />
          </Button>
          <Button color="primary" style={{ marginRight: '5px', width: '80px' }}>
            <FiGrid />
          </Button>
          <Button outline color="secondary" style={{ marginRight: '5px', width: '180px' }}>
            <IoFilterSharp /> Filter
          </Button>
          <Button outline color="secondary" style={{ marginRight: '5px', width: '180px' }}>
            Group By
          </Button>
          <Button outline color="secondary" style={{ marginRight: '5px', width: '180px' }}>
            Actions
          </Button>
          <Button color="danger" style={{ width: '180px' }}
          onClick={()=> Router.push("createNewpeople")}>
            <FiPlus /> Create
          </Button>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col className="d-flex">
          <span style={{ color: 'green', marginRight: '8px' }}>● Online</span>
          <span style={{ color: 'grey' }}>● Offline</span>
        </Col>
      </Row>

      <Row>
        {currentEmployees.map((employee, index) => (
          <Col md="4" key={index} className="mb-4">
            <Card style={{ height: '150px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <CardBody className="d-flex align-items-center">
                <div
                  style={{
                    backgroundColor: getColorFromInitials(employee.initials),
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                  }}
                >
                  {employee.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <h5 style={{ margin: 0, fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {employee.name} {employee.id && `(${employee.id})`}
                  </h5>
                  <p style={{ margin: 0, color: 'gray', fontSize: '12px' }}>{employee.email}</p>
                  <p style={{ margin: 0, color: 'gray', fontSize: '12px' }}>{employee.role}</p>
                  <div style={{ color: 'gray', fontSize: '10px' }}>
                    <span>● {employee.status}</span>
                  </div>
                </div>
                <div id={`action-icon-${index}`}>
                  <BsThreeDotsVertical
                    style={{ color: 'gray', cursor: 'pointer' }}
                    onClick={() => toggleDropdown(index)}
                  />
                  <Tooltip
                    isOpen={tooltipOpen === index}
                    target={`action-icon-${index}`}
                    toggle={() => setTooltipOpen(tooltipOpen === index ? null : index)}
                  >
                    Actions
                  </Tooltip>
                </div>

                {/* Dropdown Menu */}
                <Dropdown
                  isOpen={dropdownOpen === index}
                  toggle={() => toggleDropdown(index)}
                  direction="left"
                >
                  <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen === index} />
                  <DropdownMenu right style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                    <DropdownItem
                    onClick={()=> Router.push("editEmployee")}>Edit</DropdownItem>

                    <DropdownItem>Archive</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem style={{ color: 'red' }}>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Row className="mt-3">
        <Col className="d-flex justify-content-end">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Employees;
