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
description: "Schweizerdeutsch-Sprachsteuerung: Cloud-Assistenten verstehen Dialekt gut, lokale noch nicht. Was Home Assistant kann und was ich lokal testen will."
seoTitle: "Sprachsteuerung Schweizerdeutsch: Zwischenstand"
keyword: "Sprachsteuerung Schweizerdeutsch"
category: technik
tags: [sprachsteuerung, schweizerdeutsch, local-first]
readingtime: 6 Min. Lesezeit
related: [datenschutz-by-default, apple-homeview-schweiz]
author: Koni
---

«Mach s Liecht im Wohnzimmer aa.» So sagen es die meisten in der Deutschschweiz ganz selbstverständlich. Nicht «Schalte das Licht im Wohnzimmer ein». Die Frage ist, ob ein Smart Home das versteht, und ob es das kann, ohne jedes Wort an einen Server irgendwo zu schicken.

Hier der ehrliche Stand, November 2026. Es hat sich viel bewegt, und die Cloud-Assistenten sind am schnellsten vorangekommen.

<figure class="blog-post__figure">
  <img src="/images/insights/swiss-german-voice/01-local-voice-evening.webp" alt="Eine Person spricht zu einem kleinen Sprachgerät, während die Wohnzimmerlampe angeht." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Warum Schweizerdeutsch für Maschinen schwierig ist

Schweizerdeutsch wird gesprochen, nicht geschrieben. Es gibt keine einheitliche Schreibweise, jede Region klingt anders, und «Chuchichäschtli» steht in keinem Wörterbuch. Eine Spracherkennung muss deshalb zwei Dinge gleichzeitig tun: den Dialekt verstehen und ihn als hochdeutschen Text aufschreiben, mit dem das System arbeiten kann. Das ist ebenso eine Übersetzung wie ein Zuhören.

