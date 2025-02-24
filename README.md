<h1>TRX Dashboard UI</h1>

<h2>Table of Contents</h2>

- [Setup Instructions](#setup-instructions)
- [Architecture Overview](#architecture-overview)
- [Choice of Technologies and Reasoning](#choice-of-technologies-and-reasoning)
- [Assumptions Made](#assumptions-made)
- [Future Improvements](#future-improvements)
- [Testing Strategy and Core Component Identification](#testing-strategy-and-core-component-identification)

<h2>Setup Instructions</h2>
<h3>Prerequisites</h3>

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

<h2>Installation Steps</h2>

1. Clone the repository:
   ```sh
   git clone https://github.com/jules-vinzon/trx-dashboard-ui.git
   cd trx-dashboard-ui

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install

3. Configure environment variables:
- Copy the `.env.example` file and rename it to `.env.local`
- Fill in necessary environment variables

4. Start the development server:
   ```sh
   npm run dev
   # or
   yarn run dev

<h2>Architecture Overview</h2>

 The `trx-dashboard-ui`is built using a component-based approach with React and Next.js. The key architectural aspects include:
 - Next.js framework for server-side rendering and optimized performance
 - Component-based UI using React and Ant Design
 - State management handled via Redux
 - API integration through Axios
 - Authentication and authorization using JWT
 - MQTT integration for real-time transaction updates

<h2>Choice of Technologies and Reasoning</h2>

| Technology | Purpose |
|----------|-----------------|
| Next.js  | Server-side rendering (SSR) for better performance and SEO  |
| React.js  | Component-based UI development  |
| Ant Design | Pre-built UI components for a consistent and professional look|
| Redux | Centralized state management |
| Axios | Handling API requests |
| MQTT.js | Real-time transaction updates |\
| Jest & React Testing Library | Ensuring application reliability through testing|

These choices ensure maintainability, scalability, and performance optimization.
 
<h2>Assumptions Made</h2>

- Users have valid API credentials configured in `.env.local`
- The backend provides structured API responses as expected
- Users have MQTT brokers correctly set up and accessible
- Application will be deployed in a cloud environment supporting Next.js apps

<h2>Future Improvements</h2>

- **Enhance authentication**: Implement OAuth support for broader authentication options
- **Improve UI/UX**: Add more interactive elements and animations for better usability
- **Optimize API calls**: Implement caching and pagination for API requests
- **Real-time error handling**: Improve error feedback for API and MQTT failures
- **Upgrade Features**: Implement more features related to the application

<h2>Testing Strategy and Core Component Identification</h2>
<h3>Core Components Identified</h3>

- Dashboard Page: Displays real-time transaction updates
- Table Component: Renders transactions dynamically
- MQTT Integration: Handles real-time updates
- Authentication Component: Manages user login and session

<h4>Testing Approach</h4>

1. Unit Tests
   - Test individual components like buttons, tables, and modals
   - Ensure API response handling is correct
2. Integration Tests
   - Test API calls and Redux state updates
   - Verify UI interactions work as expected
3. End-to-End Tests
   - Test full user workflows (e.g., login, viewing transactions) and make sure it is responsive

To run tests:

```sh
   npx jest --env=jsdom

