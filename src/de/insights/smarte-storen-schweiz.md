---
title: "Smarte Storen: Motoren, Nachrüstungen und die Regeln, die sie nützlich machen"
date: 2026-10-29
time: '09:00'
language: de
layout: blog-post.njk
permalink: /de/insights/smarte-storen-schweiz/
permalinkalt: /en/insights/smart-blinds-switzerland/
translationKey: smart-blinds
ogimage: smart-blinds/og.jpg
excerpt: "Storen sparen im Alltag am meisten Aufwand, und sie versagen am unauffälligsten. Drei Wege, sie smart zu machen, was es in der Schweiz zu kaufen gibt und welche Sonnen-, Wind- und Frostregeln entscheiden, ob Sie sie weiter nutzen."
description: "Smarte Storen in der Schweiz: Somfy TaHoma, Sonoff und Aqara für Rollos und Lamellenstoren sowie Regeln für Sonne, Wind und Frost."
seoTitle: "Smarte Storen Schweiz: Möglichkeiten und Grenzen"
keyword: "smarte Storen Schweiz"
category: technik
series: "Die Teile eines Smart Homes"
tags: [storen, rollos, somfy, sonoff]
readingtime: 7 Min. Lesezeit
related: [smarte-beleuchtung-schweiz, zeitumstellung, kein-vendor-lock-in]
author: Koni
---

Storen sind das Gerät, das im Alltag am meisten Aufwand spart. Niemand mag es, am Abend durchs Haus zu gehen, Kurbeln zu drehen und an Schnüren zu ziehen. Sie sind aber auch das Gerät, das am unauffälligsten versagt: Eine Store, die den ganzen Tag unten bleibt oder zur falschen Zeit hochfährt, ärgert Sie wochenlang, bevor Sie den Grund finden.

Das ist der zweite Beitrag der Serie über die Teile eines Smart Homes, nach dem Beitrag über [smartes Licht](/de/insights/smarte-beleuchtung-schweiz/). Es sind dieselben Fragen wie zuvor: Was bringt es Ihnen, was sollten Sie vor dem Kauf prüfen, und wo liegen die ehrlichen Grenzen?

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/01-dusk-blinds.webp" alt="Eine Frau liest in der Dämmerung auf einem Sofa im warmen Wohnzimmer, während sich die Storen am Fenster schliessen." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Drei Wege, eine Store smart zu machen

Welchen Weg Sie nehmen, hängt davon ab, was heute vor Ihrem Fenster hängt.

**1. Eine Store kaufen, die schon smart ist.** Ein Rollo mit Akkumotor in der Wickelwelle, meist ein normales Rollo plus ein dazu passender Motor. Nichts zu verkabeln, nichts in eine Unterputzdose zu schrauben. Der Haken: Sie ersetzen die Store, und der Motor muss dazu passen.

**2. Einen Motor an die vorhandene Store setzen.** Ein kleiner Antrieb, der sich an die Kette eines gewöhnlichen Rollos klemmt und sie für Sie zieht. Es wird nichts ausgebaut, deshalb passt das auch für Mieterinnen und Mieter.

**3. Den vorhandenen Motor automatisieren.** In vielen Häusern gibt es schon elektrische Storen oder Rollläden mit einem Wandschalter für hoch und runter. Sie müssen nur für Ihr Smart Home erreichbar werden, entweder über ein kleines Relais hinter dem Schalter oder über das Funksystem des Motors.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/02-three-retrofit-routes-de.webp" alt="Drei Wege zu smarten Storen: ein neues Akku-Rollo, ein Kettenantrieb am vorhandenen Rollo und ein Relais oder Funk-Gateway für einen vorhandenen Motor." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Was es in der Schweiz zu kaufen gibt

Preise Stand 28. Oktober 2026. Sie ändern sich, nehmen Sie sie als Richtwert.

<div class="blog-post__buy">

<figure class="blog-post__figure blog-post__figure--aside">
  <img src="/images/insights/smart-blinds/somfy-tahoma-switch.webp" alt="Der Somfy TaHoma Switch neben einem Handy, auf dem die TaHoma-App mit Rollläden, Einfahrtstor und Lampen zu sehen ist." width="861" height="900" loading="lazy" decoding="async">
</figure>

