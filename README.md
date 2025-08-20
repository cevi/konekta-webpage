# Konekta 2026 - Official Website

[![Visit Live Site](https://img.shields.io/badge/Live%20Site-konekta.ch-blue)](https://konekta.ch)

THis repository builds the official website and app for Konekta 2026. Its source is based on
the [conveniat27 repository](https://github.com/cevi/conveniat-webpage/).

Build and publish the Docker image for the dev environment:

```bash
docker compose -f docker-compose.dev.yml build  --no-cache \
  && docker push registry.cevi.tools/cevi/konekta-webpage:dev
```