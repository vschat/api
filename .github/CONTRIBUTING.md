# Contributing Guidelines

Instructions to get set up with contributing.

## Local Deployment Instructions

Here are some instructions to get set up with the API locally.

1. First, you need to fork and download the code. Press the fork button on the repo, and create a new branch, with the feature name. After that, inside your desired folder, run the command `git clone https://github.com/vschat/api`.
   > Make sure you're working from your branch!
2. Next, you need to install all the dependencies we use. To do so, simply go to your terminal, and run the command `yarn`, as we use the Yarn package manager. Please make sure to not use NPM, when installing the dependencies.
3. Finally, you can use the several `package.json` scripts, to start the project, and contribute.
4. Before you continue, ensure the script `lint` was ran, which will lint your files, to ensure your code is the same style as in the codebase. If you do not do this, your pull request will be denied.
5. Once your code is pushed, create a pull request, requesting to merge your changes into the `master` branch. It will be reviewed by the maintainers.

### Script Index

| Script Name | Description                                       |
| ----------- | ------------------------------------------------- |
| start       | To compile the project, and execute it.           |
| dev         | To directly run the project, in development mode. |
| lint        | To lint the project's files, using Prettier.      |
| build       | To compile the TypeScript.                        |
