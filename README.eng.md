
# Step Project Forkio (on Gulp)

Welcome to the project developed using Gulp for automating the build process of a web application. This project was created by a team of two and includes tasks for compiling SCSS, minifying JavaScript and images, and setting up a local server.

## About the Project

The project includes:
- **Compiling SCSS to CSS** with autoprefixing and minification.
- **Minifying JavaScript** files.
- **Optimizing images**.
- **Setting up a local server** with automatic updates when files change.

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository URL>
   cd <repository name>
   ```

2. **Install dependencies**:

   Make sure you have Node.js and NPM installed. Run the following command:

   ```bash
   npm install
   ```

3. **Build and run instructions**

   To build the project and start the local server, use the following command:

   ```bash
   gulp dev
   ```

   This command will run all the necessary build tasks and start the server with automatic browser updates.

## Available Gulp Tasks

| Command       | Description                                                                                   |
|---------------|-----------------------------------------------------------------------------------------------|
| `gulp clean`  | Cleans the `dist` folder.                                                                     |
| `gulp moveHTML` | Moves HTML files to the `dist/` folder.                                                     |
| `gulp moveJS` | Minifies and moves JavaScript files to `dist/js/`.                                            |
| `gulp moveCSS` | Compiles SCSS to CSS, minifies, and moves CSS files to `dist/css/`.                          |
| `gulp imagemin` | Minifies images and moves them to `dist/img/`.                                              |
| `gulp build`  | Runs `clean`, `moveHTML`, `moveJS`, `moveCSS`, and `imagemin` tasks.                          |
| `gulp server` | Starts a local server with BrowserSync and watches for file changes.                          |

## Notes

### Project Team

This project was developed by a team of two, each contributing significantly to the development and automation processes.

Make sure you have the latest version of Node.js and NPM installed.
To update dependencies, use the command `npm update`.
For questions or additional information, feel free to reach out!
```