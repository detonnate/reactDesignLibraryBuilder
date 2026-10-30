# Button


Source: `src/components/forms.tsx`

## Variants

### Default

![Button Default](../screenshots/Button/00-default.png)

```tsx
<Button>Sample content</Button>
```

### variant: solid

![Button variant: solid](../screenshots/Button/01-variant-solid.png)

```tsx
<Button variant="solid">Sample content</Button>
```

### variant: outline

![Button variant: outline](../screenshots/Button/02-variant-outline.png)

```tsx
<Button variant="outline">Sample content</Button>
```

### variant: ghost

![Button variant: ghost](../screenshots/Button/03-variant-ghost.png)

```tsx
<Button variant="ghost">Sample content</Button>
```

### variant: dark

![Button variant: dark](../screenshots/Button/04-variant-dark.png)

```tsx
<Button variant="dark">Sample content</Button>
```

### size: sm

![Button size: sm](../screenshots/Button/05-size-sm.png)

```tsx
<Button size="sm">Sample content</Button>
```

### size: md

![Button size: md](../screenshots/Button/06-size-md.png)

```tsx
<Button size="md">Sample content</Button>
```

### size: lg

![Button size: lg](../screenshots/Button/07-size-lg.png)

```tsx
<Button size="lg">Sample content</Button>
```

### loading

![Button loading](../screenshots/Button/08-loading.png)

```tsx
<Button loading>Sample content</Button>
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `children` | `React.ReactNode` |  |  |  |
| `as` | `React.ElementType<any, keyof React.JSX.IntrinsicElements> \| undefined` |  | 'button' |  |
| `href` | `string \| undefined` |  |  |  |
| `variant` | `"solid" \| "outline" \| "ghost" \| "dark" \| undefined` |  | 'solid' |  |
| `size` | `Size \| undefined` |  | 'md' |  |
| `loading` | `boolean \| undefined` |  |  |  |
| `leftIcon` | `React.ReactNode` |  |  |  |
| `rightIcon` | `React.ReactNode` |  |  |  |
