---
title: "Smart Blinds: Motors, Retrofits and the Rules That Make Them Useful"
date: 2026-10-29
time: '09:00'
language: en
layout: blog-post.njk
permalink: /en/insights/smart-blinds-switzerland/
permalinkalt: /de/insights/smarte-storen-schweiz/
translationKey: smart-blinds
ogimage: smart-blinds/og.jpg
excerpt: "Blinds save the most daily effort, and they fail the most quietly. Three ways to make them smart, what you can buy in Switzerland, and the sun, wind and frost rules that decide whether you keep using them."
description: "Smart blinds in Switzerland: Somfy TaHoma, Sonoff and Aqara for roller and slat blinds (Lamellenstoren), plus rules for sun, wind and frost."
seoTitle: "Smart Blinds in Switzerland: Options and Limits"
keyword: "smart blinds Switzerland"
category: technology
series: "The parts of a smart home"
tags: [blinds, shades, somfy, sonoff]
readingtime: 7 min read
related: [smart-lights-switzerland, clocks-go-back, no-vendor-lock-in]
author: Koni
---

Blinds are the device that saves the most daily effort. Nobody enjoys going round the house at dusk, turning crank handles and pulling cords. They are also the device that fails most quietly: a blind that stays shut all day or opens at the wrong moment annoys you for weeks before you work out why.

This is the second post in the series on the parts of a smart home, after [smart lights](/en/insights/smart-lights-switzerland/). Same questions as before: what does it do for you, what should you check before buying, and where are the honest limits.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/01-dusk-blinds.webp" alt="A woman reads on a sofa in a warm living room at dusk while the blinds in the window are closing." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Three ways to make a blind smart

Which route you take depends on what hangs in your window today.

**1. Buy a blind that is already smart.** A blind with a battery motor inside the roll, usually a standard blind plus a motor made for it. Nothing to wire, nothing to drill into a wall box. The catch is that you replace the blind, and the motor has to fit it.

**2. Add a motor to the blind you have.** A small drive that clips onto the chain of an ordinary roller blind and pulls it for you. Nothing is removed, so it suits renters.

**3. Automate the motor that is already there.** Many homes already have electric blinds or shutters, with a wall switch for up and down. They only need to be reachable from your smart home, either through a small relay behind the switch or through the motor's own radio system.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/02-three-retrofit-routes-en.webp" alt="Three routes to smart blinds: a new battery blind, a chain drive retrofitted to an existing roller blind, and a relay or radio gateway for an existing motor." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## What you can buy in Switzerland

Prices as of 28 October 2026. They change, so treat them as a guide.

<div class="blog-post__buy">

<figure class="blog-post__figure blog-post__figure--aside">
  <img src="/images/insights/smart-blinds/somfy-tahoma-switch.webp" alt="The Somfy TaHoma Switch hub next to a phone showing the TaHoma app with shutters, a gate and lamps." width="861" height="900" loading="lazy" decoding="async">
</figure>

**Somfy** is the first name to look at if you have slat blinds (Lamellenstoren or Raffstoren), which many Swiss homes do. They don't only go up and down, they also tilt, and the TaHoma app handles both in a simple way. The TaHoma Switch hub costs CHF 143 at Digitec, with a few offers slightly lower. It controls Somfy's io and RTS motors, plus Zigbee 3.0 devices, up to 200 products in all. Check that your motor is a Somfy io motor and ask a dealer whether tilt works for your model. Stock comes and goes, so ask about availability too.

<figure class="blog-post__figure blog-post__figure--aside">
  <img src="/images/insights/smart-blinds/sonoff-mini-zbrbs.webp" alt="The Sonoff MINI-ZBRBS Zigbee shutter switch next to its retail box." width="900" height="776" loading="lazy" decoding="async">
</figure>

