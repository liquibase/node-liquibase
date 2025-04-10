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
Do you use Node and databases and want to implement smart architecture decisions? Liquibase is here to help.
Liquibase is an open-source database-independent library for tracking, managing and applying database schema changes.

### :panda_face: Concerned About Install Size?
For a drastically smaller version of this package, be sure to check out our [Zero-Dependency Peer-Dependency version](https://www.npmjs.com/package/liquibase/v/0.0.0). You can access this version under the tag `@pd` for `Peer Dependency`. This version of the package boasts an unpacked size of `359 kB`. Just be sure to [correctly configure your project](#peer-dependency-@pd)!

## :clipboard: Table of Contents
* [Installation](#installation)
* [Sandbox](#sandbox)
* [Usage](#usage)
  * [CLI](#cli)
  * [In Your Project Files](#in-your-project-files)
* [Features](#features)
  * [TypeScript](#typescript)
  * [Library and CLI](#library-and-cli)
  * [Liquibase CLI Command API Parity](#liquibase-cli-command-api-parity)
  * [Liquibase CLI Peer Dependency](#liquibase-cli-peer-dependency-(optional))
  * [WTR!?](#wtr!?-why-the-re-write-!?)
* [Bundled Releases](#bundled-releases)
  * [Bundled Version Numbers](#bundled-version-numbers)
* [Peer Dependency (@pd)](#peer-dependency-@pd)
* [Want to Help?](#want-to-help)
  * [Build](#build)
  * [Tests](#tests)
  * [Env Vars](#env-vars)
  * [Extending Liquibase Node Package: Step-by-Step Guide](#extending-liquibase-node-package-step-by-step-guide)
* [CI: Generate Action](#ci-generate-action)
* [Getting More Knowledge About Liquibase](#getting-more-knowledge-about-liquibase)
* [Liquibase CLI](#liquibase-cli)


## :nut_and_bolt: Installation

There is an easy way to integrate Liquibase power to Node application. All you need
is NPM package.

```bash
yarn add liquibase
```

or:
```bash
$ NPM install --save liquibase
```

### :diamond_shape_with_a_dot_inside: Sandbox
> "If this isn't making sense, it doesn't make it lies." (Cornell, 1994).

We have also provided a [Small Sandbox Project](https://github.com/tabuckner/node-liquibase-sandbox) where you can easily evaluate [Liquibase](https://github.com/liquibase/liquibase) and `node-liquibase` against a Postgres Database.

The Sandbox project includes startup scripts, and examples to demonstrate how to use `node-liquibase` in TypeScript, JavaScript, and as a CLI tool.

## :loudspeaker: Usage

Liquibase support rich pool of commands to keep your database up-to-date, like update, rollback, diff check out full list here: https://docs.liquibase.com/commands/home.html.

This package exposes both a CLI tool and a Library to help you in your Database Migration efforts!

### :computer: CLI

You can use this NPM package as a CLI tool under the namespace `node-liquibase` if you wish.

#### :floppy_disk: Bundled Liquibase Executable

```bash
node-liquibase
--changeLogFile="/path/to/my/changelog.xml"
--url="jdbc:postgresql://localhost:5432/postgres"
--username="yourusername"
--password="yoursecurepassword"
--classpath="/Users/me/path/to/my/db-drivers/postgresql-42.4.2.jar"
status
```

#### :floppy_disk: Liquibase Executable "Peer Dependency"

```bash
node-liquibase /Users/me/path/to/my/executable/for/liquibase
 --changeLogFile="/path/to/my/changelog.xml"
 --url="jdbc:postgresql://localhost:5432/postgres"
 --username="yourusername"
 --password="yoursecurepassword"
 --classpath="/Users/me/path/to/my/db-drivers/postgresql-42.4.2.jar"
 status
```

### :file_folder: In Your Project Files

#### TypeScript

```typescript
import {
	LiquibaseConfig,
	Liquibase,
} from 'liquibase';

const myConfig: LiquibaseConfig = {
	changeLogFile: './changelog.xml',
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
const Liquibase = require('liquibase').Liquibase;

const myConfig = {
  changeLogFile: './changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/node_liquibase_testing',
  username: 'yourusername',
  password: 'yoursecurepassword',
}
const instTs = new Liquibase(myConfig);

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

[Here's a complete listing](https://github.com/liquibase/node-liquibase/blob/master/src/enums/liquibase-commands.enum.ts) of commands that have been implemented.

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

## Bundled Releases
In order to make installation of Liquibase easier for people who are new to the Liquibase toolset, we've chosen to release 'bundled' versions of this project, `node-liquibase`. This means that if you are beholden to a particular version of [Liquibase Core](https://github.com/liquibase/liquibase) you will be able to install a related specific version of `node-liquibase` and have [Liquibase Core](https://github.com/liquibase/liquibase) ready at your fingertips.

This makes the assumption that a consumer of `node-liquibase` _wants_ that. If this is not `true` and you prefer to make use of a more `peer dependency` type of experience, we offer a version of `node-liquibase` that **DOES NOT** bundle an associated version of [Liquibase Core](https://github.com/liquibase/liquibase).

### Bundled Version Numbers
Because [Liquibase Core](https://github.com/liquibase/liquibase) and `node-liquibase` both use a similar versioning strategy, and because NPM requires a version number bump for even the smallest change, there will not be 100% alignment between the version numbers of each project.

It is safe to assume that the Major and Minor version numbers between the two projects will match on any given `npm` installation of `node-liquibase`.

For example:
* Let's assume you are required to use [Liquibase Core](https://github.com/liquibase/liquibase) `v4.3.3`
* `node-liquibase` released `4.3.3` alongside [Liquibase Core](https://github.com/liquibase/liquibase), but needed to update documentation after the fact
* `node-liquibase` patches its version number and releases `4.3.4`
* As a User, you could run `yarn add liquibase@4.3` which would install the latest patch version of `4.3` in this case `4.3.4`
* The "Bundled Liquibase" version would still be `4.3.3` but `node-liquibase` would be `4.3.4`

If you wish to opt-out of the "Bundled Version" you can check out our [Peer Dependency](#peer-dependency-@pd) release.

## Peer Dependency (@pd)
### Install
In order to use this `p[eer]-d[ependency]` version of `node-liquibase` you can install with:

```bash
yarn add liquibase@pd
```

or

```bash
npm i liquibase@pd
```

Depending on your implementation method of choice (TS, JS, or CLI), you will need to let `node-liquibase` know where it can find your `liquibase` executable. This should be an **absolute path** to the executable.

Additionally, we removed the bundled drivers from the `@pd` release to further reduce the size of your `node_modules`. There is a chance you will need to update your configurations to provide an absolute path on the `classpath` property to the drivers you need.

### Configuration Updates (TS or JS)
Using the `liquibase` property on your config object.

#### Before
```typescript
import { Liquibase, LiquibaseConfig, POSTGRESQL_DEFAULT_CONFIG } from 'liquibase';

const myConfig: LiquibaseConfig = {
  changeLogFile: './changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/node_liquibase_testing',
  username: 'yourusername',
  password: 'yoursecurepassword',
}
const inst = new Liquibase(myConfig);

inst.status();
```

#### After
```typescript
import { Liquibase, LiquibaseConfig, POSTGRESQL_DEFAULT_CONFIG } from 'liquibase';

const myConfig: LiquibaseConfig = {
  changeLogFile: './changelog.xml',
  url: 'jdbc:postgresql://localhost:5432/node_liquibase_testing',
  username: 'yourusername',
  password: 'yoursecurepassword',
  liquibase: 'Users/me/absolute/path/to/executable/directory'
}
const inst = new Liquibase(myConfig);

inst.status();
```

### Configuration Updates (CLI)
Using the `--liquibase` flag on your CLI command.

#### Before
```bash
yarn node-liquibase --changeLogFile="changelog.xml" --url="jdbc:postgresql://localhost:5432/node_liquibase_testing" --username="yourusername" --password="yoursecurepassword" --classpath="/Users/me/path/to/my/db-drivers/postgresql-42.4.2.jar" status
```

#### After
```bash
yarn node-liquibase --liquibase="Users/me/absolute/path/to/executable/directory" --changeLogFile="changelog.xml" --url="jdbc:postgresql://localhost:5432/node_liquibase_testing" --username="yourusername" --password="yoursecurepassword" --classpath="/Users/me/path/to/my/db-drivers/postgresql-42.4.2.jar" status
```

### Sandbox: @pd
If you'd like to see a working setup of `liquibase@pd` be sure to check out the `peer-dependency` branch of the [Node Liquibase Sandbox](https://github.com/tabuckner/node-liquibase-sandbox/blob/peer-dependency/index.ts). You can see a diff of the two approaches (Bundled v. Peer) [Here](https://github.com/tabuckner/node-liquibase-sandbox/compare/master...peer-dependency)

## Want to Help?

This project needs some work on the infrastructure and build tooling side. For now the workflow to test an 'end user ready' version of the project, you'll first need to build/compile the code, and then you can run it using the Node CLI's REPL `node path/to/something.js`.

There is an issue in path resolution within THIS application code in addition to the complexities in Liquibase Core. Until this is resolved the resolved path for the Liquibase executable will differ between compiled and source code. **This will affect your experience if you try to transpile the code on the fly using `ts-node`.** I have not resolved the issue yet.

### Build

To build all of the things:

```bash
npm run build
```

### Tests

Run tests with:

```bash
npm run test
```

### Env Vars

To substitute your own user/pass for a given environment, make a copy of `.env.example` in root directory as `.env` and update accordingly.

### :rocket: Extending Liquibase Node Package: Step-by-Step Guide

This guide outlines the process for adding or modifying Liquibase commands in the Liquibase Node package. It's designed for developers who want to extend the functionality of the package.

Files to be Changed:

* `src/commands-with-positional-arguments.ts`
* `src/liquibase-commands.enum`
* `node-liquibase/src/models/commands` (corresponding command file)
* `node-liquibase/src/liquibase.spec.ts`
* `node-liquibase/src/liquibase.ts`

Follow these steps carefully to extend the functionality of the Liquibase Node package according to your requirements.

Note: Ensure you follow proper coding conventions and thoroughly test your changes before deploying them.

This guide assumes familiarity with TypeScript and the Liquibase Node package structure. If you encounter any issues, refer to the Liquibase Node package documentation or seek assistance from the community.

#### Step 1: Update `commands-with-positional-arguments.ts` and `liquibase-commands.enum`

1. Navigate to the `src` directory of the Liquibase Node package.
2. Open `commands-with-positional-arguments.ts` and `liquibase-commands.enum files`.
3. Add or modify the command with its positional (if needed) arguments in these files.

#### Step 2: Modify Command and its Arguments in `node-liquibase/src/models/commands`

1. Go to the `node-liquibase/src/models/commands` directory.
2. Locate the corresponding command file based on the command you added or modified.
3. Add or modify the command and its arguments in the respective file.

#### Step 3: Define Commands in `node-liquibase/src/liquibase.spec.ts`

1. Navigate to the `node-liquibase/src` directory.
2. Open `liquibase.spec.ts` file.
3. Define each command and indicate which run method it should invoke.

#### Step 4: Implement Invoke Method in `node-liquibase/src/liquibase.ts`

1. Go to the `node-liquibase/src` directory.
2. Open `liquibase.ts` file.
3. Implement the invoke method for each command specified in `liquibase.spec.ts`.

## :construction: CI: Generate Action

There is GitHub action executed on every Liquibase release. This GitHub Action automates the generation of Liquibase command list and protobuf files for a specified Liquibase version.

### Workflow Steps

1. **Install Dependencies**: Installs necessary dependencies including `protobuf-compiler` and npm packages.
2. **Build Liquibase Protobuf Generator Docker Image**: Builds a Docker image named `liquibase-protobuf-generator` specific to the provided Liquibase version.
3. **Generate Liquibase Command List**: Executes a Docker command to generate a `JSON` file containing a list of Liquibase commands supported by the specified version.
4. **Iterate Over Commands and Generate Protobuf Files**: Loops through the commands retrieved from the `JSON` file, executes Docker commands to generate protobuf files for each command, and then moves the generated TypeScript files to a directory named `proto-commands`.
5. **Update Liquibase Binaries**: Downloads and extracts the Liquibase binaries for the specified version, replacing the existing binaries.
6. **Create Pull Request**: It creates a pull request with the generated changes.

This action streamlines the process of updating Liquibase-related files and creating pull requests for version updates.

After the PR is created you can see potential new/modified liquibase commands and proced to update this module following the steps shown at [Extending Liquibase Node Package: Step-by-Step Guide](#extending-liquibase-node-package-step-by-step-guide)

## Getting More Knowledge About Liquibase

- [Liquibase University](https://learn.liquibase.com/index)
- [Liquibase Documentation](https://docs.liquibase.com/home.html)

## Liquibase CLI

[Download Liquibase CLI](https://www.liquibase.org/download)
