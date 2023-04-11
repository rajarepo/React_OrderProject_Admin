import { useState } from "react";
import { Input } from 'antd';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import { Link, useHistory } from "react-router-dom";

const HTMLPages = (props) => {
  const history = useHistory();
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [borderBoxOpen, setBorderBoxOpen] = useState(false);

  return (
    <>
      <Header />
      {/* Page content */}

      <Container fluid className="pl-4 ml-3">
        {
          borderBoxOpen ?
            <Card className=" borderBox mb-5 ml-10" >
              <div className="d-flex">
              </div>
            </Card> : ''
        }
        <Row>
          <Col >
            <Card className="bg-white " >
              <CardBody>
                <div></div>
                <label for="images" class="drop-containers p-4">
                  <div onClick={() => history.push(`/admin/email`)}>Sample Email</div>
                  <div onClick={() => history.push(`/admin/s&s`)}>S&S</div>
                  <div onClick={() => history.push(`/admin/orderpdf`)}>OrderPDF</div>
                </label>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default HTMLPages;

