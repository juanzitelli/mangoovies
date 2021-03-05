import React from "react";
import styled from "styled-components";

type ButtonProps = {
	paintBlack: boolean;
};

const StyledStar = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.paintBlack ? "#000" : "#ccc")};
  span {
    font-size: 1rem;
  }
`;

type Props = {
	paintBlack: boolean;
	index: number;
	onStarClickHandler: (index: number, rating: number) => void;
	rating: number;
};

const Star = ({ paintBlack, index, onStarClickHandler, rating }: Props) => {
	return (
		<StyledStar
			paintBlack={paintBlack}
			key={index}
			onClick={() => onStarClickHandler(index, rating)}
		>
			<span>&#9733;</span>
		</StyledStar>
	);
};

export default Star;
