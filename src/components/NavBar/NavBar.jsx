import './NavBar.css';

export default function NavBar(){
    return(
        <header className='Nav-bar'>
            <div className='space'></div>
            <ul>
                <li className='btn-navbar'>About</li>
                <li className='btn-navbar'>DevLogs</li>
                <li className='btn-navbar'>Photos</li>
                <li className='btn-navbar'>Timeline</li>
            </ul>
            

        </header>

    ) 
        
    
}