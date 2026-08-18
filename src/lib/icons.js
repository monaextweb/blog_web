// Explicit icon map so bundlers can tree-shake lucide-react properly.
// `import * as Icons from 'lucide-react'` would pull in the entire library —
// this keeps the bundle small while still allowing icon lookup by name
// (used for icons referenced by string in src/data/business.js).
import {
  Sparkles,
  Gem,
  Droplet,
  Scissors,
  GraduationCap,
  HandHeart,
  Heart,
  Image as ImageIcon,
} from 'lucide-react'

export const iconMap = {
  Sparkles,
  Gem,
  Droplet,
  Scissors,
  GraduationCap,
  HandHeart,
  Heart,
  ImageIcon,
}

export function getIcon(name) {
  return iconMap[name] || Sparkles
}
