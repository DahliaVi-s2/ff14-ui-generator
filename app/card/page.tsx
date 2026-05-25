'use client'

import Image from 'next/image'
import Link from 'next/link'
import { toPng } from 'html-to-image'
import { Rnd } from 'react-rnd'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import {
  ChangeEvent,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react'

const jobNames = [
  "Paladin", "Warrior", "DarkKnight", "Gunbreaker", "WhiteMage", "Scholar",
  "Astrologian", "Sage", "Monk", "Dragoon", "Ninja", "Samurai", "Reaper",
  "Viper", "Bard", "Machinist", "Dancer", "BlackMage", "Summoner", "RedMage",
  "BlueMage", "Pictomancer",
];

const jobDotList = jobNames.map(name => ({ name, src: `/jobs-dot/${name}_dot.png` }));
const jobKanjiList = jobNames.map(name => ({ name, src: `/jobs-kanji/${name}_jp.png` }));

interface LayerItem {
  id: string
  type: 'image' | 'text' | 'shape'
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
  fontWeight?: string
  isVertical?: boolean
  shapeColor?: string
  borderRadius?: number
  x: number
  y: number
  width: number
  height: number
  rotation: number
  opacity: number
  visible: boolean
  locked: boolean
  zIndex: number
  isBackground?: boolean
  
}

const sizeTemplates = [
  { name: 'X Header', width: 1500, height: 500 },
  { name: 'X Post Landscape', width: 1600, height: 900 },
  { name: 'X Post Portrait', width: 1080, height: 1350 },
  { name: 'X Square', width: 1080, height: 1080 },
  { name: 'YouTube Thumbnail', width: 1280, height: 720 },
  { name: 'Smartphone Wallpaper', width: 1080, height: 1920 },
  { name: 'Desktop Wallpaper', width: 1920, height: 1080 },
  { name: 'FHD', width: 1920, height: 1080 },
  { name: '4K', width: 3840, height: 2160 },
]

const fonts = [
  { name: 'はちまるポップ', value: "'Hachi Maru Pop', sans-serif" },
  { name: 'デラゴシック (Dela Gothic One)', value: "'Dela Gothic One', sans-serif" },
  { name: 'ステッキ (Stecki)', value: "'Stecki', sans-serif" },
  { name: 'ドットゴシック16', value: "'DotGothic16', sans-serif" },
  { name: 'モノマニアック (Monomaniac One)', value: "'Monomaniac One', sans-serif" },
  { name: 'M PLUS Rounded 1c (丸ゴシック)', value: "'M PLUS Rounded 1c', sans-serif" },
  { name: 'Noto Serif JP (美麗明朝)', value: "'Noto Serif JP', serif" },
  { name: 'Yomogi (手書き)', value: "'Yomogi', sans-serif" },
  { name: 'Walter Turncoat', value: "'Walter Turncoat', cursive" },
  { name: 'Rock Salt', value: "'Rock Salt', cursive" },
  { name: 'Bad Script', value: "'Bad Script', cursive" },
  { name: 'Amatic SC', value: "'Amatic SC', cursive" },
  { name: 'Allura', value: "'Allura', cursive" },
  { name: 'Tangerine', value: "'Tangerine', cursive" },
  { name: 'Itim', value: "'Itim', cursive" },
  { name: 'Cinzel Decorative', value: "'Cinzel Decorative', serif" },
  { name: 'Great Vibes', value: "'Great Vibes', cursive" },
  { name: 'Alex Brush', value: "'Alex Brush', cursive" },
  { name: 'Caveat (洋風手書き)', value: "'Caveat', cursive" },
  { name: 'Arial', value: 'Arial, sans-serif' },
  { name: 'Times New Roman', value: "'Times New Roman', serif" },
  { name: 'Impact', value: 'Impact, sans-serif' },
]

function LayerContent({ layer }: { layer: LayerItem }) {
  if (!layer) return null;

  // 漢字アイコン(jp)か判定
  const isKanji = layer.src?.includes('_jp.png');

  return (
    <div className="w-full h-full relative" style={{ transform: `rotate(${layer.rotation ?? 0}deg)`, transformOrigin: 'center' }}>
      {layer.type === 'image' && (
        <div
          style={{
            width: '100%',
            height: '100%',
            // 漢字なら「型抜き」をして色を塗る。ドット等は通常表示。
            WebkitMaskImage: isKanji ? `url(${layer.src})` : 'none',
            maskImage: isKanji ? `url(${layer.src})` : 'none',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            backgroundColor: isKanji ? (layer.shapeColor || '#000000') : 'transparent',
            backgroundImage: !isKanji ? `url(${layer.src})` : 'none',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
      )}
      {layer.type === 'text' && (
        <div className="w-full h-full flex items-center justify-center text-center whitespace-pre-wrap break-words leading-relaxed pointer-events-none select-none"
          style={{ fontFamily: layer.fontFamily, color: layer.textColor, fontSize: `${layer.fontSize}px`, writingMode: layer.isVertical ? 'vertical-rl' : 'horizontal-tb', WebkitWritingMode: layer.isVertical ? 'vertical-rl' : 'horizontal-tb', WebkitTextStroke: layer.strokeEnabled ? `3px ${layer.strokeColor || '#000000'}` : '0px transparent', textShadow: layer.glowEnabled ? `0 0 12px ${layer.glowColor || '#ffffff'}, 0 0 24px ${layer.glowColor || '#ffffff'}` : 'none' }}>
          {layer.text}
        </div>
      )}
      {layer.type === 'shape' && <div className="w-full h-full pointer-events-none select-none" style={{ backgroundColor: layer.shapeColor || '#000000', borderRadius: `${layer.borderRadius || 0}px` }} />}
    </div>
  )
}

export default function CardEditorPage() {
  const captureRef = useRef<HTMLDivElement>(null)
  const bgInputRef = useRef<HTMLInputElement>(null)
  const layerInputRef = useRef<HTMLInputElement>(null)
  const [canvasWidth, setCanvasWidth] = useState(1080)
  const [canvasHeight, setCanvasHeight] = useState(1350)
  const [previewScale, setPreviewScale] = useState(0.55)
  const [showGrid, setShowGrid] = useState(true)
  const [gridOpacity, setGridOpacity] = useState(0.4)
  const [gridColor, setGridColor] = useState('#ffffff')
  const [layers, setLayers] = useState<LayerItem[]>([])
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null)
  const [kanjiColor, setKanjiColor] = useState('#ffffff');
  const [history, setHistory] = useState<{ layers: LayerItem[]; canvasWidth: number; canvasHeight: number }[]>([{ layers: [], canvasWidth: 1080, canvasHeight: 1350 }])
  const [historyIndex, setHistoryIndex] = useState(0)

  const handleColorChange = (color: string) => {
    if (selectedLayerId) {
      updateLayer(selectedLayerId, { shapeColor: color });
    }
  };

  const saveToHistory = (newLayers: LayerItem[], currentW = canvasWidth, currentH = canvasHeight) => {
    const cleanHistory = history.slice(0, historyIndex + 1)
    setHistory([...cleanHistory, { layers: newLayers, canvasWidth: currentW, canvasHeight: currentH }])
    setHistoryIndex(cleanHistory.length)
  }

  const handleUndo = () => {
    if (historyIndex > 0) {
      const targetIndex = historyIndex - 1
      setHistoryIndex(targetIndex)
      setLayers(history[targetIndex].layers)
      setCanvasWidth(history[targetIndex].canvasWidth)
      setCanvasHeight(history[targetIndex].canvasHeight)
    }
  }

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const targetIndex = historyIndex + 1
      setHistoryIndex(targetIndex)
      setLayers(history[targetIndex].layers)
      setCanvasWidth(history[targetIndex].canvasWidth)
      setCanvasHeight(history[targetIndex].canvasHeight)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.metaKey || e.ctrlKey
      if (isCmdOrCtrl && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? handleRedo() : handleUndo() }
      if (isCmdOrCtrl && e.key.toLowerCase() === 'y') { e.preventDefault(); handleRedo() }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [historyIndex, history])

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target || target.closest('.react-draggable') || target.closest('[class*="rnd"]') || target.closest('button') || target.closest('input') || target.closest('select')) return
      setSelectedLayerId(null)
    }
    window.addEventListener('mousedown', handleGlobalClick)
    return () => window.removeEventListener('mousedown', handleGlobalClick)
  }, [])

  const sortedLayers = useMemo(() => [...layers].sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0)), [layers])
  const listOrderedLayers = useMemo(() => [...layers].sort((a, b) => (b.zIndex || 0) - (a.zIndex || 0)), [layers])
  const selectedLayer = useMemo(() => layers.find((l) => l.id === selectedLayerId) || null, [layers, selectedLayerId])

  const hexToRgbaStr = (hex: string, alpha: number) => {
    if (!hex || hex.length < 7) return `rgba(255, 255, 255, ${alpha})`
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const updateLayer = (id: string, updates: Partial<LayerItem>, skipHistory = false) => {
    setLayers((prev) => {
      const nextLayers = prev.map((l) => l.id === id ? { ...l, ...updates } : l)
      if (!skipHistory) saveToHistory(nextLayers)
      return nextLayers
    })
  }

  const handleKanjiColorChange = (color: string) => {
    setKanjiColor(color); // 全体設定用
    if (selectedLayerId) {
      updateLayer(selectedLayerId, { shapeColor: color }); // 選択中のレイヤーにも反映
    }
  };

  const removeLayer = (id: string) => {
    const nextLayers = layers.filter((l) => l.id !== id)
    setLayers(nextLayers)
    if (selectedLayerId === id) setSelectedLayerId(null)
    saveToHistory(nextLayers)
  }

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const reordered = [...layers].sort((a, b) => (b.zIndex || 0) - (a.zIndex || 0))
    const [moved] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, moved)
    const finalLayers = reordered.map((layer, index) => ({ ...layer, zIndex: layer.isBackground ? 0 : reordered.length - index }))
    setLayers(finalLayers)
    saveToHistory(finalLayers)
  }

  const changeCanvasDimensions = (w: number, h: number) => { setCanvasWidth(w); setCanvasHeight(h); saveToHistory(layers, w, h) }
  const handleTemplateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const template = sizeTemplates.find((t) => t.name === e.target.value)
    if (template) changeCanvasDimensions(template.width, template.height)
  }

  const loadImage = (file: File): Promise<{ src: string; width: number; height: number }> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        const img = new window.Image()
        img.onload = () => resolve({ src: reader.result as string, width: img.width, height: img.height })
        img.src = reader.result as string
      }
      reader.readAsDataURL(file)
    })
  }

  const handleBackgroundUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const img = await loadImage(file)
    const ratio = Math.max(canvasWidth / img.width, canvasHeight / img.height)
    const backgroundLayer: LayerItem = {
      id: crypto.randomUUID(), type: 'image', name: '背景', src: img.src,
      x: (canvasWidth - img.width * ratio) / 2, y: (canvasHeight - img.height * ratio) / 2,
      width: img.width * ratio, height: img.height * ratio, rotation: 0, opacity: 1, visible: true, locked: false, zIndex: 0, isBackground: true,
    }
    const nextLayers = [backgroundLayer, ...layers.filter((l) => !l.isBackground)]
    setLayers(nextLayers)
    setSelectedLayerId(backgroundLayer.id)
    saveToHistory(nextLayers)
  }

  const addIconLayer = (src: string, name: string) => {
    const newLayer: LayerItem = {
      id: crypto.randomUUID(), type: 'image', name, src,
      x: 100, y: 100, width: 100, height: 100,
      rotation: 0, opacity: 1, visible: true, locked: false,
      zIndex: layers.length + 1,
      // 漢字アイコンの場合は色変更を反映するためのプロパティを保持
      shapeColor: kanjiColor
    }
    const nextLayers = [...layers, newLayer]
    setLayers(nextLayers)
    setSelectedLayerId(newLayer.id)
    saveToHistory(nextLayers)
  }

  const addKanjiTextLayer = (name: string) => {
    const newLayer: LayerItem = {
      id: crypto.randomUUID(), type: 'text', name, text: name, fontFamily: "'Dela Gothic One', sans-serif",
      textColor: kanjiColor, fontSize: 80, x: 100, y: 100, width: 200, height: 100,
      rotation: 0, opacity: 1, visible: true, locked: false, zIndex: layers.length + 1,
    }
    const nextLayers = [...layers, newLayer]
    setLayers(nextLayers)
    setSelectedLayerId(newLayer.id)
    saveToHistory(nextLayers)
  }

  const handleAddLayer = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const img = await loadImage(file)
    const newLayer: LayerItem = {
      id: crypto.randomUUID(), type: 'image', name: file.name, src: img.src,
      x: 200, y: 200, width: Math.min(img.width, 600), height: Math.min(img.height, 600),
      rotation: 0, opacity: 1, visible: true, locked: false, zIndex: layers.length + 1,
    }
    const nextLayers = [...layers, newLayer]
    setLayers(nextLayers)
    setSelectedLayerId(newLayer.id)
    saveToHistory(nextLayers)
  }

  const addTextLayer = () => {
    const newLayer: LayerItem = {
      id: crypto.randomUUID(), type: 'text', name: 'テキスト', text: '© SQUARE ENIX', fontFamily: "'M PLUS Rounded 1c', sans-serif",
      textColor: '#ffffff', strokeEnabled: true, strokeColor: '#000000', fontSize: 72, x: 250, y: 250, width: 600, height: 150,
      rotation: 0, opacity: 1, visible: true, locked: false, zIndex: layers.length + 1,
    }
    const nextLayers = [...layers, newLayer]
    setLayers(nextLayers)
    setSelectedLayerId(newLayer.id)
    saveToHistory(nextLayers)
  }

  const addShapeLayer = () => {
    const newLayer: LayerItem = {
      id: crypto.randomUUID(), type: 'shape', name: '図形', shapeColor: '#000000', borderRadius: 16,
      x: 300, y: 400, width: 400, height: 200, rotation: 0, opacity: 0.5, visible: true, locked: false, zIndex: layers.length + 1,
    }
    const nextLayers = [...layers, newLayer]
    setLayers(nextLayers)
    setSelectedLayerId(newLayer.id)
    saveToHistory(nextLayers)
  }

  const generateImage = async () => {
    if (!captureRef.current) return
    const dataUrl = await toPng(captureRef.current, { cacheBust: true, pixelRatio: 2, filter: (node) => !(node instanceof HTMLElement && node.id === 'grid-overlay') })
    const link = document.createElement('a')
    link.download = 'ff14-card.png'
    link.href = dataUrl
    link.click()
  }

  const currentTemplateName = sizeTemplates.find((t) => t.width === canvasWidth && t.height === canvasHeight)?.name || ''

  return (
    <main className="min-h-screen bg-black text-white p-5">
      {/* --- ここに追加してください --- */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-3 rounded-2xl font-bold transition-all border border-zinc-700 shadow-lg"
        >
          <span>🏠</span> トップページに戻る
        </Link>
      </div>
      {/* --------------------------- */}

      {/* Google Fonts を動的に一括インポートするタグ */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=Dela+Gothic+One&family=Stecki&family=Monomaniac+One&family=Walter+Turncoat&family=Rock+Salt&family=Bad+Script&family=Amatic+SC:wght@400;700&family=Allura&family=Tangerine:wght@700&family=Itim&display=swap');
      `}} />

      <div className="max-w-[2200px] mx-auto">
        <h1 className="text-5xl font-black mb-6">FF14 Character Card Studio</h1>

        <div className="grid grid-cols-[340px_340px_1fr] gap-6">

          {/* LEFT PANEL */}
          <div className="space-y-5">
            {/* HISTORY (戻る / 進む ボタン) */}
            <div className="bg-zinc-900 rounded-3xl p-4 grid grid-cols-2 gap-3">
              <button
                onClick={handleUndo}
                disabled={historyIndex === 0}
                className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:hover:bg-zinc-800 rounded-2xl py-3 px-4 font-bold transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>⬅️</span> 戻る <span className="text-[10px] text-zinc-500 font-mono">Ctrl+Z</span>
              </button>
              <button
                onClick={handleRedo}
                disabled={historyIndex >= history.length - 1}
                className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:hover:bg-zinc-800 rounded-2xl py-3 px-4 font-bold transition-all text-sm flex items-center justify-center gap-2"
              >
                進む <span>➡️</span> <span className="text-[10px] text-zinc-500 font-mono">Ctrl+Y</span>
              </button>
            </div>

            {/* SIZE */}
            <div className="bg-zinc-900 rounded-3xl p-5 space-y-5">
              <h2 className="text-3xl font-black">キャンバスサイズ</h2>
              <div className="space-y-2">
                <p className="text-sm font-bold text-zinc-400">テンプレートから選択</p>
                <select
                  value={currentTemplateName}
                  onChange={handleTemplateChange}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-3 font-bold text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="">-- カスタムサイズ --</option>
                  {sizeTemplates.map((template) => (
                    <option key={template.name} value={template.name}>
                      {template.name} ({template.width} × {template.height})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-5 border-t border-zinc-800 pt-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-bold">横幅</p>
                    <input
                      type="number"
                      value={canvasWidth}
                      onChange={(e) => changeCanvasDimensions(Number(e.target.value) || 300, canvasHeight)}
                      className="w-28 bg-zinc-800 rounded-xl px-3 py-2"
                    />
                  </div>
                  <input type="range" min="300" max="5000" value={canvasWidth} onChange={(e) => changeCanvasDimensions(Number(e.target.value), canvasHeight)} className="w-full" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-bold">高さ</p>
                    <input
                      type="number"
                      value={canvasHeight}
                      onChange={(e) => changeCanvasDimensions(canvasWidth, Number(e.target.value) || 300)}
                      className="w-28 bg-zinc-800 rounded-xl px-3 py-2"
                    />
                  </div>
                  <input type="range" min="300" max="5000" value={canvasHeight} onChange={(e) => changeCanvasDimensions(canvasWidth, Number(e.target.value))} className="w-full" />
                </div>
              </div>
            </div>

            {/* BG */}
            <div className="bg-zinc-900 rounded-3xl p-5">
              <h2 className="text-3xl font-black mb-4">背景画像</h2>
              <input type="file" accept="image/*" ref={bgInputRef} onChange={handleBackgroundUpload} className="hidden" />
              <button onClick={() => bgInputRef.current?.click()} className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-2xl p-4 font-black transition-colors">
                背景画像を設定する
              </button>
            </div>

            {/* ADD */}
            <div className="bg-zinc-900 rounded-3xl p-5 space-y-4">
              <h2 className="text-3xl font-black">レイヤー追加</h2>
              <input type="file" accept="image/*" ref={layerInputRef} onChange={handleAddLayer} className="hidden" />
              <button onClick={() => layerInputRef.current?.click()} className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-2xl p-4 font-black transition-colors">
                画像をアップロード
              </button>

              <button onClick={addTextLayer} className="w-full bg-cyan-600 hover:bg-cyan-500 rounded-2xl p-4 font-black transition-colors">
                テキスト追加
              </button>

              <button onClick={addShapeLayer} className="w-full bg-emerald-600 hover:bg-emerald-500 rounded-2xl p-4 font-black transition-colors">
                図形（背景座布団）追加
              </button>

              {/* --- ジョブアイコンと漢字アイコンのパネル --- */}
              <div className="pt-4 border-t border-zinc-700 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">ジョブアイコン</h3>
                  <div className="grid grid-cols-6 gap-1 max-h-32 overflow-y-auto bg-zinc-800 p-2 rounded-xl">
                    {jobDotList.map((job) => (
                      <button key={job.src} onClick={() => addIconLayer(job.src, job.name)} className="hover:bg-zinc-600 rounded p-0.5">
                        <img src={job.src} alt={job.name} className="w-full" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">漢字アイコン</h3>
                    {/* スタイルを直接指定して表示を強制します */}
                    <input
                      type="color"
                      value={kanjiColor}
                      onChange={(e) => handleKanjiColorChange(e.target.value)}
                      style={{
                        width: '32px',
                        height: '32px',
                        cursor: 'pointer',
                        border: '1px solid #555',
                        borderRadius: '4px',
                        backgroundColor: 'transparent'
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-1 max-h-32 overflow-y-auto bg-zinc-800 p-2 rounded-xl">
                    {jobKanjiList.map((job) => (
                      <button
                        key={job.src}
                        onClick={() => addIconLayer(job.src, job.name)}
                        className="hover:bg-zinc-600 rounded p-0.5"
                      >
                        <img src={job.src} alt={job.name} className="w-full" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* GRID */}
            <div className="bg-zinc-900 rounded-3xl p-5 space-y-4">
              <label className="flex items-center gap-3 font-bold cursor-pointer">
                <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} />
                グリッド表示
              </label>

              {showGrid && (
                <div className="space-y-4 border-t border-zinc-800 pt-3">
                  <div className="flex justify-between items-center text-sm font-bold text-zinc-400">
                    <span>グリッドのカラー</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase">{gridColor}</span>
                      <input type="color" value={gridColor} onChange={(e) => setGridColor(e.target.value)} className="w-8 h-8 rounded-lg border-0 cursor-pointer bg-transparent" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-zinc-400">
                      <span>グリッドの濃さ</span>
                      <span>{Math.round(gridOpacity * 100)}%</span>
                    </div>
                    <input type="range" min="0.05" max="1" step="0.01" value={gridOpacity} onChange={(e) => setGridOpacity(Number(e.target.value))} className="w-full accent-cyan-500" />
                  </div>
                </div>
              )}
            </div>

            {/* EXPORT */}
            <button onClick={generateImage} className="w-full bg-purple-600 hover:bg-purple-500 rounded-3xl p-5 text-2xl font-black transition-colors">
              PNG生成
            </button>
          </div>

          {/* LAYER PANEL */}
          <div className="bg-zinc-900 rounded-3xl p-5 space-y-5">
            <h2 className="text-4xl font-black">レイヤー</h2>

            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="layers-list">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-3 max-h-[260px] overflow-auto pr-1"
                  >
                    {listOrderedLayers.map((layer, index) => (
                      <Draggable key={layer.id} draggableId={layer.id} index={index}>
                        {(dragProvided, snapshot) => (
                          <div
                            ref={dragProvided.innerRef}
                            {...dragProvided.draggableProps}
                            onClick={() => setSelectedLayerId(layer.id)}
                            className={`rounded-2xl border p-4 cursor-pointer transition-all ${selectedLayerId === layer.id
                              ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                              : 'border-zinc-700 bg-zinc-800 hover:border-zinc-600'
                              } ${snapshot.isDragging ? 'opacity-75 scale-[0.98] border-dashed border-cyan-500' : ''}`}
                          >
                            <div className="flex justify-between items-start gap-3">
                              <div {...dragProvided.dragHandleProps} className="text-zinc-500 hover:text-zinc-300 px-1 py-2 cursor-grab active:cursor-grabbing text-lg select-none">
                                ☰
                              </div>

                              <div className="flex-1 min-w-0">
                                <p className="font-black truncate text-sm">{layer.name}</p>
                                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider mt-0.5">{layer.type}</p>
                              </div>

                              <div className="flex gap-1.5 self-center">
                                <button type="button" onClick={(e) => { e.stopPropagation(); updateLayer(layer.id, { visible: !layer.visible }) }} className="px-2 py-1 bg-zinc-700 hover:bg-zinc-600 rounded text-[11px] font-bold">
                                  {layer.visible ? '表示' : '隠す'}
                                </button>
                                <button type="button" onClick={(e) => { e.stopPropagation(); updateLayer(layer.id, { locked: !layer.locked }) }} className="px-2 py-1 bg-zinc-700 hover:bg-zinc-600 rounded text-[11px] font-bold">
                                  {layer.locked ? '解' : '鍵'}
                                </button>
                                <button type="button" onClick={(e) => { e.stopPropagation(); removeLayer(layer.id) }} className="px-2 py-1 bg-red-950/60 hover:bg-red-900 border border-red-800/40 rounded text-[11px] font-bold text-red-400">
                                  消
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            {/* EDIT */}
          {selectedLayer && (
            <div className="border-t border-zinc-700 pt-4 space-y-4 max-h-[540px] overflow-auto pr-1" onMouseDown={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-black text-cyan-400">レイヤー編集</h3>

              {/* 座標とサイズ設定（全タイプ共通） */}
              <div className="grid grid-cols-2 gap-3 bg-zinc-950/40 p-3 rounded-2xl border border-zinc-800">
                {/* (省略: 既存のX, Y, W, H入力欄) */}
                <div>
                  <p className="mb-1 text-[11px] font-bold text-zinc-400">位置 (X)</p>
                  <input type="number" value={Math.round(selectedLayer.x)} onChange={(e) => updateLayer(selectedLayer.id, { x: Number(e.target.value) || 0 })} className="w-full bg-zinc-800 rounded-xl px-2.5 py-1.5 text-sm text-white font-bold border border-zinc-700" />
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-bold text-zinc-400">位置 (Y)</p>
                  <input type="number" value={Math.round(selectedLayer.y)} onChange={(e) => updateLayer(selectedLayer.id, { y: Number(e.target.value) || 0 })} className="w-full bg-zinc-800 rounded-xl px-2.5 py-1.5 text-sm text-white font-bold border border-zinc-700" />
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-bold text-zinc-400">横幅 (W)</p>
                  <input type="number" value={Math.round(selectedLayer.width)} onChange={(e) => updateLayer(selectedLayer.id, { width: Number(e.target.value) || 1 })} className="w-full bg-zinc-800 rounded-xl px-2.5 py-1.5 text-sm text-white font-bold border border-zinc-700" />
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-bold text-zinc-400">高さ (H)</p>
                  <input type="number" value={Math.round(selectedLayer.height)} onChange={(e) => updateLayer(selectedLayer.id, { height: Number(e.target.value) || 1 })} className="w-full bg-zinc-800 rounded-xl px-2.5 py-1.5 text-sm text-white font-bold border border-zinc-700" />
                </div>
              </div>

              {/* 共通設定（不透明度・回転） */}
              <div>
                <p className="mb-1 text-xs font-bold text-zinc-400">不透明度</p>
                <input type="range" min="0" max="1" step="0.01" value={selectedLayer.opacity} onChange={(e) => updateLayer(selectedLayer.id, { opacity: Number(e.target.value) })} className="w-full accent-cyan-500" />
              </div>
              <div>
                <p className="mb-1 text-xs font-bold text-zinc-400">回転角度</p>
                <input type="range" min="-180" max="180" value={selectedLayer.rotation} onChange={(e) => updateLayer(selectedLayer.id, { rotation: Number(e.target.value) })} className="w-full" />
              </div>

              {/* 図形・画像の設定 */}
              {(selectedLayer.type === 'image' || selectedLayer.type === 'shape') && (
                <div className="space-y-4 bg-zinc-950/40 p-4 rounded-2xl border border-zinc-800">
                  <h3 className="font-bold text-lg border-b border-zinc-700 pb-2">{selectedLayer.type === 'image' ? '画像' : '図形'}設定</h3>
                  <div>
                    <label className="block text-sm mb-1 text-zinc-400">色・カラー</label>
                    <input
                      type="color"
                      value={selectedLayer.shapeColor || '#000000'}
                      onChange={(e) => updateLayer(selectedLayer.id, { shapeColor: e.target.value })}
                      className="w-full h-10 cursor-pointer bg-transparent border-0"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-zinc-400 mb-1">
                      <span>角の丸み（角丸）</span>
                      <span>{selectedLayer.borderRadius || 0}px</span>
                    </div>
                    <input type="range" min="0" max="150" step="1" value={selectedLayer.borderRadius || 0} onChange={(e) => updateLayer(selectedLayer.id, { borderRadius: Number(e.target.value) })} className="w-full accent-cyan-500" />
                  </div>
                </div>
              )}

              {/* テキスト用編集 */}
              {selectedLayer.type === 'text' && (
                <div 
                  className="space-y-4" 
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <textarea 
                    value={selectedLayer.text || ''} 
                    onChange={(e) => updateLayer(selectedLayer.id, { text: e.target.value })} 
                    className="w-full h-20 bg-zinc-800 rounded-2xl p-3 text-sm focus:outline-none" 
                  />

                  {/* サイズ・太さ・フォント */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-bold text-zinc-400 mb-1">サイズ ({selectedLayer.fontSize || 16}px)</p>
                      <input type="range" min="8" max="200" value={selectedLayer.fontSize || 16} onChange={(e) => updateLayer(selectedLayer.id, { fontSize: Number(e.target.value) })} className="w-full accent-cyan-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-400 mb-1">太さ</p>
                      <select value={selectedLayer.fontWeight || '400'} onChange={(e) => updateLayer(selectedLayer.id, { fontWeight: e.target.value })} className="w-full bg-zinc-800 rounded-xl p-2 text-sm border border-zinc-700">
                        <option value="400">標準</option>
                        <option value="600">中太</option>
                        <option value="700">太字</option>
                        <option value="900">極太</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-zinc-400 mb-1">フォント</p>
                    <select value={selectedLayer.fontFamily || ''} onChange={(e) => updateLayer(selectedLayer.id, { fontFamily: e.target.value })} className="w-full bg-zinc-800 rounded-xl p-2 text-sm border border-zinc-700">
                      {fonts.map(font => <option key={font.value} value={font.value}>{font.name}</option>)}
                    </select>
                  </div>

                  {/* カラー・発光 */}
                  <div className="space-y-3 bg-zinc-950/40 p-3 rounded-2xl border border-zinc-800">
                    <div className="flex justify-between items-center text-xs font-bold text-zinc-400">
                      <span>文字の色</span>
                      <input type="color" value={selectedLayer.textColor || '#ffffff'} onChange={(e) => updateLayer(selectedLayer.id, { textColor: e.target.value })} className="w-8 h-8 rounded-lg cursor-pointer" />
                    </div>
                    <div className="flex justify-between items-center text-xs font-bold text-zinc-400">
                      <span>枠線の色</span>
                      <input type="color" value={selectedLayer.strokeColor || '#000000'} onChange={(e) => updateLayer(selectedLayer.id, { strokeColor: e.target.value })} className="w-8 h-8 rounded-lg cursor-pointer" />
                    </div>
                    <label className="flex justify-between items-center text-xs font-bold text-zinc-400 cursor-pointer">
                      <span>テキスト発光</span>
                      <input type="checkbox" checked={!!selectedLayer.glowEnabled} onChange={(e) => updateLayer(selectedLayer.id, { glowEnabled: e.target.checked })} className="w-5 h-5 accent-cyan-500" />
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}

          </div>

        {/* CANVAS (PREVIEW) */}
        <div className="bg-zinc-900 rounded-3xl p-5 overflow-auto">
          <div className="flex items-center gap-4 mb-5">
            <p className="font-black whitespace-nowrap">プレビュー倍率</p>
            <input type="range" min="0.1" max="1" step="0.01" value={previewScale} onChange={(e) => setPreviewScale(Number(e.target.value))} className="w-full" />
          </div>

          <div className="flex justify-center items-start overflow-auto">
            <div style={{ width: canvasWidth * previewScale, height: canvasHeight * previewScale }}>
              <div style={{ width: canvasWidth, height: canvasHeight, transform: `scale(${previewScale})`, transformOrigin: 'top left' }}>
                <div ref={captureRef} className={`relative rounded-[30px] border border-white/20 bg-zinc-950 transition-all ${selectedLayerId ? 'overflow-visible' : 'overflow-hidden'}`} style={{ width: canvasWidth, height: canvasHeight }}>

                  {/* LAYERS */}
                  {sortedLayers.map((layer) => (
                    <Rnd
                      key={`${layer.id}-${layer.zIndex}`}
                      disableDragging={layer.locked}
                      // ↓ここを修正（enableResizingをオブジェクト形式に変更）
                      enableResizing={!layer.locked ? {
                        top: true, right: true, bottom: true, left: true,
                        topRight: true, bottomRight: true, bottomLeft: true, topLeft: true
                      } : false}
                      dragGrid={[1, 1]}
                      resizeGrid={[1, 1]}
                      scale={previewScale}
                      position={{ x: layer.x, y: layer.y }}
                      size={{ width: layer.width, height: layer.height }}
                      onMouseDown={() => setSelectedLayerId(layer.id)}
                      onDragStop={(e, d) => updateLayer(layer.id, { x: d.x, y: d.y })}
                      onResizeStop={(e, dir, ref, delta, pos) => {
                        updateLayer(layer.id, {
                          width: parseFloat(ref.style.width),
                          height: parseFloat(ref.style.height),
                          x: pos.x,
                          y: pos.y,
                        })
                      }}
                      style={{
                        zIndex: layer.zIndex,
                        opacity: layer.visible ? layer.opacity : 0,
                      }}
                    >
                      <div className="relative w-full h-full">
                        <LayerContent layer={layer} />
                        {selectedLayerId === layer.id && (
                          <div className="absolute inset-0 border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)] pointer-events-none" />
                        )}
                      </div>
                    </Rnd>
                  ))}

                  {/* GRID */}
                  {showGrid && (
                    <div
                      id="grid-overlay"
                      className="absolute inset-0 pointer-events-none z-[9999]"
                      style={{
                        backgroundImage: `
                            linear-gradient(to right, ${hexToRgbaStr(gridColor, gridOpacity)} 1px, transparent 1px),
                            linear-gradient(to bottom, ${hexToRgbaStr(gridColor, gridOpacity)} 1px, transparent 1px)
                          `,
                        backgroundSize: '50px 50px',
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
    </main >
  )
}