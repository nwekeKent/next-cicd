# Next.js CICD Project

A modern Next.js application with a complete CI/CD pipeline setup, including automated testing, linting, and deployment workflows.

## Features

- 🚀 Next.js 15 with App Router
- 📝 TypeScript support
- 🧪 Jest and React Testing Library for testing
- 🎨 Prettier for code formatting
- 🔍 ESLint for code linting
- 🐶 Husky for Git hooks
- 📋 Commitlint for commit message validation
- 🔄 GitHub Actions for CI/CD

## Getting Started

### Prerequisites

- Node.js 20.x
- Yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/next-cicd.git
   cd next-cicd
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build the application
- `yarn start` - Start the production server
- `yarn test` - Run tests
- `yarn test:watch` - Run tests in watch mode
- `yarn test:coverage` - Run tests with coverage report
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier

## Testing

The project uses Jest and React Testing Library for testing. Tests are located in the `src/app/__tests__` directory.

```bash
# Run tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

## Code Quality

### Linting

ESLint is configured with Next.js and Prettier plugins:

```bash
# Run ESLint
yarn lint
```

### Formatting

Prettier is used for code formatting:

```bash
# Format code
yarn format
```

### Git Hooks

Husky is set up with pre-commit hooks that:

- Run ESLint on staged files
- Format code with Prettier
- Run tests

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration. The pipeline:

1. Runs on push to main and pull requests
2. Sets up Node.js 20
3. Installs dependencies
4. Runs linting
5. Checks code formatting
6. Runs tests
7. Builds the application

## Project Structure

```
next-cicd/
├── src/
│   └── app/
│       ├── __tests__/     # Test files
│       ├── layout.tsx     # Root layout
│       ├── page.tsx       # Home page
│       └── globals.css    # Global styles
├── public/               # Static assets
├── .github/             # GitHub Actions workflows
├── .husky/              # Git hooks
└── jest.config.ts       # Jest configuration
```

## License

This project is licensed under the MIT License.
