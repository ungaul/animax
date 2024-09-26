
# Animax - Anime Streaming Website

Welcome to the GitHub repository for Animax, a premier anime streaming website. This project allows users to stream their favorite anime series and movies with a user-friendly interface.

## Features

- **Vast Anime Library**: Access a wide range of anime series and movies.
- **High-Quality Streaming**: Enjoy high-definition streaming for a superior viewing experience.
- **User Profiles**: Create and manage user profiles.
- **Watchlist**: Add your favorite anime to a personal watchlist.
- **Search Functionality**: Easily search for your favorite anime by title, genre, or rating.
- **Subtitles**: Multiple subtitle options for various languages.
- **Recommendations**: Personalized recommendations based on viewing history.
- **User Ratings and Reviews**: Rate and review anime series and movies.
- **Secure**: User authentication and secure data handling.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB (for user data and anime metadata)
- A video streaming server (e.g., Nginx with RTMP module)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/emlncvsr/animax.git
    cd animax
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your environment variables. Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    STREAMING_SERVER_URL=your_streaming_server_url
    SERVER_PORT=your_desired_port
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

### User Registration and Login

1. Navigate to the registration page.
2. Create an account by providing your details.
3. Log in using your credentials.

### Browsing and Streaming

1. Browse the anime library by categories, popular titles, or search.
2. Select an anime to view its details.
3. Click the "Play" button to start streaming.

### Managing Watchlist

1. Navigate to the anime you want to add.
2. Click the "Add to Watchlist" button.
3. Access your watchlist from your profile.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Streaming**: Nginx with RTMP module or similar

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions!