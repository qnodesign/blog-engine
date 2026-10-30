---
title: "Smart Home Sensors: The Five Types That Tell Your Home What Is Going On"
date: 2026-11-02
time: '09:00'
language: en
layout: blog-post.njk
permalink: /en/insights/smart-home-sensors/
permalinkalt: /de/insights/smart-home-sensoren/
translationKey: smart-sensors
ogimage: smart-sensors/og.jpg
excerpt: "A smart home is only as smart as what it can sense. The five sensor types worth knowing, what they cost in Switzerland, and the two or three to place first."
description: "Smart home sensors explained: the five types from motion to water leak, with Swiss prices and the two or three to place first."
seoTitle: "Smart Home Sensors: Which Types to Place First"
keyword: "smart home sensors"
category: technology
series: "The parts of a smart home"
tags: [sensors, presence, zigbee, thread]
readingtime: 8 min read
related: [smart-lights-switzerland, safer-hallways-at-night, holiday-home-frost-watch]
author: Koni
---

A smart home is only as smart as what it can sense. Lights and blinds are the visible part. Smart home sensors are the quiet part: small devices that tell your home whether a door is open, whether the air is too humid, or whether somebody is in the hallway. Without them, automation is just a timer.

This is the third post in the series on the parts of a smart home, after [smart lights](/en/insights/smart-lights-switzerland/) and [smart blinds](/en/insights/smart-blinds-switzerland/). Same questions as before: what does it do for you, what should you check before buying, and where are the honest limits.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-sensors/01-hero.webp" alt="Small sensors in a hallway at night: a motion sensor on the wall and a soft light along the floor" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## The five sensor types

<figure class="blog-post__figure">
  <img src="/images/insights/smart-sensors/02-five-families.webp" alt="Five kinds of sensor: motion and presence, door and window contact, temperature and humidity, air quality, and water leak" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

**1. Motion and presence.** A motion sensor notices movement. That is all it knows. Its weakness is simple: if you sit still on the sofa reading, the light goes off, because from the sensor's point of view nothing is happening. A presence sensor adds a small radar (mmWave) to the usual infrared eye, so it can also tell that somebody is in the room even when they hardly move. There is no camera and no picture, just a yes or no. Many presence sensors also measure how bright the room is, so a light can switch on only when somebody is there and it is dark, not at noon.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-sensors/03-motion-presence.webp" alt="Left: a motion sensor may miss a person reading still on the sofa. Right: a radar presence sensor keeps the light on" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

**2. Door and window contacts.** Two small pieces, one on the frame and one on the door or window. They answer one question: open or closed? That is the basis for "is the window still open?", for heating that pauses while you air the room, and for a message when the holiday home's cellar door stays open.

**3. Temperature and humidity.** The quietest and often the most useful. It tells you the real temperature in the rooms that matter, and it shows when the air gets too humid, before you see mould. Add an alert for below 3 °C and the same sensor also watches a cellar or a holiday home for frost.

**4. CO2 and air quality.** CO2 is a good proxy for "this room needs fresh air". A bedroom with the door closed gets stuffy overnight, and a CO2 sensor shows it in numbers.

**5. Water leak.** A small puck on the floor under the washing machine, the dishwasher or the water heater. It does nothing until the day it matters.

These are the five types I would start with. There are many more kinds of sensors, such as energy meters, and more arrive every day. Smoke, CO and gas alarms, and energy metering, each get a post of their own later in this series. In another post I will pick a few unusual ones with edge cases, so you can see how much is possible. But for now, back to the five types, because that is where I would start.

## What you can buy in Switzerland

Prices as of October 2026. They change and stock varies, so treat them as a guide.

**Aqara** has the broadest range of small sensors. The Presence Multi-Sensor FP300 combines infrared and mmWave radar (6 m range, 120° angle) and also measures light, temperature and humidity. It costs CHF 37.50 at Digitec when in stock, and CHF 64.93 from other sellers. It runs on two CR2450 coin cells and works with Matter over Thread or with Zigbee, one at a time. Aqara says the batteries last up to 3 years on Zigbee and up to 2 years on Thread. Aqara's Temperature and Humidity Sensor T1 uses Zigbee 3.0 and starts at CHF 16.90 on Digitec, with a stated tolerance of 0.6 °C. The Door and Window Sensor is Zigbee as well, with a button cell that Aqara says lasts over two years. Availability varies, so check the price before you plan around it. Aqara states that its sensors need one of its hubs to connect to its own app.

