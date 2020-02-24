import React, {Fragment} from 'react';
import styled from '@emotion/styled'
import {primerMayuscula} from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
	padding:1rem;
	text-align: center;
	background-color: #00838F;
	color:#fff;
	margin-top:15px;
`;


const Resumen = ({datos}) => {

	const {marca,year,plan} = datos;

	if(marca==='' || year==='' || plan===''){
		return null;
	}
	
	return (
		<ContenedorResumen>
			<h1>Resumen de Cotización</h1>
			<ul>
				<li>Marca: {primerMayuscula(marca)}</li>
				<li>Plan: {primerMayuscula(plan)}</li>
				<li>Año del Auto: {year}</li>
			</ul>	
		</ContenedorResumen>
	);
}
Resumen.propTypes ={
	datos: PropTypes.object.isRequired
}
export default Resumen;