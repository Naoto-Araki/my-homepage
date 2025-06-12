import React, { useState } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
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
      title: "プロジェクト1",
      description: "プロジェクト1の詳細な説明をここに記載します。\n\n具体的な成果や技術的な詳細、課題解決のプロセスなどを詳しく説明できます。",
      technologies: ["技術1", "技術2", "技術3"]
    },
    {
      title: "プロジェクト2",
      description: "プロジェクト2の詳細な説明をここに記載します。\n\n具体的な成果や技術的な詳細、課題解決のプロセスなどを詳しく説明できます。",
      technologies: ["技術1", "技術2", "技術3"]
    },
    {
      title: "プロジェクト3",
      description: "プロジェクト3の詳細な説明をここに記載します。\n\n具体的な成果や技術的な詳細、課題解決のプロセスなどを詳しく説明できます。",
      technologies: ["技術1", "技術2", "技術3"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* 自己紹介セクション */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 leading-relaxed">
            はじめまして
          </p>
        </div>
      </section>

      {/* 経歴セクション */}
      <section id="about" className="mb-12">
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
      <section id="projects" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="bg-gray-50 rounded-lg p-6 shadow-sm h-[200px] flex flex-col cursor-pointer hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm w-[calc(50%-4px)] text-center">
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

      <section id="activities" className="mb-12">
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
            <li>新木直人, 村田忠彦「合成人口データを用いた居住地割当の改良」<br />計測自動制御学会 社会システム部会 第36回研究会（オンライン，2024年9月1〜2日）</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
