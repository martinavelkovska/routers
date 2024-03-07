import {Outlet} from 'react-router-dom' //MARKS the place where the child route elements should be rendered to 
import MainNavigation from '../components/MainNavigation'


function RootLayout(){

    return <>
    <MainNavigation />
    <main>
    <Outlet /> 
    {/* to render their child route elements  , is used for rendering*/}
    </main>
    </>


}

export default RootLayout;