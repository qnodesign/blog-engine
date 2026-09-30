---
title: Läuft das auch in zehn Jahren noch?
date: 2026-09-10
language: de
tags: zukunftssicher, offene-standards, home-assistant, planung
layout: blog-post.njk
permalink: /de/insights/zukunftssicher/
permalinkalt: /en/insights/future-proof/
ogimage: future-proof/og.jpg
excerpt: Ein Smart Home muss nicht altern wie ein Gadget. Die Plattform wird weiterentwickelt, und Ihr System wächst mit neuen Standards.
readingtime: 7 Min. Lesezeit
related: [kein-vendor-lock-in]
author: Koni
---

## «Ist das nicht in zwei Jahren veraltet?»

Wer ein Handy, einen Fernseher oder einen Laptop gekauft hat, kennt das Gefühl: Ein, zwei Jahre später ist das Gerät schon von gestern. Wenn Ihnen nun jemand anbietet, ein smartes System in Ihr Zuhause einzubauen, ist die Zurückhaltung völlig verständlich. Niemand möchte in etwas investieren, das am Ende in der Schublade landet.

Die Sorge ist berechtigt. Aber es lohnt sich, genauer zu fragen: Was lässt ein Smart Home eigentlich schlecht altern?

## Woran ein Smart Home wirklich altert

Selten an der Hardware. Lampen, Sensoren und Schalter halten meist viele Jahre. Schlecht altert die Abhängigkeit von einer einzigen Firma.

