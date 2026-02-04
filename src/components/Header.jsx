import logo from "../assets/logo.jpg";
export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="app logo" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <button>Cart (3)</button>
            </nav>
        </header>
    );
}
