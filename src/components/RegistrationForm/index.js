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

    return (
        <section className='regitrationForm'>
            <form>
                <h2>Preencha com os dados da nova atração</h2>
                <TextField  label="Nome" placeholder="Digite o nome do(a) Artista/Banda"/>
                <TextField  label="Imagem" placeholder="Coloque uma foto da atração" />
                <DatePicker label="Selecione a Data"/>
                <TimePicker label="Selecione o horário:"/>
                <DropdownList label="Selecione o gênero dessa atração" itens={atracao} />
                <Button>
                    Adicionar Atração
                </Button>
            </form>
        </section>
    )
}

export default RegistrationForm