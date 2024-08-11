import Button from "./Button";
import { getImage } from "./unsplashAPI";
import {useState} from "react";
import Card from "./Card";

function CardAdder(){
    const [cardData, setCardData] = useState(null);

    const addCardClick = async (event) => {
        event.preventDefault();

        //alert("Add button clicked");
        const imageUrl = document.querySelector('input[name="imageUrl"]').value;
        const title = document.querySelector('input[name="title"]').value;
        const description = document.querySelector('input[name="description"]').value;

        const unsplashImage = await getImage(imageUrl);

        setCardData({
            imageUrl: unsplashImage,
            title: title,
            description: description
        });

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

            {cardData && (
            <Card
                imageUrl={cardData.imageUrl}
                title={cardData.title}
                description={cardData.description}
            />
            )}
        </div>
    );
}

export default CardAdder;