import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h1 className="text-6xl font-black mb-8">
          FF14 Job Level Generator
        </h1>

        <p className="text-zinc-300 text-2xl leading-relaxed max-w-4xl mx-auto">
          FF14のジョブレベル画像や
          ネームプレート透過PNGを
          無料で生成できるWebツールです。
          <br />
          OBS配信、SNS投稿、プロフィール画像、
          FC募集、コミュニティ共有などに利用できます。
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          <a href="/card" className="inline-block bg-purple-600 hover:bg-purple-500 transition px-6 py-4 rounded-2xl font-bold text-lg shadow-lg">
            キャラクターカード編集
          </a>

          <a href="/generator" className="inline-block bg-blue-600 hover:bg-blue-500 transition px-6 py-4 rounded-2xl font-bold text-lg shadow-lg">
            ジョブレベル生成
          </a>

          <a href="/nameplate" className="inline-block bg-emerald-600 hover:bg-emerald-500 transition px-6 py-4 rounded-2xl font-bold text-lg shadow-lg">
            ネームプレート生成
          </a>

          <a href="/howto" className="inline-block bg-zinc-700 hover:bg-zinc-600 transition px-6 py-4 rounded-2xl font-bold text-lg shadow-lg">
            使い方
          </a>

        </div>

      </section>

      {/* ... (About / Features / FAQ / Copyright はそのまま) ... */}

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-6 justify-center text-zinc-400">
          <Link href="/">トップページ</Link>
          <Link href="/card">Card Editor</Link>
          <Link href="/rare-card">Rare Card</Link> {/* ここに追加 */}
          <Link href="/generator">Generator</Link>
          <Link href="/nameplate">Nameplate</Link>
          <Link href="/about">About</Link>
          <Link href="/howto">HowTo</Link>
          <Link href="/sample">Sample</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/terms">利用規約</Link>
          <a href="https://x.com/vrc_DahliaVi" target="_blank">お問い合わせ</a>
        </div>
      </footer>

    </main>
  )
}