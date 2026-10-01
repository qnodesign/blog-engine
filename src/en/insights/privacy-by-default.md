---
title: Privacy by Default
date: 2026-10-05
time: '10:00'
language: en
tags: privacy, architecture, security
layout: blog-post.njk
permalink: /en/insights/privacy-by-default/
permalinkalt: /de/insights/datenschutz-by-default/
ogimage: privacy/og.jpg
excerpt: How Konihaus keeps your data local, secure, and under your control.
readingtime: 4 min read
related: []
author: Koni
---

## Your Data Stays at Home

Google Home and Amazon Alexa are only the most obvious examples. A typical smart home may also include Philips Hue or IKEA lights, tado° thermostats, Somfy shades, Tuya devices, and products from several other manufacturers. Each ecosystem comes with its own app and account. Some apps are simple; others offer polished dashboards, themes, routines, and a long list of functions.

That convenience can come with a less visible cost: more vendor clouds, more external accounts, and more information about your home being processed outside it. With cloud-based voice assistants, commands, routines, and preferences are sent to remote servers. Other products differ in how much they can do locally, but many still rely on a manufacturer’s service for setup, control, notifications, or advanced features. You are not only choosing functions. You are also choosing who your home depends on and where its data may go.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/data-stays-home.webp" alt="A locally connected smart home keeps its device data inside the home" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Konihaus takes a local-first approach. Automations, device coordination, and the history needed to run your home are processed on hardware *in your home*. We select and configure devices for local communication wherever possible and clearly identify any optional feature that requires an external service. Your smart home does not need to report every action to a remote server simply to switch on a light, lower a shade, or adjust the heating.

## How It Works

Your Konihaus system runs on a **Home Assistant instance** (a lightweight Linux computer, typically a Raspberry Pi or small NUC) installed in your home. All the logic—automations, device coordination, scenes—lives there.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/local-smart-home-hub.webp" alt="A local smart home hub coordinates lights, heating, shades, and sensors" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

**Local-first data flow:**
- Your Zigbee devices talk directly to the local hub
- Z-Wave devices stay local
- WiFi devices communicate locally when supported
- Konihaus does not collect your behavioral data

If you choose a device or service that requires its manufacturer’s cloud, that connection is treated as an explicit exception rather than the foundation of the system.

## What This Means Practically

**No data harvesting.** Konihaus has no incentive to collect behavioral data. We don't monetize your attention or sell insights about your living patterns.

**Less dependence on external services.** Core automations continue to run at home, even if an internet service is unavailable. Cloud-dependent optional features remain subject to their provider.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/local-resilience.webp" alt="Lights, shades, and heating continue working through local automation" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

**Less lock-in.** You can access your own data directly. Konihaus brings devices from established standards and ecosystems—such as Zigbee, Z-Wave, Matter, and WiFi—into one system, subject to each device's actual capabilities.

**Faster response times.** Local processing avoids a trip to a distant server when you turn on a light or adjust the thermostat.

## Remote Access: Secure and Optional

Want to check on your home while traveling? Konihaus supports a private VPN connection—encrypted end-to-end, using protocols such as WireGuard or OpenVPN. You control the credentials and decide when to use it.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/secure-remote-access.webp" alt="A traveler securely connects to their home through a private remote connection" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

This is fundamentally different from making a vendor cloud the default route into your home. With Konihaus, *you* decide whether to enable remote access. Your local automations do not depend on it.

## Voice Control Can Stay Local Too

Voice control does not automatically have to mean sending recordings to a large cloud provider. Home Assistant Assist can run the entire voice pipeline on your own hardware: a microphone captures the command, a local speech-to-text engine turns it into text, Home Assistant carries out the action, and a local text-to-speech engine speaks the response. The spoken command can remain inside your home throughout the process.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/local-voice-control.webp" alt="A microphone, local computer, and lamp form a private voice-control pipeline" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

There is a tradeoff. A focused engine such as Speech-to-Phrase is fast, even on modest hardware, but understands a more limited set of home-control commands. Whisper is more flexible and can transcribe open-ended speech, but it needs more processing power for a quick response. Piper provides the spoken reply locally. Language support and recognition quality also vary, so the system needs to be selected, configured, and tested for the people who will use it.

The setup may look more complex than activating a mainstream cloud assistant, and it does require additional hardware and careful configuration. For someone who is highly conscious of privacy, however, the work has a clear benefit: voice control without routinely sending the household's spoken commands to an external service. Konihaus can help assess the hardware, configure the local pipeline, and tune it for practical everyday commands.

[Learn how Home Assistant runs a fully local voice assistant](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/).

## Why We Built It This Way

Privacy isn't a feature we added. It's the foundation. A truly personal smart home shouldn't require trusting a corporation with intimate details of your daily life—what time you wake, when you leave, whether you're home.

<figure class="blog-post__figure">
  <img src="/images/insights/privacy/privacy-foundation.webp" alt="A private, locally controlled home at dusk in the Swiss landscape" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

Local-first architecture reduces that exposure by design. You can still choose connected services when they provide real value, but the basic operation of your home remains in your hands.

---
 
**Thinking about your own home?** [Talk to Koni](https://konihaus.ch/#contact) about what would actually make a difference in yours — no obligation, no sales pitch.
 
