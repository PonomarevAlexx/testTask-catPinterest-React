import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const [activeAllCats, setActiveAllCats] = useState(true);

    const handleActiveClass = () => {
        if (activeAllCats) {
            setActiveAllCats(false);
        } else {
            setActiveAllCats(true);
        }
    };

    return (
        <>
            <Header activeAllCats={activeAllCats} handleActiveClass={handleActiveClass} />
            <Main activeAllCats={activeAllCats} />
        </>
    );
}

export default App;