**IKEA** has the cheapest sensors, and they are Matter compatible, so they work with the DIRIGERA hub and other systems. MYGGSPRAY (motion), MYGGBETT (door and window), KLIPPBOK (water leak) and TIMMERFLOTTE (temperature and humidity) each cost CHF 7.95 on IKEA.ch. For air quality there is the [ALPSTUGA](https://www.ikea.com/ch/en/p/alpstuga-air-quality-sensor-smart-50604187/) (CHF 34.95). It measures CO2, particles and temperature and uses Matter over Thread, so it needs a Thread border router such as the DIRIGERA. Particles are a different problem from CO2: they come from frying, candles or a wood stove, while CO2 only tells you the room is stuffy. Two honest notes: the USB power adapter is sold separately, and reviewers say its display can't be switched off and can be bright in a bedroom.

**Sonoff** sells small Zigbee sensors at low prices. The SNZB-03P motion sensor costs CHF 15.90 at Digitec (Zigbee 3.0, CR2477 coin cell, 6 m range, 110° angle). The SNZB-06P presence sensor uses a 5.8 GHz radar that also detects people sitting still, and it has a light sensor. It costs CHF 14.10, but it runs on USB-C power instead of a battery, so it needs a socket nearby. The SNZB-02D and SNZB-02P temperature and humidity sensors cost CHF 11.60 and CHF 12.90 each when you buy two, and the SNZB-05P Zigbee water leak sensor costs CHF 12.50.

**Philips Hue** makes the motion sensor I like best. One device measures motion, light level and temperature, so the same sensor can switch a light on only when it is dark and also tells you how warm the hallway is. It comes as an indoor version (5 m range, CHF 34.50 at Digitec) and an outdoor version (12 m range, 160° angle, battery powered, CHF 50.00). The outdoor one is the only outdoor motion sensor I found reliable. Both are Zigbee devices. They work with the Hue Bridge, which is nice but not necessary: any Zigbee hub works, for example with Zigbee2MQTT.

The Sonoff presence sensor mentioned above works better in my office or in the basement, where I want the light to stay on as long as I am there, even when I sit still. On the stairs and in the hallway, motion sensors are the best choice.

## One thing to check before anything else: how it reports

As with lights and blinds, the brand matters less than the language the sensor speaks.

- **Zigbee** and **Thread** are the ones I look for. They are low-power radios that work locally, without the internet, and they run for years on a small battery.
- **Wi-Fi** sensors drain batteries faster and usually need the manufacturer's cloud.
- **A sensor that needs its own hub** is fine, as long as that hub can also pass the data to your home system. Otherwise you end up with one app per sensor brand.

Two basics of Zigbee are worth knowing. Sensors on batteries only talk and sleep, so they don't relay other devices' messages. Mains-powered devices, like many smart plugs and bulbs, do relay. That is why a mix of the two makes the mesh reliable: sensors far from the hub depend on powered devices nearby. I wrote about why an open standard matters in [no vendor lock-in](/en/insights/no-vendor-lock-in/).

<figure class="blog-post__figure">
  <img src="/images/insights/smart-sensors/04-first-three-spots.webp" alt="A flat floor plan with three sensor spots: the hallway, a room that needs climate monitoring, and the washing machine" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Where I would place the first sensors

Don't buy one of each. Start with the two or three that answer a question you already have.

1. **Water leak sensor under the washing machine or dishwasher.** Cheap, and the day it matters it is worth more than anything else on this list.
2. **A temperature and humidity sensor in the room that worries you.** A cellar, a holiday home, a bathroom, a bedroom with a damp corner. In the [holiday home frost watch](/en/insights/holiday-home-frost-watch/), this is the sensor that does the work.
3. **A presence sensor in the hallway.** It switches the night light on the way to the bathroom, as in [safer hallways at night](/en/insights/safer-hallways-at-night/), and it can switch off the lights in an empty room, where a plain motion sensor would turn them off on you while you read.

Door and window contacts come next, once you know which doors and windows you really care about.

## Honest limits

**Batteries die quietly.** A sensor that has stopped reporting looks the same as a sensor that sees nothing. A good system watches for "last seen" and low-battery warnings and tells you before a sensor goes silent. A door contact that Aqara rates at over two years is not a promise. Mark the date you fitted each battery.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-sensors/05-battery-reporting.webp" alt="Three states of a sensor: normal reports, low battery, and missing reports. Watch battery status and last contact" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

**One sensor, one view.** A plain motion sensor can't see a person sitting still. A radar presence sensor can, but only if it is placed and set up well. A door contact doesn't know a door is ajar, not open. A temperature sensor on a sunny window sill reads high. Good rules combine two signals instead of trusting one.

**Not a safety device.** A leak sensor tells you about water. It does not stop it. And none of these replaces a smoke or CO detector, which has to work on its own. Switzerland has no legal obligation to fit smoke alarms, but only alarms certified to EN 14604 may be sold here. A smart one still protects you with its own siren, not with the app. I'll talk about smoke, CO and gas in a later post.

## How I'd start

1. **Write down the question first.** "Did I leave the window open?" "Is the cellar too humid?" "Is there water under the machine?"
2. **Pick sensors that speak Zigbee or Thread.**
3. **Place them, then watch the numbers for a week** before you build any rules on them.
4. **Add the battery check.** Every sensor, from day one.

In a Konihaus home, sensors report to the Greenhub, locally, and the system tells you when a battery runs low. The next post in this series covers heating and climate: thermostats, radiator valves and the heat pump as one system. If you don't want to miss it, sign up for the Konihaus Blog newsletter below.

---

**Not sure which sensors would help in your home?** [Talk to Koni](https://konihaus.ch/#contact). The first conversation is free, with no obligation.
