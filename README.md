# Assignment 1: Automated Container Build Pipeline

This repository contains a simple Node.js "Hello World" web application packaged with Docker and automated with GitHub Actions.

## Objective

Grasp the fundamentals of containerisation and automated workflows by building and publishing a container image whenever code is pushed to the `main` branch.

## What Is Included

- Basic Node.js web application
- Dockerfile to package and run the app
- GitHub Actions workflow triggered on push to `main`
- Docker Hub image build and push automation

## Run Locally

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

Expected response:

```text
Hello World from Automated Container Build Pipeline!
```

## Run Tests

```bash
npm test
```

## Build And Run With Docker

Build the image:

```bash
docker build -t automated-container-build-pipeline .
```

Run the container:

```bash
docker run --rm -p 3000:3000 automated-container-build-pipeline
```

Open:

```text
http://localhost:3000
```

## GitHub Actions Setup

The workflow file is located at:

```text
.github/workflows/docker-image.yml
```

It runs whenever code is pushed to the `main` branch and pushes the Docker image to Docker Hub.

Before pushing to GitHub, add these repository secrets in GitHub:

| Secret name | Value |
| --- | --- |
| `DOCKERHUB_USERNAME` |  Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token |

The image will be pushed as:

```text
DOCKERHUB_USERNAME/automated-container-build-pipeline:latest
DOCKERHUB_USERNAME/automated-container-build-pipeline:sha-<commit-sha>
```
## Deliverables

- GitHub Repository: https://github.com/shankar212/Automated-Container-Build-Pipeline
- Successful GitHub Actions Run: https://github.com/shankar212/Automated-Container-Build-Pipeline/actions.
- Docker Hub Image: https://hub.docker.com/r/shankerathod/automated-container-build-pipeline

## Screenshots

Screenshots are available in the `screenshots/` folder.
## Assignment Deliverables

Submit:

- GitHub repository link containing the app code, Dockerfile, and GitHub Actions workflow
- Link to the successful GitHub Actions run
- Screenshots of:
  - Local app running in browser
  - Docker container running
  - Successful GitHub Actions workflow
  - Docker Hub image repository showing the pushed image
