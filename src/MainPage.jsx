import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

export default function MainPage() {
    return (
        <div>
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
}
