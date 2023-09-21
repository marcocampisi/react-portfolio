import HeaderComponent from "./components/HeaderComponent";
import "./App.css";

function App() {
    return (
        <div>
            <HeaderComponent />
            <main>
                <div className="container w-full text-center font-mono">
                    <h1 className="text-5xl font-extrabold">Marco Campisi</h1>
                </div>
            </main>
        </div>
    );
}

export default App;
