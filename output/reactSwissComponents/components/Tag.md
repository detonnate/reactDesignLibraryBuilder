# Tag


Source: `src/components/feedback.tsx`

## Variants

### Default

![Tag Default](../screenshots/Tag/00-default.png)

```tsx
<Tag>Sample content</Tag>
```

### selected

![Tag selected](../screenshots/Tag/01-selected.png)

```tsx
<Tag selected>Sample content</Tag>
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `children` | `React.ReactNode` | yes |  |  |
| `selected` | `boolean \| undefined` |  |  |  |
| `onClick` | `(() => void) \| undefined` |  |  |  |
| `onRemove` | `(() => void) \| undefined` |  |  |  |
