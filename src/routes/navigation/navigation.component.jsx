
import {Outlet,Link} from 'react-router-dom';
import { Fragment } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation=()=>{

  return(
    <Fragment>

      <div className='navigation'>

         <Link className='logo-container' to='/'>
           <CrwnLogo className='logo'/>
         </Link>
       
        <div className='nav-links-container'></div>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>


      </div>
    <Outlet/>

    </Fragment>

  )
}

export default Navigation ;