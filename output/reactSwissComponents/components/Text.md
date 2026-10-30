# Text


Source: `src/components/layout.tsx`

## Variants

### Default

![Text Default](../screenshots/Text/00-default.png)

```tsx
<Text />
```

### size: sm

![Text size: sm](../screenshots/Text/01-size-sm.png)

```tsx
<Text size="sm" />
```

### size: md

![Text size: md](../screenshots/Text/02-size-md.png)

```tsx
<Text size="md" />
```

### size: lg

![Text size: lg](../screenshots/Text/03-size-lg.png)

```tsx
<Text size="lg" />
```

### size: xs

![Text size: xs](../screenshots/Text/04-size-xs.png)

```tsx
<Text size="xs" />
```

### size: xl

![Text size: xl](../screenshots/Text/05-size-xl.png)

```tsx
<Text size="xl" />
```

### weight: regular

![Text weight: regular](../screenshots/Text/06-weight-regular.png)

```tsx
<Text weight="regular" />
```

### weight: medium

![Text weight: medium](../screenshots/Text/07-weight-medium.png)

```tsx
<Text weight="medium" />
```

### weight: bold

![Text weight: bold](../screenshots/Text/08-weight-bold.png)

```tsx
<Text weight="bold" />
```

### align: left

![Text align: left](../screenshots/Text/09-align-left.png)

```tsx
<Text align="left" />
```

### align: right

![Text align: right](../screenshots/Text/10-align-right.png)

```tsx
<Text align="right" />
```

### align: center

![Text align: center](../screenshots/Text/11-align-center.png)

```tsx
<Text align="center" />
```

### truncate

![Text truncate](../screenshots/Text/12-truncate.png)

```tsx
<Text truncate />
```

### muted

![Text muted](../screenshots/Text/13-muted.png)

```tsx
<Text muted />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `as` | `React.ElementType<any, keyof React.JSX.IntrinsicElements> \| undefined` |  | 'p' |  |
| `size` | `"sm" \| "md" \| "lg" \| "xs" \| "xl" \| undefined` |  | 'md' |  |
| `weight` | `"regular" \| "medium" \| "bold" \| undefined` |  | 'regular' |  |
| `align` | `"left" \| "right" \| "center" \| undefined` |  |  |  |
| `truncate` | `boolean \| undefined` |  |  |  |
| `muted` | `boolean \| undefined` |  |  |  |
