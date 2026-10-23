---
title: "Apple HomeView: Why It Isn't Coming Here, and What That Tells Us"
date: 2026-10-26
time: '10:00'
language: en
layout: blog-post.njk
permalink: /en/insights/apple-homeview-switzerland/
permalinkalt: /de/insights/apple-homeview-schweiz/
translationKey: apple-homeview
ogimage: apple-homeview/og.jpg
excerpt: "Apple's new smart display goes on sale in the US and the UK in November, but not in the EU, and there's no date for Switzerland. A calm look at why, and what it means for your home."
description: "Apple HomeView isn't sold in the EU and has no Swiss date. Why, what it means for your home, and how Home Assistant works with Apple Home."
seoTitle: "Apple HomeView in Switzerland: Not Yet. Why?"
keyword: "Apple HomeView Switzerland"
category: news
tags: [apple, smart-display, privacy]
readingtime: 5 min read
related: [privacy-by-default, no-vendor-lock-in]
author: Koni
---

On 13 October, Apple announced HomeView: a 7-inch screen on a small speaker base, made for the kitchen counter, the bedside table or, in a second version, the wall. It shows your calendar, plays music, makes FaceTime calls and walks you through a recipe step by step, with timers you start by voice. It controls lights, heating and door locks, shows up to nine camera feeds at once and recognises up to six people in a household, each with their own home screen. It works with Matter devices and can act as the hub for an Apple home on its own.

It costs 299 dollars in the US and 299 pounds in the UK, and goes on sale on 13 November in a first group of countries: the US, the UK, Canada, Australia, India and New Zealand.

It's a beautiful device. And for now, you can't buy it here.

<figure class="blog-post__figure">
  <img src="/images/insights/apple-homeview/display-in-window.webp" alt="A generic smart display behind a shop window with an unavailable symbol" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Why HomeView isn't available in Switzerland

Apple built HomeView around Siri AI, its new assistant. Siri AI isn't available on iPhones in the EU, so Apple says HomeView is "not available for sale in the European Union" for now, and that it's working with the EU on a way forward. According to 9to5Mac, this has to do with the EU's Digital Markets Act, which treats the iPhone's operating system differently from Apple's other platforms.

Switzerland isn't in the EU, but it isn't on the launch list either, and no Swiss date has been announced. Siri AI also speaks only English for now. Apple hasn't announced German, French or Italian, the languages most of us actually speak at home here.

## What it tells us

This isn't a story about Apple being bad. It's a story about where a device's features come from.

Many of HomeView's features don't live in the device on your counter. They depend on things outside your home: an account, a cloud service, a compatible iPhone (the full feature set needs one that supports Apple Intelligence), sometimes a subscription (some camera features need iCloud+), and decisions made by a company and by regulators far away. When any of those changes, your device changes, even though nothing in your living room did. More on this in [Will It Still Work in Ten Years?](/en/insights/future-proof/).

For a speaker, that's an inconvenience. For the thing that switches your heating or unlocks your front door, it's a question worth asking before you buy.

## One screen for the whole family. Do we need that?

HomeView's most interesting idea is that one screen serves the whole household. It recognises up to six people by face and voice. When you step up to it, it switches from the shared household view to your own: your apps, your calendar, your messages. Guests and anyone it doesn't recognise can still switch the lights, but they don't see anyone's personal content. Technically, that's impressive.

But it's worth asking how much we actually need it. Your personal content only appears when your own iPhone is nearby, on the same Wi-Fi and recently unlocked. So the phone is in your pocket anyway, and that's where most of us keep our private life: messages, chats with friends, our own calendar. I can't picture my kids chatting with their friends on the screen in the kitchen while the rest of the family walks past. Maybe that's different in American homes. Here, I think most people prefer their own device for their own things.

What a household really shares is smaller and more practical: the family calendar, the lights, the heating, who's home. Home Assistant handles that well today. It reads the shared family calendar, and when the holidays are in it, the home knows nobody's there and switches to away mode by itself: heating down, lights that make the home look lived-in, alerts on. Everyone can have their own dashboard on their own phone, and the tablet in the hallway shows a shared one for the whole family.

One open question for me is calls. Apple says you can answer your iPhone's calls on HomeView when the phone rings in another room. In what I've read, Apple doesn't say whether anyone standing at the screen can pick up your call, like the old house phone, or only you. For a family screen in the kitchen, that's a detail worth knowing before you buy.

<figure class="blog-post__figure">
  <img src="/images/insights/apple-homeview/family-shared-calendar.webp" alt="A family uses personal phones in the kitchen while a shared wall display shows the family calendar and home controls" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## Five questions for any smart home device

Whatever brand you're looking at, these are the questions I'd ask:

- **Does it work in my language today?** Not "soon", today.
- **What still works if the internet is down?** Lights, heating, the door?
- **What needs a subscription,** and what happens if I stop paying?
- **Can I add devices from other brands?** Open standards like Matter and Zigbee make that possible.
- **If the company changes its plans,** does my home keep running?

<figure class="blog-post__figure">
  <img src="/images/insights/apple-homeview/five-device-questions.webp" alt="Five connected symbols representing questions to ask before choosing a smart-home device" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## How a Konihaus home answers them

A Konihaus home runs on Home Assistant, on a small box in your home. Lights, heating and sensors keep working without the internet, because [your data stays at home](/en/insights/privacy-by-default/). It speaks German today, and English, French and Italian. Remote access is there when you want it, and switched off when you don't. Devices from many manufacturers work side by side, which is the point of my [post on vendor lock-in](/en/insights/no-vendor-lock-in/).

And you don't have to choose between the two worlds. Home Assistant can pass your devices to Apple Home, through its HomeKit or Matter bridge. Then you can say "Hey Siri, turn on the living room light" on your iPhone today, and on a HomeView if it ever comes here. Apple Home only shows the kinds of devices and functions it knows, so the full picture stays in Home Assistant. The difference is where the brain of the home sits: in your hallway, not in someone else's data centre.

If you'd like a screen on the wall now, the [Konihaus app](/en/insights/konihaus-app/) runs on a tablet. It's not as polished as a 299-dollar Apple device. But it works in Affoltern as well as in Ohio, and nobody far away can switch it off.

<figure class="blog-post__figure">
  <img src="/images/insights/apple-homeview/local-home-dashboard.webp" alt="An illustrative home dashboard and local hub in a welcoming hallway" width="1536" height="1024" loading="lazy" decoding="async">
</figure>

## And when HomeView does come?

If HomeView comes to Switzerland one day, in your language, then a Konihaus home will be able to show up on it, through the bridge. That's good news. A well-built home doesn't fight good devices. It just doesn't depend on any single one of them.

Keeping an eye on all this is part of my job. I follow new devices and developments as they come out, especially anything that makes a home more comfortable, more convenient, safer or simply nicer to live in. When something is worth it, I'll tell you. And when it isn't ready for Swiss homes yet, like HomeView today, I'll tell you that too.

---

**Wondering which of your devices would still work tomorrow without the cloud?** [Talk to Koni](https://konihaus.ch/#contact). The first conversation is free, with no obligation.
