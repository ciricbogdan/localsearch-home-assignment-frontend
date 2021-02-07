# localsearch-home-assignment-frontend

This is the localsearch home assignment frontend writtend in React

### Running the app

First you need to create and `.env` file with the following properties

```
    REACT_APP_API_PLACES_URL=http://localhost:8080/places 
```

NOTE*: The url must be an absolute path and the url must not end with an `/`

Set your terminal to the project root and run the following commands

```
    npm install
    npm start
```

### Functionalities

The frontend part is a single page app. It holds a page containing a search form for the places. It performs an http GET
method to the provided API url. It will search by the ID entered in the search form. If the place with the provided ID
is not found it will invoke an alert, since the ID is mandatory. If the place is not found, the app will also invoke an
alert. If the place exists with the entered ID, it will display the place information on the screen.