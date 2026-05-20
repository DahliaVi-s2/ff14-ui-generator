export default function SamplePage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white p-8">

      <div className="max-w-5xl mx-auto">

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
          Sample Images
        </h1>

        <div className="grid grid-cols-2 gap-8">

          <img
            src="/samples/sample1.png"
            alt=""
            className="rounded-xl border border-zinc-700"
          />

          <img
            src="/samples/sample2.png"
            alt=""
            className="rounded-xl border border-zinc-700"
          />

        </div>

      </div>

    </main>
  )
}