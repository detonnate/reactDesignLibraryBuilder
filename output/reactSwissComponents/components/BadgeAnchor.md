# BadgeAnchor

Wraps an element with a notification badge (count or dot).
Source: `src/components/feedback.tsx`

## Variants

### Default

![BadgeAnchor Default](../screenshots/BadgeAnchor/00-default.png)

```tsx
<BadgeAnchor>Sample content</BadgeAnchor>
```

### dot

![BadgeAnchor dot](../screenshots/BadgeAnchor/01-dot.png)

```tsx
<BadgeAnchor dot>Sample content</BadgeAnchor>
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `children` | `React.ReactNode` |  |  |  |
| `dot` | `boolean \| undefined` |  |  |  |
| `count` | `number \| undefined` |  |  |  |
