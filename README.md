
# Kasongo Foods Ordering System

Welcome to the Kasongo Foods Ordering System! This project provides a simple web interface for users to log in or sign up to order food online. 

## Features

- **User Authentication**: Users can create an account or log in with their credentials.
- **Client-Side Validation**: Ensures that both username and password fields are filled before submission.
- **User Feedback**: Displays error messages for invalid inputs and success messages upon login or signup.
- **Add to Cart Functionality**: Users can add food items to their cart.
- **Checkout Process**: Users can proceed to checkout to finalize their orders.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).
- Basic understanding of HTML, CSS, and JavaScript.

### Installation

1. Clone the repository or download the HTML file.
2. Open the `index.html` file in your preferred web browser.

### File Structure

```
.
├── index.html     # The main HTML file for login/sign-up
└── st.css         # Stylesheet for styling the page
```

### Usage

1. Enter your username and password in the provided fields.
2. Click the **Login** button to authenticate or the **Sign Up** button to create a new account.
3. If any fields are empty, error messages will be displayed.
4. Successful login will redirect to the home page (index.html).

### Code Explanation

- **HTML Structure**: The page consists of a container with input fields for username and password, along with buttons for login and signup.
- **JavaScript Functions**:
  - `login()`: Validates the input, stores the username in local storage upon successful login, and redirects to the home page.
  - `signup()`: Validates the input and displays a success message for registration.

### Customization

Feel free to customize the styles in the `st.css` file to match the branding of Kasongo Foods.

### Contributing

Contributions are welcome! Please submit issues or pull requests for improvements or bug fixes.

### License

This project is open-source and available under the MIT License.

```