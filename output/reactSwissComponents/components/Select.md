# Select


Source: `src/components/forms.tsx`

## Variants

### Default

![Select Default](../screenshots/Select/00-default.png)

```tsx
<Select placeholder="Sample text" options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} />
```

### size: sm

![Select size: sm](../screenshots/Select/01-size-sm.png)

```tsx
<Select placeholder="Sample text" options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} size="sm" />
```

### size: md

![Select size: md](../screenshots/Select/02-size-md.png)

```tsx
<Select placeholder="Sample text" options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} size="md" />
```

### size: lg

![Select size: lg](../screenshots/Select/03-size-lg.png)

```tsx
<Select placeholder="Sample text" options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} size="lg" />
```

### invalid

![Select invalid](../screenshots/Select/04-invalid.png)

```tsx
<Select placeholder="Sample text" options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} invalid />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `size` | `Size \| undefined` |  | 'md' |  |
| `invalid` | `boolean \| undefined` |  |  |  |
| `placeholder` | `string \| undefined` |  |  |  |
| `options` | `{ value: string; label: string; }[]` | yes |  |  |
