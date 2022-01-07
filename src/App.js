import logo from './logo.svg';
import './App.css';
import RepoHolder from './Views/RepoHolder';

function App() {
  return (
    <div className="App">
      <h1>Trending</h1>
      <p>See what Github community is most excited about today.</p>
      <div className="divider"></div>
      <RepoHolder></RepoHolder>
    </div>
  );
}

export default App;
