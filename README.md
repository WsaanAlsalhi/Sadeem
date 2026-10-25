# Sadeem (سديم)

An interactive registration experience. Visitors pick their college, enter their name and major (in Arabic or English), and instantly receive a personalised ticket they can save as a PNG or share.

## Features

- Register first, then reveal: a countdown and warp-speed starfield lead into the finished ticket
- Nine college-specific ticket designs, each with its own colour theme
- Arabic and English interface with a one-tap language toggle (RTL/LTR switches automatically)
- Names and majors render directly onto the ticket, in either language
- Save the ticket as a PNG, or share it through the device's share sheet where supported
- Optional account credit, shown on the page and printed on the saved ticket image

## Run it

Open `index.html` in a browser, or host it for free with GitHub Pages:

1. Push `index.html` and `README.md` to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/<repository-name>/`.

No build step, server or dependencies are needed. All ticket images are embedded in `index.html`. Fonts load from Google Fonts, so an internet connection is required for the intended typography.

## Show your account

At the top of the `<script>` in `index.html`, set:

```js
const ACCOUNT='@your_account';
const LINK='';
```

- `ACCOUNT` appears as "An initiative by @your_account" on the page and as a footer strip on every saved ticket.
- `LINK` is optional. Leave it empty to link to `https://instagram.com/your_account`, or paste the full profile URL for another platform.
- Leave `ACCOUNT` empty to hide the credit entirely.

## Customise

- **Event name:** edit the `<title>` and the `t:` values in the `T` translations object (one for Arabic, one for English).
- **Colleges:** names and accent colours are in the `L` array, with English names in the `EN` array.
- **Fonts:** Lalezar (Arabic headings), Orbitron (English headings) and IBM Plex Sans Arabic (body and ticket text).

## License

Add the licence of your choice before publishing.
