# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Vipul Bondre, hosted on GitHub Pages. Plain HTML/CSS — no build tools, no dependencies, no JavaScript. Deploy by pushing to `main`.

## Design Principles

- **Minimalist**: Less is more. Avoid clutter, decorations, and unnecessary elements.
- **Readable**: Typography and spacing take priority. Content should breathe.
- **Organised**: Consistent structure across pages; everything has a clear place.

## Architecture

Three static pages (`index.html`, `projects.html`, `contact.html`) sharing one stylesheet (`css/style.css`).

Every page follows this identical shell:
```
nav > .container > logo + ul[nav links]
main > .container > [page content]
footer > .container
```

Styling is driven by CSS custom properties in `:root` — change the variables to retheme the whole site. Max content width is `720px` via `.container`.

## Key CSS Variables

```css
--bg: #ffffff
--text: #1a1a1a
--muted: #6b6b6b
--accent: #2563eb   /* links */
--border: #e5e5e5
--card-bg: #f9f9f9
```

## Conventions

- System font stack, no web fonts.
- Tags/badges use the `.tag` pattern (flex wrap, bordered pill).
- Project cards use `.project-card` — bordered, no shadows.
- Mobile breakpoint at `600px`; hero image stacks below text on small screens.
- No JavaScript. If interactivity is needed, consider whether it's truly necessary first.
