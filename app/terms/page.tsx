export default function TermsPage() {
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
          利用規約
        </h1>

        <div className="space-y-10 text-zinc-300 leading-relaxed">

          {/* ========================= */}
          {/* 第1条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第1条（適用）
            </h2>

            <p>
              本利用規約（以下「本規約」）は、
              当サイトが提供する
              FINAL FANTASY XIV向け画像生成サービス
              （以下「本サービス」）の利用条件を定めるものです。
            </p>

            <p className="mt-3">
              ユーザーは、
              本サービスを利用した時点で、
              本規約に同意したものとみなされます。
            </p>
          </section>

          {/* ========================= */}
          {/* 第2条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第2条（サービス内容）
            </h2>

            <p>
              本サービスは、
              FINAL FANTASY XIV向けの
              ジョブレベル透過画像を生成する
              非公式ファンメイドツールです。
            </p>

            <p className="mt-3">
              本サービスは、
              無料で提供されます。
            </p>
          </section>

          {/* ========================= */}
          {/* 第3条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第3条（禁止事項）
            </h2>

            <p>
              ユーザーは、
              本サービスの利用にあたり、
              以下の行為を行ってはなりません。
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2">

              <li>
                法令または公序良俗に違反する行為
              </li>

              <li>
                本サービスの運営を妨害する行為
              </li>

              <li>
                不正アクセス、
                サーバーへの過度な負荷、
                または攻撃行為
              </li>

              <li>
                本サービスを利用した誹謗中傷、
                差別、
                嫌がらせ行為
              </li>

              <li>
                違法または不適切な用途で
                生成画像を利用する行為
              </li>

              <li>
                自動化ツール等を利用した
                過剰アクセス行為
              </li>

            </ul>
          </section>

          {/* ========================= */}
          {/* 第4条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第4条（知的財産権）
            </h2>

            <p>
              本サービス上の
              デザイン、
              UI、
              プログラム、
              レイアウト等の著作権は、
              運営者または権利者に帰属します。
            </p>

            <p className="mt-3">
              ユーザーが入力した情報および
              本サービスにより生成された画像は、
              個人利用、
              SNS利用、
              配信利用等の範囲で自由に利用できます。
            </p>

            <p className="mt-3">
              ただし、
              商用利用、
              再配布、
              二次販売等については、
              各権利者のガイドラインおよび法令を遵守してください。
            </p>
          </section>

          {/* ========================= */}
          {/* 第5条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第5条（FINAL FANTASY XIVの著作権について）
            </h2>

            <p>
              FINAL FANTASY XIV、
              FFXIV、
              ジョブアイコン、
              ロゴ、
              ゲーム内画像、
              デザイン等の著作権および関連権利は、
              株式会社スクウェア・エニックスに帰属します。
            </p>

            <p className="mt-3">
              当サイトは、
              株式会社スクウェア・エニックスの
              非公式ファンメイドツールであり、
              同社とは一切関係ありません。
            </p>

            <p className="mt-3">
              ユーザーは、
              本サービスにより生成された画像を
              SNS投稿、
              動画配信、
              サムネイル、
              プロフィール画像等へ利用する場合、
              スクウェア・エニックスが定める
              著作物利用条件、
              ガイドライン、
              ポリシー等を確認し、
              それらを遵守するものとします。
            </p>

            <p className="mt-3">
              必要に応じて、
              コピーライト表記を行ってください。
            </p>

            <div className="mt-5 bg-zinc-800 rounded-xl p-4 text-sm leading-relaxed">

              <p>
                © SQUARE ENIX
              </p>

              <p className="mt-2">
                FINAL FANTASY XIV © SQUARE ENIX
              </p>

            </div>

            <div className="mt-5">
              <a
                href="https://support.jp.square-enix.com/rule.php?id=5381&la=0&tag=authc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                スクウェア・エニックス 著作物利用許諾条件
              </a>
            </div>

          </section>

          {/* ========================= */}
          {/* 第6条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第6条（免責事項）
            </h2>

            <p>
              本サービスは、
              可能な限り正確な情報および
              安定した動作を提供するよう努めますが、
              完全性、
              安全性、
              継続性、
              正確性を保証するものではありません。
            </p>

            <p className="mt-3">
              本サービスの利用によって発生した
              いかなる損害についても、
              運営者は責任を負いません。
            </p>

            <p className="mt-3">
              また、
              本サービスは予告なく
              内容変更、
              停止、
              終了する場合があります。
            </p>
          </section>

          {/* ========================= */}
          {/* 第7条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第7条（広告について）
            </h2>

            <p>
              当サイトでは、
              Google AdSense等の
              第三者配信広告サービスを利用する場合があります。
            </p>

            <p className="mt-3">
              広告配信事業者は、
              Cookieを使用して、
              ユーザーの興味に応じた広告を表示することがあります。
            </p>
          </section>

          {/* ========================= */}
          {/* 第8条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第8条（サービス内容の変更）
            </h2>

            <p>
              運営者は、
              ユーザーへ事前通知することなく、
              本サービスの内容変更、
              停止、
              終了を行うことがあります。
            </p>
          </section>

          {/* ========================= */}
          {/* 第9条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第9条（規約変更）
            </h2>

            <p>
              運営者は、
              必要と判断した場合、
              ユーザーへの通知なく
              本規約を変更できるものとします。
            </p>
          </section>

          {/* ========================= */}
          {/* 第10条 */}
          {/* ========================= */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              第10条（お問い合わせ）
            </h2>

            <p>
              お問い合わせは、
              X（旧Twitter）等からお願いいたします。
            </p>
          </section>

        </div>

      </div>

    </main>
  )
}