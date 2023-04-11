import React from "react";
import { Tabs } from "antd";
import CurrentInvoice from "./CurrentInvoices";
import HistoricalInvoices from "./HistoricalInvoices";
import Header from "components/Headers/Header";
import { Container, Card } from "reactstrap";
import './OrderInvoice.scss'

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Current',
        children: <CurrentInvoice/>

    },
    {
        key: '2',
        label: 'Historical',
        children: <HistoricalInvoices/>
    }
];

const OrderInvoice = (props) => {

    return(
        <>
            <Header/>
            <Container fluid className="pl-4 ml-3">
                <Card className="bg-white p-3">
                    <Tabs className="pl-3" defaultActiveKey="1" items={items} onChange={onChange}/>
                </Card>
                
            </Container>
            
        </>
    )
}
export default OrderInvoice;