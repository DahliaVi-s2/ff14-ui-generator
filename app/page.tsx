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

          <a
  href="/card"
  className="
    inline-block
    bg-purple-600
    hover:bg-purple-500
    transition
    px-6
    py-4
    rounded-2xl
    font-bold
    text-lg
    shadow-lg
  "
>
  キャラクターカード生成
</a>

<a
  href="/generator"
  className="
    inline-block
    bg-blue-600
    hover:bg-blue-500
    transition
    px-6
    py-4
    rounded-2xl
    font-bold
    text-lg
    shadow-lg
  "
>
  ジョブレベル生成
</a>

<a
  href="/nameplate"
  className="
    inline-block
    bg-emerald-600
    hover:bg-emerald-500
    transition
    px-6
    py-4
    rounded-2xl
    font-bold
    text-lg
    shadow-lg
  "
>
  ネームプレート生成
</a>

<a
  href="/howto"
  className="
    inline-block
    bg-zinc-700
    hover:bg-zinc-600
    transition
    px-6
    py-4
    rounded-2xl
    font-bold
    text-lg
    shadow-lg
  "
>
  使い方
</a>

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
              FINAL FANTASY XIV の
              ジョブレベル画像や
              ネームプレートを
              簡単に作成できる無料Webツールです。
            </p>

            <p>
              タンク、ヒーラー、DPS、
              ギャザラー、クラフターなど、
              FF14の全ジョブに対応しています。
            </p>

            <p>
              ドット絵アイコン、
              日本語一文字アイコンなど、
              複数のデザイン切り替えにも対応しています。
            </p>

            <p>
              作成した画像は背景透過PNGとして保存でき、
              OBS配信、SNS投稿、
              FC募集画像など幅広く利用できます。
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
              ジョブレベル生成
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              FF14の全ジョブに対応した
              レベル表示透過PNGを
              ワンクリックで生成できます。
            </p>

          </div>

          <div className="bg-zinc-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              ネームプレート生成
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              プレイヤーネーム、
              ジョブアイコン、
              データセンター情報付きの
              FF14風ネームプレートを生成できます。
            </p>

          </div>

          <div className="bg-zinc-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              透過PNG対応
            </h3>

            <p className="text-zinc-300 leading-relaxed">
              背景透過PNGとして保存できるため、
              OBS配信や動画編集にも最適です。
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

          <Link href="/nameplate">
            Nameplate
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