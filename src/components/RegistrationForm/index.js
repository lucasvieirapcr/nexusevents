import './RegistrationForm.css';
import React from 'react';
import TextField from '../TextField';
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';


const RegistrationForm = () => {
    return (
        <section className='regitrationForm'>
            <form>
                <h2>Preencha com os dados da nova atração</h2>
                <TextField  label="Nome" placeholder="Digite o nome do(a) Artista/Banda"/>
                <TextField  label="Imagem" placeholder="Coloque uma foto da atração" />
                <DatePicker label="Selecione a Data"/>
                <TimePicker label="Selecione o horário:"/>
            </form>
        </section>
    )
}

export default RegistrationForm