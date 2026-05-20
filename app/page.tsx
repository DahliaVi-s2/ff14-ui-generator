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
          OBS配信、SNS投稿、プロフィール画像、
          FC募集、コミュニティ共有などに利用できます。
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <Link
            href="/generator"
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

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-6 justify-center text-zinc-400">

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
            href="https://x.com/あなたのID"
            target="_blank"
          >
            お問い合わせ
          </a>

        </div>

      </footer>

    </main>
  )
}