#!/usr/bin/env bash

echo "Please make sure you have newman and a running json-server(refer setup.sh) before executing integration tests!!"

newman run books-shop.postman_collection.json
