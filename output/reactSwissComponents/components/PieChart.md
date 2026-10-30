# PieChart


Source: `src/components/charts.tsx`

## Variants

### Default

![PieChart Default](../screenshots/PieChart/00-default.png)

```tsx
<PieChart data={[{"name":"Sample text","value":60},{"name":"Sample text","value":60},{"name":"Sample text","value":60}]} />
```

### donut

![PieChart donut](../screenshots/PieChart/01-donut.png)

```tsx
<PieChart data={[{"name":"Sample text","value":60},{"name":"Sample text","value":60},{"name":"Sample text","value":60}]} donut />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `data` | `Slice[]` | yes |  |  |
| `donut` | `boolean \| undefined` |  |  |  |
| `title` | `string \| undefined` |  | 'Pie chart' |  |
| `centerLabel` | `string \| undefined` |  |  |  |
