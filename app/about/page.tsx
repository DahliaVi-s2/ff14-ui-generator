export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white p-8">

      <div className="max-w-4xl mx-auto">

        <a
          href="/"
          className="
            inline-block
            mb-8
            bg-zinc-800
            hover:bg-zinc-700
            px-4
            py-2
            rounded-xl
            font-bold
          "
        >
          ← トップへ戻る
        </a>

        <h1 className="text-4xl font-black mb-8">
          About
        </h1>

        <div className="space-y-6 text-zinc-300 leading-relaxed">

          <p>
            FF14 Job Level Generator は、
            FINAL FANTASY XIV向けの
            ジョブレベル透過PNG画像を
            無料で生成できるWebツールです。
          </p>

          <p>
            OBS配信、SNS投稿、
            プロフィール画像、
            コミュニティ共有などに
            利用できます。
          </p>

          <p>
            ジョブ別表示、
            ロール別表示、
            非表示設定など、
            柔軟なカスタマイズに対応しています。
          </p>

          <p>
            このサイトは
            FINAL FANTASY XIV の
            非公式ファンメイドツールです。
          </p>

        </div>

      </div>

    </main>
  )
}