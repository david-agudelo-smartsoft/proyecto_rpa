import React, { useState } from 'react';
import "./TaskTable.css"
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import QueryTypeModal from '../modal/QueryTypeModal';
import { useContentTask } from "../../context/mainContextTask";
import { useContent } from "../../context/mainContext";



function TaskTable() {

    const { contentsTask } = useContentTask()
    const { getClientById } = useContent()

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className='MainContainer-tareas'>
            <div className="pos-title">
                <div className="title-tareas">Tareas</div>
                <div className="pos-boton1">
                    <FontAwesomeIcon className="icon-refresh" icon={faArrowsRotate} />
                </div>
            </div>
            <Table striped bordered hover className='vertical-align text-center'>
                <thead>
                    <tr>
                        <th>ID tareas</th>
                        <th>Estado</th>
                        <th>Parametros</th>
                        <th>Cliente</th>
                        <th>Bot</th>
                        <th>Agente</th>
                        <th>N° Intentos</th>
                        <th>Tiempo</th>
                        <th>Reiniciar Tarea</th>
                    </tr>
                </thead>
                <tbody>
                    {contentsTask.map(contentsTask => {
                        const dateIni = new Date(contentsTask.dateIni);
                        const dateFin = new Date(contentsTask.dateFin);
                        const diffDate = dateFin.getTime() - dateIni.getTime();
                        const ClientName = getClientById(contentsTask.client);
                        console.log(ClientName)
                        return (
                            <tr key={contentsTask._id}>
                                <td>{contentsTask.seqTask}</td>
                                <td>{contentsTask.status}</td>
                                <td className="text-center">
                                    <Button variant="primary" size='sm' onClick={handleShowModal}>
                                        Tipo de consulta
                                    </Button>
                                </td>
                                <td>{contentsTask.client}</td>
                                <td>{contentsTask.bot}</td>
                                <td>{contentsTask.agent}</td>
                                <td className="text-center">{contentsTask.attempts}</td>
                                <td name="tiempo" className="text-center">{Math.floor(diffDate / 6000)} min</td>
                                <td className="text-center">
                                    <button>
                                        <FontAwesomeIcon onClick={handleShowModal} className="rotate-icon" icon={faRotateRight} />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <QueryTypeModal show={showModal} handleClose={handleCloseModal} />
        </div>
    );
}

export default TaskTable;