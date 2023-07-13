import './App.css';
import Navbar from './component/Navbar';
import Textfrom from './component/Textfrom';

function App() {
  return (
    <>
      <Navbar tittle="Text-Format" />
      <div className="container my-3">
        <Textfrom heading="Write Anything Here " />
      </div>
    </>
  );
}
export default App;
