import { Alert } from "react-native";
import { resProps } from "../../types";
// const URL = process.env.LOCAL_URL;
const URL = process.env.SERVER_URL;
// const URL = process.env.SERVER_LOCAL_URL;

// ------------- Init Server ----------------------------
export const initServer = async () => {
	try {
		const res = await fetch(`${URL}`, {
			method: "GET",
		});
		const resJson = await res.json();
		return resJson;
	} catch (error) {
		console.log("err", error);
	}
};

// ------------- Auth Request ----------------------------
export const login = async (body: {}) => {
	const res = await fetch(`${URL}/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": "<calculated when request is sent>",
		},
		body: JSON.stringify(body),
	});
	return await res.json();
};
export const loginToken = async (token: string) => {
	const res = await fetch(`${URL}/auth/logintoken`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": "<calculated when request is sent>",
			Authorization: `Bearer ${token}`,
		},
	});
	return await res.json();
};
export const register = async (body: {}) => {
	const res = await fetch(`${URL}/auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": "<calculated when request is sent>",
		},
		body: JSON.stringify(body),
	});
	return await res.json();
};

// ------------- CRUD Request ----------------------------
export const getData = async (route: string, token?: string) => {
	try {
		const res = await fetch(`${URL}/${route}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return await res.json();
	} catch (error) {
		console.log("err", error);
	}
};

export const setData = async (
	body: any,
	route: string,
	token: string,
	id?: string
) => {
	try {
		const res = await fetch(`${URL}/${route}/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(body),
		});
		return await res.json();
	} catch (error) {
		console.log("err", error);
	}
};

export const postData = async (
	body: {},
	route: string,
	token: string,
	id?: string
) => {
	const res = await fetch(`${URL}/${route}${id ? `/${id}` : "/"}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": "<calculated when request is sent>",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(body),
	});
	return await res.json();
};

export const deleteData = async (route: string, token: string, id?: string) => {
	const res = await fetch(`${URL}/${route}/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"Content-Length": "<calculated when request is sent>",
			Authorization: `Bearer ${token}`,
		},
	});
	return await res.json();
};
