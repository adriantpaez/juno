package ethereum

import (
	"context"
	"github.com/NethermindEth/juno/internal/log"
	"github.com/ethereum/go-ethereum/ethclient"

	"github.com/ethereum/go-ethereum/core/types"
)

type Synchronizer struct {
	client *ethclient.Client
}

func NewSynchronizer(ethereumNode string) *Synchronizer {
	client, err := ethclient.Dial(ethereumNode)
	if err != nil {
		log.Default.With("Error", err).Fatal("Unable to connect to Ethereum Client")
	}
	return &Synchronizer{
		client: client,
	}
}

func (s Synchronizer) UpdateStateRoot() error {
	headers := make(chan *types.Header)
	sub, err := s.client.SubscribeNewHead(context.Background(), headers)
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
		}
	}
}

func (s Synchronizer) Close(ctx context.Context) {
	// notest
	log.Default.Info("Closing Layer 1 Synchronizer")
	select {
	case <-ctx.Done():
		s.client.Close()
	default:
	}
}
