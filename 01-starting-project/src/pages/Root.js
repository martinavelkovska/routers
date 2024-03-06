import {Outlet} from 'react-router-dom' //MARKS the place where the child route elements should be rendered to 
import MainNavigation from '../components/MainNavigation'
import classes from './Root.module.css'

function RootLayout(){

    return <>
    <MainNavigation />
    <main className={classes.content}>
    <Outlet />
    </main>
    </>


}

export default RootLayout;