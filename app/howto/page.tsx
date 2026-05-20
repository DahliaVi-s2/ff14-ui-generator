export default function HowToPage() {
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
          How To Use
        </h1>

        <div className="space-y-8 text-zinc-300">

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              1. レベルを入力
            </h2>

            <p>
              各ジョブのレベル欄へ
              数字を入力します。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              2. 非表示設定
            </h2>

            <p>
              表示したくないジョブは
              「非表示」をONにしてください。
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              3. PNG生成
            </h2>

            <p>
              「透過PNG生成」ボタンを押すと、
              背景透過画像が自動生成されます。
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}