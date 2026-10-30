# Stepper


Source: `src/components/forms.tsx`

## Variants

### Default

![Stepper Default](../screenshots/Stepper/00-default.png)

```tsx
<Stepper />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `value` | `number \| undefined` |  |  |  |
| `defaultValue` | `number \| undefined` |  | 0 |  |
| `min` | `number \| undefined` |  | -Infinity |  |
| `max` | `number \| undefined` |  | Infinity |  |
| `step` | `number \| undefined` |  | 1 |  |
| `onChange` | `((v: number) => void) \| undefined` |  |  |  |
