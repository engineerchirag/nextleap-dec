import logo from './logo.svg';
import './App.css';
import FeedList from './components/List';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ padding: '50px'}}>
      <Counter />
      {/* <FeedList heading="My Feeds" /> */}
    </div>
  );
}

export default App;
