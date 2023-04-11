import { useState } from "react";
import { Select, Table, Row, Col } from "antd";
import {
  Card,
  CardBody,
  Container,
  // Row,
  // Col,
} from "reactstrap";
import { Box1 } from "iconsax-react";
import Header from "components/Headers/Header.js";

const data = [
  {
    OrderNumber: '221213210452458',
    ProjectNumber: '000010.0000.00',
    ProjectName: 'GeneralOverhead',
    DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
    Submittedby: 'Kenny McCoig',
    DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
    Complete: '0.00%'
  },
  {
    OrderNumber: '221213210452458',
    ProjectNumber: '000010.0000.00',
    ProjectName: 'General Overhead',
    DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
    Submittedby: 'Kenny McCoig',
    DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
    Complete: '0.00%'
  },
  {
    OrderNumber: '221213210452458',
    ProjectNumber: '000010.0000.00',
    ProjectName: 'General Overhead',
    DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
    Submittedby: 'Kenny McCoig',
    DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
    Complete: '0.00%'
  },
  {
    OrderNumber: '221213210452458',
    ProjectNumber: '000010.0000.00',
    ProjectName: 'General Overhead',
    DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
    Submittedby: 'Kenny McCoig',
    DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
    Complete: '0.00%'
  },
  {
    OrderNumber: '221213210452458',
    ProjectNumber: '000010.0000.00',
    ProjectName: 'General Overhead',
    DateSubmitted: 'Feb 20th, 2023 at 09:00:00 PM',
    Submittedby: 'Kenny McCoig',
    DueDate: 'Feb 24th, 2023 at 09:00:00 PM',
    Complete: '0.00%'
  },

];
const columns = [
  {
    title: "Order Number",
    dataIndex: "OrderNumber",
    key: "OrderNumber",
    width: "60rem",
  },
  {
    title: "Project Number",
    dataIndex: "ProjectNumber",
    key: "ProjectNumber",
    width: "50rem",
  },
  {
    title: "Project Name",
    dataIndex: "ProjectName",
    key: "ProjectName",
    width: "50rem",
  },
 
  {
    title: "Date Submitted",
    dataIndex: "DateSubmitted",
    key: "DateSubmitted",
    width: "50rem",
  },
  {
    title: "Submitted by",
    dataIndex: "Submittedby",
    key: "Submittedby",
    width: "50rem",
  },
  {
    title: "Due Date",
    dataIndex: "DueDate",
    key: "DueDate",
    width: "50rem",
  },
  {
    title: "% Complete",
    dataIndex: "Complete",
    key: "Complete",
    width: "40rem",
  },
];

const OrderStatus = (props) => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const getRowClassName = (record, index) => {
    if(record?.ProjectName === 'GeneralOverhead' ) {
      return 'cancelledRowColor'
    }
    else{
      return 'bg-white'
    }
  }
  return (
    <>
      <div
        style={{
          textAlign: "center",
          paddingBottom: "50px",
          paddingTop: "50px",
        }}
      >
        <Box1 size="32" className="orderStatusIcon" variant="Bulk" />
      </div>
      <div className="font20 mb-5" style={{ textAlign: "center" }}>
        Order Status
      </div>
      <Container fluid className="pl-4 ml-3">
        <Row>
          <Card className="bg-white ">
            <CardBody>
              <Row>
                <Col span={9} className="mr-2">
                  <Select
                    showSearch
                    size={"large"}
                    style={{ width: "100%" }}
                    placeholder="Sort by: Date / Time"
                  >
                    {" "}
                  </Select>
                </Col>
                <Col span={9} className="mr-2">
                  <Select
                    showSearch
                    size={"large"}
                    style={{ width: "100%" }}
                    placeholder="Auto Refresh: 60 Seconds"
                  >
                    {" "}
                  </Select>
                </Col>
                <Col span={3} className="text-center">
                  <button
                    style={{ width: "80%" }}
                    type="submit"
                    className=" button-order mt-10 "
                  >
                    Apply Filter
                  </button>
                </Col>

                <Col span={2}>
                  <button
                    style={{ width: 82 }}
                    type="submit"
                    className=" button-order-1 mt-10 "
                  >
                    Reset
                  </button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Table
                rowClassName={getRowClassName}
                  className="shadow"
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                />
              </Row>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default OrderStatus;
