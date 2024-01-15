const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const props = {
    text: "Default Button",
    onClick: () => {}
}

const ButtonWrapper = () => {
    return (
        <Button {...props}></Button>
    )
}

export default ButtonWrapper;