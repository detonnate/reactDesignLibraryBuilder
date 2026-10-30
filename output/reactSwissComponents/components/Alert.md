# Alert


Source: `src/components/feedback.tsx`

## Variants

### Default

![Alert Default](../screenshots/Alert/00-default.png)

```tsx
<Alert title="Sample title" description="Sample content" />
```

### variant: success

![Alert variant: success](../screenshots/Alert/01-variant-success.png)

```tsx
<Alert title="Sample title" description="Sample content" variant="success" />
```

### variant: warning

![Alert variant: warning](../screenshots/Alert/02-variant-warning.png)

```tsx
<Alert title="Sample title" description="Sample content" variant="warning" />
```

### variant: info

![Alert variant: info](../screenshots/Alert/03-variant-info.png)

```tsx
<Alert title="Sample title" description="Sample content" variant="info" />
```

### variant: error

![Alert variant: error](../screenshots/Alert/04-variant-error.png)

```tsx
<Alert title="Sample title" description="Sample content" variant="error" />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `variant` | `"success" \| "warning" \| "info" \| "error" \| undefined` |  | 'info' |  |
| `title` | `string \| undefined` |  |  |  |
| `description` | `React.ReactNode` |  |  |  |
| `actions` | `React.ReactNode` |  |  |  |
