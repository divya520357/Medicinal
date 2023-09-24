import './style.css'
import { medicinals } from '../../data/card';
const Card=()=>{
   return(
        <main>
            <h1>Disocver</h1>
            <div className="cards">
               {medicinals.map((medicinal)=>{
               return( <div className='medcine-card'>
                     <img src={medicinal.Image} alt="Logo" /> 
                     <h2>{medicinal.Name}</h2>
                     <p><b>Applications:</b> {medicinal.Application}</p>
                     <p><b>Found at:</b> {medicinal.Location}</p>
                  </div> )
               })}
            </div>
        </main>
   ) 
}

export default Card;