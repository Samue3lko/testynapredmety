const questionsPart1 = [
    {
        question: "Aká je definícia softvérovej metriky?",
        options: [
            "Spôsob merania určitej softvérovej veličiny alebo špecifikácie",
            "Proces automatizácie testovacích procesov v projekte",
            "Vývojový proces softvéru založený na fázach",
            "Typ softvérového licencovania pre podniky"
        ],
        correct: 0,
        explanation: "Softvérová metrika je spôsob merania určitej softvérovej veličiny alebo softvérovej špecifikácie. Používa sa na kvantitatívne hodnotenie rôznych aspektov softvérového produktu alebo procesu.",
        source: "02KSS_Metriky.pdf"
    },
    {
        question: "Čo je cieľom softvérových metrík?",
        options: [
            "Automatizovať testovanie systémov v produkcii",
            "Merať a hodnotiť aspekty vývoja softvéru",
            "Distribuovať softvérové produkty zákazníkom online",
            "Zvýchliť proces kompilácie a behu kódu"
        ],
        correct: 1,
        explanation: "Cieľom softvérových metrík je meranie a hodnotenie rôznych aspektov softvérového vývoja, čo umožňuje priebežné hodnotenie a zlepšovanie kvality softvéru.",
        source: "02KSS_Metriky.pdf"
    },
    {
        question: "Čo meria cyklomatická zložitosť programu?",
        options: [
            "Počet riadkov zdrojového kódu v projekte",
            "Počet metód v každej triede programu",
            "Počet lineárne nezávislých ciest v kóde",
            "Počet tried v celom projekte vrátane knižníc"
        ],
        correct: 2,
        explanation: "Cyklomatická zložitosť meria počet lineárne nezávislých ciest programu. Vypočíta sa vzorcom v(G) = e - n + 2, kde e je počet hrán a n je počet uzlov v grafe toku riadenia.",
        source: "02KSS_Metriky.pdf"
    },
    {
        question: "Vzorec v(G) = e - n + 2, čo predstavuje 'e'?",
        options: [
            "Počet tried v systéme projektu",
            "Počet hrán v grafe toku riadenia",
            "Počet chýb v zdrojovom kóde",
            "Počet modulov v softvérovom systéme"
        ],
        correct: 1,
        explanation: "V cyklomatickej zložitosti: e je počet hrán a n je počet uzlov v diagrame toku riadenia programu. Výsledok udáva počet lineárne nezávislých ciest.",
        source: "02KSS_Metriky.pdf"
    },
    {
        question: "Aké typy metrík poznáme v softvérovom inžinierstve?",
        options: [
            "Len produktové a procesné metriky vývoja softvéru",
            "Metriky pre výrobok, proces a zdroje projektu",
            "Iba objektovo-orientované softvérové metriky programov",
            "Len metriky pre kvalitu a dokumentáciu systému"
        ],
        correct: 1,
        explanation: "Softvérové metriky môžeme rozdeliť na: Metriky pre výrobok (veľkosť, zložitosť, spoľahlivosť), Metriky pre proces (úsilie, náklady, čas) a Metriky pre zdroje.",
        source: "02KSS_Metriky.pdf"
    },
    {
        question: "Čo je LOC metrika v softvérovom inžinierstve?",
        options: [
            "Lines of Code - počet riadkov kódu",
            "Level of Complexity - úroveň komplexnosti kódu",
            "Load of Components - záťaž komponentov systému",
            "List of Classes - zoznam tried v projekte"
        ],
        correct: 0,
        explanation: "LOC znamená Lines of Code (počet riadkov kódu) a je základnou metrikou veľkosti softvéru. Používa sa na meranie rozsahu kódu.",
        source: "02KSS_Metriky.pdf"
    },
    {
        question: "Čo meria metrika Halstead Volume?",
        options: [
            "Objem a zložitosť programu na základe operátorov",
            "Fyzický objem súborov na disku počítača",
            "Hlasitosť zvukových signálov v aplikácii multimédií",
            "Rýchlosť spracovania dát v databázovom systéme"
        ],
        correct: 0,
        explanation: "Halstead Volume meria objem a zložitosť programu na základe počtu operátorov a operandov v kóde.",
        source: "02KSS_Metriky.pdf"
    },
    {
        question: "Aké sú dva hlavné typy metrík podľa zdroja merania?",
        options: [
            "Interné a externé metriky softvérového systému",
            "Rýchle a pomalé metriky merania výkonnosti",
            "Jednoduché a zložité metriky kvality kódu",
            "Statické a dynamické metriky procesov vývoja"
        ],
        correct: 0,
        explanation: "Metriky delíme na interné (merané priamo z kódu) a externé (merané počas behu alebo používania systému).",
        source: "02KSS_Metriky.pdf"
    },
    {
        question: "Na čo slúži metrika Fan-in a Fan-out?",
        options: [
            "Meria vetranie serverovej miestnosti a chladenie systémov",
            "Meria závislosti modulov - koľko volaní prichádza/odchádza",
            "Meria rýchlosť načítania súborov z databázového systému",
            "Meria počet používateľov aplikácie v reálnom čase"
        ],
        correct: 1,
        explanation: "Fan-in meria počet modulov, ktoré volajú daný modul. Fan-out meria počet modulov, ktoré sú volané z daného modulu. Ukazuje závislosť medzi modulmi.",
        source: "02KSS_Metriky.pdf"
    },
    {
        question: "Ako pristupovať k meraniu softvéru podľa GQM?",
        options: [
            "Výber reprezentatívnych veličín metódou GQM prístupu",
            "Náhodný výber metrík bez plánovania celého procesu",
            "Meranie všetkého bez definovania cieľov projektu",
            "Použitie len najjednoduchších dostupných metrík vývoja"
        ],
        correct: 0,
        explanation: "GQM (Goal-Question-Metric) je metóda výberu reprezentatívnych veličín na meranie. Najprv určíme cieľ, potom otázky a nakoniec metriky.",
        source: "02KSS_Metriky.pdf"
    },

    // GQM (10 otázok)
    {
        question: "Čo znamená skratka GQM v softvérovom inžinierstve?",
        options: [
            "General Quality Management systém riadenia kvality",
            "Goal Question Metric prístup k meraniu",
            "Good Quality Measurement model pre testovanie",
            "Global Quality Methodology štandard pre firmy"
        ],
        correct: 1,
        explanation: "GQM znamená Goal-Question-Metric. Je to prístup zhora-nadol na vytvorenie meracieho systému založeného na cieľoch pre vývoj softvéru. Vyvinuli ho V. Basili a D. Weiss v 70-tych rokoch.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Fázy GQM podľa Berghout a Solingen sú:",
        options: [
            "Analýza, Návrh, Implementácia, Testovanie systému projektu",
            "Plánovanie, Definícia, Zbieranie dát, Interpretácia výsledkov",
            "Požiadavky, Špecifikácia, Vývoj, Údržba systému údržby",
            "Inicializácia, Exekúcia, Kontrola, Uzavretie procesu projektu"
        ],
        correct: 1,
        explanation: "Základné fázy GQM podľa Berghout a Solingen sú: 1. Plánovanie (zostavenie GQM tímu), 2. Definícia (ciele, otázky, metriky), 3. Zbieranie dát, 4. Interpretácia výsledkov.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Ktorý cieľ v GQM má správne SMART vlastnosti?",
        options: [
            "Zvýšiť celkový zisk našej spoločnosti nabudúce",
            "Zlepšiť kvalitu všetkých produktov našej firmy",
            "Znížiť chybovosť softvéru o 10 percent za rok",
            "Odstrániť úplne všetky chyby v našom softvéri"
        ],
        correct: 2,
        explanation: "Správny cieľ musí byť SMART - špecifický, merateľný, dosiahnuteľný, relevantný a časovo ohraničený. 'Zníženie chybovosti o 10 percent za rok' spĺňa všetky tieto kritériá.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Koľko dokumentov sa vypracováva vo fáze Definovanie v GQM?",
        options: [
            "Iba 2 základné dokumenty pre projektový tím",
            "3 dokumenty: GQM plán, plán merania, plán analýzy",
            "4 dokumenty vrátane podrobného testovacieho plánu projektu",
            "5 dokumentov pre kompletnú dokumentáciu celého projektu"
        ],
        correct: 1,
        explanation: "Vo fáze Definovanie sa vypracovávajú presne 3 dokumenty: GQM plán (ciele a štruktúra), plán merania (ako zbierať dáta) a plán analýzy (ako vyhodnocovať).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Úrovne v GQM paradigme (od konceptu po dáta) sú:",
        options: [
            "Konceptuálna úroveň, Operatívna úroveň, Kvantitatívna úroveň",
            "Plánovanie procesov, Realizácia cieľov, Kontrola výsledkov",
            "Analýza požiadaviek, Návrh riešenia, Implementácia systému",
            "Testovanie modulov, Integrácia komponentov, Nasadenie produkcie"
        ],
        correct: 0,
        explanation: "V GQM sú definované tri úrovne: Konceptuálna (Ciele - Goal), Operatívna (Otázky - Question) a Kvantitatívna (Metriky - Metric).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Kto vyvinul GQM prístup a kedy to bolo?",
        options: [
            "V. Basili a D. Weiss v 70-tych rokoch",
            "W. Humphrey a D. Knuth v 80-tych rokoch",
            "B. Boehm a F. Brooks v 60-tych rokoch",
            "K. Beck a M. Fowler v 90-tych rokoch"
        ],
        correct: 0,
        explanation: "GQM vyvinuli V. Basili a D. Weiss v 70-tych rokoch ako paradigmu, prístup a metodiku pre meranie v softvérovom inžinierstve.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Koľko činností má fáza Definovanie v GQM?",
        options: [
            "5 základných činností pre tím projektu",
            "11 definovaných činností pre celý proces",
            "7 hlavných činností pre manažment projektu",
            "9 kľúčových činností pre implementáciu systému"
        ],
        correct: 1,
        explanation: "Fáza Definovanie v GQM má presne 11 definovaných činností, vrátane definovania cieľov merania, revízie modelov, GQM rozhovorov a ďalších.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je GQM porada (feedback session)?",
        options: [
            "Stretnutie na prezentáciu výsledkov merania tímu",
            "Ranné stretnutie vývojového tímu každý deň",
            "Mesačná kontrola finančného rozpočtu celého projektu",
            "Ročné hodnotenie výkonnosti všetkých zamestnancov firmy"
        ],
        correct: 0,
        explanation: "GQM porada (feedback session) je stretnutie na prezentáciu výsledkov merania. Trvá 1.5-3 hodiny, prezentuje sa 15-20 grafov/obrázkov a účelom je motivovať projektový tím.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Aké je mutačné skóre v testovaní softvéru?",
        options: [
            "Počet zabitých mutantov / celkový počet mutantov",
            "Rýchlosť behu testov / celkový čas testovania",
            "Počet chýb / celkový počet riadkov kódu",
            "Pokrytie kódu / celková veľkosť projektu"
        ],
        correct: 0,
        explanation: "Mutačné skóre = počet zabitých (detegovaných) mutantov / počet mutantov. Je to miera kvality testov. Mutačné testovanie je nákladné, ale užitočné.",
        source: "06KSS_Navrh_testov.pdf"
    },
    {
        question: "Aké sú kroky GQM podľa Basili?",
        options: [
            "Charakterizovanie, Ciele, Proces, Meranie, Analýza, Uloženie",
            "Plánovanie, Realizácia, Testovanie, Nasadenie, Údržba, Kontrola",
            "Požiadavky, Analýza, Návrh, Implementácia, Testovanie, Nasadenie",
            "Inicializácia, Vykonanie, Monitorovanie, Kontrola, Uzavretie, Archivácia"
        ],
        correct: 0,
        explanation: "Kroky GQM podľa Basili: 1. Charakterizovanie projektu, 2. Definícia cieľov, 3. Výber procesu, 4. Vykonanie merania, 5. Analýza dát, 6. Spracovanie a uloženie výsledkov.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },

    // ISO 9001 A CERTIFIKÁCIA (10 otázok)
    {
        question: "Pri certifikácii ISO 9001 nebola zavedená požiadavka normy:",
        options: [
            "Systémová nezhoda, certifikácia je ohrozená rizikom",
            "Realizačná nezhoda, certifikácia prebieha v poriadku",
            "Systémová nezhoda, certifikácia je stále v poriadku",
            "Realizačná nezhoda, certifikácia je ohrozená zlou praxou"
        ],
        correct: 0,
        explanation: "Nezavedenie požiadavky normy predstavuje systémovú nezhodu, ktorá ohrozuje certifikáciu. Systémové nezhody generujú ďalšie nezhody a musia byť odstránené pred udelením certifikátu.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je systémová nezhoda v kontexte ISO 9001?",
        options: [
            "Zabudnutie jednej úlohy pracovníkom v jednom dni",
            "Nezavedenie požiadavky normy, generuje ďalšie chyby",
            "Chyba len v dokumentácii projektu bez vplyvu",
            "Malé oneskorenie v harmonograme o pár dní"
        ],
        correct: 1,
        explanation: "Systémová nezhoda znamená nezavedenie a nerealizovanie niektorej z požiadaviek normy ISO 9001. Systémové nezhody generujú ďalšie nezhody a ich opakovanie, čo znamená nedodržanie ďalších požiadaviek.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je realizačná nezhoda podľa ISO 9001?",
        options: [
            "Chyba ovplyvňujúca celý systém kvality v organizácii",
            "Nevykonanie akcií, negeneruje ďalšie chyby v systéme",
            "Kritická chyba v architektúre systému riadenia kvality",
            "Úplný nedostatok dokumentácie projektu v spoločnosti"
        ],
        correct: 1,
        explanation: "Realizačná nezhoda je nevykonanie niektorých zo stanovených akcií (činností, úkonov, požiadaviek). Vzniká zabudnutím alebo zanedbaním. Takáto nezhoda negeneruje ďalšie nezhody.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Koľko zásad manažérstva kvality má norma ISO 9000?",
        options: [
            "5 základných zásad pre riadenie kvality organizácie",
            "7 hlavných zásad manažérstva kvality celého systému",
            "9 komplexných zásad systému kvality pre firmu",
            "10 všeobecných zásad procesov riadenia kvality"
        ],
        correct: 1,
        explanation: "ISO 9000 definuje 7 hlavných zásad manažérstva kvality: Orientácia na zákazníka, Vodcovstvo, Angažovanosť pracovníkov, Procesný prístup, Systémový prístup, Neustále zlepšovanie, Prijímanie rozhodnutí na faktoch.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Benefit ISO štandardov pre softvérové inžinierstvo je:",
        options: [
            "Obmedzenie inovácií v projektoch a procesoch vývoja",
            "Zníženie rizika, vyššia dôvera zákazníkov v kvalitu",
            "Automatická kompatibilita všetkého bez ďalšej práce",
            "Povinnosť používania konkrétnych programovacích jazykov"
        ],
        correct: 1,
        explanation: "ISO štandardy prinášajú zníženie rizika a nákladov, zvyšujú dôveru zákazníka v kvalitu softvéru a pomáhajú zabezpečiť konzistentnosť procesov vo vývoji.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Z čoho sa skladá rodina noriem ISO 9000?",
        options: [
            "ISO 9000, ISO 9001, ISO 9004",
            "Len ISO 9001 pre kvalitu systémov",
            "ISO 9000 a ISO 9126 pre kvalitu",
            "ISO 9001 a ISO 25000 pre systémy"
        ],
        correct: 0,
        explanation: "Rodina ISO 9000 obsahuje tri hlavné normy: ISO 9000:2005 (základy a slovník), ISO 9001:2000 (požiadavky), ISO 9004:2000 (smernica na zabezpečenie zlepšovania).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je cieľom interného auditu ISO 9001?",
        options: [
            "Nájsť nezhody a riešenia, priestory na zlepšenie",
            "Potrestať pracovníkov za porušenie pravidiel firmy",
            "Len skontrolovať dokumentáciu bez ďalších krokov",
            "Nájsť dôvod na prepustenie neschopných zamestnancov"
        ],
        correct: 0,
        explanation: "Ciele interného auditu ISO 9001: Nájsť nezhody s požiadavkami ISO 9001, nájsť riešenie týchto nezhôd a nájsť priestory na zlepšenie systému manažérstva kvality.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je potrebné pre certifikáciu ISO 9001?",
        options: [
            "Externý audit, akreditovaná autorita, plnenie požiadaviek, znalosti",
            "Len interný audit vlastnými zamestnancami raz ročne",
            "Platba certifikačného poplatku bez ďalších požiadaviek",
            "Registrácia na webovej stránke ISO organizácie"
        ],
        correct: 0,
        explanation: "Pre certifikáciu ISO 9001 je potrebné: Externý audit, Akreditovaná certifikačná autorita, Plnenie požiadaviek podľa ISO 9001, Dodržiavanie pravidiel a postupov, Znalosti zamestnancov o systéme kvality.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Ako často prebieha recertifikácia ISO 9001?",
        options: [
            "Recertifikácia prebieha každé 3 roky pravidelne",
            "Recertifikácia je potrebná každý rok bez výnimky",
            "Certifikát je platný navždy bez obnovenia",
            "Recertifikácia závisí len od veľkosti firmy"
        ],
        correct: 0,
        explanation: "Certifikát ISO 9001 má platnosť 3 roky. Po uplynutí tohto obdobia je potrebná recertifikácia. Pravidelne sa vykonávajú aj dohľadové audity.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je procesný prístup v ISO 9000?",
        options: [
            "Chápanie a riadenie vzájomne súvisiacich procesov ako systému",
            "Postupné vykonávanie krokov jeden po druhom lineárne",
            "Náhodné vykonávanie úloh podľa aktuálnej potreby",
            "Hierarchické riadenie zhora nadol bez spätnej väzby"
        ],
        correct: 0,
        explanation: "Procesný prístup v ISO 9000 znamená chápanie a riadenie vzájomne súvisiacich procesov ako systému, čo prispieva k efektívnosti a účinnosti organizácie.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },

    // ISO 9126 CHARAKTERISTIKY KVALITY (12 otázok)
    {
        question: "Charakteristiky kvality podľa ISO 9126 sú:",
        options: [
            "Rýchlosť, Cena, Dizajn, Popularita produktu na trhu",
            "Len Funkčnosť, Spoľahlivosť a Použiteľnosť systému",
            "Funkčnosť, Spoľahlivosť, Použiteľnosť, Účinnosť, Udržiavateľnosť, Prenositeľnosť",
            "Výkon, Bezpečnosť, Dostupnosť, Škálovateľnosť aplikácie"
        ],
        correct: 2,
        explanation: "ISO 9126 definuje 6 hlavných charakteristík kvality softvéru: Funkčnosť (Functionality), Spoľahlivosť (Reliability), Použiteľnosť (Usability), Účinnosť (Efficiency), Udržiavateľnosť (Maintainability) a Prenositeľnosť (Portability).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Subcharakteristiky Funkčnosti v ISO 9126 zahŕňajú:",
        options: [
            "Výkon systému a spoľahlivosť komponentov aplikácie",
            "Vhodnosť, Presnosť, Spoluprácu, Bezpečnosť systému",
            "Len bezpečnosť proti útokom a presnosť výsledkov",
            "Rýchlosť spracovania a efektívnosť využitia zdrojov"
        ],
        correct: 1,
        explanation: "Funkčnosť má subcharakteristiky: vhodnosť (schopnosť vykonávať úlohy), presnosť (správnosť výsledkov), schopnosť spolupracovať (interakcia so systémami), bezpečnosť (ochrana pred neoprávneným prístupom) a zhoda s požiadavkami.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je Spoľahlivosť podľa ISO 9126?",
        options: [
            "Presnosť výpočtov a bezpečnosť údajov systému",
            "Udržiavanie hladiny výkonnosti pri definovaných podmienkach",
            "Rýchlosť reakcie a výkon systému pod záťažou",
            "Modularita architektúry a flexibilita dizajnu kódu"
        ],
        correct: 1,
        explanation: "Spoľahlivosť je spôsobilosť softvérového produktu udržiavať určitú hladinu výkonnosti softvérového produktu pri dodržaní definovaných prevádzkových podmienok.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Subcharakteristiky Spoľahlivosti ISO 9126 sú:",
        options: [
            "Presnosť výpočtov a bezpečnosť údajov systému",
            "Zrelosť, Odolnosť, Obnoviteľnosť systému",
            "Rýchlosť systému a výkon pod veľkou záťažou",
            "Modularita kódu a flexibilita architektúry aplikácie"
        ],
        correct: 1,
        explanation: "Spoľahlivosť zahŕňa: zrelosť/vyspelosť (eliminované chyby), odolnosť (zvládanie chýb), obnoviteľnosť (pokračovanie po chybe a obnova dát) a zhodu s požiadavkami.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo patrí pod Použiteľnosť v ISO 9126?",
        options: [
            "Výkon a efektívnosť systémov pod záťažou",
            "Zrozumiteľnosť, Zvládnuteľnosť, Prevádzkovateľnosť, Atraktivita",
            "Testovateľnosť a udržiavateľnosť zdrojového kódu",
            "Bezpečnosť a kompatibilita s inými systémami"
        ],
        correct: 1,
        explanation: "Použiteľnosť obsahuje: zrozumiteľnosť (jednoduché ovládanie), zvládnuteľnosť (učenie sa), prevádzkovateľnosť (práca bez námahy), atraktivita (vzhľad rozhrania) a zhodu s požiadavkami.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Subcharakteristiky Účinnosti ISO 9126 sú:",
        options: [
            "Reakčný čas a Využitie zdrojov systému",
            "Presnosť a bezpečnosť údajov aplikácie",
            "Modularita a flexibilita architektúry kódu",
            "Testovateľnosť a udržiavateľnosť softvéru"
        ],
        correct: 0,
        explanation: "Účinnosť má dve hlavné subcharakteristiky: reakčný čas (aká je odozva systému?) a využitie zdrojov (využíva systém zdroje efektívne?).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je Udržiavateľnosť podľa ISO 9126?",
        options: [
            "Rýchlosť reakcie systému na požiadavky používateľov",
            "Úsilie potrebné na vykonanie modifikácií softvéru",
            "Bezpečnosť údajov voči neoprávnenému prístupu",
            "Atraktivita používateľského rozhrania pre klientov"
        ],
        correct: 1,
        explanation: "Udržiavateľnosť je úsilie potrebné na vykonanie špecifikovaných modifikácií softvérového produktu. Zahŕňa analyzovateľnosť, zmeniteľnosť, stabilitu a testovateľnosť.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Subcharakteristiky Udržiavateľnosti zahŕňajú:",
        options: [
            "Rýchlosť a výkon systému pod záťažou aplikácie",
            "Analyzovateľnosť, Zmeniteľnosť, Stabilitu, Testovateľnosť",
            "Bezpečnosť a kompatibilitu s inými systémami",
            "Presnosť výpočtov a správnosť výsledkov procesov"
        ],
        correct: 1,
        explanation: "Udržiavateľnosť má subcharakteristiky: analyzovateľnosť (identifikácia problémov), zmeniteľnosť (implementácia zmien), stabilita (vyhnutie sa nežiaducim efektom) a testovateľnosť (možnosť validácie).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je Prenositeľnosť v ISO 9126?",
        options: [
            "Rýchlosť prenosu údajov medzi servermi systému",
            "Prenesenie softvéru z jedného prostredia do druhého",
            "Možnosť odovzdania projektu inému vývojárskemu tímu",
            "Dostupnosť aplikácie v mobilnej verzii pre smartfóny"
        ],
        correct: 1,
        explanation: "Prenositeľnosť je spôsobilosť softvérového produktu byť prenesený z jedného prostredia do druhého. Zahŕňa adaptabilitu, inštalovateľnosť, koexistenciu a nahraditeľnosť.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Subcharakteristiky Prenositeľnosti sú:",
        options: [
            "Rýchlosť a výkon aplikácie pod záťažou",
            "Adaptabilita, Inštalovateľnosť, Koexistencia, Nahraditeľnosť",
            "Bezpečnosť a spoľahlivosť systému",
            "Presnosť a efektívnosť výpočtov"
        ],
        correct: 1,
        explanation: "Prenositeľnosť zahŕňa: adaptabilitu (prispôsobenie prostrediu), inštalovateľnosť (inštalácia v prostredí), koexistenciu (súčinnosť s inými produktmi) a nahraditeľnosť (nahradenie iného produktu).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Kedy bol ISO 9126 prvýkrát vydaný?",
        options: [
            "V roku 1991, revidovaný v roku 2000",
            "V roku 1985, revidovaný v roku 1995",
            "V roku 2000, revidovaný v roku 2010",
            "V roku 1995, revidovaný v roku 2005"
        ],
        correct: 0,
        explanation: "ISO 9126 bol prvýkrát vydaný v roku 1991 a revidovaný v roku 2000. Neskôr bol nahradený ISO 25002 v roku 2024.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo nahradilo ISO 9126?",
        options: [
            "ISO 25002 v roku 2024 s modernými požiadavkami",
            "ISO 15504 v roku 2015 pre procesy",
            "ISO 27001 v roku 2020 pre bezpečnosť",
            "ISO 12207 v roku 2018 pre životný cyklus"
        ],
        correct: 0,
        explanation: "ISO 9126 bol nahradený normou ISO 25002 v roku 2024. ISO 25002 je súčasťou rodiny noriem SQuaRE (Systems and software Quality Requirements and Evaluation).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Kedy je vhodné použiť V-model vývoja?",
        options: [
            "Pre malé projekty s jasnými požiadavkami zákazníka",
            "Pre všetky typy projektov bez ohľadu na veľkosť",
            "Pre veľké projekty s nejasne definovanými požiadavkami",
            "Len pre projekty s veľmi častými zmenami"
        ],
        correct: 0,
        explanation: "V-model je vhodný pre malé a stredné projekty, kde sú jasne definované a pevne stanovené požiadavky. Nie je vhodný pre projekty s častými zmenami požiadaviek.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Akceptačné testy vo V-modeli sa pripravia podľa:",
        options: [
            "Špecifikovaných požiadaviek vo fáze analýzy",
            "Podľa implementovaného zdrojového kódu programu",
            "Podľa navrhnutých modulov v detailnom návrhu",
            "Podľa architektúry celého systému aplikácie"
        ],
        correct: 0,
        explanation: "Akceptačné testy sa vytvárajú vo fáze analýzy požiadaviek podľa potrieb zákazníka a špecifikovaných požiadaviek na produkt.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo testuje unit testovanie vo V-modeli?",
        options: [
            "Kompletnú integráciu všetkých modulov systému",
            "Technický návrh na úrovni kódu modulov",
            "Akceptáciu zo strany koncových používateľov",
            "Celý systém vrátane databázy a rozhraní"
        ],
        correct: 1,
        explanation: "Unit testovanie testuje na úrovni kódu a overuje technický návrh. Vykonáva sa vo fáze návrhu modulu. Unit testing overuje len technický návrh, preto nie je schopný otestovať všetky chyby.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Integračné testovanie vo V-modeli testuje:",
        options: [
            "Iba jednotlivé funkcie izolované od systému",
            "Spoluprácu všetkých modulov systému navzájom",
            "Len výkon celého systému pod veľkou záťažou",
            "Výlučne používateľské rozhranie GUI aplikácie"
        ],
        correct: 1,
        explanation: "Integračné testovanie zaisťuje, že všetky moduly spolupracujú dobre. Testy sú vytvorené vo fáze architektonického návrhu.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Systémové testovanie vo V-modeli kontroluje:",
        options: [
            "Len jednotlivé moduly izolované samostatne",
            "Kompletnú funkčnosť, výkon a regresné testovanie",
            "Výlučne integráciu všetkých komponentov systému",
            "Iba kvalitu zdrojového kódu všetkých modulov"
        ],
        correct: 1,
        explanation: "Systémové testovanie kontroluje kompletnú funkčnosť systému. Viac pozornosti sa venuje testovaniu výkonu a regresnému testovaniu.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Akceptačné testovanie vo V-modeli overuje:",
        options: [
            "Výkon aplikácie pod veľkou záťažou systému",
            "Kompatibilitu systému a nefunkcionálne požiadavky",
            "Bezpečnosť aplikácie proti hackerom útočníkov",
            "Kvalitu dokumentácie celého projektu vývoja"
        ],
        correct: 1,
        explanation: "Akceptačné testovanie zabezpečuje, že systém je kompatibilný s inými systémami. V užívateľskom prostredí sa testujú nefunkcionálne problémy ako čas načítania a výkon.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Výhoda V-modelu vývoja je:",
        options: [
            "Flexibilita pri častých zmenách požiadaviek projektu",
            "Skoré odhalenie chýb už v počiatočnom štádiu",
            "Minimálna potreba dokumentácie projektu vývoja",
            "Veľmi rýchly a efektívny vývoj aplikácie"
        ],
        correct: 1,
        explanation: "V-model je disciplinovaný model, kde sa plánovanie, testovanie a navrhovanie testov vykonáva ešte pred kódovaním. Poruchy sa zistia už v samotnom počiatočnom štádiu.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Nevýhoda V-modelu vývoja je:",
        options: [
            "Príliš jednoduchý model na použitie v praxi",
            "Nevhodný pre zložité a často sa meniace projekty",
            "Nedostatočné testovanie všetkých modulov systému",
            "Vyžaduje príliš veľa dokumentácie na projekt"
        ],
        correct: 1,
        explanation: "V-model nie je vhodný pre žiadne zložité projekty ani pre prebiehajúci projekt, ktorý je nejasný a v ktorom dochádza k zmenám v požiadavkách.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Verifikačná fáza V-modelu obsahuje tieto fázy:",
        options: [
            "Analýzu, Návrh systému, Architektúru, Modul, Kódovanie",
            "Len kódovanie a následné testovanie celého systému",
            "Výlučne plánovanie a implementáciu všetkých modulov",
            "Iba testovanie a nasadenie do produkčného prostredia"
        ],
        correct: 0,
        explanation: "Verifikačná fáza V-modelu obsahuje: Analýzu požiadaviek, Návrh systému, Architektonický návrh, Návrh modulu a Fázu kódovania.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Validačná fáza V-modelu obsahuje:",
        options: [
            "Unit, Integračné, Systémové, Akceptačné testovanie",
            "Len analýzu požiadaviek a návrh systému",
            "Výlučne kódovanie a kompiláciu programu",
            "Iba dokumentáciu a údržbu systému"
        ],
        correct: 0,
        explanation: "Validačná fáza V-modelu (pravá strana V) obsahuje: Unit testovanie, Integračné testovanie, Systémové testovanie a Akceptačné testovanie.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo sa deje vo fáze Analýza požiadaviek V-modelu?",
        options: [
            "Analyzujú sa požiadavky zákazníka, navrhujú akceptačné testy",
            "Píše sa zdrojový kód všetkých modulov systému",
            "Testuje sa výkon celého systému pod záťažou",
            "Nasadzuje sa aplikácia do produkčného prostredia"
        ],
        correct: 0,
        explanation: "V analýze požiadaviek sa analyzujú požiadavky na produkt podľa potrieb zákazníka. V tejto fáze sú akceptačné testy navrhnuté pre neskoršie použitie. Táto fáza určuje nasledujúce fázy.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo sa deje vo fáze Návrh systému V-modelu?",
        options: [
            "Pripravuje sa kompletný návrh hardvéru a komponentov",
            "Testujú sa jednotlivé moduly samostatne izolované",
            "Kóduje sa zdrojový kód všetkých funkcií",
            "Nasadzuje sa systém u zákazníka do produkcie"
        ],
        correct: 0,
        explanation: "Vo fáze Návrh systému sa pripravuje kompletný návrh systému. Je uvedený úplný popis hardvéru a všetkých technických komponentov potrebných na vývoj produktu.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo sa deje vo fáze Architektonický návrh V-modelu?",
        options: [
            "Navrhujú sa architektonické špecifikácie prepojení systému",
            "Kóduje sa implementácia všetkých modulov programu",
            "Testuje sa výkon pod maximálnou záťažou aplikácie",
            "Dokumentuje sa používateľská príručka systému"
        ],
        correct: 0,
        explanation: "V architektonickom návrhu sú navrhnuté architektonické špecifikácie. Obsahuje špecifikáciu toho, ako bude softvér interne a externe prepojený so všetkými komponentmi. Nazýva sa aj dizajn vysokej úrovne.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo sa deje vo fáze Návrh modulu V-modelu?",
        options: [
            "Špecifikuje sa vnútorný návrh všetkých modulov systému",
            "Analyzujú sa požiadavky koncových používateľov",
            "Nasadzuje sa aplikácia do testovacie ho prostredia",
            "Vykonáva sa akceptačné testovanie so zákazníkom"
        ],
        correct: 0,
        explanation: "Vo fáze Návrh modulu sa špecifikuje vnútorný návrh všetkých modulov systému. Nazýva sa nízkoúrovňový dizajn. Je dôležité, aby dizajn všetkých modulov bol v súlade s architektúrou. Unit testy sú navrhnuté v tejto fáze.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo sa deje vo fáze Kódovania V-modelu?",
        options: [
            "Vykonáva sa kódovanie dizajnu z predchádzajúcich fáz",
            "Analyzujú sa nové požiadavky od zákazníka",
            "Testuje sa kompatibilita s inými systémami",
            "Nasadzuje sa hotový systém do produkcie"
        ],
        correct: 0,
        explanation: "Vo fáze kódovania sa vykonáva kódovanie dizajnu a špecifikácie vykonané v predchádzajúcich fázach. Táto fáza zaberie najviac času zo všetkých fáz.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },

    // AGILNÝ VÝVOJ (10 otázok)
    {
        question: "Rola zákazníka v agilnom vývoji softvéru je:",
        options: [
            "Aktívna účasť počas celého vývoja projektu",
            "Pasívna - čaká na dokončenie projektu",
            "Žiadna - vývojári rozhodujú o všetkom samostatne",
            "Občasná - raz za mesiac kontroluje postup"
        ],
        correct: 0,
        explanation: "V agilnom modeli má zákazník aktívnu rolu. Vo vývojovom tíme je zástupca zákazníka, ktorý udržiava kontakt so zákazníkom počas vývoja softvéru a dôraz sa kladie na spokojnosť zákazníkov.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Hlavný princíp agilného modelu vývoja je:",
        options: [
            "Rozsiahla dokumentácia všetkých procesov vývoja",
            "Prispôsobivosť procesov a spokojnosť zákazníkov",
            "Striktné dodržiavanie počiatočného plánu projektu",
            "Minimalizovať komunikáciu v tíme pre efektivitu"
        ],
        correct: 1,
        explanation: "V agilnom modeli sa dôraz kladie na prispôsobivosť procesov a spokojnosť zákazníkov. Model bol vytvorený kvôli zmenám uprostred vývoja.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Dĺžka jednej iterácie v agilnom modeli je:",
        options: [
            "2-3 týždne pre efektívne riadenie iterácie",
            "1 týždeň pre maximálnu rýchlosť vývoja",
            "1 mesiac pre komplexnejšie funkcionality systému",
            "3 mesiace pre stabilné dodanie produktu"
        ],
        correct: 0,
        explanation: "Každá iterácia v agilnom modeli je malá, aby sa dala ľahko spravovať. Môže byť hotová za dva-tri týždne. Naraz je naplánovaná, vyvinutá a nasadená iba jedna iterácia.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Veľkosť agilného vývojového tímu by mala byť:",
        options: [
            "5-9 ľudí pre efektívnu tvárou v tvár komunikáciu",
            "2-3 ľudia pre minimalizáciu komunikačných problémov",
            "10-15 ľudí pre pokrytie všetkých špecializácií",
            "20+ ľudí pre rýchle dokončenie projektu"
        ],
        correct: 0,
        explanation: "V agilnom modeli sa odporúča, aby veľkosť vývojového tímu bola malá (5 až 9 ľudí), aby členovia tímu mohli komunikovať tvárou v tvár efektívne.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je pair programming v agilnom vývoji?",
        options: [
            "Dvaja programátori pracujú úplne samostatne oddelene",
            "Jeden kóduje, druhý kontroluje a menia si role",
            "Dvaja programátori testujú hotový kód aplikácie",
            "Programátori pracujú na odlišných projektoch firmy"
        ],
        correct: 1,
        explanation: "Pri agilnom vývoji spolupracujú dvaja programátori. Jeden kóduje a druhý kontroluje kód. Obaja programátori stále menia svoje úlohy - niekedy jeden kóduje a niekedy kontroluje.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Výhoda agilného modelu vývoja je:",
        options: [
            "Rozsiahla dokumentácia všetkého pre budúcnosť",
            "Málo chýb, krátke iterácie, kontakt so zákazníkom",
            "Dokonalé plánovanie od začiatku do konca projektu",
            "Minimálna potreba komunikácie medzi členmi tímu"
        ],
        correct: 1,
        explanation: "Výhody agilného modelu zahŕňajú: málo chýb (pair programming), krátky čas iterácie, priamy kontakt so zákazníkom, tímovú prácu a jednoduché, flexibilné procesy.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Nevýhoda agilného modelu vývoja je:",
        options: [
            "Príliš veľa dokumentácie spomaľuje vývoj projektu",
            "Zložité závislosti, nedostatok formálnej dokumentácie",
            "Je príliš pomalý na moderné projekty dneška",
            "Nefunguje vôbec pre malé projekty firiem"
        ],
        correct: 1,
        explanation: "Nevýhody: nemôže zvládnuť zložité závislosti, nedostatok formálnej dokumentácie môže vytvoriť zmätok, závislosť od zástupcu zákazníka a problémy s odhadmi.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Agilný model je kombináciou ktorých modelov?",
        options: [
            "Iteračného a inkrementálneho modelu vývoja softvéru",
            "Waterfall a V-modelu pre sekvenčný vývoj",
            "Špirálového a prototypového modelu aplikácií",
            "RAD a incremental modelu pre rýchly vývoj"
        ],
        correct: 0,
        explanation: "Agilný model je kombináciou iteračných a inkrementálnych modelov, to znamená, že pozostáva z iteračných a inkrementálnych modelov vývoja.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Aké agilné modely poznáme?",
        options: [
            "Scrum, XP, Crystal, DSDM, FDD, Lean Development",
            "Len Scrum a Kanban pre riadenie projektov",
            "Waterfall, V-model a Spiral model vývoja",
            "RAD, Prototype a Incremental model softvéru"
        ],
        correct: 0,
        explanation: "Agilné modely zahŕňajú: Scrum, Extreme Programming (XP), Crystal methods, DSDM, Feature Driven Development (FDD), Lean software development a ďalšie.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "V agilnom modeli je softvérový produkt:",
        options: [
            "Rozdelený na malé inkrementálne časti postupne",
            "Vytvorený naraz v jednom veľkom vydaní",
            "Plánovaný celý na začiatku bez zmien neskôr",
            "Dodaný zákazníkovi až po úplnom dokončení"
        ],
        correct: 0,
        explanation: "V agilnom modeli je softvérový produkt rozdelený na malé inkrementálne časti. Najskôr sa rozvíja najmenšia časť a potom väčšia. Každá prírastková časť sa vyvíja opakovane.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },

    // CMMI (8 otázok)
    {
        question: "Počet úrovní CMMI maturity modelu je:",
        options: [
            "5 úrovní od počiatočnej po optimalizujúcu",
            "3 úrovne pre jednoduchšie používanie modelu",
            "7 úrovní pre komplexné pokrytie procesov",
            "10 úrovní pre detailné rozdelenie zrelosti"
        ],
        correct: 0,
        explanation: "CMMI maturity model má 5 úrovní: 1. Počiatočná (Initial), 2. Opakovateľná (Managed), 3. Definovaná (Defined), 4. Riadená (Quantitatively Managed), 5. Optimalizujúca (Optimizing).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Capability levels v CMMI modeli sú:",
        options: [
            "6 úrovní: Neúplná, Vykonávaná, Opakovateľná, Definovaná, Riadená, Optimalizujúca",
            "Len 3 základné úrovne pre procesy organizácie",
            "4 úrovne pre jednoduchosť implementácie procesov",
            "7 komplexných úrovní schopností zrelosti procesov"
        ],
        correct: 0,
        explanation: "Capability levels: 0. Neúplná (Incomplete), 1. Vykonávaná (Performed), 2. Opakovateľná (Managed), 3. Definovaná (Defined), 4. Riadená (Quantitatively Managed), 5. Optimalizujúca (Optimizing).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Prínos CMMI pre organizáciu zahŕňa:",
        options: [
            "Zlepšenie plánovania, produktivita, kvalita, spokojnosť zákazníka",
            "Len zvýšenú produktivitu tímu bez iných benefitov",
            "Výlučne nižšie náklady na vývoj projektov",
            "Iba lepšiu dokumentáciu procesov organizácie"
        ],
        correct: 0,
        explanation: "Prínos CMMI: Zlepšenie predpovede plánovania, zvýšená produktivita, vylepšená kvalita, väčšie uspokojenie zákazníka, vyššia morálka zamestnancov, zníženie nákladov na kvalitu.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Reprezentácie CMMI modelu sú:",
        options: [
            "Stupňovitá (Maturity) a Kontinuálna (Capability)",
            "Len stupňovitá pre maturity levels organizácie",
            "Hierarchická a lineárna reprezentácia procesov",
            "Len kontinuálna pre capability levels zrelosti"
        ],
        correct: 0,
        explanation: "CMMI má dve reprezentácie: Stupňovitú (zameraná na celkovú úroveň - Maturity levels) a Kontinuálnu (zameraná na procesy - Capability levels).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Procesné oblasti CMMI zahŕňajú:",
        options: [
            "SE, SW, IPPD, SS pre rôzne aspekty vývoja",
            "Len softvérové inžinierstvo pre vývoj softvéru",
            "Výlučne systémové inžinierstvo pre systémy",
            "Iba riadenie projektov a kvalitu procesov"
        ],
        correct: 0,
        explanation: "Procesné oblasti CMMI: System Engineering (SE), Software Engineering (SW), Integrated Product and Process Development (IPPD), Supplier Sourcing (SS).",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je úroveň 1 (Initial) v CMMI?",
        options: [
            "Procesy sú nepredvídateľné, chaotické, reaktívne",
            "Procesy sú plne definované a dokumentované",
            "Procesy sú merané a riadené kvantitatívne",
            "Procesy sú neustále zlepšované systematicky"
        ],
        correct: 0,
        explanation: "Úroveň 1 (Initial/Počiatočná) - procesy sú nepredvídateľné, slabo kontrolované a reaktívne. Úspech závisí od individuálnych hrdinov.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Čo je úroveň 2 (Managed) v CMMI?",
        options: [
            "Procesy sú plánované, vykonávané, monitorované, vyhodnocované",
            "Procesy sú úplne chaotické bez kontroly",
            "Procesy sú optimalizované na maximum výkonu",
            "Procesy sú merané len štatistickými metódami"
        ],
        correct: 0,
        explanation: "Úroveň 2 (Managed/Opakovateľná) - procesy sú plánované, vykonávané, monitorované a vyhodnocované. Existuje infraštruktúra na podporu procesov.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },
    {
        question: "Lockheed Martin dosiahol maturity level 5 CMMI v roku:",
        options: [
            "2003 po postupnom zlepšovaní procesov firmy",
            "1993 hneď po zavedení CMM modelu",
            "2010 po modernizácii všetkých procesov",
            "2020 po kompletnej transformácii organizácie"
        ],
        correct: 0,
        explanation: "Lockheed Martin dosiahol maturity level 3 CMM v roku 1993 a maturity level 5 CMMI v roku 2003. Je to príklad úspešnej implementácie CMMI.",
        source: "03KSS_ModelyStandardy_GQM.pdf"
    },

    // MODELY VÝVOJA (10 otázok)
    {
        question: "Koľko základných SDLC modelov vývoja poznáme?",
        options: [
            "8 modelov: Waterfall, V, Incremental, RAD, Iterative, Spiral, Prototype, Agile",
            "Len 3 modely: Waterfall, Agile, Spiral pre vývoj",
            "5 modelov: Waterfall, V-model, Spiral, Agile, RAD",
            "10 modelov vrátane všetkých variácií procesov"
        ],
        correct: 0,
        explanation: "Základné SDLC modely: 1. Waterfall, 2. V-Model, 3. Incremental, 4. RAD, 5. Iterative, 6. Spiral, 7. Prototype, 8. Agile Model.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Waterfall model je charakteristický tým, že:",
        options: [
            "Fázy nasledujú sekvenčne jedna po druhej bez návratu",
            "Umožňuje vrátiť sa do predchádzajúcich fáz kedykoľvek",
            "Všetky fázy prebiehajú súčasne paralelne rovnako",
            "Zákazník je aktívne zapojený do každej iterácie"
        ],
        correct: 0,
        explanation: "Waterfall model je sekvenčný model, kde fázy nasledujú jedna po druhej: Requirements → Design → Implementation → Verification → Maintenance. Návrat do predchádzajúcej fázy je zložitý.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "RAD (Rapid Application Development) model je vhodný pre:",
        options: [
            "Projekty vyžadujúce rýchly vývoj s modulárnou architektúrou",
            "Veľké projekty vyžadujúce úplnú dokumentáciu všetkého",
            "Projekty kde nie je jasný harmonogram vývoja",
            "Systémy vyžadujúce veľmi vysokú spoľahlivosť kritickú"
        ],
        correct: 0,
        explanation: "RAD model je vhodný pre projekty vyžadujúce rýchly vývoj. Využíva modulárny prístup, opakované použitie komponentov a aktívnu účasť používateľov.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Incremental model znamená, že:",
        options: [
            "Softvér sa vyvíja a dodáva v postupných prírastkoch",
            "Celý softvér sa dodá naraz na konci vývoja",
            "Každá funkcia sa dokončí predtým ako začne ďalšia",
            "Testovanie prebieha len na konci celého vývoja"
        ],
        correct: 0,
        explanation: "V Incremental modeli sa softvér vyvíja a dodáva v postupných prírastkoch (incrementoch). Každý increment pridáva nové funkcionality k predchádzajúcim.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Iterative model znamená, že:",
        options: [
            "Vývoj prebieha v opakujúcich sa cykloch iterácií",
            "Každá fáza sa vykonáva len raz bez opakovania",
            "Testovanie prebieha len na úplnom konci projektu",
            "Dokumentácia sa vytvára až po dokončení vývoja"
        ],
        correct: 0,
        explanation: "Iterative model znamená, že vývoj prebieha v opakujúcich sa cykloch (iteráciách). Každá iterácia zahŕňa plánovanie, návrh, implementáciu a testovanie.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Spiral model je charakteristický tým, že:",
        options: [
            "Kombinuje iteratívny vývoj s analýzou rizík v špirále",
            "Vývoj prebieha lineárne bez opakovania fáz vôbec",
            "Riziko sa neberie do úvahy počas vývoja projektu",
            "Testovanie prebieha len na konci špirály jedenkrát"
        ],
        correct: 0,
        explanation: "Spiral model kombinuje iteratívny prístup s dôrazom na analýzu rizík. Každá špirála prechádza fázami: určenie cieľov, analýza rizík, vývoj a testovanie, plánovanie ďalšej iterácie.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Prototype model je užitočný keď:",
        options: [
            "Požiadavky nie sú jasné a potrebujeme vizualizáciu systému",
            "Požiadavky sú úplne jasné od začiatku projektu",
            "Nemáme dostatok času na vývoj prototypu vôbec",
            "Zákazník nechce vidieť prototyp pred finálnym produktom"
        ],
        correct: 0,
        explanation: "Prototype model je užitočný keď požiadavky nie sú jasné. Vytvára sa funkčný prototyp, ktorý pomáha lepšie pochopiť požiadavky zákazníka a systém.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Hlavný rozdiel medzi Incremental a Iterative modelom je:",
        options: [
            "Incremental pridáva funkcie, Iterative vylepšuje celý systém",
            "Sú to úplne identické modely bez rozdielu",
            "Incremental je rýchlejší ako Iterative model vývoja",
            "Iterative vyžaduje viac dokumentácie ako Incremental model"
        ],
        correct: 0,
        explanation: "Incremental model pridáva nové funkcionality v prírastkoch. Iterative model vylepšuje celý systém v každej iterácii. Často sa kombinujú spolu v praxi.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Ktorý model je najvhodnejší pre veľké kritické systémy?",
        options: [
            "Waterfall alebo V-model s dôrazom na dokumentáciu",
            "Agile model s minimálnou dokumentáciou procesov",
            "RAD model pre rýchly vývoj bez procesov",
            "Prototype model bez finálneho dokončenia produktu"
        ],
        correct: 0,
        explanation: "Pre veľké kritické systémy sú vhodnejšie Waterfall alebo V-model, ktoré kladú dôraz na dôkladné plánovanie, dokumentáciu a testovanie v každej fáze.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Ktorý model je najvhodnejší pre malé projekty s nejasnou víziou?",
        options: [
            "Agile alebo Prototype model pre flexibilitu projektu",
            "Waterfall model s pevným plánom od začiatku",
            "V-model s dôrazom na testovanie každej fázy",
            "Spiral model s analýzou rizík v každej iterácii"
        ],
        correct: 0,
        explanation: "Pre malé projekty s nejasnou víziou sú vhodnejšie Agile alebo Prototype modely, ktoré umožňujú flexibilitu, rýchle zmeny a priebežnú spätnú väzbu od zákazníka.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },

    // TESTOVANIE (12 otázok)
    {
        question: "Čo je black-box testovanie?",
        options: [
            "Testovanie bez znalosti vnútornej implementácie kódu",
            "Testovanie vnútornej štruktúry zdrojového kódu aplikácie",
            "Testovanie len databázových tabuliek systému projektu",
            "Testovanie len výkonu systému pod veľkou záťažou"
        ],
        correct: 0,
        explanation: "Black-box testovanie je funkcionálne testovanie bez znalosti vnútornej implementácie. Testeri sa zaujímajú len o to, či systém vykonáva funkcie správne podľa špecifikácie.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je white-box testovanie?",
        options: [
            "Testovanie výlučne grafického rozhrania GUI aplikácie",
            "Testovanie so znalosťou vnútornej štruktúry kódu",
            "Testovanie len dokumentácie projektu vývojového tímu",
            "Akceptačné testovanie koncovými používateľmi systému"
        ],
        correct: 1,
        explanation: "White-box testovanie je štrukturálne testovanie s plnou znalosťou vnútornej implementácie kódu. Používa sa napr. pri unit testovaní modulov.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo sú regresné testy v testovaní softvéru?",
        options: [
            "Testy výlučne nových funkcií systému projektu",
            "Overenie, že zmeny nespôsobili nové chyby v existujúcej funkcionalite",
            "Testy výkonu systému pod maximálnou záťažou",
            "Bezpečnostné testy proti útokom hackerov na systém"
        ],
        correct: 1,
        explanation: "Regresné testy overujú, že zmeny, opravy alebo nové funkcie nespôsobili chyby v už existujúcej a fungujúcej funkcionalite systému aplikácie.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je smoke testing v procese testovania?",
        options: [
            "Testovanie bezpečnosti proti útokom hackerov systému",
            "Základné testovanie kritických funkcií pre stabilitu buildu",
            "Testovanie výkonu pod vysokou záťažou aplikácie",
            "Finálne komplexné akceptačné testovanie so zákazníkom"
        ],
        correct: 1,
        explanation: "Smoke testing je základné testovanie kritických funkcií, aby sa overilo, či je build dostatočne stabilný na to, aby mohol pokračovať v ďalšom podrobnom testovaní.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je load testing v testovaní aplikácií?",
        options: [
            "Testovanie funkcionality jednotlivých modulov systému",
            "Testovanie správania systému pod očakávanou záťažou",
            "Testovanie bezpečnosti aplikácie proti útokom",
            "Testovanie používateľského rozhrania GUI aplikácie"
        ],
        correct: 1,
        explanation: "Load testing testuje správanie systému pod očakávanou záťažou. Overuje sa, či systém dokáže zvládnuť predpokladaný počet používateľov a transakcií.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je stress testing v testovaní softvéru?",
        options: [
            "Testovanie pod extrémnou záťažou nad limity systému",
            "Testovanie funkcionality za normálnych podmienok prevádzky",
            "Testovanie používateľského rozhrania aplikácie GUI",
            "Testovanie dokumentácie projektu vývojového tímu"
        ],
        correct: 0,
        explanation: "Stress testing testuje správanie systému pod extrémnou záťažou nad očakávanými limitmi. Cieľom je nájsť bod zlomu systému a otestovať jeho obnoviteľnosť.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je usability testing v testovaní aplikácií?",
        options: [
            "Testovanie výkonu systému pod záťažou používateľov",
            "Testovanie používateľskej prívetivosti a jednoduchosti používania",
            "Testovanie bezpečnosti aplikácie proti útokom",
            "Testovanie kompatibility s inými systémami"
        ],
        correct: 1,
        explanation: "Usability testing testuje používateľskú prívetivosť a jednoduchost používania systému. Overuje sa, či používatelia dokážu efektívne dosiahnuť svoje ciele.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je security testing v testovaní softvéru?",
        options: [
            "Testovanie funkcionality bezpečnostných funkcií systému",
            "Testovanie zraniteľností a odolnosti proti útokom",
            "Testovanie výkonu šifrovacích algoritmov aplikácie",
            "Testovanie používateľských práv v systéme"
        ],
        correct: 1,
        explanation: "Security testing testuje zraniteľnosti systému a jeho odolnosť proti útokom. Overuje sa, či systém chráni dáta a udržiava ich integritu a dôvernosť.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je compatibility testing v testovaní softvéru?",
        options: [
            "Testovanie funkcionality aplikácie na rôznych platformách",
            "Testovanie kompatibility s rôznymi systémami, prehliadačmi, zariadeniami",
            "Testovanie integrácie s databázovými systémami",
            "Testovanie používateľského rozhrania GUI aplikácie"
        ],
        correct: 1,
        explanation: "Compatibility testing overuje, či systém funguje správne na rôznych platformách, operačných systémoch, prehliadačoch a zariadeniach podľa špecifikácie.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je alpha testing v procese testovania?",
        options: [
            "Testovanie vykonávané interným tímom vo firme",
            "Testovanie vykonávané koncovými používateľmi externe",
            "Testovanie výkonu systému pod záťažou aplikácie",
            "Testovanie bezpečnosti proti útokom hackerov"
        ],
        correct: 0,
        explanation: "Alpha testing je testovanie vykonávané interným tímom testovania vo vývojovej firme, zvyčajne na konci vývoja pred beta testovaním.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Čo je beta testing v procese testovania?",
        options: [
            "Testovanie vykonávané interným tímom testovania firmy",
            "Testovanie vykonávané externými koncovými používateľmi",
            "Testovanie výkonu aplikácie pod veľkou záťažou",
            "Testovanie bezpečnosti systému proti útokom"
        ],
        correct: 1,
        explanation: "Beta testing je testovanie vykonávané externými koncovými používateľmi v reálnom prostredí. Poskytuje spätnú väzbu pred oficiálnym vydaním produktu.",
        source: "04KSS_ModelKvalityModelTestovania.pdf"
    },
    {
        question: "Kedy prestať testovať softvér podľa best practices?",
        options: [
            "Len keď je vyčerpaný rozpočet na testovanie",
            "Keď sú splnené kritériá pokrytia, chyby opravené, čas uplynul",
            "Keď vývojári povedia, že je to hotové",
            "Keď zákazník prestane naliehať na dodanie"
        ],
        correct: 1,
        explanation: "Prestať testovať keď: sú splnené kritériá pokrytia, všetky závažné chyby opravené, vyčerpaný rozpočet/čas, všetky testy vykonané aspoň raz, výstupy skontrolované.",
        source: "05KSS_TestovanieStandardy.pdf"
    }
];