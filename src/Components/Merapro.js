import React , {useState} from 'react'
import "./style.css"
import Menu from "./menuApi"
import Menucard from "./Menucard"


const Merapro = () => {
    //const myStyle={color:"red"} ye bhi ek trika hai style add krne ka
   const [menuData, setmenuData] = useState(Menu)  //hooks!!!! ye bahut important hai.. 
//    ye array return krta  hai jisme pair he initial value store krni and
//     updated value hold krne vala!!! woww..great!!
     
    return (
        <>
        < Menucard menuData={menuData} />
        </>
    )
}

export default Merapro
