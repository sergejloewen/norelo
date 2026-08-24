# Norelo Project Structure

## Overview

Norelo is organized as a monorepo containing the product applications,
infrastructure, documentation, and repository tooling.

## Directory Structure

```text
backend/          Backend application
frontend/         Frontend application
infrastructure/   Deployment and infrastructure configuration
docs/             Technical documentation
.github/          GitHub workflows and repository configuration
```

## Backend

The Norelo backend is implemented using Java and Spring Boot.

The backend currently exposes a REST API and is organized around
the responsibilities of the application.

The current backend structure is intentionally minimal and will
evolve as additional functionality is introduced.

### Current Structure

```text
backend/
├── src/
│   ├── main/
│   │   └── java/
│   │       └── dev/norelo/backend/
│   │           ├── NoreloBackendApplication.java
│   │           └── api/
│   │               └── HealthController.java
│   │
│   └── test/
│       └── java/
│           └── dev/norelo/backend/
│               └── api/
│                   └── HealthControllerTest.java
│
├── pom.xml
├── mvnw
└── mvnw.cmd
```

The initial API endpoint is:

GET /api/health

which returns the current service status.
