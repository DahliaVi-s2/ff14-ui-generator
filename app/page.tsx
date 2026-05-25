import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
          FF14 Character & Job <br className="hidden md:block" /> Tools Studio
        </h1>
        <p className="text-zinc-300 text-xl leading-relaxed">
          FF14プレイヤーの活動をサポートする無料Webツール集。<br />
          ブラウザ上で簡単にプロフ画像やネームプレートを生成・編集できます。
        </p>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          <Link href="/card" className="bg-purple-600 hover:bg-purple-500 p-8 rounded-3xl text-left transition transform hover:scale-[1.02]">
            <h3 className="text-2xl font-black mb-2">キャラクターカード編集</h3>
            <p className="text-sm text-purple-100">レイヤー編集で自由なデザインを作成。</p>
          </Link>

          <Link href="/generator" className="bg-blue-600 hover:bg-blue-500 p-8 rounded-3xl text-left transition transform hover:scale-[1.02]">
            <h3 className="text-2xl font-black mb-2">ジョブレベル生成</h3>
            <p className="text-sm text-blue-100">現在のジョブレベルを素早く画像化。</p>
          </Link>

          <Link href="/nameplate" className="bg-emerald-600 hover:bg-emerald-500 p-8 rounded-3xl text-left transition transform hover:scale-[1.02]">
            <h3 className="text-2xl font-black mb-2">ネームプレート生成</h3>
            <p className="text-sm text-emerald-100">SNSやコミュニティ用のロゴを作成。</p>
          </Link>

          <Link href="/qr-generator" className="bg-orange-600 hover:bg-orange-500 p-8 rounded-3xl text-left transition transform hover:scale-[1.02]">
            <h3 className="text-2xl font-black mb-2">QRコード生成</h3>
            <p className="text-sm text-orange-100">URLから専用QRコードを即座に作成。</p>
          </Link>

          <Link href="/howto" className="md:col-span-2 bg-zinc-700 hover:bg-zinc-600 p-8 rounded-3xl text-left transition transform hover:scale-[1.02]">
            <h3 className="text-2xl font-black mb-2">使い方ガイド</h3>
            <p className="text-sm text-zinc-300">各ツールの詳細な使い方を解説しています。</p>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-zinc-800">
        <h2 className="text-3xl font-black mb-6">当サイトの目的</h2>
        <div className="text-zinc-400 space-y-4">
          <p>
            当サイトは、ファイナルファンタジーXIV（FF14）を楽しむプレイヤーの皆様のコミュニティ活動を支援するために制作されました。
          </p>
          <p>
            SNSでの自己紹介、Discordサーバーのアイコン、配信活動などで必要となる画像素材を、専門的な画像編集ソフトを使わずにブラウザだけで作成できることを目的としています。
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-zinc-800">
        <h2 className="text-3xl font-black mb-6">よくある質問</h2>
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-lg text-white mb-2">Q. 利用料金はかかりますか？</h4>
            <p className="text-zinc-400">A. すべてのツールは完全に無料でご利用いただけます。登録不要で即座に生成が可能です。</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-white mb-2">Q. 生成した画像は商用利用できますか？</h4>
            <p className="text-zinc-400">A. FF14の「著作物利用許諾条件」に基づいた範囲内で、SNSや配信活動等にご自由にお使いください。</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-4 justify-center text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white">トップページ</Link>
            <Link href="/card" className="hover:text-white">Card Editor</Link>
            <Link href="/rare-card" className="hover:text-white">Rare Card</Link>
            <Link href="/generator" className="hover:text-white">Generator</Link>
            <Link href="/nameplate" className="hover:text-white">Nameplate</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/howto" className="hover:text-white">HowTo</Link>
            <Link href="/sample" className="hover:text-white">Sample</Link>
            <Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-white">利用規約</Link>
            <a href="https://x.com/vrc_DahliaVi" target="_blank" rel="noopener noreferrer" className="hover:text-white">お問い合わせ</a>
          </div>
          <div className="text-center text-zinc-600 text-xs">
            <p>© 2026 FF14 Tools Studio. 本サイトは株式会社スクウェア・エニックスとは関係ありません。</p>
            <p className="mt-2">本サイトで利用している画像素材等はFF14著作物利用許諾条件に従って使用しています。</p>
          </div>
        </div>
      </footer>
    </main>
  )
}