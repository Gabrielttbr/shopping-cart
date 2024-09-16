import './Button.css';

export default function Button({content, type, onClick}) {
    return (
        <button className='main-button' type={type} onClick={onClick}>{content}</button>
    )
}