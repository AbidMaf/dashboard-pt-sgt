import { Row, Col } from "antd";

export default function DashboardPage({children}) {
    return (
        <Row justify="center" style={{ minHeight: "100vh" }}>
            <Col span={21}>{children}</Col>
        </Row>
    );
}