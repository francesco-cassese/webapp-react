# PorcheDotto 🐷🎓

> Una porchetteria dall'animo geniale: catalogo prodotti, recensioni e un assistente AI, il tutto condito con un tono comico e pseudo-scientifico.

## Descrizione

**PorcheDotto** (titolo tecnico dell'app: *Pork-Edotto*) è una single-page application React che simula l'e-commerce di una porchetteria a tema "esperimento scientifico riuscito". Il progetto nasce come project work didattico ed espone:

- un catalogo prodotti filtrabile, con nomi ironici come *Panino Formula Segreta* o *Porchetta Quantistica*;
- pagine di dettaglio prodotto;
- un sistema di recensioni con valutazione a stelle;
- **PorkInstein**, un assistente/chatbot AI con domande predefinite per guidare l'utente nel catalogo.

## Stack Tecnologico

- [React](https://react.dev/) `19.2` — libreria UI
- [React Router DOM](https://reactrouter.com/) `7.17` — routing lato client
- [Vite](https://vitejs.dev/) `8` — build tool e dev server
- [Bootstrap](https://getbootstrap.com/) `5.3` + Bootstrap Icons — componenti UI e iconografia
- [ESLint](https://eslint.org/) (flat config) — linting del codice JavaScript/JSX

> Il progetto è scritto in JavaScript/JSX; i pacchetti `@types/react` e `@types/react-dom` sono presenti solo per l'autocompletamento in editor e non implicano l'uso di TypeScript.

## Prerequisiti

- [Node.js](https://nodejs.org/) `>= 18` (compatibile con Vite 8; nessuna versione è vincolata esplicitamente nel repository)
- [pnpm](https://pnpm.io/) come package manager (abilitabile rapidamente con `corepack enable`)
- Un backend disponibile su `http://localhost:3000`: l'app effettua le chiamate API verso questo indirizzo (hardcoded in `src/utils/DB_utilities.js`) per recuperare prodotti, recensioni e rispondere alle richieste dell'assistente AI. Il backend non è incluso in questo repository.

## Backend
Il frontend comunica con un'API REST dedicata. Puoi trovare il repository del backend qui:
[PorcheDotto Backend](https://github.com/francesco-cassese/webapp-express)

## Installazione

Clona il repository e installa le dipendenze:

```bash
git clone <url-del-repository>
cd webapp-react
pnpm install
```

## Utilizzo

Avvia il server di sviluppo:

```bash
pnpm dev
```

Genera la build di produzione:

```bash
pnpm build
```

Visualizza in anteprima la build di produzione:

```bash
pnpm preview
```

Esegui il linting del codice:

```bash
pnpm lint
```

> Nota: il progetto non include al momento una suite di test automatizzati.

## Struttura del progetto

```
src/
├── main.jsx, App.jsx        # entry point e routing
├── components/
│   ├── Homepage/             # Homepage, Main, AboutUs, Newsletter
│   ├── Products/              # catalogo, dettaglio prodotto, filtri, carousel
│   ├── Reviews/                # form e liste recensioni, rating a stelle
│   ├── Header/, Footer/         # layout
│   └── PorkInstein.jsx          # assistente/chatbot AI
├── context/visitHandlers/      # Context API per la gestione delle visite
├── hooks/                       # useFetch, useReview, useAi
├── utils/DB_utilities.js        # client per le chiamate al backend
└── data/questionsData.js        # domande predefinite del chatbot
```

## Contributi

Progetto sviluppato dal **Gruppo 4**:

- [Francesco Cassese](https://github.com/francesco-cassese)
- [Francesco E. Floris](https://github.com/francescoEFloris)
- [Alessia Di Ruggiero](https://github.com/rAel-Ael)
- [Giulia Buonasperanza](https://github.com/giulia-buonasperanza)
- [Ivan V. Caldarella](https://github.com/gamein3x)

## Licenza

Progetto didattico a uso privato, sviluppato nell'ambito di un project work Boolean.
