import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Fav = function () {
  const fav = useSelector((currState) => {
    return currState.fav.content;
  });
  const dispatch = useDispatch();
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <h3>Le tue aziende preferite:</h3>
        {fav.map((comp, i) => {
          return (
            <Col xs={12} key={i}>
              <Card>
                <Card.Body>
                  N.{i + 1} -{" "}
                  <Link className="nav-link d-inline" to={`/${comp}`}>
                    {comp}
                  </Link>
                </Card.Body>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "DELETE_FROM_FAV",
                      payload: comp,
                    });
                  }}
                >
                  <FaTrash className="me-3" />
                  Rimuovi dai preferiti
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Fav;
