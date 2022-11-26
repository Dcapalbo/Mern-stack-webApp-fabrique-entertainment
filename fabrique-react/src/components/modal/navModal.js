import classes from './navModal.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavModal = () => {
    const [modalVisible, setIsModalVisible] = useState(false);
    const closingModalHandler = () => {
        const body = document.querySelector("body");
        body.style.overflow = 'scroll';
        setIsModalVisible(true);
    }
    
    return(
        <>
                {!modalVisible && <div className={classes.navigation__modal}>
                    <div className={classes.navigation__modal__close}>
                        <span onClick={closingModalHandler}>X</span>
                    </div>
                    <ul className={classes.navigation__mobile__menu}>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link className={classes.navigation__films__mobile} to="/films">films</Link>
                            <ul className={classes.navigation__films__mobile__dropdown}>
                                <li><Link to="/films/lucania">lucania</Link></li>
                                <li><Link to="/films/guerrieri">guerrieri</Link></li>
                                <li><Link to="/films/love-and-desire">love and desire</Link></li>
                                <li><Link to="/films/felakuti">felakuti</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/news">news</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul> 
                </div>}
            </>
    )
}

export default NavModal;