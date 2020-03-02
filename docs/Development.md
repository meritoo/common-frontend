# Meritoo Common Frontend

Common & useful resources related to frontend

# Requirements

* [Docker](https://www.docker.com)
* Your favourite IDE :)

# Getting started

Build, create and start Docker's containers by running command:

```bash
docker-compose up -d
```

# Install or remove package

[Yarn](https://yarnpkg.com) is used as package manager.

1. To install, add new package to project run:

    ```bash
    docker-compose run yarn add <package-name>
    ```

2. To uninstall, remove package from project run:

    ```bash
    docker-compose run yarn remove <package-name>
    ```

> Looking for [other Yarn's commands?](https://yarnpkg.com/cli/install)

# Tests running

[Jest](https://jestjs.io) is used as Testing Framework.

### Fast (without code coverage)

```bash
docker-compose run yarn test
```

### With code coverage

```bash
docker-compose run yarn test --coverage
```

Report with code coverage is stored in `reports/jest/code_coverage` directory.

### With code coverage & without warnings

```bash
docker-compose run yarn test --coverage --silent
```

### Watch files for changes and rerun all tests

```bash
docker-compose run yarn test-watch
```

> Looking for [other Jest's CLI arguments?](https://jestjs.io/docs/en/cli)

[&lsaquo; Back to `Readme`](../README.md)
