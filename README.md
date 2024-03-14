# Next.js Post Project

![Next.js Logo](https://cdn.worldvectorlogo.com/logos/next-js.svg)

This is a simple Next.js project for managing posts. The project includes features such as fetching and displaying posts from a backend server, viewing individual post details, and error handling for invalid post IDs.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

git clone https://github.com/your-username/next-js-post-project.git

2. Navigate into the project directory:

cd next-js-post-project

3. Install dependencies:

npm install

## Usage

Once the dependencies are installed, you can run the project locally:

1. Start the Next.js development server:

npm run dev


2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the project.

## Project Structure

The project follows a simple structure:

- `pages/`: Contains Next.js pages, including the homepage (`index.tsx`), posts page (`posts.tsx`), and individual post page (`post/[id].tsx`).
- `components/`: Contains React components used throughout the project, such as `Header.tsx`, `Footer.tsx`, `Posts.tsx`, and `Post.tsx`.
- `api/`: Contains the backend API route for fetching posts (`data.ts`).
- `public/`: Contains static assets, such as images and fonts.
- `styles/`: Contains global CSS styles and theme settings.

## Technologies Used

- Next.js: A React framework for building server-side rendered and statically generated web applications.
- React.js: A JavaScript library for building user interfaces.
- MySQL: A relational database management system used for storing and retrieving post data.
- Tailwind CSS: A utility-first CSS framework used for styling components.
- Jest: A JavaScript testing framework used for unit testing components and utility functions.
- GitHub: Version control and collaboration platform for managing project code.

## Contributing

Contributions to this project are welcome! If you have any suggestions, bug fixes, or new features to propose, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute the code for personal or commercial use.