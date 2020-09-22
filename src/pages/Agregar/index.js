import React from 'react';
import './style.scss';
import InputAdd from '../../components/InputAdd';
import {useValid} from '../../hooks/validate';


function Agregar() {
  const [quetal] = useValid();

  return (
<form>
<InputAdd name="Nombre" len="2"/>
<InputAdd name="Logo" len="3"/>
<InputAdd name="Mail" len="3"/>
<textarea/>
<InputAdd name="Web" len="0" place="opcional"/>
<InputAdd name="Twitter" len="0" place="opcional"/>
<InputAdd name="Instagram" len="0" place="opcional"/>
<input type="submit" value="Submit"/>

</form>

  )
}

export default Agregar;