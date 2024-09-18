import { Link } from "react-router-dom";

export default function InternalServerError() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>500</h1>
            <p>Erro Interno do Servidor</p>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    );
}