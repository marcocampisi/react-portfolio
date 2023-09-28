import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

export default function MainPage() {
    return (
        <div className="bg-gradient-to-br from-white to-indigo-500 dark:from-black dark:to-indigo-800 min-h-screen">
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
}
