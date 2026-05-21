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
    id: 'sam',
    name: 'Samurai',
    jpIcon: '/jobs-kanji/Samurai_jp.png',
    dotIcon: '/jobs-dot/Samurai_dot.png',
  },
  {
    id: 'blm',
    name: 'Black Mage',
    jpIcon: '/jobs-kanji/BlackMage_jp.png',
    dotIcon: '/jobs-dot/BlackMage_dot.png',
  },
]

const fonts = [
  'Arial',
  'Verdana',
  'Trebuchet MS',
  'Georgia',
  'Times New Roman',
  'Impact',
  'Comic Sans MS',
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

  // =========================
  // アイコンカラー
  // =========================

  const [iconColor, setIconColor] =
    useState('#ffffff')

  const [iconGlow, setIconGlow] =
    useState(true)

  // =========================
  // 名前設定
  // =========================

  const [nameColor, setNameColor] =
    useState('#ffffff')

  const [nameOutline, setNameOutline] =
    useState('#000000')

  const [nameGlow, setNameGlow] =
    useState(true)

  const [
    nameOutlineEnabled,
    setNameOutlineEnabled,
  ] = useState(true)

  const [nameFont, setNameFont] =
    useState('Arial')

  // =========================
  // ジョブ設定
  // =========================

  const [jobColor, setJobColor] =
    useState('#facc15')

  const [jobOutline, setJobOutline] =
    useState('#000000')

  const [jobGlow, setJobGlow] =
    useState(true)

  const [
    jobOutlineEnabled,
    setJobOutlineEnabled,
  ] = useState(true)

  const [jobFont, setJobFont] =
    useState('Georgia')

  // =========================
  // サーバー設定
  // =========================

  const [serverColor, setServerColor] =
    useState('#e5e7eb')

  const [
    serverOutline,
    setServerOutline,
  ] = useState('#000000')

  const [serverGlow, setServerGlow] =
    useState(true)

  const [
    serverOutlineEnabled,
    setServerOutlineEnabled,
  ] = useState(true)

  const [serverFont, setServerFont] =
    useState('Verdana')

  const selectedJob =
    jobs.find(
      (job) =>
        job.id === selectedJobId
    ) || jobs[0]

  // =========================
  // PNG生成
  // =========================

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

  // =========================
  // シャドウ生成
  // =========================

  const createShadow = (
    outline: string,
    glow: boolean,
    outlineEnabled: boolean
  ) => {

    if (!outlineEnabled) {

      return glow
        ? `
          0 0 10px ${outline},
          0 0 20px ${outline}
        `
        : 'none'
    }

    return glow
      ? `
          0 0 10px ${outline},
          0 0 20px ${outline},
          3px 3px 0 ${outline},
          -3px -3px 0 ${outline}
        `
      : `
          3px 3px 0 ${outline},
          -3px -3px 0 ${outline}
        `
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-8 flex flex-col items-center gap-8">

      <div className="w-full max-w-5xl">

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
          FF14 Advanced Nameplate Generator
        </h1>

        <div className="bg-zinc-800 rounded-2xl p-6 space-y-8">

          {/* =========================
              基本設定
          ========================= */}

          <div className="space-y-5">

            <input
              type="text"
              value={playerName}
              onChange={(e) =>
                setPlayerName(
                  e.target.value
                )
              }
              placeholder="Player Name"
              className="
                w-full
                bg-zinc-900
                rounded-xl
                p-3
                outline-none
              "
            />

            <input
              type="text"
              value={serverName}
              onChange={(e) =>
                setServerName(
                  e.target.value
                )
              }
              placeholder="Server Name"
              className="
                w-full
                bg-zinc-900
                rounded-xl
                p-3
                outline-none
              "
            />

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

          {/* =========================
              アイコン設定
          ========================= */}

          <div className="bg-zinc-900 rounded-xl p-5 space-y-4">

            <h2 className="text-2xl font-bold">
              アイコン設定
            </h2>

            <div className="flex gap-6 flex-wrap">

              <div>
                <p className="mb-2">
                  アイコン色
                </p>

                <input
                  type="color"
                  value={iconColor}
                  onChange={(e) =>
                    setIconColor(
                      e.target.value
                    )
                  }
                />
              </div>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={iconGlow}
                  onChange={() =>
                    setIconGlow(
                      !iconGlow
                    )
                  }
                />

                発光ON
              </label>

            </div>

          </div>

          {/* =========================
              プレイヤーネーム設定
          ========================= */}

          <div className="bg-zinc-900 rounded-xl p-5 space-y-4">

            <h2 className="text-2xl font-bold">
              プレイヤーネーム設定
            </h2>

            <div className="flex gap-4 flex-wrap">

              <div>
                <p className="mb-2">
                  文字色
                </p>

                <input
                  type="color"
                  value={nameColor}
                  onChange={(e) =>
                    setNameColor(
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <p className="mb-2">
                  縁取り色
                </p>

                <input
                  type="color"
                  value={nameOutline}
                  onChange={(e) =>
                    setNameOutline(
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <p className="mb-2">
                  フォント
                </p>

                <select
                  value={nameFont}
                  onChange={(e) =>
                    setNameFont(
                      e.target.value
                    )
                  }
                  className="
                    bg-zinc-800
                    p-2
                    rounded
                  "
                >
                  {fonts.map((font) => (
                    <option
                      key={font}
                    >
                      {font}
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={nameGlow}
                  onChange={() =>
                    setNameGlow(
                      !nameGlow
                    )
                  }
                />

                発光ON
              </label>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={
                    nameOutlineEnabled
                  }
                  onChange={() =>
                    setNameOutlineEnabled(
                      !nameOutlineEnabled
                    )
                  }
                />

                縁取りON
              </label>

            </div>

          </div>

          {/* =========================
              ジョブ設定
          ========================= */}

          <div className="bg-zinc-900 rounded-xl p-5 space-y-4">

            <h2 className="text-2xl font-bold">
              ジョブ名設定
            </h2>

            <div className="flex gap-4 flex-wrap">

              <div>
                <p className="mb-2">
                  文字色
                </p>

                <input
                  type="color"
                  value={jobColor}
                  onChange={(e) =>
                    setJobColor(
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <p className="mb-2">
                  縁取り色
                </p>

                <input
                  type="color"
                  value={jobOutline}
                  onChange={(e) =>
                    setJobOutline(
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <p className="mb-2">
                  フォント
                </p>

                <select
                  value={jobFont}
                  onChange={(e) =>
                    setJobFont(
                      e.target.value
                    )
                  }
                  className="
                    bg-zinc-800
                    p-2
                    rounded
                  "
                >
                  {fonts.map((font) => (
                    <option
                      key={font}
                    >
                      {font}
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={jobGlow}
                  onChange={() =>
                    setJobGlow(
                      !jobGlow
                    )
                  }
                />

                発光ON
              </label>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={
                    jobOutlineEnabled
                  }
                  onChange={() =>
                    setJobOutlineEnabled(
                      !jobOutlineEnabled
                    )
                  }
                />

                縁取りON
              </label>

            </div>

          </div>

          {/* =========================
              サーバー設定
          ========================= */}

          <div className="bg-zinc-900 rounded-xl p-5 space-y-4">

            <h2 className="text-2xl font-bold">
              サーバー名設定
            </h2>

            <div className="flex gap-4 flex-wrap">

              <div>
                <p className="mb-2">
                  文字色
                </p>

                <input
                  type="color"
                  value={serverColor}
                  onChange={(e) =>
                    setServerColor(
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <p className="mb-2">
                  縁取り色
                </p>

                <input
                  type="color"
                  value={serverOutline}
                  onChange={(e) =>
                    setServerOutline(
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <p className="mb-2">
                  フォント
                </p>

                <select
                  value={serverFont}
                  onChange={(e) =>
                    setServerFont(
                      e.target.value
                    )
                  }
                  className="
                    bg-zinc-800
                    p-2
                    rounded
                  "
                >
                  {fonts.map((font) => (
                    <option
                      key={font}
                    >
                      {font}
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={serverGlow}
                  onChange={() =>
                    setServerGlow(
                      !serverGlow
                    )
                  }
                />

                発光ON
              </label>

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={
                    serverOutlineEnabled
                  }
                  onChange={() =>
                    setServerOutlineEnabled(
                      !serverOutlineEnabled
                    )
                  }
                />

                縁取りON
              </label>

            </div>

          </div>

          {/* =========================
              PNG生成
          ========================= */}

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

      {/* =========================
          プレビュー
      ========================= */}

      <div className="w-full max-w-7xl">

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

          {/* =========================
              アイコン
          ========================= */}

          <div
            className="
              h-[220px]
              w-[220px]
              flex
              items-center
              justify-center
            "
          >

            {iconType === 'jp' ? (

              <div
                className="w-full h-full"
                style={{
                  backgroundColor:
                    iconColor,

                  WebkitMaskImage:
                    `url(${selectedJob.jpIcon})`,

                  maskImage:
                    `url(${selectedJob.jpIcon})`,

                  WebkitMaskRepeat:
                    'no-repeat',

                  maskRepeat:
                    'no-repeat',

                  WebkitMaskPosition:
                    'center',

                  maskPosition:
                    'center',

                  WebkitMaskSize:
                    'contain',

                  maskSize:
                    'contain',

                  filter: iconGlow
                    ? `
                      drop-shadow(0 0 8px ${iconColor})
                      drop-shadow(0 0 16px ${iconColor})
                    `
                    : 'none',
                }}
              />

            ) : (

              <Image
                src={selectedJob.dotIcon}
                alt={selectedJob.name}
                width={220}
                height={220}
                className="object-contain"
                unoptimized
              />

            )}

          </div>

          {/* =========================
              テキスト
          ========================= */}

          <div className="flex flex-col justify-center">

            {/* プレイヤー名 */}

            <div
              className="
                text-[92px]
                font-black
                leading-none
              "
              style={{
                color: nameColor,
                fontFamily:
                  nameFont,
                textShadow:
                  createShadow(
                    nameOutline,
                    nameGlow,
                    nameOutlineEnabled
                  ),
              }}
            >
              {playerName}
            </div>

            {/* ジョブ名 */}

            <div
              className="
                text-[54px]
                font-black
                leading-none
                mt-2
              "
              style={{
                color: jobColor,
                fontFamily:
                  jobFont,
                textShadow:
                  createShadow(
                    jobOutline,
                    jobGlow,
                    jobOutlineEnabled
                  ),
              }}
            >
              {selectedJob.name}
            </div>

            {/* サーバー名 */}

            <div
              className="
                text-[44px]
                font-bold
                leading-none
                mt-3
              "
              style={{
                color: serverColor,
                fontFamily:
                  serverFont,
                textShadow:
                  createShadow(
                    serverOutline,
                    serverGlow,
                    serverOutlineEnabled
                  ),
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