/**   FUNCION CON ARGUMENTO NOMAL =export function TwitterFollowCard({formatUsername,username,name , isFollowing}){ }
 *   <strong >{name}</strong> 
                     // Aqui recibe una funcion ya creada y toma el valor del promp
                     <span className='tw-followCard-infoUsername'>{formatUsername(username)}</span> 
 * 
 *  PROMP CHILDREN REACT []  
 * // esto es para  importar los estados  Agregar funcionalidades en react import { useState } from "react";  
    
    
    const state = useState (false); 
    const isFollowing = state[0]; 
    const setFollowing = state[1];
    esto es lo mismo que :  
    const [isFollowing,setIsFollowing] = useState(false);  

 *  */ 
                         //   Funcion como pront , string , string  


import { useState } from "react";                        
export function TwitterFollowCard({children, username}){  
                // Valor inicial  esto nos regresa un array  
    const [isFollowing,setIsFollowing] = useState(false);  
   
   // const addAt = (username) => `@${username}`;   puedo declaralo adentro  

   //IMPORTANTE ES MALA PRACTICA MODIFICAR LA PRONT DIRECTAMENTE MEJOR CREAR UNA VARIABLE POR EJEMPLO   
    /**
     * EXPLICACION DEL ESTADO DECLARAMOS ESTO Y TENDRA UN VALOR POR DEFECTO DE FALSE
     * const [isFollowing,setIsFollowing] = useState(false); <----  
     * 
     * lUEGO HACEMOS UN HANDLECLICK QUE REVERTIMOS IS FOLLOWING  
     * OSEA const text= isFollowing ? 'Siguiendo' : 'Seguir'; como estaba en false 'Seguir' ahora cambia a  
     * 'Siguiendo'  
     * 
     *  TAMBIEN CAMBIA AQUI CAMBIANDO EL ESTADO DE ISFOLLOWING si es false lo deja con la clase normal pero  
     * si es verdadero le agrega la clase isfollowing
     *  const buttonClassname = isFollowing ?'tw-followCard-btnFollow isfollowing' :'tw-followCard-btnFollow';
    
     */

   const usernameArroba = `@${username}`;
    const text= isFollowing ? 'Siguiendo' : 'Seguir'; 
    const buttonClassname = isFollowing ?'tw-followCard-btnFollow isfollowing' :'tw-followCard-btnFollow';
    
    const handleClick =()=>{
        setIsFollowing(!isFollowing);
    };
    return(
        <article className='tw-followCard' >
             <header className='tw-followCard-header'>
                 <img 
                 className='tw-followCard-avatar'
                 alt='Imagen brayan Almengor'
                  src="https://i.pinimg.com/236x/bb/d5/15/bbd51518913ec655716400d7e34b6a6a.jpg"  />
                 <div className='tw-followCard-info'>
                     {children}
                     <span className='tw-followCard-infoUsername'>{usernameArroba}</span> 
                 </div>
             </header>
 
             <aside>
                 <button className={buttonClassname} onClick={handleClick}>
                    {text}
                 </button>
             </aside>
        </article>
     )
}