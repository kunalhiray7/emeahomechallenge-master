#!/usr/bin/env bash

echo "Please make sure you have newman and a running server(npm run bootServer) before executing integration tests!!"

newman run books-shop.postman_collection.json
