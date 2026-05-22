'use client'

import { useRef, useState } from 'react'
import { Rnd } from 'react-rnd'
import { toPng } from 'html-to-image'
import Image from 'next/image'

interface LayerItem {
  id: string

  type: 'image' | 'text'

  name: string

  src?: string

  text?: string

  fontFamily?: string

  textColor?: string

  strokeEnabled?: boolean

  strokeColor?: string

  glowEnabled?: boolean

  glowColor?: string

  fontSize?: number

  x: number
  y: number

  width: number
  height: number

  rotation: number

  opacity: number

  zIndex: number

  visible: boolean

  locked: boolean

  isBackground?: boolean
}

const sizeTemplates = [
  {
    name: 'X Header',
    width: 1500,
    height: 500,
  },

  {
    name: 'X Post Landscape',
    width: 1600,
    height: 900,
  },

  {
    name: 'X Post Portrait',
    width: 1080,
    height: 1350,
  },

  {
    name: 'X Square',
    width: 1080,
    height: 1080,
  },

  {
    name: 'YouTube Thumbnail',
    width: 1280,
    height: 720,
  },

  {
    name: 'Smartphone Wallpaper',
    width: 1080,
    height: 1920,
  },

  {
    name: 'Desktop Wallpaper',
    width: 1920,
    height: 1080,
  },

  {
    name: 'FHD',
    width: 1920,
    height: 1080,
  },

  {
    name: '4K',
    width: 3840,
    height: 2160,
  },
]

const fonts = [
  'Arial',
  'Times New Roman',
  'Georgia',
  'Verdana',
  'Trebuchet MS',
  'Impact',
  'Comic Sans MS',
  'Courier New',
  'cursive',
  'fantasy',
  'serif',
  'sans-serif',
]

