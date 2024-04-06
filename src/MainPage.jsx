import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

export default function MainPage() {
    return (
        <div className="bg-gradient-to-b from-white to-black dark:from-black dark:to-white min-h-screen">
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
}
