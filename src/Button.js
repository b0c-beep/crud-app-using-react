function Button ({text, onClickEvent}) {
    
    return (
        <button className="btn" onClick={onClickEvent}>{text}</button>
    );

}

export default Button;