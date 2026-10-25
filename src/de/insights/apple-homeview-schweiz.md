---
title: "Apple HomeView: Warum es nicht zu uns kommt, und was das zeigt"
date: 2026-10-26
time: '10:00'
language: de
layout: blog-post.njk
permalink: /de/insights/apple-homeview-schweiz/
permalinkalt: /en/insights/apple-homeview-switzerland/
translationKey: apple-homeview
ogimage: apple-homeview/og.jpg
excerpt: "Apples neues Smart Display kommt im November in den USA und in Grossbritannien in den Verkauf, aber nicht in der EU, und für die Schweiz gibt es kein Datum. Ein ruhiger Blick darauf, warum, und was das für Ihr Zuhause heisst."
description: "Apple HomeView: in der EU nicht im Verkauf, für die Schweiz kein Datum. Warum, und wie Home Assistant trotzdem mit Apple Home zusammenarbeitet."
seoTitle: "Apple HomeView in der Schweiz: Noch nicht. Warum?"
keyword: "Apple HomeView Schweiz"
category: news
tags: [apple, smart-display, datenschutz]
readingtime: 5 Min. Lesezeit
related: [datenschutz-by-default, kein-vendor-lock-in, zukunftssicher]
author: Koni
---

Am 13. Oktober hat Apple HomeView vorgestellt: einen 7-Zoll-Bildschirm auf einem kleinen Lautsprecher, gemacht für die Küchenablage, den Nachttisch oder, in einer zweiten Version, die Wand. Er zeigt Ihren Kalender, spielt Musik, führt FaceTime-Anrufe und begleitet Sie Schritt für Schritt durch ein Rezept, mit Timern, die Sie per Stimme starten. Er steuert Licht, Heizung und Türschlösser, zeigt bis zu neun Kamerabilder gleichzeitig und erkennt bis zu sechs Personen im Haushalt, jede mit ihrem eigenen Startbildschirm. Er arbeitet mit Matter-Geräten zusammen und kann allein die Zentrale eines Apple-Zuhauses sein.

Er kostet 299 Dollar in den USA und 299 Pfund in Grossbritannien und kommt am 13. November in einer ersten Gruppe von Ländern in den Verkauf: USA, Grossbritannien, Kanada, Australien, Indien und Neuseeland.

Ein schönes Gerät. Und vorerst können Sie es hier nicht kaufen.

<figure class="blog-post__figure">
  <img src="/images/insights/apple-homeview/display-in-window.webp" alt="Ein neutrales Smart Display hinter einem Schaufenster mit einem Nicht-erhältlich-Symbol" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Warum es HomeView in der Schweiz nicht gibt

Apple hat HomeView um Siri AI gebaut, seinen neuen Assistenten. Siri AI ist auf iPhones in der EU nicht verfügbar, deshalb ist HomeView laut Apple vorerst «in der Europäischen Union nicht im Verkauf», und Apple arbeite mit der EU an einer Lösung. Laut 9to5Mac hängt das mit dem Digital Markets Act der EU zusammen, der das Betriebssystem des iPhones anders behandelt als Apples andere Plattformen.

Die Schweiz ist nicht in der EU, steht aber auch nicht auf der Liste der ersten Länder, und ein Schweizer Datum wurde nicht angekündigt. Ausserdem spricht Siri AI vorerst nur Englisch. Deutsch, Französisch oder Italienisch, also die Sprachen, die bei uns zu Hause meist gesprochen werden, hat Apple nicht angekündigt.

## Was das zeigt

Das ist keine Geschichte darüber, dass Apple schlecht wäre. Es ist eine Geschichte darüber, woher die Funktionen eines Geräts kommen.

Viele Funktionen von HomeView stecken nicht im Gerät auf Ihrer Ablage. Sie hängen von Dingen ausserhalb Ihres Zuhauses ab: einem Konto, einem Cloud-Dienst, einem passenden iPhone (für den vollen Funktionsumfang eines mit Apple Intelligence), manchmal einem Abo (einige Kamerafunktionen brauchen iCloud+) und Entscheidungen, die ein Konzern und Behörden weit weg treffen. Ändert sich eines davon, ändert sich Ihr Gerät, obwohl sich in Ihrem Wohnzimmer nichts geändert hat. Mehr dazu in [Läuft das auch in zehn Jahren noch?](/de/insights/zukunftssicher/).

Bei einem Lautsprecher ist das ärgerlich. Bei dem Gerät, das Ihre Heizung schaltet oder Ihre Haustür öffnet, ist es eine Frage, die man vor dem Kauf stellen sollte.

## Ein Bildschirm für die ganze Familie. Brauchen wir das?

Die spannendste Idee von HomeView ist, dass ein Bildschirm dem ganzen Haushalt dient. Er erkennt bis zu sechs Personen an Gesicht und Stimme. Wenn Sie davortreten, wechselt er von der gemeinsamen Haushaltsansicht zu Ihrer eigenen: Ihre Apps, Ihr Kalender, Ihre Nachrichten. Gäste und alle, die er nicht erkennt, können trotzdem das Licht schalten, sehen aber keine persönlichen Inhalte. Technisch ist das beeindruckend.

Es lohnt sich aber zu fragen, wie sehr wir das wirklich brauchen. Ihre persönlichen Inhalte erscheinen nur, wenn Ihr eigenes iPhone in der Nähe ist, im gleichen WLAN und vor kurzem entsperrt. Das Handy ist also ohnehin in Ihrer Tasche, und dort haben die meisten von uns ihr privates Leben: Nachrichten, Chats mit Freunden, den eigenen Kalender. Ich kann mir meine Kinder nicht vorstellen, wie sie auf dem Bildschirm in der Küche mit ihren Freunden schreiben, während der Rest der Familie vorbeigeht. Vielleicht ist das in amerikanischen Haushalten anders. Hier, denke ich, nutzen die meisten für ihre eigenen Dinge lieber ihr eigenes Gerät.

