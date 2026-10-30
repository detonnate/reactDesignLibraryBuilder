# Stack


Source: `src/components/layout.tsx`

## Variants

### Default

![Stack Default](../screenshots/Stack/00-default.png)

```tsx
<Stack />
```

### direction: column

![Stack direction: column](../screenshots/Stack/01-direction-column.png)

```tsx
<Stack direction="column" />
```

### direction: row

![Stack direction: row](../screenshots/Stack/02-direction-row.png)

```tsx
<Stack direction="row" />
```

### wrap

![Stack wrap](../screenshots/Stack/03-wrap.png)

```tsx
<Stack wrap />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `gap` | `Gap \| undefined` |  | 4 |  |
| `direction` | `"column" \| "row" \| undefined` |  | 'column' |  |
| `align` | `Property.AlignItems \| undefined` |  |  |  |
| `justify` | `Property.JustifyContent \| undefined` |  |  |  |
| `wrap` | `boolean \| undefined` |  |  |  |
