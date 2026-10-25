---
title: "Was eine Smart-Home-Zentrale eigentlich ist"
date: 2026-11-13
time: '10:00'
language: de
layout: blog-post.njk
permalink: /de/insights/was-ist-eine-smart-home-zentrale/
permalinkalt: /en/insights/what-is-a-smart-home-hub/
translationKey: smart-home-hub
ogimage: smart-home-hub/og.jpg
excerpt: "Heute kommt Apples HomeView in den USA in den Verkauf, und es kann als Zentrale dienen. Aber was ist eine Zentrale, und warum ist sie wichtiger als der Bildschirm?"
description: "Was ist eine Smart-Home-Zentrale? Das Gehirn, das Geräte verbindet und Automationen ausführt, und warum es mehr zählt als der Bildschirm."
seoTitle: "Smart Home Zentrale: einfach erklärt"
keyword: "Smart Home Zentrale"
category: technik
tags: [zentrale, home-assistant, matter]
readingtime: 4 Min. Lesezeit
related: [apple-homeview-schweiz, zukunftssicher, kein-vendor-lock-in]
author: Koni
---

Heute kommt Apples HomeView in den USA und einer Handvoll weiterer Länder in den Verkauf. Unter anderem kann es als Zentrale eines Apple-Zuhauses dienen. Das klingt technisch, und die meisten nicken höflich und lesen weiter. Dabei ist die Zentrale der wichtigste Teil jedes Smart Homes, viel wichtiger als der Bildschirm auf der Ablage.

Also: Was ist das?

<figure class="blog-post__figure">
  <img src="/images/insights/smart-home-hub/01-hub-on-shelf.webp" alt="Eine kleine Zentrale steht neben dem Router, mit angedeuteten Verbindungen zu Geräten im Zuhause." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Der Bildschirm ist das Fenster, die Zentrale der Motor

Ein Display zeigt Ihnen Ihr Zuhause und lässt Sie auf einen Knopf tippen. Eine Zentrale ist das Gerät, das die eigentliche Arbeit macht, Tag und Nacht, ob jemand hinschaut oder nicht:

- **Sie kennt jedes Gerät**: Lampen, Sensoren, Storen, Heizkörper, das Schloss.
- **Sie führt die Automationen aus**: «Wenn das Fenster aufgeht, Heizkörper herunterdrehen», «eine halbe Stunde vor Sonnenuntergang die Lampe einschalten».
- **Sie merkt sich Dinge**: Temperaturen, Energieverbrauch, wann die Tür geöffnet wurde.
- **Sie spricht jede Sprache**, die die Geräte sprechen.

Ohne Zentrale ist jedes Gerät auf sich allein gestellt, mit eigener App. Mit Zentrale arbeiten sie als ein Zuhause zusammen. Das meine ich mit einem System, im Gegensatz zu einer Sammlung von Gadgets.

## Viele Haushalte haben mehrere Zentralen, ohne es zu wissen

Wer smarte Lampen einer Marke, eine Heizung einer anderen und einen Sprachlautsprecher einer dritten hat, hat wahrscheinlich schon drei Zentralen: eine Bridge für das Licht, eine Box für die Heizung und den Lautsprecher, der oft gleich auch als Zentrale dient. Jede macht ihr eigenes Ding, und sie reden kaum miteinander. Genau das Problem, das ich im [Beitrag zu Vendor Lock-In](/de/insights/kein-vendor-lock-in/) beschrieben habe.

## Die Sprachen der Geräte

Geräte sprechen per Funk mit der Zentrale, und es gibt ein paar verbreitete «Sprachen»:

- **WLAN** kennen die meisten. Es funktioniert für viele Geräte, ist aber für kleine Batteriesensoren nicht ideal.
- **Zigbee** ist ein stromsparendes Mesh-Netz, weit verbreitet für Sensoren, Schalter und Lampen.
- **Thread** ist neuer und trägt den Standard **Matter**, den inzwischen viele grosse Hersteller unterstützen.
- **Z-Wave** ist ein weiterer etablierter Standard, in manchen Regionen verbreitet.

Eine gute Zentrale spricht mehrere davon. Für Funkarten, die sie nicht eingebaut hat, kommt ein kleiner USB-Stick dazu, zum Beispiel der Home Assistant Connect ZBT-2, der Zigbee oder Thread übernimmt.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-home-hub/02-device-radio-paths.webp" alt="Vier unterschiedliche Linienstile verbinden eine zentrale Box mit Symbolen für Haushaltsgeräte." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Entscheidend ist, wo das Gehirn sitzt

Die wichtigste Frage bei jeder Zentrale ist, wo sie denkt. Manche Zentralen sind vor allem eine Weiterleitung zu den Servern des Herstellers: Fällt das Internet oder der Dienst der Firma aus, steht auch Ihr Zuhause still. Andere arbeiten lokal: Die Automationen laufen in der Box in Ihrem Gang, und das Internet braucht es nur für Dinge wie Fernzugriff oder Wetterdaten.

Drei Fragen, die Sie stellen sollten:

1. **Was funktioniert ohne Internet noch?** Im Idealfall: alles zu Hause.
2. **Was passiert nach einem Stromausfall?** Sie sollte von selbst wieder starten, und eine kleine Notstrom-Batterie kann sie über kurze Ausfälle bringen.
3. **Was, wenn der Hersteller den Kurs ändert?** Darum geht es in meinem Beitrag [Läuft das auch in zehn Jahren noch?](/de/insights/zukunftssicher/).

## Die Zentrale in einem Konihaus-Zuhause

In einem Konihaus-Zuhause ist die Zentrale eine kleine Box namens Konihaus Greenhub, basierend auf Home Assistant Green, dazu ein Funkstick für Zigbee oder Thread. Sie steht neben Ihrem Router, braucht etwa 2 bis 3 Watt, weniger als eine typische LED-Lampe, und führt alles lokal aus. Backups und Updates gehören zum Service, und Ihre Daten bleiben bei Ihnen, wie in [Ihr Zuhause, Ihre Daten](/de/insights/datenschutz-by-default/) beschrieben.

Welchen Bildschirm Sie dann nutzen, entscheiden Sie: die [Konihaus-App](/de/insights/konihaus-app/) auf dem Handy oder einem Wand-Tablet, oder über die Brücke von Home Assistant zu Apple Home sogar ein [HomeView](/de/insights/apple-homeview-schweiz/), falls es eines Tages in die Schweiz kommt.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-home-hub/03-screen-and-hidden-hub.webp" alt="Ein Wand-Tablet in der Küche zeigt die Haussteuerung; die kleine Zentrale steht unauffällig im Hintergrund." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Kurz gesagt

Der Bildschirm ist, was Sie sehen. Die Zentrale ist, worauf Sie sich verlassen. Wer ein Smart Home auswählt, sollte zuerst auf die Zentrale schauen.

---

**Möchten Sie wissen, wie viele Zentralen in Ihrem Zuhause schon stecken?** [Sprechen Sie mit Koni](https://konihaus.ch/#contact). Das erste Gespräch ist kostenlos und unverbindlich.
