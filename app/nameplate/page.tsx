'use client'

import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import Image from 'next/image'
import Link from 'next/link'

const jobs = [
  {
    id: 'pld',
    name: 'Knight',
    dotIcon: '/jobs-dot/Paladin_dot.png',
    kanjiIcon: '/jobs-kanji/Paladin_jp.png',
  },
  {
    id: 'war',
    name: 'Warrior',
    dotIcon: '/jobs-dot/Warrior_dot.png',
    kanjiIcon: '/jobs-kanji/Warrior_jp.png',
  },
  {
    id: 'drk',
    name: 'Dark Knight',
    dotIcon: '/jobs-dot/DarkKnight_dot.png',
    kanjiIcon: '/jobs-kanji/DarkKnight_jp.png',
  },
  {
    id: 'gnb',
    name: 'Gunbreaker',
    dotIcon: '/jobs-dot/Gunbreaker_dot.png',
    kanjiIcon: '/jobs-kanji/Gunbreaker_jp.png',
  },

  {
    id: 'whm',
    name: 'White Mage',
    dotIcon: '/jobs-dot/WhiteMage_dot.png',
    kanjiIcon: '/jobs-kanji/WhiteMage_jp.png',
  },
  {
    id: 'sch',
    name: 'Scholar',
    dotIcon: '/jobs-dot/Scholar_dot.png',
    kanjiIcon: '/jobs-kanji/Scholar_jp.png',
  },
  {
    id: 'ast',
    name: 'Astrologian',
    dotIcon: '/jobs-dot/Astrologian_dot.png',
    kanjiIcon: '/jobs-kanji/Astrologian_jp.png',
  },
  {
    id: 'sge',
    name: 'Sage',
    dotIcon: '/jobs-dot/Sage_dot.png',
    kanjiIcon: '/jobs-kanji/Sage_jp.png',
  },

  {
    id: 'mnk',
    name: 'Monk',
    dotIcon: '/jobs-dot/Monk_dot.png',
    kanjiIcon: '/jobs-kanji/Monk_jp.png',
  },
  {
    id: 'drg',
    name: 'Dragoon',
    dotIcon: '/jobs-dot/Dragoon_dot.png',
    kanjiIcon: '/jobs-kanji/Dragoon_jp.png',
  },
  {
    id: 'nin',
    name: 'Ninja',
    dotIcon: '/jobs-dot/Ninja_dot.png',
    kanjiIcon: '/jobs-kanji/Ninja_jp.png',
  },
  {
    id: 'sam',
    name: 'Samurai',
    dotIcon: '/jobs-dot/Samurai_dot.png',
    kanjiIcon: '/jobs-kanji/Samurai_jp.png',
  },
  {
    id: 'rpr',
    name: 'Reaper',
    dotIcon: '/jobs-dot/Reaper_dot.png',
    kanjiIcon: '/jobs-kanji/Reaper_jp.png',
  },
  {
    id: 'vpr',
    name: 'Viper',
    dotIcon: '/jobs-dot/Viper_dot.png',
    kanjiIcon: '/jobs-kanji/Viper_jp.png',
  },

  {
    id: 'brd',
    name: 'Bard',
    dotIcon: '/jobs-dot/Bard_dot.png',
    kanjiIcon: '/jobs-kanji/Bard_jp.png',
  },
  {
    id: 'mch',
    name: 'Machinist',
    dotIcon: '/jobs-dot/Machinist_dot.png',
    kanjiIcon: '/jobs-kanji/Machinist_jp.png',
  },
  {
    id: 'dnc',
    name: 'Dancer',
    dotIcon: '/jobs-dot/Dancer_dot.png',
    kanjiIcon: '/jobs-kanji/Dancer_jp.png',
  },

  {
    id: 'blm',
    name: 'Black Mage',
    dotIcon: '/jobs-dot/BlackMage_dot.png',
    kanjiIcon: '/jobs-kanji/BlackMage_jp.png',
  },
  {
    id: 'smn',
    name: 'Summoner',
    dotIcon: '/jobs-dot/Summoner_dot.png',
    kanjiIcon: '/jobs-kanji/Summoner_jp.png',
  },
  {
    id: 'rdm',
    name: 'Red Mage',
    dotIcon: '/jobs-dot/RedMage_dot.png',
    kanjiIcon: '/jobs-kanji/RedMage_jp.png',
  },
  {
    id: 'pct',
    name: 'Pictomancer',
    dotIcon: '/jobs-dot/Pictomancer_dot.png',
    kanjiIcon: '/jobs-kanji/Pictomancer_jp.png',
  },

  {
    id: 'crp',
    name: 'Carpenter',
    dotIcon: '/jobs-dot/Carpenter_dot.png',
    kanjiIcon: '/jobs-kanji/Carpenter_jp.png',
  },
  {
    id: 'bsm',
    name: 'Blacksmith',
    dotIcon: '/jobs-dot/Blacksmith_dot.png',
    kanjiIcon: '/jobs-kanji/Blacksmith_jp.png',
  },
  {
    id: 'arm',
    name: 'Armorer',
    dotIcon: '/jobs-dot/Armorer_dot.png',
    kanjiIcon: '/jobs-kanji/Armorer_jp.png',
  },
  {
    id: 'gsm',
    name: 'Goldsmith',
    dotIcon: '/jobs-dot/Goldsmith_dot.png',
    kanjiIcon: '/jobs-kanji/Goldsmith_jp.png',
  },
  {
    id: 'ltw',
    name: 'Leatherworker',
    dotIcon: '/jobs-dot/Leatherworker_dot.png',
    kanjiIcon: '/jobs-kanji/Leatherworker_jp.png',
  },
  {
    id: 'wvr',
    name: 'Weaver',
    dotIcon: '/jobs-dot/Weaver_dot.png',
    kanjiIcon: '/jobs-kanji/Weaver_jp.png',
  },
  {
    id: 'alc',
    name: 'Alchemist',
    dotIcon: '/jobs-dot/Alchemist_dot.png',
    kanjiIcon: '/jobs-kanji/Alchemist_jp.png',
  },
  {
    id: 'cul',
    name: 'Culinarian',
    dotIcon: '/jobs-dot/Culinarian_dot.png',
    kanjiIcon: '/jobs-kanji/Culinarian_jp.png',
  },

  {
    id: 'min',
    name: 'Miner',
    dotIcon: '/jobs-dot/Miner_dot.png',
    kanjiIcon: '/jobs-kanji/Miner_jp.png',
  },
  {
    id: 'btn',
    name: 'Botanist',
    dotIcon: '/jobs-dot/Botanist_dot.png',
    kanjiIcon: '/jobs-kanji/Botanist_jp.png',
  },
  {
    id: 'fsh',
    name: 'Fisher',
    dotIcon: '/jobs-dot/Fisher_dot.png',
    kanjiIcon: '/jobs-kanji/Fisher_jp.png',
  },

  {
    id: 'blu',
    name: 'Blue Mage',
    dotIcon: '/jobs-dot/BlueMage_dot.png',
    kanjiIcon: '/jobs-kanji/BlueMage_jp.png',
  },
]

