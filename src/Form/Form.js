import React from 'react'
import { Link } from 'react-router-dom';
import Bar from './Bar/Bar';

import './Form.css'

export default function Form() {
     const handleSubmit = () => {
        
       console.log('submited')
    };
  
   
  return (
    <div className='general_form'>
        <Bar></Bar>
        <Link to='/'>
<h2 className='form_style'><i class='fas fa-arrow-left arrow' ></i>Edit General Information</h2>
</Link>
<form onSubmit={handleSubmit}>
<label for="ID">ID</label>
<input type="text" name="firstname" defaultValue='Contrat de confidentialité...' required/>
<label for="Statut">Statut</label>
<select id="En Attente d’approbation" name="En Attente d’approbation">
      <option value="australia">En Attente d’approbation</option>
      <option value="canada">En Attente d’approbation</option>
     
    </select>

    <label for="Modèle">Modèle</label>
    <input type="text" name="Contrat de confidentialité" defaultValue='Contrat de confidentialité' required/>
    <label for="Dossier">Dossier</label>
    <input type="text" name="Areva" defaultValue='Areva' required/>
    <label for="Priopriétaire">Priopriétaire</label>
    <input type="text" name="Yann Ezzeddine" defaultValue='Yann Ezzeddine' required/>
    <label for="Préavis">Préavis</label>
    <input type="text" name="Yann Avec" defaultValue='Yann Avec' required/>
    <label for="Durée de préavis">Durée de préavis</label>
    <input type="text" name="Tacite" defaultValue='Tacite' required/>
    <label for="Renouvellement">Renouvellement</label>
    <input type="text" name="Sans" defaultValue='Sans'/>
    <label for="Durée de renouvellement">Durée de renouvellement</label>
    <input type="text" name="Sans" defaultValue='Sans' required/>
  
   
    <div className='btn'>
 <button type="submit" className='action-btn1'>Save Changes</button>
       <button className='action-btn2'>Cancel</button>
   </div>
  </form>
       
    </div>
  )
}

