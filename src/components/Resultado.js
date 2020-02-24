import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

const Mensaje = styled.p`
	padding:1rem;
	background-color: rgba(127,224,237);
	margin-top:2rem;
	text-align:center;
`;
const ResultadoCotizacion = styled.div`
	text-align:center;
	padding:1rem;
	border:1px solid #26c6da;
	background-color: rgba(127,224,237);
	margin-top:1rem;

`;

const TextCotizacion = styled.p`
	color:#00830f;
	padding:1rem;
	text-transform:uppercase;
	font-weight:bold;
	margin:0;
`;

const Resultado = ({cotizacion}) => {
	return(
		(cotizacion === 0) 
			? <Mensaje> Elige marca, año y tipo de seguro</Mensaje> 
			: (
				<ResultadoCotizacion>
					<TextCotizacion> El total es: $ { cotizacion } </TextCotizacion>
				</ResultadoCotizacion>
			)
	)
}
Resultado.propTypes = {
	cotizacion: PropTypes.number.isRequired
}
export default Resultado;