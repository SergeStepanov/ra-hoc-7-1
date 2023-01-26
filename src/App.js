import './App.css';
import { useState } from 'react';
import VideoList from './components/VideoList';
import { data } from './Data';

function App() {
  const [list, setList] = useState(data);

  return <VideoList list={list} />;
}

export default App;
