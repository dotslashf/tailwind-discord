import Layout from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="relative flex flex-row w-screen bg-white">
      <Sidebar />
      <Layout />
    </div>
  );
}

export default App;
