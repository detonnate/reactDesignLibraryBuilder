# reactSwissComponents component catalogue

Source: https://github.com/detonnate/reactSwissComponents  
58 components, 148 screenshots.

## Contents

- **charts**: [BarChart](#barchart), [Gauge](#gauge), [LineChart](#linechart), [PieChart](#piechart), [ScatterChart](#scatterchart), [Sparkline](#sparkline)
- **containers**: [Accordion](#accordion), [Carousel](#carousel), [Drawer](#drawer), [Dropdown](#dropdown), [Modal](#modal), [Tooltip](#tooltip)
- **feedback**: [Alert](#alert), [Badge](#badge), [BadgeAnchor](#badgeanchor), [Progress](#progress), [Skeleton](#skeleton), [Spinner](#spinner), [Steps](#steps), [Tag](#tag), [ToastProvider](#toastprovider)
- **forms**: [Button](#button), [Checkbox](#checkbox), [ComboBox](#combobox), [DatePicker](#datepicker), [Field](#field), [FileUploader](#fileuploader), [Input](#input), [Radio](#radio), [RadioGroup](#radiogroup), [SearchBar](#searchbar), [Select](#select), [Slider](#slider), [Stepper](#stepper), [Switch](#switch), [Textarea](#textarea)
- **layout**: [Box](#box), [Card](#card), [Container](#container), [Grid](#grid), [GridItem](#griditem), [Heading](#heading), [Stack](#stack), [Text](#text)
- **navigation**: [Breadcrumbs](#breadcrumbs), [Footer](#footer), [Navbar](#navbar), [Pagination](#pagination), [Sidebar](#sidebar), [Tabs](#tabs)
- **sections**: [Avatar](#avatar), [Feed](#feed), [FormContainer](#formcontainer), [Hero](#hero), [LogoStrip](#logostrip), [Testimonial](#testimonial), [VideoPlayer](#videoplayer)
- **table**: [DataTable](#datatable)

## charts

### BarChart

`src/components/charts.tsx`

Props: `series*`, `labels*`, `stacked`, `title`

**Default**

![BarChart - Default](screenshots/BarChart/00-default.png)

**stacked**

![BarChart - stacked](screenshots/BarChart/01-stacked.png)

[Full docs](components/BarChart.md)

### Gauge

`src/components/charts.tsx`

Props: `value*`, `max`, `label`

**Default**

![Gauge - Default](screenshots/Gauge/00-default.png)

[Full docs](components/Gauge.md)

### LineChart

`src/components/charts.tsx`

Props: `series*`, `labels*`, `area`, `title`

**Default**

![LineChart - Default](screenshots/LineChart/00-default.png)

**area**

![LineChart - area](screenshots/LineChart/01-area.png)

[Full docs](components/LineChart.md)

### PieChart

`src/components/charts.tsx`

Props: `data*`, `donut`, `title`, `centerLabel`

**Default**

![PieChart - Default](screenshots/PieChart/00-default.png)

**donut**

![PieChart - donut](screenshots/PieChart/01-donut.png)

[Full docs](components/PieChart.md)

### ScatterChart

`src/components/charts.tsx`

Props: `series*`, `title`

**Default**

![ScatterChart - Default](screenshots/ScatterChart/00-default.png)

[Full docs](components/ScatterChart.md)

### Sparkline

`src/components/charts.tsx`

Props: `data*`, `color`, `width`, `height`

**Default**

![Sparkline - Default](screenshots/Sparkline/00-default.png)

[Full docs](components/Sparkline.md)

## containers

### Accordion

`src/components/containers.tsx`

Props: `items*`, `multiple`, `defaultOpen`

**Default**

![Accordion - Default](screenshots/Accordion/00-default.png)

**multiple**

![Accordion - multiple](screenshots/Accordion/01-multiple.png)

[Full docs](components/Accordion.md)

### Carousel

`src/components/containers.tsx`

Props: `slides*`, `autoPlayMs`, `label`

**Default**

![Carousel - Default](screenshots/Carousel/00-default.png)

[Full docs](components/Carousel.md)

### Drawer

`src/components/containers.tsx`

Props: `isOpen*`, `onClose*`, `title*`, `side`, `children*`

**Default**

![Drawer - Default](screenshots/Drawer/00-default.png)

**isOpen**

![Drawer - isOpen](screenshots/Drawer/01-isopen.png)

**side: left**

![Drawer - side: left](screenshots/Drawer/02-side-left.png)

**side: right**

![Drawer - side: right](screenshots/Drawer/03-side-right.png)

[Full docs](components/Drawer.md)

### Dropdown

`src/components/containers.tsx`

Props: `label*`, `entries*`, `onOpenChange`

**Default**

![Dropdown - Default](screenshots/Dropdown/00-default.png)

[Full docs](components/Dropdown.md)

### Modal

`src/components/containers.tsx`

Props: `isOpen*`, `onClose*`, `title*`, `children*`, `footer`

**Default**

![Modal - Default](screenshots/Modal/00-default.png)

**isOpen**

![Modal - isOpen](screenshots/Modal/01-isopen.png)

[Full docs](components/Modal.md)

### Tooltip

`src/components/containers.tsx`

Props: `content*`, `children*`, `delay`

**Default**

![Tooltip - Default](screenshots/Tooltip/00-default.png)

[Full docs](components/Tooltip.md)

## feedback

### Alert

`src/components/feedback.tsx`

Props: `variant`, `title`, `description`, `actions`

**Default**

![Alert - Default](screenshots/Alert/00-default.png)

**variant: success**

![Alert - variant: success](screenshots/Alert/01-variant-success.png)

**variant: warning**

![Alert - variant: warning](screenshots/Alert/02-variant-warning.png)

**variant: info**

![Alert - variant: info](screenshots/Alert/03-variant-info.png)

**variant: error**

![Alert - variant: error](screenshots/Alert/04-variant-error.png)

[Full docs](components/Alert.md)

### Badge

`src/components/feedback.tsx`

Props: `children`, `dot`

**Default**

![Badge - Default](screenshots/Badge/00-default.png)

**dot**

![Badge - dot](screenshots/Badge/01-dot.png)

[Full docs](components/Badge.md)

### BadgeAnchor

`src/components/feedback.tsx` - Wraps an element with a notification badge (count or dot).

Props: `children`, `dot`, `count`

**Default**

![BadgeAnchor - Default](screenshots/BadgeAnchor/00-default.png)

**dot**

![BadgeAnchor - dot](screenshots/BadgeAnchor/01-dot.png)

[Full docs](components/BadgeAnchor.md)

### Progress

`src/components/feedback.tsx`

Props: `value*`, `max`, `label`

**Default**

![Progress - Default](screenshots/Progress/00-default.png)

[Full docs](components/Progress.md)

### Skeleton

`src/components/feedback.tsx`

Props: `width`, `height`, `circle`, `lines`

**Default**

![Skeleton - Default](screenshots/Skeleton/00-default.png)

**circle**

![Skeleton - circle](screenshots/Skeleton/01-circle.png)

[Full docs](components/Skeleton.md)

### Spinner

`src/components/feedback.tsx`

Props: `size`, `label`

**Default**

![Spinner - Default](screenshots/Spinner/00-default.png)

**size: sm**

![Spinner - size: sm](screenshots/Spinner/01-size-sm.png)

**size: md**

![Spinner - size: md](screenshots/Spinner/02-size-md.png)

**size: lg**

![Spinner - size: lg](screenshots/Spinner/03-size-lg.png)

[Full docs](components/Spinner.md)

### Steps

`src/components/feedback.tsx`

Props: `steps*`, `current*`

**Default**

![Steps - Default](screenshots/Steps/00-default.png)

[Full docs](components/Steps.md)

### Tag

`src/components/feedback.tsx`

Props: `children*`, `selected`, `onClick`, `onRemove`

**Default**

![Tag - Default](screenshots/Tag/00-default.png)

**selected**

![Tag - selected](screenshots/Tag/01-selected.png)

[Full docs](components/Tag.md)

### ToastProvider

`src/components/feedback.tsx`

Props: `children*`, `durationMs`

**Default**

![ToastProvider - Default](screenshots/ToastProvider/00-default.png)

[Full docs](components/ToastProvider.md)

## forms

### Button

`src/components/forms.tsx`

Props: `children`, `as`, `href`, `variant`, `size`, `loading`, `leftIcon`, `rightIcon`

**Default**

![Button - Default](screenshots/Button/00-default.png)

**variant: solid**

![Button - variant: solid](screenshots/Button/01-variant-solid.png)

**variant: outline**

![Button - variant: outline](screenshots/Button/02-variant-outline.png)

**variant: ghost**

![Button - variant: ghost](screenshots/Button/03-variant-ghost.png)

**variant: dark**

![Button - variant: dark](screenshots/Button/04-variant-dark.png)

**size: sm**

![Button - size: sm](screenshots/Button/05-size-sm.png)

**size: md**

![Button - size: md](screenshots/Button/06-size-md.png)

**size: lg**

![Button - size: lg](screenshots/Button/07-size-lg.png)

**loading**

![Button - loading](screenshots/Button/08-loading.png)

[Full docs](components/Button.md)

### Checkbox

`src/components/forms.tsx`

Props: `label`, `indeterminate`

**Default**

![Checkbox - Default](screenshots/Checkbox/00-default.png)

**indeterminate**

![Checkbox - indeterminate](screenshots/Checkbox/01-indeterminate.png)

[Full docs](components/Checkbox.md)

### ComboBox

`src/components/forms.tsx`

Props: `options*`, `value`, `onChange`, `placeholder`, `searchable`, `size`

**Default**

![ComboBox - Default](screenshots/ComboBox/00-default.png)

**searchable**

![ComboBox - searchable](screenshots/ComboBox/01-searchable.png)

**size: sm**

![ComboBox - size: sm](screenshots/ComboBox/02-size-sm.png)

**size: md**

![ComboBox - size: md](screenshots/ComboBox/03-size-md.png)

**size: lg**

![ComboBox - size: lg](screenshots/ComboBox/04-size-lg.png)

[Full docs](components/ComboBox.md)

### DatePicker

`src/components/forms.tsx`

Props: `value`, `endValue`, `onChange`, `range`, `min`, `max`, `placeholder`

**Default**

![DatePicker - Default](screenshots/DatePicker/00-default.png)

**range**

![DatePicker - range](screenshots/DatePicker/01-range.png)

[Full docs](components/DatePicker.md)

### Field

`src/components/forms.tsx`

Props: `label`, `hint`, `error`, `htmlFor`, `children*`

**Default**

![Field - Default](screenshots/Field/00-default.png)

[Full docs](components/Field.md)

### FileUploader

`src/components/forms.tsx`

Props: `accept`, `multiple`, `onFiles`, `label`, `initialFiles`

**Default**

![FileUploader - Default](screenshots/FileUploader/00-default.png)

**multiple**

![FileUploader - multiple](screenshots/FileUploader/01-multiple.png)

[Full docs](components/FileUploader.md)

### Input

`src/components/forms.tsx`

Props: `size`, `invalid`, `leftAddon`, `rightAddon`, `describedBy`

**Default**

![Input - Default](screenshots/Input/00-default.png)

**size: sm**

![Input - size: sm](screenshots/Input/01-size-sm.png)

**size: md**

![Input - size: md](screenshots/Input/02-size-md.png)

**size: lg**

![Input - size: lg](screenshots/Input/03-size-lg.png)

**invalid**

![Input - invalid](screenshots/Input/04-invalid.png)

[Full docs](components/Input.md)

### Radio

`src/components/forms.tsx`

Props: `value*`, `label`

**Default**

![Radio - Default](screenshots/Radio/00-default.png)

[Full docs](components/Radio.md)

### RadioGroup

`src/components/forms.tsx`

Props: `name`, `value`, `defaultValue`, `onChange`, `orientation`, `legend`, `children*`

**Default**

![RadioGroup - Default](screenshots/RadioGroup/00-default.png)

**orientation: vertical**

![RadioGroup - orientation: vertical](screenshots/RadioGroup/01-orientation-vertical.png)

**orientation: horizontal**

![RadioGroup - orientation: horizontal](screenshots/RadioGroup/02-orientation-horizontal.png)

[Full docs](components/RadioGroup.md)

### SearchBar

`src/components/forms.tsx`

Props: `value`, `onSearch`, `placeholder`, `size`

**Default**

![SearchBar - Default](screenshots/SearchBar/00-default.png)

**size: sm**

![SearchBar - size: sm](screenshots/SearchBar/01-size-sm.png)

**size: md**

![SearchBar - size: md](screenshots/SearchBar/02-size-md.png)

**size: lg**

![SearchBar - size: lg](screenshots/SearchBar/03-size-lg.png)

[Full docs](components/SearchBar.md)

### Select

`src/components/forms.tsx`

Props: `size`, `invalid`, `placeholder`, `options*`

**Default**

![Select - Default](screenshots/Select/00-default.png)

**size: sm**

![Select - size: sm](screenshots/Select/01-size-sm.png)

**size: md**

![Select - size: md](screenshots/Select/02-size-md.png)

**size: lg**

![Select - size: lg](screenshots/Select/03-size-lg.png)

**invalid**

![Select - invalid](screenshots/Select/04-invalid.png)

[Full docs](components/Select.md)

### Slider

`src/components/forms.tsx`

Props: `min`, `max`, `step`, `value`, `defaultValue`, `onChange`, `label`, `format`

**Default**

![Slider - Default](screenshots/Slider/00-default.png)

[Full docs](components/Slider.md)

### Stepper

`src/components/forms.tsx`

Props: `value`, `defaultValue`, `min`, `max`, `step`, `onChange`

**Default**

![Stepper - Default](screenshots/Stepper/00-default.png)

[Full docs](components/Stepper.md)

### Switch

`src/components/forms.tsx`

Props: `checked`, `defaultChecked`, `onChange`, `label`, `disabled`

**Default**

![Switch - Default](screenshots/Switch/00-default.png)

**checked**

![Switch - checked](screenshots/Switch/01-checked.png)

**defaultChecked**

![Switch - defaultChecked](screenshots/Switch/02-defaultchecked.png)

**disabled**

![Switch - disabled](screenshots/Switch/03-disabled.png)

[Full docs](components/Switch.md)

### Textarea

`src/components/forms.tsx`

Props: `invalid`, `autoResize`, `describedBy`

**Default**

![Textarea - Default](screenshots/Textarea/00-default.png)

**invalid**

![Textarea - invalid](screenshots/Textarea/01-invalid.png)

**autoResize**

![Textarea - autoResize](screenshots/Textarea/02-autoresize.png)

[Full docs](components/Textarea.md)

## layout

### Box

`src/components/layout.tsx`

Props: `as`

**Default**

![Box - Default](screenshots/Box/00-default.png)

[Full docs](components/Box.md)

### Card

`src/components/layout.tsx`

Props: `children`, `actions`

**Default**

![Card - Default](screenshots/Card/00-default.png)

[Full docs](components/Card.md)

### Container

`src/components/layout.tsx`

Props: `size`

**Default**

![Container - Default](screenshots/Container/00-default.png)

**size: sm**

![Container - size: sm](screenshots/Container/01-size-sm.png)

**size: md**

![Container - size: md](screenshots/Container/02-size-md.png)

**size: lg**

![Container - size: lg](screenshots/Container/03-size-lg.png)

**size: xl**

![Container - size: xl](screenshots/Container/04-size-xl.png)

**size: full**

![Container - size: full](screenshots/Container/05-size-full.png)

[Full docs](components/Container.md)

### Grid

`src/components/layout.tsx`

Props: `cols`, `gap`, `align`

**Default**

![Grid - Default](screenshots/Grid/00-default.png)

[Full docs](components/Grid.md)

### GridItem

`src/components/layout.tsx`

Props: `colSpan`, `rowSpan`

**Default**

![GridItem - Default](screenshots/GridItem/00-default.png)

[Full docs](components/GridItem.md)

### Heading

`src/components/layout.tsx`

Props: `as`, `level`, `size`, `weight`, `align`

**Default**

![Heading - Default](screenshots/Heading/00-default.png)

**size: sm**

![Heading - size: sm](screenshots/Heading/01-size-sm.png)

**size: md**

![Heading - size: md](screenshots/Heading/02-size-md.png)

**size: lg**

![Heading - size: lg](screenshots/Heading/03-size-lg.png)

**size: xs**

![Heading - size: xs](screenshots/Heading/04-size-xs.png)

**size: xl**

![Heading - size: xl](screenshots/Heading/05-size-xl.png)

**size: 2xl**

![Heading - size: 2xl](screenshots/Heading/06-size-2xl.png)

**size: 3xl**

![Heading - size: 3xl](screenshots/Heading/07-size-3xl.png)

**weight: regular**

![Heading - weight: regular](screenshots/Heading/08-weight-regular.png)

**weight: medium**

![Heading - weight: medium](screenshots/Heading/09-weight-medium.png)

**weight: bold**

![Heading - weight: bold](screenshots/Heading/10-weight-bold.png)

**align: left**

![Heading - align: left](screenshots/Heading/11-align-left.png)

**align: right**

![Heading - align: right](screenshots/Heading/12-align-right.png)

**align: center**

![Heading - align: center](screenshots/Heading/13-align-center.png)

[Full docs](components/Heading.md)

### Stack

`src/components/layout.tsx`

Props: `gap`, `direction`, `align`, `justify`, `wrap`

**Default**

![Stack - Default](screenshots/Stack/00-default.png)

**direction: column**

![Stack - direction: column](screenshots/Stack/01-direction-column.png)

**direction: row**

![Stack - direction: row](screenshots/Stack/02-direction-row.png)

**wrap**

![Stack - wrap](screenshots/Stack/03-wrap.png)

[Full docs](components/Stack.md)

### Text

`src/components/layout.tsx`

Props: `as`, `size`, `weight`, `align`, `truncate`, `muted`

**Default**

![Text - Default](screenshots/Text/00-default.png)

**size: sm**

![Text - size: sm](screenshots/Text/01-size-sm.png)

**size: md**

![Text - size: md](screenshots/Text/02-size-md.png)

**size: lg**

![Text - size: lg](screenshots/Text/03-size-lg.png)

**size: xs**

![Text - size: xs](screenshots/Text/04-size-xs.png)

**size: xl**

![Text - size: xl](screenshots/Text/05-size-xl.png)

**weight: regular**

![Text - weight: regular](screenshots/Text/06-weight-regular.png)

**weight: medium**

![Text - weight: medium](screenshots/Text/07-weight-medium.png)

**weight: bold**

![Text - weight: bold](screenshots/Text/08-weight-bold.png)

**align: left**

![Text - align: left](screenshots/Text/09-align-left.png)

**align: right**

![Text - align: right](screenshots/Text/10-align-right.png)

**align: center**

![Text - align: center](screenshots/Text/11-align-center.png)

**truncate**

![Text - truncate](screenshots/Text/12-truncate.png)

**muted**

![Text - muted](screenshots/Text/13-muted.png)

[Full docs](components/Text.md)

## navigation

### Breadcrumbs

`src/components/navigation.tsx`

Props: `items*`

**Default**

![Breadcrumbs - Default](screenshots/Breadcrumbs/00-default.png)

[Full docs](components/Breadcrumbs.md)

### Footer

`src/components/navigation.tsx`

Props: `columns*`, `legal*`

**Default**

![Footer - Default](screenshots/Footer/00-default.png)

[Full docs](components/Footer.md)

### Navbar

`src/components/navigation.tsx`

Props: `brand*`, `links*`, `actions`, `mega`

**Default**

![Navbar - Default](screenshots/Navbar/00-default.png)

[Full docs](components/Navbar.md)

### Pagination

`src/components/navigation.tsx`

Props: `page*`, `pageCount*`, `onChange*`, `siblings`

**Default**

![Pagination - Default](screenshots/Pagination/00-default.png)

[Full docs](components/Pagination.md)

### Sidebar

`src/components/navigation.tsx`

Props: `sections*`, `footer`

**Default**

![Sidebar - Default](screenshots/Sidebar/00-default.png)

[Full docs](components/Sidebar.md)

### Tabs

`src/components/navigation.tsx`

Props: `items*`, `value`, `defaultValue`, `onChange`, `orientation`

**Default**

![Tabs - Default](screenshots/Tabs/00-default.png)

**orientation: vertical**

![Tabs - orientation: vertical](screenshots/Tabs/01-orientation-vertical.png)

**orientation: horizontal**

![Tabs - orientation: horizontal](screenshots/Tabs/02-orientation-horizontal.png)

[Full docs](components/Tabs.md)

## sections

### Avatar

`src/components/sections.tsx`

Props: `name*`

**Default**

![Avatar - Default](screenshots/Avatar/00-default.png)

[Full docs](components/Avatar.md)

### Feed

`src/components/sections.tsx`

Props: `items*`

**Default**

![Feed - Default](screenshots/Feed/00-default.png)

[Full docs](components/Feed.md)

### FormContainer

`src/components/sections.tsx`

Props: `title*`, `description`, `submitLabel`, `onSubmit`, `children*`

**Default**

![FormContainer - Default](screenshots/FormContainer/00-default.png)

[Full docs](components/FormContainer.md)

### Hero

`src/components/sections.tsx`

Props: `eyebrow`, `title*`, `subtitle*`, `primary*`, `secondary`, `visual`

**Default**

![Hero - Default](screenshots/Hero/00-default.png)

[Full docs](components/Hero.md)

### LogoStrip

`src/components/sections.tsx`

Props: `names*`

**Default**

![LogoStrip - Default](screenshots/LogoStrip/00-default.png)

[Full docs](components/LogoStrip.md)

### Testimonial

`src/components/sections.tsx`

Props: `quote*`, `author*`, `role*`

**Default**

![Testimonial - Default](screenshots/Testimonial/00-default.png)

[Full docs](components/Testimonial.md)

### VideoPlayer

`src/components/sections.tsx`

Props: `src`, `poster`, `title`

**Default**

![VideoPlayer - Default](screenshots/VideoPlayer/00-default.png)

[Full docs](components/VideoPlayer.md)

## table

### DataTable

`src/components/table.tsx`

Props: `columns*`, `rows*`, `rowKey*`, `pageSize`, `searchable`, `selectable`, `striped`, `caption`

**Default**

![DataTable - Default](screenshots/DataTable/00-default.png)

**searchable**

![DataTable - searchable](screenshots/DataTable/01-searchable.png)

**selectable**

![DataTable - selectable](screenshots/DataTable/02-selectable.png)

[Full docs](components/DataTable.md)
