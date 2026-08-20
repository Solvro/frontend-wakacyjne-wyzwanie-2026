# ☀️ Wakacyjne Wyzwanie - Rozdział 4: Routing

Witamy w czwartym rozdziale praktycznym! W tym zadaniu rozbudujemy komponent `TeamMemberCard` z poprzedniej lekcji w pełnoprawną aplikację. Poznasz konwencje specjalnych plików w **Next.js App Router** oraz zaawansowane wzorce routingu.

Plik ten zawiera instrukcje do **Zadania domowego** (do samodzielnego treningu).

## 🛠️ Wymagania wstępne

Zanim zaczniesz, upewnij się, że masz zainstalowane i skonfigurowane:

- [Node.js](https://nodejs.org/) (zalecana wersja LTS)
- Skonfigurowanego lokalnie [Gita](https://git-scm.com/)
- Środowisko programistyczne (np. VS Code)
- Zalogowanie do GitHuba w terminalu (np. poprzez CLI: `gh auth login` wybierając HTTPS)

---

## 🏠 Zadanie domowe

W tym zadaniu przygotowaliśmy dla ciebie komponenty `UserProfileCard` i `UserProfileList`, więc czas zrobić z nich katalog użytkowników, wykorzystując routing Nextjs'a. Kod zgłosisz do Code Review za pomocą Pull Requesta na **swoje własne repozytorium** (forka).

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

1. **Układ stron i nawigacja** Utwórz dedykowany root layout i dodaj w nim pasek nawigacyjny z komponentem `Link` z `next/link`, który pozwala przełączać się między podstronami (np. strona główna i storna z listą użytkowników).

2. **Obsługa ładowania i błędów** Stwórz komponent `loading.tsx` - dla symulowania ładowania dannych możesz skorzystać z `setTimeout(timeoutMs)`. Dodaj komponent `error.tsx` (pamiętaj o `'use client'`), który obsłuży ewentualne błędy i zaoferuje przycisk do ponownego spróbowania (reset()) - można go przetestować za pomocą `throw new Error()`.

3. **Ścieżki dynamiczne** Stwórz dynamiczny segment routingu (np. osobna podstrona dla każdego użytkownika). Pobierz parametry z `params` i obsłuż przypadek, gdy zasób o danym ID nie istnieje, wywołując funkcję `notFound()` i przygotowując widok `not-found.tsx`.

4. **Zaawansowany wzorzec routingu (Parallel Routes / Intercepting Routes)** Zaimplementuj jeden z zaawansowanych wzorców (lub oba 🥰):
   - Parallel Routes (`@slot`): Wyświetl dwa niezależne widoki równolegle w jednym layoucie, np. lista użytkowników oraz statystyka miłośników pizzy.
   - Intercepting Routes (`(.)folder`): Zaimplementuj otwieranie szczegółów użytkownika w oknie modalnym po kliknięciu w jego kartę na liście, zachowując unikalny URL (np. `/team/123`). Przy odświeżeniu strony pod tym adresem musimy zobaczyć pełnowymiarową podstronę profilu.

### Krok 3: Pull Request na SWOJE repozytorium

1. Zapisz i wypchnij zmiany:
   ```bash
   git add .
   git commit -m "feat: complete chapter 4"
   git push origin feat/imie-nazwisko-routing
   ```
2. Przejdź na GitHuba na stronę swojego forka i kliknij **Compare & pull request**.
3. ⚠️ **BARDZO WAŻNE:** Zmień **`base repository`** (rozwijana lista po lewej stronie na górze) na **swojego forka** (`TWOJ_USERNAME/Nazwa-Repo`). Dzięki temu Pull Request otworzy się na Twoim koncie i nie zaśmieci głównego repozytorium.
4. Podeślij link do swojego otwartego Pull Requesta na naszym kanale, abyśmy mogli sprawdzić Twoje zadanie domowe!

---

## 📚 Materiały do rozdziału

- [Prezentacja ze spotkania](https://docs.google.com/presentation/d/1Qs9TwkT938JYYfZ-pV7C_YmaLz7Gkvrz/edit?usp=drive_link&ouid=103985751954598875199&rtpof=true&sd=true)