2016 hat Nest, ein Unternehmen von Alphabet, [alle Revolv-Hubs dauerhaft abgeschaltet](https://venturebeat.com/business/alphabets-nest-will-permanently-turn-off-all-revolv-hubs-on-may-15-2016). 2022 stellte das Smart-Home-Unternehmen Insteon [abrupt den Betrieb ein](https://hackaday.com/2022/04/25/insteon-abruptly-shuts-down-users-left-smart-home-less/), und die Kundschaft stand ohne den Dienst da, auf den ihr System angewiesen war. In beiden Fällen waren die Geräte nicht abgenutzt. Die Firma dahinter hat aufgehört, und damit die Teile des Systems, die auf ihren Servern liefen.

Das ist das eigentliche Veraltungsrisiko: nicht das Alter Ihrer Geräte, sondern die Frage, ob Ihr Zuhause von den Geschäftsentscheidungen eines anderen abhängt.

## Denken Sie an eine Küche, nicht an ein Gadget

Eine gute Küche wird nicht ersetzt, wenn der Backofen kaputtgeht. Man tauscht den Backofen. Steckdosen, Leitungen und Aufteilung bleiben, und das neue Gerät wird einfach eingesteckt.

Ein Smart Home kann genauso funktionieren. Es besteht aus drei Schichten:

- **Standards** sind die Steckdosen. Offene Standards wie Zigbee, Z-Wave und Matter sorgen dafür, dass Geräte vieler Hersteller dieselbe Sprache sprechen, und sie überleben einzelne Marken.
- **Geräte** sind die Haushaltsgeräte. Ein Sensor, eine Lampe oder ein Thermostat lässt sich einzeln ersetzen, wenn er kaputtgeht oder etwas Besseres auf den Markt kommt.
- **Das Gehirn** ist die Software, die alles verbindet und entscheidet, was passiert. Es läuft bei Ihnen zuhause und wird laufend aktualisiert.

Sind diese Schichten getrennt, muss nie alles von vorn beginnen. Ein Teil ändert sich, der Rest funktioniert weiter.

<figure class="blog-post__figure">
  <img src="/images/insights/future-proof/kitchen-analogy.jpg" alt="Eine Küche, in der ein Gerät gegen ein neueres Modell getauscht wird, während Steckdosen, Leitungen und Aufteilung unverändert bleiben" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Ein Gehirn, das dazulernt

Die Software im Zentrum eines Konihaus-Systems ist Home Assistant. Sie wird offen entwickelt und regelmässig aktualisiert. Kommt ein neuer Standard, wird die Unterstützung in die Software eingebaut, und Ihr System lernt ihn, ohne ersetzt zu werden. Matter ist ein gutes Beispiel: Konihaus steuert Matter-Geräte lokal, [ohne Internetverbindung oder Cloud-Dienste](https://csa-iot.org/all-solutions/matter/).

Zum «kostenlos» gehört eine ehrliche Anmerkung: Die Software-Updates kosten nichts und gehören zum Service. Neue Geräte sind eine separate Entscheidung, und Sie kaufen sie nur, wenn Sie das möchten. Der Punkt ist, dass Sie nie *müssen*.

## Was niemand versprechen kann

Niemand kann ehrlich versprechen, dass ein Smart Home zwanzig Jahre lang unverändert bleibt. Die Technik entwickelt sich weiter, und manche Geräte werden früher ersetzt als andere.

Versprechen lässt sich etwas anderes, Nützlicheres: Wenn sich etwas ändert, tauschen Sie diesen einen Teil aus und nicht das ganze System. Sie sind nicht an einen Hersteller, eine App oder die Zukunft einer einzigen Firma gebunden. Das ist hier mit «zukunftssicher» gemeint: nicht eingefroren, sondern anpassungsfähig.

Wenn Ihnen das genügt, können Sie hier aufhören. Der Rest dieses Artikels ist für Neugierige: Er ist technischer und erklärt, wie ein solches System aufgebaut wird.

---

## Für Neugierige: Das Gehirn bleibt zuhause

Die Grundlage ist ein lokaler Hub, entweder ein kleines Spezialgerät wie [Konihaus Greenhub](https://konihaus.ch/#devices) oder ein Mini-PC. Ihre Daten bleiben bei Ihnen, und Sie können Ihr Smart Home auch bei ausgefallenem Internet steuern. Für den Grundbetrieb ist kein Abo nötig. Das heisst auch: keine monatliche Gebühr und kein Dienst, der abgeschaltet werden kann.

Cloud-Dienste sind dann eine Option und keine Grundlage. Wenn Sie zum Beispiel einen Sprachassistenten von Google oder Amazon anbinden möchten, ist das eine bewusste Entscheidung, und das Kernsystem hängt nicht davon ab.

## Offene Funkstandards, ein Hauptnetz

Die Geräte sprechen über Funknetze mit dem Hub. Wichtig sind Zigbee, Z-Wave und Thread, über das Matter läuft. Home Assistant Green hat kein Zigbee- oder Thread-Funkmodul eingebaut. Sie ergänzen es mit einem USB/POE-Koordinator wie dem [SONOFF Dongle Max](https://sonoff.tech/products/sonoff-dongle-max-zigbee-thread-poe-dongle-dongle-m), der Zigbee und Thread unterstützt. Er kann aber immer nur eines von beiden gleichzeitig, deshalb bekommt jedes Funknetz seinen eigenen Stick.

Daraus folgt das erste Prinzip:

- **Ein zuverlässiges Netz.** Wählen Sie für die meisten Geräte ein Hauptprotokoll, zum Beispiel Zigbee oder Matter über Thread. Ein einziges Mesh mit sinnvoll platzierten Geräten heisst keine Funklöcher und weniger Überraschungen. Ein zweites Protokoll kommt nur dazu, wenn eine Gerätekategorie es wirklich braucht.

Drei weitere Prinzipien gehören dazu:

- **Immer lokal zuerst.** Alles Wichtige muss lokal funktionieren. Wenn das Internet oder die Server eines Herstellers wegfallen, läuft das Haus weiter.
- **Hohe Verfügbarkeit.** Ein abgestürzter Server darf nicht dazu führen, dass Lichtschalter oder Ventilatoren nicht mehr gehen. Wandschalter und Lampen sollen auch allein weiterfunktionieren, und kritische Funktionen brauchen Redundanz.
- **Standardisierte Räume.** Planen Sie nach Raumtyp. Jedes Schlafzimmer bekommt zum Beispiel dieselbe Grundausstattung an Licht-, Bewegungs-, Temperatur- und Feuchtigkeitserfassung. Das macht das System berechenbar, leichter erweiterbar und einfacher zu betreuen.

## Der Idealentwurf

Zusammengesetzt sieht ein idealer Aufbau so aus:

- **Licht und Strom:** Alle Schalter, Lampen, Ventilatoren und Steckdosen lassen sich über Home Assistant steuern.
- **Sensorik:** Jeder Raum hat ein Standard-Sensorpaket: Präsenz oder Bewegung, Temperatur, Feuchtigkeit, Licht und Bluetooth.
- **Heizen und Kühlen:** Volle lokale Kontrolle über die Heizungs- und Klimatechnik.
- **Überblick:** Energie- und Wasserverbrauch des ganzen Hauses im Blick.
- **Audio und Sprache:** Lautsprecher und Mikrofone in wichtigen Räumen für Musik im ganzen Haus und Sprachbefehle.

Niemand braucht das alles am ersten Tag. Es ist eine Richtung, und dank der modularen Struktur wächst man Raum für Raum hinein.

## Die Leitungen halten am längsten

Geräte wechseln alle paar Jahre. Wände wechseln alle paar Jahrzehnte. Deshalb ist eine der zukunftssichersten Massnahmen gar nicht elektronisch: Leerrohre (im Englischen manchmal «smurf tubes») in Wänden, Decken und Böden bei einem Neubau oder einer Renovation. Sie kosten in dieser Phase wenig und erlauben es, später ein neues Kabel einzuziehen, ohne etwas aufzustemmen. Das ist ein verbreiteter Rat von Installateuren und aus der Home-Assistant-Community und kein Standard. Er lohnt sich überall dort, wo die Wände ohnehin offen sind.

<figure class="blog-post__figure">
  <img src="/images/insights/future-proof/conduits-in-wall.jpg" alt="Eine Wand im Umbau mit leeren Leerrohren zu den Schalterdosen, bereit für Kabel, die erst Jahre später eingezogen werden" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Lokale Sprache und KI, mit Augenmass

Sprachsteuerung ist ein guter Test für den ganzen Ansatz. Assist von Home Assistant [kann vollständig auf Ihrer eigenen Hardware laufen](https://www.home-assistant.io/voice_control/), sodass Ihre Sprachbefehle privat bleiben. Geräte wie der [Satellite1 von FutureProofHomes](https://futureproofhomes.net/) sind genau dafür gebaut: ein lokaler Sprach-Satellit für Home Assistant. Der Hersteller kündigt auch eine lokale KI-Basisstation an. Die Verfügbarkeit ändert sich aber schnell, prüfen Sie sie also, bevor Sie um ein bestimmtes Produkt herum planen.

Wir sehen lokale Sprachsteuerung und lokale Sprachmodelle als vielversprechend, aber noch in Entwicklung. Sie sind eine Option für alle, die das möchten, und keine Voraussetzung für ein gutes System.

## Was Sie vermeiden sollten

- **Geister in der Maschine.** Automationen, die ohne erkennbaren Grund auslösen, machen ein Zuhause unberechenbar, und das Vertrauen geht schnell verloren. Jede Automation sollte einen nachvollziehbaren Grund haben, und das Logbuch und die Automations-Traces von Home Assistant zeigen, was was ausgelöst hat.
- **Einzelne Schwachstellen.** Das ganze Zuhause darf nicht ausfallen, weil eine Komponente ausfällt. Planen Sie für den Tag, an dem etwas kaputtgeht.
- **Ein reines Cloud-Rückgrat.** Cloud-Funktionen sind als Zusatz in Ordnung. Cloud-only-Geräte im Zentrum des Systems holen genau das Risiko zurück, mit dem dieser Artikel begonnen hat.

## Warum das wichtig ist

Ein Smart Home verdient Ihr Vertrauen, wenn es auch lange nach der Begeisterung der ersten Woche ruhig und berechenbar funktioniert. Das kommt von ein paar unspektakulären Entscheidungen: das Gehirn lokal halten, offene Standards nutzen, für Ausfälle planen und die richtigen Leerrohre verlegen.

So gebaut, hat die Frage «ist das in zwei Jahren veraltet?» eine gute Antwort: als Ganzes wahrscheinlich nicht, und wo ein Teil altert, tauschen Sie eben den Teil.

---

**Fragen zu Ihrem Zuhause?** [Sprechen Sie mit Koni](https://konihaus.ch/#contact) darüber, was bei Ihnen wirklich einen Unterschied machen würde — unverbindlich, ohne Verkaufsgespräch.

*Quellen: [Nest und Revolv (VentureBeat)](https://venturebeat.com/business/alphabets-nest-will-permanently-turn-off-all-revolv-hubs-on-may-15-2016) · [Insteon-Abschaltung (Hackaday)](https://hackaday.com/2022/04/25/insteon-abruptly-shuts-down-users-left-smart-home-less/) · [Konihaus Greenhub](https://konihaus.ch/#devices) · [SONOFF Dongle Max](https://sonoff.tech/products/sonoff-dongle-max-zigbee-thread-poe-dongle-dongle-m) · [Build With Matter | Smart Home Device Solution](https://csa-iot.org/all-solutions/matter/) · [Home-Assistant-Sprachsteuerung](https://www.home-assistant.io/voice_control/) · [FutureProofHomes](https://futureproofhomes.net/)*
