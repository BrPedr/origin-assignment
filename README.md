# Usage

This project requires `Node >=12` and `NPM >= 6`.

After you have cloned this repo, install the dependencies with:

```
npm install
```

You can then start the application running:

```
npm run dev
```

That's it. Just Access `http://localhost:1234` in your browser.

### Linting

```
npm run lint
```

### Testing

```
npm run test
```

# Functionalities
This project is composed by a Savings Page that allows the user to calculate how much money they need to save per month to achieve a total amount goal.
By setting a total amount on the respective input, you can change the month and the app will automatically calculate the value to save.
The number of the necessary deposits, as the amount to be deposited per month and the selected end month will be displayed at the bottom of the Card Component.
If you try to choose a month previous to the current month, an alert message will pop up at the screen with a warning.
