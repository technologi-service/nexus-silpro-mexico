---
name: vcs-domain
description: Knowledge base for the VCS (Valoración, Control y Segmentación) domain.
---

# VCS Domain Skill

This skill encapsulates the logic for "Valoración, Control y Segmentación" of clients.

## 🧠 Core Concepts

- **Segmentación**: Clients are categorized into segments based on Score (0-10 or 0-100).
- **Categorías Cognitivas**: Labels assigned to score ranges (e.g., "Elite", "Prometedor").
- **Variables de Peso**: Factors influencing the score (Volumen, Margen, Frecuencia, Recencia).

## 📂 Architecture

- **Domain**: `src/domain/vcs/`
  - `types.ts`: TypeScript interfaces (`Segmento`, `SegmentoUpdate`).
  - `validators.ts`: Pure logic for validating scores and input.
  
- **Infrastructure**: `src/infrastructure/repositories/`
  - (Planned) Repositories for data access.

- **UI**: `src/components/vcs/`
  - Components consuming domain types and validators.

## 🛠️ Common Tasks

### Validating a Score
Use `isValidScore(value: string)` from `src/domain/vcs/validators.ts`.

### Updating Segments
Use the API route `/api/update-segmentos` which expects `SegmentoUpdate[]`.

## 🚨 Rules
1. **Validation**: All scores must be between 0.00 and 9.99 (or 10.00 depending on config).
2. **Types**: Always use the defined interfaces in `domain/vcs/types.ts`.
