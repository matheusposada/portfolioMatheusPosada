import type { IconType } from 'react-icons'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { contactInfo } from './portfolio'

export interface SocialLink {
  label: string
  href: string
  Icon: IconType
}

export const socialLinks: SocialLink[] = [
  { label: 'WhatsApp', href: contactInfo.whatsappUrl, Icon: BsWhatsapp },
  { label: 'LinkedIn', href: contactInfo.linkedinUrl, Icon: BsLinkedin },
  { label: 'GitHub', href: contactInfo.githubUrl, Icon: BsGithub },
]