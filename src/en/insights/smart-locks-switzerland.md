---
title: "Smart Locks and Doors: The Front Door's Three Jobs"
date: 2026-11-06
time: '09:00'
language: en
layout: blog-post.njk
permalink: /en/insights/smart-locks-switzerland/
permalinkalt: /de/insights/smarte-tuerschloesser-schweiz/
translationKey: smart-locks
ogimage: smart-locks/og.jpg
excerpt: "The front door has three jobs: let the right people in, tell you whether it is closed, and tell you who is there. What smart locks do well in Switzerland, what you can buy, and where the honest gaps are."
description: "Smart lock in Switzerland: Nuki and Aqara, Matter over Thread, time-limited codes for the cleaner or a nurse, and what still needs the cloud."
seoTitle: "Smart Locks Switzerland: Doors and Access Codes"
keyword: "smart lock Switzerland"
category: safety
series: "The parts of a smart home"
tags: [locks, doors, nuki, matter]
readingtime: 7 min read
related: [smart-home-sensors, smart-home-for-renters, no-vendor-lock-in]
author: Koni
---

The front door has three jobs. It lets the right people in, it tells you whether it is closed, and it tells you who is standing outside. A smart home can help with all three, and each one is a different device: a lock, a door contact and a doorbell.

This is the fifth post in the series on the parts of a smart home, after [smart lights](/en/insights/smart-lights-switzerland/), [blinds](/en/insights/smart-blinds-switzerland/), [sensors](/en/insights/smart-home-sensors/) and [heating](/en/insights/smart-heating-switzerland/). Same questions as before: what does it do for you, what should you check before buying, and where are the honest limits. This post covers the lock and the contact. The doorbell and the question of who is outside deserve a post of their own later this month.

## Job one: let the right people in

The best part of a smart lock is not opening the door with your phone. It is that you can give somebody access without handing over a key.

- **A time-limited code for the cleaner**, valid on Thursday mornings only.
- **A code for the neighbour** who waters the plants while you are away, which you switch off when you are back.
- **Access for a care visit**, such as a Spitex nurse, which you can see in the log and end when it is no longer needed.
- **Family without keys.** Children and guests don't lose a code the way they lose a key.
- **Auto-unlock** as you arrive, if you want it, and locking again when you leave.

None of that needs a locksmith, and none of it leaves a copied key in somebody's drawer.

## Job two: is it closed?

A lock knows whether the bolt is thrown. It does not know whether the door is shut. A door contact, the small sensor from the [sensors post](/en/insights/smart-home-sensors/), closes that gap. Together they answer the question we all ask in the car: did I lock the door? A good evening check then reads: "The front door is closed but not locked", or "still open", and sends a message, or locks it for you.

## What you can buy in Switzerland

Prices as of 29 October 2026. They change and stock varies, so treat them as a guide.

**Nuki** is a well-known name here. Digitec lists the Smart Lock Pro (4th generation) in a CH-cylinder version. Price and availability vary, so check before you order. It supports Matter, has an integrated Wi-Fi module, auto-unlock, up to 200 individual access rights and an entry log, and installs without screws or drilling. Home Assistant's own team tested and certified three Nuki locks in July 2025: the Smart Lock Go, the Pro and the Ultra. They connect over Matter over Thread, work locally, and need no cloud account. The Nuki app is needed for setup, and remote access later needs either the Nuki app or Home Assistant Cloud.

**Aqara** sells the Smart Lock U200 at EUR 189.99 in its EU store. It has fingerprint, PIN (including temporary guest passwords), NFC cards and Apple Home Key, and speaks Thread, Bluetooth and Matter over Thread. Aqara states that the lock needs its M3 hub. It is specified for Euro profile cylinders, not Swiss ones, so check compatibility with your cylinder before you buy.

## One thing to check before anything else: does your cylinder fit?

Swiss cylinders are not always the same as the European ones. Before you buy any lock, check the cylinder type, whether it has an emergency function (it can be opened with a key from outside even when a key sits in the lock on the inside), and, if you rent, whether you may change it at all. Ask your landlord or property manager first.

## Honest limits

**The lock must never trap you.** The door must always open from the inside, with a handle or a turn, whatever the power, the network or the app does. And the fire exit rule is simple: no smart lock is a reason to make leaving harder.

**Keypad codes and the cloud.** This is a real gap. Managing a Nuki keypad's codes from Home Assistant, locally, is not available yet. A request on Nuki's developer forum from March 2026 asks for exactly that, over the local interface or MQTT. Until it is there, creating or removing a time-limited code goes through Nuki's own app or its cloud. The lock itself works locally. The code management does not. If time-limited codes are your main reason to buy, ask how they are managed before you decide.

**Batteries again.** Aqara quotes up to six months on its rechargeable pack at about eight unlocks a day. Nuki's Go uses four AA batteries. Whichever you choose, plan a low-battery warning, and keep a mechanical key somewhere safe.

**Don't rely on the phone alone.** A flat phone shouldn't mean a locked-out family. A code, a fingerprint or a key should always work as well.

**It isn't a burglar alarm.** A smart lock is as strong as the door and the cylinder it sits on. It adds convenience and a log, not a stronger door.

## How I'd start

1. **Start with the door contact.** It costs little, and "is the front door closed?" is the question you already ask.
2. **Add the lock** once you know your cylinder fits, and your landlord agrees if you rent.
3. **Create one time-limited code** for a real situation, such as the cleaner, and see how it feels.
4. **Test the bad cases.** Flat battery, no internet, no phone. Make sure there is always a way in.

In a Konihaus home, the lock and the door contact report to the Greenhub, locally, and the evening check "is the door still open?" runs without the internet. Where code management still needs the lock maker's cloud, I tell you that before you buy. If you don't want to miss the next posts in the series, sign up for the Konihaus Blog newsletter below.

---

**Thinking about a smart lock for your home?** [Talk to Koni](https://konihaus.ch/#contact). The first conversation is free, with no obligation.
