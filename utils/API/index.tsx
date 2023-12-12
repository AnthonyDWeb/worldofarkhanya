import { Alert } from "react-native";
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
export const login = async (body:{}) => {
    try {
        const res = await fetch(`${URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": "<calculated when request is sent>",
            },
            body: JSON.stringify(body)
        });
        const resJson = await res.json()
        return resJson
    } catch { return Alert.alert("login error") };
};
export const register = async (body:{}) => {
    try {
        const res = await fetch(`${URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": "<calculated when request is sent>",
            },
            body: JSON.stringify(body)
        });
        const resJson = res.json()
        return resJson
    } catch { return Alert.alert("register error") };
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

// ------------- Upload image ----------------------------
