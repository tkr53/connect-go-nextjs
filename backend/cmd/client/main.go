package main

import (
	"context"
	"fmt"
	"net/http"

	greetv1 "connect/gen/greet/v1"
	"connect/gen/greet/v1/greetv1connect"
)

func main() {
	client := greetv1connect.NewGreetServiceClient(
		http.DefaultClient,
		"http://localhost:8080",
	)
	stream := client.GreetBidiStream(context.Background())
	for i := 0; i < 10; i++ {
		if err := stream.Send(&greetv1.GreetBidiStreamRequest{
			Name: fmt.Sprintf("%s (%d)", fmt.Sprintf("res%d", i), i),
		}); err != nil {
			fmt.Println(err)
		}
	}
	stream.CloseRequest()
}
