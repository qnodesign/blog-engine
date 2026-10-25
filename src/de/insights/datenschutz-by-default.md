---
title: "Ihr Zuhause, Ihre Daten: Datenschutz by Default"
date: 2026-10-05
time: '10:00'
language: de
layout: blog-post.njk
permalink: /de/insights/datenschutz-by-default/
permalinkalt: /en/insights/privacy-by-default/
ogimage: privacy/og.jpg
excerpt:  Wie Konihaus Smart-Home-Daten lokal verarbeitet, die Abhängigkeit von Hersteller-Clouds reduziert und Ihnen die Kontrolle über Fernzugriff und vernetzte Dienste lässt.
description: "Smart Home und Datenschutz: wie Konihaus Daten lokal verarbeitet, weniger von Hersteller-Clouds abhängt und Ihnen den Fernzugriff überlässt."
seoTitle: "Smart Home Datenschutz: Daten bleiben zu Hause"
keyword: "Smart Home Datenschutz"
category: datenschutz
tags: [datenschutz, local-first, sprachsteuerung]
readingtime: 4 Min. Lesezeit
related: [kein-vendor-lock-in, zukunftssicher, schweizer-qualitaet]
author: Koni
---

## Smart Home und Datenschutz: Ihre Daten bleiben zu Hause

Google Home und Amazon Alexa sind nur die offensichtlichsten Beispiele. In einem typischen Smart Home kommen oft noch Leuchten von Philips Hue oder IKEA, Thermostate von tado°, Beschattungen von Somfy, Tuya-Geräte und Produkte weiterer Hersteller hinzu. Jedes System bringt eine eigene App und ein eigenes Konto mit. Manche Apps sind schlicht, andere bieten aufwendige Oberflächen, Designs, Routinen und unzählige Funktionen.

Dieser Komfort kann einen weniger sichtbaren Preis haben: mehr Hersteller-Clouds, mehr externe Konten und mehr Informationen über Ihr Zuhause, die ausserhalb davon verarbeitet werden. Cloudbasierte Sprachassistenten senden Befehle, Routinen und Einstellungen an entfernte Server. Bei anderen Produkten unterscheidet sich der Anteil lokaler Funktionen, doch viele benötigen für Einrichtung, Steuerung, Benachrichtigungen oder Zusatzfunktionen weiterhin einen Dienst des Herstellers. Sie entscheiden sich damit nicht nur für Funktionen. Sie entscheiden auch, von wem Ihr Zuhause abhängig ist und wohin seine Daten fliessen können.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/data-stays-home.webp" alt="Ein lokal verbundenes Smart Home behält seine Gerätedaten im eigenen Zuhause" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Konihaus verfolgt deshalb einen Local-First-Ansatz. Automationen, die Koordination der Geräte und die für den Betrieb nötigen Verlaufsdaten werden auf Hardware *in Ihrem Zuhause* verarbeitet. Wo immer möglich, wählen und konfigurieren wir Geräte für eine lokale Kommunikation. Funktionen, die einen externen Dienst benötigen, weisen wir klar als solche aus. Ihr Smart Home muss nicht jede Aktion an einen entfernten Server melden, nur um ein Licht einzuschalten, eine Beschattung zu senken oder die Heizung anzupassen.

## Wie das funktioniert

Ihr Konihaus-System läuft auf einer **Home-Assistant-Instanz** – einem kleinen Linux-Computer, üblicherweise einem Raspberry Pi oder kompakten NUC – bei Ihnen zu Hause. Dort befindet sich die gesamte Logik: Automationen, Gerätekoordination und Szenen.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/local-smart-home-hub.webp" alt="Ein lokaler Smart-Home-Hub verbindet Licht, Heizung, Beschattung und Sensoren" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

**Datenfluss nach dem Local-First-Prinzip:**
- Ihre Zigbee-Geräte kommunizieren direkt mit dem lokalen Hub
- Z-Wave-Geräte bleiben lokal
- WiFi-Geräte kommunizieren lokal, sofern sie dies unterstützen
- Konihaus sammelt keine Daten über Ihr Verhalten

Wenn Sie sich für ein Gerät oder einen Dienst entscheiden, der die Hersteller-Cloud benötigt, behandeln wir diese Verbindung als klar ausgewiesene Ausnahme und nicht als Grundlage des Systems.

## Was das praktisch bedeutet

**Keine Verwertung Ihrer Daten.** Konihaus hat keinen Anreiz, Verhaltensdaten zu sammeln. Wir verdienen weder an Ihrer Aufmerksamkeit noch verkaufen wir Erkenntnisse über Ihre Lebensgewohnheiten.

**Weniger Abhängigkeit von externen Diensten.** Die zentralen Automationen laufen weiterhin bei Ihnen zu Hause, auch wenn ein Internetdienst nicht erreichbar ist. Optionale Cloudfunktionen bleiben von ihrem jeweiligen Anbieter abhängig.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/local-resilience.webp" alt="Licht, Beschattung und Heizung funktionieren dank lokaler Automation weiterhin" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

