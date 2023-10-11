# React Router Challenge with Contacts I

Here's [what you are building](https://www.loom.com/share/a375773f8b57430d87af0cab8bac172b).

It doesn't have to match exactly, but it should be close. Styles 💄 R up 2 U.

## Requirements

- [ ] Use `react-router-dom` to create a multi-page app. One page loads the list of contacts and the other page displays the details of a single contact. You must use **loaders** with the `Loading` component. You must also create a fallback `Error` component that displays when there is an error.

## Bonus

Include testing ✅.

## Getting Started

Run `npm install` to install all dependencies. This already includes `react-router-dom`.

You will need to create a `db.json` file in the root of the project. This will allow `json-server` to serve this data as a fake back-end server with full CRUD capabilities.

Paste [this data](https://gist.github.com/manavm1990/b910fcf25e0db4b31ea1759dac80793b) into `db.json`.

Then, you'll do: `npm run json-server` to start the fake RESTful API server. It's been set with a `delay` of `1000`ms, so you can see the loading state of the app.

Then, you'll do: `npm start` to start the React app. Make sure to do that from a separate terminal window.
