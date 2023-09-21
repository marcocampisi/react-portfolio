import HeaderComponent from "./components/HeaderComponent";
import "./App.css";

function App() {
    return (
        <div>
            <HeaderComponent />
            <main>
                <div className='w-full text-center font-mono'>
                    <h1 className='text-5xl font-extrabold my-5'>Marco Campisi</h1>
                    <h3 className='text-2xl font-medium mt-4'>Questo è il mio portfolio.</h3>
                </div>
            </main>
        </div>
    );
}

export default App;
