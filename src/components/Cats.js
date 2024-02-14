import Cat from "./Cat";

export default function Cats(props) {
    const { cats = [], addFavoriteCat = Function.prototype } = props;

    return (
        <div className="photo-container">
            {cats.map((cat) => {
                return <Cat addFavoriteCat={addFavoriteCat} key={cat.id} {...cat} />;
            })}
        </div>
    );
}
