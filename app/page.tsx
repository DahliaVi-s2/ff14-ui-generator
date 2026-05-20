'use client'

import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import Image from 'next/image'

type Category =
  | 'tank'
  | 'healer'
  | 'dps'
  | 'crafter'
  | 'gatherer'
  | 'limited'

type Job = {
  id: string
  icon: string
  category: Category
  level: string
  hidden: boolean
}

const initialJobs: Job[] = [
  // =========================
  // TANK
  // =========================
  {
    id: 'pld',
    icon: '/jobs/Paladin.png',
    category: 'tank',
    level: '',
    hidden: false,
  },
  {
    id: 'war',
    icon: '/jobs/Warrior.png',
    category: 'tank',
    level: '',
    hidden: false,
  },
  {
    id: 'drk',
    icon: '/jobs/DarkKnight.png',
    category: 'tank',
    level: '',
    hidden: false,
  },
  {
    id: 'gnb',
    icon: '/jobs/Gunbreaker.png',
    category: 'tank',
    level: '',
    hidden: false,
  },

  // =========================
  // HEALER
  // =========================
  {
    id: 'whm',
    icon: '/jobs/WhiteMage.png',
    category: 'healer',
    level: '',
    hidden: false,
  },
  {
    id: 'sch',
    icon: '/jobs/Scholar.png',
    category: 'healer',
    level: '',
    hidden: false,
  },
  {
    id: 'ast',
    icon: '/jobs/Astrologian.png',
    category: 'healer',
    level: '',
    hidden: false,
  },
  {
    id: 'sge',
    icon: '/jobs/Sage.png',
    category: 'healer',
    level: '',
    hidden: false,
  },

  // =========================
  // DPS
  // =========================
  {
    id: 'mnk',
    icon: '/jobs/Monk.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'drg',
    icon: '/jobs/Dragoon.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'nin',
    icon: '/jobs/Ninja.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'sam',
    icon: '/jobs/Samurai.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'rpr',
    icon: '/jobs/Reaper.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'vpr',
    icon: '/jobs/Viper.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'brd',
    icon: '/jobs/Bard.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'mch',
    icon: '/jobs/Machinist.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'dnc',
    icon: '/jobs/Dancer.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'blm',
    icon: '/jobs/BlackMage.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'smn',
    icon: '/jobs/Summoner.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'rdm',
    icon: '/jobs/RedMage.png',
    category: 'dps',
    level: '',
    hidden: false,
  },
  {
    id: 'pct',
    icon: '/jobs/Pictomancer.png',
    category: 'dps',
    level: '',
    hidden: false,
  },

  // =========================
  // CRAFTER
  // =========================
  {
    id: 'crp',
    icon: '/jobs/Carpenter.png',
    category: 'crafter',
    level: '',
    hidden: false,
  },
  {
    id: 'bsm',
    icon: '/jobs/Blacksmith.png',
    category: 'crafter',
    level: '',
    hidden: false,
  },
  {
    id: 'arm',
    icon: '/jobs/Armorer.png',
    category: 'crafter',
    level: '',
    hidden: false,
  },
  {
    id: 'gsm',
    icon: '/jobs/Goldsmith.png',
    category: 'crafter',
    level: '',
    hidden: false,
  },
  {
    id: 'ltw',
    icon: '/jobs/Leatherworker.png',
    category: 'crafter',
    level: '',
    hidden: false,
  },
  {
    id: 'wvr',
    icon: '/jobs/Weaver.png',
    category: 'crafter',
    level: '',
    hidden: false,
  },
  {
    id: 'alc',
    icon: '/jobs/Alchemist.png',
    category: 'crafter',
    level: '',
    hidden: false,
  },
  {
    id: 'cul',
    icon: '/jobs/Culinarian.png',
    category: 'crafter',
    level: '',
    hidden: false,
  },

  // =========================
  // GATHERER
  // =========================
  {
    id: 'min',
    icon: '/jobs/Miner.png',
    category: 'gatherer',
    level: '',
    hidden: false,
  },
  {
    id: 'btn',
    icon: '/jobs/Botanist.png',
    category: 'gatherer',
    level: '',
    hidden: false,
  },
  {
    id: 'fsh',
    icon: '/jobs/Fisher.png',
    category: 'gatherer',
    level: '',
    hidden: false,
  },

  // =========================
  // LIMITED
  // =========================
  {
    id: 'blu',
    icon: '/jobs/BlueMage.png',
    category: 'limited',
    level: '',
    hidden: false,
  },
]

