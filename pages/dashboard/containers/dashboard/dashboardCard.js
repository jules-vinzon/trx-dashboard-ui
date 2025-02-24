import React from 'react';
import { Typography, Card, Tag } from 'antd';
import colors from 'components/utilities/colors'
import * as moment from 'moment-timezone';



const { Paragraph } = Typography;

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


export default function DasboardCar(props) {

    console.log('[DASHBOARD_CARD]: CHECK FETEHED PERMITS', props.fetchedTrxData);

    const cardHeader = (data) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span><Tag color={getStatusColor(data?.status)} style={{ fontWeight: '600', fontSize: 16 }}> {data?.status} </Tag></span>
            </div>
        );
    };

    return (
        <div className='dashboard-root-card'>
            { props.fetchedTrxData?.map((permitsData) => {
                return <Card
                    key={permitsData._id}
                    className='dashboard-card'
                    title={cardHeader(permitsData)}
                >
                    <div className="message-container">
                        <div style={{ display: 'flex' }}>
                            <span style={{ fontWeight: 'bold' }}>Transaction ID: </span>
                            <Paragraph style={{ margin: 0, marginLeft: 8, fontSize: 11 }} copyable>{permitsData?.request_id}</Paragraph>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ fontWeight: 'bold' }}>Balance Before: </span>
                            <Paragraph style={{ margin: 0, marginLeft: 8, fontSize: 11 }} copyable>{permitsData?.balance_before}</Paragraph>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ fontWeight: 'bold' }}>Balance After: </span>
                            <Paragraph style={{ margin: 0, marginLeft: 8, fontSize: 11 }} copyable>{permitsData?.balance_after}</Paragraph>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ fontWeight: 'bold', marginRight: 8 }}>Date Filed: </span>
                            {moment.parseZone(permitsData?.created_at).tz('Asia/Manila').format('MMMM D, YYYY hh:mm A')}
                        </div>

                    </div>


                </Card>
            })}

        </div>
    )
}



