export default function Header({ activeAllCats, handleActiveClass }) {
    return (
        <header>
            <nav>
                <ul>
                    <li className={`all-cats ${activeAllCats ? "active" : ""}`} onClick={handleActiveClass}>
                        Все котики
                    </li>
                    <li className={`favorite-cats ${!activeAllCats ? "active" : ""}`} onClick={handleActiveClass}>
                        Любимые котики
                    </li>
                </ul>
            </nav>
        </header>
    );
}
