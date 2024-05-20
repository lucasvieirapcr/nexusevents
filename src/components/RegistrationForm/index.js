import './RegistrationForm.css';
import React from 'react';
import TextField from '../TextField';
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import DropdownList from '../DropdownList';
import Button from '../Button';


const RegistrationForm = () => {

    const atracao = [
        'Sertanejo',
        'Trap',
        'Pagode',
        'Eletrônica',
        'Rap',
        'Funk'
    ]

    const aoSalvar = (events) => {
        events.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className='regitrationForm'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha com os dados da nova atração</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite o nome do(a) Artista/Banda"/>
                <TextField  obrigatorio={true} label="Imagem" placeholder="Coloque uma foto da atração" />
                <DatePicker obrigatorio={true} label="Selecione a Data"/>
                <TimePicker obrigatorio={true} label="Selecione o horário:"/>
                <DropdownList obrigatorio={true} label="Selecione o gênero dessa atração" itens={atracao} />
                <Button>
                    Adicionar Atração
                </Button>
            </form>
        </section>
    )
}

export default RegistrationForm