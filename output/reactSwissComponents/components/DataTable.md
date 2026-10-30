# DataTable


Source: `src/components/table.tsx`

## Variants

### Default

![DataTable Default](../screenshots/DataTable/00-default.png)

```tsx
<DataTable columns={columns} rows={orders} rowKey={(r) => r.id} pageSize={5} />
```

### searchable

![DataTable searchable](../screenshots/DataTable/01-searchable.png)

```tsx
<DataTable columns={columns} rows={orders} rowKey={(r) => r.id} searchable />
```

### selectable

![DataTable selectable](../screenshots/DataTable/02-selectable.png)

```tsx
<DataTable columns={columns} rows={orders} rowKey={(r) => r.id} selectable />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `columns` | `Column<T>[]` | yes |  |  |
| `rows` | `T[]` | yes |  |  |
| `rowKey` | `(row: T) => string \| number` | yes |  |  |
| `pageSize` | `number \| undefined` |  | 8 |  |
| `searchable` | `boolean \| undefined` |  |  |  |
| `selectable` | `boolean \| undefined` |  |  |  |
| `striped` | `boolean \| undefined` |  | true |  |
| `caption` | `string \| undefined` |  |  |  |
