import logo from "../assets/logo.jpg";
export default function Header({ handleOnClick }) {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="app logo" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <button onClick={handleOnClick}>Cart (3)</button>
            </nav>
        </header>
    );
}
