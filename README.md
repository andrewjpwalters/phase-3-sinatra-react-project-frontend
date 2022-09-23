# Movie Watch List by Andrew Walters

Phase 3 final project for Flatiron School

## Installation

Run bundle install to install dependencies on API:

```bash
bundle install
```

Run npm install to install dependencies on React frontend: 

```bash
npm install
```

Start the server: 

```bash
bundle exec rake server
```

Start the application:

```bash
npm start
```

Seed database with sample data:

```bash
bundle exec rake db:seed
```

## Usage

This is an application built with React and an API built with Active Record and Sinatra. The database contains two tables--movies and genres--with a one to many association. The application functions as a movie wish list. To create a new genre, enter in the input under "Create a New Genre." To add a new movie, add a title, select a genre, add a year and a comment under "Add a New Movie." To filter the movies by genre, pick a genre from the select under "Filter Movies by Genre." You may delete any movie from the list or edit any comment on any movie by selecting "Delete Movie" and "Edit Comment" respectively on the proper movie card. 

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

React Bootstrap (https://react-bootstrap.github.io/)

React Router Bootstrap (https://github.com/react-bootstrap/react-router-bootstrap)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).