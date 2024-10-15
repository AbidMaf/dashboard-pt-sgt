import { React } from "react"
import { Table } from "antd"

export default function DataTable ({ data, columns, ...props }) {
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