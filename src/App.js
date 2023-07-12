import './App.css';
import Navbar from './component/Navbar';
import Textfrom from './component/Textfrom';

function App() {
  return (
    <>
      <Navbar tittle="SavageTown" about="About Us" />
      <div className="container my-3">
        <Textfrom heading="Text Here " />
      </div>
    </>
  );
}
export default App;
