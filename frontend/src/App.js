import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import axios from "axios";

function App() {
	axios.defaults.baseURL = "http://localhost:5000/todos";

	return (
		<div className="App">
			<Header />
			<Form />
			<Tasks />
		</div>
	);
}

export default App;
