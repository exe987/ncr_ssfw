import BankDataState from './context/bank_data_context/bank_data_state';
import Routing from './routing/Routing';

function App() {
  return (
    <BankDataState>
      <Routing />
    </BankDataState>
  );
}

export default App;
