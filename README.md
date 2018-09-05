<p align="center">
  <img src="https://user-images.githubusercontent.com/6269639/44947900-215a1000-ae4f-11e8-9bd9-a6207a544ba5.png" width="50%"/>
</p>

CLI tool for managing custom emulated device on Chrome dev tool.

If you are an native-app developer, maybe you have wondered "I wish I can add multiple custom emulated devices at once".  This is the one that you been waiting for!


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@pittankopta/vibranium.svg)](https://npmjs.org/package/@pittankopta/vibranium)
[![CircleCI](https://circleci.com/gh/Pittan/vibranium/tree/master.svg?style=shield)](https://circleci.com/gh/Pittan/vibranium/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/Pittan/vibranium?branch=master&svg=true)](https://ci.appveyor.com/project/Pittan/vibranium/branch/master)
[![Codecov](https://codecov.io/gh/Pittan/vibranium/branch/master/graph/badge.svg)](https://codecov.io/gh/Pittan/vibranium)
[![Downloads/week](https://img.shields.io/npm/dw/vibranium.svg)](https://npmjs.org/package/@pittankopta/vibranium)
[![License](https://img.shields.io/npm/l/@pittankopta/vibranium.svg)](https://github.com/Pittan/vibranium/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @pittankopta/vibranium
$ vibranium COMMAND
running command...
$ vibranium (-v|--version|version)
@pittankopta/vibranium/0.0.3 darwin-x64 node-v8.11.3
$ vibranium --help [COMMAND]
USAGE
  $ vibranium COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vibranium add [FILE]`](#vibranium-add-file)
* [`vibranium export`](#vibranium-export)
* [`vibranium help [COMMAND]`](#vibranium-help-command)

## `vibranium add [FILE]`

Add custom emulated devices from a json config file.

```
USAGE
  $ vibranium add [FILE]

OPTIONS
  -f, --force
  -h, --help   show CLI help
```

_See code: [src/commands/add.ts](https://github.com/Pittan/vibranium/blob/v0.0.3/src/commands/add.ts)_

## `vibranium export`

describe the command here

```
USAGE
  $ vibranium export

OPTIONS
  -f, --force
  -h, --help               show CLI help
  -n, --filename=filename  filename to export
```

_See code: [src/commands/export.ts](https://github.com/Pittan/vibranium/blob/v0.0.3/src/commands/export.ts)_

## `vibranium help [COMMAND]`

display help for vibranium

```
USAGE
  $ vibranium help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.1/src/commands/help.ts)_
<!-- commandsstop -->
