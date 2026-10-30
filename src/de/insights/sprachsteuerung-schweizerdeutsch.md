---
title: "Sprachsteuerung auf Schweizerdeutsch: ein ehrlicher Zwischenstand"
date: 2026-11-17
time: '09:00'
language: de
layout: blog-post.njk
permalink: /de/insights/sprachsteuerung-schweizerdeutsch/
permalinkalt: /en/insights/voice-control-swiss-german/
translationKey: swiss-german-voice
ogimage: swiss-german-voice/og.jpg
excerpt: "«Mach s Liecht im Wohnzimmer aa.» Versteht ein Smart Home das, ohne Ihre Stimme in die Cloud zu schicken? Wo wir heute stehen."
description: "Lokale Sprachsteuerung auf Schweizerdeutsch: was mit Home Assistant heute funktioniert, wo Dialekt-Erkennung noch scheitert und warum alles privat bleibt."
seoTitle: "Sprachsteuerung Schweizerdeutsch: Zwischenstand"
keyword: "Sprachsteuerung Schweizerdeutsch"
category: technik
tags: [sprachsteuerung, schweizerdeutsch, local-first]
readingtime: 5 Min. Lesezeit
related: [datenschutz-by-default, apple-homeview-schweiz]
author: Koni
---

«Mach s Liecht im Wohnzimmer aa.» So sagen es die meisten in der Deutschschweiz ganz selbstverständlich. Nicht «Schalte das Licht im Wohnzimmer ein». Die Frage ist, ob ein Smart Home das versteht, und ob es das kann, ohne jedes Wort an einen Server irgendwo zu schicken.

Hier der ehrliche Stand, November 2026.

<figure class="blog-post__figure">
  <img src="/images/insights/swiss-german-voice/01-local-voice-evening.webp" alt="Eine Person spricht zu einem kleinen Sprachgerät, während die Wohnzimmerlampe angeht." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Warum Schweizerdeutsch für Maschinen schwierig ist

Schweizerdeutsch wird gesprochen, nicht geschrieben. Es gibt keine einheitliche Schreibweise, jede Region klingt anders, und «Chuchichäschtli» steht in keinem Wörterbuch. Eine Spracherkennung muss deshalb zwei Dinge gleichzeitig tun: den Dialekt verstehen und ihn als hochdeutschen Text aufschreiben, mit dem das System arbeiten kann. Das ist ebenso eine Übersetzung wie ein Zuhören.

Die Zahlen zeigen, wie schwierig das ist. Laut einer Schweizer KI-Firma, die im Mai 2026 ein angepasstes Modell veröffentlicht hat, versteht die bekannte offene Spracherkennung Whisper ohne spezielles Training etwa jedes vierte Wort Schweizerdeutsch falsch (rund 26 % Wortfehlerrate). Ihr Modell, trainiert mit Aufnahmen aus dem Schweizer Parlament, halbiert das ungefähr, auf rund 13 %. Sie schreiben aber selbst, dass es bei formeller Sprache am besten funktioniert und schlechter bei spontaner Alltagssprache, lauter Umgebung und anderen Dialekten als Berndeutsch.

## Was heute lokal funktioniert

Home Assistant kann Sprache vollständig auf Ihrer eigenen Hardware verarbeiten, ohne dass Aufnahmen das Haus verlassen. Für die Umwandlung von Sprache in Text gibt es zwei Wege:

- **Speech-to-Phrase** versteht nur einen festen Satz von Befehlen fürs Zuhause, ist aber sehr schnell: unter einer Sekunde, selbst auf einem kleinen Home Assistant Green.
- **Whisper** versucht alles zu verstehen, braucht aber deutlich mehr Rechenleistung. Auf einem kleinen Computer wie einem Raspberry Pi 4 dauert eine Antwort rund acht Sekunden, auf einem schnelleren Mini-PC unter einer Sekunde.

Die Dokumentation von Home Assistant warnt selbst ehrlich: Die Qualität unterscheidet sich je nach Sprache stark, prüfen Sie also, wie es in Ihrer funktioniert.

Praktisch heisst das heute:

- **Kurze Befehle funktionieren gut**, besonders wenn sie eher hochdeutsch gesprochen werden: «Licht Wohnzimmer aus», «Storen runter», «Wie warm ist es im Schlafzimmer?»
- **Freier Dialekt ist noch Glückssache.** Ein langer Satz in breitem Züritüütsch oder Walliserdeutsch wird von einem lokalen System noch nicht zuverlässig verstanden.
- **Die Antwort** kommt auf Hochdeutsch zurück, gesprochen von einer lokalen Stimme.

<figure class="blog-post__figure">
  <img src="/images/insights/swiss-german-voice/02-dialect-to-command.webp" alt="Unterschiedliche Schallwellen-Sprechblasen sind mit einer lokalen Zentrale im Hausumriss mit Vorhängeschloss verbunden." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Warum es sich trotzdem lohnt

Die grossen Sprachassistenten schicken Ihre Worte auf ihre Server. Selbst Apples neues Siri AI, um das HomeView gebaut ist, [spricht vorerst nur Englisch](/de/insights/apple-homeview-schweiz/). Ein lokales Sprachsystem reift langsamer, aber was Sie in Ihrem Wohnzimmer sagen, bleibt in Ihrem Wohnzimmer. Mehr dazu in [Ihr Zuhause, Ihre Daten](/de/insights/datenschutz-by-default/).

Und es wird schnell besser. Alle paar Monate erscheinen neue Modelle, und ein System auf Basis von Home Assistant kann sie in den meisten Fällen ohne neue Hardware übernehmen, sofern die Zentrale genug Leistung hat.

## Wie ich das bei Konihaus handhabe

- **Sprache ist eine Option, nie der einzige Weg.** Jedes Licht hat weiterhin einen Schalter, jede Szene einen Knopf, und alles ist in der App.
- **Wir testen mit den Menschen, die dort wohnen.** Wer aus Winterthur kommt, spricht anders als jemand aus Brig. Bevor ich etwas verspreche, probieren wir es bei Ihnen zu Hause aus.
- **Zuerst kurze, klare Befehle.** Die funktionieren heute, und sie decken das meiste ab, was Menschen tatsächlich zu ihrem Zuhause sagen.
- **Keine Garantie beim Dialekt.** Spricht Ihre Grossmutter breiten Dialekt und nichts anderes, sage ich Ihnen ehrlich, dass Knöpfe ihr vorerst besser dienen.

<figure class="blog-post__figure">
  <img src="/images/insights/swiss-german-voice/03-choice-of-controls.webp" alt="Ein älteres Paar nutzt in der Küche einen Wandtaster und ein Sprachgerät." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Wohin es geht

Eine Sprachsteuerung auf Schweizerdeutsch, die alle versteht, lokal und schnell, gibt es noch nicht. Aber die Lücke wird jedes Jahr kleiner. Ich verfolge die Entwicklung genau und baue ein, was funktioniert, damit Ihr Zuhause Sie mit der Zeit ein bisschen besser versteht.

---

**Möchten Sie es bei sich zu Hause ausprobieren?** [Sprechen Sie mit Koni](https://konihaus.ch/#contact). Das erste Gespräch ist kostenlos und unverbindlich.
