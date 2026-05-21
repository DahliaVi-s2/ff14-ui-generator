'use client'

import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import Image from 'next/image'

const jobs = [
  {
    id: 'pld',
    name: 'Paladin',
    jpIcon: '/jobs-kanji/Paladin_jp.png',
    dotIcon: '/jobs-dot/Paladin_dot.png',
  },
  {
    id: 'war',
    name: 'Warrior',
    jpIcon: '/jobs-kanji/Warrior_jp.png',
    dotIcon: '/jobs-dot/Warrior_dot.png',
  },
  {
    id: 'drk',
    name: 'Dark Knight',
    jpIcon: '/jobs-kanji/DarkKnight_jp.png',
    dotIcon: '/jobs-dot/DarkKnight_dot.png',
  },
  {
    id: 'gnb',
    name: 'Gunbreaker',
    jpIcon: '/jobs-kanji/Gunbreaker_jp.png',
    dotIcon: '/jobs-dot/Gunbreaker_dot.png',
  },
  {
    id: 'whm',
    name: 'White Mage',
    jpIcon: '/jobs-kanji/WhiteMage_jp.png',
    dotIcon: '/jobs-dot/WhiteMage_dot.png',
  },
  {
    id: 'sch',
    name: 'Scholar',
    jpIcon: '/jobs-kanji/Scholar_jp.png',
    dotIcon: '/jobs-dot/Scholar_dot.png',
  },
  {
    id: 'ast',
    name: 'Astrologian',
    jpIcon: '/jobs-kanji/Astrologian_jp.png',
    dotIcon: '/jobs-dot/Astrologian_dot.png',
  },
  {
    id: 'sge',
    name: 'Sage',
    jpIcon: '/jobs-kanji/Sage_jp.png',
    dotIcon: '/jobs-dot/Sage_dot.png',
  },
  {
    id: 'mnk',
    name: 'Monk',
    jpIcon: '/jobs-kanji/Monk_jp.png',
    dotIcon: '/jobs-dot/Monk_dot.png',
  },
  {
    id: 'drg',
    name: 'Dragoon',
    jpIcon: '/jobs-kanji/Dragoon_jp.png',
    dotIcon: '/jobs-dot/Dragoon_dot.png',
  },
  {
    id: 'nin',
    name: 'Ninja',
    jpIcon: '/jobs-kanji/Ninja_jp.png',
    dotIcon: '/jobs-dot/Ninja_dot.png',
  },
  {
    id: 'sam',
    name: 'Samurai',
    jpIcon: '/jobs-kanji/Samurai_jp.png',
    dotIcon: '/jobs-dot/Samurai_dot.png',
  },
  {
    id: 'rpr',
    name: 'Reaper',
    jpIcon: '/jobs-kanji/Reaper_jp.png',
    dotIcon: '/jobs-dot/Reaper_dot.png',
  },
  {
    id: 'vpr',
    name: 'Viper',
    jpIcon: '/jobs-kanji/Viper_jp.png',
    dotIcon: '/jobs-dot/Viper_dot.png',
  },
  {
    id: 'brd',
    name: 'Bard',
    jpIcon: '/jobs-kanji/Bard_jp.png',
    dotIcon: '/jobs-dot/Bard_dot.png',
  },
  {
    id: 'mch',
    name: 'Machinist',
    jpIcon: '/jobs-kanji/Machinist_jp.png',
    dotIcon: '/jobs-dot/Machinist_dot.png',
  },
  {
    id: 'dnc',
    name: 'Dancer',
    jpIcon: '/jobs-kanji/Dancer_jp.png',
    dotIcon: '/jobs-dot/Dancer_dot.png',
  },
  {
    id: 'blm',
    name: 'Black Mage',
    jpIcon: '/jobs-kanji/BlackMage_jp.png',
    dotIcon: '/jobs-dot/BlackMage_dot.png',
  },
  {
    id: 'smn',
    name: 'Summoner',
    jpIcon: '/jobs-kanji/Summoner_jp.png',
    dotIcon: '/jobs-dot/Summoner_dot.png',
  },
  {
    id: 'rdm',
    name: 'Red Mage',
    jpIcon: '/jobs-kanji/RedMage_jp.png',
    dotIcon: '/jobs-dot/RedMage_dot.png',
  },
  {
    id: 'pct',
    name: 'Pictomancer',
    jpIcon: '/jobs-kanji/Pictomancer_jp.png',
    dotIcon: '/jobs-dot/Pictomancer_dot.png',
  },
]

