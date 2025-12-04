import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setQueryAction, getJobs } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQueryAction(query));
    dispatch(getJobs());
  };

  const jobs = useSelector((currentState) => {
    console.log(currentState);
    return currentState.data.jobs.data;
  });

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs ? (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
