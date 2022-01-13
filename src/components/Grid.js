import React from "react";
import { Row, Col } from 'antd';
import Element from './Element';

function Grid({ list, handleLiked, handleEdit, handleDelete }) {
    return (
        <Row>
            {list.map((e) => {
                return (
                    <Col key={e.username} xs={24} sm={12} md={8} lg={8} xl={6}>
                        <Element person={e} handleLiked={handleLiked} handleEdit={handleEdit} handleDelete={handleDelete} />
                    </Col>
                )
            })}
        </Row>
    );
}

export default Grid;