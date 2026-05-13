# StickySplitSection

Компонент для создания двухколоночного макета с адаптивным дизайном, где все размеры вычисляются в VW (viewport width).

## Использование

### Базовый пример
```typescriptreact
<StickySplitSection 
  left={<Content />} 
  right={<Sidebar />} 
/>
```

### С передачей стилей из SCSS (рекомендуется)

**Component.tsx:**
```typescriptreact
import styles from "./Component.module.scss";
import { StickySplitSection } from "@repo/ui";

export function MyComponent() {
  return (
    <StickySplitSection 
      left={<Content />} 
      right={<Sidebar />}
      columnStyles={{
        left: {
          width: styles.leftColumnWidth,
          padding: styles.leftColumnPadding,
        },
        right: {
          width: styles.rightColumnWidth,
          padding: styles.rightColumnPadding,
        }
      }}
    />
  );
}
```

**Component.module.scss:**
```scss
@use "@repo/styles/index.scss" as *;

// Все размеры в VW - автоматически адаптируются
.leftColumnWidth {
  width: vw(600px, $media-desktop);
  
  @include mobile {
    width: vw(100%, $media-smartphone);
  }
}

.leftColumnPadding {
  padding: vw(32px, $media-desktop);
  
  @include mobile {
    padding: vw(16px, $media-smartphone);
  }
}

.rightColumnWidth {
  width: vw(320px, $media-desktop);
  
  @include mobile {
    width: vw(100%, $media-smartphone);
  }
}

.rightColumnPadding {
  padding: vw(24px, $media-desktop);
  
  @include mobile {
    padding: vw(12px, $media-smartphone);
  }
}
```

### С кастомными стилями контейнера
```typescriptreact
<StickySplitSection 
  left={<Content />} 
  right={<Sidebar />}
  customStyle={{
    backgroundColor: "#f5f5f5",
  }}
/>
```

## Props

- **`left`** (ReactNode) - Содержимое левой колонки
- **`right`** (ReactNode) - Содержимое правой колонки
- **`stickyOffset`** (string) - Смещение sticky позиции (по умолчанию `'var(--header-height)'`)
- **`stickySide`** ('left' | 'right' | 'none') - Какая сторона должна быть sticky (по умолчанию `'right'`)
- **`customStyle`** (CSSProperties) - Дополнительные стили для контейнера
- **`columnStyles`** - Стили для левой и правой колонок:
  ```typescript
  columnStyles={{
    left?: CSSProperties,
    right?: CSSProperties
  }}
  ```

## Базовые стили (из StickySplitSection.module.scss)

### На десктопе (≥768px)
- Колонки: `1fr + vw(420px)`
- Gap: `vw(48px, $media-desktop)` (~2.5vw)

### На мобильном (≤767px)
- Колонки: `1fr` (однополосный макет)
- Gap: `vw(24px, $media-smartphone)` (~3.13vw)

## Адаптивность

На мобильных устройствах (≤767px):
- Макет меняется на однополосный (flex column)
- Sticky позиция отключается
- Гап уменьшается автоматически

На десктопе (≥768px):
- Две независимые колонки с сеткой
- Выбранная сторона остается sticky при скролле
- Стандартный гап между колонками

## Миксины для VW вычислений

Используйте функцию `vw()` в SCSS для вычисления VW значений:

```scss
@use "@repo/styles/index.scss" as *;

// Вычисляет VW для десктопа
.element {
  width: vw(400px, $media-desktop);    // = calc(400 / 1920 * 100vw)
  padding: vw(24px, $media-desktop);   // = calc(24 / 1920 * 100vw)
}

// Вычисляет VW для мобилы
@include mobile {
  .element {
    width: vw(300px, $media-smartphone);  // = calc(300 / 767 * 100vw)
    padding: vw(16px, $media-smartphone); // = calc(16 / 767 * 100vw)
  }
}
```

