import './Button.css';

export default function Button({
    content,
    type,
    onClick,
    fontSize = 25,
    width = '100%',
    padding = 10,
    margin = 0,
    backgroundColor = '#FF6500',
    color = "#fff",
    textDecoration="none",
    borderRadius="%5"
}) {
    return (
        <button className='main-button' type={type} onClick={onClick} style={{
            fontSize: fontSize,
            width: width,
            padding: padding,
            margin: margin,
            backgroundColor: backgroundColor,
            color: color,
            textDecoration: textDecoration,
            borderRadius: borderRadius
        }}>{content}</button>
    )
}