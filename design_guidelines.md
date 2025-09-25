# Tetris Game Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from classic arcade games and modern puzzle games like Tetris Effect and Puyo Puyo Tetris, emphasizing retro gaming aesthetics with contemporary polish.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary** (matching retro arcade aesthetic):
- Background: 220 25% 8% (deep dark blue-gray)
- Game board border: 240 100% 85% (bright white)
- UI text: 240 100% 95% (near white)
- Score/info panels: 220 20% 15% (dark charcoal)

**Tetris Piece Colors** (classic vibrant scheme):
- I-piece: 180 100% 50% (cyan)
- O-piece: 50 100% 50% (yellow) 
- T-piece: 280 100% 60% (purple)
- S-piece: 120 100% 40% (green)
- Z-piece: 0 100% 50% (red)
- J-piece: 220 100% 50% (blue)
- L-piece: 30 100% 50% (orange)

### B. Typography
- **Primary Font**: 'Orbitron' or 'Press Start 2P' (Google Fonts) for retro gaming feel
- **Fallback**: monospace system fonts
- **Sizes**: 24px for score, 16px for labels, 14px for instructions

### C. Layout System
- **Spacing Units**: Tailwind units of 2, 4, 8, 16 (p-2, m-4, gap-8, etc.)
- **Container**: Centered layout with max-width constraint
- **Game Board**: Fixed 240x400px canvas, prominently centered
- **Side Panels**: Compact score/next piece displays flanking the main board

### D. Component Library

**Game Board**:
- Canvas with subtle glow border effect
- Grid lines in dark gray (220 15% 25%)
- Smooth piece movement animations

**UI Panels**:
- Score display with retro LCD-style appearance
- Next piece preview with smaller grid
- Level/lines cleared counters
- Game over modal with semi-transparent dark overlay

**Controls Indicator**:
- Small, unobtrusive arrow key symbols
- Positioned below game board
- Subtle opacity to avoid distraction

### E. Visual Effects
- **Particle Effects**: Subtle sparkles when lines clear
- **Color Feedback**: Brief flash when lines are eliminated
- **Piece Landing**: Gentle shake/impact effect
- **Game Over**: Screen fade with retry button

## Key Design Principles
1. **Nostalgia**: Embrace classic Tetris visual language while remaining clean
2. **Focus**: Game board is the hero element - everything else supports it
3. **Readability**: High contrast ensures score/info is always visible
4. **Responsiveness**: Game remains playable on different screen sizes
5. **Performance**: Smooth 60fps gameplay with efficient rendering

## Accessibility Considerations
- High contrast ratios for all text elements
- Clear visual distinction between piece types
- Keyboard-only navigation support
- Game state announcements for screen readers

This retro-modern approach balances nostalgic gaming aesthetics with contemporary usability standards, creating an engaging and accessible Tetris experience.