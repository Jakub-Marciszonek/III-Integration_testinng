# Math API – Integration Testing

This project demonstrates unit and integration testing using **Express.js**, **Mocha**, **Chai**, and **Supertest**. It includes a REST API that converts hexadecimal color codes into RGB values.

## Project Structure

```text
.
├── src/
│   ├── server.js
│   └── math.js
├── test/
│   ├── server.test.js
│   └── math.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Usage

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/Jakub-Marciszonek/III-Integration_testinng
cd https://github.com/Jakub-Marciszonek/III-Integration_testinng
```

Install the dependencies:

```bash
npm install
```

### Running Tests

```bash
npm test
```

The tests cover the API endpoints and the hexadecimal-to-RGB conversion function.

### Starting the Development Server

```bash
npm run dev
```

The server runs at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### GET /

Returns a welcome message.

**Example response:**

```text
Hello
```

### GET /hex

Converts a hexadecimal color code into RGB values.

**Example request:**

```http
GET /hex?hex=ff00aa
```

**Example response:**

```json
{
  "r": 255,
  "g": 0,
  "b": 170
}
```

The API supports three-digit (`#RGB`) and six-digit (`#RRGGBB`) hexadecimal color codes, with or without the `#` prefix.

**Error handling:** Invalid hexadecimal values return HTTP `400 Bad Request` with a JSON error message.

## Testing

The project includes:

- **Unit tests:** Verify the `hexToRgb()` function using valid and invalid inputs.
- **Integration tests:** Verify HTTP status codes, API responses, and error handling using Supertest.

## Technologies

- Node.js
- Express.js
- Mocha
- Chai
- Supertest