import React, { useEffect, useState } from "react";
import Cats from "./Cats";
import Preloader from "./Preloader";

const API_KEY = "live_GQbPwFOIhAnXcfZXEULbqMKCqySATmd1fKoFdNxxYoDY5gX2zpQakmYd4nl23mxl";

export default function Main({ activeAllCats }) {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favoritesCat, setFavoritesCat] = useState(JSON.parse(localStorage.getItem("myCat")) || []);
    const [showMoreCat, setShowMoreCat] = useState(false);

    const handleScroll = (e) => {
        if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 50) {
            setShowMoreCat(true);
        }
    };

    const addFavoriteCat = (e) => {
        const indexEl = favoritesCat.findIndex((el) => el.id === e.target.previousElementSibling.alt);

        if (indexEl === -1) {
            const newEl = {
                url: e.target.previousElementSibling.src,
                id: e.target.previousElementSibling.alt,
                classIcon: "fa-solid fa-heart photo-container__icon",
            };
            setFavoritesCat([...favoritesCat, newEl]);
        } else {
            const newList = favoritesCat.filter((el) => el.id !== e.target.previousElementSibling.alt);
            setFavoritesCat([...newList]);
        }

        toggleClassIcon(e);
    };

    // need edit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const toggleClassIcon = (e) => {
        if (e.target.classList.contains("fa-regular")) {
            e.target.classList.remove("fa-regular");
            e.target.classList.add("fa-solid");
        } else {
            e.target.classList.add("fa-regular");
            e.target.classList.remove("fa-solid");
        }
    };

    useEffect(() => {
        localStorage.setItem("myCat", JSON.stringify(favoritesCat));
    }, [favoritesCat]);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=20&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setCats((prev) => [...prev, ...data]);
                setLoading(false);
                setShowMoreCat(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
                setShowMoreCat(false);
            });
    }, [showMoreCat]);

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScroll(e));
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main>
            {activeAllCats ? (
                loading ? (
                    <Preloader />
                ) : (
                    <Cats addFavoriteCat={addFavoriteCat} cats={cats} />
                )
            ) : favoritesCat.length > 0 ? (
                <Cats addFavoriteCat={addFavoriteCat} cats={favoritesCat} />
            ) : (
                <h1>Пока ничего нет(((</h1>
            )}
        </main>
    );
}
