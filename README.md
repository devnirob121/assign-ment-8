# Donation React.js Project

This project is a donation platform built with React.js, allowing users to browse and make donations to various causes. It features three main pages: Home, Donation, and Statistics.

## Features

### 1. Home Page with Donation Cards

- Displays a grid of donation cards, each representing a donation opportunity with a title, description, and an associated image.
- Clicking on a card redirects the user to the donation single page.

### 2. Donation Single Page

- Provides detailed information about a donation, including title, description, image, and a button to initiate the donation process.
- Users can enter the donation amount and confirm the donation.

### 3. Donation Process

- Allows users to make donations via a button on the donation single page.
- Utilizes a mock payment system for testing purposes.

### 4. Donations Page

- Displays a list of items that the user has already donated to, serving as a record of the user's contribution history.

### 5. Statistics Page with Recharts

- Provides visual representation of the donation progress using [Recharts](https://recharts.org/en-US).
- Includes a chart showing the percentage of donations given and the remaining funds available for donation.

## Additional Packages

- [PropTypes](https://www.npmjs.com/package/prop-types): Used for typechecking React props to ensure they conform to the expected data type.

- [SweetAlert2](https://sweetalert2.github.io/): Provides attractive and customizable alert dialogs to enhance the user experience.

- [json-server](https://www.npmjs.com/package/json-server): Simulates a REST API using a JSON file, which can be useful for testing and development.

## Live Project

Visit the live project: [DonationSPA](https://donationspa.netlify.app/)

## Technologies Used

- React.js
- React Router
- Mock Payment System (for testing)
- [Recharts](https://recharts.org/en-US)
- PropTypes
- SweetAlert2
- json-server

## Deployment

To run this project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.
4. For the mock server, run `json-server --watch db.json --port 5000`.

For production deployment, additional steps may be required, including setting up a database and integrating a real payment gateway.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/YourFeatureName`).
3. Make your changes and commit them (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Usage

1. Open the project in your code editor.
2. Run the development server with `npm start`.
3. Navigate to the specified localhost address in your web browser.
4. Explore the donation opportunities, make donations, and view your donation history.

## Acknowledgements

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Recharts](https://recharts.org/en-US)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [SweetAlert2](https://sweetalert2.github.io/)
- [json-server](https://www.npmjs.com/package/json-server)
