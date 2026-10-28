---
title: "Sensoren im Smart Home: Die fünf Familien, die Ihrem Zuhause sagen, was los ist"
date: 2026-10-31
time: '09:00'
language: de
layout: blog-post.njk
permalink: /de/insights/smart-home-sensoren/
permalinkalt: /en/insights/smart-home-sensors/
translationKey: smart-sensors
ogimage: smart-sensors/og.jpg
excerpt: "Ein Smart Home ist nur so schlau wie das, was es wahrnimmt. Die fünf Arten von Sensoren, die Sie kennen sollten, was sie in der Schweiz kosten und welche zwei, drei Sie zuerst einsetzen."
description: "Smart Home Sensoren erklärt: Bewegung, Präsenz, Tür- und Fensterkontakte, Temperatur, CO2 und Wasserlecks, mit Schweizer Preisen und Starttipps."
seoTitle: "Smart Home Sensoren: Welche zuerst?"
keyword: "Smart Home Sensoren"
category: technik
series: "Die Teile eines Smart Homes"
tags: [sensoren, praesenz, zigbee, thread]
readingtime: 7 Min. Lesezeit
related: [smarte-beleuchtung-schweiz, sicher-durch-die-nacht, ferienwohnung-frostschutz]
author: Koni
---

Ein Smart Home ist nur so schlau wie das, was es wahrnimmt. Licht und Storen sind der sichtbare Teil. Sensoren sind der stille Teil: kleine Geräte, die Ihrem Zuhause sagen, ob eine Tür offen ist, ob der Raum feucht ist oder ob jemand im Flur steht. Ohne sie ist Automatisierung nur ein Timer.

Das ist der dritte Beitrag der Serie über die Teile eines Smart Homes, nach [smartem Licht](/de/insights/smarte-beleuchtung-schweiz/) und [smarten Storen](/de/insights/smarte-storen-schweiz/). Es sind dieselben Fragen wie zuvor: Was bringt es Ihnen, was sollten Sie vor dem Kauf prüfen, und wo liegen die ehrlichen Grenzen?

## Die fünf Familien

**1. Bewegung und Präsenz.** Ein Bewegungsmelder bemerkt Bewegung. Mehr weiss er nicht. Seine Schwäche ist einfach: Wenn Sie ruhig auf dem Sofa lesen, geht das Licht aus, denn aus Sicht des Sensors passiert nichts. Ein Präsenzsensor ergänzt das übliche Infrarotauge um ein kleines Radar (mmWave) und erkennt deshalb auch, dass jemand im Raum ist, selbst wenn er sich kaum bewegt. Es gibt keine Kamera und kein Bild, nur ein Ja oder Nein.

**2. Tür- und Fensterkontakte.** Zwei kleine Teile, eines am Rahmen und eines an der Tür oder am Fenster. Sie beantworten eine Frage: offen oder zu? Das ist die Grundlage für «Ist das Fenster noch offen?», für eine Heizung, die beim Lüften pausiert, und für eine Nachricht, wenn die Kellertür der Ferienwohnung offen bleibt.

**3. Temperatur und Feuchtigkeit.** Der stillste und oft der nützlichste. Er zeigt Ihnen die echte Temperatur in den Räumen, auf die es ankommt, und er zeigt Feuchtigkeit, bevor Sie Schimmel sehen.

**4. CO2 und Luftqualität.** CO2 ist ein guter Hinweis darauf, dass ein Raum frische Luft braucht. Ein Schlafzimmer mit geschlossener Tür wird über Nacht stickig, und ein CO2-Sensor zeigt es in Zahlen.

**5. Wasserleck.** Ein kleiner Puck auf dem Boden unter der Waschmaschine, dem Geschirrspüler oder dem Boiler. Er tut nichts, bis zu dem Tag, an dem es zählt.

## Was es in der Schweiz zu kaufen gibt

Preise Stand 29. Oktober 2026. Sie ändern sich und die Verfügbarkeit schwankt, nehmen Sie die Angaben also als Richtwert.

**Aqara** hat die breiteste Auswahl an kleinen Sensoren. Der Presence Multi-Sensor FP300 kombiniert Infrarot und mmWave-Radar (6 m Reichweite, 120° Winkel) und misst auch Licht, Temperatur und Feuchtigkeit. Er kostet bei Digitec CHF 37.50, wenn er lieferbar ist, bei anderen Anbietern CHF 64.93. Er spricht Thread, Zigbee und Bluetooth und läuft mit zwei CR2450-Knopfzellen. Aqaras Temperatur- und Feuchtigkeitssensor T1 nutzt Zigbee 3.0 und kostet bei Digitec ab CHF 16.90, mit einer angegebenen Toleranz von 0.6 °C. Auch der Tür- und Fensterkontakt arbeitet mit Zigbee, mit einer Knopfzelle, die laut Aqara über zwei Jahre hält. Die Verfügbarkeit schwankt, prüfen Sie den Preis also, bevor Sie darauf planen. Aqara gibt an, dass die Sensoren für die eigene App einen Aqara-Hub brauchen.

