import { useState } from "react";
import Chart from "chart.js";
import { Spin, Checkbox, Input, DatePicker, TimePicker, Upload, Select, Modal } from 'antd';
// react plugin used to create charts
// import Select from "react-select";
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

import { Notepad2, Clock, CalendarCircle, Box1, InfoCircle } from "iconsax-react";
import Header from "components/Headers/Header.js";
import AllRequestsModal from "./examples/AllRequestsModal";
import SignAndSeal from "./examples/SignAndSeal";
import ReceivedSuccessfullyPopUp from "./examples/ReceivedSuccessfullyPopUp";
// import AllPopUpModel from "./examples/AllPopUp";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";
const Index = (props) => {
  const [open, setOpen] = useState(false);
  const [PopUpOpen, setPopUp] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [borderBoxOpen, setBorderBoxOpen] = useState(false);
  const [firstDropdownValue, setFirstDropdownValue] = useState('');
  const [orderDropdownValue, setOrderDropdownValue] = useState('');
  const [dateChange, setDateChange] = useState('');
  const [timeChange, setTimeChange] = useState('');
  const Option = Select.Option;

  const handleok = () => {
    setOpen(false);
  }
  const handleSignInok = () => {
    setOpen1(false);
  }
  const handleSignInCancel = () => {
    setOpen1(false);
  }
  const handleCancel = () => {
    setOpen(false);
  }

  const handlePopUpOk = () => {
    setPopUp(false);

  }
  const handlePopUpCancel = () => {
    setPopUp(false);

  }


  return (
    <>
      <Header />
      {/* Page content */}

    </>
  );
};

export default Index;
