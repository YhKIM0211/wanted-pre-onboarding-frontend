import axios from "./axios";

export const getToken = () => {
	const token = JSON.parse(localStorage.getItem('token'));
	return token;
}

export const createRequest = async (todo) => {
	const token = getToken();
	
	try {
		const res = await axios.post('/todos',
			JSON.stringify({ todo }), 
			{ headers: { 'Authorization': 'Bearer '+ token } }
		)
		console.log("create",JSON.stringify(res?.data));
		return [res?.status, res?.data];

	} catch (err) {
		console.log(err);
		return err;
	}
}

export const readRequest = async () => {
	const token = getToken();
	
	try {
		const res = await axios.get('/todos',
			{ headers: { 'Authorization': 'Bearer '+ token } }
		)
		console.log("read", JSON.stringify(res));
		return [res.status, res];

	} catch (err) {
		console.log(err);
		return err;
	}
}

export const updateRequest = async (id, todo, isDone) => {
	const token = getToken();

	try {
		const res = await axios.put(`/todos/${id}`,
			JSON.stringify({ todo, isCompleted: isDone }), 
			{ headers: { 'Authorization': 'Bearer '+ token } }
		)
		console.log("update",JSON.stringify(res?.data));
		return [res?.status, res?.data];

	} catch (err) {
		console.log(err);
		return err;
	}
}

export const deleteRequest = async (id) => {
    const token = getToken();
		
		try {
			const res = await axios.delete(`/todos/${id}`,
				{ headers: { 'Authorization': 'Bearer '+ token } }
			)
			console.log("delete",JSON.stringify(res));
			return res.status;

		} catch (err) {
			console.log(err);
			return err;
		}
}
