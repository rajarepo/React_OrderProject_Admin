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

const ViewDetails = (props) => {
    const [color, setColor] = useState(false);
    const [borderBoxOpen, setBorderBoxOpen] = useState(false);
    const history = useHistory();

    return (
        <>
            {/* Page content */}
            <Header />
            <Container fluid className="pl-4 ml-3">
                {
                    borderBoxOpen ?
                        <Card className="borderBoxAdmin  mb-5 ml-10" >
                            <div className="d-flex">
                                <div> <InfoCircle className="attentionInfoIcon  mr-5" style={{ color: '#264B5D' }} /></div>
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
                                                <Col style={{textAlign:'start'}} className=" order-details-dashed1  text-nowrap " >
                                                    Submitted By
                                                </Col>
                                                <Col style={{textAlign:'end'}} className="order-details-dashed2 text-nowrap  " >
                                                KennyMcCoig
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{textAlign:'start'}} className=" order-details-dashed1  text-nowrap " >
                                                  Date Submitted
                                                </Col>
                                                <Col style={{textAlign:'end'}} className="order-details-dashed2 text-nowrap  " >
                                                February 24th, 2023 at 09:00:00 PM
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                            </Row>
                               
                                <Row className="mt-3">
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{textAlign:'start'}} className=" order-details-dashed1  text-nowrap " >
                                                    Date Required
                                                </Col>
                                                <Col style={{textAlign:'end'}} className="order-details-dashed2 text-nowrap  " >
                                                    February 24th, 2023 at 09:00:00 PM
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{textAlign:'start'}} className=" order-details-dashed1  text-nowrap " >
                                                   Order For
                                                </Col>
                                                <Col style={{textAlign:'end'}} className="order-details-dashed2 text-nowrap  " >
                                                   Testing
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                
                                </Row>
                                <Row className="mt-3">
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{textAlign:'start'}} className=" order-details-dashed1  text-nowrap " >
                                                Project Number
                                                </Col>
                                                <Col style={{textAlign:'end'}} className="order-details-dashed2 text-nowrap  " >
                                                000010.0000.00
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>
                                    <Col xl="6">
                                        <div className="dashed-box p-2">
                                            <Row >
                                                <Col style={{textAlign:'start'}} className=" order-details-dashed1  text-nowrap " >
                                                Project Name
                                                </Col>
                                                <Col style={{textAlign:'end'}} className="order-details-dashed2 text-nowrap  " >
                                                General Overhead
                                                </Col>
                                            </Row>


                                        </div>
                                    </Col>

                                </Row>
                                <Card className="mt-4 ">
                                    <Card.Grid hoverable={false} style={{ borderRadius: '8px 0px 0px 0px', width: '15%' }} className="p-3 ">
                                        <div className="text-left grid-text pb-2">
                                            Item
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%', }}
                                                placeholder="Type..."
                                               >

                                             </Select>
                                        </div>


                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '16%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            File
                                        </div>
                                        <div>
                                        <Input type="text" style={{backgroundColor:"#F7F7F7"}} className="p-1 text-center" placeholder="Random Filename.PDF" />
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '13%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Size
                                        </div>
                                        <div >
                                            <Select

                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%', }}
                                                placeholder="Type..."

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '15%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Pages
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%' }}
                                                placeholder="11 X 17"

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
                                                placeholder="11 X 17"

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
                                                placeholder="11 X 17"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '11%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Completed
                                        </div>
                                        {/* <div> */}
                                            <Card className="p-1 ml-3" style={{width:'32px'}}>
                                                <div className="text-center" >
                                                    <Checkbox className="" onClick={() => { setBorderBoxOpen(!borderBoxOpen); }}></Checkbox></div>
                                            </Card>
                                        {/* </div> */}
                                    </Card.Grid>


                                    <Card.Grid hoverable={false} style={{ borderTopRightRadius: '0px', width: '100%' }} className="gridCard p-3">

                                        <div className="text-left pb-2 grid-text">
                                            Noted
                                        </div>
                                        <div>
                                            <Row>
                                                <Col xl="12">
                                                    <Input  style={{backgroundColor:"#F7F7F7", width:'100%'}} type="text" className="p-1 text-center" placeholder="No note entered."/>
                                                </Col>
                                                <div className="position-absolute deleteRow-view">
                                            <MinusCirlce size="20" color="#264B5D" variant="Bold" />
                                        </div>
                                            </Row>

                                        </div>
                                    </Card.Grid>
                                    

                                </Card>
                                <Card className="">
                                    <Card.Grid hoverable={false} style={{ borderRadius: '8px 0px 0px 0px', width: '15%' }} className="p-3 ">
                                        <div className="text-left grid-text pb-2">
                                            Item
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%', }}
                                                placeholder="Type..."
                                               >

                                             </Select>
                                        </div>


                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '16%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            File
                                        </div>
                                        <div>
                                        <Input type="text" style={{backgroundColor:"#F7F7F7"}} className="p-1 text-center" placeholder="Random Filename.PDF" />
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '13%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Size
                                        </div>
                                        <div >
                                            <Select

                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%', }}
                                                placeholder="Type..."

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '15%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Pages
                                        </div>
                                        <div>
                                            <Select
                                                showSearch
                                                size={"medium"}
                                                style={{ width: '100%' }}
                                                placeholder="11 X 17"

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
                                                placeholder="11 X 17"

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
                                                placeholder="11 X 17"

                                            > </Select>
                                        </div>
                                    </Card.Grid>
                                    <Card.Grid hoverable={false} style={{ width: '11%' }} className="gridCard p-3">
                                        <div className="text-left pb-2 grid-text">
                                            Completed
                                        </div>
                                        {/* <div> */}
                                            <Card className="p-1 ml-3" style={{width:'32px'}}>
                                                <div className="text-center" >
                                                    <Checkbox className="" onClick={() => { setBorderBoxOpen(!borderBoxOpen); }}></Checkbox></div>
                                            </Card>
                                        {/* </div> */}
                                    </Card.Grid>


                                    <Card.Grid hoverable={false} style={{ borderTopRightRadius: '0px', width: '100%' }} className="gridCard p-3">

                                        <div className="text-left pb-2 grid-text">
                                            Noted
                                        </div>
                                        <div>
                                            <Row>
                                                <Col xl="12">
                                                    <Input  style={{backgroundColor:"#F7F7F7", width:'100%'}} type="text" className="p-1 text-center" placeholder="No note entered."/>
                                                </Col>
                                                <div className="position-absolute deleteRow-view">
                                            <MinusCirlce size="20" color="#264B5D" variant="Bold" />
                                        </div>
                                            </Row>

                                        </div>
                                    </Card.Grid>
                                    

                                </Card>
                                <div className="mt-3" style={{ textAlign: 'center' }}>
                                    <Button classname="" style={{ height: "43px", width: "82px", backgroundColor: '#264B5D', color: "#ffffff", alignItems: "center" }} key="submit"><Add size="16" color="#FFFFFF" variant="Outline" /></Button>
                                </div>
                                <label for="images" class="drop-containers " style={{ padding: "140px" }} >

                                </label>
                                <Row className="mt-5">
                                    <Col className="" style={{ textAlign: 'start' }}>
                                        <Button classname="" style={{ height: "43px", width: "142px", fontWeight: "500" }} key="submit" onClick={() => history.push(`/admin/editDetails`)}>Edit Order</Button>
                                    </Col>
                                    <Col style={{ textAlign: 'end' }}>
                                        <Button classname="" style={{ height: "43px", width: "142px", backgroundColor: '#264B5D', color: "#B6B3B2" }} key="submit">Save Changes</Button>
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

export default ViewDetails;