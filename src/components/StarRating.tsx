import React from "react";
import Star from "./Star";
import styled from "styled-components";

const StyledStarRating = styled.div<{ active: boolean }>`
  background: lightcyan;
  padding: 1rem;
  border-radius: 10px;
  display: inline-block;
`;

type Props = {
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
	active: boolean;
	currentRating: number;
	setCurrentRating: React.Dispatch<React.SetStateAction<number>>;
};

const StarRating = ({
	setActive,
	active,
	currentRating,
	setCurrentRating
}: Props) => {
	const onStarClickHandler = (index: number, rating: number) => {
		setCurrentRating(rating);
		setActive(currentRating !== rating);
	};

	return (
		<StyledStarRating active={active}>
			{active ? <span>Active</span> : <span>Inactive</span>}
			{[...Array(5)].map((star, index) => {
				const indexTimesTwo = index * 2;
				const starIndividualRating = indexTimesTwo + 2;
				index += 1;
				return (
					<Star
						key={index}
						index={index}
						rating={starIndividualRating}
						onStarClickHandler={onStarClickHandler}
						paintBlack={starIndividualRating <= currentRating}
					/>
				);
			})}
		</StyledStarRating>
	);
};

export default StarRating;
