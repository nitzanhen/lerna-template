# Lerna template

This project contains a working, example monorepo, whose options and configurations can be references when creating new projects.

## Features

- A Lerna monorepo, with projects for `client`, `backend` and `common` code under the `packages` directory.
- `client` is a base React project, handled by [vite](https://vitejs.dev/).
- `backend` is a very simple Express server.
- `common`, for common code, is already imported by both the client and the backend.
- Everything written in Typescript.
- Eslint - with a config tailored for projects with Typescript, React and express.
- Prettier - hooked to to eslint.
- The project is configured for optimal developer experience.

## Notes

- Some of the configs and options here are applicable for many projects, not necessarily ones using a monorepo; in particular, the eslint config is very useful.
- As is the convention, Lerna (and yarn workspaces) treat any directory under `packages` as a package.
- In most cases, **cloning this template and writing a project on top of it directly is discouraged**. Most projects, specifically monorepos, require particular configuration and thought when initialized, and simply cloning this template (or any other template, for that matter) can introduce bugs or unwanted results that create problems for the developer, immediate or silent. Instead, it is encouraged that this template be used as a reference, and developers go file-by-file (there are not many), reviewing the configurations and copying over only what is needed, modifying paths and other options for the new project.<br/>
As a side bonus, going file by file is a good exercise for the developer, for gaining proficiency and an understanding in the tools that eventually make up their project.