import { indigo } from '@material-ui/core/colors'
import React from 'react'
import Form from '../Form/Form'
import { Link } from 'react-router-dom';
import './Information.css'
export default function Information() {

const handleClick=()=>{
 
     console.log('clicked handleClick')
  
}
  
  return (
    <div >
  <div>
        <div className='info'>  
           
        <h2 className='headline'>General Info </h2>
        <Link to='/form' >   
         <p className='headline' ><i class='far fa-edit'></i></p>
         </Link>
       
        
        </div>
        <div className='info'>
        <h3 className='headline'>ID</h3>
        <p className='headline'>Contrat de confidentialité...</p>
        </div>
        <div className='info'>
        <h3 className='headline'>Statut</h3>
        <p className='headline bg-green-100'> <span style={{backgroundColor:'rgb(220 252 231)',padding:'5px',borderRadius:'5px'}}>En Attente d’approbation</span> </p>
        </div>
        <div className='info'>
        <h3 className='headline'>Modèle</h3>
        <p className='headline'>Contrat de confidentialité</p>
        </div>
        <div className='info'>
        <h3 className='headline'>Dossier</h3>
        <p className='headline'>Areva</p>
        </div>
        
        <div className='info'>
        <h2 className='headline'>Important Dates</h2>
       
        <Link to='/form' >
        
        <p className='headline'  ><i class='far fa-edit'></i></p>
</Link>
    
       
       
        </div>
        <div className='info'>
        <h3 className='headline'>Créé le</h3>
        <p className='headline'>29 Jun 2020, 21:37</p>
        </div>
        <div className='info'>
        <h3 className='headline'>Dernière modification</h3>
        <p className='headline'>29 Jun 2020, 21:37</p>
        </div>
        <div className='info'>
        <h3 className='headline'>Date de renouvellement</h3>
        <p className='headline'>29 Jun 2020, 21:37</p>
        </div>
        <div className='info'>
        <h3 className='headline'>Signé le</h3>
        <p className='headline'>29 Jun 2020, 21:37</p>
        </div>
        
     
        
    </div>
   
   <div className='btn'>
       <button className='action-btn1'>View Contract</button>
       <button className='action-btn2'>View Contract</button>
   </div>
    </div>
  
  
  )
}
