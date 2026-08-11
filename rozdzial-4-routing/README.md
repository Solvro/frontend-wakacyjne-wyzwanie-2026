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

Twoim zadaniem jest rozbudowanie aplikacji w App Routerze o strukturę folderów i widoków demonstrującą konwencje plików specjalnych oraz zaawansowane wzorce routingu w Next.js. Kod zgłosisz do Code Review za pomocą Pull Requesta na swoje własne repozytorium (forka).

### Krok 1: Przygotowanie pracy

1. **Zsynchronizuj swojego forka** z głównym repozytorium:
   - Wejdź na swój fork na GitHubie -> **Sync fork** -> **Update branch**.
   - Pobierz zmiany:
     ```bash
     git pull origin main
     ```
2. Stwórz nową gałąź dla zadania:
   ```bash
   git switch -c feat/imie-nazwisko-routing
   ```

### Krok 2: Implementacja

1. **Układ stron i nawigacja** Utwórz dedykowany układ (`layout.tsx`) dla wybranej części aplikacji. Dodaj w nim pasek nawigacyjny z komponentem `Link` z `next/link`, który pozwala przełączać się między podstronami bez pełnego przeładowania strony.

2. **Obsługa ładowania i błędów** Stwórz komponent `loading.tsx` z komponentem szkieletowym lub wskaźnikiem ładowania. Dodaj komponent `error.tsx` (pamiętaj o `'use client'`), który obsłuży ewentualne błędy i zaoferuje przycisk do ponownego spróbowania (reset()).

3. **Ścieżki dynamiczne** Stwórz dynamiczny segment routingu (np. `app/users/[id]/page.tsx`). Pobierz parametry z `params` i obsłuż przypadek, gdy zasób o danym ID nie istnieje, wywołując funkcję `notFound()` i przygotowując widok `not-found.tsx`.

4. **Zaawansowany wzorzec routingu (Parallel Routes / Intercepting Routes)** Zaimplementuj jeden z zaawansowanych wzorców (lub oba 🥰):
   - Parallel Routes (`@slot`): Wyświetl dwa niezależne widoki równolegle w jednym layoucie.
   - Intercepting Routes (`(.)folder`): Zaimplementuj otwieranie szczegółów (np. profilu) w modalu po kliknięciu w link z zachowaniem unikalnego adresu URL.

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

- [Prezentacja ze spotkania]()
