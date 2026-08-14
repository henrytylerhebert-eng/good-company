# Good Company

Good Company is the human-facing product built on Cognitive Product Engineering. This V0.1 proves one governed loop:

`Frame -> Evidence -> Decide -> Learn`

The application is intentionally local-first. Room state is stored in the browser. It does not call an AI model, submit external work, or treat generated recommendations as approved decisions.

## Run locally

```bash
npm install
npm run dev
```

## Quality gates

```bash
npm test
npm run lint
npm run build
```

## GitHub Pages

Pushes to `main` publish automatically through `.github/workflows/deploy-pages.yml`. The Pages build uses the `/good-company/` base path required by project Pages sites.

## V0.1 boundary

- One active Room
- Six founding colleagues
- Product framing contract
- Evidence and assumption records
- Explicit decision states
- Human approval gate
- Outcome and learning record
- Local persistence

Model connections, team accounts, external execution, cloud storage, and autonomous agents are deferred.
