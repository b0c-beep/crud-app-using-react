import Button from "./Button";

function Card({imageUrl, title, description}) {
    const editClick = () => {
        alert("Edit button clicked");
    }

    const deleteClick = () => {
        alert("Delete button clicked");
    }

    return (
        <div className="card">
            <img className="image" src={imageUrl}/>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <Button text="Edit" onClickEvent={editClick}/>
            <Button text="Delete" onClickEvent={deleteClick}/>
        </div>
    )
}

export default Card;