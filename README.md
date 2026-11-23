# Trilok Bhattacharya’s portfolio

The source for [trilok.dev](https://trilok.dev), a Next.js App Router portfolio hosted on Cloudflare Workers through OpenNext. Work experience, education, projects, and skills are maintained in `lib/data.ts`. The downloadable CV and dissertation are in `public/`.

## Development

Use Node.js 20 or later and pnpm 9. Install the locked dependencies and start the dev server.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:3000](http://localhost:3000). Run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build` to check changes.

## Contact form

For local delivery, set `RESEND_API_KEY` in `.env.local`. Set `RESEND_FROM_EMAIL` to a sender on a Resend-verified domain, for example `Contact Form <contact@trilok.dev>` once that domain is verified. If omitted, the form uses Resend’s sandbox sender, which can send only to the address associated with the Resend account. Messages go to `hi@trilok.dev` with the visitor’s email set as the reply-to address.

For Workers, configure these variables in the deployed worker’s settings and store the API key as a secret.

## Cloudflare Workers

`pnpm preview` builds and runs the Cloudflare Worker locally. `pnpm deploy` builds and deploys it through OpenNext using `wrangler.toml`.

The original portfolio template is by [ByteGrad](https://youtu.be/sUKptmUVIBM).
