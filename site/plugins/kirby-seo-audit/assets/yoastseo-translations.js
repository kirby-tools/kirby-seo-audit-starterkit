const e = [
  "moeilijk"
], s = [
  "makkelijk"
], n = [
  "Feedback"
], t = [
  "Goed"
], i = [
  "ok"
], r = [
  "OK"
], a = [
  "Slug"
], o = {
  "": {
    domain: "js-text-analysis",
    lang: "nl",
    plural_forms: "nplurals=2; plural=(n != 1);"
  },
  "%1$s of the words contain %2$sover %3$s syllables%4$s, which is less than or equal to the recommended maximum of %5$s.": [
    "%1$s van de woorden bevatten meer dan %3$s lettergrepen%4$s, wat minder is dan of gelijk aan het aanbevolen maximum van %5$s."
  ],
  "%1$s of the words contain %2$sover %3$s syllables%4$s, which is more than the recommended maximum of %5$s.": [
    "%1$s van de woorden bevatten meer dan %3$s lettergrepen%4$s, wat meer is dan het aanbevolen maximum van %5$s."
  ],
  "%1$sConsecutive sentences%2$s: The text contains %3$d consecutive sentences starting with the same word. %5$sTry to mix things up%2$s!": [
    "%1$sOpeenvolgende zinnen%2$s: De tekst bevat %3$d opeenvolgende zinnen die met hetzelfde woord beginnen. %5$sProbeer af te wisselen%2$s!",
    "%1$sOpeenvolgende zinnen%2$s: De tekst bevat %4$d gevallen waarin %3$d of meer opeenvolgende zinnen met hetzelfde woord beginnen. %5$sProbeer af te wisselen%2$s!"
  ],
  "%1$sConsecutive sentences%2$s: There is enough variety in your sentences. That's great!": [
    "%1$sOpeenvolgende zinnen%2$s: Er is genoeg variatie in uw zinnen. Dat is geweldig!"
  ],
  "%1$sFlesch Reading Ease%2$s: The copy scores %3$s in the test, which is considered %4$s to read. %5$s": [
    "%1$sFlesch-leesgemak%2$s: De tekst scoort %3$s in de test, wat als %4$s wordt beschouwd om te lezen. %5$s"
  ],
  "%1$sFlesch Reading Ease%2$s: The copy scores %3$s in the test, which is considered %4$s to read. %5$s%6$s%7$s": [
    "%1$sFlesch-leesgemak%2$s: De tekst scoort %3$s in de test, wat als %4$s wordt beschouwd om te lezen. %5$s%6$s%7$s"
  ],
  '%1$sFunction words in keyphrase%3$s: Your keyphrase "%4$s" contains function words only. %2$sLearn more about what makes a good keyphrase.%3$s': [
    '%1$sFunctiewoorden in de sleutelzin%3$s: Uw sleutelzin "%4$s" bevat alleen functiewoorden. %2$sLees meer over wat een goede sleutelzin maakt.%3$s'
  ],
  "%1$sImage alt attributes%2$s: Good job!": [
    "%1$sAlt-attributen van afbeeldingen%2$s: Goed gedaan!"
  ],
  "%1$sImage alt attributes%3$s: Images on this page do not have alt attributes that reflect the topic of your text. %2$sAdd your keyphrase or synonyms to the alt tags of relevant images%3$s!": [
    "%1$sAlt-attributen van afbeeldingen%3$s: Afbeeldingen op deze pagina hebben geen alt-attributen die het onderwerp van uw tekst weerspiegelen. %2$sVoeg uw sleutelzin of synoniemen toe aan de alt-tags van relevante afbeeldingen%3$s!"
  ],
  "%1$sImage alt attributes%3$s: Images on this page have alt attributes, but you have not set your keyphrase. %2$sFix that%3$s!": [
    "%1$sAlt-attributen van afbeeldingen%3$s: Afbeeldingen op deze pagina hebben alt-attributen, maar u heeft uw sleutelzin niet ingesteld. %2$sPas dit aan%3$s!"
  ],
  "%1$sImage alt attributes%3$s: No images appear on this page. %2$sAdd some%3$s!": [
    "%1$sAlt-attributen van afbeeldingen%3$s: Er verschijnen geen afbeeldingen op deze pagina. %2$sVoeg er een paar toe%3$s!"
  ],
  "%1$sInternal links%2$s: There are both nofollowed and normal internal links on this page. Good job!": [
    "%1$sInterne links%2$s: Op deze pagina zijn zowel nofollow als normale interne links. Goed gedaan!"
  ],
  "%1$sInternal links%2$s: You have enough internal links. Good job!": [
    "%1$sInterne links%2$s: U heeft genoeg interne links. Goed gedaan!"
  ],
  "%1$sInternal links%3$s: No internal links appear in this page, %2$smake sure to add some%3$s!": [
    "%1$sInterne links%3$s: Er verschijnen geen interne links op deze pagina, %2$szorg ervoor dat u er een paar toevoegt%3$s!"
  ],
  "%1$sInternal links%3$s: The internal links in this page are all nofollowed. %2$sAdd some good internal links%3$s.": [
    "%1$sInterne links%3$s: De interne links op deze pagina zijn allemaal nofollow. %2$sVoeg een paar goede interne links toe%3$s."
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %3$d time. This is great!": [
    "%1$sSleutelzindichtheid%2$s: De focus sleutelzin werd %3$d keer gevonden. Dat is geweldig!",
    "%1$sSleutelzindichtheid%2$s: De focus sleutelzin werd %3$d keer gevonden. Dat is geweldig!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That's less than the recommended minimum of %3$d times for a text of this length. %4$sFocus on your keyphrase%2$s!": [
    "%1$sSleutelzindichtheid%2$s: De focus sleutelzin werd %5$d keer gevonden. Dat is minder dan het aanbevolen minimum van %3$d keer voor een tekst van deze lengte. %4$sFocus op uw sleutelzin%2$s!",
    "%1$sSleutelzindichtheid%2$s: De focus sleutelzin werd %5$d keer gevonden. Dat is minder dan het aanbevolen minimum van %3$d keer voor een tekst van deze lengte. %4$sFocus op uw sleutelzin%2$s!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That's more than the recommended maximum of %3$d times for a text of this length. %4$sDon't overoptimize%2$s!": [
    "%1$sSleutelzindichtheid%2$s: De focus sleutelzin werd %5$d keer gevonden. Dat is meer dan het aanbevolen maximum van %3$d keer voor een tekst van deze lengte. %4$sOveroptimaliseer niet%2$s!",
    "%1$sSleutelzindichtheid%2$s: De focus sleutelzin werd %5$d keer gevonden. Dat is meer dan het aanbevolen maximum van %3$d keer voor een tekst van deze lengte. %4$sOveroptimaliseer niet%2$s!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That's way more than the recommended maximum of %3$d times for a text of this length. %4$sDon't overoptimize%2$s!": [
    "%1$sSleutelzindichtheid%2$s: De focus sleutelzin werd %5$d keer gevonden. Dat is veel meer dan het aanbevolen maximum van %3$d keer voor een tekst van deze lengte. %4$sOveroptimaliseer niet%2$s!",
    "%1$sSleutelzindichtheid%2$s: De focus sleutelzin werd %5$d keer gevonden. Dat is veel meer dan het aanbevolen maximum van %3$d keer voor een tekst van deze lengte. %4$sOveroptimaliseer niet%2$s!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found 0 times. That's less than the recommended minimum of %3$d times for a text of this length. %4$sFocus on your keyphrase%2$s!": [
    "%1$sSleutelzindichtheid%2$s: De focus sleutelzin werd 0 keer gevonden. Dat is minder dan het aanbevolen minimum van %3$d keer voor een tekst van deze lengte. %4$sFocus op uw sleutelzin%2$s!"
  ],
  "%1$sKeyphrase distribution%2$s: Good job!": [
    "%1$sSleutelzinverdeling%2$s: Goed gedaan!"
  ],
  "%1$sKeyphrase distribution%3$s: %2$sInclude your keyphrase or its synonyms in the text so that we can check keyphrase distribution%3$s.": [
    "%1$sKeyphrase distribution%3$s: %2$sVoeg uw sleutelzin of synoniemen toe aan de tekst zodat we de verdeling van de sleutelzin kunnen controleren%3$s."
  ],
  "%1$sKeyphrase distribution%3$s: Uneven. Some parts of your text do not contain the keyphrase or its synonyms. %2$sDistribute them more evenly%3$s.": [
    "%1$sSleutelzinverdeling%3$s: Ongelijkmatig. Sommige delen van uw tekst bevatten de sleutelzin of de synoniemen niet. %2$sVerdeel ze gelijkmatiger%3$s."
  ],
  "%1$sKeyphrase distribution%3$s: Very uneven. Large parts of your text do not contain the keyphrase or its synonyms. %2$sDistribute them more evenly%3$s.": [
    "%1$sSleutelzinverdeling%3$s: Zeer ongelijkmatig. Grote delen van uw tekst bevatten de sleutelzin of de synoniemen niet. %2$sVerdeel ze gelijkmatiger%3$s."
  ],
  "%1$sKeyphrase in introduction%2$s: Well done!": [
    "%1$sSleutelzin in de inleiding%2$s: Goed gedaan!"
  ],
  "%1$sKeyphrase in introduction%3$s: Your keyphrase or its synonyms do not appear in the first paragraph. %2$sMake sure the topic is clear immediately%3$s.": [
    "%1$sSleutelzin in de inleiding%3$s: Uw sleutelzin of synoniemen verschijnen niet in de eerste alinea. %2$sZorg ervoor dat het onderwerp meteen duidelijk is%3$s."
  ],
  "%1$sKeyphrase in introduction%3$s:Your keyphrase or its synonyms appear in the first paragraph of the copy, but not within one sentence. %2$sFix that%3$s!": [
    "%1$sSleutelzin in de inleiding%3$s: Uw sleutelzin of synoniemen verschijnen in de eerste alinea van de tekst, maar niet binnen één zin. %2$sPas dit aan%3$s!"
  ],
  "%1$sKeyphrase in meta description%2$s: Keyphrase or synonym appear in the meta description. Well done!": [
    "%1$sSleutelzin in de meta-omschrijving%2$s: Sleutelzin of synoniem verschijnen in de meta-omschrijving. Goed gedaan!"
  ],
  "%1$sKeyphrase in meta description%2$s: The meta description contains the keyphrase %3$s times, which is over the advised maximum of 2 times. %4$sLimit that%5$s!": [
    "%1$sSleutelzin in de meta-omschrijving%2$s: De meta-omschrijving bevat de sleutelzin %3$s keer, wat boven het aanbevolen maximum van 2 keer ligt. %4$sBeperk dat%5$s!"
  ],
  "%1$sKeyphrase in meta description%2$s: The meta description has been specified, but it does not contain the keyphrase. %3$sFix that%4$s!": [
    "%1$sSleutelzin in de meta-omschrijving%2$s: De meta-omschrijving is opgegeven, maar bevat de sleutelzin niet. %3$sPas dit aan%4$s!"
  ],
  "%1$sKeyphrase in slug%2$s: Great work!": [
    "%1$sSleutelzin in de slug%2$s: Geweldig werk!"
  ],
  "%1$sKeyphrase in slug%2$s: More than half of your keyphrase appears in the slug. That's great!": [
    "%1$sSleutelzin in de slug%2$s: Meer dan de helft van uw sleutelzin verschijnt in de slug. Dat is geweldig!"
  ],
  "%1$sKeyphrase in slug%3$s: (Part of) your keyphrase does not appear in the slug. %2$sChange that%3$s!": [
    "%1$sSleutelzin in de slug%3$s: (Een deel van) uw sleutelzin verschijnt niet in de slug. %2$sPas dit aan%3$s!"
  ],
  "%1$sKeyphrase in subheading%2$s: %3$s of your H2 and H3 subheadings reflects the topic of your copy. Good job!": [
    "%1$sSleutelzin in de tussenkoppen%2$s: %3$s van uw H2- en H3-tussenkoppen weerspiegelen het onderwerp van uw tekst. Goed gedaan!",
    "%1$sSleutelzin in de tussenkoppen%2$s: %3$s van uw H2- en H3-tussenkoppen weerspiegelen het onderwerp van uw tekst. Goed gedaan!"
  ],
  "%1$sKeyphrase in subheading%2$s: Your H2 or H3 subheading reflects the topic of your copy. Good job!": [
    "%1$sSleutelzin in de tussenkoppen%2$s: Uw H2- of H3-tussenkop weerspiegelt het onderwerp van uw tekst. Goed gedaan!"
  ],
  "%1$sKeyphrase in subheading%3$s: %2$sUse more keyphrases or synonyms in your H2 and H3 subheadings%3$s!": [
    "%1$sSleutelzin in de tussenkoppen%3$s: %2$sGebruik meer sleutelzinnen of synoniemen in uw H2- en H3-tussenkoppen%3$s!"
  ],
  "%1$sKeyphrase in subheading%3$s: More than 75%% of your H2 and H3 subheadings reflect the topic of your copy. That's too much. %2$sDon't over-optimize%3$s!": [
    "%1$sSleutelzin in de tussenkoppen%3$s: Meer dan 75%% van uw H2- en H3-tussenkoppen weerspiegelen het onderwerp van uw tekst. Dat is te veel. %2$sOptimaliseer niet te veel%3$s!"
  ],
  "%1$sKeyphrase in title%2$s: The exact match of the focus keyphrase appears at the beginning of the SEO title. Good job!": [
    "%1$sSleutelzin in de titel%2$s: De exacte overeenkomst van de focus sleutelzin verschijnt aan het begin van de SEO-titel. Goed gedaan!"
  ],
  "%1$sKeyphrase in title%3$s: Does not contain the exact match. %2$sTry to write the exact match of your keyphrase in the SEO title and put it at the beginning of the title%3$s.": [
    "%1$sSleutelzin in de titel%3$s: Bevat niet de exacte overeenkomst. %2$sProbeer de exacte overeenkomst van uw sleutelzin in de SEO-titel te schrijven en zet deze aan het begin van de titel%3$s."
  ],
  '%1$sKeyphrase in title%3$s: Not all the words from your keyphrase "%4$s" appear in the SEO title. %2$sFor the best SEO results write the exact match of your keyphrase in the SEO title, and put the keyphrase at the beginning of the title%3$s.': [
    '%1$sSleutelzin in de titel%3$s: Niet alle woorden van uw sleutelzin "%4$s" verschijnen in de SEO-titel. %2$sVoor de beste SEO-resultaten schrijft u de exacte overeenkomst van uw sleutelzin in de SEO-titel en plaatst u de sleutelzin aan het begin van de titel%3$s.'
  ],
  "%1$sKeyphrase in title%3$s: The exact match of the focus keyphrase appears in the SEO title, but not at the beginning. %2$sMove it to the beginning for the best results%3$s.": [
    "%1$sSleutelzin in de titel%3$s: De exacte overeenkomst van de focus sleutelzin verschijnt in de SEO-titel, maar niet aan het begin. %2$sVerplaats het naar het begin voor de beste resultaten%3$s."
  ],
  "%1$sKeyphrase length%2$s: Good job!": [
    "%1$sLengte van de sleutelzin%2$s: Goed gedaan!"
  ],
  "%1$sKeyphrase length%3$s: %2$sSet a keyphrase in order to calculate your SEO score%3$s.": [
    "%1$sLengte van de sleutelzin%3$s: %2$sStel een sleutelzin in om uw SEO-score te berekenen%3$s."
  ],
  "%1$sKeyphrase length%3$s: No focus keyphrase was set for this page. %2$sSet a keyphrase in order to calculate your SEO score%3$s.": [
    "%1$sLengte van de sleutelzin%3$s: Er is geen focus sleutelzin ingesteld voor deze pagina. %2$sStel een sleutelzin in om uw SEO-score te berekenen%3$s."
  ],
  "%1$sLink keyphrase%3$s: You're linking to another page with the words you want this page to rank for. %2$sDon't do that%3$s!": [
    "%1$sLink-sleutelzin%3$s: U linkt naar een andere pagina met de woorden waarvoor u wilt dat deze pagina rankt. %2$sDoe dat niet%3$s!"
  ],
  "%1$sMeta description length%2$s: Well done!": [
    "%1$sLengte van de meta-omschrijving%2$s: Goed gedaan!"
  ],
  "%1$sMeta description length%3$s: No meta description has been specified. Search engines will display copy from the page instead. %2$sMake sure to write one%3$s!": [
    "%1$sLengte van de meta-omschrijving%3$s: Er is geen meta-omschrijving opgegeven. Zoekmachines zullen in plaats daarvan tekst van de pagina weergeven. %2$sZorg ervoor dat u er een schrijft%3$s!"
  ],
  "%1$sMeta description length%3$s: The meta description is over %4$d characters. To ensure the entire description will be visible, %2$syou should reduce the length%3$s!": [
    "%1$sLengte van de meta-omschrijving%3$s: De meta-omschrijving is langer dan %4$d tekens. Om ervoor te zorgen dat de volledige beschrijving zichtbaar is, %2$szou u de lengte moeten verkorten%3$s!"
  ],
  "%1$sMeta description length%3$s: The meta description is too short (under %4$d characters). Up to %5$d characters are available. %2$sUse the space%3$s!": [
    "%1$sLengte van de meta-omschrijving%3$s: De meta-omschrijving is te kort (onder %4$d tekens). Tot %5$d tekens zijn beschikbaar. %2$sGebruik de ruimte%3$s!"
  ],
  "%1$sNot enough content%2$s: %3$sPlease add some content to enable a good analysis%2$s.": [
    "%1$sNiet genoeg inhoud%2$s: %3$sVoeg wat inhoud toe om een goede analyse mogelijk te maken%2$s."
  ],
  "%1$sOutbound links%2$s: Good job!": [
    "%1$sUitgaande links%2$s: Goed gedaan!"
  ],
  "%1$sOutbound links%2$s: There are both nofollowed and normal outbound links on this page. Good job!": [
    "%1$sUitgaande links%2$s: Op deze pagina zijn zowel nofollow als normale uitgaande links. Goed gedaan!"
  ],
  "%1$sOutbound links%3$s: All outbound links on this page are nofollowed. %2$sAdd some normal links%3$s.": [
    "%1$sUitgaande links%3$s: Alle uitgaande links op deze pagina zijn nofollow. %2$sVoeg een paar normale links toe%3$s."
  ],
  "%1$sOutbound links%3$s: No outbound links appear in this page. %2$sAdd some%3$s!": [
    "%1$sUitgaande links%3$s: Er verschijnen geen uitgaande links op deze pagina. %2$sVoeg er een paar toe%3$s!"
  ],
  "%1$sParagraph length%2$s: %3$d of the paragraphs contains more than the recommended maximum of %4$d words. %5$sShorten your paragraphs%2$s!": [
    "%1$sAlinealengte%2$s: %3$d van de alinea's bevatten meer dan het aanbevolen maximum van %4$d woorden. %5$sVerkort uw alinea's%2$s!",
    "%1$sAlinealengte%2$s: %3$d van de alinea's bevatten meer dan het aanbevolen maximum van %4$d woorden. %5$sVerkort uw alinea's%2$s!"
  ],
  "%1$sParagraph length%2$s: None of the paragraphs are too long. Great job!": [
    "%1$sAlinealengte%2$s: Geen van de alinea's is te lang. Geweldig werk!"
  ],
  "%1$sPassive voice%2$s: %3$s of the sentences contain passive voice, which is more than the recommended maximum of %4$s. %5$sTry to use their active counterparts%2$s.": [
    "%1$sPassieve stem%2$s: %3$s van de zinnen bevatten passieve stem, wat meer is dan het aanbevolen maximum van %4$s. %5$sProbeer hun actieve tegenhangers te gebruiken%2$s."
  ],
  "%1$sPassive voice%2$s: You're using enough active voice. That's great!": [
    "%1$sPassieve stem%2$s: U gebruikt voldoende actieve stem. Dat is geweldig!"
  ],
  "%1$sPreviously used keyphrase%2$s: You've not used this keyphrase before, very good.": [
    "%1$sEerder gebruikte sleutelzin%2$s: U heeft deze sleutelzin nog niet eerder gebruikt, heel goed."
  ],
  "%1$sSentence length%2$s: %3$s of the sentences contain more than %4$s words, which is more than the recommended maximum of %5$s. %6$sTry to shorten the sentences%2$s.": [
    "%1$sZinslengte%2$s: %3$s van de zinnen bevatten meer dan %4$s woorden, wat meer is dan het aanbevolen maximum van %5$s. %6$sProbeer de zinnen te verkorten%2$s."
  ],
  "%1$sSentence length%2$s: Great!": [
    "%1$sZinslengte%2$s: Geweldig!"
  ],
  "%1$sSEO title width%2$s: Good job!": [
    "%1$sSEO-titelbreedte%2$s: Goed gedaan!"
  ],
  "%1$sSEO title width%3$s: %2$sPlease create an SEO title%3$s.": [
    "%1$sSEO-titelbreedte%3$s: %2$sMaak een SEO-titel aan%3$s."
  ],
  "%1$sSEO title width%3$s: The SEO title is too short. %2$sUse the space to add keyphrase variations or create compelling call-to-action copy%3$s.": [
    "%1$sSEO-titelbreedte%3$s: De SEO-titel is te kort. %2$sGebruik de ruimte om variaties van de sleutelzin toe te voegen of overtuigende call-to-action tekst te maken%3$s."
  ],
  "%1$sSEO title width%3$s: The SEO title is wider than the viewable limit. %2$sTry to make it shorter%3$s.": [
    "%1$sSEO-titelbreedte%3$s: De SEO-titel is breder dan de zichtbare limiet. %2$sProbeer hem korter te maken%3$s."
  ],
  "%1$sSingle title%3$s: H1s should only be used as your main title. Find all H1s in your text that aren't your main title and %2$schange them to a lower heading level%3$s!": [
    "%1$sEnkele titel%3$s: H1's moeten alleen als uw hoofdtitel worden gebruikt. Zoek alle H1's in uw tekst die niet uw hoofdtitel zijn en %2$sverander ze in een lager kopniveau%3$s!"
  ],
  "%1$sSlug stopwords%3$s: The slug for this page contains a stop word. %2$sRemove it%3$s!": [
    "%1$sSlug-stopwoorden%3$s: De slug voor deze pagina bevat een stopwoord. %2$sVerwijder het%3$s!",
    "%1$sSlug-stopwoorden%3$s: De slug voor deze pagina bevat stopwoorden. %2$sVerwijder ze%3$s!"
  ],
  "%1$sSlug too long%3$s: the slug for this page is a bit long. %2$sShorten it%3$s!": [
    "%1$sSlug te lang%3$s: De slug voor deze pagina is een beetje lang. %2$sVerkort het%3$s!"
  ],
  "%1$sStopwords%3$s: The keyphrase contains stop words. This may or may not be wise depending on the circumstances. %2$sLearn more about stop words%3$s.": [
    "%1$sStopwoorden%3$s: De sleutelzin bevat stopwoorden. Dit kan al dan niet verstandig zijn, afhankelijk van de omstandigheden. %2$sLees meer over stopwoorden%3$s."
  ],
  "%1$sSubheading distribution%2$s: %3$d section of your text is longer than %4$d words and is not separated by any subheadings. %5$sAdd subheadings to improve readability%2$s.": [
    "%1$sTussenkoppenverdeling%2$s: %3$d sectie van uw tekst is langer dan %4$d woorden en is niet gescheiden door tussenkoppen. %5$sVoeg tussenkoppen toe om de leesbaarheid te verbeteren%2$s.",
    "%1$sTussenkoppenverdeling%2$s: %3$d secties van uw tekst zijn langer dan %4$d woorden en zijn niet gescheiden door tussenkoppen. %5$sVoeg tussenkoppen toe om de leesbaarheid te verbeteren%2$s."
  ],
  "%1$sSubheading distribution%2$s: Great job!": [
    "%1$sTussenkoppenverdeling%2$s: Goed gedaan!"
  ],
  "%1$sSubheading distribution%2$s: You are not using any subheadings, although your text is rather long. %3$sTry and add some subheadings%2$s.": [
    "%1$sTussenkoppenverdeling%2$s: U gebruikt geen tussenkoppen, hoewel uw tekst vrij lang is. %3$sProbeer enkele tussenkoppen toe te voegen%2$s."
  ],
  "%1$sSubheading distribution%2$s: You are not using any subheadings, but your text is short enough and probably doesn't need them.": [
    "%1$sTussenkoppenverdeling%2$s: U gebruikt geen tussenkoppen, maar uw tekst is kort genoeg en heeft ze waarschijnlijk niet nodig."
  ],
  "%1$sTransition words%2$s: None of the sentences contain transition words. %3$sUse some%2$s.": [
    "%1$sOvergangswoorden%2$s: Geen van de zinnen bevat overgangswoorden. %3$sGebruik er een paar%2$s."
  ],
  "%1$sTransition words%2$s: Only %3$s of the sentences contain transition words, which is not enough. %4$sUse more of them%2$s.": [
    "%1$sOvergangswoorden%2$s: Slechts %3$s van de zinnen bevatten overgangswoorden, wat niet genoeg is. %4$sGebruik er meer%2$s."
  ],
  "%1$sTransition words%2$s: Well done!": [
    "%1$sOvergangswoorden%2$s: Goed gedaan!"
  ],
  "%2$sText length%3$s: The text contains %1$d word. Good job!": [
    "%2$sTekstlengte%3$s: De tekst bevat %1$d woord. Goed gedaan!",
    "%2$sTekstlengte%3$s: De tekst bevat %1$d woorden. Goed gedaan!"
  ],
  "%2$sText length%4$s: The text contains %1$d word.": [
    "%2$sTekstlengte%4$s: De tekst bevat %1$d woord.",
    "%2$sTekstlengte%4$s: De tekst bevat %1$d woorden."
  ],
  "%3$sImage alt attributes%5$s: Out of %2$d images on this page, %1$d have alt attributes with words from your keyphrase or synonyms. That's a bit much. %4$sOnly include the keyphrase or its synonyms when it really fits the image%5$s.": [
    "%3$sAlt-attributen van afbeeldingen%5$s: Van de %2$d afbeeldingen op deze pagina hebben %1$d alt-attributen met woorden uit uw sleutelzin of synoniemen. Dat is een beetje veel. %4$sVoeg de sleutelzin of synoniemen alleen toe wanneer ze echt bij de afbeelding passen%5$s."
  ],
  "%3$sImage alt attributes%5$s: Out of %2$d images on this page, only %1$d has an alt attribute that reflects the topic of your text. %4$sAdd your keyphrase or synonyms to the alt tags of more relevant images%5$s!": [
    "%3$sAlt-attributen van afbeeldingen%5$s: Van de %2$d afbeeldingen op deze pagina heeft slechts %1$d een alt-attribuut dat het onderwerp van uw tekst weerspiegelt. %4$sVoeg uw sleutelzin of synoniemen toe aan de alt-tags van meer relevante afbeeldingen%5$s!",
    "%3$sAlt-attributen van afbeeldingen%5$s: Van de %2$d afbeelding op deze pagina hebben slechts %1$d alt-attributen die het onderwerp van uw tekst weerspiegelen. %4$sVoeg uw sleutelzin of synoniemen toe aan de alt-tags van meer relevante afbeeldingen%5$s!"
  ],
  "%3$sKeyphrase length%5$s: The keyphrase is %1$d words long. That's more than the recommended maximum of %2$d words. %4$sMake it shorter%5$s!": [
    "%3$sLengte van de sleutelzin%5$s: De sleutelzin is %1$d woorden lang. Dat is meer dan het aanbevolen maximum van %2$d woorden. %4$sMaak het korter%5$s!"
  ],
  "%3$sKeyphrase length%5$s: The keyphrase is %1$d words long. That's way more than the recommended maximum of %2$d words. %4$sMake it shorter%5$s!": [
    "%3$sLengte van de sleutelzin%5$s: De sleutelzin is %1$d woorden lang. Dat is veel meer dan hetaanbevolen maximum van %2$d woorden. %4$sMaak het korter%5$s!"
  ],
  "%3$sPreviously used keyphrase%5$s: You've used this keyphrase %1$sonce before%2$s. %4$sDo not use your keyphrase more than once%5$s.": [
    "%3$sEerder gebruikte sleutelzin%5$s: U heeft deze sleutelzin %1$seerder gebruikt%2$s. %4$sGebruik uw sleutelzin niet meer dan één keer%5$s."
  ],
  "%4$sPreviously used keyphrase%6$s: You've used this keyphrase %1$s%2$d times before%3$s. %5$sDo not use your keyphrase more than once%6$s.": [
    "%4$sEerder gebruikte sleutelzin%6$s: U heeft deze sleutelzin %1$s%2$d keer eerder gebruikt%3$s. %5$sGebruik uw sleutelzin niet meer dan één keer%6$s."
  ],
  "An error occurred in the '%1$s' assessment": [
    "Er is een fout opgetreden bij de '%1$s'-beoordeling"
  ],
  "Close snippet editor": [
    "Snippet-editor sluiten"
  ],
  "Content optimization:": [
    "Inhoudsoptimalisatie:"
  ],
  "Desktop preview": [
    "Desktopvoorbeeld"
  ],
  difficult: e,
  easy: s,
  "Edit snippet": [
    "Snippet bewerken"
  ],
  "fairly difficult": [
    "tamelijk moeilijk"
  ],
  "fairly easy": [
    "tamelijk makkelijk"
  ],
  Feedback: n,
  Good: t,
  "Good job!": [
    "Goed gedaan!"
  ],
  "Good SEO score": [
    "Goede SEO-score"
  ],
  "Google preview": [
    "Google-voorbeeld"
  ],
  "Has feedback": [
    "Heeft feedback"
  ],
  "Mark this result in the text": [
    "Markeer dit resultaat in de tekst"
  ],
  "Marks are disabled in current view": [
    "Markeringen zijn uitgeschakeld in de huidige weergave"
  ],
  "Meta description": [
    "Meta-omschrijving"
  ],
  "Meta description preview:": [
    "Voorbeeld van meta-omschrijving:"
  ],
  "Mobile preview": [
    "Mobiel voorbeeld"
  ],
  "Needs improvement": [
    "Moet verbeterd worden"
  ],
  ok: i,
  OK: r,
  "OK SEO score": [
    "OK SEO-score"
  ],
  "Please provide a meta description by editing the snippet below.": [
    "Geef een meta-omschrijving door de onderstaande snippet te bewerken."
  ],
  "Please provide an SEO title by editing the snippet below.": [
    "Geef een SEO-titel door de onderstaande snippet te bewerken."
  ],
  "Remove marks in the text": [
    "Verwijder markeringen in de tekst"
  ],
  "Scroll to see the preview content.": [
    "Scroll om de voorbeeldinhoud te zien."
  ],
  "SEO title": [
    "SEO-titel"
  ],
  "SEO title preview:": [
    "Voorbeeld van SEO-titel:"
  ],
  Slug: a,
  "Slug preview:": [
    "Voorbeeld van slug:"
  ],
  "The meta description contains %1$d sentence %2$sover %3$s words%4$s. Try to shorten this sentence.": [
    "De meta-omschrijving bevat %1$d zin %2$smet meer dan %3$s woorden%4$s. Probeer deze zin in te korten.",
    "De meta-omschrijving bevat %1$d zinnen %2$smet meer dan %3$s woorden%4$s. Probeer deze zinnen in te korten."
  ],
  "The meta description contains no sentences %1$sover %2$s words%3$s.": [
    "De meta-omschrijving bevat geen zinnen %1$smet meer dan %2$s woorden%3$s."
  ],
  "This is below the recommended minimum of %5$d word. %3$sAdd more content%4$s.": [
    "Dit is onder het aanbevolen minimum van %5$d woord. %3$sVoeg meer inhoud toe%4$s.",
    "Dit is onder het aanbevolen minimum van %5$d woorden. %3$sVoeg meer inhoud toe%4$s."
  ],
  "This is far below the recommended minimum of %5$d word. %3$sAdd more content%4$s.": [
    "Dit is ver onder het aanbevolen minimum van %5$d woord. %3$sVoeg meer inhoud toe%4$s.",
    "Dit is ver onder het aanbevolen minimum van %5$d woorden. %3$sVoeg meer inhoud toe%4$s."
  ],
  "This is slightly below the recommended minimum of %5$d word. %3$sAdd a bit more copy%4$s.": [
    "Dit is iets onder het aanbevolen minimum van %5$d woord. %3$sVoeg een beetje meer tekst toe%4$s.",
    "Dit is iets onder het aanbevolen minimum van %5$d woorden. %3$sVoeg een beetje meer tekst toe%4$s."
  ],
  "Try to make shorter sentences to improve readability": [
    "Probeer kortere zinnen te maken om de leesbaarheid te verbeteren"
  ],
  "Try to make shorter sentences, using less difficult words to improve readability": [
    "Probeer kortere zinnen te maken en minder moeilijke woorden te gebruiken om de leesbaarheid te verbeteren"
  ],
  "very difficult": [
    "zeer moeilijk"
  ],
  "very easy": [
    "zeer makkelijk"
  ],
  "You can click on each element in the preview to jump to the Snippet Editor.": [
    "U kunt op elk element in de preview klikken om naar de Snippet-editor te gaan."
  ]
}, $ = [
  "schwierig"
], d = [
  "leicht"
], h = [
  "Feedback"
], l = [
  "Gut"
], u = [
  "ok"
], m = [
  "OK"
], g = [
  "Slug"
], p = {
  "": {
    domain: "js-text-analysis",
    lang: "de",
    plural_forms: "nplurals=2; plural=(n != 1);"
  },
  "%1$s of the words contain %2$sover %3$s syllables%4$s, which is less than or equal to the recommended maximum of %5$s.": [
    "%1$s der Wörter enthalten mehr als %3$s Silben%4$s, was weniger oder gleich dem empfohlenen Maximum von %5$s ist."
  ],
  "%1$s of the words contain %2$sover %3$s syllables%4$s, which is more than the recommended maximum of %5$s.": [
    "%1$s der Wörter enthalten mehr als %3$s Silben%4$s, was mehr als das empfohlene Maximum von %5$s ist."
  ],
  "%1$sConsecutive sentences%2$s: The text contains %3$d consecutive sentences starting with the same word. %5$sTry to mix things up%2$s!": [
    "%1$sKonsekutive Sätze%2$s: Der Text enthält %3$d aufeinanderfolgende Sätze, die mit demselben Wort beginnen. %5$sVersuchen Sie, die Dinge zu variieren%2$s!",
    "%1$sKonsekutive Sätze%2$s: Der Text enthält %4$d Fälle, in denen %3$d oder mehr aufeinanderfolgende Sätze mit demselben Wort beginnen. %5$sVersuchen Sie, die Dinge zu variieren%2$s!"
  ],
  "%1$sConsecutive sentences%2$s: There is enough variety in your sentences. That's great!": [
    "%1$sKonsekutive Sätze%2$s: Es gibt genug Abwechslung in Ihren Sätzen. Das ist großartig!"
  ],
  "%1$sFlesch Reading Ease%2$s: The copy scores %3$s in the test, which is considered %4$s to read. %5$s": [
    "%1$sFlesch-Lesbarkeitsindex%2$s: Der Text erreicht %3$s in dem Test, was als %4$s zu lesen gilt. %5$s"
  ],
  "%1$sFlesch Reading Ease%2$s: The copy scores %3$s in the test, which is considered %4$s to read. %5$s%6$s%7$s": [
    "%1$sFlesch-Lesbarkeitsindex%2$s: Der Text erreicht %3$s in dem Test, was als %4$s zu lesen gilt. %5$s%6$s%7$s"
  ],
  '%1$sFunction words in keyphrase%3$s: Your keyphrase "%4$s" contains function words only. %2$sLearn more about what makes a good keyphrase.%3$s': [
    '%1$sFunktionswörter in der Keyphrase%3$s: Ihre Keyphrase "%4$s" enthält nur Funktionswörter. %2$sErfahren Sie mehr darüber, was eine gute Keyphrase ausmacht.%3$s'
  ],
  "%1$sImage alt attributes%2$s: Good job!": [
    "%1$sAlt-Attribute von Bildern%2$s: Gute Arbeit!"
  ],
  "%1$sImage alt attributes%3$s: Images on this page do not have alt attributes that reflect the topic of your text. %2$sAdd your keyphrase or synonyms to the alt tags of relevant images%3$s!": [
    "%1$sAlt-Attribute von Bildern%3$s: Bilder auf dieser Seite haben keine Alt-Attribute, die das Thema Ihres Textes widerspiegeln. %2$sFügen Sie Ihre Keyphrase oder Synonyme den Alt-Tags relevanter Bilder hinzu%3$s!"
  ],
  "%1$sImage alt attributes%3$s: Images on this page have alt attributes, but you have not set your keyphrase. %2$sFix that%3$s!": [
    "%1$sAlt-Attribute von Bildern%3$s: Bilder auf dieser Seite haben Alt-Attribute, aber Sie haben Ihre Keyphrase nicht festgelegt. %2$sAnpassung empfohlen%3$s!"
  ],
  "%1$sImage alt attributes%3$s: No images appear on this page. %2$sAdd some%3$s!": [
    "%1$sAlt-Attribute von Bildern%3$s: Auf dieser Seite erscheinen keine Bilder. %2$sFügen Sie welche hinzu%3$s!"
  ],
  "%1$sInternal links%2$s: There are both nofollowed and normal internal links on this page. Good job!": [
    "%1$sInterne Links%2$s: Auf dieser Seite gibt es sowohl nofollow als auch normale interne Links. Gute Arbeit!"
  ],
  "%1$sInternal links%2$s: You have enough internal links. Good job!": [
    "%1$sInterne Links%2$s: Sie haben genügend interne Links. Gute Arbeit!"
  ],
  "%1$sInternal links%3$s: No internal links appear in this page, %2$smake sure to add some%3$s!": [
    "%1$sInterne Links%3$s: Auf dieser Seite erscheinen keine internen Links, %2$sstellen Sie sicher, welche hinzuzufügen%3$s!"
  ],
  "%1$sInternal links%3$s: The internal links in this page are all nofollowed. %2$sAdd some good internal links%3$s.": [
    "%1$sInterne Links%3$s: Die internen Links auf dieser Seite sind alle mit nofollow versehen. %2$sFügen Sie einige gute interne Links hinzu%3$s."
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %3$d time. This is great!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %3$d Mal gefunden. Das ist großartig!",
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %3$d Mal gefunden. Das ist großartig!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That's less than the recommended minimum of %3$d times for a text of this length. %4$sFocus on your keyphrase%2$s!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist weniger als das empfohlene Minimum von %3$d Mal für einen Text dieser Länge. %4$sKonzentrieren Sie sich auf Ihre Keyphrase%2$s!",
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist weniger als das empfohlene Minimum von %3$d Mal für einen Text dieser Länge. %4$sKonzentrieren Sie sich auf Ihre Keyphrase%2$s!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That's more than the recommended maximum of %3$d times for a text of this length. %4$sDon't overoptimize%2$s!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist mehr als das empfohlene Maximum von %3$d Mal für einen Text dieser Länge. %4$sÜberoptimieren Sie nicht%2$s!",
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist mehr als das empfohlene Maximum von %3$d Mal für einen Text dieser Länge. %4$sÜberoptimieren Sie nicht%2$s!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That's way more than the recommended maximum of %3$d times for a text of this length. %4$sDon't overoptimize%2$s!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist weit mehr als das empfohlene Maximum von %3$d Mal für einen Text dieser Länge. %4$sÜberoptimieren Sie nicht%2$s!",
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde %5$d Mal gefunden. Das ist weit mehr als das empfohlene Maximum von %3$d Mal für einen Text dieser Länge. %4$sÜberoptimieren Sie nicht%2$s!"
  ],
  "%1$sKeyphrase density%2$s: The focus keyphrase was found 0 times. That's less than the recommended minimum of %3$d times for a text of this length. %4$sFocus on your keyphrase%2$s!": [
    "%1$sKeyphrase-Dichte%2$s: Die Fokus-Keyphrase wurde 0 Mal gefunden. Das ist weniger als das empfohlene Minimum von %3$d Mal für einen Text dieser Länge. %4$sKonzentrieren Sie sich auf Ihre Keyphrase%2$s!"
  ],
  "%1$sKeyphrase distribution%2$s: Good job!": [
    "%1$sVerteilung der Keyphrase%2$s: Gute Arbeit!"
  ],
  "%1$sKeyphrase distribution%3$s: %2$sInclude your keyphrase or its synonyms in the text so that we can check keyphrase distribution%3$s.": [
    "%1$sVerteilung der Keyphrase%3$s: %2$sFügen Sie Ihre Keyphrase oder deren Synonyme in den Text ein, damit wir die Verteilung der Keyphrase überprüfen können%3$s."
  ],
  "%1$sKeyphrase distribution%3$s: Uneven. Some parts of your text do not contain the keyphrase or its synonyms. %2$sDistribute them more evenly%3$s.": [
    "%1$sVerteilung der Keyphrase%3$s: Ungleiche Verteilung. Einige Teile Ihres Textes enthalten die Keyphrase oder deren Synonyme nicht. %2$sVerteilen Sie sie gleichmäßiger%3$s."
  ],
  "%1$sKeyphrase distribution%3$s: Very uneven. Large parts of your text do not contain the keyphrase or its synonyms. %2$sDistribute them more evenly%3$s.": [
    "%1$sVerteilung der Keyphrase%3$s: Sehr ungleiche Verteilung. Große Teile Ihres Textes enthalten die Keyphrase oder deren Synonyme nicht. %2$sVerteilen Sie sie gleichmäßiger%3$s."
  ],
  "%1$sKeyphrase in introduction%2$s: Well done!": [
    "%1$sKeyphrase in der Einleitung%2$s: Gut gemacht!"
  ],
  "%1$sKeyphrase in introduction%3$s: Your keyphrase or its synonyms do not appear in the first paragraph. %2$sMake sure the topic is clear immediately%3$s.": [
    "%1$sKeyphrase in der Einleitung%3$s: Ihre Keyphrase oder deren Synonyme erscheinen nicht im ersten Absatz. %2$sStellen Sie sicher, dass das Thema sofort klar ist%3$s."
  ],
  "%1$sKeyphrase in introduction%3$s:Your keyphrase or its synonyms appear in the first paragraph of the copy, but not within one sentence. %2$sFix that%3$s!": [
    "%1$sKeyphrase in der Einleitung%3$s: Ihre Keyphrase oder deren Synonyme erscheinen im ersten Absatz des Textes, aber nicht innerhalb eines Satzes. %2$sAnpassung empfohlen%3$s!"
  ],
  "%1$sKeyphrase in meta description%2$s: Keyphrase or synonym appear in the meta description. Well done!": [
    "%1$sKeyphrase in der Meta-Beschreibung%2$s: Keyphrase oder Synonym erscheinen in der Meta-Beschreibung. Gut gemacht!"
  ],
  "%1$sKeyphrase in meta description%2$s: The meta description contains the keyphrase %3$s times, which is over the advised maximum of 2 times. %4$sLimit that%5$s!": [
    "%1$sKeyphrase in der Meta-Beschreibung%2$s: Die Meta-Beschreibung enthält die Keyphrase %3$s Mal, was über dem empfohlenen Maximum von 2 Mal liegt. %4$sBegrenzung empfohlen%5$s!"
  ],
  "%1$sKeyphrase in meta description%2$s: The meta description has been specified, but it does not contain the keyphrase. %3$sFix that%4$s!": [
    "%1$sKeyphrase in der Meta-Beschreibung%2$s: Die Meta-Beschreibung wurde angegeben, enthält aber nicht die Keyphrase. %3$sAnpassung empfohlen%4$s!"
  ],
  "%1$sKeyphrase in slug%2$s: Great work!": [
    "%1$sKeyphrase im Slug%2$s: Großartige Arbeit!"
  ],
  "%1$sKeyphrase in slug%2$s: More than half of your keyphrase appears in the slug. That's great!": [
    "%1$sKeyphrase im Slug%2$s: Mehr als die Hälfte Ihrer Keyphrase erscheint im Slug. Das ist großartig!"
  ],
  "%1$sKeyphrase in slug%3$s: (Part of) your keyphrase does not appear in the slug. %2$sChange that%3$s!": [
    "%1$sKeyphrase im Slug%3$s: (Ein Teil) Ihrer Keyphrase erscheint nicht im Slug. %2$sAnpassung empfohlen%3$s!"
  ],
  "%1$sKeyphrase in subheading%2$s: %3$s of your H2 and H3 subheadings reflects the topic of your copy. Good job!": [
    "%1$sKeyphrase in Zwischenüberschriften%2$s: %3$s Ihrer H2- und H3-Zwischenüberschriften spiegeln das Thema Ihres Textes wider. Gute Arbeit!",
    "%1$sKeyphrase in Zwischenüberschriften%2$s: %3$s Ihrer H2- und H3-Zwischenüberschriften spiegeln das Thema Ihres Textes wider. Gute Arbeit!"
  ],
  "%1$sKeyphrase in subheading%2$s: Your H2 or H3 subheading reflects the topic of your copy. Good job!": [
    "%1$sKeyphrase in Zwischenüberschriften%2$s: Ihre H2- oder H3-Zwischenüberschrift spiegelt das Thema Ihres Textes wider. Gute Arbeit!"
  ],
  "%1$sKeyphrase in subheading%3$s: %2$sUse more keyphrases or synonyms in your H2 and H3 subheadings%3$s!": [
    "%1$sKeyphrase in Zwischenüberschriften%3$s: %2$sVerwenden Sie mehr Keyphrasen oder Synonyme in Ihren H2- und H3-Zwischenüberschriften%3$s!"
  ],
  "%1$sKeyphrase in subheading%3$s: More than 75%% of your H2 and H3 subheadings reflect the topic of your copy. That's too much. %2$sDon't over-optimize%3$s!": [
    "%1$sKeyphrase in Zwischenüberschriften%3$s: Mehr als 75%% Ihrer H2- und H3-Zwischenüberschriften spiegeln das Thema Ihres Textes wider. Das ist zu viel. %2$sÜberoptimieren Sie nicht%3$s!"
  ],
  "%1$sKeyphrase in title%2$s: The exact match of the focus keyphrase appears at the beginning of the SEO title. Good job!": [
    "%1$sKeyphrase im Titel%2$s: Die exakte Übereinstimmung der Fokus-Keyphrase erscheint am Anfang des SEO-Titels. Gute Arbeit!"
  ],
  "%1$sKeyphrase in title%3$s: Does not contain the exact match. %2$sTry to write the exact match of your keyphrase in the SEO title and put it at the beginning of the title%3$s.": [
    "%1$sKeyphrase im Titel%3$s: Enthält nicht die exakte Übereinstimmung. %2$sVersuchen Sie, die exakte Übereinstimmung Ihrer Keyphrase im SEO-Titel zu schreiben und setzen Sie sie an den Anfang des Titels%3$s."
  ],
  '%1$sKeyphrase in title%3$s: Not all the words from your keyphrase "%4$s" appear in the SEO title. %2$sFor the best SEO results write the exact match of your keyphrase in the SEO title, and put the keyphrase at the beginning of the title%3$s.': [
    '%1$sKeyphrase im Titel%3$s: Nicht alle Wörter Ihrer Keyphrase "%4$s" erscheinen im SEO-Titel. %2$sFür die besten SEO-Ergebnisse schreiben Sie die exakte Übereinstimmung Ihrer Keyphrase im SEO-Titel und setzen Sie die Keyphrase an den Anfang des Titels%3$s.'
  ],
  "%1$sKeyphrase in title%3$s: The exact match of the focus keyphrase appears in the SEO title, but not at the beginning. %2$sMove it to the beginning for the best results%3$s.": [
    "%1$sKeyphrase im Titel%3$s: Die exakte Übereinstimmung der Fokus-Keyphrase erscheint im SEO-Titel, aber nicht am Anfang. %2$sVerschieben Sie sie an den Anfang für die besten Ergebnisse%3$s."
  ],
  "%1$sKeyphrase length%2$s: Good job!": [
    "%1$sLänge der Keyphrase%2$s: Gute Arbeit!"
  ],
  "%1$sKeyphrase length%3$s: %2$sSet a keyphrase in order to calculate your SEO score%3$s.": [
    "%1$sLänge der Keyphrase%3$s: %2$sLegen Sie eine Keyphrase fest, um Ihren SEO-Score zu berechnen%3$s."
  ],
  "%1$sKeyphrase length%3$s: No focus keyphrase was set for this page. %2$sSet a keyphrase in order to calculate your SEO score%3$s.": [
    "%1$sLänge der Keyphrase%3$s: Für diese Seite wurde keine Fokus-Keyphrase festgelegt. %2$sLegen Sie eine Keyphrase fest, um Ihren SEO-Score zu berechnen%3$s."
  ],
  "%1$sLink keyphrase%3$s: You're linking to another page with the words you want this page to rank for. %2$sDon't do that%3$s!": [
    "%1$sLink-Keyphrase%3$s: Sie verlinken auf eine andere Seite mit den Wörtern, für die diese Seite ranken soll. %2$sTun Sie das nicht%3$s!"
  ],
  "%1$sMeta description length%2$s: Well done!": [
    "%1$sLänge der Meta-Beschreibung%2$s: Gut gemacht!"
  ],
  "%1$sMeta description length%3$s: No meta description has been specified. Search engines will display copy from the page instead. %2$sMake sure to write one%3$s!": [
    "%1$sLänge der Meta-Beschreibung%3$s: Es wurde keine Meta-Beschreibung angegeben. Suchmaschinen werden stattdessen Text von der Seite anzeigen. %2$sStellen Sie sicher, dass Sie eine schreiben%3$s!"
  ],
  "%1$sMeta description length%3$s: The meta description is over %4$d characters. To ensure the entire description will be visible, %2$syou should reduce the length%3$s!": [
    "%1$sLänge der Meta-Beschreibung%3$s: Die Meta-Beschreibung ist länger als %4$d Zeichen. Um sicherzustellen, dass die gesamte Beschreibung sichtbar ist, %2$ssollten Sie die Länge reduzieren%3$s!"
  ],
  "%1$sMeta description length%3$s: The meta description is too short (under %4$d characters). Up to %5$d characters are available. %2$sUse the space%3$s!": [
    "%1$sLänge der Meta-Beschreibung%3$s: Die Meta-Beschreibung ist zu kurz (unter %4$d Zeichen). Bis zu %5$d Zeichen sind verfügbar. %2$sNutzen Sie den Platz%3$s!"
  ],
  "%1$sNot enough content%2$s: %3$sPlease add some content to enable a good analysis%2$s.": [
    "%1$sNicht genug Inhalt%2$s: %3$sBitte fügen Sie etwas Inhalt hinzu, um eine gute Analyse zu ermöglichen%2$s."
  ],
  "%1$sOutbound links%2$s: Good job!": [
    "%1$sAusgehende Links%2$s: Gute Arbeit!"
  ],
  "%1$sOutbound links%2$s: There are both nofollowed and normal outbound links on this page. Good job!": [
    "%1$sAusgehende Links%2$s: Auf dieser Seite gibt es sowohl nofollow als auch normale ausgehende Links. Gute Arbeit!"
  ],
  "%1$sOutbound links%3$s: All outbound links on this page are nofollowed. %2$sAdd some normal links%3$s.": [
    "%1$sAusgehende Links%3$s: Alle ausgehenden Links auf dieser Seite sind mit nofollow versehen. %2$sFügen Sie einige normale Links hinzu%3$s."
  ],
  "%1$sOutbound links%3$s: No outbound links appear in this page. %2$sAdd some%3$s!": [
    "%1$sAusgehende Links%3$s: Auf dieser Seite erscheinen keine ausgehenden Links. %2$sFügen Sie welche hinzu%3$s!"
  ],
  "%1$sParagraph length%2$s: %3$d of the paragraphs contains more than the recommended maximum of %4$d words. %5$sShorten your paragraphs%2$s!": [
    "%1$sAbsatzlänge%2$s: %3$d der Absätze enthalten mehr als das empfohlene Maximum von %4$d Wörtern. %5$sKürzen Sie Ihre Absätze%2$s!",
    "%1$sAbsatzlänge%2$s: %3$d der Absätze enthalten mehr als das empfohlene Maximum von %4$d Wörtern. %5$sKürzen Sie Ihre Absätze%2$s!"
  ],
  "%1$sParagraph length%2$s: None of the paragraphs are too long. Great job!": [
    "%1$sAbsatzlänge%2$s: Keiner der Absätze ist zu lang. Großartige Arbeit!"
  ],
  "%1$sPassive voice%2$s: %3$s of the sentences contain passive voice, which is more than the recommended maximum of %4$s. %5$sTry to use their active counterparts%2$s.": [
    "%1$sPassivkonstruktionen%2$s: %3$s der Sätze enthalten Passivkonstruktionen, was mehr als das empfohlene Maximum von %4$s ist. %5$sVersuchen Sie, aktive Formulierungen zu verwenden%2$s."
  ],
  "%1$sPassive voice%2$s: You're using enough active voice. That's great!": [
    "%1$sPassivkonstruktionen%2$s: Sie verwenden ausreichend aktive Formulierungen. Das ist großartig!"
  ],
  "%1$sPreviously used keyphrase%2$s: You've not used this keyphrase before, very good.": [
    "%1$sBereits verwendete Keyphrase%2$s: Sie haben diese Keyphrase zuvor noch nicht verwendet, sehr gut."
  ],
  "%1$sSentence length%2$s: %3$s of the sentences contain more than %4$s words, which is more than the recommended maximum of %5$s. %6$sTry to shorten the sentences%2$s.": [
    "%1$sSatzlänge%2$s: %3$s der Sätze enthalten mehr als %4$s Wörter, was mehr als das empfohlene Maximum von %5$s ist. %6$sVersuchen Sie, die Sätze zu kürzen%2$s."
  ],
  "%1$sSentence length%2$s: Great!": [
    "%1$sSatzlänge%2$s: Großartig!"
  ],
  "%1$sSEO title width%2$s: Good job!": [
    "%1$sSEO-Titelbreite%2$s: Gute Arbeit!"
  ],
  "%1$sSEO title width%3$s: %2$sPlease create an SEO title%3$s.": [
    "%1$sSEO-Titelbreite%3$s: %2$sBitte erstellen Sie einen SEO-Titel%3$s."
  ],
  "%1$sSEO title width%3$s: The SEO title is too short. %2$sUse the space to add keyphrase variations or create compelling call-to-action copy%3$s.": [
    "%1$sSEO-Titelbreite%3$s: Der SEO-Titel ist zu kurz. %2$sNutzen Sie den Platz, um Variationen der Keyphrase hinzuzufügen oder überzeugende Handlungsaufforderungen zu erstellen%3$s."
  ],
  "%1$sSEO title width%3$s: The SEO title is wider than the viewable limit. %2$sTry to make it shorter%3$s.": [
    "%1$sSEO-Titelbreite%3$s: Der SEO-Titel ist breiter als das sichtbare Limit. %2$sVersuchen Sie, ihn kürzer zu machen%3$s."
  ],
  "%1$sSingle title%3$s: H1s should only be used as your main title. Find all H1s in your text that aren't your main title and %2$schange them to a lower heading level%3$s!": [
    "%1$sEinzelner Titel%3$s: H1s sollten nur als Ihr Haupttitel verwendet werden. Finden Sie alle H1s in Ihrem Text, die nicht Ihr Haupttitel sind, und %2$sändern Sie sie in eine niedrigere Überschriftenebene%3$s!"
  ],
  "%1$sSlug stopwords%3$s: The slug for this page contains a stop word. %2$sRemove it%3$s!": [
    "%1$sSlug-Stopwörter%3$s: Der Slug für diese Seite enthält ein Stopwort. %2$sEntfernen Sie es%3$s!",
    "%1$sSlug-Stopwörter%3$s: Der Slug für diese Seite enthält Stopwörter. %2$sEntfernen Sie sie%3$s!"
  ],
  "%1$sSlug too long%3$s: the slug for this page is a bit long. %2$sShorten it%3$s!": [
    "%1$sSlug zu lang%3$s: Der Slug für diese Seite ist etwas zu lang. %2$sKürzen Sie ihn%3$s!"
  ],
  "%1$sStopwords%3$s: The keyphrase contains stop words. This may or may not be wise depending on the circumstances. %2$sLearn more about stop words%3$s.": [
    "%1$sStopwörter%3$s: Die Keyphrase enthält Stopwörter. Dies kann je nach Umständen klug oder nicht klug sein. %2$sErfahren Sie mehr über Stopwörter%3$s."
  ],
  "%1$sSubheading distribution%2$s: %3$d section of your text is longer than %4$d words and is not separated by any subheadings. %5$sAdd subheadings to improve readability%2$s.": [
    "%1$sVerteilung der Zwischenüberschriften%2$s: %3$d Abschnitt Ihres Textes ist länger als %4$d Wörter und wird durch keine Zwischenüberschriften getrennt. %5$sFügen Sie Zwischenüberschriften hinzu, um die Lesbarkeit zu verbessern%2$s.",
    "%1$sVerteilung der Zwischenüberschriften%2$s: %3$d Abschnitte Ihres Textes sind länger als %4$d Wörter und werden durch keine Zwischenüberschriften getrennt. %5$sFügen Sie Zwischenüberschriften hinzu, um die Lesbarkeit zu verbessern%2$s."
  ],
  "%1$sSubheading distribution%2$s: Great job!": [
    "%1$sVerteilung der Zwischenüberschriften%2$s: Gute Arbeit!"
  ],
  "%1$sSubheading distribution%2$s: You are not using any subheadings, although your text is rather long. %3$sTry and add some subheadings%2$s.": [
    "%1$sVerteilung der Zwischenüberschriften%2$s: Sie verwenden keine Zwischenüberschriften, obwohl Ihr Text ziemlich lang ist. %3$sVersuchen Sie, einige Zwischenüberschriften hinzuzufügen%2$s."
  ],
  "%1$sSubheading distribution%2$s: You are not using any subheadings, but your text is short enough and probably doesn't need them.": [
    "%1$sVerteilung der Zwischenüberschriften%2$s: Sie verwenden keine Zwischenüberschriften, aber Ihr Text ist kurz genug und benötigt sie wahrscheinlich nicht."
  ],
  "%1$sTransition words%2$s: None of the sentences contain transition words. %3$sUse some%2$s.": [
    "%1$sÜbergangswörter%2$s: Keiner der Sätze enthält Übergangswörter. %3$sVerwenden Sie welche%2$s."
  ],
  "%1$sTransition words%2$s: Only %3$s of the sentences contain transition words, which is not enough. %4$sUse more of them%2$s.": [
    "%1$sÜbergangswörter%2$s: Nur %3$s der Sätze enthalten Übergangswörter, was nicht ausreicht. %4$sVerwenden Sie mehr davon%2$s."
  ],
  "%1$sTransition words%2$s: Well done!": [
    "%1$sÜbergangswörter%2$s: Gut gemacht!"
  ],
  "%2$sText length%3$s: The text contains %1$d word. Good job!": [
    "%2$sTextlänge%3$s: Der Text enthält %1$d Wort. Gute Arbeit!",
    "%2$sTextlänge%3$s: Der Text enthält %1$d Wörter. Gute Arbeit!"
  ],
  "%2$sText length%4$s: The text contains %1$d word.": [
    "%2$sTextlänge%4$s: Der Text enthält %1$d Wort.",
    "%2$sTextlänge%4$s: Der Text enthält %1$d Wörter."
  ],
  "%3$sImage alt attributes%5$s: Out of %2$d images on this page, %1$d have alt attributes with words from your keyphrase or synonyms. That's a bit much. %4$sOnly include the keyphrase or its synonyms when it really fits the image%5$s.": [
    "%3$sAlt-Attribute von Bildern%5$s: Von %2$d Bildern auf dieser Seite haben %1$d Alt-Attribute mit Wörtern aus Ihrer Keyphrase oder Synonymen. Das ist ein bisschen viel. %4$sFügen Sie die Keyphrase oder deren Synonyme nur dann ein, wenn sie wirklich zum Bild passen%5$s."
  ],
  "%3$sImage alt attributes%5$s: Out of %2$d images on this page, only %1$d has an alt attribute that reflects the topic of your text. %4$sAdd your keyphrase or synonyms to the alt tags of more relevant images%5$s!": [
    "%3$sAlt-Attribute von Bildern%5$s: Von %2$d Bildern auf dieser Seite hat nur %1$d ein Alt-Attribut, das das Thema Ihres Textes widerspiegelt. %4$sFügen Sie Ihre Keyphrase oder Synonyme den Alt-Tags relevanterer Bilder hinzu%5$s!",
    "%3$sAlt-Attribute von Bildern%5$s: Von %2$d Bild auf dieser Seite haben nur %1$d Alt-Attribute, die das Thema Ihres Textes widerspiegeln. %4$sFügen Sie Ihre Keyphrase oder Synonyme den Alt-Tags relevanterer Bilder hinzu%5$s!"
  ],
  "%3$sKeyphrase length%5$s: The keyphrase is %1$d words long. That's more than the recommended maximum of %2$d words. %4$sMake it shorter%5$s!": [
    "%3$sLänge der Keyphrase%5$s: Die Keyphrase ist %1$d Wörter lang. Das ist mehr als das empfohlene Maximum von %2$d Wörtern. %4$sMachen Sie sie kürzer%5$s!"
  ],
  "%3$sKeyphrase length%5$s: The keyphrase is %1$d words long. That's way more than the recommended maximum of %2$d words. %4$sMake it shorter%5$s!": [
    "%3$sLänge der Keyphrase%5$s: Die Keyphrase ist %1$d Wörter lang. Das ist weit mehr als das empfohlene Maximum von %2$d Wörtern. %4$sMachen Sie sie kürzer%5$s!"
  ],
  "%3$sPreviously used keyphrase%5$s: You've used this keyphrase %1$sonce before%2$s. %4$sDo not use your keyphrase more than once%5$s.": [
    "%3$sBereits verwendete Keyphrase%5$s: Sie haben diese Keyphrase %1$seinmal zuvor verwendet%2$s. %4$sVerwenden Sie Ihre Keyphrase nicht mehr als einmal%5$s."
  ],
  "%4$sPreviously used keyphrase%6$s: You've used this keyphrase %1$s%2$d times before%3$s. %5$sDo not use your keyphrase more than once%6$s.": [
    "%4$sBereits verwendete Keyphrase%6$s: Sie haben diese Keyphrase %1$s%2$d Mal zuvor verwendet%3$s. %5$sVerwenden Sie Ihre Keyphrase nicht mehr als einmal%6$s."
  ],
  "An error occurred in the '%1$s' assessment": [
    "Ein Fehler ist bei der '%1$s'-Bewertung aufgetreten"
  ],
  "Close snippet editor": [
    "Snippet-Editor schließen"
  ],
  "Content optimization:": [
    "Inhaltsoptimierung:"
  ],
  "Desktop preview": [
    "Desktop-Vorschau"
  ],
  difficult: $,
  easy: d,
  "Edit snippet": [
    "Snippet bearbeiten"
  ],
  "fairly difficult": [
    "ziemlich schwierig"
  ],
  "fairly easy": [
    "ziemlich leicht"
  ],
  Feedback: h,
  Good: l,
  "Good job!": [
    "Gute Arbeit!"
  ],
  "Good SEO score": [
    "Guter SEO-Score"
  ],
  "Google preview": [
    "Google-Vorschau"
  ],
  "Has feedback": [
    "Hat Feedback"
  ],
  "Mark this result in the text": [
    "Markieren Sie dieses Ergebnis im Text"
  ],
  "Marks are disabled in current view": [
    "Markierungen sind in der aktuellen Ansicht deaktiviert"
  ],
  "Meta description": [
    "Meta-Beschreibung"
  ],
  "Meta description preview:": [
    "Vorschau der Meta-Beschreibung:"
  ],
  "Mobile preview": [
    "Mobile Vorschau"
  ],
  "Needs improvement": [
    "Bedarf Verbesserung"
  ],
  ok: u,
  OK: m,
  "OK SEO score": [
    "OK SEO-Score"
  ],
  "Please provide a meta description by editing the snippet below.": [
    "Bitte geben Sie eine Meta-Beschreibung an, indem Sie das untenstehende Snippet bearbeiten."
  ],
  "Please provide an SEO title by editing the snippet below.": [
    "Bitte geben Sie einen SEO-Titel an, indem Sie das untenstehende Snippet bearbeiten."
  ],
  "Remove marks in the text": [
    "Markierungen im Text entfernen"
  ],
  "Scroll to see the preview content.": [
    "Scrollen, um den Vorschauintalt zu sehen."
  ],
  "SEO title": [
    "SEO-Titel"
  ],
  "SEO title preview:": [
    "SEO-Titel Vorschau:"
  ],
  Slug: g,
  "Slug preview:": [
    "Slug-Vorschau:"
  ],
  "The meta description contains %1$d sentence %2$sover %3$s words%4$s. Try to shorten this sentence.": [
    "Die Meta-Beschreibung enthält %1$d Satz %2$smit mehr als %3$s Wörtern%4$s. Versuchen Sie, diesen Satz zu kürzen.",
    "Die Meta-Beschreibung enthält %1$d Sätze %2$smit mehr als %3$s Wörtern%4$s. Versuchen Sie, diese Sätze zu kürzen."
  ],
  "The meta description contains no sentences %1$sover %2$s words%3$s.": [
    "Die Meta-Beschreibung enthält keine Sätze %1$smit mehr als %2$s Wörtern%3$s."
  ],
  "This is below the recommended minimum of %5$d word. %3$sAdd more content%4$s.": [
    "Dies liegt unter dem empfohlenen Minimum von %5$d Wort. %3$sFügen Sie mehr Inhalt hinzu%4$s.",
    "Dies liegt unter dem empfohlenen Minimum von %5$d Wörtern. %3$sFügen Sie mehr Inhalt hinzu%4$s."
  ],
  "This is far below the recommended minimum of %5$d word. %3$sAdd more content%4$s.": [
    "Dies liegt weit unter dem empfohlenen Minimum von %5$d Wort. %3$sFügen Sie mehr Inhalt hinzu%4$s.",
    "Dies liegt weit unter dem empfohlenen Minimum von %5$d Wörtern. %3$sFügen Sie mehr Inhalt hinzu%4$s."
  ],
  "This is slightly below the recommended minimum of %5$d word. %3$sAdd a bit more copy%4$s.": [
    "Dies liegt leicht unter dem empfohlenen Minimum von %5$d Wort. %3$sFügen Sie ein wenig mehr Text hinzu%4$s.",
    "Dies liegt leicht unter dem empfohlenen Minimum von %5$d Wörtern. %3$sFügen Sie ein wenig mehr Text hinzu%4$s."
  ],
  "Try to make shorter sentences to improve readability": [
    "Versuchen Sie, kürzere Sätze zu bilden, um die Lesbarkeit zu verbessern"
  ],
  "Try to make shorter sentences, using less difficult words to improve readability": [
    "Versuchen Sie, kürzere Sätze zu verwenden und weniger schwierige Wörter zu nutzen, um die Lesbarkeit zu verbessern"
  ],
  "very difficult": [
    "sehr schwierig"
  ],
  "very easy": [
    "sehr leicht"
  ],
  "You can click on each element in the preview to jump to the Snippet Editor.": [
    "Sie können auf jedes Element in der Vorschau klicken, um zum Snippet-Editor zu gelangen."
  ]
}, c = {
  de: p,
  nl: o
};
export {
  c as default
};
