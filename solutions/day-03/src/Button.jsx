function Button({theme, onClick}){

    let text = theme ? "Turn to light mode" : "Turn to dark mode";

    return(
        <button className="theme_button" data-dark={theme} onClick={onClick}>{text}</button>
    )
}

export default Button;