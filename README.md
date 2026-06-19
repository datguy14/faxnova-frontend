# faxnova-frontend
Frontend for FaxNova — React + Vite dashboard, Operator Console, and admin UI.
Endpoint

Description

GET /fax/outbound

List outbound fax jobs

GET /fax/inbound

List inbound fax jobs

GET /fax/logs

Audit log stream

Authorization Header

API key required

🧩 Architecture Overview

The FaxNova system is split into two clean repos:

1. faxnova-backend

Node/Express API for fax delivery, provider routing, residency enforcement, and webhooks.

2. faxnova-frontend (this repo)

React dashboard for operators and admins.

This separation keeps the codebase clean, modular, and easy for buyers to extend.

📸 Screenshots (Optional for Acquire Listing)

You can add screenshots here:

Dashboard layout

Outbound fax table

Inbound fax table

Audit log viewer

📄 License

MIT License — free for commercial and private use.

🤝 Contributing

This project is intentionally lightweight and minimal.Pull requests are welcome for UI improvements, bug fixes, or new dashboard modules.

🧠 About FaxNova

FaxNova is designed as a modern replacement for legacy fax APIs — lightweight, fast, and residency‑aware.This dashboard provides visibility into the entire fax lifecycle, making it ideal for:

Operators

Admins

Support teams

Buyers evaluating the platform
