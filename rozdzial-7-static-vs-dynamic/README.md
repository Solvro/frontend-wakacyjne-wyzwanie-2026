# ☀️ Wakacyjne Wyzwanie - Rozdział 7: Static vs Dynamic

## 🏠 Zadanie domowe - Render & SEO Lab

Zespół buduje publiczny katalog produktów. Marketing zależy na tym, aby produkty były widoczne w wyszukiwarkach i poprawnie prezentowały się po wklejeniu linku do komunikatora. Jednocześnie katalog nie musi odpytywać serwera przy każdym wejściu, a wyszukiwarka nie powinna trafiać do indeksu.

Wprowadź zmiany tak, aby aplikacja spełniała poniższe wymagania.

## 📋 Wymagania główne

### 1. Rendering Lab

Pod `/rendering-lab` znajdują się trzy widoki pokazujące aktualny czas. Każdy ma ilustrować inną strategię:

- strona statyczna zachowuje czas z momentu builda;
- strona dynamiczna pokazuje nowy czas przy każdym żądaniu;
- strona ISR odświeża czas w tle co 10 sekund.

Po buildzie sprawdź tabelę tras i upewnij się, że odzwierciedla wybraną strategię. Dla ISR pamiętaj o zachowaniu stale-while-revalidate: pierwsza odpowiedź po wygaśnięciu cache'a może jeszcze zawierać poprzednią wersję.

### 2. Katalog i wyszukiwanie

- Katalog produktów ma pozostać przyjazny SEO, ale jego zawartość może być odświeżana najwyżej raz na godzinę.
- Wyniki pod `/search?q=...` zależą od frazy w adresie URL i muszą być renderowane na żądanie.
- Wyszukiwarka nie może być indeksowana przez roboty.

Nie zmieniaj komponentów interfejsu ani sposobu filtrowania produktów - skoncentruj się na strategii renderowania i metadanych.

### 3. Metadane

Przygotuj komplet metadanych dla serwisu:

- wspólne ustawienia serwisu powinny zawierać bazowy adres, domyślny tytuł, szablon tytułów, opis oraz podstawowe dane Open Graph;
- dokument powinien być oznaczony jako polskojęzyczny;
- każdy produkt musi mieć własny tytuł, opis, canonical URL i dane Open Graph, oparte na jego danych;
- znane strony produktów powinny być wygenerowane już podczas builda;
- strona produktu oraz jej metadata nie mogą wykonywać dwóch niezależnych odczytów tego samego produktu.

Nie generuj metadanych w komponencie klienckim ani w `useEffect`. Muszą znaleźć się w HTML otrzymanym z serwera.

### 4. Pliki dla robotów

Dodaj do aplikacji mapę strony obejmującą stronę główną, katalog i wszystkie produkty. Dodaj też konfigurację robotów, która blokuje indeksowanie wyszukiwarki i wskazuje mapę strony.

---

##  Weryfikacja

Dołącz **dokładnie dwa screeny**:

1. Wynik `npm run build` z widoczną tabelą tras.
2. Jeden screen z dwoma oknami „View page source” / „Pokaż źródło strony”: jedno dla `/products/1`, drugie dla `/search?q=lamp`. Na screenie powinny być widoczne odpowiednio metadata produktu oraz dyrektywa `noindex` wyszukiwania.

Nie używaj DevTools jako dowodu - pokazuje DOM po wykonaniu JavaScriptu. Opcja „View page source” działa jednakowo w przeglądarce na Windows, macOS i Linuxie.

---


## Pull Request na swoje repozytorium

```bash
git add .
git commit -m "feat: complete chapter 7"
git push origin feat/imie-nazwisko-static-dynamic
```

Na GitHubie otwórz Pull Request **do własnego forka**. Zmień `base repository` na swoje repozytorium, aby nie utworzyć PR-a do głównego repozytorium kursu. Dołącz dwa screeny z sekcji „Weryfikacja”.
