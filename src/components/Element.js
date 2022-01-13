import React from "react";
import { Card } from 'antd';
import { EditOutlined, HeartOutlined, DeleteFilled, GlobalOutlined, MailOutlined, PhoneOutlined, HeartFilled } from '@ant-design/icons';

function Element({ person, handleLiked, handleEdit, handleDelete }) {
    return (
        <Card
            cover={
                <div className="cardHeadImage">
                    <img
                        alt="avatar"
                        src={`https://avatars.dicebear.com/v2/avataaars/${person.username}.svg?options[mood][]=happy`}
                        height={200}
                        width={200}
                    />
                </div>
            }
            actions={[
                <span onClick={() => handleLiked(person)}>
                    { 
                        person && person.liked ? 
                            <HeartFilled key="like" height={'1em'} width={'1em'} style={{ color: '#fc0d1b', fontSize: '20px' }} /> 
                        :
                            <HeartOutlined key="like" height={'1em'} width={'1em'} style={{ color: '#fc0d1b', fontSize: '20px' }} />
                    }
                </span>,
                <EditOutlined key="edit" height={'1em'} width={'1em'} style={{ fontSize: '20px' }} onClick={() => handleEdit(person)}/>,
                <DeleteFilled key="delete" height={'1em'} width={'1em'} style={{ fontSize: '20px' }} onClick={() => handleDelete(person)}/>,
            ]}
            style={{ margin: '15px' }}
        >
            <h3>{person.name}</h3>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <MailOutlined height={'1em'} width={'1em'} style={{ fontSize: '18px' }} />
                <p style={{ marginLeft: '10px', marginBottom: '5px' }}>{person.email}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <PhoneOutlined height={'1em'} width={'1em'} style={{ fontSize: '18px' }} />
                <p style={{ marginLeft: '10px', marginBottom: '5px' }}>{person.phone}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <GlobalOutlined height={'1em'} width={'1em'} style={{ fontSize: '18px' }} />
                <p style={{ marginLeft: '10px', marginBottom: '5px' }}>http://{person.website}</p>
            </div>
        </Card>
    );
}

export default Element;




