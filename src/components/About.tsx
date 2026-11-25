import type { ReactElement } from 'react'
import { SECTION_IDS } from '../constants/sectionIds'
import { aboutParagraphs, skillGroups, stats } from '../data/portfolio'
import AboutStats from './AboutStats'
import Card from './Card'
import Reveal from './Reveal'
import SectionContainer from './SectionContainer'
import SectionTitle from './SectionTitle'
import SkillGroupList from './SkillGroupList'

const SLANTED_CLIP_PATH = '[clip-path:polygon(0_0,22%_5vw,100%_0,100%_100%,78%_calc(100%_-_5vw),0_100%)]'

export default function About(): ReactElement {
  return (
    <section id={SECTION_IDS.about} className={`relative z-30 -mt-[6vw] bg-paper ${SLANTED_CLIP_PATH}`}>
      <SectionContainer className="pt-32 pb-28 md:pt-36">
        <SectionTitle label="Quem sou" title="Sobre mim" />

        <Reveal className="mb-11">
          <AboutStats stats={stats} />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-[1.3fr_1fr]">
          <Reveal className="h-full">
            <Card className="h-full space-y-3.5 text-[15px] text-justify text-muted">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Card>
          </Reveal>
          <Reveal className="h-full">
            <Card className="h-full">
              <SkillGroupList groups={skillGroups} />
            </Card>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  )
}