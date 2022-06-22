import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const CardWidget = () => {

    return (

        <Link to='/cart'>

            <Icon icon="icons8:buy" color="white" height="40" />
        </Link>

    )


}



export default CardWidget