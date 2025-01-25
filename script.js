document.addEventListener("DOMContentLoaded", function () {
    // Terms Modal
    const termsModal = document.getElementById("termsModal");
    const acceptButton = document.getElementById("acceptTerms");
    const rejectButton = document.getElementById("rejectTerms");

    if (!localStorage.getItem("termsAccepted")) {
        termsModal.classList.remove("hidden");
    }

    acceptButton?.addEventListener("click", function () {
        localStorage.setItem("termsAccepted", "true");
        termsModal.classList.add("hidden");
        alert("Hvala što ste prihvatili uslove!");
    });

    rejectButton?.addEventListener("click", function () {
        alert("Morate prihvatiti uslove da biste nastavili.");
    });
    function disableBodyScroll() {
        document.body.style.overflow = 'hidden';
    }
    
    // Funkcija za vraćanje skrolanja na body
    function enableBodyScroll() {
        document.body.style.overflow = '';
    }
    

// Funkcija za blokiranje skrolanja na body
function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
}

// Funkcija za vraćanje skrolanja na body
function enableBodyScroll() {
    document.body.style.overflow = '';
}

// Funkcija za otvaranje modala
function openModal() {
    document.getElementById('termsModal').classList.remove('hidden');
    disableBodyScroll(); // Onemogući skrolanje na body
}

// Funkcija za zatvaranje modala
function closeModal() {
    document.getElementById('termsModal').classList.add('hidden');
    enableBodyScroll(); // Vrati skrolanje na body
}




    

    // Hamburger Menu
    const hamburgerButton = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    hamburgerButton?.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
    });

    document.addEventListener("click", function (e) {
        if (!mobileMenu.contains(e.target) && !hamburgerButton.contains(e.target)) {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
        }
    });

    // Adjust body padding for fixed header
    const header = document.querySelector("header");
    const body = document.body;

    function adjustBodyPadding() {
        const headerHeight = header.offsetHeight;
        body.style.paddingTop = `${headerHeight}px`;
    }

    adjustBodyPadding();
    window.addEventListener("resize", adjustBodyPadding);

    // Language Menu (Desktop & Mobile)
    const languageButton = document.getElementById("language-button");
    const languageMenu = document.getElementById("language-menu");
    const currentFlag = document.getElementById("current-flag");
    const currentLang = document.getElementById("current-lang");

    const languageButtonMobile = document.getElementById("language-button-mobile");
    const languageMenuMobile = document.getElementById("language-menu-mobile");
    const currentFlagMobile = document.getElementById("current-flag-mobile");
    const currentLangMobile = document.getElementById("current-lang-mobile");

    const switchLanguage = (lang) => {
        const elements = document.querySelectorAll("[data-key]");
        elements.forEach((element) => {
            const key = element.getAttribute("data-key");
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === "INPUT") {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update flag and language text for desktop and mobile
        if (lang === "sr") {
            currentFlag.src = "/slike/srbijaTaman.png";
            currentLang.textContent = "SRB";
            currentFlagMobile.src = "/slike/srbijaTaman.png";
            currentLangMobile.textContent = "SRB";
        } else if (lang === "en") {
            currentFlag.src = "/slike/en.png";
            currentLang.textContent = "ENG";
            currentFlagMobile.src = "/slike/en.png";
            currentLangMobile.textContent = "ENG";
        }

        localStorage.setItem("language", lang);
    };

    // Desktop language menu
    languageButton?.addEventListener("click", () => {
        languageMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", function (e) {
        if (!languageMenu.contains(e.target) && !languageButton.contains(e.target)) {
            languageMenu.classList.add("hidden");
        }
    });

    // Mobile language menu
    languageButtonMobile?.addEventListener("click", () => {
        languageMenuMobile.classList.toggle("hidden");
    });

    document.addEventListener("click", function (e) {
        if (!languageMenuMobile.contains(e.target) && !languageButtonMobile.contains(e.target)) {
            languageMenuMobile.classList.add("hidden");
        }
    });

    // Language option selection (both desktop and mobile)
    document.querySelectorAll(".language-option").forEach((option) => {
        option.addEventListener("click", (e) => {
            const lang = e.currentTarget.getAttribute("data-lang");
            switchLanguage(lang);
            languageMenu.classList.add("hidden");
            languageMenuMobile.classList.add("hidden");
        });
    });

    // Set language on page load
    const savedLanguage = localStorage.getItem("language") || "sr";
    switchLanguage(savedLanguage);
});


