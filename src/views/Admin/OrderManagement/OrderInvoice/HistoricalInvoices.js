
import { useState } from "react";
import { DatePicker, Table } from 'antd';
// react plugin used to create charts
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Nav,
    // Table,
    Container,
    Row,
    Col,
    Navbar
} from "reactstrap";

// core components
import { CalendarCircle, Import } from "iconsax-react";
import Header from "components/Headers/Header.js";
import moment from "moment";
import { useHistory } from "react-router-dom";

const data = [];
data.push(
    {
        number: 221213210452458,
        date: `February 20th, 2023`,
        projectNumber: `000010.0000.00`,
        submittedBy: `Kenny McCoig`,
        price: `56.64 USD`,

    },
    {
        number: 221213210452458,
        date: `February 20th, 2023`,
        projectNumber: `000010.0000.00`,
        submittedBy: `Kenny McCoig`,
        price: `56.64 USD`,

    },
    {
        number: 221213210452458,
        date: `February 20th, 2023`,
        projectNumber: `000010.0000.00`,
        submittedBy: `Kenny McCoig`,
        price: `56.64 USD`,

    },
    {
        number: 221213210452458,
        date: `February 20th, 2023`,
        projectNumber: `000010.0000.00`,
        submittedBy: `Kenny McCoig`,
        price: `56.64 USD`,

    },
    {
        number: 221213210452458,
        date: `February 20th, 2023`,
        projectNumber: `000010.0000.00`,
        submittedBy: `Kenny McCoig`,
        price: `56.64 USD`,

    }
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
        width: '50rem',

    },

];

const HistoricalInvoices = (props) => {
    const [dateChange, setDateChange] = useState('');
    const history = useHistory();

    return (
        <>
                <Row>
                    <Col xl="12">
                        <Container className="bg-white " >
                            
                                <div className='currentInvoice'>
                                    Historical Invoices
                                </div>
                                <div className="electronic-2 mt-1">
                                    Select a date to view historical exports
                                </div>

                                <Row className="p-3">
                                    <label className="labels-e">Select Date</label>
                                    <DatePicker
                                        name={""}
                                        className="inputs"
                                        suffixIcon={<CalendarCircle style={{ color: "black" }} />}
                                        placeholder="Select..."
                                        hideTime
                                        onChange={(e) => {
                                            let formatDate = moment(e).format("MM-DD-YYYY HH:mm:ss a")
                                            formatDate ? setDateChange(formatDate) : setDateChange('')
                                        }}
                                        format="MM/DD/YYYY" />
                                </Row>
                                <Row className="mt-3">
                                    <Table columns={columns} dataSource={data} pagination={false} />
                                </Row>
                                <Row className="mt-3 pt-3">
                                    <Button key="submit"  >
                                        <Import className=" mr-2 " />
                                        Export Invoices</Button>
                                </Row>
                
                        </Container>
                    </Col>
                </Row>

        </>
    );
};

export default HistoricalInvoices;
