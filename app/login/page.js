'use client';
import { Button, Typography, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function LoginPage({ children }) {
    const { Title } = Typography;
    const [form] = Form.useForm();
    const router = useRouter();

    const onFinish = (values) => {
        console.log({values})
        return router.push("/dashboard");
    }

    return (
        <>
            <Title level={4} style={{ textAlign: 'center', marginBottom: 20 }}>Are you just graduated? Sign in!😡</Title>
            <Form
                form={form}
                name="login"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    layout="vertical"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input 
                        prefix={<UserOutlined />} 
                        placeholder="Username" 
                    />
                </Form.Item>
                
                <Form.Item
                    name="password"
                    layout="vertical"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        block 
                        prefix=
                        {<LockOutlined />} 
                        placeholder="Password" 
                        style={{ width: "100%" }} 
                    />
                </Form.Item>

                <Form.Item>
                    <Button block={true} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );  
}