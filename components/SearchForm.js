'use client';

import { Flex, Form, Input, Button } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function SearchForm() {
    const router = useRouter();
    const pathname = usePathname();
    const [form] = Form.useForm();
    const [isPending, startTransition] = useTransition();

    const searchData = async (values) => {
        startTransition(() => {
            router.replace(`${pathname}?country=${values.country}${values.name ? `&name=${values.name}` : ''}`);
        });
    }

    return (
        <Form form={form} onFinish={searchData} style={{ borderRadius: 8 }}>
            <Flex align='center' gap={4} style={{ paddingBlock: 8, paddingInline: 4 }}>
                <Form.Item name='country' style={{ margin: 0 }}>
                    <Input placeholder='Country' defaultValue={'indonesia'} rules={[{ required: true, message: 'Please add country!' }]} />
                </Form.Item>
                <Form.Item name='name' style={{ margin: 0 }}>
                    <Input placeholder='Name' rules={[{ message: 'Please add name!' }]} />
                </Form.Item>
                <Form.Item style={{ margin: 0 }}>
                    <Button type='primary' htmlType='submit'>Search</Button>
                </Form.Item>
            </Flex>
        </Form>
    )
}