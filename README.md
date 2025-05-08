# Express.js Application

This is an Express.js application scaffolded with express-generator and configured with development tools.

## Setup Commands

This project was set up using the following commands:

1. `npx express-generator --no-view --git ./`
   * Creates a new Express application in the current directory
   * `--no-view` flag skips view engine setup (for API-only applications)
   * `--git` flag adds a .gitignore file
   * Generated basic Express app with routing structure and error handling

2. `npm install`
   * Installs all the dependencies listed in package.json
   * Sets up the project with required Express modules and middleware

3. `npm start`
   * Starts the Express server using the script defined in package.json
   * Default script runs `node ./bin/www` to launch the application

4. `npm i --save-dev nodemon`
   * Installs nodemon as a development dependency
   * nodemon automatically restarts the server when file changes are detected
   * Improves development workflow by eliminating manual server restarts

5. `npx eslint --init`
   * Initializes ESLint configuration for the project
   * Prompts for choices about coding style, environment, and formatting rules
   * Creates a configuration file (.eslintrc.js or similar) based on selections

6. `npm install eslint --save-dev`
   * Installs ESLint as a development dependency
   * Required for code linting and style enforcement

7. `npm install express --save`
   * Installs ESLint as a development dependency
   * Required for code linting and style enforcement
   
## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server
4. For development, you can add a script in package.json:

```json
"scripts": {
  "dev": "nodemon ./bin/www"
}
```

Then use `npm run dev` to start the server with nodemon

## Project Structure

* `bin/www`: Entry point that starts the HTTP server
* `app.js`: Main application file that sets up Express
* `routes/`: Directory containing route handlers
* `public/`: Static files directory

## Development Tools

* **Express**: Fast, unopinionated, minimalist web framework for Node.js
* **nodemon**: Utility that monitors changes and automatically restarts the server
* **ESLint**: Linting tool to maintain code quality and consistency

## License

[Add your license information here]