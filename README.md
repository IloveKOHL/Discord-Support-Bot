# 🎮 Discord Support Bot

Ein einfacher Discord-Bot mit `discord.js`, der automatisch Support-Channels erstellt, wenn Nutzer einem bestimmten Channel beitreten. Ideal für Server mit Support-System.

---

## ⚙️ Funktionen

- Erstellt automatisch einen privaten Support-Channel in einer definierten Kategorie.
- Nur der Nutzer und die Support-Rolle haben Zugriff auf den Channel.
- `@everyone` hat keinen Zugriff.
- Sobald alle den Channel verlassen haben, wird er automatisch gelöscht.

---

## 🛠️ Setup-Anleitung

### Schritt 1: Repository klonen

```bash
git clone https://github.com/dein-nutzername/discord-support-bot.git
cd discord-support-bot
```

### Schritt 2: Abhängigkeiten installieren

```bash
npm install
```

### Schritt 3: `.env` Datei erstellen

```env
BOT_TOKEN=DEIN_DISCORD_BOT_TOKEN
SUPPORT_CHANNEL_ID=ID_DES_SUPPORT_CHANNELS
SUPPORT_CATEGORY_ID=ID_DER_SUPPORT_KATEGORIE
SUPPORT_ROLE_ID=ID_DER_SUPPORT_ROLLE

```

### Schritt 4: Bot starten

```bash
npx ts-node src/index.ts
```

### Schritt 5: Bot zu Discord hinzufügen

Erstelle eine Anwendung auf [discord.com/developers](https://discord.com/developers) und verwende den OAuth2-URL-Generator, um den Bot auf deinen Server einzuladen.

**Empfohlene Berechtigungen:**

- Nachrichten lesen und schreiben  
- Channels verwalten  
- Mitglieder sehen  
- Berechtigungen verwalten
