# ☀️ Wakacyjne Wyzwanie - Rozdział 2: Pierwszy projekt
 
Witamy w drugim rozdziale praktycznym! Stawiamy dziś pierwszy prawdziwy projekt w Next.js i poznajemy podstawy stylowania z **Tailwind CSS**.
 
## 🛠️ Wymagania wstępne
 
Zanim zaczniesz, upewnij się, że masz zainstalowane i skonfigurowane:
* [Node.js](https://nodejs.org/) (zalecana wersja LTS)
* Działające komendy `npm` oraz `npx`
* Skonfigurowanego lokalnie [Gita](https://git-scm.com/)
* Środowisko programistyczne (np. VS Code)
---
 
## 🏠 Zadanie domowe (TeamMemberCard)
 
Twoim zadaniem jest utworzenie od zera nowego projektu Next.js, a następnie zbudowanie responsywnego komponentu wizytówki członka zespołu stylowanego wyłącznie za pomocą Tailwind CSS. Kod zgłosisz do Code Review za pomocą Pull Requesta na **swoje własne repozytorium** (forka).
 
### Krok 1: Utworzenie projektu
Utwórz nowy projekt Next.js.
 
### Krok 2: Implementacja (Tailwind CSS)
Zaimplementuj komponent `TeamMemberCard` (Wizytówka Członka Zespołu).
 
1. **Typowanie:** Użyj poniższego interfejsu:
```typescript
   interface TeamMemberCardProps {
     name: string;
     role: string;
     bio: string;
     skills: string[];
   }
```
2. **Zawartość:** komponent powinien wyświetlać avatar (może być placeholder), imię i nazwisko, stanowisko, krótkie bio oraz listę umiejętności (w przypadku tablicy `skills` użyj `.map()`).
3. **Stylowanie:** wykorzystaj wyłącznie klasy narzędziowe Tailwind (bez własnego pliku CSS) – zadbaj o czytelną hierarchię wizualną).
4. **Responsywność:** karta powinna zmieniać układ w zależności od szerokości ekranu (np. na mobile elementy w kolumnie, na desktopie obok siebie) – wykorzystaj prefiksy `sm:`/`md:`/`lg:`.
### Krok 3: Wyczyszczenie domyślnego widoku
1. Otwórz `src/app/page.tsx` i usuń domyślną zawartość wygenerowaną przez Next.js (logo, teksty, linki itd.).
2. Uprość `main`, tak aby komponent wyświetlał się na środku ekranu
3. Zaimportuj i wyświetl `TeamMemberCard` w `src/app/page.tsx`.
### Krok 4: Pull Request na SWOJE repozytorium
1. Zapisz i wypchnij zmiany
2. Przejdź na GitHuba na stronę swojego forka i kliknij **Compare & pull request**.
3. ⚠️ **BARDZO WAŻNE:** Zmień **`base repository`** (rozwijana lista po lewej stronie na górze) na **swojego forka** (`TWOJ_USERNAME/Nazwa-Repo`). Dzięki temu Pull Request otworzy się na Twoim koncie i nie zaśmieci głównego repozytorium.
4. Podeślij link do swojego otwartego Pull Requesta na naszym kanale, abyśmy mogli sprawdzić Twoje zadanie domowe!
---
 
