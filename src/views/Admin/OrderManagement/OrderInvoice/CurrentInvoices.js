import { useState } from "react";
import { Table } from 'antd';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Nav,
    Container,
    Row,
    Col,
    Navbar
} from "reactstrap";
import { Import } from "iconsax-react";
import Header from "components/Headers/Header.js";
import { useHistory } from "react-router-dom";
import "./OrderInvoice.scss"

const data = [];

data.push(
    {
        number: 221213210452458,
        date: `February 20th, 2023`,
        projectNumber: `000010.0000.00`,
        submittedBy: `Kenny McCoig`,
        price: `56.64 USD`,

    },

);

const columns = [
    {
        title: "Order Number",
        dataIndex: "number",
        key: "number",
        width: '60rem',

    },
    {
        title: "Invoice Date",
        dataIndex: "date",
        key: "date",
        width: '60rem',

    },
    {
        title: "Project Number",
        dataIndex: "projectNumber",
        key: "projectNumber",
        width: '60rem',

    },
    {
        title: "Submitted by",
        dataIndex: "submittedBy",
        key: "submittedBy",
        width: '60rem',

    },
    {
        title: "Total Cost",
        dataIndex: "price",
        key: "price",
        width: '20rem',

    },

];

const CurrentInvoice = (props) => {
    const [value, setValue] = useState(1);
    const history = useHistory();

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            {/* <Header /> */}
            {/* Page content */}
            {/* <Container fluid className="pl-4 ml-3"> */}
            <Row>
                <Col xl="12">
                    <Container>

                        <div className='currentInvoice'>
                            Current Invoices
                        </div>
                        <div className="electronic-2 mt-1">
                            The following orders have not been exported.
                        </div>

                        <Row className="mt-3">
                            <Table columns={columns} dataSource={data} pagination={false} />
                        </Row>
                        <Row className="mt-3 pt-3">
                            <Button key="submit"  >
                                <Import className="mr-2 " />
                                Export Invoices</Button>
                        </Row>

                    </Container>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col >
                    <Card className="bg-white " >
                        <CardBody>
                            <div></div>
                            <label for="images" class="drop-containers p-4">
                                <div className="d-flex" style={{ gap: '20px' }}>
                                    <div onClick={() => history.push(`/admin/email`)}>Sample Email</div>
                                    <div onClick={() => history.push(`/admin/s&s`)}>S&S</div>
                                    <div onClick={() => history.push(`/admin/orderpdf`)}>OrderPDF</div>
                                </div>
                            </label>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* </Container> */}
        </>
    );
};

export default CurrentInvoice;