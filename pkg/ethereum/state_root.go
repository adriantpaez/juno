package ethereum

import (
	"context"
	"github.com/NethermindEth/juno/internal/log"
	"github.com/ethereum/go-ethereum/ethclient"

	"github.com/ethereum/go-ethereum/core/types"
)

func NewClient(ethereumNode string) *ethclient.Client {
	client, err := ethclient.Dial(ethereumNode)
	if err != nil {
		log.Default.With("Error", err).Fatal("Unable to connect to Ethereum Client")
	}
	return client
}

func UpdateStateRoot(client *ethclient.Client, stop chan bool) {
	headers := make(chan *types.Header)
	sub, err := client.SubscribeNewHead(context.Background(), headers)
	if err != nil {
		log.Default.With("Error", err).Fatalf("Unable to subscribe to block headers")
	}

	for {
		select {
		case err := <-sub.Err():
			log.Default.Fatal(err)
		case header := <-headers:
			log.Default.With("stateRoot", header.Root).Debug("State root retrieved from L1")
			// TODO store ethereum state
		case <-stop:
			log.Default.Info("Closing L1 connection...")
			client.Close()
			return
		}
	}
}
