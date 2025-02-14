import './MainButton.css'

function MainButton({title, reaction, buttonType, isDisabled}) {
    return (
        <>
            <button className="mainButton" type={buttonType} onClick={reaction} disabled={isDisabled}>
                {title}
            </button>
        </>
    );
}

export default MainButton;