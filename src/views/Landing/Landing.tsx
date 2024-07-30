import React from "react";
import { Card } from "primereact/card";
import { CaOSButton } from "../../components/CaOSButton/CaOSButton";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { Col, Container, Image, Row } from "react-bootstrap";
import caosLogo from "../../assets/CaOS_transparent.png";
import { selectCurrentUser } from "../../redux/slices/userSlice";

export const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { email } = useAppSelector(selectCurrentUser);

  return (
    <Container fluid className="d-flex justify-content-center align-items-center  px-4">
      <Row className="w-100">
        <Col lg={6} md={8} sm={12} className="text-center mb-4">
          <Image src={caosLogo} alt="CaOS Logo" className="img-fluid mb-4" />
        </Col>
        <Col lg={6} md={8} sm={12} className="d-flex justify-content-center">
          <Card title="Welcome to CaOS" className="p-4 shadow border-round" style={{ width: "100%", maxWidth: "600px" }}>
            <Container className="mt-4">
              <Row className="mb-4">
                <Col>
                  <p className="lead mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, odio at euismod bibendum, eros odio luctus dolor, vitae vehicula nisi nisi id massa. Fusce in sapien
                    vel felis vehicula elementum. Nullam sit amet justo et quam tempus condimentum.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>
                    Aliquam erat volutpat. Vestibulum et lorem nec velit elementum volutpat. Ut consequat lorem eu libero posuere, a ultricies odio condimentum. Donec at libero a nulla vulputate
                    malesuada. Morbi sit amet eros vestibulum, lacinia mi nec, iaculis ante.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Nullam euismod, nunc quis ultricies tincidunt, odio ex mattis purus, nec vehicula nunc felis eu libero. Nulla facilisi. Donec nec nunc sit amet mi tincidunt aliquam. Nulla
                    facilisi. Donec nec nunc sit amet mi tincidunt aliquam.
                  </p>
                </Col>
              </Row>
            </Container>
            <Container className="mt-4 text-center">
              <CaOSButton label="Learn More" variant="primary" className="me-2" />
              {!email && <CaOSButton label="Sign In" className="p-button-primary" onClick={() => navigate("/auth")} />}
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
