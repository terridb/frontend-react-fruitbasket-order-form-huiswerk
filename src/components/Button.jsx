
function Button({title, reaction, buttonType}) {
    return (
        <>
            <button type={buttonType} onClick={reaction}>
                {title}
            </button>
        </>
    );
}

export default Button;