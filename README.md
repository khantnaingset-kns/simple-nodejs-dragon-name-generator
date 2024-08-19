**Dragon Name Generator**
==========================

A simple Node.js application that generates dragon names based on gender.

**Getting Started**
---------------

### Installation

1. Clone the repository: `git clone https://github.com/your-username/dragon-name-generator.git`
2. Install dependencies: `npm install`

### Running the Application

1. Start the server: `npm start`
2. Open a web browser and navigate to `http://localhost:3000`

### Usage

To generate a dragon name, send a GET request to `http://localhost:3000/:gender`, where `:gender` is either `male` or `female`.

Example: `http://localhost:3000/male`

The response will be a JSON object with a single property `name`, containing the generated dragon name.

**API Endpoints**
---------------

### GET /:gender

* `:gender`: `male` or `female`
* Response: `{ name: <generated_dragon_name> }`

**Dependencies**
--------------

* `express`: Node.js web framework
* `helmet`: Security middleware for Express
* `fantasy-name-generator`: Library for generating fantasy names

**License**
-------

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

**Contributing**
------------

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

**Author**
------

Khant Naing Set (WOps)