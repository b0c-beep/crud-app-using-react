import React, { useState, useEffect } from 'react';


const Modal = ({ isOpen, onClose, onSave, card }) => {
    const [imageUrl, setImageUrl] = useState(card.imageUrl);
    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);

    useEffect(() => {
        // Reset fields when card changes
        setImageUrl(card.imageUrl);
        setTitle(card.title);
        setDescription(card.description);
    }, [card]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave({ ...card, imageUrl, title, description });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Card</h2>
                <label>
                    Image URL:
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </label>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default Modal;
