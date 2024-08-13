import Button from "./Button";

function Card({imageUrl, title, description, onDelete, onEdit}) {

    return (
        <div className="card">
            <img className="image" src={imageUrl}/>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <Button text="Edit" onClickEvent={onEdit}/>
            <Button text="Delete" onClickEvent={onDelete}/>
        </div>
    )
}

export default Card;