**Somfy** ist der erste Name, den Sie ansehen sollten, wenn Sie Lamellenstoren (Raffstoren) haben, wie viele Schweizer Haushalte. Sie fahren nicht nur hoch und runter, sondern lassen sich auch kippen, und die TaHoma-App steuert beides auf einfache Art. Der TaHoma Switch kostet bei Digitec CHF 143, mit einzelnen Angeboten etwas darunter. Er steuert Somfys io- und RTS-Motoren sowie Zigbee-3.0-Geräte, insgesamt bis zu 200 Produkte. Prüfen Sie, ob Ihr Motor ein Somfy-io-Motor ist, und fragen Sie bei einer Fachperson nach, ob das Kippen bei Ihrem Modell funktioniert. Der Lagerbestand schwankt, fragen Sie also auch nach der Verfügbarkeit.

<figure class="blog-post__figure blog-post__figure--aside">
  <img src="/images/insights/smart-blinds/sonoff-mini-zbrbs.webp" alt="Der Sonoff MINI-ZBRBS, ein Zigbee-Schalter für Storen, neben seiner Verpackung." width="900" height="776" loading="lazy" decoding="async">
</figure>

**Sonoff** ist die günstige Zigbee-Lösung für einen vorhandenen, verkabelten Motor. Der Zigbee Mini Switch für Storen kostet bei Digitec CHF 15.50, mit mehr als zehn Stück an Lager. Er sitzt hinter Ihrem Wandschalter, meldet an jedes Zigbee-System wie Home Assistant und kennt nach einer kurzen Kalibrierfahrt die Position in Prozent. Er arbeitet auch als Zigbee-Router und stärkt so Ihr Funknetz. Er hat drei Grenzen: Er braucht einen Neutralleiter, er schaltet Motoren bis 1 A (einen üblichen 4- oder 5-adrigen Wechselstrommotor), und er kennt nur Auf, Zu und Position, keinen Lamellenwinkel. Bei Lamellenstoren fährt er sie also hoch und runter, stellt aber die Neigung nicht ein. Einen 230-V-Motor anzuschliessen ist Sache einer Elektro-Fachperson, kein Wochenendprojekt.

<figure class="blog-post__figure blog-post__figure--aside">
  <img src="/images/insights/smart-blinds/aqara-e1-chain-drive.webp" alt="Der Aqara-Kettenantrieb neben einem Fenster, an der Kugelkette einer Store montiert." width="900" height="900" loading="lazy" decoding="async">
</figure>

**Aqara** baut den Roller Shade Driver E1, einen Nachrüstantrieb für Rollos mit Kugelkette (3 bis 6 mm, Kunststoff- oder Metallkugeln). Er spricht Zigbee 3.0. Der eingebaute Akku hält bis zu zwei Monate, oder Sie speisen ihn über USB-C. Er ist für Rollos gedacht, nicht für Lamellenstoren. Aqara schreibt, dass Sie für die eigene App und Automationen einen Aqara-Hub brauchen, Zigbee2MQTT-Nutzer koppeln ihn aber direkt, schauen Sie sich das also vor dem Kauf an.

<figure class="blog-post__figure blog-post__figure--aside">
  <img src="/images/insights/smart-blinds/motionblinds-cmd-01-bridge.webp" alt="Die MotionBlinds CMD-01 WLAN-Bridge in ihrer Verpackung." width="500" height="400" loading="lazy" decoding="async">
</figure>

