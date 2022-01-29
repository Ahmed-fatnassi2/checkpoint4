import logo from "./logo.svg";
import "./App.css";
import Profil from "./Component/Profile/ProfilePhoto.js";
import Adress from "./Component/Profile/Address.js";
import Name from "./Component/Profile/FullName.js";
import "./Component/Profile/Style.css";
function App() {
    return (
        <div className="App">
            <Name />
            <Adress />
            <Profil />
        </div>
    );
}

export default App;
