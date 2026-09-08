# ☀️ Wakacyjne Wyzwanie - Rozdział 6: Ładowanie danych

Witamy w szóstym rozdziale praktycznym! W tym zadaniu zapoznamy się z tematem pobierania danych i wyświetlaniu ich w naszej aplikacji.

Plik ten zawiera instrukcje do Zadania domowego (do samodzielnego treningu).

## 🛠️ Wymagania wstępne

Zanim zaczniesz, upewnij się, że masz zainstalowane i skonfigurowane:

- [Node.js](https://nodejs.org/) (zalecana wersja LTS)
- Skonfigurowanego lokalnie [Gita](https://git-scm.com/)
- Środowisko programistyczne (np. VS Code)
- Zalogowanie do GitHuba w terminalu (np. poprzez CLI: `gh auth login` wybierając HTTPS)

---

## 🏠 Zadanie domowe

Podczas wykonywania całego zadania, wykorzystaj wiedzę zdobytą w poprzednich wykładach wakacyjnego wyzwania.

## 🔗 Dokumentacja API (DummyJSON)

### Krok 1: zapoznaj się z dokumentacją API

Do realizacji zadania wykorzystamy darmowe, publiczne API [DummyJSON](https://dummyjson.com/docs/products):

- **Pobranie produktów:** `GET https://dummyjson.com/products`
- **Wyszukiwanie produktów:** `GET https://dummyjson.com/products/search?q={query}`
- **Dodanie produktu:** `POST https://dummyjson.com/products/add`
  - Body: `JSON.stringify({ title: string, price: number, category: string })`
  - Headers: `'Content-Type': 'application/json'`

---

## 📦 Wymagania wstępne

### Krok 2: zainstaluj potrzebne biblioteki

Zainstaluj bibliotekę TanStack Query w swoim projekcie:

```bash
npm install @tanstack/react-query
```

Skonfiguruj klienta React Query (`QueryClientProvider`) w drzewie aplikacji (np. jako komponent opakowujący `'use client'` w `app/providers.tsx` lub bezpośrednio w layoutcie).

---

## 📋 Wymagania główne (Must have)

### Krok 3: wykonaj zadanie główne i dodatkowe

### 1. Serwerowy katalog produktów (`Server Component`)

- Na podstronie katalogu (np. `app/products/page.tsx`):
  - Pobierz początkową listę produktów za pomocą natywnego `fetch()` bezpośrednio w Server Component.
  - Skonfiguruj zapytanie serwerowe z rewalidacją czasową (np. `next: { revalidate: 60 }`) lub otaguj zapytanie: `next: { tags: ['products'] }`.
  - Przekaż pobrane dane początkowe propsem (`initialData`) do komponentu klienckiego.
  - ⚠️ **Ważne:** Nie używaj `cache: 'no-store'` bez konkretnego uzasadnienia.

### 2. Kliencka lista i wyszukiwarka (`Client Component` + `useQuery`)

- Stwórz komponent kliencki (`'use client'`) renderujący produkty:
  - Użyj hooka `useQuery` z `@tanstack/react-query`.
  - Przekaż do `useQuery` wartość `initialData` otrzymaną z serwera (użytkownik nie powinien widzieć spinnera ładowania przy pierwszym wejściu na stronę).
  - Ustaw `staleTime` (np. `60_000` ms – 1 minuta), aby zapobiec nadmiarowemu odpytywaniu API przy powrocie do karty.
  - Dodaj pole wyszukiwarki (input tekstowy).
  - ⚠️ **Klucz zapytania:** Pamiętaj, aby wpisana fraza była częścią `queryKey` (np. `['products', search]`). Zmiana frazy musi skutkować wysłaniem nowego zapytania lub pobraniem z dedykowanego cache.

### 3. Dodawanie nowego produktu (`useMutation`)

- Stwórz prosty formularz dodawania produktu (pola: tytuł, cena, kategoria).
- Obsłuż dodawanie produktu za pomocą hooka `useMutation` wysyłającego request `POST` do `https://dummyjson.com/products/add`.
- W funkcji zwrotnej `onSuccess`:
  - Wywołaj `queryClient.invalidateQueries({ queryKey: ['products'] })`, aby poinformować React Query o konieczności odświeżenia danych.
  - ⚠️ **Zakaz:** Nie aktualizuj ręcznie lokalnej tablicy w `useState` ani nie przeładowuj strony przez `window.location.reload()`.

---

## 🌟 Zadania dodatkowe (Nice to have)

1. **Obsługa Suspense i błędów w Next.js:**
   - Dodaj plik `loading.tsx` w segmencie `app/products/` z komponentem zastępczym (np. szkieletem kart produktów).
   - Dodaj plik `error.tsx` (musi być `'use client'`) z obsługą błędu oraz przyciskiem ponownej próby (`reset()`).
2. **Ulubione produkty (Web Storage):**
   - Dodaj możliwość oznaczania produktów jako ulubione (np. ikona serduszka).
   - Zgodnie z wytycznymi z wykładu dotyczącymi przechowywania danych po stronie klienta, zapisuj listę ulubionych identyfikatorów w `localStorage`.
3. **Optymistyczna aktualizacja UI (Optimistic Updates):**
   - Wykorzystaj callback `onMutate` w `useMutation`, aby nowy produkt pojawił się na liście natychmiast po zatwierdzeniu formularza, jeszcze przed zakończeniem żądania sieciowego.

---

### Krok 4: Pull Request na SWOJE repozytorium

1. Zapisz i wypchnij zmiany:
   ```bash
   git add .
   git commit -m "feat: complete chapter 6"
   git push origin feat/imie-nazwisko-routing
   ```
2. Przejdź na GitHuba na stronę swojego forka i kliknij **Compare & pull request**.
3. ⚠️ **BARDZO WAŻNE:** Zmień **`base repository`** (rozwijana lista po lewej stronie na górze) na **swojego forka** (`TWOJ_USERNAME/Nazwa-Repo`). Dzięki temu Pull Request otworzy się na Twoim koncie i nie zaśmieci głównego repozytorium.
4. Podeślij link do swojego otwartego Pull Requesta na naszym kanale, abyśmy mogli sprawdzić Twoje zadanie domowe!

---

## 📚 Materiały do rozdziału

- [Prezentacja ze spotkania](https://docs.google.com/presentation/d/1wn2pwQK_3y_PJtQpL9rMdGoPUpwY2NKTIpO8_lkVkl0/edit?usp=sharing)