export default function NameplatePage() {
  const captureRef =
    useRef<HTMLDivElement>(null)

  const [playerName, setPlayerName] =
    useState('Warrior of Light')

  const [serverName, setServerName] =
    useState('Meteor / Belias')

  const [selectedJobId, setSelectedJobId] =
    useState('pld')

  const [iconType, setIconType] =
    useState<'jp' | 'dot'>('jp')

  const selectedJob =
    jobs.find(
      (job) =>
        job.id === selectedJobId
    ) || jobs[0]

  const generateImage = async () => {
    if (!captureRef.current) return

    const dataUrl = await toPng(
      captureRef.current,
      {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: 'transparent',
      }
    )

    const link =
      document.createElement('a')

    link.download =
      `ff14-nameplate-${selectedJob.id}.png`

    link.href = dataUrl
    link.click()
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-8 flex flex-col items-center gap-8">

      <div className="w-full max-w-4xl">

        <a
          href="/"
          className="
            inline-block
            mb-6
            bg-zinc-800
            hover:bg-zinc-700
            px-5
            py-3
            rounded-xl
            font-bold
            transition
          "
        >
          ← トップページへ戻る
        </a>

        <h1 className="text-4xl font-black mb-8">
          FF14 Nameplate Generator
        </h1>

        <div className="bg-zinc-800 rounded-2xl p-6 space-y-6">

          <div>
            <p className="font-bold mb-2">
              プレイヤーネーム
            </p>

            <input
              type="text"
              value={playerName}
              onChange={(e) =>
                setPlayerName(
                  e.target.value
                )
              }
              className="
                w-full
                bg-zinc-900
                rounded-xl
                p-3
                outline-none
              "
            />
          </div>

          <div>
            <p className="font-bold mb-2">
              サーバー名
            </p>

            <input
              type="text"
              value={serverName}
              onChange={(e) =>
                setServerName(
                  e.target.value
                )
              }
              className="
                w-full
                bg-zinc-900
                rounded-xl
                p-3
                outline-none
              "
            />
          </div>

          <div>
            <p className="font-bold mb-2">
              ジョブ選択
            </p>

            <select
              value={selectedJobId}
              onChange={(e) =>
                setSelectedJobId(
                  e.target.value
                )
              }
              className="
                w-full
                bg-zinc-900
                rounded-xl
                p-3
                outline-none
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

          <div>
            <p className="font-bold mb-2">
              アイコンタイプ
            </p>

            <select
              value={iconType}
              onChange={(e) =>
                setIconType(
                  e.target
                    .value as
                    | 'jp'
                    | 'dot'
                )
              }
              className="
                w-full
                bg-zinc-900
                rounded-xl
                p-3
                outline-none
              "
            >
              <option value="jp">
                日本語1文字アイコン
              </option>

              <option value="dot">
                ドットアイコン
              </option>
            </select>
          </div>

          <button
            onClick={generateImage}
            className="
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
      </div>

      <div className="w-full max-w-6xl">

        <p className="font-bold mb-4 text-zinc-400">
          プレビュー
        </p>

        <div
          ref={captureRef}
          className="
            inline-flex
            items-center
            gap-12
            bg-transparent
            p-8
          "
        >

          {/* アイコン */}
          <div
            className="
              h-[220px]
              flex
              items-center
              justify-center
            "
          >
            <Image
              src={
                iconType === 'jp'
                  ? selectedJob.jpIcon
                  : selectedJob.dotIcon
              }
              alt={selectedJob.name}
              width={220}
              height={220}
              className="object-contain"
              unoptimized
            />
          </div>

          {/* テキスト */}
          <div className="flex flex-col justify-center">

            <div
              className="
                text-[92px]
                font-black
                leading-none
              "
              style={{
                textShadow:
                  `
                  0 0 10px black,
                  0 0 20px black,
                  3px 3px 0 black
                  `,
              }}
            >
              {playerName}
            </div>

            <div
              className="
                text-[54px]
                font-black
                text-yellow-400
                leading-none
                mt-2
              "
              style={{
                textShadow:
                  `
                  0 0 10px black,
                  0 0 20px black,
                  2px 2px 0 black
                  `,
              }}
            >
              {selectedJob.name}
            </div>

            <div
              className="
                text-[44px]
                font-bold
                text-zinc-200
                leading-none
                mt-3
              "
              style={{
                textShadow:
                  `
                  0 0 10px black,
                  0 0 20px black,
                  2px 2px 0 black
                  `,
              }}
            >
              {serverName}
            </div>

          </div>

        </div>

      </div>

    </main>
  )
}