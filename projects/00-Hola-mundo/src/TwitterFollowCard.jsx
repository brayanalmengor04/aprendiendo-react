/**   FUNCION CON ARGUMENTO NOMAL =export function TwitterFollowCard({formatUsername,username,name , isFollowing}){ }
 *   <strong >{name}</strong> 
                     // Aqui recibe una funcion ya creada y toma el valor del promp
                     <span className='tw-followCard-infoUsername'>{formatUsername(username)}</span> 
 * 
 *  PROMP CHILDREN REACT 
 *  */ 
                         //   Funcion como pront , string , string 
export function TwitterFollowCard({children, username, isFollowing}){ 
   // const addAt = (username) => `@${username}`;   puedo declaralo adentro  

   //IMPORTANTE ES MALA PRACTICA MODIFICAR LA PRONT DIRECTAMENTE MEJOR CREAR UNA VARIABLE POR EJEMPLO  
   const usernameArroba = `@${username}`;

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
                 <button className='tw-followCard-btnFollow'>Seguir</button>
             </aside>
        </article>
     )
}