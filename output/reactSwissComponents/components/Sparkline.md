# Sparkline


Source: `src/components/charts.tsx`

## Variants

### Default

![Sparkline Default](../screenshots/Sparkline/00-default.png)

```tsx
<Sparkline data={[3,3,3]} />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `data` | `number[]` | yes |  |  |
| `color` | `string \| undefined` |  | CHART_COLORS[0] |  |
| `width` | `number \| undefined` |  | 120 |  |
| `height` | `number \| undefined` |  | 32 |  |
