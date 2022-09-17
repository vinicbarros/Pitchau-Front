import styled from 'styled-components';
import { useState } from 'react';

export default function PriceParcelas({
	index,
	total,
	frase,
	math,
	clicado,
	setClicado,
}) {
	const [parcelaClicada, setParcelaClicada] = useState(false);

	function escolheParcela() {
		if (parcelaClicada === false) {
			setParcelaClicada(!parcelaClicada);
			setClicado([...clicado, index]);
		} else {
			setParcelaClicada(!parcelaClicada);
			setClicado(clicado.filter((value) => value !== index));
		}
	}

	return (
		<>
			<Parcela parcelaClicada={parcelaClicada} onClick={escolheParcela}>
				{frase} {(total * math).toFixed(2).replace('.', ',')}
			</Parcela>
		</>
	);
}

const Parcela = styled.div`
	padding-left: 10px;
	width: 130px;
	height: 20px;
	margin-left: 5px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 10px;
	font-weight: 700;
	color: ${({ parcelaClicada }) =>
		parcelaClicada ? 'white' : 'rgb(239, 99, 50)'};
	border-radius: 3px;
	border: 1px solid #d5d5d5;
	font-family: 'Poppins';

	background-color: ${({ parcelaClicada }) =>
		parcelaClicada ? 'rgb(2, 153, 5)' : 'white'};
`;
