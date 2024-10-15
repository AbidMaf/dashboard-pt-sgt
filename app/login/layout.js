import { Col, Row } from "antd";

export default function LoginLayout({ children }) {
    return (
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
            <Col span={6}>{children}</Col>
        </Row>
    );
}