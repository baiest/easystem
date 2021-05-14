import {Link} from 'react-router-dom'
function contactar(props){
    if (props.link){
        return <a href={props.link} target='_blank' rel='noreferrer' className='btn'>{props.nombre || 'Contactenos'}</a>
    }    
    else{
        return <Link to='contactenos' className = "btn">{props.nombre || 'Contactenos'}</Link>
    }
}

export default contactar