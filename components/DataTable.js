'use client';

import { React } from "react"
import { Table } from "antd"
import Link from "next/link"

export default function DataTable ({ data, ...props }) {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Domain',
            dataIndex: 'domains',
            key: 'domains',
            render: (domains, record) => (
                <>
                    {domains && domains.map((domain, index) => (
                        <Link target="_blank" key={index} href={record.web_pages[index] || ''}>
                            {domain}
                        </Link>
                    ))}
                </>
            )
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country'
        }
    ]
    return (
        <>
            <Table
            columns={columns} 
            dataSource={data} 
            {...props}
            />
        </>
    )
}