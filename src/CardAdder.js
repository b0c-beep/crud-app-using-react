import Button from "./Button";

function CardAdder(){
    const addCardClick = () => {
        alert("Add button clicked");
    }

    return (
        <div className="card-adder">
            <h2 className="title">Add a new card</h2>
            <form className="card-form">
                <label className="image-label">
                    Image Prompt:
                    <input type="text" name="imageUrl" />
                </label>
                <label className="title-label">
                    Title:
                    <input type="text" name="title" />
                </label>
                <label className="description label">
                    Description:
                    <input type="text" name="description" />
                </label>
                <Button text = "Add" onClickEvent={addCardClick}/>
            </form>
        </div>
    );
}

export default CardAdder;