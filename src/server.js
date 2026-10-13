const express = require("express");
const mathlib = require("./math");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello"));

app.get("/hex", (req, res) => {
	try {
		const hex = req.query.hex;

		const rgb = mathlib.hexToRgb(hex);
		res.json(rgb)
	} catch (err) {
		res.status(400).json({ error: err.message });
	}

});

if (process.env.NODE_ENV !== "test") {
	app.listen(port, () => console.log(`Server: localhost:${port}`));
}

module.exports = app;
