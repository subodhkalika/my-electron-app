import { Space, Table, Button, Divider } from 'antd';
import { useEffect, useState } from 'react';
import './ClientList.css';
import { useNavigate } from "react-router-dom";
import send from 'renderer/db/renderer';
import { query } from 'renderer/db/models/clients';


const { Column } = Table;

export default function ClientList() {
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();
  
    const openDetails = (id: any) => {
        navigate("/client/" + id);
    }

    const editClient = (id: any) => {
        navigate("/add-client?id=" + id);
    }

    const removeClient = (id: any) => {
        send(query.deleteClient(id)).then((result: any) => {
            console.log(result);
            getClientsList();
        });
    }

    const getClientsList = () => {
        send(query.getAllClients()).then((result: any) => {
            setClients(result);
        });
    }

    useEffect(() => {
        getClientsList();
      }, []);

    return(
        <div className="page-client-list">
            <div className='page-title'>
                <h2>Client List</h2>
                <Divider></Divider>
            </div>
            {
                clients && clients.length > 0 &&
                <Table dataSource={clients}>
                    <Column title="S. No." dataIndex="id" key="id" align="center" render={(id: any, record: any) => <div className="link-color" onClick={() => openDetails(record.id)}>{id}</div >}/>
                    <Column title="Name" dataIndex="firstname" key="firstname"  render={(firstname: string, record: any) => <div className="link-color" onClick={() => openDetails(record.id)}>{firstname}</div >}/>
                    <Column title="Employment status" dataIndex="employment_status" key="employment_status" />
                    <Column title="Gender" dataIndex="gender" key="gender" />
                    <Column
                    align='right'
                        title=""
                        key="action"
                        render={(_, record: any) => (
                            <Space size="middle">
                                <Button onClick={(e)=>editClient(record.id)}>Edit</Button>
                                <Button onClick={(e)=>removeClient(record.id)}>Delete</Button>
                            </Space>
                        )}
                    />
                </Table>
            }
        </div>
    )
}
