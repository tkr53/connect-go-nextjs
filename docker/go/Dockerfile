FROM golang:1.20.2-alpine3.17

WORKDIR /go/src/server

RUN apk update && \
  apk add --no-cache git gcc musl-dev make

RUN go install golang.org/x/tools/gopls@latest && \
  go install github.com/go-delve/delve/cmd/dlv@latest && \
  go install github.com/bufbuild/buf/cmd/buf@latest && \
  go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest && \
  go install google.golang.org/protobuf/cmd/protoc-gen-go@latest && \
  go install github.com/bufbuild/connect-go/cmd/protoc-gen-connect-go@latest

EXPOSE 8080