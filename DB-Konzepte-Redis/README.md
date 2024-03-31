Information:

Vor dem Starten zunächst alle Packages herunterladen. Dies funktioniert, indem man „npm install“ in das Terminal eingibt. 

Liste aller zu installierenden Packages:

├── autoprefixer@10.4.15
├── eslint-config-next@13.4.19
├── eslint@8.48.0
├── next@13.5.6
├── postcss@8.4.38
├── react-dom@18.2.0
├── react-icons@5.0.1
├── react@18.2.0
├── redis@4.6.13
└── tailwindcss@3.3.3

Unter [src/lib/db.js] befindet sich die Datei mit den Daten zur Redis-Datenbank.

Zum Starten des Localhosts "npm run dev" in das Terminal eingeben. Der Localhost läuft mit dem Port 3000. 

Notizen zum Code:

Die Funktion, eine Produktbewertung anzulegen, ist gegeben und funktioniert.
Die Funktionen, Produktbewertungen zu bearbeiten und zu löschen, befinden sich im Code, konnten jedoch nicht implementiert werden und wurden dahingehend nicht an die Schnittstellen verknüpft, da sonst die Ansicht des Localhosts nicht möglich wäre.

In der Dokumentation wird trotzdem auf alle möglichen Vorteile und die Begründung der Wahl der Redis-Datenbank eingegangen, welche in einem optimalen UseCase gegebenenfalls vorhanden sind.










This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
