# Pagination


Source: `src/components/navigation.tsx`

## Variants

### Default

![Pagination Default](../screenshots/Pagination/00-default.png)

```tsx
<Pagination page={3} pageCount={3} onChange={() => {}} />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `page` | `number` | yes |  |  |
| `pageCount` | `number` | yes |  |  |
| `onChange` | `(p: number) => void` | yes |  |  |
| `siblings` | `number \| undefined` |  | 1 |  |
