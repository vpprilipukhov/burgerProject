import React from 'react';
import styles from './appHeader.module.css'
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'


function AppHeader(props) {





    return (
        <header className={styles.appHeader}>
            <div className={styles.appHeaderSection1}>
                <div className={styles.appHeaderIcon}><BurgerIcon type={'primary'}/>Конструктор</div>
                <div className={styles.appHeaderIcon}><ListIcon type={'secondary'}/>Лента заказов</div>
            </div>
            <div className={styles.appHeaderSection2}>
                <div><Logo/></div>
            </div>
            <div className={styles.appHeaderSection3}>
                <div className={styles.appHeaderIcon}><ProfileIcon type={'secondary'}/> Личный кабинет</div>

            </div>
        </header>
    )

}

export default AppHeader


{/*<div className={styles.child}>*/
}
{/*    <span><BurgerIcon type={'primary'} onClick={qwerty}>Конструктор</BurgerIcon> Конструктор</span>*/
}
{/*</div>*/
}
{/*<div className={styles.child}>*/
}
{/*    <Logo/>*/
}
{/*</div>*/
}
{/*<div className={styles.child}>*/
}
{/*    Третий блок*/
}
{/*</div>*/
}

{/*!!!!*/
}
//
// className={styles.appHeaderItem +" "+ styles.child}
// className={styles.appHeaderItem +" "+ styles.child}
// className={styles.appHeaderItem +" "+ styles.child}
// className={styles.appHeaderItem +" "+ styles.child}