const translations = {
    sr: {
        "nav-home": "Početna",
        "nav-about": "O nama",
        "nav-contact": "Kontakt",
        "nav-privacy": "Politika privatnosti",
        "nav-terms": "Uslovi korišćenja",
        "hero-title": "Upoznajte SavR",
        "hero-subtitle": "SavR – kad ušteda znači više.",
        "hero-description": "Spas za prirodu i Vaš budžet. Dobrodošli u SavR, platformu koja ima jednostavnu, ali moćnu misiju – da smanji rasipanje hrane i namirnica sa ograničenim rokom trajanja.",
        "hero-button": "Saznaj više",
        "about-title": "SavR Misija",
        "about-paragraph-1": "Dobrodošli u SavR, platformu koja ima jednostavnu, ali moćnu misiju – da smanji rasipanje hrane i namirnica sa ograničenim rokom trajanja. Naša ideja je jednostavna: spasimo ono što je još uvek korisno i učinimo ga dostupnim svima, po povoljnijim cenama.",
        "about-paragraph-2": "Naš market place povezuje vas sa trgovcima koji nude proizvode pred istekom roka trajanja, omogućavajući vam da kupujete kvalitetne namirnice, štedite novac i istovremeno brinete o našoj planeti.",
        "about-subtitle": "Zašto birati SavR?",
        "about-benefit-1": "Štediš – Ostvari velike uštede kupovinom proizvoda sa sniženim cenama.",
        "about-benefit-2": "Štitiš planetu – Zajedno smanjujemo otpad i čuvamo prirodne resurse.",
        "about-benefit-3": "Jednostavno koristiš – Naša aplikacija i sajt su prilagođeni svim korisnicima, od tinejdžera do ekoloških heroja.",
        "about-paragraph-3": "Verujemo da svaki mali korak ka očuvanju prirode ima veliki značaj. Naša planeta, naša Majka Priroda, treba našu pomoć – i to odmah!",
        "cta-title": "Pridruži se pokretu!",
        "cta-description": "Kupuj pametno, živi odgovorno i inspiriši druge da budu deo promene. Sa SavR-om, tvoj izbor znači više od uštede – on znači budućnost za sve nas.",
        "cta-input-placeholder": "Unesite svoj email",
        "cta-button": "Prijavi se",
        "footer-rights": "&copy; 2024 SavR. Sva prava zadržana.",
        "footer-contact-title": "Kontakt",
        "footer-address": "Poštanska adresa: VITEZOVA KARAĐORĐEVE ZVEZDE 55A, stan 14, BEOGRAD (ZVEZDARA), ZVEZDARA, Srbija",
        "footer-phone": "Telefon: +381 63 8898408",


        "privacy-intro-title": "Uvod",
        "privacy-intro-content": `
            U SavR-u, posvećeni smo zaštiti i poštovanju vaše privatnosti. Ova Politika privatnosti objašnjava kako
            prikupljamo, koristimo i štitimo vaše lične podatke kada koristite našu aplikaciju i veb sajt. Cenimo vaše
            poverenje i posvećeni smo osiguravanju vaše privatnosti i bezbednosti podataka.<br><br>
            Korišćenjem SavR-a, saglasni ste sa prikupljanjem i upotrebom podataka u skladu sa ovom politikom. Ova Politika
            privatnosti se primenjuje na sve korisnike naših usluga, uključujući kupce, posetioce i druge koji interaguju sa SavR-om.<br><br>
            Ako imate bilo kakvih pitanja ili nedoumica u vezi sa ovom politikom, slobodno nas kontaktirajte.
        `
    ,
    "title-pp":"Politika Privatnosti",
    "data-collection-title": "Prikupljanje podataka",
    "data-collection-content": `
        SavR prikuplja različite vrste ličnih podataka od korisnika kako bi omogućio pružanje naših usluga i
        poboljšao korisničko iskustvo. Vrste podataka koje prikupljamo uključuju:<br><br>
        <strong>Lični podaci:</strong> Informacije koje korisnici unose prilikom registracije, kao što su ime, email adresa, broj telefona.<br><br>
        <strong>Podaci o plaćanju:</strong> Informacije vezane za transakcije, kao što su podaci o plaćanju, istorija kupovina i transakcija.<br><br>
        <strong>Podaci o lokaciji:</strong> Geolokacijski podaci koji omogućavaju korisnicima da pronađu i rezervišu proizvode u njihovoj blizini.<br><br>
        <strong>Podaci o upotrebi:</strong> Informacije o načinu na koji korisnici koriste našu aplikaciju, uključujući podatke o uređaju, učestalosti upotrebe i obrazcima korišćenja.<br><br>
        <strong>Kolačići i druge tehnologije praćenja:</strong> Koristimo kolačiće i slične tehnologije za prikupljanje podataka o načinu na koji korisnici koriste našu aplikaciju i kako možemo poboljšati uslugu.<br><br>
        Korisnici su odgovorni za pružanje tačnih i potpunih informacija prilikom registracije i korišćenja naših usluga.
    `,
    "data-usage-title": "Upotreba podataka",
    "data-usage-content": `Prikupljeni podaci koriste se za različite svrhe, uključujući:<br><br>
    ● <strong>Pružanje usluga:</strong> Vaši podaci se koriste kako bismo vam omogućili korišćenje SavR aplikacije, kao što je pronalaženje i rezervisanje proizvoda u blizini.<br><br>
    ● <strong>Komunikacija:</strong> Vaši podaci mogu se koristiti za slanje potvrda o porudžbinama, obaveštenja o statusu naloga, kao i za slanje marketinških materijala i promocija u vezi sa našim uslugama. U svakom trenutku možete se odjaviti sa liste za primanje promocija.<br><br>
    ● <strong>Poboljšanje usluga:</strong> Analiziramo podatke o korišćenju aplikacije kako bismo poboljšali naše usluge, razvijali nove funkcionalnosti i optimizovali korisničko iskustvo.<br><br>
    ● <strong>Pravni zahtevi:</strong> Vaši podaci mogu biti korišćeni za ispunjavanje zakonskih obaveza, kao što su odgovaranje na pravne zahteve ili procesuiranje transakcija prema zakonu.<br><br>
    Važno je napomenuti da se vaši podaci neće koristiti za svrhe koje nisu jasno navedene u ovoj Politici privatnosti.`,
    "user-rights-title": "Prava korisnika",
    "user-rights-content": `Korisnici imaju određena prava u vezi sa svojim ličnim podacima u skladu sa GDPR-om. Ova prava uključuju:<br><br>
    ● <strong>Pravo na pristup:</strong> Korisnici imaju pravo da zatraže potvrdu o tome da li se njihovi lični podaci obrađuju, kao i da pristupe tim podacima.<br><br>
    ● <strong>Pravo na ispravku:</strong> Korisnici mogu zahtevati ispravku netačnih ili nepotpunih podataka koji se odnose na njih.<br><br>
    ● <strong>Pravo na brisanje:</strong> Korisnici mogu zahtevati brisanje svojih ličnih podataka u određenim okolnostima, kao što je kada podaci više nisu potrebni za svrhe za koje su prikupljeni.<br><br>
    ● <strong>Pravo na ograničenje obrade:</strong> Korisnici mogu zatražiti da se obrada njihovih podataka ograniči, na primer, kada osporavaju tačnost podataka.<br><br>
    ● <strong>Pravo na prenosivost podataka:</strong> Korisnici imaju pravo da dobiju svoje lične podatke u strukturiranom, uobičajenom formatu i prenesu ih drugom pružaocu usluga.<br><br>
    ● <strong>Pravo na prigovor:</strong> Korisnici mogu uložiti prigovor na obradu svojih podataka u slučaju kada se obrada temelji na opravdanom interesu, a oni se protive takvoj obradi.<br><br>
    Korisnici mogu ostvariti svoja prava tako što će nas kontaktirati putem navedenih kontakata u ovoj politici privatnosti.`,
    "data-sharing-title": "Deljenje podataka",
    "data-sharing-content": `SavR može deliti lične podatke korisnika sa određenim trećim stranama u sledećim slučajevima:<br><br>
    ● <strong>Pružatelji usluga:</strong> Deljenje podataka sa kompanijama koje nam pomažu u obavljanju naših usluga, kao što su procesori plaćanja, analitičke usluge ili kompanije koje nam pomažu u održavanju aplikacije.<br><br>
    ● <strong>Pravni zahtevi:</strong> Ako to zahteva zakon, možemo deliti vaše lične podatke sa vladinim organima ili drugim relevantnim vlastima kako bismo ispunili zakonske obaveze ili odgovorili na pravne zahteve.<br><br>
    ● <strong>Transferi poslovanja:</strong> U slučaju spajanja, akvizicije ili prodaje, vaši podaci mogu biti preneti kao deo imovine koja se prenosi. U tom slučaju, obavestićemo vas pre nego što vaši podaci budu preneti i postanu predmet nove politike privatnosti.<br><br>
    SavR se obavezuje da neće prodavati niti iznajmljivati vaše lične podatke trećim stranama bez vaše saglasnosti, osim u slučajevima predviđenim zakonom.`,
    "data-security-title": "Bezbednost podataka",
    "data-security-content": `SavR preduzima sve potrebne mere kako bi zaštitio lične podatke korisnika od neovlašćenog pristupa,
    otkrivanja, izmene ili uništenja. To uključuje:<br><br>
    ● <strong>Šifrovanje:</strong> Koristimo šifrovanje za zaštitu podataka tokom prenosa i skladištenja.<br><br>
    ● <strong>Kontrola pristupa:</strong> Pristup ličnim podacima je ograničen na zaposlene i partnere koji imaju potrebnu ovlašćenost da obrade te podatke, i to samo kada je to neophodno.<br><br>
    ● <strong>Redovne provere sigurnosti:</strong> Sprovodimo redovne sigurnosne provere i auditove kako bismo identifikovali potencijalne slabosti i poboljšali zaštitu podataka.<br><br>
    Iako se trudimo da obezbedimo maksimalnu sigurnost, nijedna metoda prenosa ili skladištenja podataka nije 100% sigurna. Stoga ne možemo garantovati potpunu sigurnost vaših podataka, ali činimo sve što je u našoj moći da minimiziramo rizik.`,

    "data-retention-title": "Zadržavanje podataka",
    "data-retention-content": `SavR čuva lične podatke korisnika samo onoliko dugo koliko je to neophodno za ispunjenje svrha za koje su podaci prikupljeni, uključujući ispunjavanje zakonskih obaveza, rešavanje sporova i izvršavanje ugovornih obaveza.<br><br>
    ● <strong>Rok čuvanja:</strong> Podaci koji nisu potrebni za pružanje usluga, kao što su podaci o neaktivnim korisnicima, biće izbrisani ili anonimizovani nakon što postane jasno da više nisu potrebni za njihove originalne svrhe.<br><br>
    ● <strong>Zakonski zahtevi:</strong> U nekim slučajevima, podaci se mogu čuvati duže kako bismo ispunili zakonske obaveze, kao što su porezi, računovodstvo ili zahtev zakona za čuvanje podataka.<br><br>
    Nakon isteka roka zadržavanja, podaci će biti bezbedno izbrisani ili anonimizovani.`,

    "cookies-title": "Kolačići i druge tehnologije praćenja",
    "cookies-content": `SavR koristi kolačiće i slične tehnologije za prikupljanje informacija o tome kako korisnici koriste našu aplikaciju i veb sajt. Kolačići su male datoteke koje se čuvaju na vašem uređaju i omogućavaju nam da analiziramo ponašanje korisnika i poboljšamo uslugu.<br><br>
    <strong>Vrste kolačića koje koristimo:</strong><br><br>
    ● <strong>Kolačići za analizu:</strong> Pomažu nam da pratimo kako korisnici koriste aplikaciju, što nam omogućava da poboljšamo korisničko iskustvo.<br>
    ● <strong>Funkcionalni kolačići:</strong> Omogućavaju osnovne funkcionalnosti aplikacije, kao što su zapamćivanje vaših postavki ili jezičkih preferencija.<br>
    ● <strong>Kolačići za ciljanje i oglašavanje:</strong> Koristimo ih da bismo pružili relevantne oglase korisnicima na osnovu njihovih interesa.<br><br>
    <strong>Upravljanje kolačićima:</strong> Korisnici mogu upravljati postavkama kolačića putem postavki u aplikaciji ili podešavanjima svog pretraživača. Imajte na umu da isključivanje kolačića može uticati na funkcionalnost aplikacije i korisničko iskustvo.<br><br>
    Korišćenjem SavR-a, korisnici pristaju na upotrebu kolačića u skladu sa ovom politikom. Ako se ne slažete sa upotrebom kolačića, možete ih onemogućiti putem svojih postavki.`,
    "policy-changes-title": "Izmene politike privatnosti",
    "policy-changes-content": `SavR zadržava pravo da u bilo kojem trenutku ažurira ili izmeni ovu Politiku privatnosti. Kada se izvrše značajne promene, obavestićemo vas putem obaveštenja unutar aplikacije ili putem emaila, ako je to primenljivo.<br><br>
    Preporučujemo da redovno proveravate ovu stranicu kako biste bili informisani o eventualnim promenama. Nastavak korišćenja naših usluga nakon što obavestimo korisnike o promenama smatraće se prihvatanjem novih uslova.<br><br>
    Sve promene u Politici privatnosti stupaju na snagu odmah nakon što budu objavljene na ovoj stranici.`,
    "contact-info-title": "Kontakt informacije",
        "contact-info-content": `Ako imate bilo kakvih pitanja ili zahteva u vezi sa vašim ličnim podacima ili ovom Politikom privatnosti, možete nas kontaktirati putem sledećih kanala:<br><br>
        ● Email: <a href="mailto:office@savr.rs" class="text-blue-500 hover:underline">office@savr.rs</a><br>
        ● Poštanska adresa: VITEZOVA KARAĐORĐEVE ZVEZDE 55A, stan 14, BEOGRAD (ZVEZDARA), ZVEZDARA, Srbija<br>
        ● Telefon: <a href="tel:+381638898408" class="text-blue-500 hover:underline">+381 63 8898408</a><br><br>
        Pokušaćemo da odgovorimo na vaša pitanja u najkraćem mogućem roku. Ako imate bilo kakvih nedoumica u vezi sa vašim pravima ili kako upravljamo vašim podacima, slobodno nas kontaktirajte.`,
    "btn-home": "Nazad na Početnu",
    "title-tc":"Uslovi korišćenja",
    "intro-title": "1. Uvod",
        "intro-content": `
            Dobrodošli u SavR, platformu koja povezuje korisnike sa partnerima kao što su restorani, pekare, prodavnice i drugi objekti, radi smanjenja rasipanja hrane. Misija SavR-a je da smanji bacanje hrane pružanjem prilike korisnicima da po sniženim cenama kupe proizvode koji bi inače bili odbačeni. Korišćenjem Aplikacije, prihvatate da ste upoznati sa i saglasni sa ovim Uslovima korišćenja, kao i sa svim dodatnim politikama i pravilima koja su ovde navedena ili na koja se upućuje, uključujući Politiku privatnosti.<br><br>
            SavR posluje kao paušalni obrt pod nazivom SavR 2024 u vlasništvu Veljko Jokić PR, sa registriranim sedištem na adresi Vitezova Karađorđeve zvezde 55a, Beograd. Kao registrovani preduzetnik u Republici Srbiji, SavR deluje kao posrednik između korisnika i partnera, omogućavajući rezervaciju i preuzimanje viška hrane po povoljnim cenama. SavR 2024 ne poseduje i ne upravlja proizvodima, već pruža tehnološku platformu koja povezuje korisnike sa partnerima radi smanjenja otpada i promocije održivosti.<br><br>
            SavR posluje isključivo kao posrednik i ne preuzima odgovornost za hranu koja se nudi putem Aplikacije; sve transakcije i pružanje hrane su odgovornost naših Partnera. Korišćenje SavR-a omogućava korisnicima da pretražuju dostupne ponude, rezervišu proizvode i preuzmu ih u predviđenom periodu od strane Partnera.<br><br>
            Ovi Uslovi regulišu vaše pristupanje, pretragu, rezervacije i ostale funkcionalnosti u okviru aplikacije. SavR zadržava pravo izmene ovih Uslova u skladu sa članom [broj člana za izmene]. Vaša je odgovornost da se upoznate sa važećim Uslovima prilikom svakog korišćenja Aplikacije.<br><br>
            Ukoliko imate bilo kakva pitanja u vezi sa ovim Uslovima ili načinom na koji SavR funkcioniše, molimo vas da nas kontaktirate na: <a href="mailto:office@savr.rs" class="text-blue-500 hover:underline">office@savr.rs</a>.
        `
    ,
    "definitions-title": "2. Definicije",
    "definitions-content": `
        U ovim Uslovima korišćenja, sledeći izrazi imaju definisana značenja, osim ako kontekst drugačije zahteva:<br><br>
        ● <strong>„Korisnik“:</strong> Fizičko lice koje koristi aplikaciju SavR za pregled, rezervaciju i kupovinu viška hrane.<br><br>
        ● <strong>„Partner“:</strong> Pravna ili fizička lica, uključujući restorane, pekare, prodavnice i druge ugostiteljske objekte, koji nude hranu putem aplikacije.<br><br>
        ● <strong>„Rezervacija“:</strong> Proces kojim korisnik rezerviše hranu ili proizvode ponuđene od strane Partnera putem aplikacije.<br><br>
        ● <strong>„Aplikacija“:</strong> Mobilna aplikacija / Web-site SavR, uključujući sve povezane funkcionalnosti i usluge.<br><br>
        ● <strong>„SavR“:</strong> Ime platforme koja posluje kao posrednik između Korisnika i Partnera.
    `,


    "registration-title": "3. Registracija i Korisnički Nalog",
    "registration-content": `
        <strong>Uslovi za registraciju:</strong> Da biste kreirali i koristili nalog u aplikaciji SavR, morate imati najmanje 18 godina. Prilikom registracije, korisnici su obavezni da pruže tačne, potpune i ažurne informacije, uključujući ime, adresu e-pošte i druge podatke potrebne za registraciju. Prijava putem naloga trećih strana (Google, Facebook, Apple) je dozvoljena, pod uslovom da se saglasite sa deljenjem relevantnih podataka sa nama.<br><br>
        <strong>Tačnost informacija:</strong> Korisnici su dužni da održavaju tačnost i ažurnost informacija u svom nalogu. SavR nije odgovoran za posledice koje mogu nastati usled lažnih ili netačnih podataka.<br><br>
        <strong>Poverljivost podataka:</strong> Korisnici su odgovorni za čuvanje poverljivosti svojih pristupnih podataka (npr. lozinke) i za sve aktivnosti koje se izvrše putem njihovog naloga. Obavezujete se da nas odmah obavestite u slučaju neovlašćenog pristupa ili upotrebe vašeg naloga.<br><br>
        <strong>Deljenje naloga i zloupotreba:</strong> Zabranjeno je deljenje naloga sa trećim licima. Svaka zloupotreba, neovlašćeni pristup ili pokušaj kršenja pravila može rezultirati suspenzijom ili trajnim ukidanjem naloga.<br><br>
        <strong>Pristup trećih strana:</strong> Ako koristite nalog treće strane za prijavu, odgovorni ste za poštovanje uslova i pravila te platforme. SavR nije odgovoran za radne ili sigurnosne incidente povezane sa pristupom putem trećih strana.<br><br>
        <strong>Ukidanje naloga:</strong> SavR zadržava pravo da, po sopstvenoj diskreciji, ukine ili suspenduje vaš nalog u slučaju kršenja Uslova korišćenja, zloupotrebe aplikacije, lažnih informacija ili drugog ponašanja koje može naneti štetu nama, našim korisnicima ili Partnerima.
    `,

    "usage-title": "4. Korišćenje Aplikacije",
    "usage-content": `
        <strong>Pristup i pregled ponuda:</strong> SavR omogućava korisnicima da pregledaju ponude Partnera, uključujući dostupne proizvode i cene, putem intuitivnog korisničkog interfejsa. Korisnici mogu pretraživati i filtrirati ponude prema različitim kriterijumima, kao što su tip hrane, geografska lokacija i vreme preuzimanja.<br><br>
        
        <strong>Proces rezervacije:</strong><br>
        ● <strong>Kreiranje rezervacije:</strong> Kada korisnik pronađe željenu ponudu, može izvršiti rezervaciju putem aplikacije. Rezervacija je potvrđena tek kada uplata bude uspešno obrađena putem odabrane metode plaćanja.<br>
        ● <strong>Potvrda rezervacije:</strong> Korisnici će dobiti potvrdu rezervacije koja sadrži sve relevantne informacije, uključujući vreme i mesto preuzimanja proizvoda.<br>
        ● <strong>Obaveza preuzimanja:</strong> Korisnici se obavezuju da će preuzeti rezervisane proizvode u predviđenom vremenskom periodu na lokaciji Partnera. U slučaju nepreuzimanja rezervacije, korisnik gubi pravo na povraćaj sredstava, osim ako nije drugačije definisano u ovim Uslovima.<br>
        ● <strong>Preuzimanje proizvoda:</strong> <br>
        - <strong>Verifikacija rezervacije:</strong> Prilikom dolaska na lokaciju Partnera, korisnik mora pokazati potvrdu rezervacije putem aplikacije. Nakon verifikacije, Partner će korisniku predati rezervisani proizvod.<br>
        - <strong>Problemi sa kvalitetom:</strong> U slučaju da korisnik smatra da rezervisani proizvod nije odgovarajućeg kvaliteta, mora odmah kontaktirati Partnera na licu mesta. SavR nije odgovoran za rešavanje sporova između korisnika i Partnera u vezi sa kvalitetom proizvoda, ali može posredovati u komunikaciji kada je to moguće.<br><br>
        
        <strong>Zabrane korišćenja:</strong><br>
        Korisnicima je strogo zabranjeno:<br>
        ● Lažno kreiranje rezervacija ili pokušaj prevare.<br>
        ● Ponašanje koje ometa rad Partnera ili drugih korisnika.<br>
        ● Upotreba aplikacije za bilo kakve nezakonite radnje, uključujući pokušaje neovlašćenog pristupa, distribuciju štetnih softverskih kodova ili slične aktivnosti koje mogu ugroziti rad aplikacije.<br><br>
        
        <strong>Privremena ili trajna suspenzija naloga:</strong> SavR zadržava pravo da privremeno suspenduje ili trajno ukine korisnički nalog zbog kršenja ovih Uslova, zloupotrebe ili bilo koje druge aktivnosti koja šteti radu aplikacije ili saradnji sa Partnerima.
    `,

    "payments-title": "5. Plaćanja i Povraćaji",
    "payments-content": `
        <strong>Metode plaćanja:</strong> Sve transakcije u aplikaciji SavR obrađuju se preko trećih lica, kao što su /. Prihvatanjem plaćanja, korisnici se saglašavaju sa uslovima korišćenja pružalaca usluga plaćanja.<br><br>
        
        <strong>Nepovratna sredstva:</strong> Politika SavR-a je da ne vrši povraćaj sredstava za rezervacije koje korisnici ne preuzmu u predviđenom vremenskom okviru. Ova politika je osmišljena kako bi se očuvala misija aplikacije – smanjenje rasipanja hrane. Nepreuzimanjem rezervisanih proizvoda, hrana bi mogla završiti kao otpad, čime bi se kompromitovala suština SavR-ove platforme. <br><br>
        Ipak, povraćaji sredstava su mogući u slučajevima kada korisnik na preuzimanju utvrdi da proizvod ne ispunjava dogovoreni kvalitet. U takvim situacijama, korisnik mora odmah kontaktirati Partnera, a SavR će posredovati u komunikaciji, kada je to moguće.<br><br>
        
        <strong>Problemi sa plaćanjem:</strong> U slučaju problema sa obradom plaćanja, korisnici su dužni da obaveste SavR tim za korisničku podršku radi što bržeg rešavanja. SavR ne preuzima odgovornost za greške koje proizilaze iz tehničkih problema trećih lica uključenih u proces plaćanja.
    `,

        "partner-responsibility-title": "6. Odgovornost Partnera za Proizvode",
        "partner-responsibility-content": `
            <strong>Posrednička uloga SavR-a:</strong> SavR deluje isključivo kao platforma za povezivanje korisnika sa Partnerima koji nude višak hrane. SavR ne poseduje, ne kontroliše, niti upravlja hranom koja se nudi putem aplikacije. Sve transakcije i razmena proizvoda dešavaju se isključivo između korisnika i Partnera.<br><br>
            
            <strong>Kvalitet i bezbednost hrane:</strong> Partneri su isključivo odgovorni za kvalitet, sastav, bezbednost i sve relevantne informacije o proizvodima koje nude. Ovo uključuje, ali se ne ograničava na, svežinu, sastojke, alergene i deklaraciju proizvoda. Partneri su obavezni da korisnicima pruže tačne i ažurirane informacije o sastojcima, mogućim alergenima i svim drugim relevantnim karakteristikama proizvoda. Korisnik je dužan da proveri sve relevantne informacije o proizvodima pri preuzimanju i pre konzumiranja.<br><br>
            
            <strong>Odricanje odgovornosti:</strong> SavR ne preuzima nikakvu odgovornost za greške, propuste ili neslaganja koja se odnose na kvalitet, sadržaj, sastav ili bezbednost proizvoda. Korisnici preuzimaju proizvode na sopstvenu odgovornost, a sve eventualne reklamacije moraju biti upućene direktno Partneru. SavR ne garantuje tačnost informacija o hrani prikazanih u aplikaciji i ne preuzima odgovornost za bilo kakve štetne posledice koje mogu nastati zbog nepravilne deklaracije proizvoda ili neadekvatnog kvaliteta hrane.<br><br>
            
            <strong>Reklamacije i sporovi:</strong> Korisnici koji imaju primedbe ili reklamacije na kvalitet proizvoda su dužni da to odmah prijave Partneru, na licu mesta, pri preuzimanju proizvoda. SavR može pružiti podršku u komunikaciji između korisnika i Partnera, ali ne garantuje rešavanje spora. Partneri su odgovorni za rešavanje reklamacija prema važećim zakonima i pravilima koje regulišu kvalitet hrane.<br><br>
            
            <strong>Pravo na odbijanje reklamacija:</strong> U određenim slučajevima, Partner može odbiti reklamaciju, posebno ako korisnik ne postupi u skladu sa uputstvima za preuzimanje ili ne preuzme proizvod u predviđenom vremenskom roku.
        `,

        "user-rights-title": "7. Prava i Obaveze Korisnika",
        "user-rights-content": `
            <strong>Odgovorno korišćenje:</strong> Korisnici su obavezni da koriste aplikaciju SavR na zakonit, odgovoran i pristojan način. Zabranjeno je vršenje bilo kakvih radnji koje bi mogle ometati rad aplikacije, narušiti sigurnost, zloupotrebiti naloge drugih korisnika ili ometati poslovanje Partnera.<br><br>
            
            <strong>Ažuriranje podataka:</strong> Korisnici se obavezuju da svoje podatke održavaju tačnim i ažurnim. Svaka izmena u ličnim podacima mora biti ažurirana putem korisničkog naloga.<br><br>
            
            <strong>Zabrana zloupotrebe:</strong> Zabranjeno je:<br>
            ● Lažno kreiranje rezervacija ili korišćenje aplikacije u svrhe koje su suprotne zakonu.<br>
            ● Pristupanje tuđim nalozima bez dozvole ili korišćenje informacija trećih lica bez njihovog pristanka.<br>
            ● Širenje netačnih, uvredljivih ili štetnih informacija putem aplikacije.<br><br>
            
            <strong>Interakcija sa Partnerima:</strong> Korisnici su dužni da se ponašaju s poštovanjem prema Partnerima i njihovim zaposlenima prilikom preuzimanja rezervisanih proizvoda. Svako neprimereno ponašanje može rezultirati suspenzijom naloga.<br><br>
            
            <strong>Odgovornost za radnje:</strong> Korisnici prihvataju punu odgovornost za sve aktivnosti izvršene putem svog naloga i saglasni su da odmah prijave svaki oblik neovlašćenog pristupa ili zloupotrebe.<br><br>
            
            <strong>Povratne informacije i recenzije:</strong> Korisnici mogu ostavljati povratne informacije i recenzije o iskustvu sa Partnerima. Recenzije moraju biti tačne i ne smeju sadržati uvredljive, diskriminatorne ili netačne informacije. SavR zadržava pravo uklanjanja sadržaja koji krši pravila.
        `,

        "liability-title": "8. Ograničenje Odgovornosti",
        "liability-content": `
            <strong>Opšte odricanje odgovornosti:</strong> Korišćenje aplikacije SavR odvija se na sopstvenu odgovornost korisnika. Aplikacija se pruža „kao takva“, bez bilo kakvih izričitih ili implicitnih garancija, uključujući, ali ne ograničavajući se na garancije prikladnosti za određenu namenu, tačnost, bezbednost ili neprekidnost rada.<br><br>
            
            <strong>Odgovornost za proizvode:</strong> SavR deluje kao posrednik između korisnika i Partnera. Ne preuzimamo odgovornost za kvalitet, sadržaj, bezbednost ili bilo koju karakteristiku proizvoda koje nude Partneri. Korisnici snose punu odgovornost za proveru kvaliteta proizvoda pri preuzimanju.<br><br>
            
            <strong>Tehnički problemi:</strong> SavR nije odgovoran za bilo kakve tehničke probleme ili greške koje mogu nastati prilikom korišćenja aplikacije, uključujući, ali ne ograničavajući se na probleme sa pristupom aplikaciji, gubitak podataka ili greške pri plaćanju.<br><br>
            
            <strong>Izuzetak od odgovornosti:</strong> SavR neće biti odgovoran za bilo kakve indirektne, slučajne, posebne, posledične ili kaznene štete koje proizlaze iz korišćenja ili nemogućnosti korišćenja aplikacije, čak i ako smo obavešteni o mogućnosti takvih šteta. Ovo uključuje, ali nije ograničeno na gubitak dobiti, ugleda, podataka ili drugih nematerijalnih gubitaka.<br><br>
            
            <strong>Povezane usluge trećih lica:</strong> SavR koristi usluge trećih lica za obradu plaćanja i druge funkcionalnosti. Ne preuzimamo odgovornost za rad ovih trećih lica, uključujući, ali ne ograničavajući se na greške u transakcijama, sigurnosne probleme ili kašnjenja prilikom obrade plaćanja.<br><br>
            
            <strong>Bezbednost informacija:</strong> Iako primenjujemo tehničke i organizacione mere za zaštitu podataka, SavR ne garantuje apsolutnu sigurnost informacija prilikom prenosa preko interneta ili čuvanja na našim serverima.
        `,

        "privacy-policy-title": "9. Politika Privatnosti i Zaštita Podataka",
        "privacy-policy-content": `
            <strong>Prikupljanje i obrada podataka:</strong> SavR prikuplja i obrađuje lične podatke korisnika, uključujući ime, email adresu, telefonski broj, podatke o lokaciji, istoriju rezervacija i podatke o plaćanju, kao i tehničke podatke poput IP adresa i informacija o uređaju. Prikupljanje podataka vrši se u skladu sa važećim zakonima o zaštiti podataka, uključujući GDPR.<br><br>
            
            <strong>Svrha obrade podataka:</strong><br>
            ● <strong>Izvršenje usluga:</strong> Podaci se koriste za upravljanje korisničkim nalozima, obrade rezervacija, plaćanja i komunikaciju.<br>
            ● <strong>Analiza i poboljšanje usluga:</strong> Prikupljeni podaci pomažu u analizi korisničkog iskustva i optimizaciji aplikacije.<br>
            ● <strong>Marketinške aktivnosti:</strong> Korisnicima se mogu slati promotivne poruke uz saglasnost.<br><br>
            
            <strong>Deljenje podataka sa trećim licima:</strong><br>
            ● Partnerima za potrebe izvršenja rezervacija.<br>
            ● Trećim pružaocima usluga, uključujući one za obradu plaćanja (/).<br>
            ● Nadležnim organima kada je zakonom obavezno.<br><br>
            
            <strong>9.1 GDPR Usaglašenost</strong><br>
            ● <strong>Pravna osnova za obradu:</strong> Podaci se obrađuju na osnovu zakonske osnove, ugovorne obaveze, legitimnog interesa ili saglasnosti korisnika.<br>
            ● <strong>Prava korisnika prema GDPR-u:</strong><br>
            - Pravo na pristup: Korisnici mogu zatražiti kopiju podataka koje SavR obrađuje.<br>
            - Pravo na ispravku: Ispravka netačnih ili nepotpunih podataka.<br>
            - Pravo na brisanje ("pravo na zaborav"): Korisnici mogu zatražiti brisanje podataka, osim kada postoji zakonski osnov za zadržavanje.<br>
            - Pravo na ograničenje obrade: Privremeno ograničenje obrade na zahtev korisnika.<br>
            - Pravo na prenosivost podataka: Dobijanje podataka u mašinski čitljivom formatu.<br>
            - Pravo na prigovor: Prigovor na obradu podataka na osnovu legitimnog interesa ili za potrebe direktnog marketinga.<br>
            - Pravo na povlačenje saglasnosti: Korisnici mogu povući saglasnost za obradu podataka u bilo kom trenutku.<br>
            ● <strong>Kontakt za ostvarivanje prava:</strong> Za ostvarivanje svojih prava, korisnici mogu kontaktirati nas na <a href="mailto:savr.info.rs@gmail.com" class="text-blue-500 hover:underline">savr.info.rs@gmail.com</a>.<br>
            ● <strong>Pravo na pritužbu:</strong> Korisnici mogu podneti pritužbu nadzornom telu za zaštitu podataka.<br><br>
            
            <strong>Kolačići i tehnologije praćenja:</strong><br>
            ● <strong>Upotreba kolačića:</strong> Kolačići se koriste za analizu saobraćaja, poboljšanje funkcionalnosti i personalizaciju usluga.<br>
            ● <strong>Upravljanje kolačićima:</strong> Korisnici mogu upravljati postavkama kolačića putem svog uređaja ili pregledača.<br><br>
            
            <strong>Izmene Politike:</strong> SavR zadržava pravo na izmene ove Politike. O izmenama će korisnici biti obavešteni putem aplikacije.
        `,

        "terms-changes-title": "10. Izmene Uslova",
        "terms-changes-content": `
            <strong>Pravo na izmene:</strong> SavR zadržava pravo da izmeni ili dopuni ove Uslove korišćenja u bilo kom trenutku. Sve izmene će biti objavljene u okviru aplikacije i stupiće na snagu u trenutku objavljivanja, osim ako nije drugačije naznačeno.<br><br>
            
            <strong>Obaveštavanje korisnika:</strong> Korisnici će biti obavešteni o svim bitnim izmenama Uslova putem aplikacije, email-a ili drugih odgovarajućih kanala komunikacije.<br><br>
            
            <strong>Prihvatanje izmena:</strong> Dalje korišćenje aplikacije nakon objavljivanja izmena smatra se prihvatanjem novih Uslova. Ukoliko se korisnik ne slaže sa izmenama, može prestati da koristi aplikaciju i obrisati svoj nalog.
        `,

     

        "dispute-resolution-title": "11. Rešavanje Sporova",
        "dispute-resolution-content": `
            <strong>Neformalno rešavanje sporova:</strong> Pre bilo kakvog pravnog postupka, korisnici se podstiču da kontaktiraju SavR putem emaila na <a href="mailto:office@savr.rs" class="text-blue-500 hover:underline">office@savr.rs</a> radi pokušaja neformalnog rešavanja spora. Naš cilj je da rešimo sve nesuglasice brzo i efikasno u obostranom interesu.<br><br>
            
            <strong>Primena zakona:</strong> Ovi Uslovi se tumače i primenjuju u skladu sa zakonima Republike Srbije, uključujući, ali ne ograničavajući se na zakone o zaštiti potrošača i e-trgovini.<br><br>
            
            <strong>Nadležnost sudova:</strong> U slučaju spora koji se ne može rešiti neformalnim putem, strane prihvataju nadležnost sudova Republike Srbije, pri čemu se sporovi rešavaju pred nadležnim sudom prema mestu registrovanja SavR kao paušalnog obrta.<br><br>
            
            <strong>Odgovornost u okviru pravnog statusa:</strong> Kao pravno lice koje posluje kao paušalni obrt, SavR upozorava korisnike da, u skladu sa važećim zakonima, odgovornost SavR-a može imati lične implikacije vlasnika. U tom smislu, sve obaveze, ograničenja i prava koja proizilaze iz poslovanja SavR-a biće tumačena u skladu sa ovim statusom.<br><br>
            
            <strong>Potrošačka zaštita:</strong> Korisnici imaju pravo da se obrate nadležnim telima za zaštitu potrošača u slučaju spora koji uključuje kvalitet ili uslove pružanja usluga.
        `,



















},
    en: {
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-contact": "Contact",
        "nav-privacy": "Privacy Policy",
        "nav-terms": "Terms and Conditions",
        "hero-title": "Discover SavR",
        "hero-subtitle": "SavR – where savings mean more.",
        "hero-description": "A solution for nature and your budget. Welcome to SavR, a platform with a simple yet powerful mission – to reduce food waste and products with a limited shelf life.",
        "hero-button": "Learn More",
        "about-title": "SavR Mission",
        "about-paragraph-1": "Welcome to SavR, a platform with a simple yet powerful mission – to reduce food waste and products with a limited shelf life. Our idea is simple: save what is still useful and make it accessible to everyone at affordable prices.",
        "about-paragraph-2": "Our marketplace connects you with vendors offering products nearing their expiration date, allowing you to buy quality groceries, save money, and care for our planet at the same time.",
        "about-subtitle": "Why Choose SavR?",
        "about-benefit-1": "Save – Achieve significant savings by purchasing discounted products.",
        "about-benefit-2": "Protect the planet – Together, we reduce waste and conserve natural resources.",
        "about-benefit-3": "Easy to use – Our app and website are designed for all users, from teenagers to eco-heroes.",
        "about-paragraph-3": "We believe every small step toward protecting nature has great significance. Our planet, our Mother Nature, needs our help – and it needs it now!",
        "cta-title": "Join the Movement!",
        "cta-description": "Shop smart, live responsibly, and inspire others to be part of the change. With SavR, your choice means more than savings – it means a future for all of us.",
        "cta-input-placeholder": "Enter your email",
        "cta-button": "Sign Up",
        "footer-rights": "&copy; 2024 SavR. All rights reserved.",
        "footer-contact-title": "Contact",
        "footer-address": "Postal Address: VITEZOVA KARAĐORĐEVE ZVEZDE 55A, Apt 14, BELGRADE (ZVEZDARA), ZVEZDARA, Serbia",
        "footer-phone": "Phone: +381 63 8898408",


        "privacy-intro-title": "Introduction",
        "privacy-intro-content": `
            At SavR, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we
            collect, use, and safeguard your personal data when you use our application and website. We value your
            trust and are dedicated to ensuring your privacy and data security.<br><br>
            By using SavR, you consent to the collection and use of data in accordance with this policy. This Privacy
            Policy applies to all users of our services, including customers, visitors, and others interacting with SavR.<br><br>
            If you have any questions or concerns regarding this policy, feel free to contact us.
        `
    ,
    "title-pp":"Privacy Policy",
    "data-collection-title": "Data Collection",
    "data-collection-content": `
        SavR collects various types of personal data from users to enable our services and
        improve the user experience. The types of data we collect include:<br><br>
        <strong>Personal Data:</strong> Information users provide during registration, such as name, email address, and phone number.<br><br>
        <strong>Payment Data:</strong> Information related to transactions, such as payment details, purchase history, and transactions.<br><br>
        <strong>Location Data:</strong> Geolocation data that allows users to find and book products nearby.<br><br>
        <strong>Usage Data:</strong> Information on how users interact with our application, including device data, usage frequency, and usage patterns.<br><br>
        <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to collect data on how users engage with our application and improve our service.<br><br>
        Users are responsible for providing accurate and complete information during registration and when using our services.
    `,
    "data-usage-title": "Data Usage",
    "data-usage-content": `The data collected is used for various purposes, including:<br><br>
    ● <strong>Service Provision:</strong> Your data is used to enable you to use the SavR application, such as finding and reserving products nearby.<br><br>
    ● <strong>Communication:</strong> Your data may be used to send order confirmations, account status updates, and promotional materials related to our services. You can opt out of receiving promotional materials at any time.<br><br>
    ● <strong>Service Improvement:</strong> We analyze usage data to improve our services, develop new features, and optimize the user experience.<br><br>
    ● <strong>Legal Requirements:</strong> Your data may be used to comply with legal obligations, such as responding to legal requests or processing transactions in accordance with the law.<br><br>
    Your data will not be used for purposes not explicitly outlined in this Privacy Policy.`,
    "user-rights-title": "User Rights",
        "user-rights-content": `Users have certain rights regarding their personal data under GDPR. These rights include:<br><br>
        ● <strong>Right of Access:</strong> Users have the right to request confirmation of whether their personal data is being processed and to access such data.<br><br>
        ● <strong>Right to Rectification:</strong> Users can request the correction of inaccurate or incomplete data concerning them.<br><br>
        ● <strong>Right to Erasure:</strong> Users can request the deletion of their personal data in certain circumstances, such as when the data is no longer necessary for the purposes for which it was collected.<br><br>
        ● <strong>Right to Restrict Processing:</strong> Users can request that the processing of their data be limited, for example, when disputing the accuracy of the data.<br><br>
        ● <strong>Right to Data Portability:</strong> Users have the right to receive their personal data in a structured, commonly used format and transfer it to another service provider.<br><br>
        ● <strong>Right to Object:</strong> Users can object to the processing of their data when such processing is based on legitimate interests, and they oppose such processing.<br><br>
        Users can exercise their rights by contacting us through the details provided in this Privacy Policy.`,
    
        "data-sharing-title": "Data Sharing",
        "data-sharing-content": `SavR may share users' personal data with specific third parties in the following cases:<br><br>
        ● <strong>Service Providers:</strong> Sharing data with companies that assist us in delivering our services, such as payment processors, analytics services, or companies that help maintain the application.<br><br>
        ● <strong>Legal Requirements:</strong> If required by law, we may share your personal data with government authorities or other relevant bodies to fulfill legal obligations or respond to legal requests.<br><br>
        ● <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale, your data may be transferred as part of the assets being transferred. In such cases, we will notify you before your data is transferred and becomes subject to a different Privacy Policy.<br><br>
        SavR is committed to not selling or renting your personal data to third parties without your consent, except as permitted by law.`,
        "data-security-title": "Data Security",
        "data-security-content": `SavR takes all necessary measures to protect users' personal data from unauthorized access, disclosure,
        alteration, or destruction. This includes:<br><br>
        ● <strong>Encryption:</strong> Using encryption to secure data during transmission and storage.<br><br>
        ● <strong>Access Control:</strong> Limiting access to personal data to employees and partners who are authorized to process such data, and only when necessary.<br><br>
        ● <strong>Regular Security Audits:</strong> Conducting regular security checks and audits to identify potential vulnerabilities and enhance data protection.<br><br>
        While we strive to ensure maximum security, no method of data transmission or storage is 100% secure. Thus, we cannot guarantee complete data security but will do everything possible to minimize risks.`,
    
        "data-retention-title": "Data Retention",
        "data-retention-content": `SavR retains users' personal data only as long as necessary to fulfill the purposes for which it was collected, including compliance with legal obligations, dispute resolution, and the execution of contractual obligations.<br><br>
        ● <strong>Retention Period:</strong> Data no longer required for service provision, such as data of inactive users, will be deleted or anonymized once it is clear they are no longer needed for their original purposes.<br><br>
        ● <strong>Legal Requirements:</strong> In some cases, data may be retained longer to fulfill legal obligations, such as tax or accounting requirements.<br><br>
        Once the retention period expires, data will be securely deleted or anonymized.`,

        "cookies-title": "Cookies and Tracking Technologies",
        "cookies-content": `SavR uses cookies and similar technologies to collect information about how users interact with our application and website. Cookies are small files stored on your device that allow us to analyze user behavior and improve the service.<br><br>
        <strong>Types of Cookies We Use:</strong><br><br>
        ● <strong>Analytics Cookies:</strong> Help us monitor how users interact with the application, enabling us to enhance the user experience.<br>
        ● <strong>Functional Cookies:</strong> Enable essential functionalities of the application, such as remembering your settings or language preferences.<br>
        ● <strong>Targeting and Advertising Cookies:</strong> Used to provide users with relevant advertisements based on their interests.<br><br>
        <strong>Managing Cookies:</strong> Users can manage cookie preferences through application settings or their browser settings. Note that disabling cookies may affect application functionality and user experience.<br><br>
        By using SavR, users agree to the use of cookies in accordance with this policy. If you disagree with the use of cookies, you can disable them through your settings.`,


        "policy-changes-title": "Privacy Policy Changes",
        "policy-changes-content": `SavR reserves the right to update or modify this Privacy Policy at any time. When significant changes are made, we will notify you via an in-app notification or email, if applicable.<br><br>
        We recommend checking this page regularly to stay informed about any updates. Continued use of our services after notifying users of changes will be considered acceptance of the new terms.<br><br>
        All changes to the Privacy Policy take effect immediately after being published on this page.`,

        "contact-info-title": "Contact Information",
        "contact-info-content": `If you have any questions or requests regarding your personal data or this Privacy Policy, you can contact us through the following channels:<br><br>
        ● Email: <a href="mailto:office@savr.rs" class="text-blue-500 hover:underline">office@savr.rs</a><br>
        ● Mailing Address: VITEZOVA KARAĐORĐEVE ZVEZDE 55A, Apartment 14, BELGRADE (ZVEZDARA), ZVEZDARA, Serbia<br>
        ● Phone: <a href="tel:+381638898408" class="text-blue-500 hover:underline">+381 63 8898408</a><br><br>
        We will do our best to respond to your inquiries as promptly as possible. If you have any concerns about your rights or how we manage your data, please feel free to contact us.`,
        

        "btn-home": "Back to Homepage",
        "footer-pp":"© 2024 SavR. All rights reserved.",
        "title-tc":"Terms and Conditions",
        "intro-title": "1. Introduction",
        "intro-content": `
            Welcome to SavR, a platform that connects users with partners such as restaurants, bakeries, stores, and other establishments to reduce food waste. SavR's mission is to minimize food wastage by offering users the opportunity to purchase products at discounted prices that would otherwise be discarded. By using the Application, you acknowledge and agree to these Terms of Use, as well as any additional policies and rules referenced herein, including the Privacy Policy.<br><br>
            SavR operates as a sole proprietorship under the name SavR 2024, owned by Veljko Jokić PR, with a registered address at Vitezova Karađorđeve Zvezde 55a, Belgrade. As a registered entrepreneur in the Republic of Serbia, SavR acts as an intermediary between users and partners, facilitating the reservation and pickup of surplus food at favorable prices. SavR 2024 neither owns nor manages the products but provides a technological platform that connects users with partners to reduce waste and promote sustainability.<br><br>
            SavR operates solely as an intermediary and assumes no responsibility for the food offered through the Application; all transactions and provision of food are the responsibility of our Partners. Using SavR allows users to browse available offers, make reservations, and collect products within the time frame specified by the Partners.<br><br>
            These Terms govern your access, browsing, reservations, and other functionalities within the Application. SavR reserves the right to amend these Terms in accordance with Section [number of amendment section]. It is your responsibility to review the current Terms before each use of the Application.<br><br>
            For any questions regarding these Terms or how SavR operates, please contact us at <a href="mailto:savr.info.rs@gmail.com" class="text-blue-500 hover:underline">savr.info.rs@gmail.com</a>.
        `,

        "definitions-title": "2. Definitions",
        "definitions-content": `
            In these Terms of Use, the following terms shall have the defined meanings unless the context requires otherwise:<br><br>
            ● <strong>"User":</strong> A natural person using the SavR application to browse, reserve, and purchase surplus food.<br><br>
            ● <strong>"Partner":</strong> Legal or natural persons, including restaurants, bakeries, stores, and other establishments offering food via the application.<br><br>
            ● <strong>"Reservation":</strong> The process by which a user reserves food or products offered by Partners through the application.<br><br>
            ● <strong>"Application":</strong> The SavR mobile application, including all related functionalities and services.<br><br>
            ● <strong>"SavR":</strong> The name of the platform acting as an intermediary between Users and Partners.
        `,

        "registration-title": "3. Registration and User Account",
        "registration-content": `
            <strong>Registration requirements:</strong> To create and use an account in the SavR application, you must be at least 18 years old. During registration, users are required to provide accurate, complete, and up-to-date information, including name, email address, and other necessary data. Registration through third-party accounts (Google, Facebook, Apple) is permitted, provided you agree to share the relevant data with us.<br><br>
            <strong>Accuracy of information:</strong> Users are obligated to maintain the accuracy and up-to-date status of their account information. SavR is not responsible for consequences arising from false or inaccurate data.<br><br>
            <strong>Data confidentiality:</strong> Users are responsible for keeping their login credentials (e.g., passwords) confidential and for all activities conducted through their account. You agree to immediately notify us of any unauthorized access or use of your account.<br><br>
            <strong>Account sharing and misuse:</strong> Sharing your account with third parties is prohibited. Any misuse, unauthorized access, or attempt to violate rules may result in suspension or permanent termination of the account.<br><br>
            <strong>Third-party access:</strong> If you use a third-party account to log in, you are responsible for complying with the terms and conditions of that platform. SavR is not responsible for operational or security issues related to access through third parties.<br><br>
            <strong>Account termination:</strong> SavR reserves the right, at its sole discretion, to terminate or suspend your account in cases of violations of these Terms of Use, misuse of the application, false information, or other conduct that may harm us, our users, or Partners.
        `,


        "usage-title": "4. Use of the Application",
        "usage-content": `
            <strong>Access and offer browsing:</strong> SavR allows users to browse Partner offers, including available products and prices, via an intuitive user interface. Users can search and filter offers by criteria such as food type, geographical location, and pickup time.<br><br>
            
            <strong>Reservation process:</strong><br>
            ● <strong>Creating a reservation:</strong> When a user selects a desired offer, they can make a reservation through the application. The reservation is confirmed only after successful payment processing via the chosen payment method.<br>
            ● <strong>Reservation confirmation:</strong> Users will receive a reservation confirmation containing all relevant details, including the time and location for product pickup.<br>
            ● <strong>Obligation to collect:</strong> Users are obligated to collect reserved products within the specified time frame at the Partner's location. Failure to collect the reservation results in forfeiture of the right to a refund unless otherwise defined in these Terms.<br>
            ● <strong>Product collection:</strong><br>
            - <strong>Verification of reservation:</strong> Upon arrival at the Partner's location, the user must show the reservation confirmation through the application. After verification, the Partner will hand over the reserved product.<br>
            - <strong>Quality issues:</strong> If the user believes that the reserved product does not meet the expected quality, they must immediately contact the Partner on-site. SavR is not responsible for resolving disputes between users and Partners regarding product quality but may mediate communication when possible.<br><br>
            
            <strong>Usage prohibitions:</strong><br>
            Users are strictly prohibited from:<br>
            ● Falsely creating reservations or attempting fraud.<br>
            ● Engaging in behavior that disrupts the operations of Partners or other users.<br>
            ● Using the application for any illegal activities, including unauthorized access attempts, distribution of harmful software codes, or similar actions that could compromise the application's operation.<br><br>
            
            <strong>Temporary or permanent account suspension:</strong> SavR reserves the right to temporarily suspend or permanently terminate a user account for violations of these Terms, misuse, or any other activities that harm the application's operations or cooperation with Partners.
        `,

        "payments-title": "5. Payments and Refunds",
        "payments-content": `
            <strong>Payment methods:</strong> All transactions within the SavR application are processed via third parties such as /. By accepting payments, users agree to the terms of use of the payment service providers.<br><br>
            
            <strong>Non-refundable funds:</strong> SavR's policy is not to issue refunds for reservations that users fail to collect within the specified time frame. This policy is designed to preserve the application's mission—reducing food waste. Failure to collect reserved products may result in food being discarded, undermining the essence of SavR's platform. <br><br>
            Refunds are possible only in cases where the user determines at pickup that the product does not meet the agreed quality. In such cases, the user must immediately contact the Partner, and SavR will mediate communication where possible.<br><br>
            
            <strong>Payment issues:</strong> In case of payment processing issues, users must notify the SavR support team promptly for resolution. SavR is not responsible for errors arising from technical issues involving third parties in the payment process.
        `,

        "partner-responsibility-title": "6. Partner Responsibility for Products",
        "partner-responsibility-content": `
            <strong>SavR’s intermediary role:</strong> SavR acts solely as a platform connecting users with Partners offering surplus food. SavR neither owns, controls, nor manages the food offered through the application. All transactions and product exchanges occur exclusively between users and Partners.<br><br>
            
            <strong>Food quality and safety:</strong> Partners are solely responsible for the quality, composition, safety, and all relevant information regarding the products they offer. This includes, but is not limited to, freshness, ingredients, allergens, and product declarations. Partners must provide accurate and up-to-date information on product characteristics. Users are required to review all relevant product information at pickup and before consumption.<br><br>
            
            <strong>Limitation of liability:</strong> SavR assumes no responsibility for errors, omissions, or discrepancies related to product quality, content, composition, or safety. Users collect products at their own risk, and all complaints must be directed to the Partner directly. SavR does not guarantee the accuracy of food information displayed in the application and is not liable for any adverse consequences resulting from improper product labeling or inadequate quality.<br><br>
            
            <strong>Complaints and disputes:</strong> Users with complaints or issues regarding product quality must report them to the Partner immediately, on-site, during product pickup. SavR may assist in facilitating communication between users and Partners but does not guarantee dispute resolution. Partners are responsible for resolving complaints in accordance with applicable laws and regulations governing food quality.<br><br>
            
            <strong>Right to reject complaints:</strong> In certain cases, the Partner may reject a complaint, especially if the user fails to follow pickup instructions or does not collect the product within the specified time frame.
        `,

        "user-rights-title": "7. User Rights and Obligations",
        "user-rights-content": `
            <strong>Responsible use:</strong> Users must use the SavR application lawfully, responsibly, and respectfully. Any actions that disrupt the application's functionality, compromise security, misuse other users' accounts, or hinder Partners' operations are prohibited.<br><br>
            
            <strong>Data updates:</strong> Users agree to maintain accurate and up-to-date personal information in their accounts. Any changes must be updated promptly through the user account.<br><br>
            
            <strong>Prohibition of misuse:</strong> The following actions are prohibited:<br>
            ● Creating false reservations or using the application for purposes contrary to the law.<br>
            ● Accessing other users' accounts without permission or using third-party information without their consent.<br>
            ● Spreading inaccurate, offensive, or harmful information through the application.<br><br>
            
            <strong>Interaction with Partners:</strong> Users must behave respectfully toward Partners and their employees during product pickup. Any inappropriate behavior may result in account suspension.<br><br>
            
            <strong>Responsibility for actions:</strong> Users accept full responsibility for all activities conducted through their accounts and agree to immediately report any unauthorized access or misuse.<br><br>
            
            <strong>Feedback and reviews:</strong> Users can provide feedback and reviews about their experience with Partners. Reviews must be accurate and free of offensive, discriminatory, or false information. SavR reserves the right to remove content that violates rules.
        `,

        "liability-title": "8. Limitation of Liability",
        "liability-content": `
            <strong>General disclaimer:</strong> The use of the SavR application is at the user's own risk. The application is provided "as is" without any express or implied warranties, including but not limited to fitness for a particular purpose, accuracy, security, or uninterrupted operation.<br><br>
            
            <strong>Responsibility for products:</strong> SavR acts as an intermediary between users and Partners. It is not responsible for the quality, content, safety, or any characteristics of products offered by Partners. Users bear full responsibility for verifying product quality at pickup.<br><br>
            
            <strong>Technical issues:</strong> SavR is not liable for any technical issues or errors that may occur during application use, including but not limited to access problems, data loss, or payment errors.<br><br>
            
            <strong>Exclusion of liability:</strong> SavR shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use the application, even if advised of the possibility of such damages. This includes but is not limited to loss of profits, reputation, data, or other intangible losses.<br><br>
            
            <strong>Third-party services:</strong> SavR uses third-party services for payment processing and other functionalities. It assumes no responsibility for the performance of these third parties, including but not limited to transaction errors, security issues, or delays in payment processing.<br><br>
            
            <strong>Information security:</strong> Although technical and organizational measures are implemented to protect data, SavR does not guarantee absolute security during transmission over the internet or storage on its servers.
        `,

         "privacy-policy-title": "9. Privacy Policy and Data Protection",
        "privacy-policy-content": `
            <strong>Data collection and processing:</strong> SavR collects and processes users' personal data, including name, email address, phone number, location data, reservation history, payment information, and technical data such as IP addresses and device information. Data collection is conducted in accordance with applicable data protection laws, including GDPR.<br><br>
            
            <strong>Purpose of data processing:</strong><br>
            ● <strong>Service execution:</strong> Data is used to manage user accounts, process reservations, payments, and communication.<br>
            ● <strong>Analysis and service improvement:</strong> Collected data helps analyze user experience and optimize the application.<br>
            ● <strong>Marketing activities:</strong> Promotional messages may be sent to users with their consent.<br><br>
            
            <strong>Data sharing with third parties:</strong><br>
            ● To Partners for reservation execution purposes.<br>
            ● To third-party service providers, including payment processors (/).<br>
            ● To competent authorities when legally required.<br><br>
            
            <strong>9.1 GDPR Compliance</strong><br>
            ● <strong>Legal basis for processing:</strong> Data is processed based on legal grounds, contractual obligations, legitimate interests, or user consent.<br>
            ● <strong>User rights under GDPR:</strong><br>
            - Right to access: Users may request a copy of their data processed by SavR.<br>
            - Right to rectification: Correction of inaccurate or incomplete data.<br>
            - Right to erasure ("right to be forgotten"): Users may request data deletion unless there is a legal basis for retention.<br>
            - Right to restrict processing: Temporary restriction of processing upon user request.<br>
            - Right to data portability: Obtain data in a machine-readable format.<br>
            - Right to object: Object to data processing based on legitimate interests or direct marketing purposes.<br>
            - Right to withdraw consent: Users may withdraw their consent for data processing at any time.<br>
            ● <strong>Contact for exercising rights:</strong> To exercise their rights, users may contact SavR at <a href="mailto:office@savr.rs" class="text-blue-500 hover:underline">office@savr.rs</a>.<br>
            ● <strong>Right to file complaints:</strong> Users may lodge complaints with the data protection authority.<br><br>
            
            <strong>Cookies and tracking technologies:</strong><br>
            ● <strong>Use of cookies:</strong> Cookies are used to analyze traffic, improve functionality, and personalize services.<br>
            ● <strong>Cookie management:</strong> Users can manage cookie settings via their devices or browsers.<br><br>
            
            <strong>Policy changes:</strong> SavR reserves the right to modify this Policy. Users will be notified of changes via the application.
        `,
        "terms-changes-title": "10. Changes to Terms",
        "terms-changes-content": `
            <strong>Right to modify:</strong> SavR reserves the right to amend or supplement these Terms of Use at any time. All changes will be published within the application and take effect upon publication unless otherwise specified.<br><br>
            
            <strong>User notification:</strong> Users will be informed of any significant changes to the Terms via the application, email, or other appropriate communication channels.<br><br>
            
            <strong>Acceptance of changes:</strong> Continued use of the application after changes are published constitutes acceptance of the new Terms. If a user disagrees with the changes, they may stop using the application and delete their account.
        `,


        "dispute-resolution-title": "11. Dispute Resolution",
        "dispute-resolution-content": `
            <strong>Informal resolution:</strong> Before initiating any legal proceedings, users are encouraged to contact SavR via email at <a href="mailto:office@savr.rs" class="text-blue-500 hover:underline">office@savr.rs</a> to attempt informal dispute resolution. Our goal is to resolve disputes quickly and efficiently in mutual interest.<br><br>
            
            <strong>Governing law:</strong> These Terms are governed by and interpreted in accordance with the laws of the Republic of Serbia, including but not limited to consumer protection and e-commerce laws.<br><br>
            
            <strong>Jurisdiction:</strong> In the event of a dispute that cannot be resolved informally, the parties agree to the jurisdiction of the courts of the Republic of Serbia, with disputes resolved before the competent court based on SavR's registered location.<br><br>
            
            <strong>Liability under legal status:</strong> As a sole proprietorship, SavR emphasizes that its liability may have personal implications for the owner under applicable laws. Accordingly, all obligations, limitations, and rights arising from SavR's operations will be interpreted in line with this status.<br><br>
            
            <strong>Consumer protection:</strong> Users have the right to address competent consumer protection authorities in cases involving product quality or service conditions.
        `,









    
    },

    
};