Auf **hornbach.ch** bekommen Sie das, was einer fertigen smarten Store am nächsten kommt. SOLUNA-Rollos nach Mass gibt es ab CHF 49, und MotionBlinds verkauft Batteriemotoren dafür: den CMD-03 mit Bluetooth für CHF 119 und den CMD-02 Pull für CHF 99.90, dazu die CMD-01 WLAN-Bridge für CHF 64.90. Home Assistant hat eine [lokale Integration für MotionBlinds](https://www.home-assistant.io/integrations/motion_blinds/), die mit WLAN-Bridges arbeitet, welche per 433 MHz mit den Storen sprechen, und die CMD-01 steht auf der Liste der unterstützten Geräte. Sie braucht einen Schlüssel aus der MotionBlinds-App. Prüfen Sie auf hornbach.ch, ob sich der Motor bereits am Rollo eingebaut bestellen lässt. Im selben Shop gibt es das Aeotec Pico Shutter (Zigbee-Nachrüstmodul, CHF 50.40) und das Fibaro Roller Shutter 4 (Z-Wave, CHF 55.90).

**Andere Hersteller** verkaufen ähnliche Aktoren. Am bekanntesten ist Shelly: Der Shelly 2PM Gen3 hat einen Storenmodus, kennt die Position in Prozent, erkennt Hindernisse und kostet bei Digitec CHF 16.50, spricht aber WLAN und Bluetooth statt Zigbee. Fibaro und Aeotec, oben, bieten Module derselben Art. Anderswo gibt es auch fertige Akku-Storen mit Matter over Thread, etwa von Eve, die aber aktuell nicht in die Schweiz geliefert werden. Welcher Funkstandard die bessere Wahl ist, ist eine grössere Frage als Storen: Matter over WLAN konkurriert heute stark mit Zigbee. Meine eigenen Entscheidungen und wohin sich die Branche meiner Meinung nach bewegt, erkläre ich in einem separaten Beitrag.

**Ein Wort zu Lamellenstoren.** Bei Lamellenstoren ist Hoch und Runter nur die halbe Aufgabe. Die Neigung lässt Tageslicht herein, während die Sonne draussen bleibt, fragen Sie also vor dem Kauf, ob ein Produkt den Lamellenwinkel steuert. Somfy ist dafür gebaut. Unter den Zigbee-Relais steuert laut Aeotec das Pico Shutter den Blendenwinkel, und Zigbee2MQTT zeigt dafür einen Neigungswert an, während der Sonoff die Store nur hoch und runter fährt. Ob der Winkel mit Ihrem Lamellenmotor funktioniert, fragen Sie bei Aeotec oder einer Installationsfachperson.

</div>

## Eines vorab prüfen: wohin die Befehle gehen

Wie beim Licht zählt weniger die Marke als der Weg. Fragen Sie, ob die Store auf einen Befehl aus Ihrem Zuhause reagiert oder ob der Befehl erst zu einem Server und wieder zurück geht.

- **Lokale** Lösungen funktionieren auch ohne Internet. Dazu gehören Sonoff und andere Zigbee-Geräte wie die von Aqara.
- **Somfy** ist gemischt. Home Assistant kann lokal mit dem TaHoma Switch sprechen, sobald Sie in der Somfy-App den Entwicklermodus einschalten und ein Token erzeugen. Das ist schneller, etwa alle fünf Sekunden statt alle dreissig auf dem Cloud-Weg, und es funktioniert ohne Internet. Home Assistant nennt dabei einige Grenzen: Im lokalen Modus fehlen Somfys Szenarien, und ältere RTS-Motoren melden ihre Position nicht zurück, das System weiss also nur, was es ihnen zuletzt befohlen hat.
- **Der Hub hat eine Warteschlange.** Home Assistant weist darauf hin, dass ein Somfy-Gateway nur etwa zehn Befehle auf einmal annimmt. Wer zwanzig Storen gleichzeitig fahren will, muss die Befehle verteilen.

Das ist kein Grund, Somfy zu meiden, aber ein Grund, das System so zu planen, dass ein verpasster Befehl nicht stört. Das grössere Bild habe ich unter [kein Vendor Lock-in](/de/insights/kein-vendor-lock-in/) beschrieben.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/03-tahoma-control-de.webp" alt="Der TaHoma Switch mit zwei Steuerwegen: lokal über eine kompatible Schnittstelle wie Home Assistant oder über die Cloud des Herstellers." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Die Regeln, die Storen erst nützlich machen

Eine Store, die jeden Morgen um sieben hochfährt, ist ein Timer. Der Nutzen kommt von Regeln, die auf den Tag schauen:

- **Sonne.** Schliessen Sie die Storen auf der Südseite, wenn die Sonne hoch steht und der Raum sich aufheizt, und öffnen Sie sie wieder, wenn sie weitergezogen ist. Im Winter ist es umgekehrt: Öffnen Sie sie an einem sonnigen Tag, damit die tiefe Sonne den Raum wärmt, und schliessen Sie sie in der Dämmerung, damit die Wärme bleibt. Den Teil mit der Dämmerung habe ich in [Die Uhr wird zurückgestellt](/de/insights/zeitumstellung/) beschrieben.
- **Helligkeit.** Ein kleiner Lichtsensor ist ehrlicher als der Kalender. Ein grauer Novembernachmittag braucht keine Beschattung.
- **Wind.** Bei Markisen und Aussenstoren sollte ein Windsensor jede andere Regel übersteuern. Somfys Soliris ist ein Beispiel für einen kombinierten Sonnen- und Windsensor.
- **Frost.** Viele Hersteller raten davon ab, Aussenstoren und Markisen im gefrorenen Zustand zu fahren. Eine Regel, die Bewegungen unter null sperrt, kostet nichts und kann einen Motor retten. Schauen Sie in die Anleitung Ihres Modells.
- **Eine Pause.** Wolken ziehen schnell vorbei. Ohne Mindestabstand zwischen zwei Fahrten, etwa zwanzig Minuten, fahren die Storen den ganzen Nachmittag auf und ab, und so schaltet eine Familie die Automation am schnellsten wieder ab.
- **Handbedienung gewinnt.** Wenn jemand die Taste drückt, hält sich die Automation bis zum nächsten Tag zurück.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/04-weather-priorities-de.webp" alt="Die Regeln sind wichtiger als die App: Sonne und Helligkeit, Windschutz hat Vorrang, Vereisung berücksichtigen, Komfortbefehle beruhigen und manuelle Bedienung respektieren. Wetter, Schutz und Bedienung zusammen planen." width="1536" height="1024" loading="lazy" decoding="async">
  <figcaption>Die Regeln sind wichtiger als die App. Wetter, Schutz und Bedienung zusammen planen.</figcaption>
</figure>

## Ehrliche Grenzen

**Storen, bei denen es um Sicherheit geht, dürfen nicht von der Cloud abhängen.** Bei einem Brand sollten sich die Storen auf einem Fluchtweg öffnen. Die Home-Assistant-Hinweise zu Somfy sind klar: Ausgelastete Server können Befehle auf dem Cloud-Weg verzögern. Eine solche Regel braucht also einen lokalen Weg, und als letzte Reserve eine Kurbel oder Kette. Verstehen Sie «bei Rauchalarm öffnen» als Zusatz, nicht als Sicherheitsmassnahme. Der Rauchmelder selbst muss für sich allein funktionieren, dazu komme ich in dieser Serie noch.

**Akku-Storen müssen geladen werden.** Aqara nennt für seinen Kettenantrieb bis zu zwei Monate pro Ladung. Das klingt lang, bis zu dem Tag, an dem sich eine Store nicht mehr bewegt. Eine Erinnerung im Kalender alle paar Monate gehört zum System. Prüfen Sie auch, ob sich die Store bei leerem Akku noch von Hand bewegen lässt.

**Motor und Rollo müssen zusammenpassen.** Ein Akkumotor ist für bestimmte Rollos und Rohrgrössen gebaut, prüfen Sie also vor der Bestellung, ob beides passt. Für ungewöhnliche Fenster sind Weg zwei oder drei oft einfacher.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/05-manual-control-battery.webp" alt="Im Alltag bedienbar bleiben: eine Wandtaste für die Bedienung ohne App und ein Akku mit Ladekabel. Akkus gehören zum System." width="1536" height="1024" loading="lazy" decoding="async">
  <figcaption>Im Alltag bedienbar bleiben. Physische Tasten und Ladetermine gehören zur Planung.</figcaption>
</figure>

## So würde ich beginnen

1. **Ein Fenster, das Sie am meisten stört.** Oft ist es das Wohnzimmerfenster nach Süden oder das Schlafzimmer.
2. **Den Weg nach dem wählen, was dort hängt.** Neue Store, Kettenantrieb oder ein Relais für den vorhandenen Motor.
3. **Eine Wandtaste dazu.** Damit niemand eine App braucht, um eine Store herunterzulassen.
4. **Mit zwei Regeln anfangen.** Am Abend schliessen und bei Hitze beschatten. Wind und Frost kommen für alles im Freien dazu.

In einem Konihaus-Zuhause laufen die Storen über die Greenhub, wo immer der Motor eine lokale Verbindung zulässt, die Regeln laufen also auch ohne Internet weiter. Wo ein Motor auf die Cloud besteht, sage ich es Ihnen vor dem Kauf.

Der nächste Beitrag handelt von Sensoren: den kleinen Geräten, die Ihrem Zuhause sagen, was los ist, und den zwei, drei, die sich zuerst lohnen. Wenn Sie ihn nicht verpassen wollen, melden Sie sich unten für den Konihaus-Blog-Newsletter an.

---

**Smarte Storen für Ihr Zuhause?** [Sprechen Sie mit Koni](https://konihaus.ch/#contact). Das erste Gespräch ist kostenlos und unverbindlich.
