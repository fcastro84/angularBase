# AngularBase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

# Football Competitions

*JSON API URL :*
`https://jsonmock.hackerrank.com/api/football_competitions?page=<pageNumber>`

## Expected Output for list

`<li>Competition {name} won by {winner} in year {year}</li>`

## Environment 

- Angular CLI Version: 16.2.2
- Default Port: 4200

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/1WAxxf03EtrUdnq3heRX2g/football.gif)

## Functionality Requirements

The main aim is to get a paginated list of football competitions and render their details in a list. The component must have the following functionalities:

- The component must get competitions by making an API GET call to URL `https://jsonmock.hackerrank.com/api/football_competitions?page=<pageNumber>` using the Angular HttpClient module. Here, `<pageNumber>` is the page number we want to get the data for.

- The response of the GET call will contain a ``total_pages`` field that denotes the number of pages of results available and a `data` field that is an array of competition records for the requested page. The sample format of the response is:

```
  {
      "page": "1",
      "per_page": 2,
      "total": 2,
      "`total_pages`": 1,
      "data": [
        {
          "name": "English Premier League",
          "country": "England",
          "year": 2016,
          "winner": "Chelsea",
          "runnerup": "Tottenham Hotspur"
        },
        {
          "name": "La Liga",
          "country": "Spain",
          "year": 2011,
          "winner": "Real Madrid",
          "runnerup": "FC Barcelona"
        }
    ]
  }
```

- On component mount, make a GET call to get the data for page 1 (i.e., API GET call to URL `https://jsonmock.hackerrank.com/api/football_competitions?page=1`.

- Retrieve `total_pages` from the response and render pagination buttons corresponding to each page starting from 1 to `total_pages`. Each button must be rendered as `<button>{k}</button>`, where `{k}` is the page number the button corresponds to, for example `<button>1</button>`, `<button>2</button>`, and so on until `<button>{total_pages}</button>`.

- All the buttons must be rendered in the section `<section data-test-id="page-number-buttons"></section>`.

- Clicking on a page button must get records for the corresponding page number and render them. For example, clicking on button 3 must make an API GET call to URL `https://jsonmock.hackerrank.com/api/football_competitions?page=3`, get the data, and render it.

- For the competitions returned by the API, you need to render the list `<ul data-test-id="football-competitions"></ul>`. This list should have a single `<li>` list item for each object in the array. The value of each `<li>` element should be `<li>Competition {name} won by {winner} in year {year}</li>` where {name}, {winner} and {year} are values retrieved from the corresponding competition object.

- For example, in the above data example, there are 2 competition objects in the array, so there will be 2 `<li>` elements inside the `<ul>` element:
    1. `<li>Competition English Premier League won by Chelsea in year 2016</li>`
    2. `<li>Competition La Liga won by Real Madrid in year 2011</li>`

## Testing Requirements

- The `<section>` containing all the buttons should have the data-test-id attribute `page-number-buttons`.

- The `<ul>` should have data-test-id attribute `football-competitions`.

# User Lists

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/CgD5M0JuOd1ffgjGhwyPzQ/users-list.gif)

## Functionality Requirements

There are 2 components in the app:

- DataForm component: This component is used to add a new item of type Song or Book to the list.

- DataList component: A reusable component that is used to render the list of Songs and the list of Books. Accepts the appropriate List and the dataType (One of "Song" or "Book") as input.

The app should have the following functionalities:

- The user can add items to the book list or the song list from the same form. Adding an item in the form at the top should add it to the respective list below.

- There are 3 required input fields - name, genre, creator, and a `type` input field having 2 options to choose if the current item being added is a book or a song.

- For this challenge, you can assume that each item is uniquely identified by its name. Tests take care of testing with unique names only.

- On choosing `Song`, render an extra input field `totalTime`. Initially, all fields should be empty.

- Clicking on `Add` button should add the item to the respective list and clear all the input fields.

- The DataList component renders each of book list and song list in a table having columns name, genre, creator of each item followed by a delete button. Clicking on the delete button should delete the respective item from the list. Song list has an extra column of `Time` to render `Total Time` information for the item.

- Book item should be added to `<table data-test-id="book-table">` as a `<tr>`.

- Song item should be added to `<table data-test-id="song-table">` as a `<tr>`.
 
- The interface for an item is defined in the file `src/types/Item.ts` having the following structure:

```
  interface Item {
    name: string;
    genre: string;
    creator: string;
    type: string;
    totalTime?: number;
  }
```



