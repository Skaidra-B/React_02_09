import './App.css';
import PageView from "./components/PageView";
import Modal from "./components/Modal";
import {useSelector} from "react-redux";

function App() {

    const modal = useSelector(state => state.page.value.modal.display)

  return (
    <div className="d-flex">
      <PageView />
        {modal ? <Modal /> : null}
    </div>
  );
}

export default App;
