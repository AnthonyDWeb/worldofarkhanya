import { Alert } from "react-native";

// ------------- Init Server ----------------------------
export const initServer = async () => {
	try {
		const res = await fetch(`${process.env.SERVER_LOCAL_URL}`, {
			method: "GET",
		});
		const resJson = await res.json();
		console.log("initServer resJson", resJson);
		return resJson;
	} catch (error) {
		console.log("err", error);
	}
};
// ------------- Auth Request ----------------------------

// ------------- CRUD Request ----------------------------
export const getData = async (token: string) => {
    const newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imludml0w6kiLCJpYXQiOjE3MDIzMjIyODgsImV4cCI6MTcwNDkxNDI4OH0.6kL6JXnh0xXcCY9DSCxp72_PpXh6VmSgbyg_4hEEkYU";
	try {
		const res = await fetch(`${process.env.SERVER_LOCAL_URL}/users`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${newToken}`,
			},
		});
		const resJson = await res.json();
		console.log("getData resJson", resJson);
		return resJson;
	} catch (error) {
		console.log("err", error);
	}
};
// ------------- Upload image ----------------------------
