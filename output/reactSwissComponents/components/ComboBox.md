# ComboBox


Source: `src/components/forms.tsx`

## Variants

### Default

![ComboBox Default](../screenshots/ComboBox/00-default.png)

```tsx
<ComboBox options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} />
```

### searchable

![ComboBox searchable](../screenshots/ComboBox/01-searchable.png)

```tsx
<ComboBox options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} searchable />
```

### size: sm

![ComboBox size: sm](../screenshots/ComboBox/02-size-sm.png)

```tsx
<ComboBox options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} size="sm" />
```

### size: md

![ComboBox size: md](../screenshots/ComboBox/03-size-md.png)

```tsx
<ComboBox options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} size="md" />
```

### size: lg

![ComboBox size: lg](../screenshots/ComboBox/04-size-lg.png)

```tsx
<ComboBox options={[{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"},{"value":"Sample text","label":"Sample label"}]} size="lg" />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `options` | `Option[]` | yes |  |  |
| `value` | `string \| undefined` |  |  |  |
| `onChange` | `((v: string) => void) \| undefined` |  |  |  |
| `placeholder` | `string \| undefined` |  | 'Select…' |  |
| `searchable` | `boolean \| undefined` |  | true | false renders a button-style dropdown select instead of an editable combo. |
| `size` | `Size \| undefined` |  | 'md' |  |
