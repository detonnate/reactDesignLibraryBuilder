# Accordion


Source: `src/components/containers.tsx`

## Variants

### Default

![Accordion Default](../screenshots/Accordion/00-default.png)

```tsx
<Accordion items={[{"id":"sample","title":"Sample title","content":"Sample content"},{"id":"sample","title":"Sample title","content":"Sample content"},{"id":"sample","title":"Sample title","content":"Sample content"}]} />
```

### multiple

![Accordion multiple](../screenshots/Accordion/01-multiple.png)

```tsx
<Accordion items={[{"id":"sample","title":"Sample title","content":"Sample content"},{"id":"sample","title":"Sample title","content":"Sample content"},{"id":"sample","title":"Sample title","content":"Sample content"}]} multiple />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `items` | `{ id: string; title: string; content: React.ReactNode; }[]` | yes |  |  |
| `multiple` | `boolean \| undefined` |  | false |  |
| `defaultOpen` | `string[] \| undefined` |  | [] |  |
