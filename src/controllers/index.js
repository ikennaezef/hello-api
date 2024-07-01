import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const helloController = async (req, res) => {
	try {
		const { visitor_name } = req.query;
		if (!visitor_name) {
			return res
				.status(400)
				.json({ message: "Visitor name field is missing!" });
		}

		const clientIP = req.socket.remoteAddress;

		const response = await axios.get(
			`https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=207.97.27.239`
		);
		const data = await response.data;

		res.status(200).json({
			client_ip: clientIP,
			location: data?.location?.name,
			greeting: `Hello, ${visitor_name}, the temperature is ${data?.current?.temp_c} in ${data?.location?.name}.`,
		});
	} catch (error) {
		console.log("Error -->", error?.message);
		res.status(500).json({ message: "An error occured!" });
	}
};
