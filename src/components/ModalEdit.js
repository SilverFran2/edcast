import React, { useRef, useEffect } from 'react';
import { Form, Input, Modal } from 'antd';


export const useResetFormOnCloseModal = ({ form, visible }) => {
    const prevVisibleRef = useRef();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [visible]);
};


const ModalForm = ({ visible, showModal, person }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(person)
    }, [person, visible])

    useResetFormOnCloseModal({
        form,
        visible,
    });

    const onOk = () => {
        form.submit();
    };

    const onCancel = () => {
        showModal(false);
    };

    return (
        <Modal title="Basic Modal" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Form form={form} layout="horizontal" name="userForm">
                <Form.Item
                    name="id"
                    label="id"
                    hidden={true}
                >
                    <></>
                </Form.Item>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="website"
                    label="Website"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalForm;