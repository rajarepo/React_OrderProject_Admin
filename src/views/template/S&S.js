import { Card, DatePicker, Table } from "antd";
import { Container, Row, Col, Input } from "reactstrap";
import "./template.scss";

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
const SandS = () => (
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
                        S and S Order Notification - Order # 2212893749308
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
            <Col>
                {/* <hr /> */}
                <p class=' orderText20'>
                    Project Number # 2212122633760
                </p>
                <a className="font14TextLink" href="https://www.sample.org/?networkfilepathorderfolder=1&return=true" target="_blank">
                    https://www.sample.org/?networkfilepathorderfolder=1&return=true
                </a>
            </Col>
            <hr />
            <Col>
                {/* <hr /> */}
                <p class=' orderText20'>
                    Order Admins Notification
                </p>
                <div className="mt-2  font14Text">Click on the link below to notify order admins that order has been signed.</div>
                <a className="font14TextLink" href="https://sample.com/?orderadminnotifications=action&back=true" target="_blank">
                    https://sample.com/?orderadminnotifications=action&back=true
                </a>
            </Col>
        </Card>
    </Container>
);
export default SandS;
