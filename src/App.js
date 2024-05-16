import Banner from './components/Banner';
import TextField from './components/TextField';
import TimePicker from './components/TimePicker';
import DatePicker from './components/DatePicker';

function App() {
  return (
    <>
      <Banner />
      <TextField  label="Nome" placeholder="Digite o nome do(a) Artista/Banda"/>
      <DatePicker label="Selecione a Data"/>
      <TimePicker label="Selecione o horário:"/>
    </>
  );
}

export default App;
