import axios from "axios";

const API = "http://localhost:5000";

export const getArticles = async () => {
	console.log("Buscando...");
	const res = await axios.get(`${API}/articles`);

	/*
		we make an array that will store the filter articles based
		on the story_id saved in the localStorage array
	*/
	let arr;
	// we save the localStorage values in an var with JSON.parse so the var can be converted to an arr
	let removeds = JSON.parse(localStorage.getItem("Removeds"));
	if (removeds) {
		// we use the .filter callback
		arr = res.data.filter((data) => {
			// first check if the localStorage var is an array so we can use the include method
			if (Array.isArray(removeds)) {
				if (!removeds.includes(data.story_id)) {
					return data;
				}
			} else {
				// if the localStorage var is not an array that means the user has just deleted one post, so the filter just applied to
				// that particular story_id
				if (data.story_id !== removeds) {
					return data;
				}
			}
		});
		return arr;
	}
	// if the localStorage is null then we just retrieve all the articles
	return res.data;
};
