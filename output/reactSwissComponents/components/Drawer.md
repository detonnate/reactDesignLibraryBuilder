# Drawer


Source: `src/components/containers.tsx`

## Variants

### Default

![Drawer Default](../screenshots/Drawer/00-default.png)

```tsx
<Drawer isOpen={false} onClose={() => {}} title="Sample title">Sample content</Drawer>
```

### isOpen

![Drawer isOpen](../screenshots/Drawer/01-isopen.png)

```tsx
<Drawer isOpen onClose={() => {}} title="Sample title">Sample content</Drawer>
```

### side: left

![Drawer side: left](../screenshots/Drawer/02-side-left.png)

```tsx
<Drawer isOpen={false} onClose={() => {}} title="Sample title" side="left">Sample content</Drawer>
```

### side: right

![Drawer side: right](../screenshots/Drawer/03-side-right.png)

```tsx
<Drawer isOpen={false} onClose={() => {}} title="Sample title" side="right">Sample content</Drawer>
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `isOpen` | `boolean` | yes |  |  |
| `onClose` | `() => void` | yes |  |  |
| `title` | `string` | yes |  |  |
| `side` | `"left" \| "right" \| undefined` |  | 'right' |  |
| `children` | `React.ReactNode` | yes |  |  |
