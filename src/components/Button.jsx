
function Button({title, reaction}) {
    return (
        <>
            <button onClick={reaction}>
                {title}
            </button>
        </>
    );
}

export default Button;