import { VolumeUp } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import "../style/style.css";
function ControlloVolume() {
  return (
    <>
      <div className=" d-none d-sm-none d-md-none d-lg-flex align-items-center">
        <VolumeUp />
        <Form.Range className=" mx-3" />
      </div>
    </>
  );
}

export default ControlloVolume;
