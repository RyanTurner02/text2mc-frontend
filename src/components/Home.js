import AIModel from "./AIModel";
import Block2Vec from "./Block2Vec";
import FAQ from "./FAQ";
import Header from "./Header";
import Introduction from "./Introduction";
import Links from "./Links";
import NavigationBar from "./Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PickABuild from "./PickABuild";
import LatentSpace from "./LatentSpace";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Header />
        <NavigationBar />
        <Col sm={2} />
        <Col sm={8}>
          <Introduction />
          <Block2Vec />
          <LatentSpace />
          <AIModel />
          <PickABuild />
          <FAQ />
          <Links />
        </Col>
        <Col sm={2} />
      </Row>
    </Container>
  );
}

export default Home;
