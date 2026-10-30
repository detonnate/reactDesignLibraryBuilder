# Tabs


Source: `src/components/navigation.tsx`

## Variants

### Default

![Tabs Default](../screenshots/Tabs/00-default.png)

```tsx
<Tabs items={[{"id":"sample","label":"Sample label","content":"Sample content"},{"id":"sample","label":"Sample label","content":"Sample content"},{"id":"sample","label":"Sample label","content":"Sample content"}]} />
```

### orientation: vertical

![Tabs orientation: vertical](../screenshots/Tabs/01-orientation-vertical.png)

```tsx
<Tabs items={[{"id":"sample","label":"Sample label","content":"Sample content"},{"id":"sample","label":"Sample label","content":"Sample content"},{"id":"sample","label":"Sample label","content":"Sample content"}]} orientation="vertical" />
```

### orientation: horizontal

![Tabs orientation: horizontal](../screenshots/Tabs/02-orientation-horizontal.png)

```tsx
<Tabs items={[{"id":"sample","label":"Sample label","content":"Sample content"},{"id":"sample","label":"Sample label","content":"Sample content"},{"id":"sample","label":"Sample label","content":"Sample content"}]} orientation="horizontal" />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `items` | `TabItem[]` | yes |  |  |
| `value` | `string \| undefined` |  |  |  |
| `defaultValue` | `string \| undefined` |  |  |  |
| `onChange` | `((id: string) => void) \| undefined` |  |  |  |
| `orientation` | `"vertical" \| "horizontal" \| undefined` |  | 'horizontal' |  |
