import './App.css';
import Body from './components/body';
import DeleteCard from './components/delete_card';
import BookList from './components/delete_card';
import Header from './components/header';

function App() {

  return (
    <div className="App">
      <Header userName="Lam Nguyen"/>
      <Body/>
      <DeleteCard NameBook='none'/>
    </div>
  );
}

export default App;