**IKEA** verkauft drei kleine Sensoren für den DIRIGERA-Hub: VALLHORN (Bewegung), PARASOLL (Tür und Fenster) und BADRING (Wasserleck). Sie starteten bei CHF 12.95, CHF 14.95 und CHF 12.95, prüfen Sie also den aktuellen Preis. IKEAs Luftqualitätssensor ALPSTUGA (CHF 34.95) misst CO2, Partikel und Temperatur und nutzt Matter over Thread, braucht also einen Thread Border Router wie den DIRIGERA. Zwei ehrliche Hinweise: Das USB-Netzteil wird separat verkauft, und Rezensenten schreiben, dass sich das Display nicht ausschalten lässt und im Schlafzimmer hell sein kann.

## Eines vorab prüfen: wie der Sensor meldet

Wie bei Licht und Storen zählt weniger die Marke als die Sprache, die der Sensor spricht.

- **Zigbee** und **Thread** suche ich. Es sind stromsparende Funkstandards, die lokal und ohne Internet funktionieren und mit einer kleinen Batterie jahrelang laufen.
- **WLAN**-Sensoren leeren Batterien schneller und brauchen meist die Cloud des Herstellers.
- **Ein Sensor mit eigenem Hub** ist in Ordnung, solange dieser Hub die Daten auch an Ihr Zuhause weitergeben kann. Sonst haben Sie am Ende eine App pro Sensormarke.

Zwei Grundlagen von Zigbee sollten Sie kennen. Sensoren mit Batterie melden nur und schlafen sonst, sie leiten also keine Nachrichten anderer Geräte weiter. Geräte mit Netzstrom, etwa viele smarte Steckdosen und Lampen, tun das. Deshalb macht eine Mischung beider das Netz zuverlässig: Weit vom Hub entfernte Sensoren sind auf Geräte mit Strom in der Nähe angewiesen. Warum ein offener Standard zählt, habe ich unter [kein Vendor Lock-in](/de/insights/kein-vendor-lock-in/) beschrieben.

## Wo ich die ersten Sensoren platzieren würde

Kaufen Sie nicht von jedem einen. Beginnen Sie mit den zwei, drei, die eine Frage beantworten, die Sie schon haben.

1. **Ein Wassersensor unter Waschmaschine oder Geschirrspüler.** Günstig, und an dem Tag, an dem es zählt, ist er mehr wert als alles andere auf dieser Liste.
2. **Ein Temperatur- und Feuchtigkeitssensor im Raum, der Ihnen Sorgen macht.** Ein Keller, eine Ferienwohnung, ein Bad, ein Schlafzimmer mit feuchter Ecke. Im [Frostschutz für die Ferienwohnung](/de/insights/ferienwohnung-frostschutz/) ist das der Sensor, der die Arbeit macht.
3. **Ein Präsenzsensor im Flur.** Er schaltet das Nachtlicht auf dem Weg zum Bad ein, wie in [sicher durch die Nacht](/de/insights/sicher-durch-die-nacht/), und er kann das Licht in einem leeren Raum ausschalten, wo ein einfacher Bewegungsmelder es Ihnen beim Lesen ausschalten würde.

Tür- und Fensterkontakte kommen danach, sobald Sie wissen, an welchen Türen und Fenstern es Ihnen wirklich liegt.

## Ehrliche Grenzen

**Batterien sterben leise.** Ein Sensor, der nicht mehr meldet, sieht aus wie ein Sensor, der nichts sieht. Ein gutes System achtet auf «zuletzt gesehen» und Batteriewarnungen und sagt es Ihnen, bevor ein Sensor verstummt. Dass Aqara einen Türkontakt mit über zwei Jahren angibt, ist kein Versprechen. Notieren Sie sich das Datum, an dem Sie jede Batterie eingesetzt haben.

**Ein Sensor, eine Sicht.** Ein Bewegungsmelder sieht keine Person, die still sitzt. Ein Türkontakt weiss nicht, ob eine Tür angelehnt oder offen ist. Ein Temperatursensor auf einem sonnigen Fensterbrett zeigt zu viel. Gute Regeln verbinden zwei Signale, statt einem zu vertrauen.

**Kein Sicherheitsgerät.** Ein Wassersensor meldet Wasser. Er stoppt es nicht. Und keiner dieser Sensoren ersetzt einen Rauch- oder CO-Melder, der für sich allein funktionieren muss. Dazu komme ich in dieser Serie noch.

## So würde ich beginnen

1. **Zuerst die Frage aufschreiben.** «Habe ich das Fenster offen gelassen?» «Ist der Keller feucht?» «Steht Wasser unter der Maschine?»
2. **Sensoren wählen, die Zigbee oder Thread sprechen.**
3. **Platzieren und eine Woche lang die Werte ansehen,** bevor Sie Regeln darauf aufbauen.
4. **Die Batterieprüfung hinzufügen.** Für jeden Sensor, vom ersten Tag an.

In einem Konihaus-Zuhause melden die Sensoren lokal an die Greenhub, und das System sagt Ihnen, wenn eine Batterie schwach wird. Der nächste Beitrag handelt von Heizung und Klima: Thermostate, Heizkörperventile und die Wärmepumpe als ein System. Wenn Sie ihn nicht verpassen wollen, melden Sie sich unten für den Konihaus-Blog-Newsletter an.

---

**Sie sind nicht sicher, welche Sensoren bei Ihnen helfen würden?** [Sprechen Sie mit Koni](https://konihaus.ch/#contact). Das erste Gespräch ist kostenlos und unverbindlich.