const fonts = [
  {
    id: 'default',
    name: 'Default',
    className: 'font-sans',
  },
  {
    id: 'serif',
    name: 'Serif',
    className: 'font-serif',
  },
  {
    id: 'mono',
    name: 'Mono',
    className: 'font-mono',
  },
]

export default function NameplatePage() {
  const captureRef =
    useRef<HTMLDivElement>(null)

  const [name, setName] =
    useState('Ren')

  const [world, setWorld] =
    useState('Mana')

  const [server, setServer] =
    useState('Chocobo')

  const [jobId, setJobId] =
    useState('pld')

  const [fontId, setFontId] =
    useState('default')

  const [iconType, setIconType] =
    useState<'dot' | 'kanji'>('dot')

  const selectedJob =
    jobs.find((j) => j.id === jobId)!

  const selectedFont =
    fonts.find((f) => f.id === fontId)!

  const generateImage = async () => {
    if (!captureRef.current) return

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
      'ff14-nameplate.png'

    link.href = dataUrl
    link.click()
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center gap-8 p-8">

      <div className="w-full max-w-6xl">

        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            bg-zinc-800
            hover:bg-zinc-700
            transition
            px-4
            py-2
            rounded-xl
            font-bold
          "
        >
          ← トップへ戻る
        </Link>

      </div>

      <h1 className="text-5xl font-black">
        FF14 Nameplate Generator
      </h1>

      <div className="bg-zinc-800 rounded-2xl p-6 w-full max-w-4xl">

        <div className="grid md:grid-cols-2 gap-4">

          <div className="flex flex-col gap-2">
            <label>ジョブ</label>

            <select
              value={jobId}
              onChange={(e) =>
                setJobId(e.target.value)
              }
              className="
                bg-zinc-700
                rounded-xl
                p-3
              "
            >
              {jobs.map((job) => (
                <option
                  key={job.id}
                  value={job.id}
                >
                  {job.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label>アイコンタイプ</label>

            <select
              value={iconType}
              onChange={(e) =>
                setIconType(
                  e.target.value as
                    | 'dot'
                    | 'kanji'
                )
              }
              className="
                bg-zinc-700
                rounded-xl
                p-3
              "
            >
              <option value="dot">
                ドット絵
              </option>

              <option value="kanji">
                日本語一文字
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label>フォント</label>

            <select
              value={fontId}
              onChange={(e) =>
                setFontId(e.target.value)
              }
              className="
                bg-zinc-700
                rounded-xl
                p-3
              "
            >
              {fonts.map((font) => (
                <option
                  key={font.id}
                  value={font.id}
                >
                  {font.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label>プレイヤーネーム</label>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="
                bg-zinc-700
                rounded-xl
                p-3
              "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>データセンター</label>

            <input
              value={world}
              onChange={(e) =>
                setWorld(e.target.value)
              }
              className="
                bg-zinc-700
                rounded-xl
                p-3
              "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>ワールド</label>

            <input
              value={server}
              onChange={(e) =>
                setServer(e.target.value)
              }
              className="
                bg-zinc-700
                rounded-xl
                p-3
              "
            />
          </div>

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
          "
        >
          透過PNG生成
        </button>

      </div>

      {/* 生成対象 */}
<div
  ref={captureRef}
  className="
    bg-transparent
    p-8
    flex
    items-center
    gap-8
  "
>

  {/* アイコン */}
  <div
    className="
      h-[170px]
      w-[170px]
      flex
      items-center
      justify-center
      shrink-0
    "
  >

    <Image
      src={
        iconType === 'dot'
          ? selectedJob.dotIcon
          : selectedJob.kanjiIcon
      }
      alt=""
      width={170}
      height={170}
      className="
        object-contain
        max-h-full
        max-w-full
      "
      unoptimized
    />

  </div>

  {/* テキスト */}
  <div
    className={`
      flex
      flex-col
      justify-center
      h-[170px]
      ${selectedFont.className}
    `}
  >

    {/* プレイヤー名 */}
    <span
      className="
        text-6xl
        font-black
        text-white
        leading-none
      "
      style={{
        textShadow:
          `
          0 0 3px black,
          0 0 6px black,
          2px 2px 0 black
          `,
      }}
    >
      {name}
    </span>

    {/* ジョブ名 */}
    <span
      className="
        text-3xl
        font-bold
        text-yellow-300
        mt-3
        leading-none
      "
      style={{
        textShadow:
          `
          0 0 3px black,
          0 0 6px black
          `,
      }}
    >
      {selectedJob.name}
    </span>

    {/* サーバー */}
    <span
      className="
        text-2xl
        text-zinc-300
        mt-3
        leading-none
      "
      style={{
        textShadow:
          `
          0 0 3px black
          `,
      }}
    >
      {world} / {server}
    </span>

  </div>

</div>

    </main>
  )
}