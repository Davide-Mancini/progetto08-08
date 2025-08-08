import Button from "react-bootstrap/Button";
import "../style/style.css";
import { ArrowRight } from "react-bootstrap-icons";

const ButtonAltroDaEsplorare = ({ testo }) => {
  return (
    <div className="d-grid gap-2">
      <Button
        variant="secondary "
        size="lg"
        className="bottoni my-1 text-danger text-start bottom-0  border-0 p-3"
      >
        {testo}
        <ArrowRight />
      </Button>
    </div>
  );
};

export default ButtonAltroDaEsplorare;
