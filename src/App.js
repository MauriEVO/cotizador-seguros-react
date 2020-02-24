import React, {useState} from 'react';
import styled from '@emotion/styled'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
	max-width:600px;
	width: 100%;
	margin:auto;

`;

const ContenedorFormulario = styled.div`
	background-color: #fff;
	padding:30px;
	position: relative;
`;


function App() {

	const [resumen, guardarResumen] = useState({
		cotizacion:0,
		datos:{
			marca:'',
			year:'',
			plan:''
		}
	})

	const [cargando, guardarCargando] = useState(false)

	//- EXTRAER DATOS
	const { cotizacion, datos } = resumen;


	return (
		<Contenedor>
			<Header titulo="Cotizador de Seguros"/>
			<ContenedorFormulario>
				<Formulario 
					guardarResumen={guardarResumen}
					guardarCargando={guardarCargando}
				/>
				{cargando ? <Spinner/> : null}
				
				<Resumen 
					datos={datos}
				/>
				
				{!cargando 
					? <Resultado 
							cotizacion={cotizacion}
						/>
					: null
				}

			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;
