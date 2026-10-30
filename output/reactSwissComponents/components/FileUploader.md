# FileUploader


Source: `src/components/forms.tsx`

## Variants

### Default

![FileUploader Default](../screenshots/FileUploader/00-default.png)

```tsx
<FileUploader />
```

### multiple

![FileUploader multiple](../screenshots/FileUploader/01-multiple.png)

```tsx
<FileUploader multiple />
```

## Props

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `accept` | `string \| undefined` |  |  |  |
| `multiple` | `boolean \| undefined` |  | true |  |
| `onFiles` | `((files: File[]) => void) \| undefined` |  |  |  |
| `label` | `string \| undefined` |  | 'Drag and drop files here, or click to browse' |  |
| `initialFiles` | `{ name: string; size: number; }[] \| undefined` |  | [] | Pre-populate the list (useful for mocks). |
