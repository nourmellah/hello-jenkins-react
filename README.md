# Jenkins CI/CD – React TypeScript Hello World

## Project description
This project demonstrates a complete local CI/CD pipeline using Jenkins for a simple React + TypeScript application that displays **Hello World**.

The pipeline performs:
- Source code checkout
- Dependency installation
- Linting
- Automated tests
- Production build
- Docker image creation
- Local deployment using Docker
- Smoke test

## Application
- React + TypeScript (Vite)
- Single page displaying **Hello World**

## Prerequisites
- Docker
- Git
- Node.js (only for local development, not required by Jenkins)

## Jenkins setup (local)
Jenkins is run locally using Docker with Node.js and Docker CLI available inside the container.

Main Jenkins job configuration:
- Type: Pipeline
- Definition: Pipeline script from SCM
- SCM: Git
- Branch: main
- Script path: Jenkinsfile

## CI/CD Pipeline stages
1. Checkout source code from GitHub
2. Install dependencies (npm ci)
3. Lint the code
4. Run automated tests
5. Build the React application
6. Archive build artifacts
7. Build Docker image
8. Deploy container locally
9. Smoke test via HTTP request

## Verification
After a successful Jenkins build:
- Open http://localhost:3001
- The page should display **Hello World**

## Repository content
- Jenkinsfile: Jenkins pipeline definition
- Dockerfile: React build and Nginx runtime image
- src/: Application source code
