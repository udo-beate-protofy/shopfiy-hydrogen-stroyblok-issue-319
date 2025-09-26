# About

This is a reproduction repo for https://github.com/storyblok/monoblok/issues/319

## Setup / run

1. Replace the `ADD_A_STORYBLOK_ACCESS_TOKEN_HERE` in [root.tsx (Line #103)](./app/root.tsx) with an storyblok access token

2. change the cdn (`cdn/stories/de/`) path to an existing storyblok page [\_index.tsx](app/routes/_index.tsx)

3. run `nvm use && npm i`
4. run `npm run dev`
5. open http://localhost:3000/ and refresh the page 6 Times, you should see an error like:

```
Error: The Workers runtime canceled this request because it detected that your Worker's code had hung and would never generate a response. Refer to: https://developers.cloudflare.com/workers/observability/errors/
  at async Object.fetch (file:///.../node_modules/miniflare/dist/src/workers/core/entry.worker.js:1029:22)
```

## Steps done before

### Init hydrogen (create project)

I used the following command to setup the project (you can see the result as the init command)

```bash
npm create @shopify/hydrogen@latest
```

These are the options i used:

```text
> npx
> "create-hydrogen"

?  Connect to Shopify:
✔  Use sample data from mock.shop (You can connect a Shopify account later)

?  Where would you like to create your storefront?
✔  hydrogen-storefront

?  Select a language:
✔  TypeScript

?  Select a styling library:
✔  Tailwind v4

?  Install dependencies with npm?
✔  Yes

╭─ success ────────────────────────────────────────────────────────────────────╮
│                                                                              │
│  hydrogen-storefront is ready to build.                                      │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

?  Do you want to scaffold routes and core functionality?
✔  Yes, set up now

?  Select a URL structure to support multiple markets:
✔  Subdomains (de.example.com/...)

```

### Use the storyblok docu

I followed this documentation: https://www.storyblok.com/tp/headless-commerce-with-shopify-hydrogen-and-storyblok and implement only the part of requestion a storyblok page
