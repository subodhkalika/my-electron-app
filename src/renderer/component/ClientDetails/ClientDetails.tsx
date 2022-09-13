import { Row, Col, Divider } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { query } from 'renderer/db/models/clients';
import send from 'renderer/db/renderer';


import './ClientDetails.css';

export default function ClientDetails() {
    let { id } = useParams();
    const [client, setClient] = useState<any>(null);

    useEffect(() => {
      send(query.getClient(id)).then((result: any) => {
          setClient(result[0]);
      });
    }, []);

    return (
        <div className='page-client-details'>
            <h2>Client details</h2>
            <Divider></Divider>
            {
                client && 
                <div>
                    <Row gutter={16} className="mb-20">
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">First name</div>
                                <div className="field-data">{client.firstname}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Last name</div>
                                <div className="field-data">{client.lastname}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Gender</div>
                                <div className="field-data">{client.gender}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Address</div>
                                <div className="field-data">{client.address}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="mb-20">
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Contact</div>
                                <div className="field-data">{client.contact}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Employment status</div>
                                <div className="field-data">{client.employment_status}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Household composition</div>
                                <div className="field-data">{client.household_composition}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Current circumstances</div>
                                <div className="field-data">{client.current_circumstances}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="mb-20">
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Assistance required</div>
                                <div className="field-data">{client.assistance_required}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Living arrangement</div>
                                <div className="field-data">{client.living_arrangement}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Indigenous/Toress stright islander</div>
                                <div className="field-data">{client.indigenous_or_toress_stright_islander}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Has survivors helped previously?</div>
                                <div className="field-data">{client.has_survivors_helped}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="mb-20">
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Organisation</div>
                                <div className="field-data">{client.os_organisation}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Support worker</div>
                                <div className="field-data">{client.os_support_worker}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Email</div>
                                <div className="field-data">{client.os_email}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Support worker</div>
                                <div className="field-data">{client.supportworker}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16} className="mb-20">
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">How did you hear about us?</div>
                                <div className="field-data">{client.about_us}</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="field">
                                <div className="field-label">Note</div>
                                <div className="field-data">{client.note}</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            }
        </div>
    )
}