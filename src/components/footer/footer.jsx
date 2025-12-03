import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBasket, faTags } from '@fortawesome/free-solid-svg-icons';

export default function Footer()
{
    return (
        <footer className='flex justify-center items-center py-4 font-primary text-gray-700'>
            Built with {" "}
            <FontAwesomeIcon icon={faHeart}
            className='text-red-500 mx-1 animate-pulse'
            aria-hidden="true"// igone this icon while deploying
            /> 
         {" "}      by   {" "}
             <a className='text-primary font-semibold px-1 transition-colors duration-500 hover:text-dark' href='https://eazybytes.com" target="_blank" rel="noopener noreferrer' >  
                    eazybytes
            </a> {/* blank means it will redirect to new website and noreffer is security related issue we have to mention while redirecting to  another website*/}
        </footer>

    )
}