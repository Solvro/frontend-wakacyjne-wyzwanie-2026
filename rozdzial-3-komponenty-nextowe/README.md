# ☀️ Wakacyjne Wyzwanie - Rozdział 3: Komponenty Next.js

W tym rozdziale rozwiniemy `TeamMemberCard` z poprzedniego zadania, aby poznać parę wbudowanych komponentów Next.js

---

## 🏠 Zadanie domowe

Twoim zadaniem jest ulepszenie komponentu `TeamMemberCard` z poprzedniego rozdziału o: `Image`, `Script`, `Link` oraz czcionkę z modułu `next/font`. Kod zgłosisz do Code Review za pomocą Pull Requesta na **swoje własne repozytorium** (forka).

### Krok 1: Przygotowanie pracy
1. **Zsynchronizuj swojego forka** z głównym repozytorium:
   - Wejdź na swój fork na GitHubie -> **Sync fork** -> **Update branch**.
   - Pobierz zmiany:
     ```bash
     git pull origin main
     ```
2. Stwórz nową gałąź dla zadania:
   ```bash
   git switch -c feat/imie-nazwisko-komponenty
   ```

### Krok 2: Implementacja

#### 1. Komponent `Image`
1. Zaimportuj komponent `Image` z pakietu `next/image`.
2. Dodaj do folderu `public/` plik ze zdjęciem.
3. Zastąp dotychczasowy awatar-placeholder komponentem `<Image>`. Pamiętaj, że wymaga on kilku wymaganych właściwości.

#### 2. Czcionka z `next/font`
1. Zaimportuj wybraną czcionkę z [Google Fonts](https://fonts.google.com/) z modułu `next/font/google`.
2. Stwórz jej instancję na poziomie modułu, używając łacińskich znaków.
3. Nadaj nową czcionkę do elementu wyświetlającego `role` z `TeamMemberCardProps`.
 
#### 3. Komponent `Link`
1. Zaimportuj komponent `Link` z pakietu `next/link`.
2. Na dole karty dodaj link stylowany jak przycisk klasami Tailwind z tekstem „Dowiedz się więcej".
3. Link powinien przenosić do nowej karty na strone [Solvro](https://solvro.pwr.edu.pl/pl/)

#### 4. Komponent `Script`
1. Zaimportuj komponent `Script` z pakietu `next/script` na stronie głównej.
2. Dodaj na końcu skrypt inline, który po wczytaniu strony wyświetli `alert(...)`.

### Krok 3: Pull Request na **SWOJE** repozytorium
1. Zapisz i wypchnij zmiany:
   ```bash
   git add .
   git commit -m "feat: add Next.js components to TeamMemberCard"
   git push origin feat/imie-nazwisko-komponenty
   ```
2. Przejdź na GitHuba na stronę swojego forka i kliknij **Compare & pull request**.
3. ⚠️ **BARDZO WAŻNE:** Zmień **`base repository`** (rozwijana lista po lewej stronie na górze) na **swojego forka** (`TWOJ_USERNAME/Nazwa-Repo`). Dzięki temu Pull Request otworzy się na Twoim koncie i nie zaśmieci głównego repozytorium.
4. Podeślij link do swojego otwartego Pull Requesta na naszym kanale, abyśmy mogli sprawdzić Twoje zadanie domowe!

---

## 📚 Materiały do rozdziału
* [Prezentacja ze spotkania](https://docs.google.com/presentation/d/1ZQp8qx92xkStHMkYuGGjarnHT1QSFHxb/edit?usp=sharing&ouid=103417303567841307482&rtpof=true&sd=true)
