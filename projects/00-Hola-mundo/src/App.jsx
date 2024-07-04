/** 
 * 

                                                    NOTAS REACT 
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


    2. ENVIANDO ELEMENTOS  HTML A UN SITIO 
      const formatUsernames = (username) => `@${username}`;   
         const formatedUsername = <span>@{userName}</span>; 

          <section className='App'> 
            <TwitterFollowCard 
            formatedUsername={formatedUsername} 
            isFollowing 
            username="Aabj_cx0440" 
            name="Brayan Almengor" />

    
    3. CHILDREN PRONT :   
    COMPONENTE :  Aqui le pasamos como argumento el children
    export function TwitterFollowCard({children, username, isFollowing}){ 
   

     <div className='tw-followCard-info'>
                     {children} le pasamos en  parametros al componente 
                     <span className='tw-followCard-infoUsername'>{usernameArroba}</span> 
                 </div> 

    y   <section className='App'> 
            <TwitterFollowCard 
            isFollowing 
            username="Aabj_cx0440" 
             >
               <h1>Brayan Almengor</h1>  <--- Esto es el children lo que hay dentro puede ser un string o elementos (H1) 
            </TwitterFollowCard>
     4. SE pueden agregar valores por defecto a los componentes como ejemplo :  

     export function TwitterFollowCard({children, username='unknown', isFollowing}){  


     5. COMO PASAR TODAS LAS PROMPS JUNTAS :   
     // Esto es mala practica pero puede tener sentido si en caso tiene muchos promps
        Craemos el objeto 
       const brayanAlmengor = {isFollowing:true, username:"Aabj_cx0440"}; 

      <section className='App'> ...le pasamos el objeto
            <TwitterFollowCard {...brayanAlmengor}
             >
              Brayan Almengor
            </TwitterFollowCard> 
            
 * 
*/
    
import React from 'react'
import './App.css' 
//Se importa el componente de ruta raiz de el proyecto src 

import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){ 
        // <> es una forma mas limpia de escribir <React.Fragment fragment es si no quieres agregar ningun elemento html

     // Pasamos la funcion que agrega el arroba a el username ...
  // const formatUsernames = (username) => `@${username}`;   
   // const formatedUsername = <span>@{userName}</span>;
    //const brayanAlmengor = {isFollowing:true, username:"Aabj_cx0440"};
   return (  
        <section className='App'> 
            <TwitterFollowCard {...brayanAlmengor}
             >
              Brayan Almengor
            </TwitterFollowCard>

            <TwitterFollowCard 
             isFollowing={false}
             username="Aabj_tecno"
             name="Brayan Antonio" />
        </section>

   )
}