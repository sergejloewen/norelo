# ADR-001: Use a Monorepo

## Status

Accepted

## Context

Norelo consists of multiple components, including a frontend application,
a backend application, infrastructure configuration, and technical
documentation.

These components are developed as parts of the same product and are
currently maintained by a single development team.

## Decision

Norelo will use a monorepo containing the frontend, backend,
infrastructure, documentation, and GitHub-specific configuration.

The repository will initially use simple directory-based organization
without a dedicated monorepo orchestration framework.

## Rationale

A monorepo provides:

- one source of truth for the product
- unified version control
- shared documentation
- coordinated frontend/backend changes
- simpler project management

A dedicated monorepo orchestration tool is not currently necessary
because the project contains only a small number of applications.

The decision can be revisited if the repository grows significantly
or additional applications/packages are introduced.

## Consequences

### Positive

- Simple repository structure
- Easy coordination between frontend and backend
- Shared CI/CD configuration
- Unified project history

### Negative

- Frontend and backend share the same repository lifecycle
- CI may become more complex as the project grows
- Repository tooling may need to evolve with project size
