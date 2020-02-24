import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
	background-color: #26C6DA;
	padding:10px;
	font-weight:bold;
	color:#ffffff;
`;

const TextHeader = styled.h1`
	text-align:center;
	font-size:20px;
	margin:0;
	font-family:'Slabo 27px', serif;
`;

const Header = ({titulo}) => {
	return (
		<ContenedorHeader>
			<TextHeader>{titulo}</TextHeader>
		</ContenedorHeader>
	);
}



Header.propTypes ={
	titulo: PropTypes.string.isRequired
}
export default Header;