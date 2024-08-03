import React from "react";
import ReactDOM from "react-dom/client"
import ToDo from "./components/ToDos";

const App = () => {
    return(
        <div className="app">
            <div className="heading">
                <h1>MY TODO LIST</h1>
            </div>
            <ToDo />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);