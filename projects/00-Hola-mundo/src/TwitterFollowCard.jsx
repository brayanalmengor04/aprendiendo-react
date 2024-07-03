//                                 Funcion como pront , string , string 
export function TwitterFollowCard({formatUsername,username,name , isFollowing}){ 
   // const addAt = (username) => `@${username}`;   puedo declaralo adentro 
    return(
        <article className='tw-followCard' >
             <header className='tw-followCard-header'>
                 <img 
                 className='tw-followCard-avatar'
                 alt='Imagen brayan Almengor'
                  src="https://i.pinimg.com/236x/bb/d5/15/bbd51518913ec655716400d7e34b6a6a.jpg"  />
                 <div className='tw-followCard-info'>
                     <strong >{name}</strong> 
                     
                     <span className='tw-followCard-infoUsername'>{formatUsername(username)}</span> 
                 </div>
             </header>
 
             <aside>
                 <button className='tw-followCard-btnFollow'>Seguir</button>
             </aside>
        </article>
     )
}