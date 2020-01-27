# Reverse Proxy with Websockets & Apache

## Purpose
Demonstrate the use of apache as a basic reverse proxy for following services: 
1. http://localhost
2. ws://test.localhost/ws/echo

## Setup instructions
1. Install docker
2. Run `docker-compose up`

## Testing the app
1. Run `curl http://localhost`
2. Service will return with unique instance id
3. Run `websocat ws://test.localhost/ws/echo`
4. Service will return echo web-socket

