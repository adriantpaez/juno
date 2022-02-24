package ethereum

import (
	"context"

	log "github.com/sirupsen/logrus"

	"github.com/NethermindEth/juno/configs"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/ethclient"
)

func GetStateRoot() common.Hash {
	client, err := ethclient.Dial(configs.EthereumNode)
	if err != nil {
		log.WithField("Error", err).Fatalf("Unable to connect to Ethereum Client")
	}

	headers := make(chan *types.Header)
	sub, err := client.SubscribeNewHead(context.Background(), headers)
	if err != nil {
		log.WithField("Error", err).Fatalf("Unable to subscribe to block headers")
	}

	for {
		select {
		case err := <-sub.Err():
			log.Fatal(err)
		case header := <-headers:
			log.WithFields(log.Fields{
				"stateRoot": header.Root,
			}).Debug("State root retrieved from L1")
		}
	}
}
