import Button from "./Button";
import { getImage } from "./unsplashAPI";
import { useState, useEffect } from "react";
import Card from "./Card";
import { faker } from '@faker-js/faker';
import {generate} from 'random-words';
import Modal from "./Modal";

function CardAdder(){
    // Load cards from localStorage if available, otherwise use an empty array
    const [cardData, setCardData] = useState(() => {
        const savedCards = localStorage.getItem('cards');
        return savedCards ? JSON.parse(savedCards) : [];
    });

    //for card animations
    const [deletingIndex, setDeletingIndex] = useState(null);
    //const [editingIndex, setEditingIndex] = useState(null);
    const [editingCard, setEditingCard] = useState(null);


    // Use useEffect to save cardData to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cardData));
    }, [cardData]);

    const addCardClick = async (event) => {
        event.preventDefault();

        let imageUrl = document.querySelector('input[name="imageUrl"]').value;
        let title = document.querySelector('input[name="title"]').value;
        let description = document.querySelector('input[name="description"]').value;

        if(imageUrl && !title && !description){
            title = imageUrl;
            description = faker.lorem.sentence(5);
        }

        if(!imageUrl || !title || !description){
            imageUrl = generate();
            title = imageUrl;
            description = faker.lorem.sentence(5);
        }

        const unsplashImage = await getImage(imageUrl);

        const newCard = {
            imageUrl: unsplashImage || imageUrl,
            title: title,
            description: description,
        };

        setCardData([...cardData, newCard]);
        
        document.querySelector('input[name="imageUrl"]').value = "";
        document.querySelector('input[name="title"]').value = "";
        document.querySelector('input[name="description"]').value = "";
    }

    const handleDelete = (index) => {
        setDeletingIndex(index);
        setTimeout(() => {
            const updatedCardData = cardData.filter((_, i) => i !== index);
            setCardData(updatedCardData);
            setDeletingIndex(null);
        }, 300);
    };

    const handleEdit = (index) => {
        setEditingCard({ ...cardData[index], index });
    };

    const saveEdit = async (updatedCard) => {
        const { index, imageUrl, title, description } = updatedCard;
        const unsplashImage = await getImage(imageUrl);

        const updatedCardData = [...cardData];
        updatedCardData[index] = {
            ...updatedCardData[index],
            imageUrl: unsplashImage || imageUrl,
            title: title,
            description: description
        };

        setCardData(updatedCardData);
        setEditingCard(null);
    };


    return (
        <div className="card-adder-container">
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

            <div className="cards-container">
                {cardData.length > 0 ? (
                    cardData.map((card, index) => (
                        <Card
                            key={index}
                            imageUrl={card.imageUrl}
                            title={card.title}
                            description={card.description}
                            onDelete={() => handleDelete(index)}
                            onEdit={() => handleEdit(index)}
                            isDeleting={deletingIndex === index}
                            isEditing={editingCard?.index === index}
                        />
                    ))
                ) : (console.log("No cards to display"))}
            </div>

            {editingCard && (
                <Modal
                    isOpen={!!editingCard}
                    onClose={() => setEditingCard(null)}
                    onSave={saveEdit}
                    card={editingCard}
                />
            )}
        </div>
    );
}

export default CardAdder;