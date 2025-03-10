# Obiettivo Finale del Progetto: Blog Multiutente con Autenticazione

L'applicazione che andremo a costruire è un **blog multiutente** con un sistema di autenticazione. Ogni utente potrà registrarsi, fare login, creare, leggere, modificare e cancellare i propri post. Il tutto sarà gestito tramite un backend in **Node.js** con **Express** e un frontend in **React**, con la persistenza dei dati su **MongoDB**.

---
 
## Funzionalità Principali:

### 1. **Autenticazione Utente:**
- **Registrazione**: Gli utenti possono registrarsi tramite un form con nome, email e password.
- **Login**: Gli utenti possono fare il login utilizzando email e password.
- **Autenticazione JWT**: L'autenticazione si baserà su JWT (JSON Web Tokens) per garantire sessioni sicure e persistenti.

### 2. **Gestione Post:**
- **Crea Post**: Gli utenti possono scrivere un nuovo post (con titolo, contenuto e categorie).
- **Leggi Post**: Gli utenti possono visualizzare la lista dei post pubblicati.
- **Modifica Post**: Gli utenti possono modificare i propri post (solo i post che hanno creato).
- **Elimina Post**: Gli utenti possono eliminare i propri post.

### 3. **Dashboard Utente:**
Ogni utente ha un'area personale (Dashboard) dove può vedere:
  - La lista dei propri post.
  - I dettagli dell'account (nome, email).
  - Le opzioni per modificare i dati e cambiare la password.

### 4. **Interazione con i Post:**
- **Commenti**: Ogni post può avere commenti da parte degli utenti.
- **Like**: Gli utenti possono mettere like ai post.

---

## Struttura del Progetto:

### **Backend (`/apps/backend`):**
- **API per gli utenti**: 
  - `POST /api/register`: Endpoint per la registrazione di un nuovo utente.
  - `POST /api/login`: Endpoint per il login e la generazione del JWT.
  - `GET /api/me`: Endpoint per recuperare i dati dell'utente loggato.
- **API per i post**: 
  - `POST /api/posts`: Endpoint per creare un nuovo post.
  - `GET /api/posts`: Endpoint per ottenere la lista dei post.
  - `GET /api/posts/:id`: Endpoint per visualizzare un post specifico.
  - `PUT /api/posts/:id`: Endpoint per modificare un post esistente.
  - `DELETE /api/posts/:id`: Endpoint per eliminare un post.
- **MongoDB**: Usa MongoDB per la persistenza dei dati, con modelli per **Utenti**, **Post**, e **Commenti**.

### **Frontend (`/apps/frontend`):**
- **Pagine**:
  - **Homepage**: Mostra una lista di post, con possibilità di vedere il dettaglio di ciascun post.
  - **Login**: Form per il login dell'utente con email e password.
  - **Registrazione**: Form per la registrazione di un nuovo utente.
  - **Dashboard**: Un'area protetta dove l'utente può vedere i suoi post, modificarli e cancellarli.
  - **Creazione e modifica post**: Un form per scrivere o modificare i post.
  - **Visualizzazione Post**: Una pagina per visualizzare un post con i dettagli e i commenti, e la possibilità di interagire con i like e commenti.

### **Shared Module (`/packages/shared`):**
- **Componenti comuni**:
  - Componenti React riutilizzabili (e.g., Form, Button, Header, etc.)
  - Funzioni comuni come la gestione dei token JWT.
  - Utility per la validazione dei form e la gestione della connessione a MongoDB.

---

## Tecnologie e Strumenti:
- **Backend**:
  - **Node.js** con **Express** per costruire le API.
  - **MongoDB** con **Mongoose** per la gestione dei dati.
  - **JWT** per la gestione dell'autenticazione.
- **Frontend**:
  - **React** per l'interfaccia utente.
  - **Axios** o **Fetch API** per fare richieste al backend.
  - **React Router** per la gestione delle rotte.
- **Monorepo**:
  - **pnpm** come package manager.
  - **Turborepo** per gestire il monorepo con backend, frontend e codice condiviso.
  - **Git Submodules** per il codice condiviso tra frontend e backend.

---

## Fasi di Implementazione:

### 1. **Setup e configurazione iniziale**:
  - Configura il monorepo con pnpm e Turborepo.
  - Imposta i submodules per il modulo condiviso.
  - Configura la struttura di base di backend, frontend e shared.

### 2. **Backend**:
  - Crea la connessione a MongoDB.
  - Implementa il sistema di autenticazione (registrazione, login, JWT).
  - Implementa la gestione dei post (CRUD).
  - Aggiungi il sistema di commenti e like ai post.

### 3. **Frontend**:
  - Crea la struttura delle pagine (Homepage, Login, Registrazione, Dashboard).
  - Implementa la gestione dei form per la registrazione, login e creazione post.
  - Aggiungi la logica di gestione dei post, come la visualizzazione, modifica e cancellazione.
  - Implementa la visualizzazione dei commenti e like sui post.

### 4. **Testing**:
  - Scrivi test per il backend (ad esempio, testare le API per gli utenti e i post).
  - Testa il frontend (testare la navigazione tra le pagine, la gestione dei form).

### 5. **Documentazione e rifiniture**:
  - Aggiungi una documentazione di base per il progetto (come il README con le istruzioni per eseguire il progetto).
  - Ottimizza il codice e la gestione degli errori.

---

## Conclusione:
Alla fine del progetto, avrai costruito un'applicazione completa con autenticazione, gestione dei post e interazione tra gli utenti. Il sistema sarà gestito tramite un monorepo, sfruttando le tecnologie moderne come **Node.js**, **React**, **MongoDB**, **pnpm**, **Turborepo** e **Git Submodules**.