Was ein Haushalt wirklich teilt, ist kleiner und praktischer: den Familienkalender, das Licht, die Heizung, wer zu Hause ist. Das kann Home Assistant schon heute gut. Es liest den gemeinsamen Familienkalender, und wenn die Ferien darin stehen, weiss das Zuhause, dass niemand da ist, und wechselt von selbst in den Abwesenheitsmodus: Heizung runter, Licht, das die Wohnung bewohnt aussehen lässt, Meldungen an. Jede Person kann ihr eigenes Dashboard auf dem eigenen Handy haben, und das Tablet im Gang zeigt ein gemeinsames für die ganze Familie.

Eine offene Frage habe ich bei Anrufen. Laut Apple können Sie Anrufe Ihres iPhones auf HomeView annehmen, wenn das Handy in einem anderen Raum klingelt. In dem, was ich gelesen habe, sagt Apple nicht, ob jeder, der vor dem Bildschirm steht, Ihren Anruf annehmen kann, wie beim alten Haustelefon, oder nur Sie. Für einen Familienbildschirm in der Küche ist das ein Detail, das man vor dem Kauf kennen sollte.

<figure class="blog-post__figure">
  <img src="/images/insights/apple-homeview/family-shared-calendar.webp" alt="Eine Familie nutzt in der Küche ihre eigenen Handys, während ein gemeinsames Wanddisplay den Familienkalender und die Haussteuerung zeigt" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Fünf Fragen an jedes Smart-Home-Gerät

Egal welche Marke Sie anschauen, diese Fragen würde ich stellen:

- **Funktioniert es heute in meiner Sprache?** Nicht «bald», heute.
- **Was funktioniert noch, wenn das Internet ausfällt?** Licht, Heizung, die Tür?
- **Was braucht ein Abo,** und was passiert, wenn ich nicht mehr zahle?
- **Kann ich Geräte anderer Marken einbinden?** Offene Standards wie Matter und Zigbee machen das möglich.
- **Wenn die Firma ihre Pläne ändert,** läuft mein Zuhause dann weiter?

<figure class="blog-post__figure">
  <img src="/images/insights/apple-homeview/five-device-questions.webp" alt="Fünf verbundene Symbole für Fragen vor dem Kauf eines Smart-Home-Geräts" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Wie ein Konihaus-Zuhause darauf antwortet

Ein Konihaus-Zuhause läuft mit Home Assistant, auf einer kleinen Box bei Ihnen zu Hause. Licht, Heizung und Sensoren funktionieren auch ohne Internet, weil [Ihre Daten zu Hause bleiben](/de/insights/datenschutz-by-default/). Es spricht schon heute Deutsch, dazu Englisch, Französisch und Italienisch. Fernzugriff gibt es, wenn Sie ihn wollen, und er ist aus, wenn nicht. Geräte vieler Hersteller arbeiten nebeneinander, genau darum geht es in meinem [Beitrag zu Vendor Lock-In](/de/insights/kein-vendor-lock-in/).

Und Sie müssen sich nicht zwischen den beiden Welten entscheiden. Home Assistant kann Ihre Geräte über seine HomeKit- oder Matter-Brücke an Apple Home weitergeben. Dann sagen Sie «Hey Siri, mach das Licht im Wohnzimmer an» heute auf dem iPhone, und auf einem HomeView, falls es je hierher kommt. Apple Home zeigt nur die Geräte und Funktionen, die es kennt, das vollständige Bild bleibt also in Home Assistant. Der Unterschied ist, wo das Gehirn des Hauses sitzt: in Ihrem Gang, nicht im Rechenzentrum von jemand anderem.

Wenn Sie schon jetzt einen Bildschirm an der Wand möchten: Die [Konihaus-App](/de/insights/konihaus-app/) läuft auf einem Tablet. Sie ist nicht so poliert wie ein Apple-Gerät für 299 Dollar. Aber sie funktioniert in Affoltern genauso wie in Ohio, und niemand weit weg kann sie abschalten.

<figure class="blog-post__figure">
  <img src="/images/insights/apple-homeview/local-home-dashboard.webp" alt="Ein illustriertes Haus-Dashboard und eine lokale Zentrale in einem einladenden Gang" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Und wenn HomeView doch kommt?

Wenn HomeView eines Tages in die Schweiz kommt, in Ihrer Sprache, dann kann ein Konihaus-Zuhause über die Brücke auch darauf erscheinen. Das ist eine gute Nachricht. Ein gut gebautes Zuhause kämpft nicht gegen gute Geräte. Es hängt nur von keinem einzelnen ab.

Das alles im Blick zu behalten, gehört zu meiner Arbeit. Ich verfolge neue Geräte und Entwicklungen, sobald sie auf den Markt kommen, vor allem alles, was ein Zuhause komfortabler, bequemer, sicherer oder einfach angenehmer zum Wohnen macht. Wenn sich etwas lohnt, sage ich es Ihnen. Und wenn es für Schweizer Haushalte noch nicht bereit ist, wie HomeView heute, sage ich Ihnen das auch.

---

**Möchten Sie wissen, welche Ihrer Geräte morgen auch ohne Cloud noch funktionieren?** [Sprechen Sie mit Koni](https://konihaus.ch/#contact). Das erste Gespräch ist kostenlos und unverbindlich.