**Sonoff** is the cheap Zigbee option for an existing wired motor. Its Zigbee Mini Switch for shutters costs CHF 15.50 at Digitec, with more than ten in stock. It sits behind your wall switch, reports to any Zigbee system such as Home Assistant, and knows the position in percent after a short calibration run. It also acts as a Zigbee router, which strengthens your mesh. It has three limits: it needs a neutral wire, it handles motors up to 1 A (a standard 4- or 5-wire AC motor), and it offers open, close and position only, with no slat angle. On slat blinds it raises and lowers them, but it does not set the tilt. Wiring a 230 V motor is a job for a licensed electrician, not a weekend project.

<figure class="blog-post__figure blog-post__figure--aside">
  <img src="/images/insights/smart-blinds/aqara-e1-chain-drive.webp" alt="The Aqara chain drive mounted next to a window, holding the bead chain of a blind." width="900" height="900" loading="lazy" decoding="async">
</figure>

**Aqara** makes the Roller Shade Driver E1, a retrofit drive for roller blinds with a bead chain (3 to 6 mm, plastic or metal beads). It speaks Zigbee 3.0. The built-in battery lasts up to two months, or you power it over USB-C. It is meant for roller blinds, not slat blinds. Aqara says you need one of its hubs for its app and automations, though Zigbee2MQTT users pair it directly, so look at that before you buy.

<figure class="blog-post__figure blog-post__figure--aside">
  <img src="/images/insights/smart-blinds/motionblinds-cmd-01-bridge.webp" alt="The MotionBlinds CMD-01 Wi-Fi bridge in its retail box." width="500" height="400" loading="lazy" decoding="async">
</figure>

