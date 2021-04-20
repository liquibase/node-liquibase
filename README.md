![Website](https://img.shields.io/website?color=%233090C7&up_message=liquibase.org&url=https%3A%2F%2Fwww.liquibase.org%2F)
![Website](https://img.shields.io/website?color=%233090C7&label=docs&up_message=docs.liquibase.com&url=https%3A%2F%2Fdocs.liquibase.com%2F)
![Twitter Follow](https://img.shields.io/twitter/follow/liquibase?style=social)
![NPM](https://img.shields.io/npm/dt/liquibase?label=total%20downloads)
![NPM](https://img.shields.io/npm/dw/liquibase?label=weekly%20downloads)
![GitHub repo size](https://img.shields.io/github/repo-size/liquibase/node-liquibase?logo=GitHub&style=flat-square)

---

[![twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)][1][![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)][2][![stackoverflow](https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)][3][![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)][4][![youtube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)][5]

[1]: https://twitter.com/liquibase
[2]: https://www.linkedin.com/company/liquibase
[3]: https://stackoverflow.com/tags/liquibase/
[4]: https://github.com/liquibase/liquibase
[5]: https://www.youtube.com/channel/UC5qMsRjObu685rTBq0PJX8w

![Node and Liquibase](/docs/assets/node-liquibase.png)
Use Node and databases? Want to do smart architecture decisions? Do not invent wheel, use Liquibase.
Liquibase is an open-source database-independent library for tracking, managing and applying database schema changes.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
  * [CLI](#cli)
  * [In Your Project Files](#in-your-project-files)
* [Features](#features)
  * [TypeScript](#typescript)
  * [Library and CLI](#library-and-cli)
  * [Liquibase CLI Command API Parity](#liquibase-cli-command-api-parity)
  * [Liquibase CLI Peer Dependency](#liquibase-cli-peer-dependency-(optional))
  * [WTR!?](#wtr!?-why-the-re-write-!?)
* [Want to Help?](#want-to-help)
  * [Build](#build)
  * [Tests](#tests)
  * [Env Vars](#env-vars)
* [Getting More Knowledge About Liquibase](#getting-more-knowledge-about-liquibase)
* [Liquibase CLI](#liquibase-cli)


## Installation

There is an easy way to integrate Liquibase power to Node application. All you need
is NPM package.

```bash
yarn add liquibase
```

or:
```bash
$ NPM install --save liquibase
```

## Usage

Liquibase support rich pool of commands to keep your database up-to-date, like update, rollback, diff check out full list here: https://docs.liquibase.com/commands/home.html.

This package exposes both a CLI tool and a Library to help you in your Database Migration efforts!

### CLI

You can use this NPM package as a CLI tool under the namespace `node-liquibase` if you wish.

#### Bundled Liquibase Executable

```bash
node-liquibase
--changeLogFile="/examples/change-log-examples/postgreSQL/changelog.xml"
--url="jdbc:postgresql://localhost:5432/postgres"
--username="yourusername"
--password="yoursecurepassword"
--classpath="/Users/taylor/Dev/Liquibase/hackathons/node-liquibase/drivers/postgresql-42.2.8.jar"
status
```

#### Liquibase Executable "Peer Dependency"

```bash
node-liquibase /Users/taylor/Dev/Liquibase/hackathons/node-liquibase/bin/liquibase/liquibase
 --changeLogFile="/examples/change-log-examples/postgreSQL/changelog.xml"
 --url="jdbc:postgresql://localhost:5432/postgres"
 --username="yourusername"
 --password="yoursecurepassword"
 --classpath="/Users/taylor/Dev/Liquibase/hackathons/node-liquibase/drivers/postgresql-42.2.8.jar"
 status
```

### In Your Project Files

#### TypeScript

```typescript
import {
	LiquibaseConfig,
	Liquibase,
	POSTGRESQL_DEFAULT_CONFIG,
} from 'node-liquibase';

const myConfig: LiquibaseConfig = {
	...POSTGRESQL_DEFAULT_CONFIG,
	url: 'jdbc:postgresql://localhost:5432/node_liquibase_testing',
	username: 'yourusername',
	password: 'yoursecurepassword',
};
const instance = new Liquibase(myConfig);

async function doEet() {
	await instance.status();
	// await instance.update();
	// await instance.dropAll();
}

doEet();
```

#### JavaScript

```js
const LiquibaseTS = require('node-liquibase').Liquibase;
const POSTGRESQL_DEFAULT_CONFIG = require('node-liquibase').POSTGRESQL_DEFAULT_CONFIG;

const myConfig = {
  ...POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: './changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/node_liquibase_testing',
  username: 'yourusername',
  password: 'yoursecurepassword',
}
const instTs = new LiquibaseTS(myConfig);

instTs.status();
```

## Features
### TypeScript
#### Before
The previous project did not have the greatest experience for TypeScript environments. In addition, one of our goals was improving the DX for JavaScript engineers as well. Luckily, a lot of popular Text Editors are improving their IntelliSense featuresets.

#### Now
With the new package you can will get:
* Liquibase command documentation right at your fingertips
* Liquibase command Parameter documentation
* Liquibase CLI Command API Parity

https://user-images.githubusercontent.com/32392635/115454680-ac49cd80-a1e6-11eb-85fa-df91caf4a7f6.mp4

### Library and CLI
In order to keep the DX as smooth as possible without deprecating the project that inspired the re-write, we've provided both an NPM package and a CLI tool. We did this by transpiling both an ES Module and a Common JS module in the dist code. The Node CLI of this package can be used with `node-liquibase`.

However, when importing the modules to use them in a JavaScript or TypeScript file, be sure to import from the correct module name: `liquibase`. We are forced to keep this package name for now due to dependent projects.

### Liquibase CLI Command API Parity
We were careful to ensure that all 'top level' Liquibase commands are implemented in this package. No more magic strings!

[Here's a complete listing]('./src/enums/liquibase-commands.enum.ts') of commands that have been implemented.

### Liquibase CLI Peer Dependency (Optional)
WIP

## WTR!? (Why The Re-write!?)
The original fork of this project has been left intact to give credit where credit is due. As an Organization, Liquibase can be summarized as follows: No punks, no jerks. Because of this, we cannot ignore [pablodenadai/node-liquibase](https://github.com/pablodenadai/node-liquibase). It was these efforts that ultimately led to the decision to improve on that project.

### TypeScript
At Liquibase we are avid TypeScript users, so naturally we expect the developer experience we're accustomed to out of our own packages. In order to provide the DX _we would want_, we needed to rethink how this library was implemented.

Adding TypeScript support was at the core of this.

### No Magic Strings!
Magic strings, while functional, are error prone. Instead of passing a string of the command and parameters to Liquibase, we've replicated the top level Liquibase CLI API within this package.

Our aim is to provide a more stable and guided API for new Liquibase users operating in a Node context.

This means no more of this:
```typescript
liquibase.run('status');
```

and more of this:
```typescript
liquibase.status();
```

## Want to Help?

This project needs some work on the infrastructure and build tooling side. For now the workflow to test an 'end user ready' version of the project, you'll first need to build/compile the code, and then you can run it using the Node CLI's REPL `node path/to/something.js`.

There is an issue in path resolution within THIS application code in addition to the complexities in Liquibase Core. Until this is resolved the resolved path for the Liquibase executable will differ between compiled and source code. **This will affect your experience if you try to transpile the code on the fly using `ts-node`.** I have not resolved the issue yet.

### Build

To build all of the things:

```bash
yarn build
```

### Tests

Run tests with:

```bash
yarn test
```

### Env Vars

To substitute your own user/pass for a given environment, make a copy of `.env.example` in root directory as `.env` and update accordingly.

## Getting More Knowledge About Liquibase

- [Liquibase University](https://learn.liquibase.com/index)
- [Liquibase Documentation](https://docs.liquibase.com/home.html)

## Liquibase CLI

[Download Liquibase CLI](https://www.liquibase.org/download)
