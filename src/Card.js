import Button from "./Button";

function Card({imageUrl, title, description, onDelete, onEdit, isDeleting, isEditing}) {

    return (
        <div className={`card ${isDeleting ? "deleting" : ""}`}>
            <img className="image" src={imageUrl}/>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <Button text="Edit" onClickEvent={onEdit}/>
            <Button text="Delete" onClickEvent={onDelete}/>
        </div>
    )
}

export default Card;