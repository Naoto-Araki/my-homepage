import React, { useState } from 'react';
import portfolioImg from '../images/projects/portfolioImg.png'
import snapnoteclipImg from '../images/projects/snapnoteclipImg.png'
import syuukatsudeadlineImg from '../images/projects/syuukatsudeadlineImg.png'
import syuukatsudeadlineImg_2 from '../images/projects/syuukatsudeadlineImg_2.png'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[100vh] overflow-y-auto">
        <div className="p-8 flex flex-col md:flex-row gap-8">
          {/* ───────── 左：画像 */}
          <div className="md:w-1/3 flex-shrink-0 flex flex-col gap-8 justify-center">
            {project.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full h-auto object-contain rounded-lg"
              />
            ))}
          </div>
          {/* ───────── 右：テキスト */}
          <div className="flex-1 space-y-6 text-left">
            {/* タイトル＋閉じる */}
            <div className="flex justify-between items-start">
              <h3 className="text-3xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* 説明文 */}
            <p 
              className="text-gray-600 text-lg leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            {/* 技術タグ */}
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-base whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio",
      description: "このポートフォリオサイトは、私の経歴や制作物を紹介することを目的に作成しました。\n\nフロントエンドには React を採用し、スタイリングには Tailwind CSS、ホスティングは Vercel を使用して公開しています。\n\n リポジトリは<a href='https://github.com/Naoto-Araki/my-homepage' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>こちら</a>",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      images: [portfolioImg]
    },
    {
      title: "Snap Note Clip",
      description: "ページの指定範囲を切り取って記録し、メモ付きのノートを作成できる Chrome 拡張機能です。\n主な機能は：\n・開いているタブのスクリーンショットの取得\n・任意のメモの入力・保存\n・サイドバーでのスクリーンショット・メモの一覧表示\n・スクリーンショット画像の拡大表示\n・スクリーンショットをクリックして該当タブへのジャンプ\n\n リポジトリは<a href='https://github.com/MRyutaro/SnapNoteClip' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>こちら</a>\n\n 公開先のChrome拡張機能は<a href='https://chromewebstore.google.com/detail/snap-note-clip/jgplanmhjkhipfenhmcnklafelgfpdge?hl=ja&utm_source=ext_sidebar' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>こちら</a>",
      technologies: ["JavaScript", "Chrome Extension", "HTML/CSS"],
      images: [snapnoteclipImg]
    },
    {
      title: "就活-deadline",
      description: "就職活動で増え続ける企業エントリーや説明会応募の締切を、ワンクリックで手軽に管理できる Chrome 拡張機能です。ブラウザ上で締切を登録・閲覧・編集・削除し、Google カレンダーと同期できます。\n\n主な機能：\n・ワンクリック締切登録（タイトル、日付、URL、企業名候補、faviconの自動取得）\n・締切一覧表示と該当ページへのワンクリックアクセス\n・編集・削除機能\n・Google カレンダーとの同期（OAuth2認証）\n\n リポジトリは<a href='https://github.com/Naoto-Araki/syuukatsu-deadline' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>こちら</a>",
      technologies: ["JavaScript", "Chrome Extension",  "Google Calendar API", "OAuth2", "HTML/CSS"],
      images: [syuukatsudeadlineImg, syuukatsudeadlineImg_2]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* 自己紹介セクション */}
      <section className="mb-12 hover:shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 leading-relaxed">
            はじめまして！<br/>
            大阪大学大学院情報科学研究科 M1 Naoto-Araki です！<br/>
            研究やエンジニア以外にも、<br/>
            水泳、ゴルフ、釣り、音楽、ラーメン巡りなど、<br/>多趣味で色んなことをやってます！<br/>
            どうぞよろしくお願いします！
          </p>
        </div>
      </section>

      {/* 経歴セクション */}
      <section id="about" className="mb-12 hover:shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Abou me</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* 経歴 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Background</h3>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-gray-500">2021年4月 - 2025年3月</span>
                  <span className="text-gray-600 mt-1">大阪大学　工学部電子情報工学科　卒業</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-500">2025年4月 - 現在</span>
                  <span className="text-gray-600 mt-1">大阪大学　情報科学研究科　在学</span>
                </li>
                {/* 必要に応じて追加 */}
              </ul>
            </div>

            {/* 長期インターン */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Work
              </h3>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-gray-500">2024年10月 - 現在</span>
                  <div>
                    <span className="text-gray-600 font-medium">シックスワン株式会社</span>
                    <p className="text-gray-500 text-sm">エンジニア</p>
                  </div>
                </li>
                {/* 必要に応じて追加 */}
              </ul>
            </div>

            {/* スキル */}
            {/* <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">スキル</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">スキル1</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">スキル2</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">スキル3</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Projectsセクション */}
      <section id="projects" className="mb-12 hover:shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="bg-gray-50 rounded-lg p-6 shadow-sm h-[200px] flex flex-col justify-center cursor-pointer hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{project.title}</h3>
                <div className="flex flex-col gap-2 items-center">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm w-[150px] text-center whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* モーダル */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />

      <section id="activities" className="mb-12 hover:shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Activities</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">ハッカソン</h3>
          <ul className="text-gray-600 leading-relaxed">
            <li>技育CAMP2024 ハッカソン Vol.22（2025年2月）優秀賞</li>
          </ul>
          <br />
          <h3 className="text-xl font-semibold text-gray-700 mb-3">学会発表</h3>
          <ul className="text-gray-600 leading-relaxed">
            <li>新木直人, 村田忠彦「PLATEAUの建築物属性と国勢調査の住居・居住地統計を考慮した<br />合成世帯割当て手法」(査読付き)<br />計測自動制御学会 社会システム部会 第37回研究会（沖縄県石垣市，2025年3月13〜15日）</li>
            <br />
            <li>新木直人, 村田忠彦「合成人口データを用いた居住地割当の改良」<br />計測自動制御学会 社会システム部会 第36回研究会（オンライン，2024年9月1〜2日）</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
