import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const notify = () => toast("Wow! Toast is working!");

    return (
        <div>
            <button onClick={notify}>Show Toast</button>
            <ToastContainer />
        </div>
    );
}
export default App;
