import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Desc from "./comp/Desc";
import Name from "./comp/Name";
import Price from "./comp/Price";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "./comp/Image";
import Product from "./comp/Product";

const firstName = "it's me";

function App() {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }} className="cards">
        <Card.Img variant="top" src={Product.img_URL} />
        <Card.Body>
          <Card.Title>
            {" "}
            <Name />{" "}
          </Card.Title>
          <Card.Text>
            <Desc />
          </Card.Text>
          <Button variant="primary">
            {" "}
            <Price />{" "}
          </Button>
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <Image />}
    </div>
  );
}

export default App;
