import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <p>Página não encontrada</p>
            <Link href="/">VoltLinkr para a página inicial</Link>
        </div>
    )
}