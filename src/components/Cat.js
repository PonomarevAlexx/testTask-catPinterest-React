export default function Cat(props) {
    const { url, id, classIcon = "fa-regular fa-heart icon", addFavoriteCat = Function.prototype } = props;

    return (
        <div className="photo-item">
            <img src={url} alt={id}></img>
            <i onClick={(e) => addFavoriteCat(e)} className={classIcon}></i>
        </div>
    );
}
