import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

export default function MainPage() {
    return (
        <div className="bg-neutral-300 dark:bg-neutral-900 min-h-screen">
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
}
