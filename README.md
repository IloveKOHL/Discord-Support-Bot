# 🎮 Discord Support Bot

Ein einfacher Discord-Bot mit `discord.js`, der automatisch Support-Channels erstellt, wenn Nutzer einem bestimmten Channel beitreten. Ideal für Server mit Support-System.

---

## ⚙️ Funktionen

- Erstellt automatisch einen privaten Support-Channel in einer definierten Kategorie.
- Nur der Nutzer und die Support-Rolle haben Zugriff auf den Channel.
- `@everyone` hat keinen Zugriff.
- Sobald alle den Channel verlassen haben, wird er automatisch gelöscht.

---

## 📦 .env Konfiguration

Lege eine `.env`-Datei im Root-Verzeichnis deines Projekts an mit folgendem Inhalt:

```env
BOT_TOKEN=TOKEN
SUPPORT_CHANNEL_ID=ID
SUPPORT_CATEGORY_ID=ID
SUPPORT_ROLE_ID=ID
