# Footer


Source: `src/components/navigation.tsx`

## Variants

### Default

![Footer Default](../screenshots/Footer/00-default.png)

```tsx
<Footer columns={[{"title":"Sample title","links":[{},{},{}]},{"title":"Sample title","links":[{},{},{}]},{"title":"Sample title","links":[{},{},{}]}]} legal="Sample content" />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `columns` | `{ title: string; links: NavLink[]; }[]` | yes |  |  |
| `legal` | `React.ReactNode` | yes |  |  |
