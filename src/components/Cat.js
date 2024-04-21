export default function Cat(props) {
    const {
        url,
        id,
        classIcon = "fa-regular fa-heart photo-container__icon",
        addFavoriteCat = Function.prototype,
    } = props;

    return (
        <div className="photo-container__item ">
            <img src={url} alt={id}></img>
            <i onClick={(e) => addFavoriteCat(e)} className={classIcon}></i>
        </div>
    );
}