**Weniger [Herstellerbindung](/de/insights/kein-vendor-lock-in/).** Sie können direkt auf Ihre eigenen Daten zugreifen. Konihaus führt Geräte aus etablierten Standards und Ökosystemen – etwa Zigbee, Z-Wave, Matter und WiFi – in einem System zusammen, soweit die jeweiligen Geräte dies unterstützen.

**Schnellere Reaktionen.** Bei lokaler Verarbeitung muss ein Befehl keinen Umweg über einen entfernten Server nehmen, wenn Sie ein Licht einschalten oder die Temperatur ändern.

## Fernzugriff: sicher und optional

Sie möchten auch auf Reisen nach Ihrem Zuhause sehen? Konihaus unterstützt eine private, Ende-zu-Ende-verschlüsselte VPN-Verbindung mit Protokollen wie WireGuard oder OpenVPN. Sie kontrollieren die Zugangsdaten und entscheiden, wann Sie sie nutzen.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/secure-remote-access.webp" alt="Eine Reisende verbindet sich über einen privaten Fernzugriff sicher mit ihrem Zuhause" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Das unterscheidet sich grundlegend von Systemen, bei denen eine Hersteller-Cloud standardmässig den Zugang zu Ihrem Zuhause vermittelt. Bei Konihaus entscheiden *Sie*, ob Sie einen Fernzugriff aktivieren. Ihre lokalen Automationen sind davon nicht abhängig.

## Auch Sprachsteuerung kann lokal bleiben

Sprachsteuerung bedeutet nicht zwangsläufig, dass Aufnahmen an einen grossen Cloudanbieter gesendet werden. Home Assistant Assist kann die gesamte Sprachverarbeitung auf Ihrer eigenen Hardware ausführen: Ein Mikrofon nimmt den Befehl auf, eine lokale Spracherkennung wandelt ihn in Text um, Home Assistant führt die gewünschte Aktion aus und eine lokale Sprachausgabe spricht die Antwort. Der gesprochene Befehl kann während des gesamten Vorgangs im eigenen Zuhause bleiben.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/local-voice-control.webp" alt="Mikrofon, lokaler Computer und Lampe bilden eine private Sprachsteuerung" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Dabei gibt es einen klaren Zielkonflikt. Eine spezialisierte Lösung wie Speech-to-Phrase reagiert auch auf schlanker Hardware schnell, versteht jedoch nur einen begrenzteren Satz von Befehlen zur Haussteuerung. Whisper kann freier formulierte Sprache erfassen, benötigt für schnelle Antworten aber mehr Rechenleistung. Piper erzeugt die Sprachausgabe lokal. Auch Sprachunterstützung und Erkennungsqualität unterscheiden sich. Das System sollte deshalb passend zu den Menschen ausgewählt, eingerichtet und getestet werden, die es später nutzen.

Die Einrichtung wirkt zunächst aufwendiger als die Aktivierung eines bekannten Cloudassistenten. Sie verlangt zusätzliche Hardware und eine sorgfältige Konfiguration. Wer dem Schutz der Privatsphäre einen besonders hohen Stellenwert gibt, erhält dafür einen konkreten Gegenwert: Sprachsteuerung, ohne die gesprochenen Befehle des Haushalts routinemässig an einen externen Dienst zu senden. Konihaus kann die passende Hardware beurteilen, die lokale Sprachverarbeitung einrichten und sie für praktische Alltagsbefehle abstimmen.

[So funktioniert ein vollständig lokaler Sprachassistent mit Home Assistant](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/).

## Warum wir es so gebaut haben

Datenschutz ist keine nachträglich ergänzte Funktion. Er ist das Fundament. Ein wirklich persönliches Smart Home sollte nicht voraussetzen, dass Sie einem Konzern intime Details Ihres Alltags anvertrauen – wann Sie aufstehen, wann Sie das Haus verlassen oder ob jemand zu Hause ist.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/privacy-foundation.webp" alt="Ein geschütztes, lokal gesteuertes Zuhause in der Schweizer Landschaft bei Dämmerung" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Eine Local-First-Architektur reduziert diese Preisgabe von Anfang an und [hält das System über Jahre lauffähig](/de/insights/zukunftssicher/). Sie können sich weiterhin bewusst für vernetzte Dienste entscheiden, wenn sie einen echten Mehrwert bieten. Der grundlegende Betrieb Ihres Zuhauses bleibt jedoch in Ihren Händen.

---
 
**Denken Sie über Ihr eigenes Zuhause nach?** [Sprechen Sie mit Koni](https://konihaus.ch/#contact) darüber, was bei Ihnen wirklich etwas bewirken würde — unverbindlich, ohne Verkaufsgespräch.