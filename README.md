# Next.js Boilerplate

This is a boilerplate project for building modern web applications using Next.js. It comes pre-configured with a set of tools and technologies to help you get started quickly and efficiently.

## Features

- **Next.js**: Provides a powerful framework for building server-side rendered and static web applications, enabling better SEO and faster initial load times.
- **TypeScript**: Adds static typing to JavaScript, helping to catch errors early and improve code quality and maintainability.
- **Tailwind CSS with Shadcn**: Offers a utility-first CSS framework for rapid UI development, with Shadcn providing additional components and styles.
- **ESLint**: Ensures code quality by identifying and fixing problems in your JavaScript code, enforcing consistent coding standards.
- **Prettier**: Automatically formats your code to ensure a consistent style across the project, reducing the time spent on code reviews.
- **Jest**: Provides a robust testing framework to write and run unit tests, ensuring your code works as expected.
- **Storybook**: Allows you to develop and test UI components in isolation, improving component quality and reusability.
- **Commitizen**: Helps you write consistent and meaningful commit messages, making it easier to understand the project history.
- **Husky**: Manages Git hooks to automate tasks such as running tests and linters before commits, ensuring code quality.
- **GitHub Actions**: Automates workflows for CI/CD, running tests, and deploying your application, improving development efficiency.

## TODO List

<details>
<summary>Click to view planned features and enhancements</summary>

- [ ] **Add a Changelog Generator**  
      Use tools like `semantic-release`, `standard-version`, or `conventional-changelog-cli` to automate changelog generation. This will document feature changes, bug fixes, and other updates automatically in `CHANGELOG.md`.

- [ ] **Dockerize the Application**  
       Containerize the Next.js app using Docker for consistent development and deployment environments.

- [ ] **Integrate Sentry**  
       Add error tracking and performance monitoring with Sentry.

- [ ] **Set Up Dependabot**  
       Automate dependency updates for improved security and maintenance.

- [ ] **Implement i18n**  
       Add internationalization support using a library like `next-i18next`.

- [ ] **Choose a Data Fetching/State Management Library**  
       Decide on and integrate one of the following:

  - 🔄 **Redux Toolkit Query**
  - ⚛️ **React Query**
  - 🛰️ **Apollo Client**

- [ ] **Enhance SEO**  
       Improve SEO with metadata, Open Graph tags, and schema markup.

- [ ] **Add Dark and Light Mode**  
       Implement a theme toggle using Tailwind's `darkMode` utility.

- [ ] **Generate Documentation**  
       Use [Typedoc](https://typedoc.org) to generate API and component documentation.

</details>

## Getting Started

### Prerequisites

- Node.js >= 18.18.0
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hknab/nextjs-boilerplate.git
   cd nextjs-boilerplate
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

4. Build the application for production:

   ```bash
   npm run build
   ```

5. Start the production server:

   ```bash
   npm run start
   ```

### Running Tests

6. Run the tests:

   ```bash
   npm run test
   ```

### Linting and Formatting

7. Lint the code:

   ```bash
   npm run lint
   ```

8. Fix lint:

   ```bash
   npm run lint:fix
   ```
