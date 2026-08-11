# Rozdział 4 - Routing

Dogłębne omówienie systemu routingu w Next.js (App Router).

## Zakres

- Układanie plików i folderów w App Routerze
- `layout`, `page`, `loading`, `error`
- Parallel routes i inne zaawansowane wzorce routingu

## Materiały

Materiały (prezentacja, nagranie, zadanie) do tego rozdziału umieszczamy w tym folderze.

Issue: https://github.com/Solvro/Solvro/issues/232

# ☀️ Wakacyjne Wyzwanie - Rozdział 4: Routing

Witamy w pierwszym rozdziale praktycznym! Wprowadzamy tutaj podstawowe narzędzia i technologie, z którymi będziemy pracować przez resztę kursu: **Git**, **TypeScript** oraz **React**.

Plik ten zawiera instrukcje do **Zadania domowego** (do samodzielnego treningu).

## 🛠️ Wymagania wstępne

Zanim zaczniesz, upewnij się, że masz zainstalowane i skonfigurowane:

- [Node.js](https://nodejs.org/) (zalecana wersja LTS)
- Skonfigurowanego lokalnie [Gita](https://git-scm.com/)
- Środowisko programistyczne (np. VS Code)
- Zalogowanie do GitHuba w terminalu (np. poprzez CLI: `gh auth login` wybierając HTTPS)

---

## 🏠 Zadanie domowe (ProjectCard)

Twoim zadaniem jest przejście przez proces deweloperski (zrobienie forka), napisanie otypowanego komponentu wizytówki w React i zgłoszenie kodu do Code Review za pomocą Pull Requesta **wyłącznie na swoje własne repozytorium** (forka).

### Krok 1: Organizacja pracy (Git & Fork)

1. Wejdź na stronę tego repozytorium i kliknij przycisk **Fork** w prawym górnym rogu, aby utworzyć jego kopię na swoim koncie GitHub.
2. Sklonuj **swojego forka** na komputer:
   ```bash
   git clone https://github.com/TWOJ_USERNAME/NAZWA_REPOZYTORIUM.git
   ```
3. Przejdź do folderu projektu i stwórz nową gałąź (branch) dla swojego zadania:
   ```bash
   cd NAZWA_REPOZYTORIUM
   git switch -c feat/imie-nazwisko-zadanie
   ```

### Krok 2: Implementacja (React & TypeScript)

Zaimplementuj komponent `ProjectCard` (Karta Projektu).

1. **Typowanie:**

   ```typescript
   interface Technology {
     id: string; // np. UUID lub unikalny hash
     name: string;
   }

   interface ProjectCardProps {
     title: string;
     description: string;
     technologies: Technology[];
   }
   ```

2. **Logika:** Wyrenderuj dane z propsów. Pokaż te dane w komponencie za pomocą **interpolacji** (używając nawiasów klamrowych `{}`). Do wyświetlenia listy technologii użyj metody `.map()` dla tablicy `technologies`.
3. **Stan:** Dodaj przycisk zmieniający status projektu wykorzystując hook `useState` ("W trakcie" 🔄 "Ukończony").
4. **Wyświetlenie w aplikacji:** Zaimportuj stworzony komponent `ProjectCard` i wyrenderuj go w głównym komponencie aplikacji (najczęściej plik `App.tsx`), przekazując mu przykładowe dane przez propsy.

### Krok 3: Pull Request na SWOJE repozytorium

1. Zapisz i wypchnij zmiany:
   ```bash
   git add .
   git commit -m "feat: add ProjectCard component"
   git push origin feat/imie-nazwisko-zadanie
   ```
2. Przejdź na GitHuba na stronę swojego forka i kliknij **Compare & pull request**.
3. ⚠️ **BARDZO WAŻNE:** Zmień **`base repository`** (rozwijana lista po lewej stronie na górze) na **swojego forka** (`TWOJ_USERNAME/Nazwa-Repo`). Dzięki temu Pull Request otworzy się na Twoim koncie i nie zaśmieci głównego repozytorium.
4. Podeślij link do swojego otwartego Pull Requesta na naszym kanale, abyśmy mogli sprawdzić Twoje zadanie domowe!

---

## 📚 Materiały do rozdziału

- [Prezentacja ze spotkania](https://docs.google.com/presentation/d/1UE3VfjRkmJKT0ete5Tbiq7O8PIiqlJ6E/edit?usp=sharing&ouid=118332872889290210642&rtpof=true&sd=true)
