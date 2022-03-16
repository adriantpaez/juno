package test

import (
	"encoding/hex"
	"fmt"
	"math/big"
	"testing"

	"github.com/NethermindEth/juno/pkg/crypto/keccak"
)

// BenchmarkDigest250 runs a benchmark on the Digest250 function by
// hashing an empty string N times.
func BenchmarkDigest250(b *testing.B) {
	for i := 0; i < b.N; i++ {
		keccak.Digest250([]byte(""))
	}
}

// BenchmarkDigest256 runs a benchmark on the Digest256 function by
// hashing an empty string N times.
func BenchmarkDigest256(b *testing.B) {
	for i := 0; i < b.N; i++ {
		keccak.Digest256([]byte(""))
	}
}

func ExampleDigest250() {
	dgst := keccak.Digest250([]byte("abc"))
	fmt.Printf("0x%x\n", dgst)
	// Output:
	// 0x0103657aea45a94fc7d47ba826c8d667c0d1e6e33a64a036ec44f58fa12d6c45
}

func ExampleDigest256() {
	dgst := keccak.Digest256([]byte("abc"))
	fmt.Printf("0x%x\n", dgst)
	// Output:
	// 0x4e03657aea45a94fc7d47ba826c8d667c0d1e6e33a64a036ec44f58fa12d6c45
}

// TestDigest250 does a basic test of the 256-bit Keccak hash function
// digest where the first 6 bits have been set to zero.
func TestDigest250(t *testing.T) {
	var tests = [...]struct {
		input, want string
	}{
		{"", "03d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"},
		{"abc", "0103657aea45a94fc7d47ba826c8d667c0d1e6e33a64a036ec44f58fa12d6c45"},
	}
	for _, test := range tests {
		got := fmt.Sprintf("%x", keccak.Digest250([]byte(test.input)))
		if got != test.want {
			t.Errorf("keccak.Digest250(%q) = %q, want %q", test.input, got, test.want)
		}
	}
}

// TestDigest250Size checks that the hexadecimal representation of the
// output of Digest250 is less than 2^250.
func TestDigest250Size(t *testing.T) {
	max := new(big.Int) // 2^250.
	max.SetString("400000000000000000000000000000000000000000000000000000000000000", 16)
	inputs := []string{"", "abc"}
	for _, input := range inputs {
		got := hex.EncodeToString(keccak.Digest250([]byte(input)))
		i := new(big.Int)
		i.SetString(got, 16)
		// ^(i < max).
		if i.Cmp(max) != -1 {
			t.Errorf("keccak.Digest250(%q) = 0x%x > 2^250 - 1", input, i)
		}
	}
}

// TestDigest256 does a basic test of the 256-bit Keccak hash function
// digest.
func TestDigest256(t *testing.T) {
	var tests = [...]struct {
		input, want string
	}{
		{"", "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"},
		{"abc", "4e03657aea45a94fc7d47ba826c8d667c0d1e6e33a64a036ec44f58fa12d6c45"},
	}
	for _, test := range tests {
		got := fmt.Sprintf("%x", keccak.Digest256([]byte(test.input)))
		if got != test.want {
			t.Errorf("keccak.Digest256(%q) = %q, want %q", test.input, got, test.want)
		}
	}
}
