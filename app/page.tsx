'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h1 className="text-5xl font-black mb-6">
          FF14 Job Level Generator
        </h1>

        <p className="text-zinc-300 text-xl leading-relaxed max-w-3xl mx-auto">
          FF14のジョブレベル透過画像を
          無料で生成できるWebツールです。
          <br />
          SNS投稿、プロフィール画像などに利用できます。
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <Link
  href="/"
  className="
    bg-blue-500
    hover:bg-blue-400
    px-8
    py-4
    rounded-2xl
    font-bold
    text-lg
    transition
  "
>
  ジェネレーターを使う
</Link>

          <Link
            href="/howto"
            className="
              bg-zinc-700
              hover:bg-zinc-600
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition
            "
          >
            使い方を見る
          </Link>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-black mb-10 text-center">
          主な機能
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">
              透過PNG生成
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              背景透過PNGをワンクリックで生成。
            
            </p>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">
              ジョブ別表示
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              タンク、ヒーラー、DPS、
              ギャザクラなどカテゴリ別に
              表示・出力できます。
            </p>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">
              非表示機能
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              不要なジョブを非表示にし、
              必要なジョブのみ画像化できます。
            </p>
          </div>

        </div>

      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-black mb-8">
          このサイトについて
        </h2>

        <div className="space-y-6 text-zinc-300 leading-relaxed">

          <p>
            FF14 Job Level Generator は、
            FINAL FANTASY XIV のジョブレベル画像を
            簡単に作成できる無料Webツールです。
          </p>

          <p>
            レベル入力、カテゴリ表示、
            非表示設定など、
            柔軟なカスタマイズに対応しています。
          </p>

          <p>
            SNS投稿ユーザー向けに
            見やすいジョブUIを
            手軽に作成できることを目的としています。
          </p>

        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-black mb-8">
          よくある質問
        </h2>

        <div className="space-y-6">

          <div className="bg-zinc-800 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">
              無料で利用できますか？
            </h3>

            <p className="text-zinc-300">
              はい。すべて無料で利用できます。
            </p>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">
              商用利用は可能ですか？
            </h3>

            <p className="text-zinc-300">
              FF14の権利表記および
              スクウェア・エニックスの
              ガイドライン遵守を前提として利用可能です。
            </p>
          </div>

          <div className="bg-zinc-800 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">
              スマホでも使えますか？
            </h3>

            <p className="text-zinc-300">
              PC・スマートフォンの両方に対応しています。
            </p>
          </div>

        </div>

      </section>

      {/* Copyright */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="bg-zinc-800 rounded-2xl p-6 text-sm text-zinc-400 leading-relaxed">

          <p className="mb-4">
            FINAL FANTASY XIV © SQUARE ENIX
          </p>

          <p className="mb-4">
            記載されている会社名・製品名・システム名などは、
            各社の商標または登録商標です。
          </p>

          <p>
            FF14関連画像をSNS等へ投稿する際は、
            スクウェア・エニックスの
            著作物利用条件およびガイドラインを
            ご確認ください。
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-6 justify-center text-zinc-400">

          <Link href="/">
            トップページ
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/howto">
            HowTo
          </Link>

          <Link href="/sample">
            サンプル画像
          </Link>

          <Link href="/privacy">
            プライバシーポリシー
          </Link>

          <Link href="/terms">
            利用規約
          </Link>

          <a
            href="https://x.com/vrc_DahliaVi"
            target="_blank"
          >
            お問い合わせ
          </a>

        </div>

      </footer>

    </main>
  )
}