export default function CardEditorPage() {
  const captureRef =
    useRef<HTMLDivElement>(null)

  const [canvasWidth, setCanvasWidth] =
    useState(1600)

  const [canvasHeight, setCanvasHeight] =
    useState(900)

  const [previewScale, setPreviewScale] =
    useState(0.45)

  const [showGrid, setShowGrid] =
    useState(true)

  const [layers, setLayers] =
    useState<LayerItem[]>([])

  const [selectedLayerIds, setSelectedLayerIds] =
    useState<string[]>([])

  // =========================
  // テンプレ
  // =========================

  const applyTemplate = (
    width: number,
    height: number
  ) => {
    setCanvasWidth(width)
    setCanvasHeight(height)
  }

  // =========================
  // 更新
  // =========================

  const updateLayer = (
    id: string,
    updates: Partial<LayerItem>
  ) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === id
          ? {
              ...layer,
              ...updates,
            }
          : layer
      )
    )
  }

  // =========================
  // 背景アップロード
  // =========================

  const handleBackgroundUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      const img =
        new window.Image()

      img.onload = () => {
        const ratio = Math.min(
          canvasWidth / img.width,
          canvasHeight / img.height
        )

        const width =
          img.width * ratio

        const height =
          img.height * ratio

        const backgroundLayer: LayerItem = {
          id: crypto.randomUUID(),

          type: 'image',

          name: '背景',

          src: reader.result as string,

          x:
            (canvasWidth - width) / 2,

          y:
            (canvasHeight - height) / 2,

          width,
          height,

          rotation: 0,

          opacity: 1,

          zIndex: 0,

          visible: true,

          locked: false,

          isBackground: true,
        }

        setLayers((prev) => [
          backgroundLayer,
          ...prev.filter(
            (l) => !l.isBackground
          ),
        ])
      }

      img.src =
        reader.result as string
    }

    reader.readAsDataURL(file)
  }

  // =========================
  // 画像レイヤー追加
  // =========================

  const handleAddLayer = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      const img =
        new window.Image()

      img.onload = () => {
        const maxSize = 600

        let width =
          img.width

        let height =
          img.height

        if (
          width > maxSize
        ) {
          const ratio =
            maxSize / width

          width =
            maxSize

          height =
            height * ratio
        }

        if (
          height > maxSize
        ) {
          const ratio =
            maxSize / height

          height =
            maxSize

          width =
            width * ratio
        }

        const newLayer: LayerItem = {
          id: crypto.randomUUID(),

          type: 'image',

          name: file.name,

          src: reader.result as string,

          x: 200,
          y: 200,

          width,
          height,

          rotation: 0,

          opacity: 1,

          zIndex:
            layers.length + 1,

          visible: true,

          locked: false,
        }

        setLayers((prev) => [
          ...prev,
          newLayer,
        ])
      }

      img.src =
        reader.result as string
    }

    reader.readAsDataURL(file)
  }

  // =========================
  // テキスト追加
  // =========================

  const addTextLayer = () => {
    const newLayer: LayerItem = {
      id: crypto.randomUUID(),

      type: 'text',

      name: 'テキスト',

      text: 'NEW TEXT',

      fontFamily: 'Arial',

      textColor: '#ffffff',

      strokeEnabled: true,

      strokeColor: '#000000',

      glowEnabled: false,

      glowColor: '#ffffff',

      fontSize: 72,

      x: 300,
      y: 300,

      width: 600,
      height: 150,

      rotation: 0,

      opacity: 1,

      zIndex:
        layers.length + 1,

      visible: true,

      locked: false,
    }

    setLayers((prev) => [
      ...prev,
      newLayer,
    ])
  }

  // =========================
  // 表示切替
  // =========================

  const toggleVisibility = (
    id: string
  ) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === id
          ? {
              ...layer,
              visible:
                !layer.visible,
            }
          : layer
      )
    )
  }

  // =========================
  // ロック
  // =========================

  const toggleLock = (
    id: string
  ) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === id
          ? {
              ...layer,
              locked:
                !layer.locked,
            }
          : layer
      )
    )
  }

  // =========================
  // 選択
  // =========================

  const toggleLayerSelection = (
    id: string
  ) => {
    setSelectedLayerIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter(
          (item) => item !== id
        )
      }

      return [...prev, id]
    })
  }

  // =========================
  // PNG
  // =========================

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
      'ff14-character-card.png'

    link.href = dataUrl

    link.click()
  }

  return (
    <main
      className="
      min-h-screen
      bg-zinc-950
      text-white
      p-4
      xl:p-6
    "
    >
      <div
        className="
        max-w-[1800px]
        mx-auto
      "
      >
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
          "
        >
          ← トップへ戻る
        </a>

        <h1
          className="
          text-4xl
          font-black
          mb-6
        "
        >
          FF14 Character Card Studio
        </h1>

        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-[340px_1fr]
          gap-6
        "
        >
          {/* 左UI */}

          <div
            className="
            space-y-5
          "
          >
            {/* サイズ */}

            <div
              className="
              bg-zinc-900
              rounded-2xl
              p-5
              space-y-5
            "
            >
              <h2
                className="
                text-2xl
                font-bold
              "
              >
                キャンバスサイズ
              </h2>

              <div
                className="
                grid
                grid-cols-2
                gap-2
              "
              >
                {sizeTemplates.map(
                  (template) => (
                    <button
                      key={template.name}
                      onClick={() =>
                        applyTemplate(
                          template.width,
                          template.height
                        )
                      }
                      className="
                        bg-zinc-800
                        hover:bg-zinc-700
                        rounded-xl
                        p-3
                        text-xs
                        font-bold
                      "
                    >
                      {template.name}
                    </button>
                  )
                )}
              </div>

              <div>
                <div
                  className="
                  flex
                  justify-between
                  mb-2
                "
                >
                  <p>横幅</p>

                  <input
                    type="number"
                    value={canvasWidth}
                    onChange={(e) =>
                      setCanvasWidth(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="
                      w-28
                      bg-zinc-800
                      rounded-lg
                      px-3
                      py-2
                    "
                  />
                </div>

                <input
                  type="range"
                  min="300"
                  max="5000"
                  value={canvasWidth}
                  onChange={(e) =>
                    setCanvasWidth(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
                    w-full
                  "
                />
              </div>

              <div>
                <div
                  className="
                  flex
                  justify-between
                  mb-2
                "
                >
                  <p>高さ</p>

                  <input
                    type="number"
                    value={canvasHeight}
                    onChange={(e) =>
                      setCanvasHeight(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="
                      w-28
                      bg-zinc-800
                      rounded-lg
                      px-3
                      py-2
                    "
                  />
                </div>

                <input
                  type="range"
                  min="300"
                  max="5000"
                  value={canvasHeight}
                  onChange={(e) =>
                    setCanvasHeight(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="
                    w-full
                  "
                />
              </div>
            </div>

            {/* 背景 */}

            <div
              className="
              bg-zinc-900
              rounded-2xl
              p-5
            "
            >
              <h2
                className="
                text-2xl
                font-bold
                mb-4
              "
              >
                背景画像
              </h2>

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleBackgroundUpload
                }
              />
            </div>

            {/* レイヤー */}

            <div
              className="
              bg-zinc-900
              rounded-2xl
              p-5
              space-y-4
            "
            >
              <h2
                className="
                text-2xl
                font-bold
              "
              >
                レイヤー追加
              </h2>

              <input
                type="file"
                accept="image/*"
                onChange={handleAddLayer}
              />

              <button
                onClick={addTextLayer}
                className="
                  w-full
                  bg-cyan-600
                  hover:bg-cyan-500
                  rounded-xl
                  p-3
                  font-bold
                "
              >
                テキスト追加
              </button>
            </div>

            {/* グリッド */}

            <div
              className="
              bg-zinc-900
              rounded-2xl
              p-5
            "
            >
              <label
                className="
                flex
                items-center
                gap-3
              "
              >
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={(e) =>
                    setShowGrid(
                      e.target.checked
                    )
                  }
                />

                グリッド表示
              </label>
            </div>

            {/* レイヤー管理 */}

            <div
              className="
              bg-zinc-900
              rounded-2xl
              p-5
              space-y-4
            "
            >
              <h2
                className="
                text-2xl
                font-bold
              "
              >
                レイヤー管理
              </h2>

              <div
                className="
                space-y-3
                max-h-[700px]
                overflow-auto
              "
              >
                {[...layers]
                  .sort(
                    (a, b) =>
                      b.zIndex - a.zIndex
                  )
                  .map((layer) => (
                    <div
                      key={layer.id}
                      onClick={() =>
                        toggleLayerSelection(
                          layer.id
                        )
                      }
                      className={`
                        p-4
                        rounded-xl
                        border-2
                        transition

                        ${
                          selectedLayerIds.includes(
                            layer.id
                          )
                            ? `
                              border-cyan-400
                              bg-cyan-500/10
                            `
                            : `
                              border-transparent
                              bg-zinc-800
                            `
                        }
                      `}
                    >
                      <div
                        className="
                        flex
                        items-center
                        gap-2
                        mb-3
                      "
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation()

                            toggleVisibility(
                              layer.id
                            )
                          }}
                        >
                          {
                            layer.visible
                              ? '👁'
                              : '🚫'
                          }
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation()

                            toggleLock(
                              layer.id
                            )
                          }}
                        >
                          {
                            layer.locked
                              ? '🔒'
                              : '🔓'
                          }
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation()

                            setLayers((prev) =>
                              prev.filter(
                                (item) =>
                                  item.id !==
                                  layer.id
                              )
                            )

                            setSelectedLayerIds(
                              (prev) =>
                                prev.filter(
                                  (id) =>
                                    id !==
                                    layer.id
                                )
                            )
                          }}
                          className="
                            text-red-400
                            hover:text-red-300
                          "
                        >
                          🗑
                        </button>

                        <input
                          type="text"
                          value={layer.name}
                          onChange={(e) =>
                            updateLayer(
                              layer.id,
                              {
                                name:
                                  e.target.value,
                              }
                            )
                          }
                          className="
                            flex-1
                            bg-zinc-700
                            rounded-lg
                            px-3
                            py-2
                          "
                        />
                      </div>

                      {layer.type ===
                        'text' && (
                        <div
                          className="
                          space-y-3
                        "
                        >
                          <textarea
                            value={layer.text}
                            onChange={(e) =>
                              updateLayer(
                                layer.id,
                                {
                                  text:
                                    e.target
                                      .value,
                                }
                              )
                            }
                            className="
                              w-full
                              bg-zinc-700
                              rounded-lg
                              p-3
                            "
                          />

                          <select
                            value={
                              layer.fontFamily
                            }
                            onChange={(e) =>
                              updateLayer(
                                layer.id,
                                {
                                  fontFamily:
                                    e.target
                                      .value,
                                }
                              )
                            }
                            className="
                              w-full
                              bg-zinc-700
                              rounded-lg
                              p-3
                            "
                          >
                            {fonts.map(
                              (font) => (
                                <option
                                  key={font}
                                  value={font}
                                >
                                  {font}
                                </option>
                              )
                            )}
                          </select>

                          <div
                            className="
                            flex
                            gap-2
                          "
                          >
                            <input
                              type="color"
                              value={
                                layer.textColor
                              }
                              onChange={(e) =>
                                updateLayer(
                                  layer.id,
                                  {
                                    textColor:
                                      e.target
                                        .value,
                                  }
                                )
                              }
                            />

                            <input
                              type="color"
                              value={
                                layer.strokeColor
                              }
                              onChange={(e) =>
                                updateLayer(
                                  layer.id,
                                  {
                                    strokeColor:
                                      e.target
                                        .value,
                                  }
                                )
                              }
                            />

                            <input
                              type="color"
                              value={
                                layer.glowColor
                              }
                              onChange={(e) =>
                                updateLayer(
                                  layer.id,
                                  {
                                    glowColor:
                                      e.target
                                        .value,
                                  }
                                )
                              }
                            />
                          </div>

                          <div
                            className="
                            flex
                            gap-4
                            text-sm
                          "
                          >
                            <label
                              className="
                              flex
                              items-center
                              gap-2
                            "
                            >
                              <input
                                type="checkbox"
                                checked={
                                  layer.strokeEnabled
                                }
                                onChange={(
                                  e
                                ) =>
                                  updateLayer(
                                    layer.id,
                                    {
                                      strokeEnabled:
                                        e.target
                                          .checked,
                                    }
                                  )
                                }
                              />

                              枠
                            </label>

                            <label
                              className="
                              flex
                              items-center
                              gap-2
                            "
                            >
                              <input
                                type="checkbox"
                                checked={
                                  layer.glowEnabled
                                }
                                onChange={(
                                  e
                                ) =>
                                  updateLayer(
                                    layer.id,
                                    {
                                      glowEnabled:
                                        e.target
                                          .checked,
                                    }
                                  )
                                }
                              />

                              発光
                            </label>
                          </div>

                          <div>
                            <p
                              className="
                              mb-1
                              text-sm
                            "
                            >
                              フォントサイズ
                            </p>

                            <input
                              type="range"
                              min="20"
                              max="200"
                              value={
                                layer.fontSize
                              }
                              onChange={(e) =>
                                updateLayer(
                                  layer.id,
                                  {
                                    fontSize:
                                      Number(
                                        e
                                          .target
                                          .value
                                      ),
                                  }
                                )
                              }
                              className="
                                w-full
                              "
                            />
                          </div>
                        </div>
                      )}

                      <div
                        className="
                        mt-4
                      "
                      >
                        <p
                          className="
                          text-sm
                          mb-1
                        "
                        >
                          回転
                        </p>

                        <input
                          type="range"
                          min="-180"
                          max="180"
                          value={
                            layer.rotation
                          }
                          onChange={(e) =>
                            updateLayer(
                              layer.id,
                              {
                                rotation:
                                  Number(
                                    e.target
                                      .value
                                  ),
                              }
                            )
                          }
                          className="
                            w-full
                          "
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <button
              onClick={generateImage}
              className="
                w-full
                bg-purple-600
                hover:bg-purple-500
                p-4
                rounded-2xl
                text-xl
                font-black
              "
            >
              PNG生成
            </button>
          </div>

          {/* 右 */}

          <div
            className="
              overflow-auto
              bg-zinc-900
              rounded-2xl
              p-4
            "
          >
            <div
              className="
              flex
              items-center
              gap-4
              mb-4
            "
            >
              <p
                className="
                font-bold
              "
              >
                プレビュー倍率
              </p>

              <input
                type="range"
                min="0.1"
                max="1"
                step="0.01"
                value={previewScale}
                onChange={(e) =>
                  setPreviewScale(
                    Number(e.target.value)
                  )
                }
                className="
                  w-full
                "
              />
            </div>

            {/* プレビュー */}

            <div className="flex justify-center overflow-visible">
              <div
                style={{
                  width: `${canvasWidth * previewScale}px`,
                  height: `${canvasHeight * previewScale}px`,
                  overflow: 'visible',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    transform: `scale(${previewScale})`,
                    transformOrigin:
                      'top left',
                    width: `${canvasWidth}px`,
                    height: `${canvasHeight}px`,
                    overflow: 'visible',
                    position: 'relative',
                  }}
                >
                  {/* 編集領域 */}
<div
  className="relative overflow-visible"
  style={{
    width: `${canvasWidth}px`,
    height: `${canvasHeight}px`,
  }}
>
  {/* 実際の書き出しキャンバス */}
  <div
    ref={captureRef}
    className="
      relative
      overflow-hidden
      rounded-3xl
      border-4
      border-white/20
      bg-zinc-900
    "
    style={{
      width: `${canvasWidth}px`,
      height: `${canvasHeight}px`,
    }}
  >
    {/* グリッド */}
    {showGrid && (
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-30
          z-[9999]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    )}
  </div>

  {/* 編集用レイヤー */}
  {layers
    .sort((a, b) => a.zIndex - b.zIndex)
    .map((layer) => {
      const isSelected =
        selectedLayerIds.includes(layer.id)

      return (
        <Rnd
          key={layer.id}
          scale={previewScale}
          bounds={undefined}
          disableDragging={
            !isSelected || layer.locked
          }
          enableResizing={
            isSelected && !layer.locked
          }
          size={{
            width: layer.width,
            height: layer.height,
          }}
          position={{
            x: layer.x,
            y: layer.y,
          }}
          onDragStop={(e, d) => {
            updateLayer(layer.id, {
              x: d.x,
              y: d.y,
            })
          }}
          onResizeStop={(
            e,
            direction,
            ref,
            delta,
            position
          ) => {
            updateLayer(layer.id, {
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height),
              x: position.x,
              y: position.y,
            })
          }}
          onMouseDown={(e) => {
            if (!e.shiftKey) {
              setSelectedLayerIds([layer.id])
            } else {
              toggleLayerSelection(layer.id)
            }
          }}
          style={{
            zIndex: layer.zIndex,
            opacity: layer.visible ? 1 : 0,
            pointerEvents: layer.visible
              ? 'auto'
              : 'none',
            overflow: 'visible',
          }}
        >
          {/* 表示用 */}
          <div
            className="relative w-full h-full"
            style={{
              transform: `rotate(${layer.rotation}deg)`,
              opacity: layer.opacity,
            }}
          >
            {/* 非選択時だけクリップ */}
            <div
              className={
                isSelected
                  ? 'overflow-visible w-full h-full'
                  : 'overflow-hidden w-full h-full'
              }
            >
              {layer.type === 'image' && (
                <Image
                  src={layer.src || ''}
                  alt="layer"
                  fill
                  className="
                    object-contain
                    pointer-events-none
                    select-none
                  "
                  unoptimized
                />
              )}

              {layer.type === 'text' && (
                <div
                  className="
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                    text-center
                    break-words
                    whitespace-pre-wrap
                    leading-none
                    pointer-events-none
                    select-none
                  "
                  style={{
                    fontFamily: layer.fontFamily,
                    color: layer.textColor,
                    fontSize: `${layer.fontSize}px`,
                    WebkitTextStroke:
                      layer.strokeEnabled
                        ? `3px ${layer.strokeColor}`
                        : '0px transparent',
                    textShadow:
                      layer.glowEnabled
                        ? `0 0 15px ${layer.glowColor},
                           0 0 30px ${layer.glowColor}`
                        : 'none',
                  }}
                >
                  {layer.text}
                </div>
              )}
            </div>

            {/* 選択枠 */}
            {isSelected && (
              <div
                className="
                  absolute
                  inset-0
                  border-2
                  border-cyan-400
                  shadow-[0_0_25px_rgba(34,211,238,0.9)]
                  pointer-events-none
                  z-50
                "
              />
            )}
          </div>
        </Rnd>
      )
    })}
</div>

                    {showGrid && (
                      <div
                        className="
                          absolute
                          inset-0
                          pointer-events-none
                          opacity-30
                          z-[9999]
                        "
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)
                          `,

                          backgroundSize:
                            '50px 50px',
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}