import { useState } from 'react'

export function ProfileBox({children, userName = 'none', initialIsFriend}){

    const [ isFriend, setIsFriend] = useState(initialIsFriend)

    const textButton = isFriend ? 'Ya es tu amigo' : 'Añadir a mis amigos'
    const classButton = isFriend ? 'pb-friendbutton is-friend' : 'pb-friendbutton' 
    const imageSrc = `https://unavatar.io/${userName}`
    
    const cambiarEstadoAmigo = () => {  
        setIsFriend (!isFriend)
    }

    return (
        <article className='pb-main'>
            <header className='pb-header'>
                <div className='pb-img-container'>
                    <img  className='pb-img' alt="avatar" src={imageSrc} />
                </div>                
            </header>
            <aside className='pb-info'>
                <div className='pb-user'>
                    <strong className='pb-user-fullname'>{children}</strong>
                    <span className='pb-username'>@{userName}</span>
                </div>
                <button className={classButton} onClick={cambiarEstadoAmigo}>
                    <span className='pb-friend'>{textButton}</span>
                    <span className='pb-unfriend'>Quitar de mis amigos</span>
                </button>
            </aside>
        </article>
    )
}