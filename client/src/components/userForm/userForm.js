import { Form, Col, Row } from "react-bootstrap";

function UserForm(props) {
    return (
        <Form.Group className="mb-3 text-start" col={props.col} >
            <Row>
                <Col md={props.md}>
                    <Form.Label>{props.label}</Form.Label>
                </Col>
                <Col>
                    <Form.Control required type={props.type} placeholder={props.placeholder} autoComplete={props.autocomplete} onChange={props.onChange} validations={props.validations} />
                    <Form.Control.Feedback type="invalid">
                        Please choose {props.label}.
                    </Form.Control.Feedback>
                </Col>
                {props.col === "3" ? <Col>
                    <Form.Control required type={props.type} placeholder={props.confirmPlaceholder} autoComplete={props.autocomplete} onChange={props.onChange} validations={props.validations} />
                    <Form.Control.Feedback type="invalid">
                        Please choose {props.label}.
                    </Form.Control.Feedback>
                </Col> : ""}
            </Row>

        </Form.Group>

    )
}

export default UserForm;