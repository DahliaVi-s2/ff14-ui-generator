export default function PrivacyPage() {
  return (
<main className="min-h-screen bg-zinc-900 text-white p-8">

  <div className="max-w-4xl mx-auto">

    <div className="mb-8">
      <a
        href="/"
        className="
          inline-flex
          items-center
          gap-2
          bg-zinc-800
          hover:bg-zinc-700
          transition
          px-4
          py-2
          rounded-xl
          font-bold
          text-white
        "
      >
        ← トップへ戻る
      </a>
    </div>

        <h1 className="text-4xl font-black mb-8">
          プライバシーポリシー
        </h1>

        <div className="space-y-8 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              広告について
            </h2>

            <p>
              当サイトでは、第三者配信の広告サービス
              （Google AdSense）を利用しています。
            </p>

            <p>
              広告配信事業者は、
              ユーザーの興味に応じた広告を表示するために
              Cookieを使用することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              アクセス解析について
            </h2>

            <p>
              当サイトでは、
              サイト改善のためアクセス解析ツールを利用する場合があります。
            </p>

            <p>
              解析データは匿名で収集されており、
              個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              免責事項
            </h2>

            <p>
              当サイトの情報によって発生した損害等について、
              一切の責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              お問い合わせ
            </h2>

            <p>
              お問い合わせはX（旧Twitter）DM等からお願いいたします。
            </p>
          </section>

        </div>

      </div>

    </main>
  )
}