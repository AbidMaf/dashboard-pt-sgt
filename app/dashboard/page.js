import { React, Suspense } from 'react';
import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
// import Button from 'antd/es/button/Button';
import DataTable from '@/components/DataTable';
import { FetchData } from '@/lib/fetchData';

export default async function DashboardPage({ searchParams }) {
    let country = searchParams.country || 'indonesia';
    console.log('searchParams', searchParams);
    let searchName = searchParams.name || '';
    let data = await FetchData({ country: country, name: searchName });

    return (
        <div style={{ marginTop: 24 }}>
            <SearchForm />
            <DataTable
                data={data?.length > 0 ? data : []}
                bordered 
                style={{ marginTop: 20, maxHeight: '60vh' }}
                rowKey="uid" 
                pagination={{ pageSize: 50 }}
                scroll={{
                    x: 'max-content',
                    y: 80 * 5,
                }}
                />
        </div>
    );
}