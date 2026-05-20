# Sistema de Reservas

Sistema de reservas de acomodações inspirado em plataformas como Airbnb, implementado com TypeScript e princípios de POO.

## Como rodar

```bash
npm install
npx tsc
node dist/index.js
```

## Arquitetura

O projeto é dividido em três camadas:

- **domain/** — Coração do sistema. Contém entidades (`House`, `Apartment`, `SharedRoom`, `Booking`), interfaces (`Accommodation`, `Fee`, `AccommodationRepository`) e serviços de domínio (`PricingService`). Não depende de nada externo.

- **application/** — Casos de uso que orquestram o domínio. `CreateBooking` recebe um input, busca a acomodação no repositório e cria a reserva aplicando as taxas.

- **infra/** — Implementações concretas. `InMemoryAccommodationRepository` implementa a interface do domínio sem banco de dados real.

## Decisões de modelagem

**Polimorfismo no cálculo de preço:** Cada tipo de acomodação implementa `calculatePrice()` de forma diferente. O restante do sistema só conhece a interface `Accommodation`, nunca o tipo concreto — sem `if/else` ou `switch`.

**Composição nas taxas:** `PricingService` recebe uma lista de `Fee` e as aplica em cadeia. Adicionar uma nova taxa não exige alterar nenhuma classe existente, só passar uma nova implementação de `Fee`.

**Separação de responsabilidades:** `Booking` delega o cálculo de preço para a acomodação e para o `PricingService`. Ela própria não contém regras de negócio — só coordena.

**Repositório como interface:** O caso de uso `CreateBooking` depende da interface `AccommodationRepository`, não da implementação em memória. Isso permite trocar por um repositório com banco de dados sem alterar nenhuma lógica de negócio.
