#!/bin/bash
./build.sh
docker-compose -f docker-compose.yml up -d
docker image prune -f