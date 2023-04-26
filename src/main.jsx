import ReactDOM from 'react-dom'
import "./index.css"

const title = (texto) => <h3 className='title'>{texto}</h3>

const app = (
    <div>
        {title('Holamundo')}
        {title('Catag')}
    </div>
)
const container = document.getElementById("root");

ReactDOM.render(app, container);