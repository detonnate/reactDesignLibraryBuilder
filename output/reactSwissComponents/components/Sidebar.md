# Sidebar


Source: `src/components/navigation.tsx`

## Variants

### Default

![Sidebar Default](../screenshots/Sidebar/00-default.png)

```tsx
<Sidebar sections={[{"links":[{},{},{}]},{"links":[{},{},{}]},{"links":[{},{},{}]}]} />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `sections` | `{ title?: string; links: NavLink[]; }[]` | yes |  |  |
| `footer` | `React.ReactNode` |  |  |  |
