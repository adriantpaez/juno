# juno

<div align="center"><img width="128" src="./docs/static/img/juno_rounded.png"></div>

Starknet client implementation.

[![Go Reference](https://pkg.go.dev/badge/github.com/NethermindEth/juno.svg)](https://pkg.go.dev/github.com/NethermindEth/juno) [![Go Report Card](https://goreportcard.com/badge/github.com/NethermindEth/juno)](https://goreportcard.com/report/github.com/NethermindEth/juno) [![Actions Status](https://github.com/NethermindEth/juno/actions/workflows/juno-build.yml/badge.svg)](https://github.com/NethermindEth/juno/actions) [![codecov](https://codecov.io/gh/NethermindEth/juno/branch/main/graph/badge.svg)](https://codecov.io/gh/NethermindEth/juno)

## Building from source

Run the following command.

```sh
% make all
```

## Executables

<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr>
    <td><code>juno</code></td>
    <td>The StarkNet full node client.</td>
  <tr>
</table>

## Configuration

**juno** uses a configuration file named **config.yaml** that is located in the `$HOME/.juno/` directory. It generally looks like the following and a default will be generated if one does not exist. 

```yaml
rpc:
  enabled: true
  port: 8080
db_path: /Users/example/Library/Application Support/juno
ethereum:
  enabled: true
  node: "ethereum_archive_node"

```

## Logging 

For logging we use [logrus](https://github.com/Sirupsen/logrus). This library has 7 levels of logging: Debug, Info, 
Warning, Error, Fatal and Panic.
For example:
```go
package main

import log "github.com/sirupsen/logrus"


func main() {
	log.Trace("Something very low level.")
	log.Debug("Useful debugging information.")
	log.Info("Something noteworthy happened!")
	log.Warn("You should probably take a look at this.")
	log.Error("Something failed but I'm not quitting.")
	// Calls os.Exit(1) after logging
	log.Fatal("Bye.")
	// Calls panic() after logging
	log.Panic("I'm bailing.")
}
```

Use `import log "github.com/sirupsen/logrus"` instead `import "log"`.

It also allows us to add fields to the outputs, like this:

```
  log.WithFields(log.Fields{
    "animal": "walrus",
    "size":   10,
  }).Info("A group of walrus emerges from the ocean")

  log.WithFields(log.Fields{
    "omg":    true,
    "number": 122,
  }).Warn("The group's number increased tremendously!")

  log.WithFields(log.Fields{
    "omg":    true,
    "number": 100,
  }).Fatal("The ice breaks!")
```

Resulting in an output like this:

![Logrus](./docs/static/img/log.png)

For more details about logging just go to [logrus](https://github.com/Sirupsen/logrus).