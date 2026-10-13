const request = require("supertest");
const expect = require("chai").expect;

process.env.NODE_ENV = "test"; // ensure server exports app
const app = require("../src/server");

/**
 * Integration tests for the Math API.
 * Uses Supertest for HTTP requests and Chai for assertions.
 */
describe("Math API", () => {
	/**
	 * Test the root route.
	 * Expects a 200 status and "Hello" response text.
	 */
	it("responds to the root route", async () => {
		const res = await request(app).get("/");
		expect(res.status).to.equal(200);
		expect(res.text).to.equal("Hello");
	});

	/**
	 * Test the /add route with query parameters.
	 * Expects HTTP status 200.
	 */
	it("returns status 200 for /hex", async () => {
		const res = await request(app).get("/hex?hex=ff00aa");
		expect(res.status).to.equal(200);
	});

	/**
	 * Test the /hex route for correct hex to rgb convertion.
	 * Expects the converted rgb value in JSON format.
	 */
	it("returns the converted rgb values in JSON format", async () => {
		const res = await request(app).get("/hex?hex=ff00aa");
		expect(res.status).to.equal(200);
		expect(res.body).to.deep.equal({
			r: 255,
			g: 0,
			b: 170
		});
	});

	it("returns an error for an invalid hex color.", async () => {
		const res = await request(app).get("/hex?hex=xyz");

		expect(res.status).to.equal(400);
		expect(res.body).to.have.property("error");
	})
});