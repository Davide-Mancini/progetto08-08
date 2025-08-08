import {
  ArrowClockwise,
  ArrowLeft,
  ArrowRight,
  CaretRightFill,
  Shuffle,
} from "react-bootstrap-icons";

const MyPLayer = () => {
  return (
    <>
      <div className=" d-none d-sm-none d-md-none d-lg-flex mx-3 ">
        <Shuffle className=" w-100" />
        <ArrowLeft className=" w-100" />
        <CaretRightFill className=" w-100" />
        <ArrowRight className=" w-100" />
        <ArrowClockwise className=" w-100" />
      </div>
    </>
  );
};
export default MyPLayer;
