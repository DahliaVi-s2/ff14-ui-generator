'use client'

import { useState } from 'react'

export default function HowToPage() {
  const [openSection, setOpenSection] = useState<string | null>('キャラクターカード編集')

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const sections = [
    {
      title: 'キャラクターカード編集',
      content: (
        <div className="space-y-4">
          <p>「FF14 Character Card Studio」へようこそ。ここでは自分だけのオリジナルキャラクターカードを作成できます。</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>レイヤーの追加:</strong> 左側のメニューから「テキスト」「図形」「画像」を追加して配置します。</li>
            <li><strong>ドラッグ＆ドロップ:</strong> キャンバス上でアイテムを自由に移動・変形できます。</li>
            <li><strong>詳細設定:</strong> レイヤーをクリックすると、色、フォント、サイズ、枠線、発光などの装飾が可能です。</li>
          </ul>
        </div>
      )
    },
    {
      title: 'ジョブレベル生成',
      content: (
        <div className="space-y-4">
          <p>各ジョブのレベルを管理・表示するための機能です。</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>1. レベルを入力:</strong> 各ジョブのレベル欄へ数値を入力します。</li>
            <li><strong>2. 非表示設定:</strong> 表示したくないジョブは「非表示」スイッチをONにします。</li>
            <li><strong>3. PNG生成:</strong> 「透過PNG生成」ボタンを押すと、背景が透明な画像として保存されます。</li>
          </ul>
        </div>
      )
    },
    {
      title: 'ネームプレート生成',
      content: (
        <p>FF14のネームプレート風の画像を生成します。名前を入力し、ジョブアイコンと組み合わせて、好みのカラーパターンを選択して出力してください。</p>
      )
    }
  ]

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-block mb-8 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl font-bold transition">
          ← トップへ戻る
        </a>

        <h1 className="text-4xl font-black mb-8">How To Use</h1>

        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.title} className="border border-zinc-700 rounded-2xl overflow-hidden bg-zinc-800/50">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-zinc-800 transition"
              >
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                <span className="text-zinc-400 font-bold text-xl">
                  {openSection === section.title ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openSection === section.title ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 p-0'
                }`}
              >
                <div className="text-zinc-300">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}