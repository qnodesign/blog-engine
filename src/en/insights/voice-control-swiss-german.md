---
title: "Voice Control in Swiss German: An Honest Progress Report"
date: 2026-11-11
time: '09:00'
language: en
layout: blog-post.njk
permalink: /en/insights/voice-control-swiss-german/
permalinkalt: /de/insights/sprachsteuerung-schweizerdeutsch/
translationKey: swiss-german-voice
ogimage: swiss-german-voice/og.jpg
excerpt: "'Mach s Liecht im Wohnzimmer aa.' Can a smart home understand that, without sending your voice to the cloud? Where things stand today."
description: "Local voice control in Swiss German: what works today with Home Assistant, what dialect recognition still gets wrong, and why it all stays private."
seoTitle: "Voice Control in Swiss German: Where It Stands"
keyword: "voice control Swiss German"
category: technology
tags: [voice-control, swiss-german, local-first]
readingtime: 5 min read
related: [privacy-by-default, apple-homeview-switzerland]
author: Koni
---

"Mach s Liecht im Wohnzimmer aa." For most people in German-speaking Switzerland, that's simply how you'd say it. Not "Schalte das Licht im Wohnzimmer ein". The question is whether a smart home understands it, and whether it can do so without sending every word to a server somewhere.

Here is where things honestly stand, as of November 2026.

<figure class="blog-post__figure">
  <img src="/images/insights/swiss-german-voice/01-local-voice-evening.webp" alt="A person speaks toward a small voice device while the living-room lamp lights up." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Why Swiss German is hard for machines

Swiss German is spoken, not written. There is no standard spelling, every region sounds different, and "Chuchichäschtli" is not in anyone's dictionary. A speech recogniser therefore has to do two things at once: understand the dialect, and write it down as Standard German text that the system can act on. That's a translation task as much as a listening one.

The numbers show how hard that is. According to a Swiss AI company that published a fine-tuned model in May 2026, the well-known open speech recogniser Whisper gets roughly one word in four wrong when it hears Swiss German without special training (about 26% word error rate). Their model, trained on recordings from the Swiss parliament, roughly halves that, to about 13%. But they say themselves that it works best on formal speech and worse on spontaneous everyday speech, noisy rooms, and dialects other than Bernese.

## What works today, locally

Home Assistant can process voice entirely on your own hardware, with no recordings leaving the house. It offers two ways of turning speech into text:

- **Speech-to-Phrase** only understands a fixed set of home commands, but it's very fast: under a second, even on a small Home Assistant Green.
- **Whisper** tries to understand everything, but needs much more computing power. On a small computer like a Raspberry Pi 4 an answer takes about eight seconds; on a faster mini-PC it's under a second.

Home Assistant's own documentation adds an honest warning: quality varies a lot from language to language, so check how it works in yours.

In practice, that means today:

- **Short commands work well**, especially when spoken somewhat towards Standard German: "Licht Wohnzimmer aus", "Storen runter", "Wie warm ist es im Schlafzimmer?"
- **Free dialect is still hit and miss.** A long sentence in broad Zürichdeutsch or Walliserdeutsch is not yet reliably understood by a local system.
- **The answer** comes back in Standard German, spoken by a local voice.

<figure class="blog-post__figure">
  <img src="/images/insights/swiss-german-voice/02-dialect-to-command.webp" alt="Different sound-wave bubbles connect to a local hub inside a house outline with a padlock." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Why I still think it's worth it

The big voice assistants send your words to their servers. Even Apple's new Siri AI, which HomeView is built around, [speaks only English for now](/en/insights/apple-homeview-switzerland/). A local voice system is slower to mature, but what you say in your living room stays in your living room. I wrote more about that in [Your Home, Your Data](/en/insights/privacy-by-default/).

And it is improving quickly. New models are published every few months, and a system built on Home Assistant can adopt them without new hardware in most cases, as long as the hub has enough power.

## How I handle it at Konihaus

- **Voice is an option, never the only way.** Every light still has a switch, every scene a button, and everything is in the app.
- **We test with the people who live there.** How someone from Winterthur speaks is not how someone from Brig speaks. Before I promise anything, we try it in your home.
- **Short, clear commands first.** They work today, and they cover most of what people actually say to their home.
- **No guarantees on dialect.** If your grandmother speaks broad dialect and nothing else, I'll tell you honestly that buttons will serve her better for now.

<figure class="blog-post__figure">
  <img src="/images/insights/swiss-german-voice/03-choice-of-controls.webp" alt="An older couple uses a physical wall button and a voice device in their kitchen." width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Where it's heading

Swiss German voice control that understands everyone, locally and quickly, isn't here yet. But the gap is closing every year. I follow the development closely and add what works, so your home learns to understand you a little better over time.

---

**Would you like to try it in your own home?** [Talk to Koni](https://konihaus.ch/#contact). The first conversation is free, with no obligation.