Die Zahlen zeigen, wie schwierig das ist. Laut [apexAI](https://huggingface.co/apexAI-Switzerland/whisper-large-v3-swissgerman), einer Schweizer KI-Firma, die im Mai 2026 ein angepasstes Modell veröffentlicht hat, versteht die bekannte offene Spracherkennung Whisper ohne spezielles Training etwa jedes vierte Wort Schweizerdeutsch falsch (rund 26 % Wortfehlerrate). Ihr Modell, trainiert mit Aufnahmen aus dem Schweizer Parlament, halbiert das ungefähr, auf rund 13 %. Sie schreiben aber selbst, dass es bei formeller Sprache am besten funktioniert und schlechter bei spontaner Alltagssprache, lauter Umgebung und anderen Dialekten als Berndeutsch. Ein unabhängiger Forscher, der Whisper mit 1367 Stunden Schweizerdeutsch aus Fernsehen, Parlament und Web-Videos angepasst hat, berichtet für diese breitere Mischung einen kleineren Gewinn, von rund 29 % auf rund 26 % Wortfehlerrate. Ein Teil davon liegt am Massstab: Er zählt Unterschiede in Schreibweise und Satzbau zwischen Dialekt und Hochdeutsch als Fehler, und wenn nur echte Erkennungsfehler zählen, kommt er auf rund 14 % ([arXiv](https://arxiv.org/html/2606.07608v1)).

## Was heute lokal funktioniert

Home Assistant kann Sprache vollständig auf Ihrer eigenen Hardware verarbeiten, ohne dass Aufnahmen das Haus verlassen. Für die Umwandlung von Sprache in Text gibt es zwei Wege:

- **Speech-to-Phrase** versteht nur einen festen Satz von Befehlen fürs Zuhause, ist aber sehr schnell: unter einer Sekunde, selbst auf einer kleinen Konihaus Greenhub.
- **Whisper** versucht alles zu verstehen, braucht aber deutlich mehr Rechenleistung. Auf einem kleinen Computer wie einem Raspberry Pi 4 dauert eine Antwort rund acht Sekunden, auf einem schnelleren Mini-PC unter einer Sekunde.

Die Dokumentation von Home Assistant warnt selbst ehrlich: Die Qualität unterscheidet sich je nach Sprache stark, prüfen Sie also, wie es in Ihrer funktioniert.

Praktisch heisst das heute:

- **Kurze Befehle funktionieren gut**, besonders wenn sie eher hochdeutsch gesprochen werden: «Licht Wohnzimmer aus», «Storen runter», «Wie warm ist es im Schlafzimmer?»
- **Freier Dialekt ist noch die Schwäche lokaler Systeme.** Ein langer Satz in breitem Züritüütsch oder Walliserdeutsch wird von einem lokalen System noch nicht zuverlässig verstanden, und hier sind die Cloud-Assistenten inzwischen voraus.
- **Die Antwort** kommt auf Hochdeutsch zurück, gesprochen von einer lokalen Stimme.

<figure class="blog-post__figure">
  <img src="/images/insights/swiss-german-voice/02-dialect-to-command.webp" alt="Unterschiedliche Schallwellen-Sprechblasen sind mit einer lokalen Zentrale im Hausumriss mit Vorhängeschloss verbunden." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Was die Cloud-Assistenten besser können

Ehrlich gesagt sind die grossen Cloud-Assistenten schneller vorangekommen als die lokalen. Als der neue Sprachmodus von ChatGPT 2024 erschien, verstand er schon Schweizerdeutsch, mit Lücken: In einem [Blick-Test](https://www.blick.ch/digital/neue-stimme-von-chatgpt-im-blick-test-bei-baseldytsch-streikt-sogar-die-kuenstliche-intelligenz-id20185219.html) folgte er Standard-Schweizerdeutsch, sprach es aber mit deutschem Akzent und weigerte sich, ein Gedicht auf Baseldytsch zu schreiben. Seither ist er deutlich besser geworden, und in meinem eigenen Gebrauch folgt er dem Alltagsdialekt sehr gut und wird laufend besser. Wenn Ihre einzige Frage lautet «Versteht es heute meinen Dialekt?», gewinnt die Cloud.

Der Preis ist, dass Ihre Stimme auf die Server des Anbieters geht. Es gibt einen Mittelweg: Die optionale Cloud von Home Assistant testet eine neue Spracherkennung für Akzente, Hintergrundgeräusche und nicht-englische Sprache, und Home Assistant gibt an, dass Audio weder protokolliert noch gespeichert noch fürs Training genutzt wird ([Home Assistant](https://www.home-assistant.io/blog/2026/09/02/release-20269/)). Es bleibt ein Schritt aus Ihrem Zuhause hinaus.

## Warum lokal trotzdem zählt

Das beste Dialektverständnis liegt heute auf fremden Servern, und was Sie in Ihrem Wohnzimmer sagen, geht mit. Für das Schalten eines Lichts ist das viel, was man aus der Hand gibt. Dazu kommen Bedingungen: Apples neues Siri AI, um das HomeView gebaut ist, [spricht vorerst nur Englisch](/de/insights/apple-homeview-schweiz/). Ein lokales Sprachsystem reift langsamer, aber was Sie sagen, bleibt zu Hause. Mehr dazu in [Ihr Zuhause, Ihre Daten](/de/insights/datenschutz-by-default/).

Und auch lokal wird es schnell besser. Alle paar Monate erscheinen neue Modelle, und ein System auf Basis von Home Assistant kann sie in den meisten Fällen ohne neue Hardware übernehmen, sofern die Zentrale genug Leistung hat.

## Was ich als Nächstes ausprobieren will

Ein vollständig lokaler Sprachassistent: Spracherkennung, ein Sprachmodell und eine sprechende Stimme, alles auf einem kleinen Server im Haus, ab und zu aus dem Internet aktualisiert, aber ohne dass je Audio das Haus verlässt. Die Teile beginnen zu existieren. Seit Home Assistant 2026.8 kann ein lokaler llama.cpp-Server oder jeder OpenAI-kompatible Endpunkt als Gesprächsagent dienen ([Home Assistant](https://www.home-assistant.io/blog/2026/08/05/release-20268/)). Auf Schweizerdeutsch angepasste Whisper-Modelle sind offen veröffentlicht, einige mit nichtkommerzieller Lizenz, andere unter Apache 2.0 ([arXiv](https://arxiv.org/html/2606.07608v1)). Der Haken ist die Rechenleistung: Modelle, die in einem Zug zuhören und sprechen, sind gross (Alibabas offenes Qwen3-Omni nennt Deutsch als Sprache, aber keine Dialekte, und seine Entwickler geben schon für kurze Eingaben mehrere Dutzend Gigabyte GPU-Speicher an), das wäre also ein eigener kleiner Server und nicht die Greenhub. Gebaut habe ich es noch nicht. Ich möchte es testen und berichte, was funktioniert und was nicht.

## Wie ich das bei Konihaus handhabe

- **Sprache ist eine Option, nie der einzige Weg.** Jedes Licht hat weiterhin einen Schalter, jede Szene einen Knopf, und alles ist in der App.
- **Wir testen mit den Menschen, die dort wohnen.** Wer aus Winterthur kommt, spricht anders als jemand aus Brig. Bevor ich etwas verspreche, probieren wir es bei Ihnen zu Hause aus.
- **Zuerst kurze, klare Befehle.** Die funktionieren heute, und sie decken das meiste ab, was Menschen tatsächlich zu ihrem Zuhause sagen.
- **Lokal oder Cloud, Sie entscheiden.** Lokal bleibt das Audio zu Hause. Ein Cloud-Assistent versteht heute mehr Dialekt. Ich erkläre Ihnen den Kompromiss und richte ein, was Sie wählen.
- **Keine Garantie beim Dialekt.** Spricht Ihre Grossmutter breiten Dialekt und nichts anderes, sage ich Ihnen ehrlich, dass Knöpfe ihr vorerst besser dienen, es sei denn, sie nutzt gern einen Cloud-Assistenten.

<figure class="blog-post__figure">
  <img src="/images/insights/swiss-german-voice/03-choice-of-controls.webp" alt="Ein älteres Paar nutzt in der Küche einen Wandtaster und ein Sprachgerät." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Wohin es geht

Eine Sprachsteuerung auf Schweizerdeutsch, die alle versteht, lokal und schnell, gibt es noch nicht. Aber die Cloud-Assistenten zeigen, was möglich ist, und die offenen Modelle folgen. Ich verfolge die Entwicklung genau, will selbst einen vollständig lokalen Assistenten testen und baue ein, was funktioniert, damit Ihr Zuhause Sie mit der Zeit ein bisschen besser versteht.

---

**Möchten Sie es bei sich zu Hause ausprobieren?** [Sprechen Sie mit Koni](https://konihaus.ch/#contact). Das erste Gespräch ist kostenlos und unverbindlich.
