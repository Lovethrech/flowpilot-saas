# FlowPilot SaaS

A Nuxt 4 SaaS MVP concept for small-team project clarity. It includes a polished marketing page, interactive dashboard, task creation, task movement between columns, REST API endpoints, demo-state fallback, and optional PostgreSQL persistence.

## Run
```bash
npm install
npm run dev
```
Open the homepage, then select **Live demo**. In the dashboard, create tasks and click a card to advance it through the workflow.

## Optional PostgreSQL
Copy `.env.example` to `.env`, set `DATABASE_URL`, and run `database/schema.sql`.

## Production
```bash
npm run build
npm run preview
```

All workspace names, users, metrics, and task records are portfolio sample data.