export default function Home() {
  const [jobs, setJobs] =
    useState<Job[]>(initialJobs)

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState<
    | 'all'
    | Category
  >('all')

  const captureRef =
    useRef<HTMLDivElement>(null)

  const updateLevel = (
    id: string,
    value: string
  ) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
              ...job,
              level: value,
            }
          : job
      )
    )
  }

  const toggleHidden = (id: string) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
              ...job,
              hidden: !job.hidden,
            }
          : job
      )
    )
  }

  const visibleJobs = jobs.filter((job) => {
    if (job.hidden) return false

    if (job.level.trim() === '')
      return false

    if (
      selectedCategory !== 'all' &&
      job.category !== selectedCategory
    ) {
      return false
    }

    return true
  })

  const generateImage = async () => {
    if (!captureRef.current) return

    // DOM更新待機
    await new Promise((resolve) =>
      setTimeout(resolve, 100)
    )

    const dataUrl = await toPng(
      captureRef.current,
      {
        cacheBust: true,
        backgroundColor: 'transparent',
        pixelRatio: 2,
      }
    )

    const link =
      document.createElement('a')

    link.download =
      `ff14-${selectedCategory}.png`

    link.href = dataUrl
    link.click()
  }

  const categoryButtons = [
    'all',
    'tank',
    'healer',
    'dps',
    'crafter',
    'gatherer',
    'limited',
  ]

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center gap-8 p-8">

      {/* HEADER */}
      <div className="text-center max-w-4xl">

        <h1 className="text-5xl font-black mb-4">
          FF14 Job Level Generator
        </h1>

        <p className="text-zinc-300 text-lg leading-relaxed">
          FF14のジョブレベル透過画像を生成できる無料ツールです。
          OBS配信・SNS投稿・プロフィール画像作成などに利用できます。
        </p>

        <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
          このサイトはFINAL FANTASY XIVの非公式ファンメイドツールです。
          FINAL FANTASY XIV © SQUARE ENIX
        </p>

      </div>

      {/* CATEGORY */}
      <div className="flex flex-wrap gap-3 justify-center">

        {categoryButtons.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(
                category as
                  | 'all'
                  | Category
              )
            }
            className={`
              px-4
              py-2
              rounded-xl
              font-bold
              transition
              ${
                selectedCategory === category
                  ? 'bg-blue-500'
                  : 'bg-zinc-700 hover:bg-zinc-600'
              }
            `}
          >
            {category.toUpperCase()}
          </button>
        ))}

      </div>

      {/* INPUT UI */}
      <div className="bg-zinc-800 rounded-2xl p-6 shadow-2xl">

        <div className="grid grid-cols-8 gap-3">

          {jobs.map((job) => (
            <div
              key={job.id}
              className="
                bg-zinc-700
                rounded-xl
                p-2
                flex
                flex-col
                items-center
                gap-2
              "
            >
              <Image
                src={job.icon}
                alt=""
                width={36}
                height={36}
              />

              <input
                type="number"
                min={1}
                max={100}
                value={job.level}
                onChange={(e) =>
                  updateLevel(
                    job.id,
                    e.target.value
                  )
                }
                placeholder="-"
                className="
                  bg-zinc-900
                  rounded
                  w-[52px]
                  text-center
                  p-1
                  font-bold
                  outline-none
                "
              />

              <label className="text-xs flex items-center gap-1">

                <input
                  type="checkbox"
                  checked={job.hidden}
                  onChange={() =>
                    toggleHidden(job.id)
                  }
                />

                非表示
              </label>
            </div>
          ))}

        </div>

        <button
          onClick={generateImage}
          className="
            mt-6
            w-full
            bg-blue-500
            hover:bg-blue-400
            transition
            p-4
            rounded-xl
            font-bold
            text-lg
            shadow-lg
          "
        >
          透過PNG生成
        </button>

      </div>

      {/* PNG生成対象 */}
      <div
        ref={captureRef}
        className="
          bg-transparent
          grid
          grid-cols-8
          gap-5
          p-6
        "
      >
        {visibleJobs.map((job) => (
          <div
            key={job.id}
            className="
              flex
              flex-col
              items-center
              gap-1
            "
          >
            {/* ←ここが重要 */}
            <img
              src={job.icon}
              alt=""
              className="w-16 h-16 drop-shadow-lg"
            />

            <span
              className="
                text-3xl
                font-black
                text-white
              "
              style={{
                textShadow:
                  `
                  0 0 3px black,
                  0 0 6px black,
                  2px 2px 0 black,
                  -2px -2px 0 black
                  `,
              }}
            >
              {job.level}
            </span>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <div className="max-w-4xl text-zinc-300 leading-relaxed space-y-5">

        <h2 className="text-2xl font-bold text-white">
          このサイトについて
        </h2>

        <p>
          FF14 Job Level Generatorは、
          FINAL FANTASY XIV向けの
          ジョブレベル透過PNG画像を
          簡単に生成できる無料Webツールです。
        </p>

      </div>

      {/* FOOTER */}
<footer className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-zinc-400">

  <a
    href="/about"
    className="hover:text-white underline"
  >
    About
  </a>

  <a
    href="/howto"
    className="hover:text-white underline"
  >
    HowTo
  </a>

  <a
    href="/sample"
    className="hover:text-white underline"
  >
    Sample
  </a>

  <a
    href="/privacy"
    className="hover:text-white underline"
  >
    プライバシーポリシー
  </a>

  <a
    href="/terms"
    className="hover:text-white underline"
  >
    利用規約
  </a>

  <a
    href="https://x.com/vrc_DahliaVi"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white underline"
  >
    お問い合わせ
  </a>

</footer>

    </main>
  )
}