On **hornbach.ch** you get the closest thing to a ready-made smart blind. SOLUNA roller blinds made to measure start at CHF 49, and MotionBlinds sells battery motors for them: the CMD-03 with Bluetooth at CHF 119 and the CMD-02 Pull at CHF 99.90, plus the CMD-01 Wi-Fi bridge at CHF 64.90. Home Assistant has a [local integration for MotionBlinds](https://www.home-assistant.io/integrations/motion_blinds/) that works with Wi-Fi bridges talking 433 MHz to the blinds, and the CMD-01 is on its supported list. It needs a key from the MotionBlinds app. Check on hornbach.ch whether the motor can be ordered fitted to the blind. The same shop sells the Aeotec Pico Shutter (Zigbee retrofit module, CHF 50.40) and the Fibaro Roller Shutter 4 (Z-Wave, CHF 55.90).

**Other makers** sell similar actuators too. Shelly is the best known: the Shelly 2PM Gen3 has a cover mode, knows the position in percent, has obstacle detection and costs CHF 16.50 at Digitec, but it talks Wi-Fi and Bluetooth rather than Zigbee. Fibaro and Aeotec, above, offer modules of the same kind. Elsewhere there are ready-made battery blinds with Matter over Thread, Eve's for example, but they are not shipped to Switzerland at the moment. Which radio is the better bet is a bigger question than blinds: Matter over Wi-Fi now competes hard with Zigbee. I'll explain my own choices, and where I think the industry is heading, in a separate post.

**A word on Lamellenstoren.** For slat blinds, up and down is only half of the job. The tilt is what lets daylight in while the sun stays out, so ask whether a product controls the slat angle before you buy. Somfy is built for it. Among the Zigbee relays, Aeotec says its Pico Shutter controls the blind angle, and Zigbee2MQTT exposes a tilt value for it, while the Sonoff only moves the blind up and down. Whether the angle works with your slat motor, ask Aeotec or an installer.

</div>

## One thing to check before anything else: where the commands go

As with lights, the brand matters less than the path. Ask whether the blind answers a command from your home, or whether the command first goes to a server and back.

- **Local** options work with the internet down. Sonoff and other Zigbee devices such as Aqara's are in this group.
- **Somfy** is mixed. Home Assistant can talk to the TaHoma Switch locally, once you switch on developer mode in the Somfy app and create a token. That makes it faster, about every five seconds instead of every thirty for the cloud route, and it works without the internet. Home Assistant lists some limits: local mode does not cover Somfy's scenarios, and older RTS motors can't report their position, so the system only knows what it last told them to do.
- **The hub has a queue.** Home Assistant notes that a Somfy gateway holds about ten commands at a time, so moving twenty blinds at once can fail unless the commands are spread out.

None of this is a reason to avoid Somfy; it is a reason to plan the system so a missed command doesn't matter. I wrote about the bigger picture in [no vendor lock-in](/en/insights/no-vendor-lock-in/).

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/03-tahoma-control-en.webp" alt="The TaHoma Switch hub with two control paths: locally through a compatible API such as Home Assistant, or through the vendor cloud." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## The rules that make blinds worth having

A blind that opens at seven every morning is a timer. The value comes from rules that look at the day:

- **Sun.** Close the south-facing blinds when the sun is high and the room is heating up, and open them again when it moves on. In winter it works the other way round: open them on a sunny day so the low sun warms the room, then close them at dusk to keep the heat in. I wrote about the dusk part in [the clocks go back](/en/insights/clocks-go-back/).
- **Brightness.** A small light sensor is more honest than the calendar. A grey afternoon in November needs no shading.
- **Wind.** For awnings and outdoor blinds, a wind sensor should always win over every other rule. Somfy's Soliris is one example of a combined sun and wind sensor.
- **Frost.** Many manufacturers advise against driving outdoor blinds and awnings when they are frozen. A rule that blocks movement below zero costs nothing and can save a motor. Check the manual for your model.
- **A cooldown.** Clouds pass quickly. Without a minimum time between moves, say twenty minutes, blinds flap up and down all afternoon, and that is the fastest way to make a family switch the automation off.
- **Manual wins.** If somebody presses the button, the automation steps back until the next day.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/04-weather-priorities-en.webp" alt="The rules matter more than the app: sun and brightness, wind protection first, frost, a cooldown between moves, and respect for manual control. Plan weather response, protection and physical controls together." width="1536" height="1024" loading="lazy" decoding="async">
  <figcaption>The rules matter more than the app. Plan weather response, protection and physical controls together.</figcaption>
</figure>

## Honest limits

**Blinds that matter for safety must not depend on the cloud.** In a fire, the blinds on an escape route should open. The Home Assistant notes on Somfy are clear that busy servers can delay commands on the cloud route, so a rule like that needs a local path, and a crank or chain as a last resort. Treat "open on smoke alarm" as an extra, not as the safety measure. The smoke detector itself has to work on its own, which I'll come back to in this series.

**Battery blinds need charging.** Aqara quotes up to two months per charge for its chain drive. That sounds long, until the day a blind refuses to move. A calendar reminder every few months is part of the system. Check too whether the blind can still be moved by hand when the battery is flat.

**Motor and blind must match.** A battery motor is made for certain blinds and tube sizes, so check that the two fit before you order. For odd windows, option two or three is often easier.

<figure class="blog-post__figure">
  <img src="/images/insights/smart-blinds/05-manual-control-battery.webp" alt="Keep everyday control simple: a wall button for control without an app, and a battery with a charging cable. Batteries are part of the system." width="1536" height="1024" loading="lazy" decoding="async">
  <figcaption>Keep everyday control simple. Plan physical controls and battery charging reminders.</figcaption>
</figure>

## How I'd start

1. **One window that annoys you most.** Often the south-facing living-room window or the bedroom.
2. **Pick the route from what hangs there.** New blind, a chain drive, or a relay for an existing motor.
3. **Add a wall button.** So nobody needs an app to lower a blind.
4. **Start with two rules.** Close at dusk, and shade when it gets hot. Add wind and frost for anything outdoors.

In a Konihaus home, blinds are driven through the Greenhub wherever the motor allows a local connection, so the rules keep running when the internet is down. Where a motor insists on the cloud, I tell you that before you buy.

The next post covers sensors: the small devices that tell your home what is going on, and the two or three worth placing first. If you don't want to miss it, sign up for the Konihaus Blog newsletter below.

---

**Thinking about smart blinds for your home?** [Talk to Koni](https://konihaus.ch/#contact). The first conversation is free, with no obligation.
