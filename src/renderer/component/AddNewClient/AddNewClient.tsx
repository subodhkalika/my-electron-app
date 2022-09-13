import { Button, Form, Input, Divider, Col, Row, Select } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { query } from 'renderer/db/models/clients';
import send from 'renderer/db/renderer';


import './AddNewClient.css';
const { Option } = Select;
const { TextArea } = Input;

export default function AddNewClient() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState<any>(null);
    

    const getLayout = (labelColSpan: number, wrapperColSpan: number) => {
        return {
            labelCol: {
                span: labelColSpan,
            },
            wrapperCol: {
                span: wrapperColSpan,
            },
        }
    };

    const onFinish = async (values: any) => {
        let sql = '';
        if (edit) {
            sql = query.updateClient(id, values);
        } else {
            sql = query.createClient(values);
        }
        
        send(sql).then((result) => {
            console.log(result)
            if(result) {
                onReset();
                navigate("/");
            }
        });
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = (clientData: any) => {
        form.setFieldsValue({
            firstname: clientData.firstname,
            lastname: clientData.lastname,
            gender: clientData.gender,
            address: clientData.address,
            contact: clientData.contact,
            employment_status: clientData.employment_status,
            household_composition: clientData.household_composition,
            current_circumstances: clientData.current_circumstances,
            assistance_required: clientData.assistance_required,
            living_arrangement: clientData.living_arrangement,
            indigenous_or_toress_stright_islander: clientData.indigenous_or_toress_stright_islander,
            has_survivors_helped: clientData.has_survivors_helped,
            os_organisation: clientData.os_organisation,
            os_support_worker: clientData.os_support_worker,
            os_email: clientData.os_email,
            supportworker: clientData.supportworker,
            about_us: clientData.about_us,
            note: clientData.note,
        });
    };

    useEffect(() => {
        const id = searchParams.get("id");
        if (id) {
            setId(id);
            setEdit(true);
            send(query.getClient(id)).then((result: any) => {
                onFill(result[0]);
            });
        }
    }, []);

    return (
        <div className="add-client-page">
            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                layout="horizontal"
                {...{
                    labelCol: {
                    span: 10,
                    },
                    wrapperCol: {
                    span: 12,
                    },
                }}
            >
                <div>
                    <h2>Personal details</h2>
                </div>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item className="form-field" name="firstname" label="First name" rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="lastname" label="Last name" rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="gender" label="Gender" rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="address" label="Address" rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="contact" label="Contact" rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="employment_status" label="Employment status" rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item className="form-field" name="household_composition" label="Household composition" rules={[{message: 'Required field!', required: true,}]}>
                            <Select placeholder="Select an option" allowClear>
                                <Option value="single">Single</Option>
                                <Option value="single_dependants">Single dependants</Option>
                                <Option value="couple">Couple</Option>
                                <Option value="couple_dependants">Couple dependants</Option>
                                <Option value="shared">Shared</Option>
                                <Option value="homeless">Homeless</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="current_circumstances" label="Current circumstances" rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="assistance_required" label="Assistance required" rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="living_arrangement" label="Living arrangement" rules={[{message: 'Required field!', required: true}]}>
                            <Select placeholder="Select an option" allowClear>
                                <Option value="government">Government</Option>
                                <Option value="share">Share</Option>
                                <Option value="rental">Rental</Option>
                                <Option value="others">Others</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="indigenous_or_toress_stright_islander" label="Indigenous/Toress stright islander" {...getLayout(15, 7)} rules={[{message: 'Required field!', required: true}]} >
                            <Select placeholder="Select an Option" allowClear>
                                <Option value="yes">Yes</Option>
                                <Option value="no">No</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="has_survivors_helped" label="Has survivors helped previously?" {...getLayout(15, 7)} rules={[{message: 'Required field!', required: true,}]}>
                            <Select placeholder="Select an option" allowClear>
                                <Option value="yes">Yes</Option>
                                <Option value="no">No</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Divider />
                <div>
                    <h2>Organistional Support (If any)</h2>
                </div>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item className="form-field" name="os_organisation" label="Organisation">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="os_support_worker" label="Support worker">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="os_email" label="Email">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Divider />
                <div>
                    <h2>Support worker details</h2>
                </div>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item className="form-field" name="supportworker" label="Support worker" rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="about_us" label="How did you hear about us?" {...getLayout(12, 10)} rules={[{message: 'Required field!', required: true,}]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item className="form-field" name="note" label="Note">
                            <TextArea />
                        </Form.Item>
                    </Col>
                </Row>
                <Divider />
                <Form.Item
                    wrapperCol={{
                        span: 12,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        {edit ? 'Save client' : 'Add client' }
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};