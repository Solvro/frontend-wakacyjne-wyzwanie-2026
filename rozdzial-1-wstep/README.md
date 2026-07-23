# ☀️ Wakacyjne Wyzwanie - Rozdział 1: Wstęp

Witamy w pierwszym rozdziale praktycznym! Wprowadzamy tutaj podstawowe narzędzia i technologie, z którymi będziemy pracować przez resztę kursu: **Git**, **TypeScript** oraz **React**.

Plik ten zawiera instrukcje do **Zadania warsztatowego** (robionego wspólnie) oraz **Zadania domowego** (do samodzielnego treningu).

## 🛠️ Wymagania wstępne

Zanim zaczniesz, upewnij się, że masz zainstalowane i skonfigurowane:
* [Node.js](https://nodejs.org/) (zalecana wersja LTS)
* Skonfigurowanego lokalnie [Gita](https://git-scm.com/)
* Środowisko programistyczne (np. VS Code)
* Zalogowanie do GitHuba w terminalu (np. poprzez CLI: `gh auth login` wybierając HTTPS)

---

## 💻 Część 1: Zadanie warsztatowe (MemberCard)

Twoim zadaniem jest przejście przez proces deweloperski (zrobienie forka), napisanie otypowanego komponentu wizytówki w React i zgłoszenie kodu do Code Review za pomocą Pull Requesta do **głównego repozytorium**.

### Krok 1: Organizacja pracy (Git & Fork)
1. Wejdź na stronę tego repozytorium i kliknij przycisk **Fork** w prawym górnym rogu, aby utworzyć jego kopię na swoim koncie GitHub.
2. Sklonuj **swojego forka** na komputer:
   ```bash
   git clone https://github.com/TWOJ_USERNAME/NAZWA_REPOZYTORIUM.git
   ```
3. Przejdź do folderu projektu i stwórz nową gałąź (branch):
   ```bash
   cd NAZWA_REPOZYTORIUM
   git switch -c feat/imie-nazwisko-wizytowka
   ```

### Krok 2: Implementacja (React & TypeScript)
Zaimplementuj komponent `MemberCard` ze stanem i typowaniem.

1. **Typowanie:** Użyj poniższego interfejsu:
   ```typescript
   interface MemberCardProps {
     name: string;
     role: string;
     skills: string[];
   }
   ```
2. **Wyświetlanie danych:** Wyrenderuj przekazane w propsach wartości (w przypadku tablicy `skills` użyj `.map()`).
3. **Zarządzanie stanem (Hooks):** Zaimplementuj hook `useState`. Dodaj w komponencie przycisk (np. "Zmień status"), który przełącza status kursanta ("Nieaktywny" 🔄 "Aktywny").

### Krok 3: Pull Request (Do repozytorium Solvro)
1. Zapisz zmiany i utwórz commita:
   ```bash
   git add .
   git commit -m "feat: add MemberCard component"
   git push origin feat/imie-nazwisko-wizytowka
   ```
2. Przejdź na GitHuba na stronę **swojego forka**. Kliknij **Compare & pull request**.
3. Domyślnie PR otworzy się do głównego repozytorium Solvro – **zostaw to ustawienie**.
4. Utwórz zgłoszenie.

---

## 🏠 Część 2: Zadanie domowe (ProjectCard)

Zadanie domowe ma na celu utrwalenie wiedzy. Zbudujesz podobny komponent, ale tym razem Pull Requesta wystawisz **wyłącznie na swoje własne repozytorium** (forka).

### Krok 1: Nowy Branch
Nie musisz ponownie robić forka. Będąc w folderze projektu w terminalu, wróć na główną gałąź i stwórz nową:
```bash
git switch main
git switch -b feat/imie-nazwisko-zadanie
```

### Krok 2: Implementacja (React & TypeScript)
Zaimplementuj komponent `ProjectCard` (Karta Projektu).
1. **Typowanie:** 
   ```typescript
   interface ProjectCardProps {
     title: string;
     description: string;
     technologies: string[];
   }
   ```
2. **Logika:** Wyrenderuj dane z propsów. Ponownie użyj `.map()` dla tablicy `technologies`.
3. **Stan:** Dodaj przycisk zmieniający status projektu wykorzystując `useState` ( "W trakcie" 🔄 "Ukończony").

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
* [Prezentacja ze spotkania](#) *(link zostanie zaktualizowany)*
