---
title: Kein Vendor Lock-In
date: 2026-09-29
time: '10:00'
language: de
tags: Interoperabilität, Geräte, Standards
layout: blog-post.njk
permalink: /de/insights/kein-vendor-lock-in/
permalinkalt: /en/insights/no-vendor-lock-in/
ogimage: vendor-lock-in/og.jpg
excerpt: Verbinde Geräte verschiedener Hersteller, ohne dein gesamtes Smart Home einem einzigen Ökosystem zu überlassen.
readingtime: 5 Min. Lesezeit
related: [persoenlicher-service]
author: Koni
---

## Was Vendor Lock-in tatsächlich bedeutet

Stell dir ein Zuhause mit Philips-Hue-Leuchten, einem Sonos-Soundsystem, tado°-Thermostaten und einigen Sensoren von Sonoff oder Shelly vor. Draussen kommen vielleicht ein Intex-Whirlpool, ein Worx-Landroid-Mähroboter und eine Netatmo-Wetterstation hinzu. Jedes Produkt kann für sich gut funktionieren. Meist bringt aber auch jedes eine eigene App, ein eigenes Konto, eigene Begriffe und eine eigene Art für Zeitpläne oder Szenen mit.

Die Schwierigkeit zeigt sich, sobald alles als ein gemeinsames Zuhause reagieren soll. Vielleicht möchtest du, dass die Beschattung schliesst, das Licht gedimmt wird und die Musik startet, wenn es im Wohnzimmer zu warm wird. Vielleicht soll der Mähroboter pausieren, sobald die Wetterstation Regen erkennt. Oder du möchtest eine sinnvolle Meldung erhalten, anstatt fünf verschiedene Apps zu kontrollieren. Die einzelnen Produkte können intelligent sein, während das Zuhause als Ganzes fragmentiert bleibt.

<figure class="blog-post__figure">
  <img src="/images/insights/vendor-lock-in/fragmented-ecosystems.webp" alt="Getrennte Hubs und Apps verbinden jeweils nur einzelne Gruppen von Smart-Home-Geräten" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Apple Home und Google Home können viele kompatible Produkte in einer Oberfläche zusammenführen. Auch Standards wie Matter verbessern die Situation. Sie beseitigen jedoch nicht jede Grenze. Die Unterstützung hängt weiterhin vom genauen Modell, der Gerätegeneration, der Bridge, dem Herstellerkonto, der Region und den von der Integration freigegebenen Funktionen ab. Ein Produkt kann in der gemeinsamen App erscheinen, während bestimmte Einstellungen weiterhin nur in der Hersteller-App erreichbar sind.

Nun entdeckst du beispielsweise smarte Leuchten von Paulmann, die besser in einen Raum passen als deine bisherigen Lampen. Oder du möchtest mehrere gemischte Sensoren vollständig durch Sonoff-Modelle ersetzen. In einem stark abgeschotteten Ökosystem kann aus diesem einfachen Wunsch schnell eine neue Bridge, ein weiteres Konto, der Neuaufbau von Szenen oder der Verlust bereits genutzter Funktionen werden. Die bisherige Hardware wird dadurch nicht automatisch wertlos, doch die investierte Arbeit lässt sich häufig nicht sauber übertragen.

Genau das ist Vendor Lock-in: Der Austausch eines einzelnen Geräts hat Folgen, die weit über dieses Gerät hinausgehen.

## Konihaus verbindet unterschiedliche Systeme

Konihaus nutzt Home Assistant als gemeinsame Automationsebene. Darin lassen sich Geräte und Dienste zusammenführen, die über Zigbee, Z-Wave, Matter, WiFi, MQTT, lokale Netzwerkschnittstellen oder unterstützte Herstellerintegrationen kommunizieren. Nicht jedes Produkt muss jedes andere Produkt direkt verstehen. Das zentrale System übersetzt Zustände und Steuerungsmöglichkeiten in ein einheitliches Modell.

<figure class="blog-post__figure">
  <img src="/images/insights/vendor-lock-in/connected-systems.webp" alt="Ein zentraler lokaler Hub verbindet Licht, Heizung, Sensoren, Audio, Wetter und Gartengeräte" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Das bedeutet nicht, dass jedes smarte Gerät automatisch kompatibel ist oder vollständig lokal arbeitet. Manche Produkte stellen nur einen Teil ihrer Funktionen bereit. Andere benötigen weiterhin ein Herstellerkonto oder eine Cloudverbindung. Auch zwischen Gerätegenerationen kann sich die Anbindung unterscheiden. tado° und tado° X nutzen beispielsweise nicht exakt denselben Integrationsweg.

Konihaus prüft deshalb vor einer Empfehlung oder Installation das genaue Modell, das verwendete Protokoll, die verfügbare Integration und alle benötigten externen Dienste. Das Ziel ist kein vages Versprechen, dass alles mit allem funktioniert. Das Ziel ist ein dokumentiertes System, in dem die wichtigen Funktionen zusammenspielen und verbleibende Abhängigkeiten von Anfang an sichtbar sind.

## Eine Oberfläche, gemeinsame Automationen

