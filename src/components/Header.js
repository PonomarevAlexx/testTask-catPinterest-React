export default function Header({ activeAllCats, handleActiveClass }) {
    return (
        <header>
            <nav>
                <ul className="menu">
                    <li
                        className={`menu__btn ${activeAllCats ? "menu__btn_active" : ""}`}
                        onClick={(e) => handleActiveClass(e)}
                    >
                        Все котики
                    </li>
                    <li
                        className={`menu__btn ${!activeAllCats ? "menu__btn_active" : ""}`}
                        onClick={(e) => handleActiveClass(e)}
                    >
                        Любимые котики
                    </li>
                </ul>
            </nav>
        </header>
    );
}
