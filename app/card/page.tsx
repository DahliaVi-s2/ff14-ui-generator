'use client'

import { useEffect, useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import Image from 'next/image'
import Draggable from 'react-draggable'

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
]

export default function CardPage() {

  const captureRef =
    useRef<HTMLDivElement>(null)

  const dragRef =
  useRef<HTMLDivElement>(null)  

  const [backgroundImage, setBackgroundImage] =
    useState<string | null>(null)

  const [playerName, setPlayerName] =
    useState('Warrior of Light')

  const [serverName, setServerName] =
    useState('Meteor / Belias')

  const [selectedJobId, setSelectedJobId] =
    useState('pld')

  const [iconType, setIconType] =
    useState<'jp' | 'dot'>('jp')

  const [iconColor, setIconColor] =
    useState('#ffffff')

  const [iconGlow, setIconGlow] =
    useState(true)

  const [nameColor, setNameColor] =
    useState('#ffffff')

  const [jobColor, setJobColor] =
    useState('#facc15')

  const [serverColor, setServerColor] =
    useState('#e5e7eb')

  const [nameFont, setNameFont] =
    useState('Arial')

  const [jobFont, setJobFont] =
    useState('Georgia')

  const [serverFont, setServerFont] =
    useState('Verdana')

  const [showOverlay, setShowOverlay] =
    useState(true)

  const [overlayOpacity, setOverlayOpacity] =
    useState(40)

  const [frameEnabled, setFrameEnabled] =
    useState(true)

  const [cardWidth, setCardWidth] =
    useState(1600)

  const [cardHeight, setCardHeight] =
    useState(900)

  const selectedJob =
    jobs.find(
      (job) =>
        job.id === selectedJobId
    ) || jobs[0]

  const handleBackgroundUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {

      setBackgroundImage(
        reader.result as string
      )
    }

    reader.readAsDataURL(file)
  }

  const generateImage = async () => {

    if (!captureRef.current) return

    const dataUrl = await toPng(
      captureRef.current,
      {
        cacheBust: true,
        pixelRatio: 2,
      }
    )

    const link =
      document.createElement('a')

    link.download =
      `ff14-character-card.png`

    link.href = dataUrl

    link.click()
  }

  useEffect(() => {

    document.body.style.background =
      '#09090b'

  }, [])

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

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

        <h1 className="text-5xl font-black mb-10">
          FF14 Character Card Generator
        </h1>

        {/* =========================
            設定UI
        ========================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">

            <h2 className="text-3xl font-bold">
              背景設定
            </h2>

            <input
              type="file"
              accept="image/*"
              onChange={handleBackgroundUpload}
              className="block"
            />

            <div>

              <p className="mb-2">
                カード横幅
              </p>

              <input
                type="range"
                min="800"
                max="2400"
                value={cardWidth}
                onChange={(e) =>
                  setCardWidth(
                    Number(e.target.value)
                  )
                }
                className="w-full"
              />

              <p>{cardWidth}px</p>

            </div>

            <div>

              <p className="mb-2">
                カード高さ
              </p>

              <input
                type="range"
                min="600"
                max="1600"
                value={cardHeight}
                onChange={(e) =>
                  setCardHeight(
                    Number(e.target.value)
                  )
                }
                className="w-full"
              />

              <p>{cardHeight}px</p>

            </div>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={showOverlay}
                onChange={() =>
                  setShowOverlay(
                    !showOverlay
                  )
                }
              />

              背景暗幕ON
            </label>

            <div>

              <p className="mb-2">
                暗幕強度
              </p>

              <input
                type="range"
                min="0"
                max="100"
                value={overlayOpacity}
                onChange={(e) =>
                  setOverlayOpacity(
                    Number(e.target.value)
                  )
                }
                className="w-full"
              />

            </div>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={frameEnabled}
                onChange={() =>
                  setFrameEnabled(
                    !frameEnabled
                  )
                }
              />

              FF14風フレームON
            </label>

          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">

            <h2 className="text-3xl font-bold">
              ネームプレート設定
            </h2>

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
                bg-zinc-800
                rounded-xl
                p-3
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
                bg-zinc-800
                rounded-xl
                p-3
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
                bg-zinc-800
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
                bg-zinc-800
                rounded-xl
                p-3
              "
            >
              <option value="jp">
                日本語1文字アイコン
              </option>

              <option value="dot">
                ドットアイコン
              </option>
            </select>

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

              <div>
                <p className="mb-2">
                  プレイヤー名色
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
                  ジョブ色
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
                  サーバー色
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

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div>

                <p className="mb-2">
                  名前フォント
                </p>

                <select
                  value={nameFont}
                  onChange={(e) =>
                    setNameFont(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    bg-zinc-800
                    rounded-xl
                    p-3
                  "
                >
                  {fonts.map((font) => (
                    <option key={font}>
                      {font}
                    </option>
                  ))}
                </select>

              </div>

              <div>

                <p className="mb-2">
                  ジョブフォント
                </p>

                <select
                  value={jobFont}
                  onChange={(e) =>
                    setJobFont(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    bg-zinc-800
                    rounded-xl
                    p-3
                  "
                >
                  {fonts.map((font) => (
                    <option key={font}>
                      {font}
                    </option>
                  ))}
                </select>

              </div>

              <div>

                <p className="mb-2">
                  サーバーフォント
                </p>

                <select
                  value={serverFont}
                  onChange={(e) =>
                    setServerFont(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    bg-zinc-800
                    rounded-xl
                    p-3
                  "
                >
                  {fonts.map((font) => (
                    <option key={font}>
                      {font}
                    </option>
                  ))}
                </select>

              </div>

            </div>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={iconGlow}
                onChange={() =>
                  setIconGlow(
                    !iconGlow
                  )
                }
              />

              アイコン発光ON
            </label>

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
                text-xl
              "
            >
              キャラクターカード生成
            </button>

          </div>

        </div>

        {/* =========================
            カードプレビュー
        ========================= */}

        <div className="overflow-auto">

          <div
            ref={captureRef}
            className="
              relative
              overflow-hidden
              mx-auto
              rounded-3xl
            "
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              backgroundColor: '#111827',
              border: frameEnabled
                ? '4px solid #facc15'
                : 'none',
              boxShadow: frameEnabled
                ? `
                  0 0 30px rgba(250,204,21,0.4),
                  inset 0 0 20px rgba(250,204,21,0.3)
                `
                : 'none',
            }}
          >

            {/* 背景 */}

            {backgroundImage && (

              <Image
                src={backgroundImage}
                alt="background"
                fill
                className="object-cover"
                unoptimized
              />

            )}

            {/* 暗幕 */}

            {showOverlay && (

              <div
                className="absolute inset-0"
                style={{
                  background:
                    `rgba(0,0,0,${
                      overlayOpacity / 100
                    })`,
                }}
              />

            )}

            {/* 光沢 */}

            <div
              className="
                absolute
                inset-0
                pointer-events-none
              "
              style={{
                background:
                  `
                  linear-gradient(
                    to bottom,
                    rgba(255,255,255,0.08),
                    transparent 40%
                  )
                  `,
              }}
            />

            {/* =========================
                ドラッグネームプレート
            ========================= */}

            <Draggable nodeRef={dragRef}>

  <div
    ref={dragRef}
    className="
      absolute
      cursor-move
      select-none
    "
                style={{
                  top: '60%',
                  left: '5%',
                }}
              >

                <div
                  className="
                    flex
                    items-center
                    gap-10
                    bg-black/40
                    backdrop-blur-sm
                    px-8
                    py-6
                    rounded-2xl
                    border
                    border-white/20
                  "
                >

                  {/* アイコン */}

                  <div
                    className="
                      w-[180px]
                      h-[180px]
                      flex
                      items-center
                      justify-center
                    "
                  >

                    {iconType === 'jp' ? (

                      <div
                        className="
                          w-full
                          h-full
                        "
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
                              drop-shadow(0 0 20px ${iconColor})
                            `
                            : 'none',
                        }}
                      />

                    ) : (

                      <Image
                        src={selectedJob.dotIcon}
                        alt={selectedJob.name}
                        width={180}
                        height={180}
                        className="object-contain"
                        unoptimized
                      />

                    )}

                  </div>

                  {/* テキスト */}

                  <div className="flex flex-col">

                    <div
                      className="
                        text-[80px]
                        font-black
                        leading-none
                      "
                      style={{
                        color: nameColor,
                        fontFamily:
                          nameFont,
                        textShadow:
                          `
                          0 0 12px rgba(0,0,0,0.9),
                          0 0 24px rgba(0,0,0,0.9)
                          `,
                      }}
                    >
                      {playerName}
                    </div>

                    <div
                      className="
                        text-[48px]
                        font-bold
                        mt-3
                      "
                      style={{
                        color: jobColor,
                        fontFamily:
                          jobFont,
                        textShadow:
                          `
                          0 0 10px rgba(0,0,0,0.9)
                          `,
                      }}
                    >
                      {selectedJob.name}
                    </div>

                    <div
                      className="
                        text-[38px]
                        mt-2
                      "
                      style={{
                        color: serverColor,
                        fontFamily:
                          serverFont,
                        textShadow:
                          `
                          0 0 10px rgba(0,0,0,0.9)
                          `,
                      }}
                    >
                      {serverName}
                    </div>

                  </div>

                </div>

              </div>

            </Draggable>

          </div>

        </div>

      </div>

    </main>
  )
}