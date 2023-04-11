import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Card, Input, DatePicker, Table, Button, Popover, TimePicker, Upload, Select, Modal } from 'antd';
// react plugin used to create charts
// import Select from "react-select";
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {

    //   Card,
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
import { Notepad2, Clock, CalendarCircle, Trash, DocumentText, Magicpen, Receipt1, TickCircle, SmsTracking, CloseCircle, Add, MinusCirlce, InfoCircle } from "iconsax-react";
import Header from "components/Headers/Header.js";
import { useHistory } from "react-router-dom";

const EditDetails = (props) => {
    const [color, setColor] = useState(false);
    const [borderBoxOpen, setBorderBoxOpen] = useState(false);
    return (
        <>
            {/* Page content */}
            <Header />
            <Container fluid className="pl-4 ml-3">
                {
                    borderBoxOpen ?
                        <Card className="borderBoxAdmin  mb-5 ml-10" >
                            <div className="d-flex">
                                <div> <InfoCircle className="attentionInfoIcon  mr-3" style={{ color: '#264B5D' }} /></div>
                                <div>
                                    <div className="boxFirstRowtext mt-2"
                                    >
                                        Order is locked and can not be edited.
                                    </div>
                                </div>
                            </div>
                        </Card> : ''
                }
                <Row>
                    <Col >
                        <Card className="bg-white " >

                            <CardBody>

                                <Row className="">
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{ textAlign: 'start' }} className=" order-details-dashed1  text-nowrap mt-1 " >
                                                    Submitted By
                                                </Col>
                                                <Col style={{ textAlign: 'end' }} className="order-details-dashed2 text-nowrap  " >
                                                    <Input style={{ border: 'none' }} className="text-right"
                                                        type="textArea"
                                                        placeholder="Kenny McCoig">
                                                    </Input>
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{ textAlign: 'start' }} className=" order-details-dashed1  text-nowrap mt-1" >
                                                    Date Submitted
                                                </Col>
                                                <Col style={{ textAlign: 'end' }} className="order-details-dashed2 text-nowrap  " >
                                                    <Input style={{ border: 'none' }} className="text-right"
                                                        type="textArea"
                                                        placeholder="February 20th, 2023 at 09:00:00 PM">
                                                    </Input>
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                </Row>

                                <Row className="mt-3">
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{ textAlign: 'start' }} className=" order-details-dashed1  text-nowrap mt-1 " >
                                                    Date Required
                                                </Col>
                                                <Col style={{ textAlign: 'end' }} className="order-details-dashed2 text-nowrap  " >
                                                    <Input style={{ border: 'none' }} className="text-right"
                                                        type="textArea"
                                                        placeholder="February 24th, 2023 at 09:00:00 PM">
                                                    </Input>
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{ textAlign: 'start' }} className=" order-details-dashed1  text-nowrap mt-1 " >
                                                    Order For
                                                </Col>
                                                <Col style={{ textAlign: 'end' }} className="order-details-dashed2 text-nowrap  " >
                                                    <Input style={{ border: 'none' }} className="text-right"
                                                        type="textArea"
                                                        placeholder=" Testing">
                                                    </Input>
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>

                                </Row>
                                <Row className="mt-3">
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{ textAlign: 'start' }} className=" order-details-dashed1  text-nowrap mt-1" >
                                                    Project Number
                                                </Col>
                                                <Col style={{ textAlign: 'end' }} className="order-details-dashed2 text-nowrap  " >
                                                    <Input style={{ border: 'none' }} className="text-right"
                                                        type="textArea"
                                                        placeholder=" 000010.0000.00">
                                                    </Input>
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{ textAlign: 'start' }} className=" order-details-dashed1  text-nowrap mt-1 " >
                                                    Project Name
                                                </Col>
                                                <Col style={{ textAlign: 'end' }} className="order-details-dashed2 text-nowrap  " >
                                                    <Input style={{ border: 'none' }} className="text-right" color="#000000"
                                                        type="textArea"
                                                        placeholder="General Overhead">
                                                    </Input>
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>

                                </Row>
                                <Card className="mt-4">
                                    <Card.Grid hoverable={false} style={{ borderBottomLeftRadius: "8px", width: '15%' }} className=" p-3 ">
                                        < div >
                                            <div className="text-left grid-text pb-2 ">
                                                Item
                                            </div>
                                            <div >
                                                <Select
                                                    showSearch
                                                    size={"medium"}
                                                    style={{ width: '100%' }}
                                                    placeholder="Digital Print"

                                                > </Select>
                                            </div>
                                        </div>



                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '15%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            File
                                        </div>
                                        <div>
                                            <Input style={{ backgroundColor: "#F7F7F7" }} type="text" className="p-1 text-center" placeholder="Random Filename.PDF" />
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '16%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Size
                                        </div>
                                        <div >
                                            <Select

                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%', }}
                                                placeholder="8.5 x 11"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '13%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Pages
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%' }}
                                                placeholder="20 Pages"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '15%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Copies
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%' }}
                                                placeholder="1 Copy"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '15%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Cost
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%' }}
                                                placeholder="0.20 USD"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '11%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Completed
                                        </div>
                                        <div>
                                            <Card className=" p-1 ml-3" style={{ width: '32px' }}>
                                                <div className="text-center" >
                                                    <Checkbox className=""></Checkbox></div>
                                            </Card>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ borderBottomRightRadius: '0px', width: '100%' }} className="gridCard p-3 position-relative">
                                        <div className=" mb-2 text-left grid-text">
                                            Noted
                                        </div>
                                        <div >
                                            <Input style={{ backgroundColor: "#F7F7F7" }} type="text" className="p-1 text-center " placeholder="No note entered." />
                                        </div>
                                        <div className="position-absolute deleteRow">
                                            <MinusCirlce size="20" color="#264B5D" variant="Bold" />
                                        </div>
                                    </Card.Grid>

                                </Card>
                                <Card className="">
                                    <Card.Grid hoverable={false} style={{ borderBottomLeftRadius: "8px", width: '15%' }} className=" p-3 ">
                                        < div >
                                            <div className="text-left grid-text pb-2 ">
                                                Item
                                            </div>
                                            <div >
                                                <Select
                                                    showSearch
                                                    size={"medium"}
                                                    style={{ width: '100%' }}
                                                    placeholder="Digital Print"

                                                > </Select>
                                            </div>
                                        </div>



                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '15%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            File
                                        </div>
                                        <div>
                                            <Input style={{ backgroundColor: "#F7F7F7" }} type="text" className="p-1 text-center" placeholder="Random Filename.PDF" />
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '16%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Size
                                        </div>
                                        <div >
                                            <Select

                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%', }}
                                                placeholder="8.5 x 11"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '13%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Pages
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%' }}
                                                placeholder="20 Pages"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '15%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Copies
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%' }}
                                                placeholder="1 Copy"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '15%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Cost
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%' }}
                                                placeholder="0.20 USD"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '11%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Completed
                                        </div>
                                        <div>
                                            <Card className=" p-1 ml-3" style={{ width: '32px' }}>
                                                <div className="text-center" >
                                                    <Checkbox className=""></Checkbox></div>
                                            </Card>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ borderBottomRightRadius: '8px', width: '100%' }} className="gridCard p-3 position-relative">
                                        <div className=" mb-2 text-left grid-text">
                                            Noted
                                        </div>
                                        <div >
                                            <Input style={{ backgroundColor: "#F7F7F7" }} type="text" className="p-1 text-center " placeholder="No note entered." />
                                        </div>
                                        <div className="position-absolute deleteRow">
                                            <MinusCirlce size="20" color="#264B5D" variant="Bold" />
                                        </div>
                                    </Card.Grid>

                                </Card>
                                <div className="mt-3" style={{ textAlign: 'center' }}>
                                    <Button classname="" style={{ height: "43px", width: "82px", backgroundColor: '#264B5D', color: "#ffffff", alignItems: "center" }} key="submit"><Add size="16" color="#FFFFFF" variant="Outline" /></Button>
                                </div>
                                <label for="images" class="drop-containers " style={{ padding: "140px" }} >

                                </label>
                                <Row className="mt-5">
                                    <Row>
                                    <Col   className="" style={{ textAlign: 'start' }}>
                                        <Button classname="" style={{ height: "43px", width: "142px", fontWeight: "500", color: "#000000" }} key="ghost">Edit Order</Button>
                                    </Col>
                                    <Col style={{ textAlign: 'start' }}>
                                        <Button classname="" style={{ height: "43px", width: "142px", backgroundColor: '#264B5D', fontWeight: "500", color: "#ffffff" }} key="ghost">Cancel Order</Button>
                                    </Col>
                                    </Row>
                                   
                                    <Col style={{ textAlign: 'end' }}>
                                        <Button classname="" style={{ height: "43px", width: "142px", backgroundColor: '#264B5D', color: "#ffffff" }} key="submit">Save Changes</Button>
                                    </Col>
                                </Row>

                            </CardBody>



                        </Card>
                    </Col>

                </Row>

            </Container>
        </>
    );
};

export default EditDetails;