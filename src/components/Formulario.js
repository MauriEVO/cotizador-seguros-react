import React, {useState} from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from '../helper';

const Campo = styled.div`
	display: flex;
	align-items:center;
	margin-bottom:15px;

`;
const Label = styled.label`
	flex: 0 0 100px;
`;

const Select = styled.select`
	display: block;
	width:100%;
	padding:1rem;
	border: 1px solid #e1e1e1;
	-webkit-appearance: none;
`;

const InputRadio = styled.input`
	margin:0 1rem;
`;

const Button = styled.button`
	height: 50px;
	line-height:50px;
	width:100%;
	font-size:16px;
	font-weight:bold;
	background-color: #00838f;
	color:white;
	border:none;
	margin-top:20px;
	transition: all 250ms ease-in;
	&:hover{
		cursor:pointer;
		background-color: #26C6DA;
	}

`;

const Error = styled.div`
	background-color: red;
	color:white;
	padding:1rem;
	text-align:center;
	margin-bottom:30px;
	font-weight:bold;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {

	const [datos, guardarDatos] = useState({
		marca: '',
		year:'',
		plan:''
	})

	const [error, guardarError] = useState(false)

	//--EXTRAER VALORES
	const {marca,year,plan} = datos;

	//--LEER LOS DATOS DEL FORMULARIO Y COLOCARLOS EN EL STATE
	const obtenerInformacion = e =>{
		guardarDatos({
			...datos,
			[e.target.name]: e.target.value
		})
	}

	//--CUANDO EL USUARIO PRESIONA EL SUBMIT
	const cotizarSeguros = e =>{
		e.preventDefault();

		if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
			guardarError(true)
			return;
		}
		guardarError(false)

		//- UNA BASE 2000
		let resultado = 2000

		//- OBTENER LÑA DIFERENCIA DE AÑO
		const diferencia = obtenerDiferenciaYear(year)
		resultado -= ((diferencia * 3) * resultado) / 100

		//AMERICANO 15%
		// ASIATICO 5%
		// EUROPEO 30%
		resultado = calcularMarca(marca) * resultado;

		//basico aumenta a 20%
		// completo auemnta a 50%
		const incrementoPlan = obtenerPlan(plan)
		resultado = parseFloat(incrementoPlan * resultado).toFixed(2)
		
		guardarCargando(true)

		setTimeout( ()=>{
			guardarCargando(false)
			guardarResumen({
				cotizacion: Number(resultado),
				datos
			})
		}, 3000)
	}

	return (
		<form
				onSubmit={cotizarSeguros}
			>
			{ error ? <Error> Todos los campos son obligatorios </Error> : null}
			<Campo>
				<Label>Marca</Label>
				<Select 
					name="marca"
					value={marca}
					onChange={obtenerInformacion}
					>
					<option value="">-- Seleccione --</option>
					<option value="americano">Amerciano</option>
					<option value="europeo">Europeo</option>
					<option value="asiatico">Asiatico</option>
				</Select>
			</Campo>
			<Campo>
				<Label>Año</Label>
				<Select
					name="year"
					value={year}
					onChange={obtenerInformacion}

				>
				<option value="">-- Seleccione --</option>
				<option value="2021">2021</option>
				<option value="2020">2020</option>
				<option value="2019">2019</option>
				<option value="2018">2018</option>
				<option value="2017">2017</option>
				<option value="2016">2016</option>
				<option value="2015">2015</option>
				<option value="2014">2014</option>
				<option value="2013">2013</option>
				<option value="2012">2012</option>
				</Select>
			</Campo>
			<Campo>
				<Label>Plan</Label>
				<InputRadio 
					type="radio"
					name="plan"
					value="basico"
					checked={plan === "basico"}
					onChange={obtenerInformacion}

					/> Basico
				<InputRadio 
					type="radio"
					name="plan"
					value="completo"
					checked={plan === "completo"}
					onChange={obtenerInformacion}

					/> Completo
			</Campo>
			<Button type="submit">Cotizar</Button>
		</form>
	);
}

Formulario.propTypes = {
	guardarResumen: PropTypes.func.isRequired,
	guardarCargando:  PropTypes.func.isRequired
}

export default Formulario;