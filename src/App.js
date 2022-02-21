import './App.css';
import PageView from "./components/PageView";
import Modal from "./components/Modal";
import {useSelector} from "react-redux";


function App() {

    const state = useSelector(state => state.style.value)

  return (
    <div className="d-flex">
      <PageView />
        {state.showModal && <Modal />}
    </div>
  );
}

export default App;
