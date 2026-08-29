# ☀️ Wakacyjne Wyzwanie - Rozdział 5: Shadcn i UI

Witamy w piątym rozdziale praktycznym! W tym zadaniu przerobimy wyświetlanie listy i szczegółów użytkowników z poprzedniej lekcji. Poznasz dobre praktyki budowania interfejsów oraz zaznajomisz się z biblioteką Shadcn UI.

Plik ten zawiera instrukcje do **Zadania domowego** (do samodzielnego treningu).

## 🛠️ Wymagania wstępne

Zanim zaczniesz, upewnij się, że masz zainstalowane i skonfigurowane:

- [Node.js](https://nodejs.org/) (zalecana wersja LTS)
- Skonfigurowanego lokalnie [Gita](https://git-scm.com/)
- Środowisko programistyczne (np. VS Code)
- Zalogowanie do GitHuba w terminalu (np. poprzez CLI: `gh auth login` wybierając HTTPS)

## 📦 Instalacja i konfiguracja Shadcn UI

Biblioteka Shadcn UI nie jest zainstalowana domyślnie. Twoim pierwszym zadaniem jest jej poprawne skonfigurowanie.

### 1. Inicjalizacja Shadcn
Uruchom w terminalu komendę inicjalizującą i postępuj zgodnie z instrukcjami w terminalu (wybierz domyślne style i konfigurację dla Tailwind v4):
```bash
npx shadcn@latest init
```

### 2. Dodanie wymaganych komponentów
Do zrealizowania zadań w tym rozdziale będą Ci potrzebne wybrane komponenty. Dodaj je do projektu za pomocą CLI:
```bash
npx shadcn@latest add card button avatar dialog empty spinner
```

---

## 🏠 Zadanie domowe

W tym zadaniu zaktualizowaliśmy część interfejsu o gotowe komponenty z biblioteki. **Czas na aktualizację pozostałych komponentów**. Kod zgłosisz do Code Review za pomocą Pull Requesta na **swoje własne repozytorium** (forka).

### Krok 1: Przygotowanie pracy

1. **Zsynchronizuj swojego forka** z głównym repozytorium:
   - Wejdź na swój fork na GitHubie -> **Sync fork** -> **Update branch**.
   - Pobierz zmiany:
     ```bash
     git pull origin main
     ```
2. Stwórz nową gałąź dla zadania:
   ```bash
   git switch -c feat/imie-nazwisko-shadcn
   ```
3. Przeanalizuj dokumentację Shadcn UI, zaznajom się z komponentami (różne warianty, przypadki użycia, etc). [Dokumentacja](https://ui.shadcn.com/docs/components)

### Krok 2: Implementacja

1. **Nawigacja** Przenieś nawigację z `layout.tsx` do `Navbar.tsx`, zastąp zwykłe tagi html komponentem `Tabs` z biblioteki. Zadbaj o odpowiedni `variant` komponentu.

2. **Ładowanie listy użytkowników** Zwykłe ładowanie ze `Spinner` jest nudne i przestarzałe. Zastąp zawartość `Loading` w `loading.tsx` komponentem `Skeleton` z biblioteki. Postaraj się odpowiednio dobrać szerokość i wysokość elementów Skeleton, tak aby, jak najlepiej odwzorować rozmiar `UserProfileCard`. Pamiętaj, aby dodać odpowiednie stylowanie wrappera. Ilość elementów ładowania może być dowolna (wystarczą 3). Zacznij od mapowania:
   ```tsx
   <div ...>
    {Array(3).fill(0).map((item, key) => (
      <Skeleton key={key} ... />
    ))}
   </div>
   ```

3. **Szczegóły profilu** Zamień strukturę `UserProfileDetails` zachowując możliwie taki sam styl komponentu. Użyj do tego elementów `Card` z biblioteki Shadcn. Pamiętaj, że `UserProfileDetails` jest używany również w modalu.

4. **Obsługa eventów** Przy dużej ilości kafelków, przyciski na każdym wprowadzają chaos w widoku. Domyślnie schowaj przycisk `See profile` i wyświetlaj go dopiero po najechaniu na jego rodzica `Card`. Dodaj przyjemną dla oka animację pokazywania (np. fade in, scale up).

5. [DODATKOWE] **Zmiana motywu** Dodaj możliwość zmiany motywu na 'dark', 'light' lub 'system'. Jak to zrobić znajdziesz [tutaj](https://ui.shadcn.com/docs/dark-mode/next). Pamiętaj, że musisz m.in. dodać komponent `Dropdown` używając `npx shadcn@latest add dropdown-menu`.

### Krok 3: Pull Request na SWOJE repozytorium

1. Zapisz i wypchnij zmiany:
   ```bash
   git add .
   git commit -m "feat: complete chapter 5"
   git push origin feat/imie-nazwisko-routing
   ```
2. Przejdź na GitHuba na stronę swojego forka i kliknij **Compare & pull request**.
3. ⚠️ **BARDZO WAŻNE:** Zmień **`base repository`** (rozwijana lista po lewej stronie na górze) na **swojego forka** (`TWOJ_USERNAME/Nazwa-Repo`). Dzięki temu Pull Request otworzy się na Twoim koncie i nie zaśmieci głównego repozytorium.
4. Podeślij link do swojego otwartego Pull Requesta na naszym kanale, abyśmy mogli sprawdzić Twoje zadanie domowe!

---

## 📚 Materiały do rozdziału

- [Prezentacja ze spotkania]()
