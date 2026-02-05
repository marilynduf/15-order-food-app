import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header({ handleOnClick }) {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="app logo" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleOnClick}>
                    Cart (3)
                </Button>
            </nav>
        </header>
    );
}
