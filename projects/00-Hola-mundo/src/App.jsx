/** 
 * <article style={{display: 'flex', alignItems:'center',color: '#fff'}} >
            <header>
                <img alt='Imagen brayan Almengor' src="https:://www.instagram.com/p/C1qnTAPMwCO/?igsh=eXdwaGJhcxd4bTZp"  />
                <div> 

      esta es una forma de agregar css a los componente IMPORTANT EN REACTNATIVE SE AGREGA DE ESTA MANERA          
 * 
 *     
     AGREGACION PROM COMPONENTE FUNCION 
     const formatUsernames = (username) => `@${username}`; ENVIAR FUNCION 
     1. Una de las formas para agregar prompa un componente puede ser agregando una funcion en este caso 
     una funcion que agrega un arroba a el parametro username

     return (  
     <section className='App'> 
         <TwitterFollowCard 
         formatUsername={formatUsernames} RECIBIR LA FUNCION 
         isFollowing 
         username="Aabj_cx0440" 
         name="Brayan Almengor" />

 *   COMO INTERACTUA EL COMPONENTE     <span className='tw-followCard-infoUsername'>{formatUsername(username)}</span>  
 *   RECIBE LA FUNCION Y TOMA EL VALOR YA ESTABLECIDO DE EL COMPONENTE USERNAME.  


    2. ENVIANDO ELEMENTOS      

 * 
*/
    
import React from 'react'
import './App.css' 
//Se importa el componente de ruta raiz de el proyecto src 

import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){ 
        // <> es una forma mas limpia de escribir <React.Fragment fragment es si no quieres agregar ningun elemento html

     // Pasamos la funcion que agrega el arroba a el username ...
   const formatUsernames = (username) => `@${username}`;   

   return (  
        <section className='App'> 
            <TwitterFollowCard 
            formatUsername={formatUsernames} 
            isFollowing 
            username="Aabj_cx0440" 
            name="Brayan Almengor" />

            <TwitterFollowCard 
             formatUsername={formatUsernames}
             isFollowing={false}
             username="Aabj_tecno"
             name="Brayan Antonio" />
        </section>

   )
}