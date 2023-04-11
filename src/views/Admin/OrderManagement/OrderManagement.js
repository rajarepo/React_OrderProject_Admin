import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker, Table, Button, Popover, TimePicker, Upload, Select, Modal, Tooltip } from 'antd';
import {

  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";
import { Notepad2, Clock, CalendarCircle, Trash, DocumentText, Magicpen, Receipt1, TickCircle, SmsTracking, MinusCirlce } from "iconsax-react";
import Header from "components/Headers/Header.js";
import { Route, useHistory } from "react-router-dom";
import DeleteOrderPopUp from "views/examples/DeleteOrderPopUp";
import { CloseOutlined } from '@ant-design/icons'

const OrderManagement = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [open, setOpen] = useState(false);
  const [deletePop, setDeletePop] = useState(false);
  const Option = Select.Option;
  const history = useHistory();

  const handleok = () => {
    setOpen(false);
  }
  const handleCancel = () => {
    setOpen(false);
  }
  const handleDeletePopOk = () => {
    setDeletePop(false);
  }
  const handleDeletePopCancel = () => {
    setDeletePop(false);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleBlur() {
    window.open("/ordermanagements/historicalInvoices", "_self")
  }

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }


  const data = [
    {
      OrderNumber: '221213210452458',
      OrderType: 'Print Orders',
      ProjectNumber: '000010.0000.00',
      ProjectName: 'General Overhead',
      DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
      Submittedby: 'Kenny McCoig',
      DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
      Complete: '0.00%'
    },
    {
      OrderNumber: '221213210452458',
      OrderType: 'Scan Orders',
      ProjectNumber: '000010.0000.00',
      ProjectName: 'General Overhead',
      DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
      Submittedby: 'Kenny McCoig',
      DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
      Complete: '0.00%'
    },
    {
      OrderNumber: '221213210452458',
      OrderType: 'Electronic S and S Orders',
      ProjectNumber: '000010.0000.00',
      ProjectName: 'General Overhead',
      DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
      Submittedby: 'Kenny McCoig',
      DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
      Complete: '0.00%'
    },
    {
      OrderNumber: '221213210452458',
      OrderType: 'USB / CD Orders',
      ProjectNumber: '000010.0000.00',
      ProjectName: 'General Overhead',
      DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
      Submittedby: 'Kenny McCoig',
      DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
      Complete: '0.00%'
    },
    {
      OrderNumber: '221213210452458',
      OrderType: 'Chicago - Tree Towns Orders',
      ProjectNumber: '000010.0000.00',
      ProjectName: 'General Overhead',
      DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
      Submittedby: 'Kenny McCoig',
      DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
      Complete: '0.00%'
    },
    {
      OrderNumber: '221213210452458',
      OrderType: 'Cancelled Order',
      ProjectNumber: '000010.0000.00',
      ProjectName: 'General Overhead',
      DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
      Submittedby: 'Kenny McCoig',
      DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
      Complete: '0.00%'
    },
    {
      OrderNumber: '221213210452458',
      OrderType: 'Cancelled Order',
      ProjectNumber: '000010.0000.00',
      ProjectName: 'General Overhead',
      DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
      Submittedby: 'Kenny McCoig',
      DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
      Complete: '0.00%'
    }

  ];


  const columns = [
    {
      title: "Order Number",
      dataIndex: "OrderNumber",
      key: "OrderNumber",

      // width: '60rem',

    },
    {
      title: "Order Type",
      dataIndex: "OrderType",
      key: "OrderType",
      width: '50rem',
    },
    {
      title: "Project Number",
      dataIndex: "ProjectNumber",
      key: "ProjectNumber",
      width: '50rem',
    },
    {
      title: "Project Name",
      dataIndex: "ProjectName",
      key: "ProjectName",
      width: '50rem',
    },
    {
      title: "Date Submitted",
      dataIndex: "DateSubmitted",
      key: "DateSubmitted",
      width: '40rem',

    },
    {
      title: "Submitted by",
      dataIndex: "Submittedby",
      key: "Submittedby",
      width: '50rem',
    },
    {
      title: "Due Date",
      dataIndex: "DueDate",
      key: "DueDate",
      width: '40rem',
    },
    {
      title: "% Complete",
      dataIndex: "Complete",
      key: "Complete",
      width: '30rem',
    },
    {
      title: "Order Actions",
      dataIndex: "OrderActions",
      key: "contact",
      width: '130rem',

      render: (text, record) => {
        return (
          <Row>
            <Col lg="8">
              <Row>
                <Col sm="1">
                  <Tooltip placement="bottomLeft" title="View Details">
                    <button style={{ border: "none", backgroundColor: "transparent" }}><DocumentText size="16" color="#264B5D"
                      onClick={() => history.push(`/admin/viewDetails`)}
                    /></button>
                  </Tooltip>

                </Col>
                <Col sm="1">
                  <Tooltip placement="bottomLeft" title="Edit Details">
                    <button style={{ border: "none", backgroundColor: "transparent" }}><Magicpen size="16" color="#A0A0A0"
                      onClick={() => history.push(`/admin/editDetails`)} /></button>
                  </Tooltip>
                </Col>
                <Col sm="1">
                  <Tooltip placement="bottomLeft" title="Delete">
                    <button style={{ border: "none", backgroundColor: "transparent" }}><Trash size="16" color="#A0A0A0"
                      onClick={() => setDeletePop(true)}
                    /></button>
                  </Tooltip>
                </Col>


              </Row>
              <Modal
                // title="Print"
                centered
                open={deletePop}
                onOk={handleDeletePopOk}
                onCancel={handleDeletePopCancel}
                closable={false}
                footer={[
                  <Row className="p-4" style={{ marginblock: "2", padding: "12px, 16px, 12px, 16px", gap: "8px" }}>
                    <div className="ml-4" >
                      <button style={{
                        textAlign: "center", height: "43px", width: "152px", borderRadius: "8px", padding: "12px, 16px, 12px, 16px",
                        gap: "8px", border: " 1px solid #EDEDED", background: "#FFFFFF"
                      }} className="PopUpKeyText" onClick={handleDeletePopCancel}>Cancel</button>
                    </div>

                    <div>
                      <Button classname="ml-5px PopUpContinue" style={{ textAlign: "center", height: "43px", width: "152px", background: "#264B5D", color: "white" }} key="submit" onClick={handleDeletePopCancel}>Delete</Button>
                    </div>
                  </Row>
                ]}

                height={"353px"}
                width={"384px"}


                left={"528px"}
                top={"334px"}

              >
                <DeleteOrderPopUp />
              </Modal>
              <Row className="mt-1">
                <Col sm="1">
                  <Tooltip placement="bottomLeft" title="S&S Notification">
                    <button style={{ border: "none", backgroundColor: "transparent" }}><SmsTracking size="16" color="#264B5D" /></button>
                  </Tooltip>
                </Col>
                <Col sm="1">
                  <Tooltip placement="bottomLeft" title="Create Invoice">
                    <button style={{ border: "none", backgroundColor: "transparent" }}>
                      <Receipt1 size="16" color="#A0A0A0" />
                    </button>
                  </Tooltip>
                </Col>
                <Col sm="1">
                  <Tooltip placement="bottomLeft" title="Complete Invioce">
                    <button style={{ border: "none", backgroundColor: "transparent" }}><TickCircle size="16" color="#A0A0A0" /></button>
                  </Tooltip>
                </Col>
              </Row>
            </Col>
            <Col lg="3" className="mt-3">

              <Tooltip placement="bottomLeft" title="Cancel Order">
                <button style={{ border: "none", backgroundColor: "transparent" }}> <MinusCirlce size="20" color="#264B5D" variant="Bold" /></button>
              </Tooltip>

            </Col>
          </Row>


        );
      },
    },

  ];
  const content = (
    <div>
      <p>View Details</p>
    </div>
  );
  const getRowClassName = (record, index) => {
    if (record?.OrderType === 'Cancelled Order') {
      return 'cancelledRowColor'
    }
    else if (record?.OrderType === 'Chicago - Tree Towns Orders') {
      return 'chicagoRowColor'
    }
    else if (record?.OrderType === 'USB / CD Orders') {
      return 'usbRowColor'
    }
    else if (record?.OrderType === 'Electronic S and S Orders') {
      return 'electronicRowColor'
    }
    else if (record?.OrderType === 'Scan Orders') {
      return 'scanIndexRowColor'
    }
    else {
      return 'bg-white'
    }
  }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container fluid className="mx-4" style={{ backgroundColor: 'transparent' }}>
        <Row>
          <Col xl="3">
            <div className="">
              <label className="labels-e pb-2">Filter by</label>
              <Select
                showSearch
                size={"large"}
                style={{ width: '100%' }}
                placeholder="Type to Search..."
              > </Select>
            </div>

          </Col>
          <Col xl="3">
            <label for="start" className="labels-e">Start Date</label>

            {/* <Input suffix={<CalendarCircle />} className="inputs" defaultValue="Select..." placeholder="Select" type="inputs" /> */}
            <DatePicker
              name={""}
              className="inputs"
              suffixIcon={<CalendarCircle style={{ color: "black" }} />}
              placeholder="Select..."
              hideTime
              format="MM/DD/YYYY" />

          </Col>
          <Col xl="3">
            <label for="start" className="labels-e">End Date</label>

            {/* <Input suffix={<CalendarCircle />} className="inputs" defaultValue="Select..." placeholder="Select" type="inputs" /> */}
            <DatePicker
              name={""}
              className="inputs"
              suffixIcon={<CalendarCircle style={{ color: "black" }} />}
              placeholder="Select..."
              hideTime
              format="MM/DD/YYYY" />

          </Col>

          <Col >
            <div className="pt-3">
              <button type="submit" className=" button-order mt-4 ">
                Apply Filter
              </button>
            </div>

          </Col>

          <Col >
            <div className="pt-3">
              <button type="submit" className=" button-order-1 mt-4  ">
                Reset
              </button>
            </div>
          </Col>

        </Row>
        <Row className="p-3">
          <Table className="shadow"
            rowClassName={getRowClassName}
            columns={columns}
            dataSource={data}
            pagination={false}
          // scroll={{ x: 980, }}
          />
        </Row>
      </Container>
    </>
  );
};

export default OrderManagement;