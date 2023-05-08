import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

const Pagina = (props) => {
    return (
        <>
            <Cabecalho />

            <div className='bg-dark text-primary py-4 text-center mb-5'>
                <h1>{props.titulo}</h1>
            </div>
            <Container className='mb-5'>
                {props.children}
            </Container>
        </>
    )
}

export default Pagina