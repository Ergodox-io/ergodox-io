# ergodox.io
The new home of the Ergodox Project

## Getting the website set up on your computer

1. Fork the repository.
2. Clone the repository from your fork:

	```bash
	git clone git@github.com:your-username/ergodox-io.github.io.git
	cd website
	```

3. Install Ruby:

  - ruby `v2.2.1` or greater than

3. Run bundle in the project directory

	```bash
	bundle install
	```

4. Run the site locally
  ```bash
    jekyll serve -w
  ```
  *once compiled the site will be accessible at localhost:4000*

## How to deploy
```bash
rake deploy:ghpages
```