import './Button.css';

export default function Button({content, type, onClick, fontSize=25}) {
    return (
        <button className='main-button' type={type} onClick={onClick} style={{fontSize: fontSize}}>{content}</button>
    )
}