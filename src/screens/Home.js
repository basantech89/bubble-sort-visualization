import React, { useState } from "react";
import './home.css';

const Home = () => {
	let thisElement;
	let nextElement;
	const array = [8, 2, 9, 3, 1, 0, 10, 7];
	const [nums, setNums] = useState([...array]);
	const styled_array = nums.map((num, index) =>
		<span id={index} key={index} className="num">
			{num}
		</span>
	);

	const swapNumbers = (i, j) => {
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	};

	const sortArray = () => {
		let isSorted = true;
		let p = Promise.resolve();
		for (let i = 0; i < array.length - 1; i++) {
			p = p.then(() => {
				if (thisElement) {
					thisElement.classList.remove('animate');
				}
				if (nextElement) {
					nextElement.classList.remove('animate');
				}
				thisElement = document.getElementById(i);
				nextElement = document.getElementById(i + 1);
				thisElement.classList.add('animate');
				nextElement.classList.add('animate');
				if (array[i] > array[i + 1]) {
					isSorted = false;
					setTimeout(() => swapNumbers(i, i + 1), 600);
				}
				setNums([...array]);
				return new Promise((resolve) => {
					setTimeout(resolve, 2000, i + 1);
				})
			});
		}
		p.then(() => {
			if (!isSorted) {
				sortArray();
			}	else {
				// setNums(array);
			}
		});
	};

	return (
		<div style={{ margin: '40px' }}>
			<button onClick={sortArray}> Start Visualization </button>
			<div className="container">
				{styled_array}
			</div>
		</div>
	);
};

export default Home;
