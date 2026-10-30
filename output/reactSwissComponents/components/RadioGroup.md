# RadioGroup


Source: `src/components/forms.tsx`

## Variants

### Default

![RadioGroup Default](../screenshots/RadioGroup/00-default.png)

```tsx
<RadioGroup name="Sample text">Sample content</RadioGroup>
```

### orientation: vertical

![RadioGroup orientation: vertical](../screenshots/RadioGroup/01-orientation-vertical.png)

```tsx
<RadioGroup name="Sample text" orientation="vertical">Sample content</RadioGroup>
```

### orientation: horizontal

![RadioGroup orientation: horizontal](../screenshots/RadioGroup/02-orientation-horizontal.png)

```tsx
<RadioGroup name="Sample text" orientation="horizontal">Sample content</RadioGroup>
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `name` | `string \| undefined` |  |  |  |
| `value` | `string \| undefined` |  |  |  |
| `defaultValue` | `string \| undefined` |  |  |  |
| `onChange` | `((v: string) => void) \| undefined` |  |  |  |
| `orientation` | `"vertical" \| "horizontal" \| undefined` |  | 'vertical' |  |
| `legend` | `string \| undefined` |  |  |  |
| `children` | `React.ReactNode` | yes |  |  |
