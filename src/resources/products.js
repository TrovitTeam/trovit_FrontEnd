import src01 from "../resources/Captura01.PNG";
import src02 from "../resources/Captura02.PNG";
import src03 from "../resources/Captura03.PNG";
import src04 from "../resources/Captura04.PNG";
import src05 from "../resources/Captura05.PNG";
import src06 from "../resources/Captura06.PNG";
import src07 from "../resources/Captura07.PNG";
import src08 from "../resources/Captura08.PNG";
import src09 from "../resources/Captura09.PNG";

export const products = makeProducts();

function makeProducts() {
	let pro = [];
	const list = [
		src01,
		src02,
		src03,
		src04,
		src05,
		src06,
		src07,
		src08,
		src09,
		src01,
		src02,
		src03
	];

	list.forEach(product => {
		const p = {
			id: 1,
			urls: product,
			title: "Product",
			description: "Description",
			reating: 2
		};
		pro.push(p);
	});
	console.log(pro);
	return pro;
}
