
import {ImSpinner} from 'react-icons/im'


export default function Loader(){
    return (
        <div role='alert'> 
        <ImSpinner size="32" className='icon-spin' / >
            Загружаем...
        </div>
       
    )
}