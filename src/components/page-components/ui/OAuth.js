import {FcGoogle} from 'react-icons/fc'

const OAuth = () => {
    return ( 
        <button className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase font-bold hover:bg-red-800 shadow-lg transition duration-200 ease-in-out rounded-md'>
            <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
            Continue with Google
        </button>
     );
}
 
export default OAuth;