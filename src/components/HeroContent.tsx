import type { ReactElement } from 'react'
import { BsDownload } from 'react-icons/bs'
import { contactInfo } from '../data/portfolio'
import ButtonLink from './ButtonLink'
import { SECTION_IDS } from '../constants/sectionIds'

const PROFILE_PHOTO_SRC = '/imagens/matheus.webp'

export default function HeroContent(): ReactElement {
  return (
    <div className="animate-rise relative z-10 px-6 pt-24 pb-[20vh] text-white">
      <img
        src={PROFILE_PHOTO_SRC}
        alt="Foto de Matheus Posada"
        className="mx-auto mb-5 h-30 w-30 rounded-full border-2 border-gold object-cover shadow-[0_0_40px_rgba(240,192,96,.3)]"
      />
      <h1 className="font-display text-[clamp(40px,7vw,76px)] leading-[1.1] font-medium italic">
        <span className="block">Eu crio com</span>
        <span className="block md:ml-[.6em]">dados, web</span>
        <span className="block">
          <span className="text-gold">&amp;</span> código.
        </span>
      </h1>
      <p className="mt-4 mb-6 text-[13px] tracking-[.14em] text-white/70 uppercase">
        Desenvolvimento Web &amp; Análise de Dados
      </p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <ButtonLink href={`#${SECTION_IDS.projects}`} variant="outline">
          meus projetos
        </ButtonLink>
        <ButtonLink href={contactInfo.resumePath} variant="solid" isDownload>
          <BsDownload /> currículo
        </ButtonLink>
      </div>
    </div>
  )
}