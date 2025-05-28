import { Provider } from 'react-redux';
import { store } from './app/store';
import TicketList from './components/ticketList/TicketList';
import Filters from './components/filters/Filters';
import SortingControls from './components/sorting/SortingControls';
import { Header } from './components/header/Header';
import css from './components/sorting/sorting.module.scss'
import { Button } from './components/button/Button'

function App() {
  
return (
    <Provider store={store}>
      <main>
        <Header/>
        <div className={css.main}>
        <div><Filters /></div>
        <div>
         <SortingControls />
         <TicketList />
         <Button />
        </div>
        </div>
      </main>
    </Provider>
);
}

export default App;
