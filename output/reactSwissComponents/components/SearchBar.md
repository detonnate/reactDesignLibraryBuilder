# SearchBar


Source: `src/components/forms.tsx`

## Variants

### Default

![SearchBar Default](../screenshots/SearchBar/00-default.png)

```tsx
<SearchBar />
```

### size: sm

![SearchBar size: sm](../screenshots/SearchBar/01-size-sm.png)

```tsx
<SearchBar size="sm" />
```

### size: md

![SearchBar size: md](../screenshots/SearchBar/02-size-md.png)

```tsx
<SearchBar size="md" />
```

### size: lg

![SearchBar size: lg](../screenshots/SearchBar/03-size-lg.png)

```tsx
<SearchBar size="lg" />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `value` | `string \| undefined` |  |  |  |
| `onSearch` | `((q: string) => void) \| undefined` |  |  |  |
| `placeholder` | `string \| undefined` |  | 'Search…' |  |
| `size` | `Size \| undefined` |  | 'md' |  |
