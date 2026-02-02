export default function Header({ logo }) {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="app logo" />
                <h1>REACTFOOD</h1>
            </div>
            <div>Cart (3)</div>
        </header>
    );
}
