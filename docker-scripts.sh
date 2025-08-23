#!/bin/bash

# Docker management script for Next.js Template

case "$1" in
  "build")
    echo "Building production Docker image..."
    docker build -t nextjs-template .
    ;;
  "build-dev")
    echo "Building development Docker image..."
    docker build -f Dockerfile.dev -t nextjs-template:dev .
    ;;
  "run")
    echo "Running production container..."
    docker run -p 3000:3000 --name nextjs-template-prod nextjs-template
    ;;
  "run-dev")
    echo "Running development container..."
    docker run -p 3001:3001 -v $(pwd):/app -v /app/node_modules --name nextjs-template-dev nextjs-template:dev
    ;;
  "compose-up")
    echo "Starting with docker-compose (production)..."
    docker-compose up -d
    ;;
  "compose-dev")
    echo "Starting with docker-compose (development)..."
    docker-compose --profile dev up -d
    ;;
  "compose-down")
    echo "Stopping docker-compose services..."
    docker-compose down
    ;;
  "clean")
    echo "Cleaning up containers and images..."
    docker stop nextjs-template-prod nextjs-template-dev 2>/dev/null || true
    docker rm nextjs-template-prod nextjs-template-dev 2>/dev/null || true
    docker rmi nextjs-template nextjs-template:dev 2>/dev/null || true
    ;;
  "logs")
    echo "Showing container logs..."
    docker logs nextjs-template
    ;;
  "shell")
    echo "Opening shell in running container..."
    docker exec -it nextjs-template sh
    ;;
  *)
    echo "Usage: $0 {build|build-dev|run|run-dev|compose-up|compose-dev|compose-down|clean|logs|shell}"
    echo ""
    echo "Commands:"
    echo "  build       - Build production Docker image"
    echo "  build-dev   - Build development Docker image"
    echo "  run         - Run production container"
    echo "  run-dev     - Run development container with volume mounting"
    echo "  compose-up  - Start production services with docker-compose"
    echo "  compose-dev - Start development services with docker-compose"
    echo "  compose-down- Stop docker-compose services"
    echo "  clean       - Remove containers and images"
    echo "  logs        - Show container logs"
    echo "  shell       - Open shell in running container"
    exit 1
    ;;
esac 