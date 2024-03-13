import './App.css'
import { ProfileBox } from './ProfileBox'
export function App () {
    return ( 
        <section className='App'>
            <ProfileBox initialIsFriend={false} userName='emaloto'>
                Emanuel Loto
            </ProfileBox>
            <ProfileBox initialIsFriend userName='evelyngomez'>
                Evelyn Gomez
            </ProfileBox>
            <ProfileBox initialIsFriend userName='mudo'>
                Luciano Grazziano
            </ProfileBox>
        </section>
    )
}