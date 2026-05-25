'use client'

import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function QrGeneratorPage() {
  const [url, setUrl] = useState('')
  const [qrValue, setQrValue] = useState('')

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-8">
      <div className="max-w-md mx-auto space-y-6">
        <a href="/" className="inline-block bg-zinc-800 px-4 py-2 rounded-xl font-bold hover:bg-zinc-700">← トップへ戻る</a>
        
        <h1 className="text-3xl font-black">QRコード生成</h1>
        <p className="text-zinc-400">
          Discord への招待やロードストーン、X (旧Twitter) など、<br />
          お好きなリンクを QRコード画像として生成できます。
        </p>

        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-3 border border-zinc-700"
        />

        <button
          onClick={() => setQrValue(url)}
          className="w-full bg-cyan-600 hover:bg-cyan-500 py-3 rounded-xl font-bold"
        >
          生成する
        </button>

        {qrValue && (
          <div className="flex justify-center p-6 bg-white rounded-2xl">
            <QRCodeSVG value={qrValue} size={200} />
          </div>
        )}
      </div>
    </main>
  )
}