# Input


Source: `src/components/forms.tsx`

## Variants

### Default

![Input Default](../screenshots/Input/00-default.png)

```tsx
<Input />
```

### size: sm

![Input size: sm](../screenshots/Input/01-size-sm.png)

```tsx
<Input size="sm" />
```

### size: md

![Input size: md](../screenshots/Input/02-size-md.png)

```tsx
<Input size="md" />
```

### size: lg

![Input size: lg](../screenshots/Input/03-size-lg.png)

```tsx
<Input size="lg" />
```

### invalid

![Input invalid](../screenshots/Input/04-invalid.png)

```tsx
<Input invalid />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `size` | `Size \| undefined` |  | 'md' |  |
| `invalid` | `boolean \| undefined` |  |  |  |
| `leftAddon` | `React.ReactNode` |  |  |  |
| `rightAddon` | `React.ReactNode` |  |  |  |
| `describedBy` | `string \| undefined` |  |  |  |
