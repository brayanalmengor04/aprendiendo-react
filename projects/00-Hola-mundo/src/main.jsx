
import ReactDOM from 'react-dom/client';
import './index.css';// Import del css 
 //Import del componente 
 import { App } from './App.jsx';

 
 
/**
 * 
const Button = ({text}) =>{
  return (
    <button>
      {text}
    </button>
  )
} 
const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(
  <React.Fragment> 
    <Button  text='Boton 1' />   
    <Button  text='Boton 2' />   
    <Button  text='Boton 3' />   
  </React.Fragment>
)
 */  

// Creando componente de react // primer componente cards twitter
const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render( 
  // Aqui renderizamos App Luego arriba se exporta
  <App />
)