Sobald kompatible Geräte eingebunden sind, spielt ihre Marke für die Automation eine kleinere Rolle. Ein Shelly-Sensor kann Leuchten von Philips Hue oder Paulmann schalten. Ein Messwert der Netatmo-Wetterstation kann die Beschattung oder Lüftung beeinflussen. Die Temperatur eines tado°-Thermostats kann als Bedingung in einer umfassenderen Energieroutine dienen. Sonos kann Teil einer Szene sein, ohne dadurch zur Steuerungsplattform für das restliche Zuhause zu werden.

<figure class="blog-post__figure">
  <img src="/images/insights/vendor-lock-in/shared-interface.webp" alt="Eine Oberfläche koordiniert Licht, Klima, Beschattung, Audio, Wetter und Gartenautomation" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Die Geräte erscheinen in einer gemeinsamen Oberfläche und können dieselben Szenen, Zeitpläne und Benachrichtigungen nutzen. Die ursprünglichen Apps bleiben möglicherweise für Firmwareupdates oder spezielle Einstellungen sinnvoll. Sie müssen aber nicht länger bestimmen, wie du dein gesamtes Zuhause bedienst.

## Ein Gerät wechseln, ohne das Zuhause neu aufzubauen

Angenommen, ein Raum nutzt heute Philips-Hue-Leuchtmittel und später gefallen dir kompatible Zigbee-Leuchten von Paulmann besser. Konihaus prüft zuerst, welche Funktionen die neuen Leuchten über den installierten Zigbee-Koordinator bereitstellen. Ein- und Ausschalten sowie Dimmen sind häufig standardisiert. Farbwirkungen, Übergänge oder herstellerspezifische Szenen können sich dagegen unterscheiden.

<figure class="blog-post__figure">
  <img src="/images/insights/vendor-lock-in/replace-one-device.webp" alt="Ein kompatibles Leuchtmittel wird ersetzt, während die übrige Automation weiterbesteht" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Nach dem Verbinden der neuen Leuchten kann die bestehende Raumlogik ihnen neu zugeordnet werden. Die Automation muss nicht rund um die App eines anderen Herstellers neu entwickelt werden. Dasselbe Prinzip gilt beim Austausch eines Bewegungsmelders, Zwischensteckers, Thermostats oder einer anderen Komponente: Das Gerät ändert sich, der Zweck der Automation bleibt verständlich und wiederverwendbar.

Das ist praktische Interoperabilität. Sie erhält die Struktur des Smart Homes, auch wenn sich einzelne Produkte ändern, und berücksichtigt gleichzeitig, dass spezielle Funktionen weiterhin geprüft werden müssen.

## Dein System bleibt deins

Die zentrale Konfiguration, Dashboards, Zeitpläne und Automationen liegen auf dem lokalen Home-Assistant-System und können gesichert werden. Ändert ein Hersteller sein Abonnement, stellt einen Dienst ein oder verschwindet vom Markt, ist zunächst nur die davon abhängige Integration betroffen. Lokal verbundene Geräte und unabhängige Automationen können weiterarbeiten.

<figure class="blog-post__figure">
  <img src="/images/insights/vendor-lock-in/system-remains-yours.webp" alt="Ein geordneter lokaler Smart-Home-Computer mit Sicherung bleibt im eigenen Zuhause" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Wenn du später einen anderen Dienstleister wählst, gehört die Hardware nicht Konihaus. Deine Installation kann dokumentiert, übergeben, unabhängig weitergeführt oder migriert werden, soweit die Zielplattform die betreffenden Geräte und Daten unterstützt. Der Wechsel zwischen komplexen Systemen geschieht nie vollständig automatisch. Eine offene und dokumentierte Installation bietet dafür jedoch einen realistischen Weg.

## Warum das wichtig ist

Ein Smart Home entwickelt sich über viele Jahre. Leuchten werden ersetzt, Heizsysteme ändern sich, neue Standards entstehen und Hersteller passen ihre Produkte oder Geschäftsbedingungen an. Bei einem System rund um eine einzige Marke hängt jede spätere Entscheidung vom Sortiment und den Prioritäten dieses Herstellers ab.

<figure class="blog-post__figure">
  <img src="/images/insights/vendor-lock-in/long-term-interoperability.webp" alt="Ältere und neuere Smart-Home-Komponenten arbeiten langfristig in einem gemeinsamen Zuhause" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Ein interoperables System gibt dir mehr Entscheidungsfreiheit. Du kannst einen besseren Sensor wählen, ohne die Beleuchtung zu ersetzen. Du kannst eine neue Gerätekategorie hinzufügen, ohne den gesamten Haushalt in eine andere App umzuziehen. Und du kannst funktionierende Hardware so lange behalten, wie sie deinen Bedürfnissen entspricht.

Konihaus schützt diese Freiheit. Wir verbinden geeignete Produkte verschiedener Hersteller, erklären unvermeidbare Abhängigkeiten und lassen die Automationslogik unter deiner Kontrolle.

<a href="https://www.home-assistant.io/integrations/" target="_blank">Entdecke die von Home Assistant unterstützten Geräte- und Dienstintegrationen</a>.

---
 
**Denken Sie über Ihr eigenes Zuhause nach?** [Sprechen Sie mit Koni](https://konihaus.ch/#contact) darüber, was bei Ihnen wirklich etwas bewirken würde — unverbindlich, ohne Verkaufsgespräch.


