import { Card, DatePicker, Table } from "antd";
import { Container, Row, Col, Input } from "reactstrap";
import "./template.scss";
import { InfoCircle } from "iconsax-react";

const data = [];
for (let i = 0; i < 2; i++) {
    data.push({
        dateCompletd: '12-12-22 at 06:00 PM',
        Item: 'Bind Sets',
        Size: '24 x 36',
        quantity: '200',
        price: '0.60$',
        total: '$100.00',
    })

}

const columns = [
    {
        title: 'Date Completed',
        dataIndex: 'dateCompletd',
        key: 'dateCompletd',
    },
    {
        title: 'Item',
        dataIndex: 'Item',
        key: 'Item',
    },
    {
        title: 'Size',
        dataIndex: 'Size',
        key: 'Size',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Total ($)',
        dataIndex: 'total',
        key: 'total',
    }
];
const OrderPDF = () => (
    <Container>
        <Card
            className="cards"
            bordered={false}
            style={{
                width: 1000,
            }}
        >
            <Row>
                <Col>
                    <div className="font14">
                        Print Order Form
                    </div>
                </Col>
                <Col>
                    <div className="Submitted" style={{ textAlign: "end" }}>
                        20th February, 2023 at 09:30 PM
                    </div>
                </Col>
            </Row>
            <hr />
            {/* <p className="mt-2 mb-1 order"> Order Confirmation </p>
      <p class="order-no"> Order # 221213210452458 </p> */}
            <Row>
                <Col xl="6">
                    <div
                        className="p-2"
                        style={{ background: "#F7F7F7", borderRadius: "8px" }}
                    >
                        <Row className="pl-2 pr-2">
                            <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                                Charge To
                            </Col>
                            <Col
                                style={{ textAlign: "end" }}
                                className="order-details-dashed2 text-nowrap"
                            >
                                <Input
                                    style={{ border: "none", backgroundColor: "#F7F7F7" }}
                                    className="input"
                                    type="textArea"
                                    defaultValue="General Overhead"
                                ></Input>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xl="6">
                    <div
                        className="p-2"
                        style={{ background: "#F7F7F7", borderRadius: "8px" }}
                    >
                        <Row className="pl-2 pr-2">
                            <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                                Deliver To
                            </Col>
                            <Col
                                style={{ textAlign: "end" }}
                                className="order-details-dashed2 text-nowrap"
                            >
                                <Input
                                    style={{ border: "none", backgroundColor: "#F7F7F7" }}
                                    className="input"
                                    type="textArea"
                                    defaultValue="Paul Elliott"
                                ></Input>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col xl="6">
                    <div
                        className="p-2"
                        style={{ background: "#F7F7F7", borderRadius: "8px" }}
                    >
                        <Row className="pl-2 pr-2">
                            <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                                Printing For
                            </Col>
                            <Col
                                style={{ textAlign: "end" }}
                                className="order-details-dashed2 text-nowrap"
                            >
                                <Input
                                    style={{ border: "none", backgroundColor: "#F7F7F7" }}
                                    className="input"
                                    type="textArea"
                                    defaultValue="Permits"
                                ></Input>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xl="6">
                    <div
                        className="p-2"
                        style={{ background: "#F7F7F7", borderRadius: "8px" }}
                    >
                        <Row className="pl-2 pr-2">
                            <Col style={{ textAlign: "start" }} className="fields mt-2 ">
                                Order Number
                            </Col>
                            <Col
                                style={{ textAlign: "end" }}
                                className="order-details-dashed2 text-nowrap"
                            >
                                <Input
                                    style={{ border: "none", backgroundColor: "#F7F7F7" }}
                                    className="input"
                                    type="textArea"
                                    defaultValue="221212122633749"
                                ></Input>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="pt-3">

            </Row>
            <hr />
            {/* <Card className="borderBox1 mb-4">
                <div className="d-flex ">
                    <div>
                        <InfoCircle
                            className="attentionInfoIcon mr-4"
                            style={{ color: "#264B5D", }}
                        />
                    </div>
                    <div className="font14">
                        <div className="">
                            The user must make at least one selection (cannot select both) before being allowed to Submit.
                            If the user selects “Yes” then display the state, discipline, QA/QC fields in the following paragraph.
                        </div>
                        <div className="pt-2 ">
                            For more information, please call the plotroom.
                        </div>
                    </div>
                </div>

            </Card> */}

            <p class=' mt-2 projectNumberfont'>
                Project Number # 000010.0000.00
            </p>
            <Table
                style={{ borderRadius: '8px', border: '1px solid #F7F7F7' }}
                columns={columns}
                dataSource={data}
                pagination={false}
            // rowClassName="header"

            />
        </Card >
    </Container >
);
export default OrderPDF;
