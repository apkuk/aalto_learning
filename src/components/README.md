# Reusable Components

This directory contains reusable UI components for the Aalto Energia project. All components are built with TypeScript, fully responsive, and styled with Tailwind CSS.

## Components

### Button
A versatile button component with multiple variants and sizes.

**Variants:** `primary`, `secondary`, `success`, `warning`
**Sizes:** `small`, `medium`, `large`

```tsx
import { Button } from '@/components'

// Regular button
<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>

// Link button
<Button variant="secondary" href="https://example.com">
  Visit Site
</Button>
```

### Card
A card component for content boxes with optional title and color accent.

```tsx
import { Card } from '@/components'

<Card title="Card Title" color="border-blue-500">
  Card content goes here
</Card>
```

### Tabs
A tab system for organizing content into switchable panels.

```tsx
import { Tabs, Tab } from '@/components'
import { useState } from 'react'

const [activeTab, setActiveTab] = useState('tab1')

const tabs: Tab[] = [
  { id: 'tab1', label: 'First Tab', content: <div>First content</div> },
  { id: 'tab2', label: 'Second Tab', content: <div>Second content</div> }
]

<Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
```

### Badge
A badge/tag component for labels with various colors.

**Colors:** `blue`, `green`, `purple`, `orange`, `red`, `yellow`, `gray`, `teal`, `indigo`, `pink`
**Sizes:** `small`, `medium`, `large`

```tsx
import { Badge } from '@/components'

<Badge color="blue" size="medium">New</Badge>
```

### SectionHeader
A section header component with title and optional subtitle.

```tsx
import { SectionHeader } from '@/components'

<SectionHeader
  title="Page Title"
  subtitle="Optional subtitle text"
>
  {/* Optional additional content */}
</SectionHeader>
```

## Common Props

All components support:
- `className` - Additional CSS classes for customization
- Full TypeScript type safety

## Styling

Components use the project's Tailwind configuration:
- Primary color: `#2563eb` (blue)
- Secondary color: `#7c3aed` (purple)

All components are designed to be responsive and accessible.
