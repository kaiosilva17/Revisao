
import apiDeputados from '../../services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Detalhes = ({ deputados, despesas, profissoes }) => {
    return (
        <>
            <Container className='mt-3'>

                <Row>


                    <Col md={3}>

                        <Card>
                            <Card.Img variant="top" src={deputados.ultimoStatus.urlFoto} />
                            <Card.Body>
                                <Card.Title>{deputados.nomeCivil}</Card.Title>
                                <p>Partido: {deputados.ultimoStatus.siglaPartido}</p>
                                <p>UF Partido: {deputados.ultimoStatus.siglaUf}</p>
                            </Card.Body>
                        </Card>

                        <Link className='btn btn-danger mt-5' href='/deputados/'>Voltar </Link>

                    </Col>


                    <Col md={6}>

                        <h1><strong>Despesas</strong></h1>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {despesas.map(item => (
                                    <tr>
                                        <td>{item.dataDocumento}</td>
                                        <td>{item.tipoDespesa}</td>
                                        <td>{item.valorDocumento}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </Col>


                    <Col md={3}>
                        <h1><strong>Profissões 2</strong></h1>

                        <ul>
                            {profissoes.map(item => (
                                <li>{item.titulo}</li>
                            ))}
                        </ul>

                    </Col>

                </Row>

            </Container>

        </>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiDeputados.get('/deputados/' + id)
    const deputados = resultado.data.dados

    const resDespesas = await apiDeputados.get('/deputados/' + id + '/despesas')
    const despesas = resDespesas.data.dados

    const resProfissoes = await apiDeputados.get('/deputados/' + id + '/profissoes')
    const profissoes = resProfissoes.data.dados

    return {
        props: { deputados, despesas, profissoes },
    }
}