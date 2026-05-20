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
          FF14のジョブレベル透過画像を
          無料で生成できるWebツールです。
          <br />
          SNS投稿、プロフィール画像共有などに利用できます。
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          <Link
            href="/generator"
            className="
              bg-blue-500
              hover:bg-blue-400
              px-10
              py-5
              rounded-2xl
              font-bold
              text-xl
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
              px-10
              py-5
              rounded-2xl
              font-bold
              text-xl
              transition
            "
          >
            使い方を見る
          </Link>

        </div>

      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-zinc-800 rounded-3xl p-10">

          <h2 className="text-4xl font-black mb-8">
            このサイトについて
          </h2>

          <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">

            <p>
              FF14 Job Level Generator は、
              FINAL FANTASY XIV のジョブレベル画像を
              簡単に作成できる無料Webツールです。
            </p>

            <p>
              タンク、ヒーラー、DPS、
              ギャザラー、クラフターなど、
              FF14の全ジョブに対応しています。
            </p>

            <p>
              ジョブ別表示、
              ロール別表示、
              非表示設定など、
              柔軟なカスタマイズが可能です。
            </p>

            <p>
              作成した画像は背景透過PNGとして保存でき、SNS投稿など幅広く利用できます。
            </p>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-black mb-10 text-center">
          主な機能
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              透過PNG生成
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              背景透過PNGをワンクリックで生成。
              プロフィール画像作成やキャラクターカード作成にご利用いただけます。
            </p>

          </div>

          <div className="bg-zinc-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              ロール別表示
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              TANK、HEALER、DPS、
              CRAFTER、GATHERERなど、
              カテゴリ別出力に対応しています。
            </p>

          </div>

          <div className="bg-zinc-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              非表示機能
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              不要なジョブを非表示にし、
              必要なジョブのみ画像化できます。
            </p>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-black mb-10 text-center">
          よくある質問
        </h2>

        <div className="space-y-6">

          <div className="bg-zinc-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              無料で使えますか？
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              はい。すべて無料で利用できます。
            </p>

          </div>

          <div className="bg-zinc-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              スマホでも利用できますか？
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              PC・スマートフォンの両方に対応しています。
            </p>

          </div>

          <div className="bg-zinc-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              OBS配信に利用できますか？
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              はい。透過PNGとして保存できるため、
              OBSオーバーレイ素材として利用可能です。
            </p>

          </div>

        </div>

      </section>

      {/* Copyright */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="bg-zinc-800 rounded-2xl p-8 text-sm text-zinc-400 leading-relaxed">

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
      <footer className="border-t border-zinc-800 mt-20">

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-6 justify-center text-zinc-400">

          <Link href="/">
            トップページ
          </Link>

          <Link href="/generator">
            Generator
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/howto">
            HowTo
          </Link>

          <Link href="/sample">
            Sample
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