import React from "react";
import { Table, Typography, Empty, Flex } from "antd";
import * as moment from 'moment-timezone';
import DashboardStyle from './dashboard.styles';
import { 
    ClockCircleOutlined, 
    CheckCircleOutlined, 
    CloseCircleOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import colors from 'components/utilities/colors'
import DashboardCard from './dashboardCard';
import Mqtt from 'helpers/mqtt.js';

const { Paragraph } = Typography;

let locale = {
    emptyText: (
        <span >
            <Empty
                style={{ flexDirection: 'column', alignItems: 'center' }}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                    <span>
                        No transaction to list
                    </span>
                }
            />
        </span>
    )
};

const getStatusIcon = (status) => {
    switch (status) {
        case 'PENDING':
            return <ClockCircleOutlined />;
        case 'SUCCESS':
            return <CheckCircleOutlined />;
        case 'FAILED':
            return <CloseCircleOutlined />;
        default:
            return null;
    }
};

const getStatusColor = (status) => {
    switch (status) {
        case 'PENDING':
            return colors.pending_color;
        case 'SUCCESS':
            return colors.approved_color;
        case 'FAILED':
            return colors.rejected_color;
        default:
            return colors.company_color;
    }
};


export default function Dashboard(props) {
    
    const screenWidth = useSelector(state => state.App.view);
    const { isFetchingTrx, fetchedTrxData, checkingPermit } = useSelector((state) => state.Dashboard);


    const statusStyles = {};
    if (fetchedTrxData) {
        fetchedTrxData.forEach(({ status }) => {
            if (!statusStyles[status]) {
                statusStyles[status] = {
                    icon: getStatusIcon(status),
                    color: getStatusColor(status)
                };
            }
        });
    }

    const renderStatus = (status) => {
        const { icon, color } = statusStyles[status] || {};
        return (
            <span style={{ color: color, fontWeight: '750' }}>
                {icon} {status.toUpperCase()}
            </span>
        );
    };


    const columns = [
        {
            title: 'Transaction ID',
            dataIndex: 'requestId',
            key: 'requestId',
            width: '300px'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: renderStatus,
            filters: Object.keys(statusStyles).map(status => ({ text: status, value: status })),
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.status === value,
            width: '250px',
        },
        {
            title: 'Balance Before',
            dataIndex: 'balanceBefore',
            key: 'balanceBefore',
            width: 'auto',
            align: 'center'
        },
        {
            title: 'Balance After',
            dataIndex: 'balanceAfter',
            key: 'balanceAfter',
            width: 'auto',
            align: 'center'
        },
        {
            title: 'Date Filed',
            dataIndex: 'dateFiled',
            render: (text) => moment.parseZone(text).tz('Asia/Manila').format('MMMM D, YYYY hh:mm A'),
            defaultSortOrder: 'descend',
            sorter: (a, b) => moment.parseZone(a.dateFiled).unix() - moment.parseZone(b.dateFiled).unix(),
            width: '300px',
            align: 'center'
        },
    ];

    let data = [];

    if (fetchedTrxData && fetchedTrxData.length > 0) {
        let row = [];
        for (let i = 0; i < fetchedTrxData.length; i++) {
            const transactionsObj = fetchedTrxData[i];

            const dateFiled = transactionsObj.created_at;
            const requestId = <Paragraph copyable>{transactionsObj.request_id}</Paragraph>;
            const status = transactionsObj.status;
            const balanceBefore = `PHP ${transactionsObj.balance_before}`;
            const balanceAfter = `PHP ${transactionsObj.balance_after}`;

            row = {
                key: i,
                dateFiled,
                requestId,
                status,
                balanceBefore,
                balanceAfter,
            }

            if (row) {
                data.push(row);
            }
        }
    }

    console.log('CHECK fetchedTrxData', fetchedTrxData)
    
    return (
        <>
            <Mqtt/>
            <DashboardStyle collapsed={props.collapsed ? props.collapsed : undefined}>
                <div className="dashboard-container">
                    <Flex gap="middle" vertical>
                        { screenWidth === 'DesktopView' ? 
                            <Table 
                                columns={columns} 
                                dataSource={data ? data : null}
                                locale={locale}
                                showSorterTooltip={{target: 'sorter-icon'}}
                                loading={isFetchingTrx || checkingPermit}
                            /> : <DashboardCard fetchedTrxData = {fetchedTrxData} />
                        }
                    </Flex>
                </div>
            </DashboardStyle>
        </>
    );
}
