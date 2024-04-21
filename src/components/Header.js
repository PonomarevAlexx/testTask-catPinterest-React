export default function Header({ activeAllCats, handleActiveClass }) {
    return (
        <header>
            <nav>
                <ul className="menu">
                    <li className={`menu__btn ${activeAllCats ? "menu__btn_active" : ""}`} onClick={handleActiveClass}>
                        Все котики
                    </li>
                    <li className={`menu__btn ${!activeAllCats ? "menu__btn_active" : ""}`} onClick={handleActiveClass}>
                        Любимые котики
                    </li>
                </ul>
            </nav>
        </header>
    );
}
