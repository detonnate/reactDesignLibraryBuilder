# Switch


Source: `src/components/forms.tsx`

## Variants

### Default

![Switch Default](../screenshots/Switch/00-default.png)

```tsx
<Switch label="Sample content" />
```

### checked

![Switch checked](../screenshots/Switch/01-checked.png)

```tsx
<Switch label="Sample content" checked />
```

### defaultChecked

![Switch defaultChecked](../screenshots/Switch/02-defaultchecked.png)

```tsx
<Switch label="Sample content" defaultChecked />
```

### disabled

![Switch disabled](../screenshots/Switch/03-disabled.png)

```tsx
<Switch label="Sample content" disabled />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `checked` | `boolean \| undefined` |  |  |  |
| `defaultChecked` | `boolean \| undefined` |  | false |  |
| `onChange` | `((v: boolean) => void) \| undefined` |  |  |  |
| `label` | `React.ReactNode` |  |  |  |
| `disabled` | `boolean \| undefined` |  |  |  |
